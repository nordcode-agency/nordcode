import type { ConfigStore } from "../configStore";
import { getShadows } from "./getShadows";
import { getThemeFromOKLCH } from "./getThemeFromOKLCH";

export const generateStyleString = (store: ConfigStore): string => {
  console.log("updates");
  return `
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

        --font-size-smallest: max(${store.fontSizeSmallest}${
    store.fontSizeUnit
  }, 12px);
        --font-size-small: max(${store.fontSizeSmall}${
    store.fontSizeUnit
  }, 14px);
        --font-size-base: ${store.fontSizeBase}${store.fontSizeUnit};
        --font-size-large: ${store.fontSizeLarge}${store.fontSizeUnit};
        --font-size-largest: ${store.fontSizeLargest}${store.fontSizeUnit};
        --font-size-display: ${store.fontSizeDisplay}${store.fontSizeUnit};


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

        --border-radius-none: ${store.borderRadiusNone}px;
        --border-radius-small: ${store.borderRadiusSmall}px;
        --border-radius-medium: ${store.borderRadiusMedium}px;
        --border-radius-large: ${store.borderRadiusLarge}px;
        --border-radius-round: 1e5px;

        ${getShadows(store)}

        ${getThemeFromOKLCH(store)}
        `.replace(/^ +/gm, "");
};
