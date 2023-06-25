import type { SizesStore } from "../../sizes/sizesStore";

export const getShadows = (store: SizesStore) => {
  const shadowColorLight = `oklch(20% ${store.shadowColorChroma} ${store.shadowColorHue})`;
  const shadowColorDark = `oklch(80% ${store.shadowColorChroma} ${store.shadowColorHue})`;

  return `
            /* SHADOWS */
            /* Light Theme */
            
            
            --shadow-inset-light: inset ${store.shadowDistanceInset}px ${
    store.shadowDistanceInset
  }px 0px 0 ${getLCHColorWithTransparency(shadowColorLight, 0.1)};
            
            --shadow-nearest-light: ${generateShadow(
              store.shadowDistanceNearest,
              shadowColorLight
            )};
            --shadow-near-light: ${generateShadow(
              store.shadowDistanceNear,
              shadowColorLight
            )};
            --shadow-medium-light: ${generateShadow(
              store.shadowDistanceMedium,
              shadowColorLight
            )};
            --shadow-far-light: ${generateShadow(
              store.shadowDistanceFar,
              shadowColorLight
            )};
            
            --shadow-color-light: ${shadowColorLight};
            
            /* Dark Theme */
            
            --shadow-inset-dark: inset ${store.shadowDistanceInset}px ${
    store.shadowDistanceInset
  }px 0px 0  ${getLCHColorWithTransparency(shadowColorDark, 0.1)};
            
            --shadow-nearest-dark: ${generateShadow(
              store.shadowDistanceNearest,
              shadowColorDark
            )};
            --shadow-near-dark: ${generateShadow(
              store.shadowDistanceNear,
              shadowColorDark
            )};
            --shadow-medium-dark: ${generateShadow(
              store.shadowDistanceMedium,
              shadowColorDark
            )};
            --shadow-far-dark: ${generateShadow(
              store.shadowDistanceFar,
              shadowColorDark
            )};
            
            --shadow-color-dark: ${shadowColorDark};

        `;
};

// ideas from: https://shadows.brumm.af/ and material design and https://www.joshwcomeau.com/shadow-palette/
const amountOfExtraShadows = 4;
const scaleFactor = 0.64;
const startTransparency = 0.12;
const transparencyScale = 1.2;
const spreadMax = -4;
const spreadMin = 1;
const blurFactor = 2.2;
const distanceFactor = 1.8;
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
const generateShadow = (distance: number, color: string) => {
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
