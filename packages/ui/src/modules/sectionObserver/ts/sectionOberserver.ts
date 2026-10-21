const buildThresholds = (steps: number) => {
    const thresholds = [0];
    for (let i = 1.0; i <= steps; i++) {
        const ratio = i / steps;
        thresholds.push(ratio);
    }
    return thresholds;
};

const createObserver = (selector: string, steps: number) => {
    const options = {
        threshold: buildThresholds(steps),
    };

    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            const ratio = entry.intersectionRatio;
            (entry.target as HTMLElement)?.style?.setProperty('--intersecting', ratio.toString());
        }
    }, options);

    for (const node of Array.from(document.querySelectorAll(selector))) {
        observer.observe(node);
    }
};

export { createObserver };
