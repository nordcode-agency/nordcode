const copyEl = document.querySelectorAll("[data-copy-target]");

copyEl.forEach((button: HTMLElement) =>
  button.addEventListener("click", async (event) => {
    const copyTarget = button.dataset.copyTarget;
    event.preventDefault();
    await navigator.clipboard.writeText(copyTarget);
  })
);
