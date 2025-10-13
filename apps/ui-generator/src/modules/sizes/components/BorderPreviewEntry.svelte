<script lang="ts">
import TokenDescriptor from '../../common/components/TokenDescriptor.svelte';
import {
    getThemeMutationObserver,
    type ThemeMutationObserverListener,
} from '../../common/utils/ThemeMutationObserver.ts';

interface PreviewEntryProps {
    entry: {
        name: string;
        description: string;
    };
    token: string;
    style: string;
}

const { entry, token, style }: PreviewEntryProps = $props();

let resolvedValue = $state('');

const updateResolvedValue: ThemeMutationObserverListener = (style) => {
    if (!style) {
        return;
    }
    resolvedValue = `${style.getPropertyValue(token).trim()}`;
};

$effect(() => {
    getThemeMutationObserver().subscribe((style) => {
        updateResolvedValue(style);
    });

    updateResolvedValue(getThemeMutationObserver().getStyle());
});
</script>

<div class="nc-grid">
    <TokenDescriptor name={entry.name} {token} description={entry.description} {resolvedValue} />

    <div class="nc-box -bordered nc-cluster preview-box">
        <div class="preview" {style}></div>
    </div>
</div>

<style>
.nc-grid {
    grid-template-columns: 1fr 1fr;
    inline-size: 100%;
}

.preview-box {
    background: var(--color-surface-subtle);
}

.preview {
    border: var(--border-width-thin) solid var(--color-border-base);
    inline-size: 6rem;
    block-size: 6rem;
    background: var(--color-surface-base);
    box-shadow: var(--shadow-near);
}
</style>
