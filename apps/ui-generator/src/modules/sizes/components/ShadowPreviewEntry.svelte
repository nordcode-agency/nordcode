<script lang="ts">
import TokenDescriptor from '../../common/components/TokenDescriptor.svelte';
import {
    getThemeMutationObserver,
    type ThemeMutationObserverListener,
} from '../../common/utils/ThemeMutationObserver.ts';

interface ShadowPreviewEntryProps {
    entry: {
        name: string;
        description: string;
    };
}

const { entry }: ShadowPreviewEntryProps = $props();

let resolvedValue = $state('');

let token = $derived(`--shadow-${entry.name.toLowerCase()}`);
let lightShadow = $derived(`${token}-light`);
let darkShadow = $derived(`${token}-dark`);

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

    <div
        class="nc-box lightpreview nc-cluster"
        style="background: var(--color-surface-light-inset);"
    >
        <div
            class="nc-box preview-box"
            style="box-shadow: var({lightShadow}); border-color: var(--color-border-light-default);"
        ></div>
    </div>
    <div class="nc-box darkpreview nc-cluster" style="background: var(--color-surface-dark-inset);">
        <div
            class="nc-box preview-box"
            style="box-shadow: var({darkShadow}); border-color: var(--color-border-dark-default);"
        ></div>
    </div>
</div>

<style>
    .nc-grid {
        grid-template-columns: 2fr 1fr 1fr;
        inline-size: 100%;

        &:first-of-type > .nc-box {
            border-start-start-radius: var(--border-radius-medium);
            border-start-end-radius: var(--border-radius-medium);
        }

        &:last-of-type > .nc-box {
            border-end-start-radius: var(--border-radius-medium);
            border-end-end-radius: var(--border-radius-medium);
        }
    }

    .preview-box {
        inline-size: 12rem;
        block-size: 9rem;
        border-radius: var(--border-radius-medium);
        border: var(--border-width-thin) solid;
    }
</style>
