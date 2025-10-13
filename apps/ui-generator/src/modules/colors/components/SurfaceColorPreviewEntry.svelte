<script lang="ts">
import TokenDescriptor from '../../common/components/TokenDescriptor.svelte';
import {
    getThemeMutationObserver,
    type ThemeMutationObserverListener,
} from '../../common/utils/ThemeMutationObserver.ts';

interface ColorPreviewProps {
    color: {
        name: string;
        description: string;
    };
    textColor: string;
    baseToken: string;
}

let { color, textColor, baseToken }: ColorPreviewProps = $props();

const token = `${baseToken}-${color.name.toLowerCase()}`;
const previewId = `surface-preview-${color.name}`;

let resolvedColor = $state('');

const getComputedColor = (variant: 'light' | 'dark') => {
    const el = document.getElementById(`${previewId}-${variant}`);
    if (!el) {
        return '';
    }
    return window.getComputedStyle(el).getPropertyValue('background').trim();
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
    <div class="nc-box lightpreview nc-cluster" id="{previewId}-light">
        <div class="nc-box color-preview {textColor}-light"></div>
        <p class="preview-text {textColor}-light">Aa</p>
    </div>
    <div class="nc-box darkpreview nc-cluster">
        <div class="nc-box color-preview {textColor}-dark"></div>
        <p class="preview-text {textColor}-dark">Aa</p>
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
}
</style>
