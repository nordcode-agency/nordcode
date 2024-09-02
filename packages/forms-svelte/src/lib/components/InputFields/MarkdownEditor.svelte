<script lang="ts">
import MarkdownInput from './MarkdownInput.svelte';
import type { MarkdownInputProps } from './types/MarkdownInputProps.ts';

let { htmlOutput = $bindable(), value = $bindable(), ...rest }: MarkdownInputProps = $props();
</script>

<style>
    .nc-markdown-editor {
        inline-size: 100%;

        --input-field-max-inline-size: 100%;
        min-block-size: var(--nc-markdown-min-block-size, 8lh);
        isolation: isolate;

        & :global(.nc-cluster) {
            gap: 0;
            align-items: initial;
        }

        & :global(.nc-markdown-input) {
            flex: 1;
            inline-size: auto;
            border-start-end-radius: 0;
            border-end-end-radius: 0;
            padding: var(--spacing-base);

        }
    }

    .nc-markdown-preview {
        position: relative;
        background: var(--color-surface-muted);
        flex: 1;
        min-block-size: 100%;
        overflow-y: auto;
        border-start-start-radius: 0;
        border-end-start-radius: 0;
        z-index: -1;
    }

</style>

<div class="nc-markdown-editor">
    <MarkdownInput
        {...rest}
        bind:value={value}
        bind:htmlOutput={htmlOutput}
    >
    <div class="nc-box -bordered nc-markdown-preview">
        {#if htmlOutput}
            {@html htmlOutput}
        {/if}

    </div>
    </MarkdownInput>

</div>
