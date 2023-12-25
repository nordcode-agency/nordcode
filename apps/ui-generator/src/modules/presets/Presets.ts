import type { ConfigStore } from '../store/configStore';

export type PresetName = 'modern' | 'playful' | 'brutalist' | 'elegant';
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

        lightNeutralChromaFG: 0.03,
        lightNeutralChromaBG: 0.03,
        lightNeutralChromaBorder: 0.03,
        lightNeutralTextLightness: 28,
        lightNeutralSurfaceLightness: 98,
        lightNeutralBorderLightness: 87,
        lightTextLightnessScaleFactor: 0.05,
        lightSurfaceLightnessScaleFactor: 0.05,

        darkNeutralChromaFG: 0.03,
        darkNeutralChromaBG: 0.03,
        darkNeutralChromaBorder: 0.03,
        darkNeutralTextLightness: 88,
        darkNeutralSurfaceLightness: 15,
        darkNeutralBorderLightness: 35,
        darkTextLightnessScaleFactor: 0.06,
        darkSurfaceLightnessScaleFactor: 0.1,
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

        lightTextLightnessScaleFactor: 0.05,
        darkTextLightnessScaleFactor: 0.05,
        lightSurfaceLightnessScaleFactor: 0.05,
        darkSurfaceLightnessScaleFactor: 0.05,

        lightNeutralChromaFG: 0.06,
        lightNeutralChromaBG: 0.06,
        lightNeutralChromaBorder: 0.06,
        lightNeutralTextLightness: 20,
        lightNeutralSurfaceLightness: 97,
        lightNeutralBorderLightness: 30,

        darkNeutralChromaFG: 0.06,
        darkNeutralChromaBG: 0.06,
        darkNeutralChromaBorder: 0.06,
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

        lightTextLightnessScaleFactor: 0.12,
        darkTextLightnessScaleFactor: 0.1,
        lightSurfaceLightnessScaleFactor: 0.01,
        darkSurfaceLightnessScaleFactor: 0.03,

        lightNeutralChromaFG: 0.005,
        lightNeutralChromaBG: 0.005,
        lightNeutralChromaBorder: 0.005,
        lightNeutralTextLightness: 3,
        lightNeutralSurfaceLightness: 99,
        lightNeutralBorderLightness: 40,

        darkNeutralChromaFG: 0.008,
        darkNeutralChromaBG: 0.008,
        darkNeutralChromaBorder: 0.008,
        darkNeutralTextLightness: 97,
        darkNeutralSurfaceLightness: 6,
        darkNeutralBorderLightness: 65,
    },
    elegant: {
        borderWidthScale: 2,
        borderWidthThin: 1,
        borderWidthMedium: 2,
        borderWidthThick: 4,

        borderRadiusSmall: 0,
        borderRadiusMedium: 0,
        borderRadiusLarge: 0,

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

        shadowDistanceScale: 2,

        lightNeutralChromaFG: 0.008,
        lightNeutralChromaBG: 0.008,
        lightNeutralChromaBorder: 0.008,
        lightNeutralTextLightness: 15,
        lightNeutralSurfaceLightness: 99.4,
        lightNeutralBorderLightness: 55,
        lightTextLightnessScaleFactor: 0.05,
        lightSurfaceLightnessScaleFactor: 0.05,

        darkNeutralChromaFG: 0.008,
        darkNeutralChromaBG: 0.008,
        darkNeutralChromaBorder: 0.008,
        darkNeutralTextLightness: 85,
        darkNeutralSurfaceLightness: 8,
        darkNeutralBorderLightness: 35,
        darkTextLightnessScaleFactor: 0.05,
        darkSurfaceLightnessScaleFactor: 0.05,
    },
} as const;
