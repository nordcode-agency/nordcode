<script lang="ts">
import RendererLayout from './RendererLayout.svelte';
import { startQuestionnaire, rendererStore } from '../store/rendererStore.ts';
</script>

<RendererLayout>
    <div slot="content">
        <h1>{$rendererStore.questionnaire.title}</h1>
        {#if $rendererStore.questionnaire.description}
            <p>{$rendererStore.questionnaire.description}</p>
        {/if}
    </div>
    <span slot="controls">
        <button class="nc-button" type="button" on:click={startQuestionnaire}>
            <span>Fragebogen starten</span>
        </button>
    </span>
</RendererLayout>
