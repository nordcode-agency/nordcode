<script lang="ts">
import RendererLayout from './RendererLayout.svelte';
import QuestionRenderer from './QuestionRenderer.svelte';
import { goToNextQuestion, answerQuestion, rendererStore } from '../store/rendererStore.ts';
import type {
    AnswerValue,
    QuestionnaireAnswer,
} from '$lib/questionnaire/models/QuestionnaireAnswers.model.ts';
import type { Question } from '$lib/index.ts';
import type { FormEventHandler } from 'svelte/elements';

let currentQuestion: Question = $derived(
    $rendererStore.questionnaire.questions[$rendererStore.currentQuestion],
);

let currentAnswer: QuestionnaireAnswer = $derived(
    $rendererStore.answers[$rendererStore.currentQuestion],
);

const answerCurrentQuestion = (form: HTMLFormElement) => {
    const formData = new FormData(form as HTMLFormElement);
    const answer = formData.get(currentQuestion.id);

    if (answer) {
        answerQuestion(answer as AnswerValue);
        goToNextQuestion();
    }
};

const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();

    answerCurrentQuestion(event.currentTarget);
};

const submitForm = () => {
    const form = document.getElementById(`${currentQuestion.id}-form`) as HTMLFormElement;
    if (!form) {
        return;
    }
    answerCurrentQuestion(form);
};
</script>

<RendererLayout>
    {#snippet content()}
        <form
            class="nc-stack -far -contained -stretched"
            id={`${currentQuestion.id}-form`}
            onsubmit={onFormSubmit}
        >
        <div class="nc-stack -nogap">
            <span class="nc-slub -muted" >{$rendererStore.questionnaire.title}</span>
            <h1>{currentQuestion.title}</h1>
        </div>
        {#if currentQuestion.description}
            {@html currentQuestion.description}
        {/if}
        <QuestionRenderer question={currentQuestion} answer={currentAnswer} />
        </form>
    {/snippet}
    {#snippet controls()}
    <div class="nc-cluster -centered">
    <button class="nc-button" type="button" onclick={submitForm}>
        <span>Weiter</span>
    </button>
        <small>
            oder <strong>Enter</strong> drücken <kbd>⏎ </kbd>
        </small>
    </div>
    {/snippet}
</RendererLayout>
