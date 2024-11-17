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
        // event.dataTransfer.effectAllowed = 'move';
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
        const newIndex =
            position === 'above' ? Math.max(questionOrderIdx - 1, 0) : questionOrderIdx;

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
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="nc-icon"
                data-size="inline"
                aria-hidden="true"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                    d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                /><path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path
                    d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                /><path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path
                    d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                /><path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg
            >
            <span class="sr-only">Frage verschieben</span>
        </div>
    </td>
    <td>
        <span class="nc-cluster -near -centered">
            <a href={questionLink}>{question.title}</a>
            {#if question.next?.length}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="var(--color-brand-primary-base)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="nc-icon"
                    data-size="inline"
                >
                    <title>Geänderte Reihenfolge</title>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                        d="M16 21h3c.81 0 1.48 -.67 1.48 -1.48l.02 -.02c0 -.82 -.69 -1.5 -1.5 -1.5h-3v3z"
                    /><path
                        d="M16 15h2.5c.84 -.01 1.5 .66 1.5 1.5s-.66 1.5 -1.5 1.5h-2.5v-3z"
                    /><path d="M4 9v-4c0 -1.036 .895 -2 2 -2s2 .964 2 2v4" /><path
                        d="M2.99 11.98a9 9 0 0 0 9 9m9 -9a9 9 0 0 0 -9 -9"
                    /><path d="M8 7h-4" /></svg
                >
            {/if}
        </span>
    </td>
    <td>{question.type}</td>
    <td>
        <button
            class="nc-button -small -outline -danger"
            type="button"
            onclick={() => removeQuestion(question.id)}
            >Frage löschen
        </button>
    </td>
</tr>

<style>
    .questionLink {
        position: relative;
        --drag-target-color: transparent;

        &:before,
        &:after {
            content: '';
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

        &[data-dragging='true'] {
            opacity: 0.4;
        }

        &[data-draggedover='true'] {
            & *:not(td) {
                pointer-events: none;
            }

            &[data-position='above']:before {
                --drag-target-color: var(--color-brand-primary-base);
            }

            &[data-position='below']:after {
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

        &[data-grabbing='true'] {
            cursor: grabbing;
            color: var(--color-brand-primary-base);
        }
    }
</style>
