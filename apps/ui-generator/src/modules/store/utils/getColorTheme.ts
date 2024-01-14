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
