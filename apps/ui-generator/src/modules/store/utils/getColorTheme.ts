import type { ConfigStore } from '../configStore';
import { generateDarkBorderColorValues, generateLightBorderColorValues } from './generateBorderColorValues.ts';
import { generateColorValues } from './generateColorValues';
import { generateDarkSurfaceColorValues, generateLightSurfaceColorValues } from './generateSurfaceColorValues.ts';
import { generateDarkTextColorValues, generateLightTextColorValues } from './generateTextColorValues.ts';
import {
    dangerHue,
    getBorderDarkValues,
    getBorderLightValues,
    getDangerLightness,
    getDarkColorValues,
    getInfoLightness,
    getLightColorValues,
    getStatusDarkColorValues,
    getStatusLightColorValues,
    getSuccessLightness,
    getSurfaceDarkValues,
    getSurfaceLightValues,
    getTextDarkValues,
    getTextLightValues,
    getWarningLightness,
    infoHue,
    successHue,
    warningHue,
} from './SharedThemeValues';
import type { AdapterMapFn } from './ThemeAdapters';

export const getMappedColors = <T>(
    store: ConfigStore,
    adapterFn: AdapterMapFn<T>,
): Record<string, T> => {
    const theme = getColorTheme(store);
    return Object.entries(theme)
        .map(adapterFn)
        .reduce(
            (acc, [name, value]) => {
                acc[name] = value;
                return acc;
            },
            {} as Record<string, T>,
        );
};

export const getColorTheme = (store: ConfigStore): Record<string, string> => {
    const textHueToken = store.useSecondaryColorForFG ? '--h-brand-secondary' : '--h-brand-primary';
    const surfaceHueToken = store.useSecondaryColorForBG
        ? '--h-brand-secondary'
        : '--h-brand-primary';
    const borderHueToken = store.useSecondaryColorForBorders
        ? '--h-brand-secondary'
        : '--h-brand-primary';

    return {
        '--lightness-max': `${store.lightnessMax}`,
        '--lightness-min': `${store.lightnessMin}`,
        '--lightness-diff': 'calc(var(--lightness-max) - var(--lightness-min))',
        // this is tricky, because it's not completely uniform
        // the best contrast seems to be achieved by moving slightly upwards from the middle
        '--lightness-contrast-cutoff': 'calc(var(--lightness-min) + var(--lightness-diff) * 0.5 + 0.05)',
        '--neutral-chroma-scale': `${store.neutralChromaScale}`,
        '--transparency-weaker': `${store.transparencyWeaker}`,

        ...generateColorValues('brand-primary', {
            l: +store.primaryLightness,
            c: +store.primaryChroma,
            h: +store.primaryHue,
            lDark: +store.primaryLightnessDark,
        }),
        ...generateColorValues('brand-secondary', {
            l: +store.secondaryLightness,
            c: +store.secondaryChroma,
            h: +store.secondaryHue,
            lDark: +store.secondaryLightnessDark,
        }),
        ...generateLightTextColorValues('text', {
            l: +store.lightNeutralTextLightness,
            c: +store.lightNeutralChromaFG,
            hueToken: textHueToken,
            scalingFactor: +store.lightTextLightnessScaleFactor,
        }),
        ...generateDarkTextColorValues('text', {
            l: +store.darkNeutralTextLightness,
            c: +store.darkNeutralChromaFG,
            hueToken: textHueToken,
            scalingFactor: +store.darkTextLightnessScaleFactor,
        }),
        ...generateLightSurfaceColorValues('surface', {
            l: +store.lightNeutralSurfaceLightness,
            c: +store.lightNeutralChromaBG,
            hueToken: surfaceHueToken,
            scalingFactor: +store.lightSurfaceLightnessScaleFactor,
        }),
        ...generateDarkSurfaceColorValues('surface', {
            l: +store.darkNeutralSurfaceLightness,
            c: +store.darkNeutralChromaBG,
            hueToken: surfaceHueToken,
            scalingFactor: +store.darkSurfaceLightnessScaleFactor,
        }),
        ...generateLightBorderColorValues('border', {
            l: +store.lightNeutralBorderLightness,
            c: +store.lightNeutralChromaBorder,
            hueToken: borderHueToken,
            scalingFactor: +store.lightBorderLightnessScaleFactor,
        }),
        ...generateDarkBorderColorValues('border', {
            l: +store.darkNeutralBorderLightness,
            c: +store.darkNeutralChromaBorder,
            hueToken: borderHueToken,
            scalingFactor: +store.darkBorderLightnessScaleFactor,
        }),
        ...generateColorValues('status-success', {
            l: +store.primaryLightness,
            c: +store.primaryChroma,
            h: successHue,
            lDark: +store.primaryLightnessDark,
        }),
        ...generateColorValues('status-warning', {
            l: +store.primaryLightness,
            c: +store.primaryChroma,
            h: warningHue,
            lDark: +store.primaryLightnessDark,
        }),
        ...generateColorValues('status-danger', {
            l: +store.primaryLightness,
            c: +store.primaryChroma,
            h: dangerHue,
            lDark: +store.primaryLightnessDark,
        }),
        ...generateColorValues('status-info', {
            l: +store.primaryLightness,
            c: +store.primaryChroma,
            h: infoHue,
            lDark: +store.primaryLightnessDark,
        }),
    };
};
