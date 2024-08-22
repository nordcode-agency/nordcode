<script lang="ts">
import { goBack, rendererStore } from '../store/rendererStore.ts';
</script>
<section class="nc-questionnaire-renderer nc-region">
    <div class="nc-center page-center-layout">
        <div class="nc-stack -far">
        <button
            class="nc-button -stealth"
            type="button"
            disabled={$rendererStore.currentState === "start"}
            on:click={goBack}
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
                ><path stroke="none" d="M0 0h24v24H0z"/><path d="M5 12h14M5 12l4 4M5 12l4-4"/></svg>
            <span>Zurück</span>
        </button>
        <slot name="content" />
    <div class="nc-questionnaire-renderer-controls">
        <slot name="controls" />
    </div>
    <dl>
    {#each $rendererStore.answers as answer}
        <dt>{answer.question.title}</dt>
        <dd>{answer.answer}</dd>
    {/each}
    </dl>
        <!-- @todo: add overview over answers -->
        <pre>
            <code>
                {JSON.stringify($rendererStore, null, 2)}
                </code>
            </pre>
    </div>
    </div>
</section>
