<script lang="ts">
    import { toSpecificVersion } from '../../common/utils/toSpecificVersion.ts';
    import TokenDescriptor from '../../common/components/TokenDescriptor.svelte';
    import {
        getThemeMutationObserver,
        type ThemeMutationObserverListener,
    } from '../../common/utils/ThemeMutationObserver.ts';
    import { onMount } from 'svelte';

    export let color: {
        name: string;
        description: string;
    };

    export let surfaceColor: string;
    export let baseToken: string;
    export let protectedString = '';

    const token = `${baseToken}-${color.name.toLowerCase()}`;

    const isSurface = token === surfaceColor;

    let resolvedColor = '';

    $: lightSurface = toSpecificVersion(surfaceColor, 'light', protectedString);
    $: darkSurface = toSpecificVersion(surfaceColor, 'dark', protectedString);

    $: lightText = toSpecificVersion(token, 'light', protectedString);
    $: darkText = toSpecificVersion(token, 'dark', protectedString);

    const updateResolvedColor: ThemeMutationObserverListener = style => {
        if (!style) {
            return;
        }
        resolvedColor = `${style.getPropertyValue(lightText).trim()} / ${style
            .getPropertyValue(darkText)
            .trim()}`;
    };

    onMount(() => {
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
    <div class="nc-box lightpreview nc-cluster preview" style="background: var({lightSurface})">
        {#if isSurface}
            <p class="nc-input-label current">Current surface color</p>
        {:else}
            <div class="nc-box preview-box" style="background: var({lightText});"></div>
            <p class="preview-text" style="color: var({lightText});">Aa</p>
        {/if}
    </div>
    <div class="nc-box darkpreview nc-cluster preview" style="background: var({darkSurface})">
        {#if isSurface}
            <p class="nc-input-label current">Current surface color</p>
        {:else}
            <div class="nc-box preview-box" style="background: var({darkText});"></div>
            <p class="preview-text" style="color: var({darkText});">Aa</p>
        {/if}
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
        inline-size: 6rem;
        block-size: 6rem;
        border-radius: var(--border-radius-medium);
        box-shadow: var(--shadow-near);
    }

    .preview-text {
        font-size: 3.5rem;
        line-height: 1;
    }

    .lightpreview .current {
        color: var(--color-text-light-default);
        cursor: unset;
    }

    .darkpreview .current {
        color: var(--color-text-dark-default);
        cursor: unset;
    }
</style>
