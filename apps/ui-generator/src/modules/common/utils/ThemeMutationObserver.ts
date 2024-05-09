export type ThemeMutationObserverListener = (style: CSSStyleDeclaration | null) => void;

class ThemeMutationObserver {
    private listenerMap: Record<string, ThemeMutationObserverListener> = {};
    private observer: MutationObserver | undefined;
    private style: CSSStyleDeclaration | null = null;

    constructor() {
        this.initObserver();
        this.computeStyle();
    }

    private initObserver = () => {
        const targetNode = document.querySelector('.live-theme');

        if (!targetNode) {
            console.error('ThemeMutationObserver: targetNode not found');
            return;
        }

        const config = { attributes: true };

        const callback = (mutationList: MutationRecord[]) => {
            for (const mutation of mutationList) {
                if (mutation.type === 'attributes') {
                    this.computeStyle();
                    this.emit();
                }
            }
        };

        this.observer = new MutationObserver(callback);

        this.observer.observe(targetNode, config);
    };

    public computeStyle = () => {
        const targetNode = document.querySelector('.live-theme');
        this.style = targetNode ? getComputedStyle(targetNode) : null;
    };

    private get listeners() {
        return Object.values(this.listenerMap);
    }

    public getStyle = () => {
        return this.style;
    };

    public subscribe(listener: ThemeMutationObserverListener): string {
        const id = Math.random().toString(36).substring(2, 9);
        this.listenerMap[id] = listener;
        return id;
    }

    public emit() {
        for (const listener of this.listeners) {
            listener(this.style);
        }
    }

    public unsubscribe(id: string) {
        delete this.listenerMap[id];
    }

    public destroy = () => {
        this.observer?.disconnect();
    };
}

let themeMutationObserverInstance: ThemeMutationObserver | null = null;
export const getThemeMutationObserver = () => {
    if (!themeMutationObserverInstance) {
        themeMutationObserverInstance = new ThemeMutationObserver();
    }

    if (!themeMutationObserverInstance.getStyle()?.color) {
        themeMutationObserverInstance.computeStyle();
        themeMutationObserverInstance.emit();
    }

    return themeMutationObserverInstance;
};
