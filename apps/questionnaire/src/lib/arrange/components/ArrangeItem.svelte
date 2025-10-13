<script lang="ts">
import type { Question } from '@nordcode/questionnaire-renderer';
import type { Bounds } from '../types/Bounds';
import { clamp } from '../utils/clamp';
import { toFixed } from '../utils/toFixed';

interface ArrangeItemProps {
    questionId: string;
    question: Question;
    bounds: Bounds;
}

let { questionId, question, bounds }: ArrangeItemProps = $props();

let elDimensions = $state({ inline: 0, block: 0 });

let isDragging = $state(false);
let position = $state({ x: 0, y: 0 });
let startPos = $state({ x: 0, y: 0 });
let currentDragBounds = $state({ startX: 0, startY: 0, endX: 0, endY: 0 });

// startPos wo der Pointer gedrückt wurde
// bounds sind die grenzen des editors, aber position startet bei 0,0
// position ist die aktuelle position des elements von ihrem start
// wie kann ich die position des elements auf die bounds anpassen?
// bounds.startX ist zB. 300, position.x ist 0, wie kann ich position.x auf 300 setzen?
//
//

const onPointerDown = (event: PointerEvent) => {
    isDragging = true;
    startPos = { x: event.x - position.x, y: event.y - position.y };
    const startX = event.layerX + bounds.startX - startPos.x;
    const startY = event.layerY + bounds.startY - startPos.y;
    currentDragBounds = {
        startX,
        startY,
        endX: bounds.endX - startPos.x - (elDimensions.inline - event.layerX),
        endY: bounds.endY - startPos.y - (elDimensions.block - event.layerY),
    };
    event.preventDefault();
};

const onPointerMove = (event: PointerEvent) => {
    window.document.body.style.cursor = 'grabbing';

    position = {
        x: toFixed(
            clamp(event.x - startPos.x, currentDragBounds.startX, currentDragBounds.endX),
            2,
        ),
        y: toFixed(
            clamp(event.y - startPos.y, currentDragBounds.startY, currentDragBounds.endY),
            2,
        ),
    };
};

const onPointerUp = (event: PointerEvent) => {
    window.document.body.style.cursor = '';
    isDragging = false;
};

const onPointerCancel = (event: PointerEvent) => {
    isDragging = false;
};

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

$effect(() => {
    const el = document.getElementById(questionId);
    if (!el) {
        return;
    }

    elDimensions = {
        inline: el.offsetWidth,
        block: el.offsetHeight,
    };
});
</script>

<article
    class="nc-box -bordered | arrangeItem"
    style={`transform: translate3d(${position.x}px, ${position.y}px, 0);`}
    id={questionId}
    data-grabbing={isDragging}
>
    <div class="draghandle" onpointerdown={onPointerDown} style={`cursor: ${isDragging ? 'grabbing' : 'grab'}`}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="nc-icon"
            data-size="lg"
            viewBox="0 0 24 24"
        >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M4 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        </svg>
    </div>
    <p>{question.title}</p>
    <p class="nc-hint">{question.type}</p>
</article>

<style>
.arrangeItem {
    background: var(--color-surface-base);
    position: relative;
    box-shadow: var(--shadow-near);

    & .draghandle {
        cursor: grab;
    }

    &[data-grabbing="true"] {
        z-index: 1;
        border-color: var(--color-brand-primary-emphasis);
        box-shadow: var(--shadow-medium);

        & .draghandle {
            cursor: grabbing;
            color: var(--color-brand-primary-emphasis);
        }
    }
}
</style>
