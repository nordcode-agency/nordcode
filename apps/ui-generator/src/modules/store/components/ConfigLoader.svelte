<script lang="ts">

    import type {ColorsStore} from "../../colors/colorStore";
    import {colorStore} from "../../colors/colorStore";
    import type {TypoStore} from "../../typography/typoStore";
    import {typoStore} from "../../typography/typoStore";
    import type {SizesStore} from "../../sizes/sizesStore";
    import {sizesStore} from "../../sizes/sizesStore";
    import {getThemeFromOKLCH} from "../utils/getThemeFromOKLCH";
    import {getStandardColorTheme} from "../utils/getStandardColorTheme";
    import {writable} from "svelte/store";
    import ContextPreview from "./ContextPreview.svelte";
    import {slide} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import {getShadows} from "../utils/getShadows";
    import ExportDialog from "./ExportDialog.svelte";


    let sizesStyle = ""
    let typoStyle = ''
    let colorStyle = ''
    let allStyles = ''

    const updateTypoStyle = (store: TypoStore) => {
        typoStyle =
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
        `
    }

    const updateSizesStyle = (store: SizesStore) => {
        sizesStyle =
            `

        /* Spacing */

        --spacing-tiny: ${store.spacingTiny}rem;
        --spacing-nearest: ${store.spacingNearest}rem;
        --spacing-near: ${store.spacingNear}rem;
        --spacing-base: ${store.spacingBase}rem;
        --spacing-far: ${store.spacingFar}rem;
        --spacing-farthest: ${store.spacingFarthest}rem;


        /* Borders */

        --border-width-thin: ${store.borderWidthThin}px;
        --border-width-normal: ${store.borderWidthNormal}px;
        --border-width-thick: ${store.borderWidthThick}px;

        --border-radius-small: ${store.borderRadiusSmall}px;
        --border-radius-normal: ${store.borderRadiusNormal}px;
        --border-radius-large: ${store.borderRadiusLarge}px;
        --border-radius-round: 1e5px;

        ${getShadows(store)}
        `
    }

    const updateColorStyle = (store: ColorsStore) => {
        if (store.useLCH) {
            colorStyle = getThemeFromOKLCH(store)
        } else {
            colorStyle = getStandardColorTheme(store)
        }
    }


    typoStore.subscribe(store => updateTypoStyle(store))
    sizesStore.subscribe(store => updateSizesStyle(store))
    colorStore.subscribe(store => updateColorStyle(store))

    $: {
        allStyles = [
            sizesStyle,
            typoStyle,
            colorStyle
        ].join("\n").replace(/^ +/gm, '')

    }

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
