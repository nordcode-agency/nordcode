import Color from 'colorjs.io';

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

type TextValues = {
    default: string;
    muted: string;
    subtle: string;
    'on-emphasis': string;
};
const generateScales = (
    l: number,
    c: number,
    h: number,
): [ReturnType<typeof Color.prototype.range>, ReturnType<typeof Color.prototype.range>] => {
    const white = new Color('oklch', [0.98, c * 0.2, h]);
    const black = new Color('oklch', [0.02, c * 0.2, h]);
    const color = new Color('oklch', [l, c, h]);

    return [color.range(white, { space: 'oklch' }), color.range(black, { space: 'oklch' })];
};

export const getTextLightValues = (
    baseLightness: number,
    scalingFactor: number,
    baseChroma: number,
    hue: number,
): TextValues => {
    const [whiteScale, blackScale] = generateScales(baseLightness / 100, baseChroma, hue);

    const base = whiteScale(0).oklch;
    // multiply * 2 to keep recent scales working
    const muted = whiteScale(scalingFactor * 2).oklch;
    const subtle = whiteScale(scalingFactor * 4).oklch;
    const onEmphasis = whiteScale(1).oklch;

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
    const [whiteScale, blackScale] = generateScales(baseLightness / 100, baseChroma, hue);

    const base = blackScale(0).oklch;
    const muted = blackScale(scalingFactor * 2).oklch;
    const subtle = blackScale(scalingFactor * 4).oklch;
    const onEmphasis = blackScale(1).oklch;

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
    const [whiteScale, blackScale] = generateScales(baseLightness / 100, baseChroma, hue);

    const base = whiteScale(0).oklch;
    const subtle = blackScale(scalingFactor * 2).oklch;
    const inset = blackScale(scalingFactor * 4).oklch;
    const emphasis = blackScale(1).oklch;

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
    const [whiteScale, blackScale] = generateScales(baseLightness / 100, baseChroma, hue);

    const base = blackScale(0).oklch;
    const subtle = whiteScale(scalingFactor * 2).oklch;
    const inset = whiteScale(scalingFactor * 4).oklch;
    const emphasis = whiteScale(1).oklch;

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
    const [whiteScale, blackScale] = generateScales(baseLightness / 100, baseChroma, hue);

    const base = blackScale(0).oklch;
    const muted = whiteScale(scalingFactor * 2).oklch;

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
    const [whiteScale, blackScale] = generateScales(baseLightness / 100, baseChroma, hue);

    const base = whiteScale(0).oklch;
    const muted = blackScale(scalingFactor * 2).oklch;

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
    const [whiteScale, blackScale] = generateScales(baseLightness / 100, baseChroma, hue);

    const base = whiteScale(0).oklch;
    const emphasis = blackScale(0.15).set('c', (c) => c * 1.25).oklch;
    const surface = whiteScale(0.95).oklch;
    const hover = whiteScale(0).oklch;

    const [contrastLight, contrastDark] = [whiteScale(1), blackScale(1)];

    const contrast =
        contrastLight.contrast(whiteScale(0), 'APCA') > contrastDark.contrast(whiteScale(0), 'APCA')
            ? contrastLight.oklch
            : contrastDark.oklch;

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
    const [whiteScale, blackScale] = generateScales(baseLightness / 100, baseChroma, hue);

    const base = blackScale(0).oklch;
    const emphasis = whiteScale(0.15).set('c', (c) => c * 1.25).oklch;
    const surface = blackScale(0.8).oklch;
    const hover = blackScale(0).oklch;

    const [contrastLight, contrastDark] = [whiteScale(1), blackScale(1)];

    const contrast =
        contrastLight.contrast(whiteScale(0), 'APCA') > contrastDark.contrast(whiteScale(0), 'APCA')
            ? contrastLight.oklch
            : contrastDark.oklch;

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
    const [whiteScale, blackScale] = generateScales(baseLightness / 100, 0.3, hue);

    const base = whiteScale(0).oklch;
    const text = blackScale(0.4).oklch;
    const surface = whiteScale(0.95).oklch;
    const hover = whiteScale(0).oklch;

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
    const [whiteScale, blackScale] = generateScales(baseLightness / 100, 0.3, hue);

    const base = whiteScale(0).oklch;
    const text = whiteScale(0.4).oklch;
    const surface = blackScale(0.8).oklch;
    const hover = whiteScale(0).oklch;

    return {
        text: generateValueString(text[0], text[1], text[2]),
        base: generateValueString(base[0], base[1], base[2]),
        surface: generateValueString(surface[0], surface[1], surface[2]),
        hover: generateValueString(hover[0], hover[1], hover[2], 0.08),
    } as StatusColorValues;
};
