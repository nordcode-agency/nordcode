import type { SizesStore } from "../../sizes/sizesStore";

export const getShadows = (store: SizesStore) => {
  return `
            /* SHADOWS */
            /* Light Theme */
            
            
            --shadow-inset-light: inset ${store.shadowDistanceInset}px ${
    store.shadowDistanceInset
  }px 0px 0  var(--color-shadow-light-subtle);
            
            --shadow-nearest-light: ${generateShadow(
              store.shadowDistanceNearest,
              "light"
            )};
            --shadow-near-light: ${generateShadow(
              store.shadowDistanceNear,
              "light"
            )};
            --shadow-base-light: ${generateShadow(
              store.shadowDistanceBase,
              "light"
            )};
            --shadow-far-light: ${generateShadow(
              store.shadowDistanceFar,
              "light"
            )};
            
            /* Dark Theme */
            
            --shadow-inset-dark: inset ${store.shadowDistanceInset}px ${
    store.shadowDistanceInset
  }px 0px 0  var(--color-shadow-dark-subtle);
            
            --shadow-nearest-dark: ${generateShadow(
              store.shadowDistanceNearest,
              "dark"
            )};
            --shadow-near-dark: ${generateShadow(
              store.shadowDistanceNear,
              "dark"
            )};
            --shadow-base-dark: ${generateShadow(
              store.shadowDistanceBase,
              "dark"
            )};
            --shadow-far-dark: ${generateShadow(
              store.shadowDistanceFar,
              "dark"
            )};
        `;
};

const generateShadow = (distance: number, variant: "dark" | "light") => {
  let shadowString = `${distance}px ${distance}px ${
    distance * 2
  }px 0 var(--color-shadow-${variant}-subtle)`;

  for (let i = (distance = 1); i > 0; i--) {
    shadowString = `${i}px ${i}px 0 0 var(--color-shadow-${variant}-strong) , ${shadowString}`;
  }
  return shadowString;
};
