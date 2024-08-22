<script lang="ts">
import { onMount } from 'svelte';
import {
    getThemeMutationObserver,
    type ThemeMutationObserverListener,
} from '../../common/utils/ThemeMutationObserver.ts';

export let color: {
    name: string;
    description: string;
};

export let surfaceColor: string;
export let baseToken: string;

const token = `${baseToken}-${color.name.toLowerCase()}`;
const previewId = `border-preview-${color.name}`;

let resolvedColor = '';

const getComputedColor = (variant: 'light' | 'dark') => {
    const el = document.getElementById(`${previewId}-${variant}`);
    console.log(el);
    if (!el) {
        return '';
    }
    return window.getComputedStyle(el).getPropertyValue('border-color').trim();
};

const updateResolvedColor: ThemeMutationObserverListener = (style) => {
    if (!style) {
        return;
    }
    resolvedColor = `${getComputedColor('light')} / ${getComputedColor('dark')}`;
};

onMount(() => {
    getThemeMutationObserver().subscribe((style) => {
        updateResolvedColor(style);
    });

    updateResolvedColor(getThemeMutationObserver().getStyle());
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

    .text-box {
        padding-block: var(--spacing-base);
    }

    .token {
        font-size: var(--font-size-small);
        padding-inline: 1ch;
    }

    .description {
        color: var(--color-text-muted);
    }

    .thin {
        inline-size: 2rem;
        block-size: 2rem;
        border-width: var(--border-width-thin);
        border-color: inherit;
    }

    .medium {
        inline-size: 2rem;
        block-size: 2rem;
        border-width: var(--border-width-medium);
                border-color: inherit;
    }

    .thick {
        inline-size: 2rem;
        block-size: 2rem;
        border-width: var(--border-width-thick);
        border-color: inherit;
    }
</style>

<div class="nc-grid">
    <div class="nc-stack -near text-box">
        <div class="nc-stack -nogap">
            <p class="nc-input-label">
                {color.name}
            </p>
        <p class="nc-hint">{resolvedColor}</p>
        </div>

            <div class="nc-cluster -near">
        <code class="token">
            {token}
        </code>
            <button class="nc-button -outline -small" data-copy-target={token}>
                <svg xmlns="http://www.w3.org/2000/svg" class="nc-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>
            </button>
                </div>
        <p class="description">{color.description}</p>
    </div>
    <div class="nc-box lightpreview nc-cluster" id="{previewId}-light" style="background: var({surfaceColor}); border-color: var({token})" data-theme="light">
        <div class="thin"></div>
        <div class="medium"></div>
        <div class="thick"></div>
    </div>
    <div class="nc-box darkpreview nc-cluster" id="{previewId}-dark" style="background: var({surfaceColor}); border-color: var({token})" data-theme="dark">
        <div class="thin"></div>
        <div class="medium"></div>
        <div class="thick"></div>
    </div>
</div>
