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
}

const { entry }: PreviewEntryProps = $props();

const token = $derived(`--spacing-${entry.name.toLowerCase()}`);
let resolvedValue = $state('');

const style = $derived(`gap: var(${token})`);

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
    <TokenDescriptor
        name={entry.name}
        {token}
        description={entry.description}
        {resolvedValue}
    />

    <div class="nc-box -bordered nc-cluster preview-box spacings" {style}>
        <div></div>
        <div></div>
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

.spacings div {
    inline-size: 6rem;
    block-size: 6rem;
    border-radius: var(--border-radius-medium);
    box-shadow: var(--shadow-near);
    background: var(--color-surface-base);
}
</style>
