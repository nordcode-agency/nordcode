<script lang="ts">
import TokenDescriptor from '../../common/components/TokenDescriptor.svelte';
import {
    getThemeMutationObserver,
    type ThemeMutationObserverListener,
} from '../../common/utils/ThemeMutationObserver.ts';
import { onMount } from 'svelte';
export let spacing: {
    name: string;
    description: string;
};

const token = `--spacing-${spacing.name.toLowerCase()}`;
let resolvedValue = '';

const style = `gap: var(${token})`;

const updateResolvedValue: ThemeMutationObserverListener = (style) => {
    if (!style) {
        return;
    }
    resolvedValue = `${style.getPropertyValue(token).trim()}`;
};

onMount(() => {
    getThemeMutationObserver().subscribe((style) => {
        updateResolvedValue(style);
    });

    updateResolvedValue(getThemeMutationObserver().getStyle());
});
</script>

<div class="nc-grid">
    <TokenDescriptor
        name={spacing.name}
        {token}
        description={spacing.description}
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
