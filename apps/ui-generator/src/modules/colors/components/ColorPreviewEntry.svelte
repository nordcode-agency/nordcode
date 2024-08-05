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

    const token = `${baseToken}-${color.name.toLowerCase()}`;

    const isSurface = token === surfaceColor;

    let resolvedColor = '';

    $: lightSurface = toSpecificVersion(surfaceColor, 'light');
    $: darkSurface = toSpecificVersion(surfaceColor, 'dark');

    $: lightText = toSpecificVersion(token, 'light');
    $: darkText = toSpecificVersion(token, 'dark');

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
            <div class="nc-box color-preview" style="background: var({lightText});"></div>
            <p class="preview-text" style="color: var({lightText});">Aa</p>
        {/if}
    </div>
    <div class="nc-box darkpreview nc-cluster preview" style="background: var({darkSurface})">
        {#if isSurface}
            <p class="nc-input-label current">Current surface color</p>
        {:else}
            <div class="nc-box color-preview" style="background: var({darkText});"></div>
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

    .preview-text {
        font-size: 3.5rem;
        line-height: 1;
    }

    .lightpreview .current {
        color: var(--color-text-base-light);
        cursor: unset;
    }

    .darkpreview .current {
        color: var(--color-text-base-dark);
        cursor: unset;
    }
</style>
