// custom events to be added to <dialog>
const dialogClosingEvent = new Event('closing')
const dialogClosedEvent  = new Event('closed')
const dialogOpeningEvent = new Event('opening')
const dialogOpenedEvent  = new Event('opened')
const dialogRemovedEvent = new Event('removed')

// track opening
const dialogAttrObserver = new MutationObserver((mutations, observer) => {
  mutations.forEach(async mutation => {
    if (mutation.attributeName === 'open') {
      const dialog = mutation.target as HTMLDialogElement;

      const isOpen = dialog.hasAttribute('open')
      if (!isOpen) return

      dialog.removeAttribute('inert')

      // set focus
      const focusTarget = dialog.querySelector('[autofocus]') as HTMLDialogElement;
      focusTarget
        ? focusTarget?.focus()
        : dialog?.querySelector('button')?.focus()

      dialog.dispatchEvent(dialogOpeningEvent)
      await animationsComplete(dialog)
      dialog.dispatchEvent(dialogOpenedEvent)
    }
  })
})

// track deletion
const dialogDeleteObserver = new MutationObserver((mutations, observer) => {
  mutations.forEach(mutation => {
    mutation.removedNodes.forEach(removedNode => {
      if (removedNode.nodeName === 'DIALOG') {
        removedNode.removeEventListener('click', lightDismiss)
        removedNode.removeEventListener('close', dialogClose)
        removedNode.dispatchEvent(dialogRemovedEvent)
      }
    })
  })
})

// wait for all dialog animations to complete their promises
const animationsComplete = (element: HTMLDialogElement) =>
  Promise.allSettled(
    element.getAnimations().map((animation: Animation) => 
      animation.finished))

// click outside the dialog handler
const lightDismiss = ({ target: dialog }) => {
  console.log(dialog.nodeName);
  
  if (dialog.nodeName === 'DIALOG')
    dialog.close('dismiss')
}

const dialogClose = async ({target:dialog}) => {
  dialog.setAttribute('inert', '')
  dialog.dispatchEvent(dialogClosingEvent)

  await animationsComplete(dialog)

  dialog.dispatchEvent(dialogClosedEvent)
}

// page load dialogs setup
export async function initDialog(dialog: HTMLDialogElement) {
  dialog.addEventListener('click', lightDismiss)
  dialog.addEventListener('close', dialogClose)

  dialogAttrObserver.observe(dialog, { 
    attributes: true,
  })

  dialogDeleteObserver.observe(document.body, {
    attributes: false,
    subtree: false,
    childList: true,
  })

  // remove visibility:hidden style
  // prevent page load @keyframes playing
  await animationsComplete(dialog);
  // dialog.style.removeProperty('visibility');
}

const dialogRemoved = ({ target: dialog }) => {
  dialog.removeEventListener('removed', dialogRemoved)
}

// SETUP
document.querySelectorAll('dialog').forEach((dialog: HTMLDialogElement) => {
  // sugar up <dialog> elements
  initDialog(dialog);

  dialog.addEventListener('removed', dialogRemoved)
});

const htmlEl = document.querySelector('html');
htmlEl?.addEventListener('click', (e: MouseEvent) => {
  const el = e.target as HTMLElement;

  if (el.hasAttribute('dialogtarget')) {
    const dialogId = el.getAttribute('dialogtarget');
    if (dialogId) window[dialogId].showModal();
  }

  if (el.hasAttribute('data-closes-dialog')) {
    (el as HTMLButtonElement)?.closest('dialog')?.close('close');
  }
});