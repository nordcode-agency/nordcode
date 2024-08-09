import type { ConfigStore } from '../configStore';
import {
    getBorderDarkValues,
    getBorderLightValues,
    getSurfaceDarkValues,
    getSurfaceLightValues,
    getTextDarkValues,
    getTextLightValues,
    getLightColorValues,
    getStatusDarkColorValues,
    getStatusLightColorValues,
    getDarkColorValues,
    infoHue,
    getInfoLightness,
    warningHue,
    getWarningLightness,
    successHue,
    getSuccessLightness,
    dangerHue,
    getDangerLightness,
} from './SharedThemeValues';
import type { AdapterMapFn } from './ThemeAdapters';
import { generateColorValues } from './generateColorValues';
import {
    generateLightTextColorValues,
    generateDarkTextColorValues,
} from './generateTextColorValues.ts';
import {
    generateLightSurfaceColorValues,
    generateDarkSurfaceColorValues,
} from './generateSurfaceColorValues.ts';
import {
    generateLightBorderColorValues,
    generateDarkBorderColorValues,
} from './generateBorderColorValues.ts';

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
    const textHue = store.useSecondaryColorForFG ? +store.secondaryHue : +store.primaryHue;
    const surfaceHue = store.useSecondaryColorForBG ? +store.secondaryHue : +store.primaryHue;
    const borderHue = store.useSecondaryColorForBorders ? +store.secondaryHue : +store.primaryHue;

    return {
        '--lightness-max': `${store.lightnessMax}`,
        '--lightness-min': `${store.lightnessMin}`,
        '--lightness-diff': 'calc(var(--lightness-max) - var(--lightness-min))',
        // this is tricky, because it's not completely uniform
        // the best contrast seems to be achieved by moving slightly upwards from the middle
        '--lightness-contrast-cutoff':
            'calc(var(--lightness-min) + var(--lightness-diff) * 0.5 + 0.05)',
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
            h: textHue,
            scalingFactor: +store.lightTextLightnessScaleFactor,
        }),
        ...generateDarkTextColorValues('text', {
            l: +store.darkNeutralTextLightness,
            c: +store.darkNeutralChromaFG,
            h: textHue,
            scalingFactor: +store.darkTextLightnessScaleFactor,
        }),
        ...generateLightSurfaceColorValues('surface', {
            l: +store.lightNeutralSurfaceLightness,
            c: +store.lightNeutralChromaBG,
            h: surfaceHue,
            scalingFactor: +store.lightSurfaceLightnessScaleFactor,
        }),
        ...generateDarkSurfaceColorValues('surface', {
            l: +store.darkNeutralSurfaceLightness,
            c: +store.darkNeutralChromaBG,
            h: surfaceHue,
            scalingFactor: +store.darkSurfaceLightnessScaleFactor,
        }),
        ...generateLightBorderColorValues('border', {
            l: +store.lightNeutralBorderLightness,
            c: +store.lightNeutralChromaBorder,
            h: borderHue,
            scalingFactor: +store.lightBorderLightnessScaleFactor,
        }),
        ...generateDarkBorderColorValues('border', {
            l: +store.darkNeutralBorderLightness,
            c: +store.darkNeutralChromaBorder,
            h: borderHue,
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

export const getColorTheme2 = (store: ConfigStore) => {
    const textHue = store.useSecondaryColorForFG ? +store.secondaryHue : +store.primaryHue;
    const surfaceHue = store.useSecondaryColorForBG ? +store.secondaryHue : +store.primaryHue;
    const borderHue = store.useSecondaryColorForBorders ? +store.secondaryHue : +store.primaryHue;

    const textLightValues = getTextLightValues(
        +store.lightNeutralTextLightness,
        +store.lightTextLightnessScaleFactor,
        +store.lightNeutralChromaFG,
        +textHue,
    );

    const surfaceLightValues = getSurfaceLightValues(
        +store.lightNeutralSurfaceLightness,
        +store.lightSurfaceLightnessScaleFactor,
        +store.lightNeutralChromaBG,
        +surfaceHue,
    );

    const borderLightValues = getBorderLightValues(
        +store.lightNeutralBorderLightness,
        +store.lightTextLightnessScaleFactor,
        +store.lightNeutralChromaBorder,
        +borderHue,
    );

    const textDarkValues = getTextDarkValues(
        +store.darkNeutralTextLightness,
        +store.darkTextLightnessScaleFactor,
        +store.darkNeutralChromaFG,
        +textHue,
    );

    const surfaceDarkValues = getSurfaceDarkValues(
        +store.darkNeutralSurfaceLightness,
        +store.darkSurfaceLightnessScaleFactor,
        +store.darkNeutralChromaBG,
        +surfaceHue,
    );

    const borderDarkValues = getBorderDarkValues(
        +store.darkNeutralBorderLightness,
        +store.darkTextLightnessScaleFactor,
        +store.darkNeutralChromaBorder,
        +borderHue,
    );

    return {
        ...getLightColorTheme(
            'primary',
            +store.primaryHue,
            +store.primaryChroma,
            +store.primaryLightness,
        ),
        ...getLightColorTheme(
            'secondary',
            +store.secondaryHue,
            +store.secondaryChroma,
            +store.secondaryLightness,
        ),
        ...mapValuesToToken('text-light', textLightValues),
        ...mapValuesToToken('surface-light', surfaceLightValues),
        ...mapValuesToToken('border-light', borderLightValues),

        ...getDarkColorTheme(
            'primary',
            +store.primaryHue,
            +store.primaryChroma,
            +store.primaryLightnessDark,
        ),
        ...getDarkColorTheme(
            'secondary',
            +store.secondaryHue,
            +store.secondaryChroma,
            +store.secondaryLightnessDark,
        ),
        ...mapValuesToToken('text-dark', textDarkValues),
        ...mapValuesToToken('surface-dark', surfaceDarkValues),
        ...mapValuesToToken('border-dark', borderDarkValues),

        ...getStatusLightColorTheme(
            'info',
            infoHue,
            getInfoLightness(+store.primaryLightness),
            +store.primaryLightness,
        ),
        ...getStatusDarkColorTheme(
            'info',
            infoHue,
            getInfoLightness(+store.primaryLightness),
            +store.primaryLightness,
        ),
        ...getStatusLightColorTheme(
            'warning',
            warningHue,
            getWarningLightness(+store.primaryLightness),
            +store.primaryLightness,
        ),
        ...getStatusDarkColorTheme(
            'warning',
            warningHue,
            getWarningLightness(+store.primaryLightness),
            +store.primaryLightness,
        ),
        ...getStatusLightColorTheme(
            'success',
            successHue,
            getSuccessLightness(+store.primaryLightness),
            +store.primaryLightness,
        ),
        ...getStatusDarkColorTheme(
            'success',
            successHue,
            getSuccessLightness(+store.primaryLightness),
            +store.primaryLightness,
        ),
        ...getStatusLightColorTheme(
            'danger',
            dangerHue,
            getDangerLightness(+store.primaryLightness),
            +store.primaryLightness,
        ),
        ...getStatusDarkColorTheme(
            'danger',
            dangerHue,
            getDangerLightness(+store.primaryLightness),
            +store.primaryLightness,
        ),
    };
};

const getLightColorTheme = (
    name: 'primary' | 'secondary',
    hue: number,
    chroma: number,
    lightness: number,
) => {
    const colorValues = getLightColorValues(lightness, chroma, hue);
    return mapValuesToToken(`brand-${name}-light`, colorValues);
};

const getDarkColorTheme = (
    name: 'primary' | 'secondary',
    hue: number,
    chroma: number,
    lightness: number,
) => {
    const colorValues = getDarkColorValues(lightness, chroma, hue);
    return mapValuesToToken(`brand-${name}-dark`, colorValues);
};

const getStatusLightColorTheme = (
    name: 'info' | 'warning' | 'success' | 'danger',
    hue: number,
    lightness: number,
    primaryLightness: number,
): Record<string, string> => {
    const colorValues = getStatusLightColorValues(lightness, hue, primaryLightness);
    return mapValuesToToken(`status-${name}-light`, colorValues);
};

const getStatusDarkColorTheme = (
    name: 'info' | 'warning' | 'success' | 'danger',
    hue: number,
    lightness: number,
    primaryLightness: number,
): Record<string, string> => {
    const colorValues = getStatusDarkColorValues(lightness, hue, primaryLightness);
    return mapValuesToToken(`status-${name}-dark`, colorValues);
};

const mapValuesToToken = (
    baseName: string,
    values: Record<string, string>,
): Record<string, string> => {
    return Object.entries(values).reduce(
        (acc, [variant, value]) => {
            const colorName = `--color-${baseName}-${variant}`;
            acc[colorName] = value;
            return acc;
        },
        {} as Record<string, string>,
    );
};
