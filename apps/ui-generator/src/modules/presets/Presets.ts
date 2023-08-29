import type { ConfigStore } from "../store/configStore";

export type PresetName = "modern" | "playful" | "brutalist" | "elegant";
export const Presets: Record<PresetName, Partial<ConfigStore>> = {
  modern: {
    borderWidthScale: 2,
    borderWidthThin: 1,
    borderWidthMedium: 2,
    borderWidthThick: 4,

    borderRadiusSmall: 2,
    borderRadiusMedium: 4,
    borderRadiusLarge: 8,

    shadowConfigDistanceScaleFactor: 0.8,
    shadowConfigBlurScaleFactor: 1.8,
    shadowConfigStartTransparency: 0.2,
    shadowConfigTransparencyScale: 0.8,
    shadowConfigSpreadMax: -2,
    shadowConfigSpreadMin: 1,
    shadowConfigXOffsetFactor: 0,

    shadowDistanceInset: 3,
    shadowDistanceNearest: 1,
    shadowDistanceNear: 3,
    shadowDistanceMedium: 9,
    shadowDistanceFar: 29,

    shadowColorChroma: 0.01,

    shadowDistanceScale: 3,

    lightLightnessScaleFactor: 1.5,
    darkLightnessScaleFactor: 1,

    lightNeutralChroma: 0.01,
    lightNeutralTextLightness: 24,
    lightNeutralSurfaceLightness: 98,
    lightNeutralBorderLightness: 85,

    darkNeutralChroma: 0.01,
    darkNeutralTextLightness: 96,
    darkNeutralSurfaceLightness: 10,
    darkNeutralBorderLightness: 30,
  },
  playful: {
    borderWidthScale: 2,
    borderWidthThin: 1,
    borderWidthMedium: 2,
    borderWidthThick: 4,

    borderRadiusScale: 3,
    borderRadiusSmall: 3,
    borderRadiusMedium: 9,
    borderRadiusLarge: 27,

    shadowConfigDistanceScaleFactor: 0.64,
    shadowConfigBlurScaleFactor: 2.2,
    shadowConfigStartTransparency: 0.12,
    shadowConfigTransparencyScale: 1.2,
    shadowConfigSpreadMax: -4,
    shadowConfigSpreadMin: 1,
    shadowConfigXOffsetFactor: 1.8,

    shadowDistanceInset: 3,
    shadowDistanceNearest: 1,
    shadowDistanceNear: 3,
    shadowDistanceMedium: 9,
    shadowDistanceFar: 29,

    shadowColorChroma: 0.3,

    shadowDistanceScale: 3,

    lightLightnessScaleFactor: 1.5,
    darkLightnessScaleFactor: 1,

    lightNeutralChroma: 0.06,
    lightNeutralTextLightness: 20,
    lightNeutralSurfaceLightness: 97,
    lightNeutralBorderLightness: 30,

    darkNeutralChroma: 0.06,
    darkNeutralTextLightness: 90,
    darkNeutralSurfaceLightness: 24,
    darkNeutralBorderLightness: 70,
  },
  brutalist: {
    borderWidthScale: 2.5,
    borderWidthThin: 1,
    borderWidthMedium: 2.5,
    borderWidthThick: 6.25,

    borderRadiusScale: 1,
    borderRadiusSmall: 0,
    borderRadiusMedium: 0,
    borderRadiusLarge: 0,

    shadowConfigDistanceScaleFactor: 1,
    shadowConfigBlurScaleFactor: 0,
    shadowConfigStartTransparency: 1,
    shadowConfigTransparencyScale: 1,
    shadowConfigSpreadMax: 0,
    shadowConfigSpreadMin: 0,
    shadowConfigXOffsetFactor: 1,

    shadowDistanceInset: 2,
    shadowDistanceNearest: 1,
    shadowDistanceNear: 2,
    shadowDistanceMedium: 4,
    shadowDistanceFar: 8,

    shadowColorChroma: 0.008,

    shadowDistanceScale: 2,

    lightLightnessScaleFactor: 1.5,
    darkLightnessScaleFactor: 1,

    lightNeutralChroma: 0.006,
    lightNeutralTextLightness: 7.5,
    lightNeutralSurfaceLightness: 99,
    lightNeutralBorderLightness: 35,

    darkNeutralChroma: 0.006,
    darkNeutralTextLightness: 97.5,
    darkNeutralSurfaceLightness: 12.5,
    darkNeutralBorderLightness: 65,
  },
  elegant: {
    borderWidthScale: 2,
    borderWidthThin: 1,
    borderWidthMedium: 2,
    borderWidthThick: 4,

    borderRadiusScale: 1,
    borderRadiusSmall: 0,
    borderRadiusMedium: 0,
    borderRadiusLarge: 0,

    shadowConfigDistanceScaleFactor: 0.64,
    shadowConfigBlurScaleFactor: 2.2,
    shadowConfigStartTransparency: 0.12,
    shadowConfigTransparencyScale: 1.2,
    shadowConfigSpreadMax: -4,
    shadowConfigSpreadMin: 1,
    shadowConfigXOffsetFactor: 1.8,

    shadowDistanceInset: 3,
    shadowDistanceNearest: 1,
    shadowDistanceNear: 3,
    shadowDistanceMedium: 9,
    shadowDistanceFar: 29,

    shadowColorChroma: 0.1,

    shadowDistanceScale: 3,

    lightLightnessScaleFactor: 1.5,
    darkLightnessScaleFactor: 1,

    lightNeutralChroma: 0.008,
    lightNeutralTextLightness: 16,
    lightNeutralSurfaceLightness: 97,
    lightNeutralBorderLightness: 20,

    darkNeutralChroma: 0.008,
    darkNeutralTextLightness: 94,
    darkNeutralSurfaceLightness: 18,
    darkNeutralBorderLightness: 80,
  },
} as const;
