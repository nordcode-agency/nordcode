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
  borderWidthNormal: number;
  borderWidthThick: number;

  borderWidthScale: number;

  borderRadiusSmall: number;
  borderRadiusNormal: number;
  borderRadiusLarge: number;

  borderRadiusScale: number;

  shadowDistanceInset: number;
  shadowDistanceNearest: number;
  shadowDistanceNear: number;
  shadowDistanceBase: number;
  shadowDistanceFar: number;

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
  borderWidthNormal: 2,
  borderWidthThick: 4,

  borderWidthScale: 2,

  borderRadiusSmall: 2,
  borderRadiusNormal: 4,
  borderRadiusLarge: 8,

  borderRadiusScale: 2,

  shadowDistanceInset: 2,
  shadowDistanceNearest: 1,
  shadowDistanceNear: 2,
  shadowDistanceBase: 4,
  shadowDistanceFar: 8,

  shadowDistanceScale: 2,
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
      borderWidthNormal: round(store.borderWidthThin * newScale),
      borderWidthThick: round(store.borderWidthThin * Math.pow(newScale, 2)),
    };
  });
};

export const updateBorderRadiusScale = (newScale: number) => {
  sizesStore.update((store) => {
    return {
      ...store,
      borderRadiusScale: newScale,
      borderRadiusNormal: round(store.borderRadiusSmall * newScale),
      borderRadiusLarge: round(store.borderRadiusSmall * Math.pow(newScale, 2)),
    };
  });
};

export const updateShadowDistanceScale = (newScale: number) => {
  sizesStore.update((store) => {
    return {
      ...store,
      shadowDistanceScale: newScale,
      shadowDistanceNearest: round(
        store.shadowDistanceBase / Math.pow(newScale, 2)
      ),
      shadowDistanceNear: round(store.shadowDistanceBase / newScale),
      shadowDistanceInset: round(store.shadowDistanceBase / newScale),
      shadowDistanceFar: round(store.shadowDistanceBase * newScale),
    };
  });
};

export const sizesStore = localStore<SizesStore>(STORE_KEY, defaultStore);
