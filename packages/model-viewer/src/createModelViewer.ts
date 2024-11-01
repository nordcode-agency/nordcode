type Options = {
    /**
     * Speed factor for the rotation of the model. The higher the value, the faster the rotation.
     *
     * @default 0.4
     */
    rotateSpeedFactor?: number;
    /**
     * Applies CSS perspective and acts as guards for the zoom level.
     *
     * @default 720(px)
     */
    perspective?: number;
    /**
     * Specify a default zoom level for your model. The higher the value, the closer the model will be.
     *
     * @default 30
     */
    defaultZoom?: number;
    /**
     * Prevents applying our opinionated base styles to the target element. Make sure to bring your own.
     */
    preventBaseStyles?: boolean;
};

const defaultOptions = {
    rotateSpeedFactor: 0.4,
    perspective: 720,
    defaultZoom: 30,
    preventBaseStyles: false,
};

const getBaseStyles = (perspective: number) => `
    perspective: ${perspective}px;
    display: grid;
    place-items: center;
    inline-size: 100%;
    block-size: 100%;
    max-block-size: 100%;
    max-inline-size: 100%;
    overflow: hidden;
    cursor: grab;
    user-select: none;
`;

const baseElementStyles = `
    transform: translateZ(var(--zoom)) rotateX(var(--rotate-x)) rotateY(var(--rotate-y));
    transform-origin: center;
    transform-style: preserve-3d;
    will-change: transform;
`;

const toFixed = (num: number, precision: number): number => {
    const pow = 10 ** precision;
    return Math.round(num * pow) / pow;
};

const clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
};

export const createModelViewer = (target: HTMLElement, options?: Options): void => {
    const { rotateSpeedFactor, perspective, defaultZoom, preventBaseStyles } = {
        ...defaultOptions,
        ...options,
    };

    let zoom = defaultZoom;
    let rotateX = 0;
    let rotateY = 0;
    let isGrabbing = false;

    if (!target) {
        throw new Error('Target element not found');
    }

    target.addEventListener('wheel', (event: WheelEvent) => {
        event.preventDefault();
        event.stopPropagation();
        zoom = clamp(Math.round(zoom + event.deltaY * 0.5), -perspective, perspective * 0.7);
        target.style.setProperty('--zoom', `${zoom}px`);
    });

    target.addEventListener('mousedown', () => {
        target.style.cursor = 'grabbing';
        isGrabbing = true;
    });

    target.addEventListener('mouseup', () => {
        target.style.cursor = 'grab';
        isGrabbing = false;
    });

    target.addEventListener('mousemove', (event: MouseEvent) => {
        if (isGrabbing) {
            rotateY = toFixed(rotateY + event.movementX * rotateSpeedFactor, 2);
            rotateX = clamp(toFixed(rotateX - event.movementY * rotateSpeedFactor, 2), -90, 90);
            target.style.setProperty('--rotate-x', `${rotateX}deg`);
            target.style.setProperty('--rotate-y', `${rotateY}deg`);
        }
    });

    if (!preventBaseStyles) {
        target.style.cssText = getBaseStyles(perspective);
    }

    const model = target.firstElementChild as HTMLElement;

    if (!model) {
        throw new Error(
            'Model element not found. Please make sure that your target container has a model to display.',
        );
    }

    model.style.cssText = baseElementStyles;
    target.style.setProperty('--zoom', `${zoom}px`);
    target.style.setProperty('--rotate-x', `${rotateX}deg`);
    target.style.setProperty('--rotate-y', `${rotateY}deg`);
};
