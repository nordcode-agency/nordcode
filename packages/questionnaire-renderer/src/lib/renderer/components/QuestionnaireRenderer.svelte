<script lang="ts">
import type { Questionnaire } from '$lib/questionnaire/models/Questionnaire.model.ts';
import type { AnswerValue, QuestionnaireAnswer } from '$lib/questionnaire/models/QuestionnaireAnswers.model.ts';
import { initialiseQuestionnaire, rendererStore } from '../store/rendererStore.ts';
import FinishPage from './FinishPage.svelte';
import QuestionPage from './QuestionPage.svelte';
import StartPage from './StartPage.svelte';

interface QuestionnaireRendererProps {
    questionnaire: Questionnaire;
    onFinish?: (
        answers: {
            questionId: string;
            title: string;
            answer: AnswerValue;
        }[],
    ) => void;
}

let { questionnaire, onFinish }: QuestionnaireRendererProps = $props();

$effect(() => {
    if (questionnaire) {
        initialiseQuestionnaire(questionnaire);
    }
});
</script>

{#if $rendererStore?.questionnaire}
    {#if $rendererStore.currentState === 'start'}
        <StartPage></StartPage>
    {:else if $rendererStore.currentState === 'questions'}
        <QuestionPage></QuestionPage>
    {:else if $rendererStore.currentState === 'finished'}
        <FinishPage {onFinish}></FinishPage>
    {/if}
{/if}
