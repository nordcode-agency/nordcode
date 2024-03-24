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
    let baseColor = `${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(3)}`;

    if (opacity) {
        baseColor += ` / ${opacity}`;
    }
    return baseColor;
};

const getClosestToValue = (options: number[], value: number): number => {
    return options.reduce(
        (prev, curr) => {
            return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
        },
        options[0],
    );
};

/**
 * Calculate the hue rotation based on the distance between the current lightness
 * and the target lightness and the distance between the current hue and the closest hue option.
 */
const getHueRotation = (
    currentLightness: number,
    targetLightness: number,
    distance: number,
): number => {
    const maxHueRotation = 20;
    const hueRotation =
        Math.abs(currentLightness - targetLightness) * (distance / 100) * maxHueRotation;
    return hueRotation;
};
/*
   On hue rotation:
   The trick is to just **make the movement of the hue match up with the movement of the saturation and brightness**.
    If you want a darker variation, move the hue towards red (0°), green
    (120°), or blue (240°), whichever is closest and vice versa (with
    cyan, magenta, and yellow) for lighter variations. (Of course, this
    assumes you’re also lowering brightness and increasing saturation)
    (https://www.learnui.design/blog/color-in-ui-design-a-practical-framework.html)

    Der Farbspace in oklch ist etwas anders, die hues sind anders verteilt, darum sind die Werte angepasst.
    Die Regel bleibt aber die gleiche.
 */
const generateScales = (
    l: number,
    c: number,
    h: number,
): [ReturnType<typeof Color.prototype.range>, ReturnType<typeof Color.prototype.range>] => {
    // darkOptionHues: red, green, blue, red
    const darkOptions = [29, 142, 264, 389];
    // lightOptionHues: magenta, yellow, cyan, magenta
    const lightOptions = [-32, 110, 195, 328];

    const darkScaleTargetL = 0.03;
    const lightScaleTargetL = 0.97;

    const closestDark = getClosestToValue(darkOptions, h) % 360;
    const closestLight = (getClosestToValue(lightOptions, h) + 360) % 360;

    const lightDistance = Math.abs(closestLight - h);
    const darkDistance = Math.abs(closestDark - h);

    const lightHueRotation = getHueRotation(l, lightScaleTargetL, lightDistance);
    const darkHueRotation = getHueRotation(l, darkScaleTargetL, darkDistance);
    const lightHue = h > closestLight ? h - lightHueRotation : h + lightHueRotation;
    const darkHue = h > closestDark ? h - darkHueRotation : h + darkHueRotation;

    const white = new Color('oklch', [lightScaleTargetL, c * 0.2, lightHue]);
    const black = new Color('oklch', [darkScaleTargetL, c * 0.2, darkHue]);
    const color = new Color('oklch', [l, c, h]);

    return [color.range(white, { space: 'oklch' }), color.range(black, { space: 'oklch' })];
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

    // a lightness of 100 should always be white, but the browser fallbacks are a little off
    const defaultChroma = baseLightness === 100 ? 0 : baseChroma;

    return {
        default: generateValueString(base[0], defaultChroma, base[2]),
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
    const surface = whiteScale(0.96).oklch;
    const hover = whiteScale(0).oklch;

    const [contrastLight, contrastDark] = [whiteScale(1), blackScale(1)];

    const contrast =
        Math.abs(contrastLight.contrast(whiteScale(0), 'APCA')) >
        Math.abs(contrastDark.contrast(whiteScale(0), 'APCA'))
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
    const surface = blackScale(0.65).oklch;
    const hover = blackScale(0).oklch;

    const [contrastLight, contrastDark] = [whiteScale(1), blackScale(1)];

    const contrast =
        Math.abs(contrastLight.contrast(whiteScale(0), 'APCA')) >
        Math.abs(contrastDark.contrast(whiteScale(0), 'APCA'))
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
