<script lang="ts">
import MarkdownInput from './MarkdownInput.svelte';

export let label: string;
export let name: string;
export let id: string;
export let errors: string[] = [];
export let hint: string = '';
export let optional: boolean = false;
export let value: string = '';
export let htmlOutput: string = '';

const handleInput = (
    event: CustomEvent<{
        value: string;
    }>,
) => {
    value = event.detail.value;
};
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
        {id}
        {label}
        {optional}
        {errors}
        {hint}
        {name}
        {value}
        bind:htmlOutput={htmlOutput}
        on:input={handleInput}
    >
    </MarkdownInput>
    <div class="nc-box -bordered nc-flow nc-markdown-preview">
        <span class="badge preview-tag -emphasis">Markdown Preview</span>
        {@html htmlOutput}
    </div>
</div>
