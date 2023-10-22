import type { ConfigStore } from "../configStore";
import { getWPColorTheme } from "./getWPColorTheme";

export const getWPTheme = (store: ConfigStore) => {
  return {
    $schema: "https://schemas.wp.org/trunk/theme.json",
    version: 2,
    settings: {
      ...getWPColorTheme(store),
    },
  };
};
