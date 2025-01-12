<script lang="ts">
    import TokenDescriptor from '../../common/components/TokenDescriptor.svelte';
    import {
        type ThemeMutationObserverListener,
        getThemeMutationObserver,
    } from '../../common/utils/ThemeMutationObserver.ts';

    interface ColorPreviewProps {
        color: {
            name: string;
            description: string;
        };
        surfaceColor: string;
        baseToken: string;
    }

    let { color, surfaceColor, baseToken }: ColorPreviewProps = $props();

    const token = `${baseToken}-${color.name.toLowerCase()}`;
    const previewId = `color-preview-${token}`;

    const isSurface = token === surfaceColor;

    let resolvedColor = $state('');

    const getComputedColor = (variant: 'light' | 'dark') => {
        const el = document.getElementById(`${previewId}-${variant}`);

        if (!el) {
            return '';
        }
        return window.getComputedStyle(el).getPropertyValue('background-color').trim();
    };

    const updateResolvedColor: ThemeMutationObserverListener = style => {
        if (!style) {
            return;
        }
        resolvedColor = `${getComputedColor('light')} / ${getComputedColor('dark')}`;
    };

    $effect(() => {
        getThemeMutationObserver().subscribe(style => {
            updateResolvedColor(style);
        });

        updateResolvedColor(getThemeMutationObserver().getStyle());
    });
</script>

<div class="nc-grid">
    <TokenDescriptor
        name={color.name}
        {token}
        description={color.description}
        resolvedValue={resolvedColor}
    />
    <div class="nc-box lightpreview nc-cluster preview {surfaceColor}-light">
        {#if isSurface}
            <p class="nc-input-label current">Current surface color</p>
        {/if}
        <div class="nc-cluster">
            <div class="nc-box color-preview {token}-light" id="{previewId}-light"></div>
            <p class="preview-text {token}-light">Aa</p>
        </div>
    </div>
    <div class="nc-box darkpreview nc-cluster preview {surfaceColor}-dark">
        {#if isSurface}
            <p class="nc-input-label current">Current surface color</p>
        {/if}
        <div class="nc-cluster">
            <div class="nc-box color-preview {token}-dark" id="{previewId}-dark"></div>
            <p class="preview-text {token}-dark">Aa</p>
        </div>
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

    .preview-text {
        font-size: 3.5rem;
        line-height: 1;
        background: transparent !important;
    }

    .lightpreview .current {
        color: var(--color-text-base-light);
        cursor: unset;
    }

    .darkpreview .current {
        color: var(--color-text-base-dark);
        cursor: unset;
    }

    .current + .nc-cluster > .color-preview {
        box-shadow: none;
    }
</style>
