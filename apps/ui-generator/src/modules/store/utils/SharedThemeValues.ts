export const getWarningLightness = (lightness: number) =>
    Math.min(Math.max(lightness + 25, 80), 92);

export const getInfoLightness = (lightness: number) => Math.min(Math.max(lightness, 55), 74);
export const getDangerLightness = (lightness: number) => Math.min(Math.max(lightness, 58), 68);
export const getSuccessLightness = (lightness: number) => Math.min(Math.max(lightness, 50), 85);

export const infoHue = 245;
export const warningHue = 97;
export const successHue = 142;
export const dangerHue = 32;

const clamp = (value: number): number => {
    return Math.min(Math.max(value, 0), 100);
};

const generateValueString = (
    value: number,
    chroma: number,
    hue: number,
    opacity?: number,
): string => {
    let baseColor = `${value.toFixed(0)}% ${chroma} ${hue}`;

    if (opacity) {
        baseColor += ` / ${opacity}`;
    }

    return baseColor;
};

const generateValuesFromLightnesses = <T>(
    lightnesses: Record<string, number>,
    chroma: number,
    hue: number,
): T => {
    return Object.entries(lightnesses).reduce((acc, [k, v]) => {
        return {
            ...acc,
            [k]: generateValueString(v, chroma, hue),
        };
    }, {}) as T;
};

type TextValues = {
    default: string;
    muted: string;
    subtle: string;
    'on-emphasis': string;
};
export const getTextLightValues = (
    baseLightness: number,
    scalingFactor: number,
    chroma: number,
    hue: number,
): TextValues => {
    const lightnesses = {
        default: baseLightness,
        muted: clamp(baseLightness * scalingFactor),
        subtle: clamp(baseLightness * (scalingFactor * 2)),
        'on-emphasis': 100 - baseLightness,
    };

    return generateValuesFromLightnesses(lightnesses, chroma, hue);
};

export const getTextDarkValues = (
    baseLightness: number,
    scalingFactor: number,
    chroma: number,
    hue: number,
): TextValues => {
    const lightnesses = {
        default: baseLightness,
        muted: clamp(100 - (100 - baseLightness) * scalingFactor),
        subtle: clamp(100 - (100 - baseLightness) * (scalingFactor * 2)),
        'on-emphasis': 100 - baseLightness,
    };

    return generateValuesFromLightnesses(lightnesses, chroma, hue);
};

type SurfaceValues = {
    default: string;
    subtle: string;
    inset: string;
    emphasis: string;
};

export const getSurfaceLightValues = (
    baseLightness: number,
    scalingFactor: number,
    chroma: number,
    hue: number,
): SurfaceValues => {
    const lightnesses = {
        default: baseLightness,
        subtle: clamp(100 - Math.max(100 - baseLightness, scalingFactor) * scalingFactor),
        inset: clamp(100 - Math.max(100 - baseLightness, scalingFactor) * scalingFactor),
        emphasis: 100 - baseLightness,
    };

    return generateValuesFromLightnesses(lightnesses, chroma, hue);
};

export const getSurfaceDarkValues = (
    baseLightness: number,
    scalingFactor: number,
    chroma: number,
    hue: number,
): SurfaceValues => {
    const lightnesses = {
        default: baseLightness,
        subtle: clamp(baseLightness * scalingFactor),
        inset: clamp(baseLightness / scalingFactor),
        emphasis: 100 - baseLightness,
    };

    return generateValuesFromLightnesses(lightnesses, chroma, hue);
};

type BorderValues = {
    default: string;
    muted: string;
};

export const getBorderLightValues = (
    baseLightness: number,
    scalingFactor: number,
    chroma: number,
    hue: number,
): BorderValues => {
    const lightnesses = {
        default: baseLightness,
        muted: clamp(100 - (100 - baseLightness) / scalingFactor),
    };

    return generateValuesFromLightnesses(lightnesses, chroma, hue);
};

export const getBorderDarkValues = (
    baseLightness: number,
    scalingFactor: number,
    chroma: number,
    hue: number,
): BorderValues => {
    const lightnesses = {
        default: baseLightness,
        muted: clamp(baseLightness / scalingFactor),
    };

    return generateValuesFromLightnesses(lightnesses, chroma, hue);
};

export type ColorValues = {
    emphasis: string;
    base: string;
    subtle: string;
    hover: string;
    contrast: string;
};

export const getLightColorValues = (
    baseLightness: number,
    baseChroma: number,
    hue: number,
): ColorValues => {
    const lightnesses = {
        emphasis: baseLightness - 10,
        base: baseLightness,
        subtle: baseLightness + 10,
        hover: baseLightness,
        contrast: baseLightness > 50 ? 1 : 99,
    };

    const chromas = {
        emphasis: baseChroma / 2,
        base: baseChroma,
        subtle: baseChroma / 4,
        hover: baseChroma,
        contrast: baseChroma / 6,
    };

    return {
        emphasis: generateValueString(lightnesses.emphasis, chromas.base, hue),
        base: generateValueString(lightnesses.base, chromas.base, hue),
        subtle: generateValueString(lightnesses.subtle, chromas.subtle, hue),
        hover: generateValueString(lightnesses.hover, chromas.hover, hue, 0.08),
        contrast: generateValueString(lightnesses.contrast, chromas.contrast, hue),
    } as ColorValues;
};

export const getDarkColorValues = (
    baseLightness: number,
    baseChroma: number,
    hue: number,
): ColorValues => {
    const lightnesses = {
        emphasis: baseLightness - 10,
        base: baseLightness,
        subtle: baseLightness + 10,
        hover: baseLightness,
        contrast: baseLightness > 50 ? 1 : 99,
    };

    const chromas = {
        emphasis: baseChroma / 2,
        base: baseChroma,
        subtle: baseChroma / 4,
        hover: baseChroma,
        contrast: baseChroma / 6,
    };

    return {
        emphasis: generateValueString(lightnesses.emphasis, chromas.emphasis, hue),
        base: generateValueString(lightnesses.base, chromas.base, hue),
        subtle: generateValueString(lightnesses.subtle, chromas.subtle, hue),
        hover: generateValueString(lightnesses.hover, chromas.hover, hue, 0.08),
        contrast: generateValueString(lightnesses.contrast, chromas.contrast, hue),
    } as ColorValues;
};

type StatusColorValues = {
    base: string;
    text: string;
    subtle: string;
    hover: string;
};
export const getStatusLightColorValues = (
    baseLightness: number,
    hue: number,
    primaryLightness: number,
): StatusColorValues => {
    const textLightness = Math.min(Math.max(primaryLightness, 20), 52);
    const lightSurfaceLightness = Math.min(Math.max(primaryLightness + 45, 65), 99.8);

    const lightnesses = {
        base: baseLightness,
        text: textLightness,
        subtle: lightSurfaceLightness,
        hover: textLightness,
    };

    return {
        base: generateValueString(lightnesses.base, 0.3, hue),
        text: generateValueString(lightnesses.text, 0.3, hue),
        subtle: generateValueString(lightnesses.subtle, 0.12, hue),
        hover: generateValueString(lightnesses.hover, 0.3, hue, 0.08),
    } as StatusColorValues;
};

export const getStatusDarkColorValues = (
    baseLightness: number,
    hue: number,
    primaryLightness: number,
): StatusColorValues => {
    const textLightness = Math.min(Math.max(primaryLightness, 20), 52);
    const darkSurfaceLightness = Math.min(Math.max(+primaryLightness + 45, 65), 99.8);

    const lightnesses = {
        base: baseLightness,
        text: textLightness,
        subtle: darkSurfaceLightness,
        hover: textLightness,
    };

    return {
        base: generateValueString(lightnesses.base, 0.3, hue),
        text: generateValueString(lightnesses.text, 0.3, hue),
        subtle: generateValueString(lightnesses.subtle, 0.12, hue),
        hover: generateValueString(lightnesses.hover, 0.3, hue, 0.08),
    } as StatusColorValues;
};
