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

const generateValueString = (value: number, chroma: number, hue: number, opacity = 1): string => {
  return `${value.toFixed(0)}% ${chroma} ${hue} / ${opacity}`;
};

const generateValuesFromLightnesses = <T>(
  lightnesses: Record<string, number>,
  chroma: number,
  hue: number
): T => {
  return Object.entries(lightnesses).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [k]: generateValueString(v, chroma, hue),
    };
  }, {}) as T;
};

type TextValues = {
  base: string;
  muted: string;
  subtle: string;
  "on-emphasis": string;
};
export const getTextLightValues = (
  baseLightness: number,
  scalingFactor: number,
  chroma: number,
  hue: number
): TextValues => {
  const lightnesses = {
    base: baseLightness,
    muted: clamp(baseLightness * scalingFactor),
    subtle: clamp(baseLightness * Math.pow(baseLightness, 2)),
    "on-emphasis": 100 - baseLightness,
    // evtl surface lightness
  };

  return generateValuesFromLightnesses(lightnesses, chroma, hue);
};

export const getTextDarkValues = (
  baseLightness: number,
  scalingFactor: number,
  chroma: number,
  hue: number
): TextValues => {
  const lightnesses = {
    base: baseLightness,
    muted: clamp(100 - (100 - baseLightness) * scalingFactor),
    subtle: clamp(100 - (100 - baseLightness) * (scalingFactor * 2)),
    "on-emphasis": 100 - baseLightness,
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
  hue: number
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
  hue: number
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
  hue: number
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
  hue: number
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

export const getLightColorValues = (baseLightness: number, hue: number): ColorValues => {
  const lightnesses = {
    emphasis: baseLightness - 10,
    base: baseLightness,
    subtle: baseLightness + 10,
    hover: baseLightness,
    contrast: baseLightness > 50 ? 1 : 99,
  };

  return {
    emphasis: generateValueString(lightnesses.emphasis, 0.14, hue),
    base: generateValueString(lightnesses.base, 0.3, hue),
    subtle: generateValueString(lightnesses.subtle, 0.08, hue),
    hover: generateValueString(lightnesses.hover, 0.3, hue, 0.08),
    contrast: generateValueString(lightnesses.contrast, 0.05, hue),
  } as ColorValues;
};

export const getDarkColorValues = (baseLightness: number, hue: number): ColorValues => {
  const lightnesses = {
    emphasis: baseLightness - 10,
    base: baseLightness,
    subtle: baseLightness + 10,
    hover: baseLightness,
    contrast: baseLightness > 50 ? 1 : 99,
  };

  return {
    emphasis: generateValueString(lightnesses.emphasis, 0.14, hue),
    base: generateValueString(lightnesses.base, 0.3, hue),
    subtle: generateValueString(lightnesses.subtle, 0.08, hue),
    hover: generateValueString(lightnesses.hover, 0.3, hue, 0.08),
    contrast: generateValueString(lightnesses.contrast, 0.05, hue),
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
  primaryLightness: number
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
  primaryLightness: number
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
