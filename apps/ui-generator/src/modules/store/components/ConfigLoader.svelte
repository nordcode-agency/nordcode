<script lang="ts">

    import type {ColorsStore} from "../../colors/colorStore";
    import {colorStore} from "../../colors/colorStore";
    import type {TypoStore} from "../../typography/typoStore";
    import {typoStore} from "../../typography/typoStore";
    import type {SizesStore} from "../../sizes/sizesStore";
    import {sizesStore} from "../../sizes/sizesStore";
    import {getThemeFromOKLCH} from "../utils/getThemeFromOKLCH";
    import {getStandardColorTheme} from "../utils/getStandardColorTheme";

    let sizesStyle = ""
    let typoStyle = ''
    let colorStyle = ''
    let allStyles = ''

    const updateTypoStyle = (store: TypoStore) => {
        typoStyle =
            `
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
        --spacing-tiny: ${store.spacingTiny}rem;
        --spacing-nearest: ${store.spacingNearest}rem;
        --spacing-near: ${store.spacingNear}rem;
        --spacing-base: ${store.spacingBase}rem;
        --spacing-far: ${store.spacingFar}rem;
        --spacing-farthest: ${store.spacingFarthest}rem;
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

</script>

<div style={allStyles}>
    <button class="nc-button" data-opens-dialog="export-dialog">Export</button>
    <dialog data-id="export-dialog" data-level="1">
      <div class="dialog-container">
        <div class="dialog-header">
          <h2 class="dialog-title">Export Theme</h2>
          <button data-closes-dialog="export-dialog">X</button>
        </div>
        <div class="dialog-content">
            <pre>
                <code>
                    {allStyles}
                </code>
            </pre>
        </div>
      </div>
    </dialog>
    <slot></slot>
</div>
