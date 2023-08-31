import type { ConfigStore } from "../configStore";

export const getThemeFromOKLCH = (store: ConfigStore) => {
  const warningLightness = Math.min(
    Math.max(+store.primaryLightness + 25, 80),
    92
  );
  const infoLightness = Math.min(Math.max(+store.primaryLightness, 55), 74);
  const dangerLightness = Math.min(Math.max(+store.primaryLightness, 58), 68);
  const successLightness = Math.min(Math.max(+store.primaryLightness, 50), 85);

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
          `text-light-default`,
          `${store.lightNeutralTextLightness}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `text-light-muted`,
          `${clamp(
            store.lightNeutralTextLightness *
              store.lightTextLightnessScaleFactor
          ).toFixed(0)}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}

        ${getColorTokenAndValue(
          `text-light-subtle`,
          `${clamp(
            store.lightNeutralTextLightness *
              Math.pow(store.lightTextLightnessScaleFactor, 2)
          ).toFixed(0)}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
        
        ${getColorTokenAndValue(
          `text-light-on-emphasis`,
          `${store.lightNeutralSurfaceLightness}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}

        ${getColorTokenAndValue(
          `surface-light-default`,
          `${store.lightNeutralSurfaceLightness}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `surface-light-subtle`,
          `${clamp(
            100 -
              Math.max(
                100 - store.lightNeutralSurfaceLightness,
                store.lightSurfaceLightnessScaleFactor
              ) *
                store.lightSurfaceLightnessScaleFactor
          ).toFixed(0)}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
        
        ${getColorTokenAndValue(
          `surface-light-inset`,
          `${clamp(
            100 -
              Math.max(
                100 - store.lightNeutralSurfaceLightness,
                store.lightSurfaceLightnessScaleFactor
              ) *
                store.lightSurfaceLightnessScaleFactor
          ).toFixed(0)}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
                
        ${getColorTokenAndValue(
          `surface-light-emphasis`,
          `${store.lightNeutralTextLightness}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
        

        ${getColorTokenAndValue(
          `border-light-default`,
          `${store.lightNeutralBorderLightness}% ${store.lightNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `border-light-muted`,
          `${clamp(
            100 -
              (100 - store.lightNeutralBorderLightness) /
                store.lightTextLightnessScaleFactor
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
          `text-dark-default`,
          `${store.darkNeutralTextLightness}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `text-dark-muted`,
          `${clamp(
            100 -
              (100 - store.darkNeutralTextLightness) *
                store.darkTextLightnessScaleFactor
          ).toFixed(0)}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}

        ${getColorTokenAndValue(
          `text-dark-subtle`,
          `${clamp(
            100 -
              (100 - store.darkNeutralTextLightness) *
                (store.darkTextLightnessScaleFactor * 2)
          ).toFixed(0)}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
        
        ${getColorTokenAndValue(
          `text-dark-on-emphasis`,
          `${store.darkNeutralSurfaceLightness}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}

        ${getColorTokenAndValue(
          `surface-dark-default`,
          `${store.darkNeutralSurfaceLightness}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `surface-dark-subtle`,
          `${clamp(
            store.darkNeutralSurfaceLightness *
              store.darkSurfaceLightnessScaleFactor
          ).toFixed(0)}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
        
        ${getColorTokenAndValue(
          `surface-dark-inset`,
          `${clamp(
            store.darkNeutralSurfaceLightness /
              store.darkSurfaceLightnessScaleFactor
          ).toFixed(0)}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
                
        ${getColorTokenAndValue(
          `surface-dark-emphasis`,
          `${store.darkNeutralTextLightness}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
        

        ${getColorTokenAndValue(
          `border-dark-default`,
          `${store.darkNeutralBorderLightness}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}
        ${getColorTokenAndValue(
          `border-dark-muted`,
          `${clamp(
            store.darkNeutralBorderLightness /
              store.darkTextLightnessScaleFactor
          ).toFixed(0)}% ${store.darkNeutralChroma} ${store.primaryHue}`
        )}

        /*    Status */
        
        ${getStatusColorTheme(
          "info",
          245,
          infoLightness,
          store.primaryLightness
        )}
        ${getStatusColorTheme(
          "warning",
          97,
          warningLightness,
          store.primaryLightness
        )}
        ${getStatusColorTheme(
          "success",
          142,
          successLightness,
          store.primaryLightness
        )}
        ${getStatusColorTheme(
          "danger",
          32,
          dangerLightness,
          store.primaryLightness
        )}
        `;
};

const getLightColorTheme = (
  name: "primary" | "secondary",
  hue: number,
  lightness: number
) => {
  return `
${getColorTokenAndValue(
  `brand-${name}-light-emphasis`,
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
    `brand-${name}-dark-emphasis`,
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

const getStatusColorTheme = (
  name: "info" | "warning" | "success" | "danger",
  hue: number,
  lightness: number,
  primaryLightness: number
): string => {
  const textLightness = Math.min(Math.max(+primaryLightness, 20), 52);
  const lightSurfaceLightness = Math.min(
    Math.max(+primaryLightness + 45, 65),
    99.8
  );
  const darkSurfaceLightness = Math.min(
    Math.max(+primaryLightness + 45, 65),
    99.8
  );

  return `
  ${getColorTokenAndValue(
    `status-${name}-light-base`,
    `${lightness}% 0.3 ${hue}`
  )}

${getColorTokenAndValue(
  `status-${name}-light-text`,
  `${textLightness}% 0.3 ${hue}`
)}
${getColorTokenAndValue(
  `status-${name}-light-subtle`,
  `${lightSurfaceLightness}% 0.12 ${hue}`
)}
${getColorTokenAndValue(
  `status-${name}-light-hover`,
  `${textLightness}% 0.3 ${hue} / 0.08`
)}

${getColorTokenAndValue(`status-${name}-dark-base`, `${lightness}% 0.3 ${hue}`)}

${getColorTokenAndValue(
  `status-${name}-dark-text`,
  `${textLightness}% 0.3 ${hue}`
)}
${getColorTokenAndValue(
  `status-${name}-dark-subtle`,
  `${darkSurfaceLightness}% 0.12 ${hue}`
)}
${getColorTokenAndValue(
  `status-${name}-dark-hover`,
  `${textLightness}% 0.3 ${hue} / 0.08`
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
