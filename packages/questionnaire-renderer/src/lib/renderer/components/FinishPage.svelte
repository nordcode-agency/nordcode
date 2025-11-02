<script lang="ts">
import type { AnswerValue } from '../../questionnaire/models/QuestionnaireAnswers.model.ts';
import { rendererStore } from '../store/rendererStore.ts';
import AnswerDisplay from './AnswerDisplay.svelte';
import RendererLayout from './RendererLayout.svelte';

type Props = {
    onFinish?: (
        answers: {
            questionId: string;
            title: string;
            answer: AnswerValue;
        }[],
    ) => void;
    isLoading?: boolean;
};

let { onFinish, isLoading }: Props = $props();

const finishQuestionnaire = () => {
    const formattedAnswers = $rendererStore.answers.map(answer => ({
        questionId: answer.question.id,
        title: answer.question.title,
        answer: answer.answer,
    }));

    if (onFinish) {
        onFinish(formattedAnswers);
    }
};
</script>

<RendererLayout>
    {#snippet content()}
        <h1>{$rendererStore?.questionnaire?.title}</h1>
        {#if $rendererStore?.questionnaire?.summaryText}
            {@html $rendererStore.questionnaire.summaryText}
        {/if}
        <AnswerDisplay></AnswerDisplay>
    {/snippet}
    {#snippet controls()}
        <button class="nc-button -primary" type="button" onclick={finishQuestionnaire} disabled={isLoading}>
            {#if isLoading}
                Wird abgeschlossen...
            {:else}
                {#if $rendererStore?.questionnaire?.finalCTA}
                    {$rendererStore?.questionnaire?.finalCTA}
                {:else}
                    Fragebogen abschließen
                {/if}
            {/if}
        </button>
    {/snippet}
</RendererLayout>
