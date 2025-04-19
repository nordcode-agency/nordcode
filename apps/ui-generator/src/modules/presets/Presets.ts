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

        shadowConfigDistanceBase: 0.8,
        shadowConfigDistanceScaleFactor: 1.3,
        shadowConfigBlurScaleFactor: 2,
        shadowConfigStartTransparency: 0.3,
        shadowConfigTransparencyScale: 0.85,
        shadowConfigSpreadMax: -4,
        shadowConfigXOffsetFactor: 0.3,

        lightShadowColorLightness: 80,
        darkShadowColorLightness: 30,
        lightShadowColorChroma: 0.03,
        darkShadowColorChroma: 0.05,

        lightNeutralChromaFG: 0.03,
        lightNeutralChromaBG: 0.03,
        lightNeutralChromaBorder: 0.03,
        lightNeutralTextLightness: 28,
        lightNeutralSurfaceLightness: 100,
        lightNeutralBorderLightness: 87,
        lightTextLightnessScaleFactor: 1.25,
        lightSurfaceLightnessScaleFactor: 0.98,
        lightBorderLightnessScaleFactor: 1.025,

        darkNeutralChromaFG: 0.05,
        darkNeutralChromaBG: 0.05,
        darkNeutralChromaBorder: 0.05,
        darkNeutralTextLightness: 88,
        darkNeutralSurfaceLightness: 15,
        darkNeutralBorderLightness: 30,
        darkTextLightnessScaleFactor: 0.88,
        darkSurfaceLightnessScaleFactor: 1.3,
        darkBorderLightnessScaleFactor: 0.98,
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

        shadowConfigDistanceBase: 0.8,
        shadowConfigDistanceScaleFactor: 1.3,
        shadowConfigBlurScaleFactor: 2,
        shadowConfigStartTransparency: 0.3,
        shadowConfigTransparencyScale: 0.85,
        shadowConfigSpreadMax: -4,
        shadowConfigXOffsetFactor: 0.3,

        lightShadowColorLightness: 80,
        darkShadowColorLightness: 30,
        lightShadowColorChroma: 0.06,
        darkShadowColorChroma: 0.06,

        lightNeutralChromaFG: 0.15,
        lightNeutralChromaBG: 0.06,
        lightNeutralChromaBorder: 0.06,
        lightNeutralTextLightness: 25,
        lightNeutralSurfaceLightness: 100,
        lightNeutralBorderLightness: 90,
        lightTextLightnessScaleFactor: 1.28,
        lightSurfaceLightnessScaleFactor: 0.95,
        lightBorderLightnessScaleFactor: 1.035,

        darkNeutralChromaFG: 0.15,
        darkNeutralChromaBG: 0.08,
        darkNeutralChromaBorder: 0.08,
        darkNeutralTextLightness: 80,
        darkNeutralSurfaceLightness: 20,
        darkNeutralBorderLightness: 30,
        darkSurfaceLightnessScaleFactor: 1.4,
        darkTextLightnessScaleFactor: 0.84,
        darkBorderLightnessScaleFactor: 0.92,
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

        shadowConfigDistanceBase: 1,
        shadowConfigDistanceScaleFactor: 1.2,
        shadowConfigBlurScaleFactor: 0,
        shadowConfigStartTransparency: 0.4,
        shadowConfigTransparencyScale: 1,
        shadowConfigSpreadMax: 0,
        shadowConfigXOffsetFactor: 1,

        lightShadowColorLightness: 65,
        darkShadowColorLightness: 60,
        lightShadowColorChroma: 0.005,
        darkShadowColorChroma: 0.008,

        lightTextLightnessScaleFactor: 2,
        darkTextLightnessScaleFactor: 0.8,
        lightSurfaceLightnessScaleFactor: 0.98,
        darkSurfaceLightnessScaleFactor: 1.3,
        lightBorderLightnessScaleFactor: 1.035,
        darkBorderLightnessScaleFactor: 0.92,

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

        borderRadiusSmall: 1,
        borderRadiusMedium: 2,
        borderRadiusLarge: 4,

        shadowConfigDistanceBase: 0.75,
        shadowConfigDistanceScaleFactor: 1.4,
        shadowConfigBlurScaleFactor: 1.75,
        shadowConfigStartTransparency: 0.25,
        shadowConfigTransparencyScale: 0.85,
        shadowConfigSpreadMax: -4,
        shadowConfigXOffsetFactor: 0.25,

        lightShadowColorLightness: 80,
        darkShadowColorLightness: 25,
        lightShadowColorChroma: 0.005,
        darkShadowColorChroma: 0.005,

        lightNeutralChromaFG: 0.005,
        lightNeutralChromaBG: 0.005,
        lightNeutralChromaBorder: 0.005,
        lightNeutralTextLightness: 20,
        lightNeutralSurfaceLightness: 100,
        lightNeutralBorderLightness: 92,
        lightTextLightnessScaleFactor: 1.75,
        lightSurfaceLightnessScaleFactor: 0.985,
        lightBorderLightnessScaleFactor: 1.5,

        darkNeutralChromaFG: 0.005,
        darkNeutralChromaBG: 0.005,
        darkNeutralChromaBorder: 0.005,
        darkNeutralTextLightness: 85,
        darkNeutralSurfaceLightness: 20,
        darkNeutralBorderLightness: 25,
        darkTextLightnessScaleFactor: 0.84,
        darkSurfaceLightnessScaleFactor: 1.125,
        darkBorderLightnessScaleFactor: 0.985,
    },
} as const;
