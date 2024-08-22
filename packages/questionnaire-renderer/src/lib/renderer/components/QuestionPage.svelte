<script lang="ts">
import RendererLayout from './RendererLayout.svelte';
import { goToNextQuestion, rendererStore } from '../store/rendererStore.ts';

$: currentQuestion = $rendererStore.questionnaire.questions[$rendererStore.currentQuestion];
</script>

<RendererLayout>
    <div slot="content">
        <h1>{currentQuestion.title}</h1>
        {#if currentQuestion.description}
            <p>{currentQuestion.description}</p>
        {/if}
    </div>
    <span slot="controls">
        <button class="nc-button" type="button" on:click={goToNextQuestion}>
            <span>Weiter</span>
        </button>
    </span>
</RendererLayout>
