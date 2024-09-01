<script lang="ts">
import { rendererStore, initialiseQuestionnaire } from '../store/rendererStore.ts';
import type { Questionnaire } from '$lib/questionnaire/index.ts';
import StartPage from './StartPage.svelte';
import QuestionPage from './QuestionPage.svelte';
import FinishPage from './FinishPage.svelte';

interface QuestionnaireRendererProps {
    questionnaire: Questionnaire;
}

let { questionnaire }: QuestionnaireRendererProps = $props();

$effect(() => {
    if (questionnaire) {
        initialiseQuestionnaire(questionnaire);
    }
});
</script>

{#if $rendererStore?.questionnaire}
    {#if $rendererStore.currentState === "start"}
    <StartPage></StartPage>
    {:else if $rendererStore.currentState === "questions"}
        <QuestionPage></QuestionPage>
    {:else if $rendererStore.currentState === "finished"}
        <FinishPage></FinishPage>
    {/if}
{/if}
