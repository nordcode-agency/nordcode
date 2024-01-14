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
import { getColorTheme } from './getColorTheme';

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
    const theme = getColorTheme(store);

    return {
        color: {
            palette: [
                ...Object.entries(theme).map(([variant, value]) => {
                    return getWpColor(`${variant}`, value);
                }),
            ],
        },
    };
};

const getWpColor = (name: string, value: string): WpColor => {
    return {
        name: name,
        slug: name,
        color: `oklch(${value})`,
    };
};
