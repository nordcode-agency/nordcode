import type { ConfigStore } from '../configStore';
import { getColorTheme } from './getColorTheme';
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
