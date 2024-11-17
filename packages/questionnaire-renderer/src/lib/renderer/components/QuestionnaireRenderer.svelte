<script lang="ts">
    import { rendererStore, initialiseQuestionnaire } from '../store/rendererStore.ts';
    import StartPage from './StartPage.svelte';
    import QuestionPage from './QuestionPage.svelte';
    import FinishPage from './FinishPage.svelte';
    import type {
        AnswerValue,
        QuestionnaireAnswer,
    } from '$lib/questionnaire/models/QuestionnaireAnswers.model.ts';
    import type { Questionnaire } from '$lib/questionnaire/models/Questionnaire.model.ts';

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
