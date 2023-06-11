<script lang="ts">

    import {typoStore} from "../typoStore";

    let style = ""

    const updateStyle = (store) => {
        style =
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

        --tracking-standard: ${store.trackingStandard}em;
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

    updateStyle($typoStore);

    $: updateStyle($typoStore)

</script>

<div style={style}>
    <slot></slot>
</div>
