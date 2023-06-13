import { localStore } from "../store/utils/localStore";

const STORE_KEY = "SIZES_STORE";

export type SizesStore = {
  spacingTiny: number;
  spacingNearest: number;
  spacingNear: number;
  spacingBase: number;
  spacingFar: number;
  spacingFarthest: number;
};

const defaultStore: SizesStore = {
  spacingTiny: 0.125,
  spacingNearest: 0.25,
  spacingNear: 0.5,
  spacingBase: 1,
  spacingFar: 2,
  spacingFarthest: 4,
};

export const sizesStore = localStore<SizesStore>(STORE_KEY, defaultStore);
