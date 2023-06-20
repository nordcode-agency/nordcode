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

// ideas from: https://shadows.brumm.af/ and material design
const amountOfExtraShadows = 4;
const scaleFactor = 0.45;
const finalTransparency = 0.5;
const transparencyScale = 0.8;
const spreadReduction = 0;
const blurFactor = 2.5;
const round = (num: number) => Math.round(num * 100) / 100;
const getLCHColorWithTransparency = (color: string, transparency: number) =>
  `${color.slice(0, -1)} / ${round(transparency * 100)}%)`;

// use color for creating the correct one
const generateShadow = (distance: number, color: string) => {
  let shadowString = "";
  const initialBlur = distance * blurFactor;

  for (let i = 0; i <= amountOfExtraShadows; i++) {
    const d = round(distance * Math.pow(scaleFactor, i));
    const blur = round(d * blurFactor);
    const shadowColor = getLCHColorWithTransparency(
      color,
      finalTransparency * Math.pow(transparencyScale, i)
    );

    shadowString = `${d}px ${d}px ${blur}px ${spreadReduction}px ${shadowColor}, ${shadowString}`;
  }
  return shadowString.slice(0, -2);
};
