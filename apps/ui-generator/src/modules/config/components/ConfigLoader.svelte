<script lang="ts">

    import {typoStore} from "../typoStore";
    import {sizesStore} from "../sizesStore";

    let sizesStyle = ""
    let typoStyle = ''

    const updateTypoStyle = () => {
        typoStyle =
            `
        --font-family-mono: ${$typoStore.fontFamilyMono};
        --font-family-sans: ${$typoStore.fontFamilySans};
        --font-family-serif: ${$typoStore.fontFamilySerif};
        --font-family-default: var(--font-family-${$typoStore.fontFamilyDefault});

        --font-weight-bold: ${$typoStore.fontWeightBold};
        --font-weight-regular: ${$typoStore.fontWeightRegular};
        --font-weight-light: ${$typoStore.fontWeightLight};

        --line-height-large: ${$typoStore.lineHeightLarge};
        --line-height-base: ${$typoStore.lineHeightBase};
        --line-height-small: ${$typoStore.lineHeightSmall};

        --tracking-standard: ${$typoStore.trackingStandard}em;
        --tracking-tight: ${$typoStore.trackingTight}em;
        --tracking-wide: ${$typoStore.trackingWide}em;

        --measure-large: ${$typoStore.measureLarge}ch;
        --measure-base: ${$typoStore.measureBase}ch;
        --measure-small: ${$typoStore.measureSmall}ch;

        --font-size-smallest: ${$typoStore.fontSizeSmallest}${$typoStore.fontSizeUnit};
        --font-size-small: ${$typoStore.fontSizeSmall}${$typoStore.fontSizeUnit};
        --font-size-base: ${$typoStore.fontSizeBase}${$typoStore.fontSizeUnit};
        --font-size-large: ${$typoStore.fontSizeLarge}${$typoStore.fontSizeUnit};
        --font-size-largest: ${$typoStore.fontSizeLargest}${$typoStore.fontSizeUnit};
        `
    }

    const updateSizesStyle = () => {
        sizesStyle =
            `
        --spacing-tiny: ${$sizesStore.spacingTiny}rem;
        --spacing-nearest: ${$sizesStore.spacingNearest}rem;
        --spacing-near: ${$sizesStore.spacingNear}rem;
        --spacing-base: ${$sizesStore.spacingBase}rem;
        --spacing-far: ${$sizesStore.spacingFar}rem;
        --spacing-farthest: ${$sizesStore.spacingFarthest}rem;
        `
    }

    $: $typoStore && updateTypoStyle()
    $: $sizesStore && updateSizesStyle()

</script>

<div style={[
    sizesStyle,
    typoStyle
].join('\n\n')}>
    <slot></slot>
</div>
