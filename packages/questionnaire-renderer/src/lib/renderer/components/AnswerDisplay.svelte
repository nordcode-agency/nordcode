<script lang="ts">
    import { QuestionType } from '@nordcode/questionnaire-renderer';
    import { convertToHtml } from '@nordcode/forms-svelte';
    import { rendererStore, goToQuestion } from '../store/rendererStore.ts';
</script>

<dl>
    {#each $rendererStore.answers as answer, idx}
        {#if answer.answer}
            <dt>{answer.question.title}</dt>
            <dd class="nc-cluster -between">
                <span style="max-inline-size: var(--measure-base);">
                    {#if answer.question.type === QuestionType.long_text}
                        {@html convertToHtml(answer.answer)}
                    {:else}
                        {answer.answer}
                    {/if}
                </span>
                <button
                    class="nc-button -primary -stealth -aligned"
                    onclick={() => goToQuestion(idx)}>Bearbeiten</button
                >
            </dd>
        {/if}
    {/each}
</dl>
