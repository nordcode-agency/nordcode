import type { ConfigStore } from "../configStore";
import {
  getTextLightValues,
  getSurfaceLightValues,
  getBorderLightValues,
  getTextDarkValues,
  getSurfaceDarkValues,
  getBorderDarkValues,
  infoHue,
  getInfoLightness,
  warningHue,
  getWarningLightness,
  successHue,
  getSuccessLightness,
  dangerHue,
  getDangerLightness,
  getLightColorValues,
  getDarkColorValues,
  getStatusLightColorValues,
  getStatusDarkColorValues,
} from "./SharedThemeValues";

type WPColor = {
  name: string;
  slug: string;
  color: string;
};

type WPColorTheme = {
  color: {
    palette: WPColor[];
  };
};

export const getWPColorTheme = (store: ConfigStore): WPColorTheme => {
  const textLightValues = getTextLightValues(
    +store.lightNeutralTextLightness,
    +store.lightTextLightnessScaleFactor,
    +store.lightNeutralChroma,
    +store.primaryHue
  );

  const surfaceLightValues = getSurfaceLightValues(
    +store.lightNeutralSurfaceLightness,
    +store.lightSurfaceLightnessScaleFactor,
    +store.lightNeutralChroma,
    +store.primaryHue
  );

  const borderLightValues = getBorderLightValues(
    +store.lightNeutralBorderLightness,
    +store.lightTextLightnessScaleFactor,
    +store.lightNeutralChroma,
    +store.primaryHue
  );

  const textDarkValues = getTextDarkValues(
    +store.darkNeutralTextLightness,
    +store.darkTextLightnessScaleFactor,
    +store.darkNeutralChroma,
    +store.primaryHue
  );

  const surfaceDarkValues = getSurfaceDarkValues(
    +store.darkNeutralSurfaceLightness,
    +store.darkSurfaceLightnessScaleFactor,
    +store.darkNeutralChroma,
    +store.primaryHue
  );

  const borderDarkValues = getBorderDarkValues(
    +store.darkNeutralBorderLightness,
    +store.darkTextLightnessScaleFactor,
    +store.darkNeutralChroma,
    +store.primaryHue
  );

  const lightPrimaryColorValues = getLightColorValues(+store.primaryLightness, +store.primaryHue);

  const lightSecondaryColorValues = getLightColorValues(+store.primaryLightness, +store.primaryHue);

  const darkPrimaryColorValues = getLightColorValues(+store.primaryLightness, +store.primaryHue);

  const darkSecondaryColorValues = getLightColorValues(+store.primaryLightness, +store.primaryHue);

  return {
    color: {
      palette: [
        ...mapValuesToWPToken("text-light", textLightValues),
        ...mapValuesToWPToken("surface-light", surfaceLightValues),
        ...mapValuesToWPToken("border-light", borderLightValues),
        ...mapValuesToWPToken("text-dark", textDarkValues),
        ...mapValuesToWPToken("surface-dark", surfaceDarkValues),
        ...mapValuesToWPToken("border-dark", borderDarkValues),

        ...mapValuesToWPToken("brand-primary-light", lightPrimaryColorValues),
        ...mapValuesToWPToken("brand-secondary-light", lightSecondaryColorValues),
        ...mapValuesToWPToken("brand-primary-dark", darkPrimaryColorValues),
        ...mapValuesToWPToken("brand-secondary-dark", darkSecondaryColorValues),

        ...getStatusLightColorTheme(
          "info",
          infoHue,
          getInfoLightness(+store.primaryLightness),
          +store.primaryLightness
        ),
        ...getStatusDarkColorTheme(
          "info",
          infoHue,
          getInfoLightness(+store.primaryLightness),
          +store.primaryLightness
        ),
        ...getStatusLightColorTheme(
          "success",
          successHue,
          getSuccessLightness(+store.primaryLightness),
          +store.primaryLightness
        ),
        ...getStatusDarkColorTheme(
          "success",
          successHue,
          getSuccessLightness(+store.primaryLightness),
          +store.primaryLightness
        ),
        ...getStatusLightColorTheme(
          "warning",
          warningHue,
          getWarningLightness(+store.primaryLightness),
          +store.primaryLightness
        ),
        ...getStatusDarkColorTheme(
          "warning",
          warningHue,
          getWarningLightness(+store.primaryLightness),
          +store.primaryLightness
        ),
        ...getStatusLightColorTheme(
          "danger",
          dangerHue,
          getDangerLightness(+store.primaryLightness),
          +store.primaryLightness
        ),
        ...getStatusDarkColorTheme(
          "danger",
          dangerHue,
          getDangerLightness(+store.primaryLightness),
          +store.primaryLightness
        ),
      ],
    },
  };
};

const mapValuesToWPToken = (baseName: string, values: Record<string, string>): WPColor[] => {
  return Object.entries(values).map(([variant, value]) => {
    return getWPColor(`${baseName}-${variant}`, value);
  });
};

const getWPColor = (name: string, value: string): WPColor => {
  return {
    name: name,
    slug: name,
    color: `oklch(${value})`,
  };
};

const getStatusLightColorTheme = (
  name: "info" | "warning" | "success" | "danger",
  hue: number,
  lightness: number,
  primaryLightness: number
): WPColor[] => {
  const colorValues = getStatusLightColorValues(lightness, hue, primaryLightness);
  return mapValuesToWPToken(`status-${name}-light`, colorValues);
};

const getStatusDarkColorTheme = (
  name: "info" | "warning" | "success" | "danger",
  hue: number,
  lightness: number,
  primaryLightness: number
): WPColor[] => {
  const colorValues = getStatusDarkColorValues(lightness, hue, primaryLightness);
  return mapValuesToWPToken(`status-${name}-dark`, colorValues);
};
