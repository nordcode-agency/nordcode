<script lang="ts">
import { browser } from '$app/environment';

const minWidth = 200;
const maxWidth = 500;
const cssVarName = '--preview-width';

function dragMe(node: HTMLButtonElement) {
    const container = document.querySelector('.editor-container') as HTMLElement;
    const previewContainer = document.querySelector('.preview-content') as HTMLElement;
    if (!container || !previewContainer) {
        return;
    }

    const getCssVariableValueFromContainer = () => {
        return getComputedStyle(container).getPropertyValue(cssVarName).trim();
    };

    const getInitialWidth = () => {
        // const value = localStorage.getItem(cssVarName);
        // if (value) {
        //     return Number.parseInt(value, 10);
        // }

        return previewContainer.clientWidth;
    };

    const calculateMaxWidth = (newWidth: number) => {
        return Math.min(Math.max(newWidth, minWidth), maxWidth);
    };

    const updateStyle = (width: number) => {
        container.style.setProperty(cssVarName, `${width}px`);
    };

    const minWidth = 0;
    const maxWidth = container.clientWidth ?? 0;
    updateStyle(getInitialWidth() ?? minWidth);
    let resizeListener: ((e: MouseEvent) => void) | undefined;

    const createResizeListener = (initialPosX: number, initialWidth: number) => {
        return (e: MouseEvent) => {
            const moveX = e.screenX - initialPosX;
            const calculatedWidth = initialWidth - moveX;

            const finalWidth = calculateMaxWidth(calculatedWidth);

            requestAnimationFrame(() => {
                updateStyle(finalWidth);
            });
        };
    };

    const stopResizing = () => {
        document.body.removeAttribute('data-resizing');
        // localStorage.setItem(cssVarName, getCssVariableValueFromContainer());
        window.removeEventListener('mouseup', stopResizing);
        if (resizeListener) {
            window.removeEventListener('mousemove', resizeListener);
            resizeListener = undefined;
        }
    };

    const startResizing = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        document.body.setAttribute('data-resizing', 'true');
        const initialWidth = getInitialWidth() ?? minWidth;
        const initialPosX = e.screenX;
        resizeListener = createResizeListener(initialPosX, initialWidth);
        window.addEventListener('mousemove', resizeListener);
        window.addEventListener('mouseup', stopResizing);
    };

    node.addEventListener('mousedown', startResizing);
}
</script>
<div class="nc-box editor-preview">
<h2>PREVIEW</h2>

<button class="editor-preview-draghandle" use:dragMe><span class="text-assistive" >Resize Preview</span></button>
</div>

<style>
    .editor-preview {
        background-color: var(--color-surface-subtle);
        block-size: 100%;
        position: relative;
        border-inline-start: var(--border-width-thin) solid var(--color-border-subtle);
    }

    .editor-preview-draghandle {
        all: unset;
        position: absolute;
        inset-block: 0;
        inset-inline-start: -0.25rem;
        block-size: 100%;
        cursor: ew-resize;
        inline-size: 0.5rem;
        user-select: none;
        touch-action: none;
        pointer-events: auto;
    }
</style>
