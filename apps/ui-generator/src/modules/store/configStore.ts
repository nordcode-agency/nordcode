import { localStore } from "./utils/localStore";
import type { PresetName } from "../presets/Presets";
import { Presets } from "../presets/Presets";

const STORE_KEY = "CONFIG_STORE";

export type ConfigStore = {
  // TYPOGRAPHY
  fontFamilyMono: string;
  fontFamilySans: string;
  fontFamilySerif: string;
  fontFamilyDefault: "sans" | "serif" | "mono";

  fontSizeScale: number;
  useCustomFontSizes: boolean;
  fontSizeSmallest: number;
  fontSizeSmall: number;
  fontSizeBase: number;
  fontSizeLarge: number;
  fontSizeLargest: number;
  fontSizeDisplay: number;
  fontSizeUnit: string;

  lineHeightLarge: number;
  lineHeightBase: number;
  lineHeightSmall: number;

  trackingTight: number;
  trackingStandard: number;
  trackingWide: number;

  fontWeightBold: number;
  fontWeightRegular: number;
  fontWeightLight: number;

  measureLarge: number;
  measureBase: number;
  measureSmall: number;

  // SIZES

  spacingTiny: number;
  spacingNearest: number;
  spacingNear: number;
  spacingBase: number;
  spacingFar: number;
  spacingFarthest: number;

  spacingScale: number;

  borderRadiusNone: number;
  borderWidthThin: number;
  borderWidthMedium: number;
  borderWidthThick: number;

  borderWidthScale: number;

  borderRadiusSmall: number;
  borderRadiusMedium: number;
  borderRadiusLarge: number;

  borderRadiusScale: number;

  shadowConfigDistanceScaleFactor: number;
  shadowConfigBlurScaleFactor: number;
  shadowConfigStartTransparency: number;
  shadowConfigTransparencyScale: number;
  shadowConfigSpreadMax: number;
  shadowConfigSpreadMin: number;
  shadowConfigXOffsetFactor: number;

  shadowDistanceInset: number;
  shadowDistanceNearest: number;
  shadowDistanceNear: number;
  shadowDistanceMedium: number;
  shadowDistanceFar: number;

  shadowColorChroma: number;

  shadowDistanceScale: number;

  // COLORS
  useLCH: boolean;
  primaryHue: number;
  primaryLightness: number;
  secondaryHue: number;
  secondaryLightness: number;

  lightTextLightnessScaleFactor: number;
  darkTextLightnessScaleFactor: number;
  lightSurfaceLightnessScaleFactor: number;
  darkSurfaceLightnessScaleFactor: number;

  lightNeutralChroma: number;
  lightNeutralTextLightness: number;
  lightNeutralSurfaceLightness: number;
  lightNeutralBorderLightness: number;

  darkNeutralChroma: number;
  darkNeutralTextLightness: number;
  darkNeutralSurfaceLightness: number;
  darkNeutralBorderLightness: number;
};

const defaultStore: ConfigStore = {
  // TYPOGRAPHY
  fontFamilyMono: "DMMono, monospace",
  fontFamilySans: "system-ui, sans-serif",
  fontFamilySerif: "serif",
  fontFamilyDefault: "sans",

  fontSizeScale: 1.25,
  useCustomFontSizes: false,
  fontSizeSmallest: 0.75,
  fontSizeSmall: 0.875,
  fontSizeBase: 1,
  fontSizeLarge: 1.25,
  fontSizeLargest: 1.5,
  fontSizeDisplay: 2.25,
  fontSizeUnit: "rem",

  lineHeightLarge: 2,
  lineHeightBase: 1.7,
  lineHeightSmall: 1.2,

  trackingTight: -0.04,
  trackingStandard: 0,
  trackingWide: 0.06,

  fontWeightBold: 600,
  fontWeightRegular: 400,
  fontWeightLight: 300,

  measureLarge: 88,
  measureBase: 72,
  measureSmall: 44,

  // SIZES
  spacingTiny: 0.125,
  spacingNearest: 0.25,
  spacingNear: 0.5,
  spacingBase: 1,
  spacingFar: 2,
  spacingFarthest: 4,

  spacingScale: 2,

  borderRadiusNone: 0,
  borderWidthThin: 1,
  borderWidthMedium: 2,
  borderWidthThick: 4,

  borderWidthScale: 2,

  borderRadiusSmall: 2,
  borderRadiusMedium: 4,
  borderRadiusLarge: 8,

  borderRadiusScale: 2,

  // Shadows

  shadowConfigDistanceScaleFactor: 0.64,
  shadowConfigBlurScaleFactor: 2.2,
  shadowConfigStartTransparency: 0.12,
  shadowConfigTransparencyScale: 1.2,
  shadowConfigSpreadMax: -4,
  shadowConfigSpreadMin: 1,
  shadowConfigXOffsetFactor: 0,

  shadowDistanceInset: 3,
  shadowDistanceNearest: 1,
  shadowDistanceNear: 3,
  shadowDistanceMedium: 9,
  shadowDistanceFar: 29,

  shadowColorChroma: 0.1,

  shadowDistanceScale: 3,

  // COLORS

  useLCH: true,
  primaryHue: 265,
  primaryLightness: 65,
  secondaryHue: 215,
  secondaryLightness: 65,

  lightTextLightnessScaleFactor: 3,
  darkTextLightnessScaleFactor: 2,
  lightSurfaceLightnessScaleFactor: 3,
  darkSurfaceLightnessScaleFactor: 2,

  lightNeutralChroma: 0.04,
  lightNeutralTextLightness: 16,
  lightNeutralSurfaceLightness: 97,
  lightNeutralBorderLightness: 20,

  darkNeutralChroma: 0.04,
  darkNeutralTextLightness: 94,
  darkNeutralSurfaceLightness: 18,
  darkNeutralBorderLightness: 80,
};

const round = (num: number) => Math.round(num * 1000) / 1000;

export const updateSpacingScale = (newScale: number) => {
  configStore.update((store) => {
    return {
      ...store,
      spacingScale: newScale,
      spacingNear: round(store.spacingBase / newScale),
      spacingNearest: round(store.spacingBase / Math.pow(newScale, 2)),
      spacingTiny: round(store.spacingBase / Math.pow(newScale, 3)),
      spacingFar: round(store.spacingBase * newScale),
      spacingFarthest: round(store.spacingBase * Math.pow(newScale, 2)),
    };
  });
};

export const updateBorderWidthScale = (newScale: number) => {
  configStore.update((store) => {
    return {
      ...store,
      borderWidthScale: newScale,
      borderWidthMedium: round(store.borderWidthThin * newScale),
      borderWidthThick: round(store.borderWidthThin * Math.pow(newScale, 2)),
    };
  });
};

export const updateBorderRadiusScale = (newScale: number) => {
  configStore.update((store) => {
    return {
      ...store,
      borderRadiusScale: newScale,
      borderRadiusMedium: round(store.borderRadiusSmall * newScale),
      borderRadiusLarge: round(store.borderRadiusSmall * Math.pow(newScale, 2)),
    };
  });
};

export const updateShadowDistanceScale = (newScale: number) => {
  configStore.update((store) => {
    return {
      ...store,
      shadowDistanceScale: newScale,
      shadowDistanceNear: round(store.shadowDistanceNearest * newScale),
      shadowDistanceMedium: round(
        store.shadowDistanceNearest * Math.pow(newScale, 2)
      ),
      shadowDistanceInset: round(store.shadowDistanceNearest * newScale),
      shadowDistanceFar: round(
        store.shadowDistanceNearest * Math.pow(newScale, 3)
      ),
    };
  });
};

export const updateFontScale = (newScale: number) => {
  configStore.update((store) => {
    return {
      ...store,
      fontSizeScale: newScale,
      fontSizeLarge: round(store.fontSizeBase * newScale),
      fontSizeLargest: round(store.fontSizeBase * Math.pow(newScale, 2)),
      fontSizeDisplay: round(store.fontSizeBase * Math.pow(newScale, 3)),
      fontSizeSmall: round(store.fontSizeBase / newScale),
      fontSizeSmallest: round(store.fontSizeBase / Math.pow(newScale, 2)),
    };
  });
};

export const setPreset = (preset: PresetName) => {
  configStore.update((store) => {
    return {
      ...store,
      ...Presets[preset],
    };
  });
};

export const configStore = localStore<ConfigStore>(STORE_KEY, defaultStore);
