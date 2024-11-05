<script lang="ts">
import { currentQuestionnaire } from '$lib/editor/editorStore';
import type { Bounds } from '../types/Bounds';
import { clamp } from '../utils/clamp';
import { toFixed } from '../utils/toFixed';
import ArrangeItem from './ArrangeItem.svelte';

const questions = $currentQuestionnaire?.questionnaire?.questions
    ? Object.entries($currentQuestionnaire?.questionnaire?.questions)
    : [];

let bounds: Bounds = $state({ startX: 0, startY: 0, endX: 0, endY: 0 });
let zoom = $state(1);

const resizeBounds = (rect: DOMRect) => {
    bounds = {
        startX: rect.left,
        startY: rect.top,
        endX: rect.right,
        endY: rect.bottom,
    };
};

const resizeListener = (event: Event) => {
    const target = event?.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    resizeBounds(rect);
};

const updateZoom = (event: WheelEvent) => {
    event.preventDefault();
    event.stopPropagation();
    zoom = clamp(zoom + event.deltaY * 0.001, 0.5, 2);
};

let elDimensions = $state({ inline: 0, block: 0 });

let isDragging = $state(false);
let position = $state({ x: 0, y: 0 });
let startPos = $state({ x: 0, y: 0 });
// let currentDragBounds = $state({ startX: 0, startY: 0, endX: 0, endY: 0 });

const onPointerDown = (event: PointerEvent) => {
    isDragging = true;
    console.log(bounds);
    startPos = { x: event.x - position.x, y: event.y - position.y };
    // const startX = event.layerX + bounds.startX - startPos.x;
    // const startY = event.layerY + bounds.startY - startPos.y;
    // currentDragBounds = {
    //     startX,
    //     startY,
    //     endX: bounds.endX - startPos.x - (elDimensions.inline - event.layerX),
    //     endY: bounds.endY - startPos.y - (elDimensions.block - event.layerY),
    // };
    event.preventDefault();
};

const onPointerMove = (event: PointerEvent) => {
    window.document.body.style.cursor = 'grabbing';

    position = {
        x: toFixed(clamp(event.x - startPos.x, bounds.startX, bounds.endX), 2),
        y: toFixed(clamp(event.y - startPos.y, bounds.startY, bounds.endY), 2),
    };

    console.log(position.x);
};

const onPointerUp = (event: PointerEvent) => {
    window.document.body.style.cursor = '';
    isDragging = false;
};

const onPointerCancel = (event: PointerEvent) => {
    isDragging = false;
};

$effect(() => {
    const editor = document.getElementById('arrangeCanvas');
    const rect = editor?.getBoundingClientRect();
    if (rect) {
        resizeBounds(rect);
    }
});

$effect(() => {
    if (isDragging) {
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        window.addEventListener('pointercancel', onPointerCancel);
    } else {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('pointercancel', onPointerCancel);
    }
});
</script>

<section
    class="nc-box nc-cluster -full-width"
    id="arrangeEditor"

    >
    <div id="arrangeCanvas"
        style={`transform: translate3d(${position.x}px, ${position.y}px, 0) scale(${zoom})`}
        onresize={resizeListener}
        onwheel={updateZoom}
        onpointerdown={onPointerDown}
    >
    {#if !questions.length}
    <p>Es gibt noch keine Fragen.</p>
    {:else}
    {#each questions as [questionId, question]}
        <ArrangeItem questionId={questionId} question={question} bounds={bounds}></ArrangeItem>
    {/each}
    {/if}
    </div>
</section>


<style>
    #arrangeEditor {
        border: 1px solid var(--color-border-base);
        block-size: 100dvh;
        inline-size: 100%;
        position: relative;
        overflow: hidden;
    }

    #arrangeCanvas {
        inline-size: 200%;
        block-size: 200%;
        position: absolute;
        inset: -50%;

        --bg-grid-color: color-mix(in oklch, var(--color-brand-primary-base), transparent 92%);
        background-image:
            repeating-linear-gradient(
                to bottom,
                transparent,
                transparent 9px,
                var(--bg-grid-color) 9px,
                var(--bg-grid-color) 10px
            ),
            repeating-linear-gradient(
                to right,
                transparent,
                transparent 9px,
                var(--bg-grid-color) 9px,
                var(--bg-grid-color) 10px
            );
    }
</style>
