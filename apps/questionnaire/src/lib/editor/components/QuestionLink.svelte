<script lang="ts">
import type { Question } from '@nordcode/questionnaire-renderer';
import { Navigation } from '../../common/config/Navigation';
import { moveQuestion, removeQuestion } from '../editorStore';

type Position = 'below' | 'above';
interface QuestionLinkProps {
    question: Question;
    questionOrderIdx: number;
}

let { question, questionOrderIdx }: QuestionLinkProps = $props();

const questionLink = Navigation.question.url.replace(':id', question.id);

let isGrabbing = $state(false);
let isDraggedOver = $state(false);
let position = $state<Position | undefined>(undefined);

const onDragStart = (event: DragEvent) => {
    const target = event.target as HTMLElement;
    isGrabbing = true;
    const dragImage = target?.parentElement?.parentElement;
    if (!dragImage || !event.dataTransfer) {
        return;
    }

    document.documentElement.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/question-id', question.id);
    event.dataTransfer.setDragImage(dragImage, 0, 0);
};

const onDragEnd = (event: DragEvent) => {
    document.documentElement.style.cursor = 'inherit';
    isGrabbing = false;
};

const shouldHandleDragEvent = (event: DragEvent): boolean => {
    const target = event.target as HTMLElement;
    if (!target || !event.dataTransfer) {
        return false;
    }

    if (!event.dataTransfer.types.includes('application/question-id')) {
        return false;
    }

    const questionsId = event.dataTransfer.getData('application/question-id');
    const closestTR = target.closest('tr');

    if (questionsId === closestTR?.id) {
        return false;
    }

    return true;
};

const onDragEnter = (event: DragEvent) => {
    if (!shouldHandleDragEvent(event)) {
        return;
    }

    event.preventDefault();
    isDraggedOver = true;
};

const onDragOver = (event: DragEvent) => {
    if (!shouldHandleDragEvent(event)) {
        return;
    }

    event.preventDefault();
    isDraggedOver = true;

    const target = event.target as HTMLElement;
    const closestTR = target.closest('tr');
    const bounds = closestTR?.getBoundingClientRect();

    if (!bounds) {
        return;
    }

    const y = event.clientY;
    const top = bounds.top;
    const bottom = bounds.bottom;
    const height = bounds.height;

    // in upper third
    if (y < top + height / 3) {
        position = 'above';
    } else if (y > bottom - height / 3) {
        position = 'below';
    } else {
        position = undefined;
    }
};

const onDragLeave = (event: DragEvent) => {
    if (!event.dataTransfer?.types.includes('application/question-id')) {
        return;
    }

    event.preventDefault();
    isDraggedOver = false;
    position = undefined;
};

const onDrop = (event: DragEvent) => {
    if (!shouldHandleDragEvent(event)) {
        return;
    }

    const target = event.target as HTMLElement;

    if (!event.dataTransfer || !position) {
        return;
    }
    const questionsId = event.dataTransfer.getData('application/question-id');
    const newIndex = position === 'above' ? Math.max(questionOrderIdx - 1, 0) : questionOrderIdx;

    if (document.startViewTransition) {
        document.startViewTransition(() => moveQuestion(questionsId, newIndex));
    } else {
        moveQuestion(questionsId, newIndex);
    }

    isDraggedOver = false;
    position = undefined;
};
</script>

<tr
    id={question.id}
    class="questionLink"
    style={`view-transition-name: question-item-${question.id}`}
    data-dragging={isGrabbing}
    data-draggedover={isDraggedOver}
    data-position={position}
    ondragenter={onDragEnter}
    ondragover={onDragOver}
    ondragleave={onDragLeave}
    ondrop={onDrop}
>
    <td>
        <div
            class="drag-handle"
            data-grabbing={isGrabbing}
            ondragstart={onDragStart}
            ondragend={onDragEnd}
            draggable="true"
            role="cell"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="nc-icon" data-size="inline">
                <title>Frage verschieben</title>
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="4"
                    d="M8.025 4.75h-.05M16.025 4.75h-.05M8.025 12h-.05M16.025 12h-.05M8.025 19.25h-.05M16.025 19.25h-.05"
                />
            </svg>
        </div>
    </td>
    <td>
        <span class="nc-cluster -near -centered">
            <a href={questionLink}>{question.title}</a>
            {#if question.required}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="nc-icon"
                    data-size="inline"
                    style="color: var(--color-brand-primary-base)"
                >
                    <title>Required</title>
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="3"
                        d="M12 2v20M3.34 7l17.32 10M3.34 17 20.66 7"
                    />
                </svg>
            {/if}
            {#if question.next?.length}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="nc-icon"
                    data-size="inline"
                    style="color: var(--color-brand-primary-base)"
                >
                    <title>Geänderte Reihenfolge</title>
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="3"
                        d="m17.75 9 2.651-2.651c.297-.297.446-.446.502-.617a.75.75 0 0 0 0-.464c-.056-.171-.204-.32-.502-.617L17.75 2"
                    />
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="bevel"
                        stroke-width="3"
                        d="M3.5 10.5v-.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.78 5.5 6.62 5.5 8.3 5.5h11.95m.25 8v.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H3.75"
                    />
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="3"
                        d="m6.25 15-2.651 2.651c-.297.297-.446.446-.502.617a.75.75 0 0 0 0 .464c.056.171.205.32.502.617L6.25 22"
                    />
                </svg>
            {/if}
        </span>
    </td>
    <td>{question.type}</td>
    <td>
        <button
            class="nc-button -small -outline -danger"
            type="button"
            onclick={() => removeQuestion(question.id)}
        >
            Frage löschen
        </button>
    </td>
</tr>

<style>
.questionLink {
    position: relative;
    --drag-target-color: transparent;

    &:before,
    &:after {
        content: "";
        position: absolute;
        inline-size: 100%;
        block-size: 2px;
        inset-inline: 0;
        background-color: var(--drag-target-color);
    }

    &:before {
        inset-block-start: -1px;
    }

    &:after {
        inset-block-end: -1px;
    }

    &[data-dragging="true"] {
        opacity: 0.4;
    }

    &[data-draggedover="true"] {
        & *:not(td) {
            pointer-events: none;
        }

        &[data-position="above"]:before {
            --drag-target-color: var(--color-brand-primary-base);
        }

        &[data-position="below"]:after {
            --drag-target-color: var(--color-brand-primary-base);
        }
    }
}

.drag-handle {
    display: flex;
    align-items: center;
    justify-content: center;
    inline-size: var(--button-height-base);
    block-size: var(--button-height-base);
    cursor: grab;
    color: var(--color-text-base);
    user-select: none;

    &[data-grabbing="true"] {
        cursor: grabbing;
        color: var(--color-brand-primary-base);
    }
}
</style>
