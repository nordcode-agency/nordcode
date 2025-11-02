<script lang="ts">
import type { Questionnaire } from '../../questionnaire/models/Questionnaire.model.ts';
import type { AnswerValue } from '../../questionnaire/models/QuestionnaireAnswers.model.ts';
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
    isLoading?: boolean;
    questionnaireStorageKey?: string;
}

let { questionnaire, onFinish, isLoading, questionnaireStorageKey }: QuestionnaireRendererProps = $props();

function handlePopState() {
    const currentUrl = new URL(window.location.href);
    const stepParam = currentUrl.searchParams.get('step');

    if (!stepParam) {
        return;
    }

    if (!$rendererStore.questionnaire) {
        return rendererStore;
    }

    rendererStore.update((store) => {
        if (stepParam === 'Start') {
            store.currentState = 'start';
            return store;
        }

        if (stepParam === 'Abschluss') {
            store.currentState = 'finished';
            return store;
        }

        const step = stepParam.split('Schritt ')[1];

        if (!step) {
            return store;
        }

        const stepIndex = parseInt(step, 10) - 1;
        const nextQuestion = store.answers[stepIndex]?.question.id ?? '';

        if (nextQuestion) {
            store.currentQuestionIdx = stepIndex;
            store.currentState = 'questions';
            store.currentQuestionId = nextQuestion;

            return store;
        }

        const questionInOrder = $rendererStore.questionnaire?.questionsOrder[stepIndex];

        if (questionInOrder) {
            store.currentQuestionIdx = stepIndex;
            store.currentState = 'questions';
            store.currentQuestionId = questionInOrder;
        }

        return store;
    });
}

rendererStore.subscribe((store) => {
    if (!store.questionnaire) {
        return;
    }

    const currentStep = function() {
        if (store.currentState === 'start') {
            return 'Start';
        }

        if (store.currentState === 'finished') {
            return 'Abschluss';
        }

        return `Schritt ${store.currentQuestionIdx + 1}`;
    }();

    document.title = `${store.questionnaire.title} - ${currentStep}`;

    const currentUrl = new URL(window.location.href);

    if (currentUrl.searchParams.get('step') === currentStep) {
        return;
    }

    currentUrl.searchParams.set('step', currentStep);

    window.history.pushState(
        {},
        '',
        currentUrl,
    );
});

$effect(() => {
    if (questionnaire) {
        initialiseQuestionnaire(questionnaire);
        window.addEventListener('popstate', handlePopState);
        // window.addEventListener('pushstate', handlePopState);
    }

    return () => {
        window.removeEventListener('popstate', handlePopState);
        // window.removeEventListener('pushstate', handlePopState);
    };
});
</script>

{#if $rendererStore?.questionnaire}
    {#if $rendererStore.currentState === 'start'}
        <StartPage></StartPage>
    {:else if $rendererStore.currentState === 'questions'}
        <QuestionPage></QuestionPage>
    {:else if $rendererStore.currentState === 'finished'}
        <FinishPage {onFinish} {isLoading}></FinishPage>
    {/if}
{/if}
