<script lang="ts">
    import {
        getThemeMutationObserver,
        type ThemeMutationObserverListener,
    } from '../../common/utils/ThemeMutationObserver.ts';
    import TokenDescriptor from '../../common/components/TokenDescriptor.svelte';

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

    let resolvedColor = $state('');

    const getComputedColor = (variant: 'light' | 'dark') => {
        const el = document.getElementById(`${previewId}-${variant}`);
        if (!el) {
            return '';
        }
        return window.getComputedStyle(el).getPropertyValue('border-color').trim();
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
    <div class="nc-box lightpreview nc-cluster {surfaceColor}-light">
        <div class="border-preview thin {token}-light" id="{previewId}-light"></div>
        <div class="border-preview medium {token}-light"></div>
        <div class="border-preview thick {token}-light"></div>
    </div>
    <div class="nc-box darkpreview nc-cluster {surfaceColor}-dark">
        <div class="border-preview thin {token}-dark" id="{previewId}-dark"></div>
        <div class="border-preview medium {token}-dark"></div>
        <div class="border-preview thick {token}-dark"></div>
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

    .thin {
        border-width: var(--border-width-thin);
    }

    .medium {
        border-width: var(--border-width-medium);
    }

    .thick {
        border-width: var(--border-width-thick);
    }

    .border-preview {
        inline-size: 2rem;
        block-size: 2rem;
        border-color: currentColor;
        background: none;
    }
</style>
