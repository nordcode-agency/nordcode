import type { ConfigStore } from '../configStore';

export const getShadows = (store: ConfigStore) => {
    const shadowColorLightLch = `${store.lightShadowColorLightness}% ${store.lightShadowColorChroma} ${store.primaryHue}`;
    const shadowColorLight = `oklch(${shadowColorLightLch})`;

    const shadowColorDarkLch = `${store.darkShadowColorLightness}% ${store.darkShadowColorChroma} ${store.primaryHue}`;
    const shadowColorDark = `oklch(${shadowColorDarkLch})`;

    const shadowConfig = {
        scaleFactor: store.shadowConfigDistanceScaleFactor,
        blurFactor: store.shadowConfigBlurScaleFactor,
        startTransparency: store.shadowConfigStartTransparency,
        transparencyScale: store.shadowConfigTransparencyScale,
        spreadMax: store.shadowConfigSpreadMax,
        spreadMin: store.shadowConfigSpreadMin,
        xOffsetFactor: store.shadowConfigXOffsetFactor,
    };

    return `
            /* SHADOWS */
            /* Light Theme */
            
            
            --shadow-inset-light: inset ${
                store.shadowDistanceInset * store.shadowConfigXOffsetFactor
            }px ${store.shadowDistanceInset}px 0px 0 ${getLchColorWithTransparency(
                shadowColorLight,
                store.shadowConfigStartTransparency / 3,
            )};
            
            --shadow-nearest-light: ${generateShadow(
                store.shadowDistanceNearest,
                shadowColorLight,
                shadowConfig,
            )};
            --shadow-near-light: ${generateShadow(
                store.shadowDistanceNear,
                shadowColorLight,
                shadowConfig,
            )};
            --shadow-medium-light: ${generateShadow(
                store.shadowDistanceMedium,
                shadowColorLight,
                shadowConfig,
            )};
            --shadow-far-light: ${generateShadow(
                store.shadowDistanceFar,
                shadowColorLight,
                shadowConfig,
            )};
            
            --shadow-color-light: ${shadowColorLight};
            --shadow-color-light-lch: ${shadowColorLightLch};
            
            /* Dark Theme */
            
            --shadow-inset-dark: inset ${store.shadowDistanceInset}px ${
                store.shadowDistanceInset
            }px 0px 0  ${getLchColorWithTransparency(
                shadowColorDark,
                store.shadowConfigStartTransparency / 3,
            )};
            
            --shadow-nearest-dark: ${generateShadow(
                store.shadowDistanceNearest,
                shadowColorDark,
                shadowConfig,
            )};
            --shadow-near-dark: ${generateShadow(
                store.shadowDistanceNear,
                shadowColorDark,
                shadowConfig,
            )};
            --shadow-medium-dark: ${generateShadow(
                store.shadowDistanceMedium,
                shadowColorDark,
                shadowConfig,
            )};
            --shadow-far-dark: ${generateShadow(
                store.shadowDistanceFar,
                shadowColorDark,
                shadowConfig,
            )};
            
            --shadow-color-dark: ${shadowColorDark};
            --shadow-color-dark-lch: ${shadowColorDarkLch};
        `;
};

// ideas from: https://shadows.brumm.af/ and material design and https://www.joshwcomeau.com/shadow-palette/
const amountOfExtraShadows = 4;
const round = (num: number) => Math.round(num * 100) / 100;
const getLchColorWithTransparency = (color: string, transparency: number) =>
    `${color.slice(0, -1)} / ${round(transparency * 100)}%)`;

const getSpread = (min: number, max: number, totalSteps: number, step: number) => {
    const spread = min + ((max - min) / totalSteps) * step;
    return round(spread);
};
// use color for creating the correct one
const generateShadow = (
    distance: number,
    color: string,
    config: {
        scaleFactor: number;
        blurFactor: number;
        startTransparency: number;
        transparencyScale: number;
        spreadMax: number;
        spreadMin: number;
        xOffsetFactor: number;
    },
) => {
    const {
        scaleFactor,
        blurFactor,
        startTransparency,
        transparencyScale,
        spreadMax,
        spreadMin,
        xOffsetFactor,
    } = config;

    let shadowString = '';

    for (let i = 0; i <= amountOfExtraShadows; i++) {
        const d = round(distance * scaleFactor ** i);
        const blur = round(d * blurFactor);
        const shadowColor = getLchColorWithTransparency(
            color,
            startTransparency * transparencyScale ** i,
        );
        const spread = getSpread(spreadMax, spreadMin, amountOfExtraShadows, i);
        // const spread = 0;

        shadowString = `${
            d * xOffsetFactor
        }px ${d}px ${blur}px ${spread}px ${shadowColor}, ${shadowString}`;
    }
    return shadowString.slice(0, -2);
};
