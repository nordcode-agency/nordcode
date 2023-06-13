import { localStore } from "../store/utils/localStore";

const STORE_KEY = "COLOURS_STORE";
type ColorMode = "oklch" | "default";

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
  shadow: ColorDefinition;
};

type LCHColorDefinition = {
  hue: number;
  chroma: number;
};

export type ColorsStore = {
  useLCH: boolean;
  oklch: {
    light: {
      primary: LCHColorDefinition;
      secondary: LCHColorDefinition;
      neutral: LCHColorDefinition;
    };
    dark: {
      primary: LCHColorDefinition;
      secondary: LCHColorDefinition;
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

const defaultStore: ColorsStore = {
  useLCH: true,
  oklch: {
    light: {
      primary: {
        hue: 195,
        chroma: 0,
      },
      secondary: {
        hue: 312,
        chroma: 0,
      },
      neutral: {
        hue: 195,
        chroma: 0.01,
      },
    },
    dark: {
      primary: {
        hue: 195,
        chroma: 0.2,
      },
      secondary: {
        hue: 312,
        chroma: 0.1,
      },
      neutral: {
        hue: 195,
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
      shadow: {
        strong: "oklch(8% 0.01 195.3)",
        base: "oklch(8% 0.01 195.3)",
        subtle: "oklch(8% 0.01 195.3)",
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
      shadow: {
        strong: "oklch(8% 0.01 195.3)",
        base: "oklch(8% 0.01 195.3)",
        subtle: "oklch(8% 0.01 195.3)",
      },
    },
    status: {
      error: "oklch(62.67% 0.289 25.41)",
    },
  },
};

export const colorStore = localStore<ColorsStore>(STORE_KEY, defaultStore);
