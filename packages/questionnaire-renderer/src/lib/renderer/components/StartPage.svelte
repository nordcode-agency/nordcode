<script lang="ts">
    import RendererLayout from './RendererLayout.svelte';
    import { startQuestionnaire, rendererStore } from '../store/rendererStore.ts';
</script>

<RendererLayout>
    {#snippet content()}
        <h1>{$rendererStore?.questionnaire?.title}</h1>
        {#if $rendererStore?.questionnaire?.description}
            {@html $rendererStore.questionnaire.description}
        {/if}
    {/snippet}
    {#snippet controls()}
        <button class="nc-button" type="button" onclick={startQuestionnaire}>
            <span>Fragebogen starten</span>
        </button>
    {/snippet}
</RendererLayout>
