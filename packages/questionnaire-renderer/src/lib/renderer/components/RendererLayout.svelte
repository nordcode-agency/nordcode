<script lang="ts">
    import type { Snippet } from 'svelte';
    import { goBack, rendererStore, resetQuestionnaire } from '../store/rendererStore.ts';
    import AnswerDisplay from './AnswerDisplay.svelte';

    let {
        content,
        controls,
    }: {
        content: Snippet;
        controls: Snippet;
    } = $props();
</script>

<section class="nc-questionnaire-renderer nc-region">
    <div class="nc-center page-center-layout nc-pile">
        <div class="nc-card nc-form">
            <div class="nc-stack -far">
                <button
                    class="nc-button -stealth"
                    type="button"
                    disabled={$rendererStore.currentState === 'start'}
                    onclick={goBack}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="nc-icon"
                        data-size="inline"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        ><path stroke="none" d="M0 0h24v24H0z" /><path
                            d="M5 12h14M5 12l4 4M5 12l4-4"
                        /></svg
                    >
                    <span>Zurück</span>
                </button>
                {@render content?.()}
                <div class="nc-questionnaire-renderer-controls">
                    {@render controls?.()}
                </div>
                {#if $rendererStore.currentState === 'questions'}
                    <section class="nc-region nc-stack -contained -stretched">
                        <h3>Deine Antworten</h3>
                        <button
                            onclick={resetQuestionnaire}
                            class="nc-button -primary -stealth -aligned">Von vorne beginnen</button
                        >
                        <AnswerDisplay></AnswerDisplay>
                    </section>
                {/if}
            </div>
        </div>
    </div>
</section>
