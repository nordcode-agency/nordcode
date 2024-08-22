<script lang="ts">
import RendererLayout from './RendererLayout.svelte';
import { startQuestionnaire } from '../store/rendererStore.ts';
export let title: string;
export let description: string | undefined;
</script>

<RendererLayout>
    <div slot="content">
        <h1>{title}</h1>
        {#if description}
            <p>{description}</p>
        {/if}
    </div>
    <span slot="controls">
        <button class="nc-button" type="button" on:click={startQuestionnaire}>
            <span>Fragebogen starten</span>
        </button>
    </span>
</RendererLayout>
