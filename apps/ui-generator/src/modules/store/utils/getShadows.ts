import type { ConfigStore } from "../configStore";

export const getShadows = (store: ConfigStore) => {
  const shadowColorLight = `oklch(${
    store.lightNeutralBorderLightness * 0.75
  }% ${store.shadowColorChroma} ${store.primaryHue})`;
  const shadowColorDark = `oklch(${store.darkNeutralBorderLightness * 1.25}% ${
    store.shadowColorChroma
  } ${store.primaryHue})`;

  const shadowConfig = {
    scaleFactor: store.shadowConfigDistanceScaleFactor,
    blurFactor: store.shadowConfigBlurScaleFactor,
    startTransparency: store.shadowConfigStartTransparency,
    transparencyScale: store.shadowConfigTransparencyScale,
    spreadMax: store.shadowConfigSpreadMax,
    spreadMin: store.shadowConfigSpreadMin,
    distanceFactor: store.shadowConfigDistanceFactor,
  };

  return `
            /* SHADOWS */
            /* Light Theme */
            
            
            --shadow-inset-light: inset ${store.shadowDistanceInset}px ${
    store.shadowDistanceInset
  }px 0px 0 ${getLCHColorWithTransparency(
    shadowColorLight,
    store.shadowConfigStartTransparency
  )};
            
            --shadow-nearest-light: ${generateShadow(
              store.shadowDistanceNearest,
              shadowColorLight,
              shadowConfig
            )};
            --shadow-near-light: ${generateShadow(
              store.shadowDistanceNear,
              shadowColorLight,
              shadowConfig
            )};
            --shadow-medium-light: ${generateShadow(
              store.shadowDistanceMedium,
              shadowColorLight,
              shadowConfig
            )};
            --shadow-far-light: ${generateShadow(
              store.shadowDistanceFar,
              shadowColorLight,
              shadowConfig
            )};
            
            --shadow-color-light: ${shadowColorLight};
            
            /* Dark Theme */
            
            --shadow-inset-dark: inset ${store.shadowDistanceInset}px ${
    store.shadowDistanceInset
  }px 0px 0  ${getLCHColorWithTransparency(
    shadowColorDark,
    store.shadowConfigStartTransparency
  )};
            
            --shadow-nearest-dark: ${generateShadow(
              store.shadowDistanceNearest,
              shadowColorDark,
              shadowConfig
            )};
            --shadow-near-dark: ${generateShadow(
              store.shadowDistanceNear,
              shadowColorDark,
              shadowConfig
            )};
            --shadow-medium-dark: ${generateShadow(
              store.shadowDistanceMedium,
              shadowColorDark,
              shadowConfig
            )};
            --shadow-far-dark: ${generateShadow(
              store.shadowDistanceFar,
              shadowColorDark,
              shadowConfig
            )};
            
            --shadow-color-dark: ${shadowColorDark};

        `;
};

// ideas from: https://shadows.brumm.af/ and material design and https://www.joshwcomeau.com/shadow-palette/
const amountOfExtraShadows = 4;
// const scaleFactor = 0.64;
// const startTransparency = 0.12;
// const transparencyScale = 1.2;
// const spreadMax = -4;
// const spreadMin = 1;
// const blurFactor = 2.2;
// const distanceFactor = 1.8;
const round = (num: number) => Math.round(num * 100) / 100;
const getLCHColorWithTransparency = (color: string, transparency: number) =>
  `${color.slice(0, -1)} / ${round(transparency * 100)}%)`;

const getSpread = (
  min: number,
  max: number,
  totalSteps: number,
  step: number
) => {
  const spread = min + ((max - min) / totalSteps) * step;
  return round(spread);
};
// use color for creating the correct one
const generateShadow = (
  distance: number,
  color: string,
  config: {
    scaleFactor: number;
    blurFactor: number;
    startTransparency: number;
    transparencyScale: number;
    spreadMax: number;
    spreadMin: number;
    distanceFactor: number;
  }
) => {
  const {
    scaleFactor,
    blurFactor,
    startTransparency,
    transparencyScale,
    spreadMax,
    spreadMin,
    distanceFactor,
  } = config;

  let shadowString = "";

  for (let i = 0; i <= amountOfExtraShadows; i++) {
    const d = round(distance * Math.pow(scaleFactor, i));
    const blur = round(d * blurFactor);
    const shadowColor = getLCHColorWithTransparency(
      color,
      startTransparency * Math.pow(transparencyScale, i)
    );
    const spread = getSpread(spreadMax, spreadMin, amountOfExtraShadows, i);
    // const spread = 0;

    shadowString = `${d}px ${
      d * distanceFactor
    }px ${blur}px ${spread}px ${shadowColor}, ${shadowString}`;
  }
  return shadowString.slice(0, -2);
};
