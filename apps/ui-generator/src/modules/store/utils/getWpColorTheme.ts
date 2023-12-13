import type { ConfigStore } from '../configStore';
import {
    getTextLightValues,
    getSurfaceLightValues,
    getBorderLightValues,
    getTextDarkValues,
    getSurfaceDarkValues,
    getBorderDarkValues,
    infoHue,
    getInfoLightness,
    warningHue,
    getWarningLightness,
    successHue,
    getSuccessLightness,
    dangerHue,
    getDangerLightness,
    getLightColorValues,
    getDarkColorValues,
    getStatusLightColorValues,
    getStatusDarkColorValues,
} from './SharedThemeValues';

type WpColor = {
    name: string;
    slug: string;
    color: string;
};

type WpColorTheme = {
    color: {
        palette: WpColor[];
    };
};

export const getWpColorTheme = (store: ConfigStore): WpColorTheme => {
    const textLightValues = getTextLightValues(
        +store.lightNeutralTextLightness,
        +store.lightTextLightnessScaleFactor,
        +store.lightNeutralChroma,
        +store.primaryHue,
    );

    const surfaceLightValues = getSurfaceLightValues(
        +store.lightNeutralSurfaceLightness,
        +store.lightSurfaceLightnessScaleFactor,
        +store.lightNeutralChroma,
        +store.primaryHue,
    );

    const borderLightValues = getBorderLightValues(
        +store.lightNeutralBorderLightness,
        +store.lightTextLightnessScaleFactor,
        +store.lightNeutralChroma,
        +store.primaryHue,
    );

    const textDarkValues = getTextDarkValues(
        +store.darkNeutralTextLightness,
        +store.darkTextLightnessScaleFactor,
        +store.darkNeutralChroma,
        +store.primaryHue,
    );

    const surfaceDarkValues = getSurfaceDarkValues(
        +store.darkNeutralSurfaceLightness,
        +store.darkSurfaceLightnessScaleFactor,
        +store.darkNeutralChroma,
        +store.primaryHue,
    );

    const borderDarkValues = getBorderDarkValues(
        +store.darkNeutralBorderLightness,
        +store.darkTextLightnessScaleFactor,
        +store.darkNeutralChroma,
        +store.primaryHue,
    );

    const lightPrimaryColorValues = getLightColorValues(
        +store.primaryLightness,
        +store.primaryChroma,
        +store.primaryHue,
    );

    const lightSecondaryColorValues = getLightColorValues(
        +store.secondaryLightness,
        +store.secondaryChroma,
        +store.secondaryHue,
    );

    const darkPrimaryColorValues = getDarkColorValues(
        +store.primaryLightness,
        +store.primaryChroma,
        +store.primaryHue,
    );

    const darkSecondaryColorValues = getDarkColorValues(
        +store.secondaryLightness,
        +store.secondaryChroma,
        +store.secondaryHue,
    );

    return {
        color: {
            palette: [
                ...mapValuesToWpToken('text-light', textLightValues),
                ...mapValuesToWpToken('surface-light', surfaceLightValues),
                ...mapValuesToWpToken('border-light', borderLightValues),
                ...mapValuesToWpToken('text-dark', textDarkValues),
                ...mapValuesToWpToken('surface-dark', surfaceDarkValues),
                ...mapValuesToWpToken('border-dark', borderDarkValues),

                ...mapValuesToWpToken('brand-primary-light', lightPrimaryColorValues),
                ...mapValuesToWpToken('brand-secondary-light', lightSecondaryColorValues),
                ...mapValuesToWpToken('brand-primary-dark', darkPrimaryColorValues),
                ...mapValuesToWpToken('brand-secondary-dark', darkSecondaryColorValues),

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
            ],
        },
    };
};

const mapValuesToWpToken = (baseName: string, values: Record<string, string>): WpColor[] => {
    return Object.entries(values).map(([variant, value]) => {
        return getWpColor(`${baseName}-${variant}`, value);
    });
};

const getWpColor = (name: string, value: string): WpColor => {
    return {
        name: name,
        slug: name,
        color: `oklch(${value})`,
    };
};

const getStatusLightColorTheme = (
    name: 'info' | 'warning' | 'success' | 'danger',
    hue: number,
    lightness: number,
    primaryLightness: number,
): WpColor[] => {
    const colorValues = getStatusLightColorValues(lightness, hue, primaryLightness);
    return mapValuesToWpToken(`status-${name}-light`, colorValues);
};

const getStatusDarkColorTheme = (
    name: 'info' | 'warning' | 'success' | 'danger',
    hue: number,
    lightness: number,
    primaryLightness: number,
): WpColor[] => {
    const colorValues = getStatusDarkColorValues(lightness, hue, primaryLightness);
    return mapValuesToWpToken(`status-${name}-dark`, colorValues);
};
