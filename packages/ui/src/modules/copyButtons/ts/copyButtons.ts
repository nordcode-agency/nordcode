const copyButtons = document.querySelectorAll("button[data-copy-target]");

copyButtons.forEach((button: HTMLButtonElement) =>
  button.addEventListener("click", async (event) => {
    const copyTarget = button.dataset.copyTarget;
    event.preventDefault();
    await navigator.clipboard.writeText(copyTarget);
  })
);
