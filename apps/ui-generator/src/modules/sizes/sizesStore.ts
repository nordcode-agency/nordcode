import { localStore } from "../store/utils/localStore";

const STORE_KEY = "SIZES_STORE";

export type SizesStore = {
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
};

const defaultStore: SizesStore = {
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
};

const round = (num: number) => Math.round(num * 1000) / 1000;

export const updateSpacingScale = (newScale: number) => {
  sizesStore.update((store) => {
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
  sizesStore.update((store) => {
    return {
      ...store,
      borderWidthScale: newScale,
      borderWidthMedium: round(store.borderWidthThin * newScale),
      borderWidthThick: round(store.borderWidthThin * Math.pow(newScale, 2)),
    };
  });
};

export const updateBorderRadiusScale = (newScale: number) => {
  sizesStore.update((store) => {
    return {
      ...store,
      borderRadiusScale: newScale,
      borderRadiusMedium: round(store.borderRadiusSmall * newScale),
      borderRadiusLarge: round(store.borderRadiusSmall * Math.pow(newScale, 2)),
    };
  });
};

export const updateShadowDistanceScale = (newScale: number) => {
  sizesStore.update((store) => {
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

export const sizesStore = localStore<SizesStore>(STORE_KEY, defaultStore);
