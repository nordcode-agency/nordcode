import type { ConfigStore } from '../configStore';
import { getShadows } from './getShadows';
import { getStringTheme } from './getStringTheme';

export const generateStyleString = (store: ConfigStore): string => {
    return `
        /* Typography */

        --font-family-mono: ${store.fontFamilyMono};
        --font-family-sans: ${store.fontFamilySans};
        --font-family-serif: ${store.fontFamilySerif};
        --font-family-default: var(--font-family-${store.fontFamilyDefault});

        --font-weight-default: ${store.fontWeightDefault};
        --font-weight-heading: ${store.fontWeightHeading};
        --font-weight-active: ${store.fontWeightActive};
        --font-weight-strong: ${store.fontWeightStrong};

        --line-height-large: ${store.lineHeightLarge}ex;
        --line-height-base: ${store.lineHeightBase}ex;
        --line-height-small: ${store.lineHeightSmall}ex;

        --tracking-base: ${store.trackingStandard}ch;
        --tracking-tight: ${store.trackingTight}ch;
        --tracking-wide: ${store.trackingWide}ch;

        --measure-large: ${store.measureLarge}ch;
        --measure-base: ${store.measureBase}ch;
        --measure-small: ${store.measureSmall}ch;

        --font-size-smallest: max(${store.fontSizeSmallest}${store.fontSizeUnit}, 12px);
        --font-size-small: max(${store.fontSizeSmall}${store.fontSizeUnit}, 14px);
        --font-size-base: ${store.fontSizeBase}${store.fontSizeUnit};
        --font-size-large: ${store.fontSizeLarge}${store.fontSizeUnit};
        --font-size-largest: ${store.fontSizeLargest}${store.fontSizeUnit};
        --font-size-display: ${store.fontSizeDisplay}${store.fontSizeUnit};
        
        /* Transparency */
        --transparency-weaker:  ${store.transparencyWeaker};

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

        ${getStringTheme(store)}
        `.replace(/^ +/gm, '');
};
