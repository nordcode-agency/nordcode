<script lang="ts">
import MarkdownInput from './MarkdownInput.svelte';
import type { MarkdownInputProps } from './types/MarkdownInputProps.ts';

let { htmlOutput = $bindable(), ...rest }: MarkdownInputProps = $props();
</script>

<style>
    .nc-markdown-editor {
        inline-size: 100%;
        min-block-size: 15lh;
        --nc-markdown-min-block-size: 15lh;
    }

    .nc-markdown-preview {
        position: relative;
        background: var(--color-surface-muted);
        flex: 1;
        min-block-size: 100%;
        overflow-y: auto;
    }

    .preview-tag {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        font-size: var(--font-size-smallest);
    }
</style>

<div class="nc-cluster nc-markdown-editor -nowrap">
    <MarkdownInput
        {...rest}
        bind:htmlOutput={htmlOutput}
    >
    </MarkdownInput>
    <div class="nc-box -bordered nc-flow nc-markdown-preview">
        <span class="badge preview-tag -emphasis">Markdown Preview</span>
        {@html htmlOutput}
    </div>
</div>
