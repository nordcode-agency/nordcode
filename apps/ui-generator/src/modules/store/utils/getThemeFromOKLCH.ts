import type { ConfigStore } from "../configStore";

export const getThemeFromOKLCH = (store: ConfigStore) => {
  return `
        /* COLORS */

        /* Light Theme */
        
        ${getLightColorTheme("primary", store.primaryHue)} 
        ${getLightColorTheme("secondary", store.secondaryHue)}
        

        --color-text-light-strong: oklch(${
          store.lightNeutralTextLightness / store.lightnessScaleFactor
        }% ${store.lightNeutralChroma} ${store.primaryHue});
        --color-text-light-base: oklch(${store.lightNeutralTextLightness}% ${
    store.lightNeutralChroma
  } ${store.primaryHue});
        --color-text-light-subtle: oklch(${
          store.lightNeutralTextLightness * store.lightnessScaleFactor
        }% ${store.lightNeutralChroma} ${store.primaryHue});

        --color-surface-light-strong: oklch(${Math.max(
          100 -
            (100 - store.lightNeutralSurfaceLightness) /
              store.lightnessScaleFactor,
          100
        )}% ${store.lightNeutralChroma} ${store.primaryHue});
        --color-surface-light-base: oklch(${
          store.lightNeutralSurfaceLightness
        }% ${store.lightNeutralChroma} ${store.primaryHue});
        --color-surface-light-subtle: oklch(${
          100 -
          (100 - store.lightNeutralSurfaceLightness) *
            store.lightnessScaleFactor
        }% ${store.lightNeutralChroma} ${store.primaryHue});

        --color-border-light-strong: oklch(${
          store.lightNeutralBorderLightness / store.lightnessScaleFactor
        }% ${store.lightNeutralChroma} ${store.primaryHue});
        --color-border-light-base: oklch(${
          store.lightNeutralBorderLightness
        }% ${store.lightNeutralChroma} ${store.primaryHue});
        --color-border-light-subtle: oklch(${
          store.lightNeutralBorderLightness * store.lightnessScaleFactor
        }% ${store.lightNeutralChroma} ${store.primaryHue});

        /* Dark Theme */

        ${getDarkColorTheme("primary", store.primaryHue)}
        ${getDarkColorTheme("secondary", store.secondaryHue)}

  
          --color-text-dark-strong: oklch(${
            100 -
            (100 - store.darkNeutralTextLightness) / store.lightnessScaleFactor
          }% ${store.darkNeutralChroma} ${store.primaryHue});
        --color-text-dark-base: oklch(${store.darkNeutralTextLightness}% ${
    store.darkNeutralChroma
  } ${store.primaryHue});
        --color-text-dark-subtle: oklch(${
          100 -
          (100 - store.darkNeutralTextLightness) * store.lightnessScaleFactor
        }% ${store.darkNeutralChroma} ${store.primaryHue});


        --color-surface-dark-strong: oklch(${
          store.darkNeutralSurfaceLightness / store.lightnessScaleFactor
        }% ${store.darkNeutralChroma} ${store.primaryHue});
        --color-surface-dark-base: oklch(${
          store.darkNeutralSurfaceLightness
        }% ${store.darkNeutralChroma} ${store.primaryHue});
        --color-surface-dark-subtle: oklch(${
          store.darkNeutralSurfaceLightness * store.lightnessScaleFactor
        }% ${store.darkNeutralChroma} ${store.primaryHue});

        --color-border-dark-strong: oklch(${
          100 -
          (100 - store.darkNeutralBorderLightness) / store.lightnessScaleFactor
        }% ${store.darkNeutralChroma} ${store.primaryHue});
        --color-border-dark-base: oklch(${store.darkNeutralBorderLightness}% ${
    store.darkNeutralChroma
  } ${store.primaryHue});
        --color-border-dark-subtle: oklch(${
          100 -
          (100 - store.darkNeutralBorderLightness) * store.lightnessScaleFactor
        }% ${store.darkNeutralChroma} ${store.primaryHue});

        /*    Status */
        --color-status-error: ${store.default.status.error};
        `;
};

const getLightColorTheme = (name: "primary" | "secondary", hue: number) => {
  return `
        --color-brand-${name}-light-strong: oklch(45% 0.31 ${hue});
        --color-brand-${name}-light-base: oklch(56% 0.23 ${hue});
        --color-brand-${name}-light-subtle: oklch(64% 0.10 ${hue});
    `;
};

const getDarkColorTheme = (name: "primary" | "secondary", hue: number) => {
  return `
        --color-brand-${name}-dark-strong: oklch(60% 0.3 ${hue});
        --color-brand-${name}-dark-base: oklch(68% 0.19 ${hue});
        --color-brand-${name}-dark-subtle: oklch(75% 0.10 ${hue});
    `;
};
