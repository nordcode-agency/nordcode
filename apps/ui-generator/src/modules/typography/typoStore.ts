import { localStore } from "../store/utils/localStore";

const STORE_KEY = "TYPO_STORE";

export type TypoStore = {
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
};

const defaultStore: TypoStore = {
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

  fontWeightBold: 900,
  fontWeightRegular: 400,
  fontWeightLight: 300,

  measureLarge: 88,
  measureBase: 72,
  measureSmall: 44,
};

export const typoStore = localStore<TypoStore>(STORE_KEY, defaultStore);

const round = (num: number) => Math.round(num * 1000) / 1000;

export const updateFontScale = (newScale: number) => {
  typoStore.update((store) => {
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
