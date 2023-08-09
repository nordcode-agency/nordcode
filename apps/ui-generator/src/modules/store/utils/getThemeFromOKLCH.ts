import type { ConfigStore } from "../configStore";

export const getThemeFromOKLCH = (store: ConfigStore) => {
  return `
        /* COLORS */

        /* Light Theme */

        ${getLightColorTheme(
          "primary",
          store.primaryHue,
          store.primaryLightness
        )}

        ${getLightColorTheme(
          "secondary",
          store.secondaryHue,
          store.secondaryLightness
        )}

        ${getColorTokenAndValue(
          `text-light-strong`,
          `${clamp(
            store.lightNeutralTextLightness / store.lightnessScaleFactor
          ).toFixed(0)}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `text-light-base`,
          `${store.lightNeutralTextLightness}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `text-light-subtle`,
          `${clamp(
            store.lightNeutralTextLightness * store.lightnessScaleFactor
          ).toFixed(0)}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}

        ${getColorTokenAndValue(
          `surface-light-strong`,
          `${clamp(
            100 -
              (100 - store.lightNeutralSurfaceLightness) /
                store.lightnessScaleFactor
          ).toFixed(0)}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `surface-light-base`,
          `${store.lightNeutralSurfaceLightness}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `surface-light-subtle`,
          `${clamp(
            100 -
              (100 - store.lightNeutralSurfaceLightness) *
                store.lightnessScaleFactor
          ).toFixed(0)}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}

        ${getColorTokenAndValue(
          `border-light-strong`,
          `${clamp(
            store.lightNeutralBorderLightness / store.lightnessScaleFactor
          ).toFixed(0)}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `border-light-base`,
          `${store.lightNeutralBorderLightness}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `border-light-subtle`,
          `${clamp(
            store.lightNeutralBorderLightness * store.lightnessScaleFactor
          ).toFixed(0)}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}

        /* Dark Theme */

        ${getDarkColorTheme(
          "primary",
          store.primaryHue,
          store.primaryLightness
        )}

        ${getDarkColorTheme(
          "secondary",
          store.secondaryHue,
          store.secondaryLightness
        )}

        ${getColorTokenAndValue(
          `text-dark-strong`,
          `${clamp(
            100 -
              (100 - store.darkNeutralTextLightness) /
                store.lightnessScaleFactor
          ).toFixed(0)}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `text-dark-base`,
          `${store.darkNeutralTextLightness}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `text-dark-subtle`,
          `${clamp(
            100 -
              (100 - store.darkNeutralTextLightness) *
                store.lightnessScaleFactor
          ).toFixed(0)}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}

        ${getColorTokenAndValue(
          `surface-dark-strong`,
          `${clamp(
            store.darkNeutralSurfaceLightness / store.lightnessScaleFactor
          ).toFixed(0)}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `surface-dark-base`,
          `${store.darkNeutralSurfaceLightness} % ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `surface-dark-subtle`,
          `${clamp(
            store.darkNeutralSurfaceLightness * store.lightnessScaleFactor
          ).toFixed(0)}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}

        ${getColorTokenAndValue(
          `border-dark-strong`,
          `${clamp(
            100 -
              (100 - store.darkNeutralBorderLightness) /
                store.lightnessScaleFactor
          ).toFixed(0)}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `border-dark-base`,
          `${store.darkNeutralBorderLightness}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `border-dark-subtle`,
          `${clamp(
            100 -
              (100 - store.darkNeutralBorderLightness) *
                store.lightnessScaleFactor
          ).toFixed(0)}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}

        /*    Status */
        --color-status-error: oklch(62.67% .289 25.41);
        `;
};

const getLightColorTheme = (
  name: "primary" | "secondary",
  hue: number,
  lightness: number
) => {
  return `
${getColorTokenAndValue(
  `brand-${name}-light-strong`,
  `${+lightness - 10}% 0.14 ${hue}`
)}
${getColorTokenAndValue(
  `brand-${name}-light-base`,
  `${+lightness}% 0.3 ${hue}`
)}
${getColorTokenAndValue(
  `brand-${name}-light-subtle`,
  `${+lightness + 10}% 0.08 ${hue}`
)}
${getColorTokenAndValue(
  `brand-${name}-light-hover`,
  `${+lightness}% 0.3 ${hue} / 0.08`
)}
${getColorTokenAndValue(
  `brand-${name}-light-contrast`,
  `${+lightness > 50 ? 1 : 99}% 0.05 ${hue}`
)}
    `.trim();
};

const getDarkColorTheme = (
  name: "primary" | "secondary",
  hue: number,
  lightness: number
) => {
  return `
  ${getColorTokenAndValue(
    `brand-${name}-dark-strong`,
    `${+lightness - 10}% 0.14 ${hue}`
  )}
  ${getColorTokenAndValue(
    `brand-${name}-dark-base`,
    `${+lightness}% 0.3 ${hue}`
  )}
  ${getColorTokenAndValue(
    `brand-${name}-dark-subtle`,
    `${+lightness + 10}% 0.08 ${hue}`
  )}
  ${getColorTokenAndValue(
    `brand-${name}-dark-hover`,
    `${+lightness}% 0.3 ${hue} / 0.08`
  )}
  ${getColorTokenAndValue(
    `brand-${name}-dark-contrast`,
    `${+lightness > 50 ? 1 : 99}% 0.05 ${hue}`
  )}
    `.trim();
};

const getColorTokenAndValue = (name: string, value: string): string => {
  return `
--color-${name}-lch: ${value};
--color-${name}: oklch(var(--color-${name}-lch));
  `.trim();
};

const clamp = (value: number): number => {
  return Math.min(Math.max(value, 0), 100);
};
