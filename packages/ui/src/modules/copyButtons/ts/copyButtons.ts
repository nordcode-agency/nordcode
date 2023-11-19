const htmlEl = document.documentElement;
htmlEl?.addEventListener('click', (e: MouseEvent) => {
    const el = e.target as HTMLElement;

    if (el.hasAttribute('data-copy-target')) {
        const copyTarget = el.dataset.copyTarget;
        navigator.clipboard.writeText(copyTarget);
    }
});
