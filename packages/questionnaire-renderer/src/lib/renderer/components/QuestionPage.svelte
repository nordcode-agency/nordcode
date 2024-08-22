<script lang="ts">
import RendererLayout from './RendererLayout.svelte';
import QuestionRenderer from './QuestionRenderer.svelte';
import { goToNextQuestion, answerQuestion, rendererStore } from '../store/rendererStore.ts';

$: currentQuestion = $rendererStore.questionnaire.questions[$rendererStore.currentQuestion];

const answerCurrentQuestion = () => {
    const form = document.getElementById(`${currentQuestion.id}-form`);
    const formData = new FormData(form);
    const answer = formData.get(currentQuestion.id);

    answerQuestion(answer);
    goToNextQuestion();
};
</script>

<RendererLayout>
    <div slot="content">
        <form class="nc-stack -far" id={`${currentQuestion.id}-form`}>
            <div>
            <h1>{currentQuestion.title}</h1>
        {#if currentQuestion.description}
            <p>{currentQuestion.description}</p>
        {/if}
        </div>
        <QuestionRenderer question={currentQuestion} />
        </form>
    </div>
    <span slot="controls">
        <button class="nc-button" type="button" on:click={answerCurrentQuestion}>
            <span>Weiter</span>
        </button>
    </span>
</RendererLayout>
