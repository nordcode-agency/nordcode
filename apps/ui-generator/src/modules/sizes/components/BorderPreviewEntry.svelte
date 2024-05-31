<script lang="ts">
    import TokenDescriptor from '../../common/components/TokenDescriptor.svelte';
    import {
        getThemeMutationObserver,
        type ThemeMutationObserverListener,
    } from '../../common/utils/ThemeMutationObserver.ts';
    import { onMount } from 'svelte';

    export let entry: {
        name: string;
        description: string;
    };

    export let token: string;
    export let style: string;
    let resolvedValue = '';

    const updateResolvedValue: ThemeMutationObserverListener = style => {
        if (!style) {
            return;
        }
        resolvedValue = `${style.getPropertyValue(token).trim()}`;
    };

    onMount(() => {
        getThemeMutationObserver().subscribe(style => {
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
        background: var(--color-surface-inset);
    }

    .preview {
        border: var(--border-width-thin) solid var(--color-border-default);
        inline-size: 6rem;
        block-size: 6rem;
        background: var(--color-surface-default);
        box-shadow: var(--shadow-near);
    }
</style>
