import { localStore } from "./utils/localStore";

const STORE_KEY = "CONFIG_STORE";

type ColorDefinition = {
  strong: string;
  subtle: string;
  base: string;
};

type ThemeDefinition = {
  primary: ColorDefinition;
  secondary: ColorDefinition;
  text: ColorDefinition;
  surface: ColorDefinition;
  border: ColorDefinition;
};

type LCHColorDefinition = {
  hue: number;
  chroma: number;
};

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

  borderWidthThin: number;
  borderWidthMedium: number;
  borderWidthThick: number;

  borderWidthScale: number;

  borderRadiusSmall: number;
  borderRadiusMedium: number;
  borderRadiusLarge: number;

  borderRadiusScale: number;

  shadowDistanceInset: number;
  shadowDistanceNearest: number;
  shadowDistanceNear: number;
  shadowDistanceMedium: number;
  shadowDistanceFar: number;

  shadowColorHue: number;
  shadowColorChroma: number;

  shadowDistanceScale: number;

  // COLORS
  useLCH: boolean;
  oklch: {
    primaryHue: number;
    secondaryHue: number;
    light: {
      neutral: LCHColorDefinition;
    };
    dark: {
      neutral: LCHColorDefinition;
    };
  };
  default: {
    light: ThemeDefinition;
    dark: ThemeDefinition;
    status: {
      error: string;
    };
  };
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
  fontSizeUnit: "rem",

  lineHeightLarge: 2,
  lineHeightBase: 1.728,
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

  borderWidthThin: 1,
  borderWidthMedium: 2,
  borderWidthThick: 4,

  borderWidthScale: 2,

  borderRadiusSmall: 2,
  borderRadiusMedium: 4,
  borderRadiusLarge: 8,

  borderRadiusScale: 2,

  shadowDistanceInset: 3,
  shadowDistanceNearest: 1,
  shadowDistanceNear: 3,
  shadowDistanceMedium: 9,
  shadowDistanceFar: 29,

  shadowColorHue: 265,
  shadowColorChroma: 0.1,

  shadowDistanceScale: 3,

  // COLORS

  useLCH: true,
  oklch: {
    primaryHue: 265,
    secondaryHue: 215,
    light: {
      neutral: {
        hue: 265,
        chroma: 0.01,
      },
    },
    dark: {
      neutral: {
        hue: 265,
        chroma: 0.01,
      },
    },
  },
  default: {
    light: {
      primary: {
        strong: "oklch(88.5% 0.192 195.3)",
        base: "oklch(80.6% 0.18 195.3)",
        subtle: "oklch(87.7% 0.088 195.3)",
      },
      secondary: {
        strong: "oklch(46.6% 0.229 312.35)",
        base: "oklch(53.8% 0.229 312.35)",
        subtle: "oklch(53.8% 0.229 312.35)",
      },
      text: {
        strong: "oklch(7.4% 0.01 195.3)",
        base: "oklch(16.4% 0.015 195.3)",
        subtle: "oklch(30.6% 0.01 195.3)",
      },
      surface: {
        strong: "oklch(99% 0.005 195.3)",
        base: "oklch(98% 0.009 195.3)",
        subtle: "oklch(90.1% 0.028 195.3)",
      },
      border: {
        strong: "oklch(16% 0.01 195.3)",
        base: "oklch(24% 0.015 195.3)",
        subtle: "oklch(40% 0.01 195.3)",
      },
    },
    dark: {
      primary: {
        strong: "oklch(88.5% 0.192 195.3)",
        base: "oklch(80.6% 0.18 195.3)",
        subtle: "oklch(87.7% 0.088 195.3)",
      },
      secondary: {
        strong: "oklch(46.6% 0.229 312.35)",
        base: "oklch(53.8% 0.229 312.35)",
        subtle: "oklch(53.8% 0.229 312.35)",
      },
      text: {
        strong: "oklch(99% 0.01 195.3)",
        base: "oklch(97% 0.007 195.3)",
        subtle: "oklch(80.1% 0.004 195.3)",
      },
      surface: {
        strong: "oklch(7.4% 0.01 195.3)",
        base: "oklch(12.4% 0.008 195.3)",
        subtle: "oklch(24.6% 0.005 195.3)",
      },
      border: {
        strong: "oklch(98% 0.005 195.3)",
        base: "oklch(72% 0.009 195.3)",
        subtle: "oklch(60.1% 0.015 195.3)",
      },
    },
    status: {
      error: "oklch(62.67% 0.289 25.41)",
    },
  },
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
      fontSizeSmall: round(store.fontSizeBase / newScale),
      fontSizeSmallest: round(store.fontSizeBase / Math.pow(newScale, 2)),
    };
  });
};

export const configStore = localStore<ConfigStore>(STORE_KEY, defaultStore);
