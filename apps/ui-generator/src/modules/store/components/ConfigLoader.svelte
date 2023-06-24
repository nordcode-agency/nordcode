<script lang="ts">

    import {getThemeFromOKLCH} from "../utils/getThemeFromOKLCH";
    import {getStandardColorTheme} from "../utils/getStandardColorTheme";
    import {writable} from "svelte/store";
    import ContextPreview from "./ContextPreview.svelte";
    import {slide} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import {getShadows} from "../utils/getShadows";
    import ExportDialog from "./ExportDialog.svelte";
    import type {ConfigStore} from "../configStore";
    import {configStore} from "../configStore";


    let allStyles = ''

    const updateStyles = (store: ConfigStore) => {
        allStyles =
            `
        /* Typography */

        --font-family-mono: ${store.fontFamilyMono};
        --font-family-sans: ${store.fontFamilySans};
        --font-family-serif: ${store.fontFamilySerif};
        --font-family-default: var(--font-family-${store.fontFamilyDefault});

        --font-weight-bold: ${store.fontWeightBold};
        --font-weight-regular: ${store.fontWeightRegular};
        --font-weight-light: ${store.fontWeightLight};

        --line-height-large: ${store.lineHeightLarge};
        --line-height-base: ${store.lineHeightBase};
        --line-height-small: ${store.lineHeightSmall};

        --tracking-base: ${store.trackingStandard}em;
        --tracking-tight: ${store.trackingTight}em;
        --tracking-wide: ${store.trackingWide}em;

        --measure-large: ${store.measureLarge}ch;
        --measure-base: ${store.measureBase}ch;
        --measure-small: ${store.measureSmall}ch;

        --font-size-smallest: ${store.fontSizeSmallest}${store.fontSizeUnit};
        --font-size-small: ${store.fontSizeSmall}${store.fontSizeUnit};
        --font-size-base: ${store.fontSizeBase}${store.fontSizeUnit};
        --font-size-large: ${store.fontSizeLarge}${store.fontSizeUnit};
        --font-size-largest: ${store.fontSizeLargest}${store.fontSizeUnit};


        /* Spacing */

        --spacing-tiny: ${store.spacingTiny}rem;
        --spacing-nearest: ${store.spacingNearest}rem;
        --spacing-near: ${store.spacingNear}rem;
        --spacing-base: ${store.spacingBase}rem;
        --spacing-far: ${store.spacingFar}rem;
        --spacing-farthest: ${store.spacingFarthest}rem;


        /* Borders */

        --border-width-thin: ${store.borderWidthThin}px;
        --border-width-medium: ${store.borderWidthMedium}px;
        --border-width-thick: ${store.borderWidthThick}px;

        --border-radius-small: ${store.borderRadiusSmall}px;
        --border-radius-medium: ${store.borderRadiusMedium}px;
        --border-radius-large: ${store.borderRadiusLarge}px;
        --border-radius-round: 1e5px;

        ${getShadows(store)}

        ${store.useLCH ? getThemeFromOKLCH(store) : getStandardColorTheme(store)}
        `.replace(/^ +/gm, '')
    }

    configStore.subscribe(updateStyles)

    const previewShown = writable(false)
    const togglePreview = () => {
        previewShown.update(prev => !prev)
    }
</script>

<div style={allStyles} class="stack container">
    <div class="cluster | actions">
        <button class="nc-button export-button" data-opens-dialog="export-dialog">Export</button>
        <button class="nc-button" on:click={togglePreview}>Preview</button>
    </div>
    <ExportDialog allStyles={allStyles}/>
    {#if $previewShown}
        <div transition:slide={{axis: "x", ease: quintOut}}>
            <ContextPreview/>
        </div>
    {:else}
        <div transition:slide={{axis: "x", ease: quintOut}}>
            <slot></slot>
        </div>
    {/if}
</div>

<style>
    .container {
        position: relative;
    }

    .actions {
        position: sticky;
        inset: 0 0 auto auto;
        margin-inline-start: auto;
    }

</style>
