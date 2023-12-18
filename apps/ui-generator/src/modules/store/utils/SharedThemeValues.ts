import chroma from 'chroma-js';

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

const generateValueString = (l: number, c: number, h: number, opacity?: number): string => {
    let baseColor = `${l.toFixed(2)} ${c.toFixed(2)} ${h.toFixed(2)}`;

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
    return Object.entries(lightnesses).reduce(
        (acc, [k, v]) => {
            acc[k] = generateValueString(v, chroma, hue);
            return acc;
        },
        {} as Record<string, string>,
    ) as T;
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
    baseChroma: number,
    hue: number,
): TextValues => {
    const color = chroma.oklch(baseLightness / 100, baseChroma, hue);
    const scale = chroma.scale(['white', color, 'black']).mode('lch');

    const base = scale(0.5).oklch();
    const muted = scale(0.5 - scalingFactor).oklch();
    const subtle = scale(0.5 - scalingFactor * 2).oklch();
    const onEmphasis = chroma.oklch((100 - baseLightness) / 100, baseChroma, hue).oklch();

    return {
        default: generateValueString(base[0], base[1], base[2]),
        muted: generateValueString(muted[0], muted[1], muted[2]),
        subtle: generateValueString(subtle[0], subtle[1], subtle[2]),
        'on-emphasis': generateValueString(onEmphasis[0], onEmphasis[1], onEmphasis[2]),
    } as TextValues;
};

export const getTextDarkValues = (
    baseLightness: number,
    scalingFactor: number,
    baseChroma: number,
    hue: number,
): TextValues => {
    const color = chroma.oklch(baseLightness / 100, baseChroma, hue);
    const scale = chroma.scale(['white', color, 'black']).mode('lch');

    const base = scale(0.5).oklch();
    const muted = scale(0.5 + scalingFactor).oklch();
    const subtle = scale(0.5 + scalingFactor * 2).oklch();
    const onEmphasis = chroma.oklch((100 - baseLightness) / 100, baseChroma, hue).oklch();

    return {
        default: generateValueString(base[0], base[1], base[2]),
        muted: generateValueString(muted[0], muted[1], muted[2]),
        subtle: generateValueString(subtle[0], subtle[1], subtle[2]),
        'on-emphasis': generateValueString(onEmphasis[0], onEmphasis[1], onEmphasis[2]),
    } as TextValues;
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
    baseChroma: number,
    hue: number,
): SurfaceValues => {
    const color = chroma.oklch(baseLightness / 100, baseChroma, hue);
    const scale = chroma.scale(['white', color, 'black']).mode('lch');

    const base = scale(0.5).oklch();
    const subtle = scale(0.5 + scalingFactor).oklch();
    const inset = scale(0.5 + scalingFactor * 2).oklch();
    const emphasis = chroma.oklch((100 - baseLightness) / 100, baseChroma, hue).oklch();

    return {
        default: generateValueString(base[0], base[1], base[2]),
        subtle: generateValueString(subtle[0], subtle[1], subtle[2]),
        inset: generateValueString(inset[0], inset[1], inset[2]),
        emphasis: generateValueString(emphasis[0], emphasis[1], emphasis[2]),
    } as SurfaceValues;
};

export const getSurfaceDarkValues = (
    baseLightness: number,
    scalingFactor: number,
    baseChroma: number,
    hue: number,
): SurfaceValues => {
    const color = chroma.oklch(baseLightness / 100, baseChroma, hue);
    const scale = chroma.scale(['white', color, 'black']).mode('lch');

    const base = scale(0.5).oklch();
    const subtle = scale(0.5 - scalingFactor).oklch();
    const inset = scale(0.5 - scalingFactor).oklch();
    const emphasis = chroma.oklch((100 - baseLightness) / 100, baseChroma, hue).oklch();

    return {
        default: generateValueString(base[0], base[1], base[2]),
        subtle: generateValueString(subtle[0], subtle[1], subtle[2]),
        inset: generateValueString(inset[0], inset[1], inset[2]),
        emphasis: generateValueString(emphasis[0], emphasis[1], emphasis[2]),
    } as SurfaceValues;
};

type BorderValues = {
    default: string;
    muted: string;
};

export const getBorderLightValues = (
    baseLightness: number,
    scalingFactor: number,
    baseChroma: number,
    hue: number,
): BorderValues => {
    const color = chroma.oklch(baseLightness / 100, baseChroma, hue);
    const scale = chroma.scale(['white', color, 'black']).mode('lch');

    const base = scale(0.5).oklch();
    const muted = scale(0.5 - scalingFactor).oklch();

    return {
        default: generateValueString(base[0], base[1], base[2]),
        muted: generateValueString(muted[0], muted[1], muted[2]),
    } as BorderValues;
};

export const getBorderDarkValues = (
    baseLightness: number,
    scalingFactor: number,
    baseChroma: number,
    hue: number,
): BorderValues => {
    const color = chroma.oklch(baseLightness / 100, baseChroma, hue);
    const scale = chroma.scale(['white', color, 'black']).mode('lch');

    const base = scale(0.5).oklch();
    const muted = scale(0.5 + scalingFactor).oklch();

    return {
        default: generateValueString(base[0], base[1], base[2]),
        muted: generateValueString(muted[0], muted[1], muted[2]),
    } as BorderValues;
};

export type ColorValues = {
    emphasis: string;
    base: string;
    surface: string;
    hover: string;
    contrast: string;
};

export const getLightColorValues = (
    baseLightness: number,
    baseChroma: number,
    hue: number,
): ColorValues => {
    const color = chroma.oklch(baseLightness / 100, baseChroma, hue);
    const scale = chroma.scale(['white', color, 'black']).mode('lch');

    const base = scale(0.5).oklch();
    const emphasis = scale(0.65).saturate(1).oklch();
    const surface = scale(0.05).oklch();
    const hover = scale(0.5).oklch();

    const [contrastLight, contrastDark] = [scale(0.01), scale(0.99)];
    const contrast =
        chroma.contrast(scale(0.5), contrastLight) > chroma.contrast(scale(0.5), contrastDark)
            ? contrastLight.oklch()
            : contrastDark.oklch();

    return {
        emphasis: generateValueString(emphasis[0], emphasis[1], emphasis[2]),
        base: generateValueString(base[0], base[1], base[2]),
        surface: generateValueString(surface[0], surface[1], surface[2]),
        hover: generateValueString(hover[0], hover[1], hover[2], 0.08),
        contrast: generateValueString(contrast[0], contrast[1], contrast[2]),
    } as ColorValues;
};

export const getDarkColorValues = (
    baseLightness: number,
    baseChroma: number,
    hue: number,
): ColorValues => {
    const color = chroma.oklch(baseLightness / 100, baseChroma, hue);
    const scale = chroma.scale(['white', color, 'black']).mode('lch');

    const base = scale(0.5).oklch();
    const emphasis = scale(0.35).saturate(2.5).oklch();
    const surface = scale(0.97).oklch();
    const hover = scale(0.5).oklch();

    const [contrastLight, contrastDark] = [scale(0.01), scale(0.99)];
    const contrast =
        chroma.contrast(scale(0.5), contrastLight) > chroma.contrast(scale(0.5), contrastDark)
            ? contrastLight.oklch()
            : contrastDark.oklch();

    return {
        emphasis: generateValueString(emphasis[0], emphasis[1], emphasis[2]),
        base: generateValueString(base[0], base[1], base[2]),
        surface: generateValueString(surface[0], surface[1], surface[2]),
        hover: generateValueString(hover[0], hover[1], hover[2], 0.08),
        contrast: generateValueString(contrast[0], contrast[1], contrast[2]),
    } as ColorValues;
};

type StatusColorValues = {
    base: string;
    text: string;
    surface: string;
    hover: string;
};
export const getStatusLightColorValues = (
    baseLightness: number,
    hue: number,
    primaryLightness: number,
): StatusColorValues => {
    const color = chroma.oklch(baseLightness / 100, 0.3, hue);
    const scale = chroma.scale(['white', color, 'black']).mode('lch');

    const base = scale(0.5).oklch();
    const text = scale(0.7).oklch();
    const surface = scale(0.2).oklch();
    const hover = scale(0.5).oklch();

    return {
        text: generateValueString(text[0], text[1], text[2]),
        base: generateValueString(base[0], base[1], base[2]),
        surface: generateValueString(surface[0], surface[1], surface[2]),
        hover: generateValueString(hover[0], hover[1], hover[2], 0.08),
    } as StatusColorValues;
};

export const getStatusDarkColorValues = (
    baseLightness: number,
    hue: number,
    primaryLightness: number,
): StatusColorValues => {
    const color = chroma.oklch(baseLightness / 100, 0.3, hue);
    const scale = chroma.scale(['white', color, 'black']).mode('lch');

    const base = scale(0.5).oklch();
    const text = scale(0.7).oklch();
    const surface = scale(0.2).oklch();
    const hover = scale(0.5).oklch();

    return {
        text: generateValueString(text[0], text[1], text[2]),
        base: generateValueString(base[0], base[1], base[2]),
        surface: generateValueString(surface[0], surface[1], surface[2]),
        hover: generateValueString(hover[0], hover[1], hover[2], 0.08),
    } as StatusColorValues;
};
