const openButtons = document.querySelectorAll<HTMLButtonElement>(
  "button[data-opens-dialog]"
);
const closeButtons = document.querySelectorAll<HTMLButtonElement>(
  "button[data-closes-dialog]"
);
const openDialogs: HTMLDialogElement[] = [];

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = document.querySelector<HTMLDialogElement>(
      `[data-id="${button.dataset.opensDialog}"]`
    );
    dialog.showModal();
    openDialogs.forEach((d, idx) => {
      d.style.setProperty(
        "--dialog-inative-offset",
        `${-1 * (openDialogs.length + 1 - idx)}dvh`
      );
      d.classList.add("-inactive");
    });
    openDialogs.push(dialog);
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeCurrentDialog();
  });
});

const closeCurrentDialog = () => {
  const currentDialog = openDialogs.pop();
  if (!currentDialog) {
    return;
  }

  currentDialog.addEventListener(
    "animationend",
    () => {
      currentDialog.classList.remove("-closing");
      currentDialog.close();
      if (openDialogs.length === 0) {
        return;
      }
      openDialogs[openDialogs.length - 1].classList.remove("-inactive");
    },
    { once: true }
  );

  currentDialog.classList.add("-closing");
};
