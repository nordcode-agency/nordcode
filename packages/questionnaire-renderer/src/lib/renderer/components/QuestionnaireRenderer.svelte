<script lang="ts">
import { onMount } from 'svelte';
import { rendererStore, setQuestionnaire } from '../store/rendererStore.ts';
import type { Questionnaire } from '$lib/questionnaire/index.ts';
import StartPage from './StartPage.svelte';
import QuestionPage from './QuestionPage.svelte';

export let questionnaire: Questionnaire;

onMount(() => {
    if (questionnaire) {
        setQuestionnaire(questionnaire);
    }
});
</script>

{#if $rendererStore?.questionnaire}
    {#if $rendererStore.currentState === "start"}
    <StartPage></StartPage>
    {:else if $rendererStore.currentState === "questions"}
        <QuestionPage></QuestionPage>
    {/if}
{:else}
    <p>Kein Fragebogen ausgewählt</p>
{/if}
