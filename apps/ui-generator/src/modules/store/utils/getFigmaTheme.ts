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

export const getFigmaTheme = (store: ConfigStore): Record<string, string> => {
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
            +store.primaryLightness,
        ),
        ...getDarkColorTheme(
            'secondary',
            +store.secondaryHue,
            +store.secondaryChroma,
            +store.secondaryLightness,
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
    return Object.entries(values)
        .map(([variant, value]) => {
            return getTokenColorInHex(`${baseName}-${variant}`, value);
        })
        .reduce((acc, values) => {
            return {
                // biome-ignore lint/performance/noAccumulatingSpread: it's not that many token
                ...acc,
                ...values,
            };
        }, {});
};

let canvas: HTMLCanvasElement | undefined = undefined;
let context: CanvasRenderingContext2D | null;

const getCanvasContext = () => {
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.width = canvas.height = 1;
    }

    if (!context) {
        context = canvas.getContext('2d', { willReadFrequently: true });
    }

    return context;
};

const cssColorToRgba = (colorString: string): string => {
    const ctx = getCanvasContext();

    if (!ctx) {
        return '';
    }

    ctx.fillStyle = colorString;
    ctx.fillRect(0, 0, 1, 1);
    const rgba = ctx.getImageData(0, 0, 1, 1).data;

    return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
};

const getTokenColorInHex = (name: string, value: string): Record<string, string> => {
    const rgba = cssColorToRgba(`oklch(${value})`);

    return {
        [`--color-${name}`]: rgba,
    };
};
