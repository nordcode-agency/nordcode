import type { ConfigStore } from '../store/configStore';

export type DensityPresetName = 'compact' | 'default' | 'spacious';

export const DensityPresets: Record<DensityPresetName, Partial<ConfigStore>> = {
    compact: {
        controlHeightBase: 2.25,
        controlHeightSmall: 1.75,

        lineHeightLarge: 1.6,
        lineHeightBase: 1.4,
        lineHeightSmall: 1.1,

        spacingTiny: 0.125,
        spacingNearest: 0.2,
        spacingNear: 0.375,
        spacingBase: 0.75,
        spacingFar: 1.5,
        spacingFarthest: 3,

        controlSpacingMinimal: 0.0625,
        controlSpacingTiny: 0.125,
        controlSpacingNearest: 0.25,
        controlSpacingNear: 0.37,
        controlSpacingBase: 0.5,
        controlSpacingFar: 0.75,
        controlSpacingFarthest: 1,
    },
    default: {
        controlHeightBase: 2.5,
        controlHeightSmall: 2,

        lineHeightLarge: 1.85,
        lineHeightBase: 1.55,
        lineHeightSmall: 1.1,

        spacingTiny: 0.125,
        spacingNearest: 0.25,
        spacingNear: 0.5,
        spacingBase: 1,
        spacingFar: 2,
        spacingFarthest: 4,

        controlSpacingMinimal: 0.125,
        controlSpacingTiny: 0.25,
        controlSpacingNearest: 0.375,
        controlSpacingNear: 0.5,
        controlSpacingBase: 0.75,
        controlSpacingFar: 1,
        controlSpacingFarthest: 1.5,
    },
    spacious: {
        controlHeightBase: 3,
        controlHeightSmall: 2.5,

        lineHeightLarge: 1.95,
        lineHeightBase: 1.65,
        lineHeightSmall: 1.25,

        spacingTiny: 0.25,
        spacingNearest: 0.5,
        spacingNear: 0.75,
        spacingBase: 1.25,
        spacingFar: 2.5,
        spacingFarthest: 5,

        controlSpacingMinimal: 0.1875,
        controlSpacingTiny: 0.375,
        controlSpacingNearest: 0.5,
        controlSpacingNear: 0.75,
        controlSpacingBase: 1,
        controlSpacingFar: 1.25,
        controlSpacingFarthest: 1.75,
    },
} as const;
