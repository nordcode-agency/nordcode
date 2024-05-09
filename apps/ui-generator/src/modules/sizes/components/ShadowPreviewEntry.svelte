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

const token = `--shadow-${entry.name.toLowerCase()}`;
let resolvedValue = '';

const getResolvedValue = (token: string) => {
    if (!document) {
        return '';
    }
    const themeEl = document.querySelector('.live-theme');
    if (!themeEl) {
        return '';
    }
    const style = getComputedStyle(themeEl);

    return style.getPropertyValue(token).trim();
};

$: lightShadow = `${token}-light`;
$: darkShadow = `${token}-dark`;

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
        inline-size: 3rem;
        block-size: 3rem;
        border-radius: var(--border-radius-medium);
        border: var(--border-width-thin) solid;
    }

</style>

<div class="nc-grid">
    <TokenDescriptor
        name={entry.name}
        token={token}
        description={entry.description}
        resolvedValue={resolvedValue}
    />

    <div class="nc-box lightpreview nc-cluster" style="background: var(--color-surface-light-inset);">
        <div class="nc-box preview-box" style="box-shadow: var({lightShadow}); border-color: var(--color-border-light-default);">
        </div>
    </div>
    <div class="nc-box darkpreview nc-cluster" style="background: var(--color-surface-dark-inset);">
        <div class="nc-box preview-box" style="box-shadow: var({darkShadow}); border-color: var(--color-border-dark-default);">
        </div>
    </div>
</div>
