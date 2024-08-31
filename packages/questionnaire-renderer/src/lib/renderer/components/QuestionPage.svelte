<script lang="ts">
import RendererLayout from './RendererLayout.svelte';
import QuestionRenderer from './QuestionRenderer.svelte';
import { goToNextQuestion, answerQuestion, rendererStore } from '../store/rendererStore.ts';
import type {
    AnswerValue,
    QuestionnaireAnswer,
} from '$lib/questionnaire/models/QuestionnaireAnswers.model.ts';
import type { Question } from '$lib/index.ts';

let currentQuestion: Question = $derived(
    $rendererStore.questionnaire.questions[$rendererStore.currentQuestion],
);

let currentAnswer: QuestionnaireAnswer = $derived(
    $rendererStore.answers[$rendererStore.currentQuestion],
);

const answerCurrentQuestion = () => {
    const form = document.getElementById(`${currentQuestion.id}-form`);
    if (!form) {
        return;
    }
    const formData = new FormData(form as HTMLFormElement);
    const answer = formData.get(currentQuestion.id);

    if (answer) {
        answerQuestion(answer as AnswerValue);
        goToNextQuestion();
    }
};
</script>

<RendererLayout>
    {#snippet content()}
        <form class="nc-stack -far -contained -stretched" id={`${currentQuestion.id}-form`}>
            <div>
            <h1>{currentQuestion.title}</h1>
        {#if currentQuestion.description}
            {@html currentQuestion.description}
        {/if}
        </div>
        <QuestionRenderer question={currentQuestion} answer={currentAnswer} />
        </form>
    {/snippet}
    {#snippet controls()}
    <button class="nc-button" type="button" onclick={answerCurrentQuestion}>
        <span>Weiter</span>
    </button>
    {/snippet}
</RendererLayout>
