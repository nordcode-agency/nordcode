import { writable } from "svelte/store";

export const typoStore = writable({
  fontFamilyMono: "DMMono, monospace",
  fontFamilySans: "system-ui, sans-serif",
  fontFamilySerif: "serif",
  fontFamilyDefault: "sans",

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
});
