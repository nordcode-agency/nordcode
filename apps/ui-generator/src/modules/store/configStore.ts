import { localStore } from './utils/localStore';
import type { PresetName } from '../presets/Presets';
import { Presets } from '../presets/Presets';

const STORE_KEY = 'CONFIG_STORE';

export type ConfigStore = {
    // TYPOGRAPHY
    fontFamilyMono: string;
    fontFamilySans: string;
    fontFamilySerif: string;
    fontFamilyDefault: 'sans' | 'serif' | 'mono';

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

    fontWeightDefault: number;
    fontWeightActive: number;
    fontWeightHeading: number;
    fontWeightStrong: number;

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

    shadowConfigDistanceBase: number;
    shadowConfigDistanceScaleFactor: number;
    shadowConfigBlurScaleFactor: number;
    shadowConfigStartTransparency: number;
    shadowConfigTransparencyScale: number;
    shadowConfigSpreadMax: number;
    shadowConfigXOffsetFactor: number;

    lightShadowColorLightness: number;
    darkShadowColorLightness: number;
    lightShadowColorChroma: number;
    darkShadowColorChroma: number;

    // COLORS
    primaryHue: number;
    primaryLightness: number;
    primaryLightnessDark: number;
    primaryChroma: number;
    secondaryHue: number;
    secondaryLightness: number;
    secondaryLightnessDark: number;
    secondaryChroma: number;

    lightTextLightnessScaleFactor: number;
    darkTextLightnessScaleFactor: number;
    lightSurfaceLightnessScaleFactor: number;
    darkSurfaceLightnessScaleFactor: number;

    useSecondaryColorForFG: boolean;
    useSecondaryColorForBG: boolean;
    useSecondaryColorForBorders: boolean;

    lightNeutralChromaFG: number;
    lightNeutralChromaBG: number;
    lightNeutralChromaBorder: number;
    lightNeutralTextLightness: number;
    lightNeutralSurfaceLightness: number;
    lightNeutralBorderLightness: number;

    darkNeutralChromaFG: number;
    darkNeutralChromaBG: number;
    darkNeutralChromaBorder: number;
    darkNeutralTextLightness: number;
    darkNeutralSurfaceLightness: number;
    darkNeutralBorderLightness: number;
};

const defaultStore: ConfigStore = {
    // TYPOGRAPHY
    fontFamilyMono: 'monospace',
    fontFamilySans: 'system-ui, sans-serif',
    fontFamilySerif: 'serif',
    fontFamilyDefault: 'sans',

    fontSizeScale: 1.25,
    useCustomFontSizes: false,
    fontSizeSmallest: 0.75,
    fontSizeSmall: 0.875,
    fontSizeBase: 1,
    fontSizeLarge: 1.25,
    fontSizeLargest: 1.5,
    fontSizeDisplay: 2.25,
    fontSizeUnit: 'rem',

    lineHeightLarge: 3.4,
    lineHeightBase: 3,
    lineHeightSmall: 2.4,

    trackingTight: -0.04,
    trackingStandard: 0,
    trackingWide: 0.06,

    fontWeightHeading: 600,
    fontWeightDefault: 400,
    fontWeightActive: 600,
    fontWeightStrong: 600,

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

    shadowConfigDistanceBase: 0.5,
    shadowConfigDistanceScaleFactor: 1.5,
    shadowConfigBlurScaleFactor: 2,
    shadowConfigStartTransparency: 0.3,
    shadowConfigTransparencyScale: 0.85,
    shadowConfigSpreadMax: -4,
    shadowConfigXOffsetFactor: 0.3,

    lightShadowColorLightness: 80,
    darkShadowColorLightness: 30,
    lightShadowColorChroma: 0.03,
    darkShadowColorChroma: 0.05,

    // COLORS

    primaryHue: 265,
    primaryLightness: 56,
    primaryLightnessDark: 80,
    primaryChroma: 0.3,
    secondaryHue: 215,
    secondaryLightness: 65,
    secondaryLightnessDark: 76,
    secondaryChroma: 0.3,

    useSecondaryColorForFG: false,
    useSecondaryColorForBG: false,
    useSecondaryColorForBorders: false,
    lightNeutralChromaFG: 0.03,
    lightNeutralChromaBG: 0.03,
    lightNeutralChromaBorder: 0.03,
    lightNeutralTextLightness: 28,
    lightNeutralSurfaceLightness: 99,
    lightNeutralBorderLightness: 87,
    lightTextLightnessScaleFactor: 0.05,
    lightSurfaceLightnessScaleFactor: 0.01,

    darkNeutralChromaFG: 0.05,
    darkNeutralChromaBG: 0.05,
    darkNeutralChromaBorder: 0.05,
    darkNeutralTextLightness: 88,
    darkNeutralSurfaceLightness: 15,
    darkNeutralBorderLightness: 30,
    darkTextLightnessScaleFactor: 0.06,
    darkSurfaceLightnessScaleFactor: 0.03,
};

const round = (num: number) => Math.round(num * 1000) / 1000;

export const updateSpacingScale = (newScale: number) => {
    configStore?.update((store) => {
        return {
            ...store,
            spacingScale: newScale,
            spacingNear: round(store.spacingBase / newScale),
            spacingNearest: round(store.spacingBase / newScale ** 2),
            spacingTiny: round(store.spacingBase / newScale ** 3),
            spacingFar: round(store.spacingBase * newScale),
            spacingFarthest: round(store.spacingBase * newScale ** 2),
        };
    });
};

export const updateSpacingBase = (baseSize: number) => {
    configStore?.update((store) => {
        return {
            ...store,
            spacingBase: baseSize,
            spacingNear: round(baseSize / store.spacingScale),
            spacingNearest: round(baseSize / store.spacingScale ** 2),
            spacingTiny: round(baseSize / store.spacingScale ** 3),
            spacingFar: round(baseSize * store.spacingScale),
            spacingFarthest: round(baseSize * store.spacingScale ** 2),
        };
    });
};

export const updateBorderWidthScale = (newScale: number) => {
    configStore?.update((store) => {
        return {
            ...store,
            borderWidthScale: newScale,
            borderWidthMedium: round(store.borderWidthThin * newScale),
            borderWidthThick: round(store.borderWidthThin * newScale ** 2),
        };
    });
};

export const updateBorderWidths = (baseSize: number) => {
    configStore?.update((store) => {
        return {
            ...store,
            borderWidthThin: baseSize,
            borderWidthMedium: round(baseSize * store.borderWidthScale),
            borderWidthThick: round(baseSize * store.borderWidthScale ** 2),
        };
    });
};

export const updateBorderRadiusScale = (newScale: number) => {
    configStore?.update((store) => {
        return {
            ...store,
            borderRadiusScale: newScale,
            borderRadiusMedium: round(store.borderRadiusSmall * newScale),
            borderRadiusLarge: round(store.borderRadiusSmall * newScale ** 2),
        };
    });
};

export const updateBorderRadius = (baseSize: number) => {
    configStore?.update((store) => {
        return {
            ...store,
            borderRadiusSmall: baseSize,
            borderRadiusMedium: round(baseSize * store.borderRadiusScale),
            borderRadiusLarge: round(baseSize * store.borderRadiusScale ** 2),
        };
    });
};

export const updateFontScale = (newScale: number) => {
    configStore?.update((store) => {
        return {
            ...store,
            fontSizeScale: newScale,
            fontSizeLarge: round(store.fontSizeBase * newScale),
            fontSizeLargest: round(store.fontSizeBase * newScale ** 2),
            fontSizeDisplay: round(store.fontSizeBase * newScale ** 3),
            fontSizeSmall: round(store.fontSizeBase / newScale),
            fontSizeSmallest: round(store.fontSizeBase / newScale ** 2),
        };
    });
};

export const setPreset = (preset: PresetName) => {
    configStore?.update((store) => {
        return {
            ...store,
            ...Presets[preset],
        };
    });
};

export const configStore =
    typeof localStorage === 'undefined'
        ? undefined
        : localStore<ConfigStore>(STORE_KEY, defaultStore);
