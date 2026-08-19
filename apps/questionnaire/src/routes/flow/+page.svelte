<script lang="ts">
import { Navigation } from '$lib/common/config/Navigation';
import { currentQuestionnaire } from '$lib/editor/editorStore';
import FlowChart from '$lib/flow/components/FlowChart.svelte';

const hasQuestions = $derived(
    ($currentQuestionnaire?.questionnaire.questionsOrder.length ?? 0) > 0,
);
</script>

<svelte:head>
    <title>Fragenfluss | Nordcode Questionnaire</title>
</svelte:head>

<section class="nc-center page-center-layout nc-region nc-stack">
    <h1>Fragenfluss</h1>
    {#if $currentQuestionnaire && hasQuestions}
        <p class="nc-hint">
            Fragen werden in ihrer Reihenfolge angezeigt. Sprünge sind farbig markiert — klicke auf
            eine Frage, um sie zu bearbeiten.
        </p>
        <FlowChart questionnaire={$currentQuestionnaire.questionnaire}></FlowChart>
    {:else}
        <p class="nc-hint">
            Der aktuelle Fragebogen hat noch keine Fragen.
            <a href={Navigation.editor.url}>Zum Editor</a>
        </p>
    {/if}
</section>
