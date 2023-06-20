import type { ColorsStore } from "../../colors/colorStore";

export const getThemeFromOKLCH = (store: ColorsStore) => {
  const colorStyle = `
        /* COLORS */

        /* Light Theme */
        
        ${getLightColorTheme("primary", store.oklch.primaryHue)} 
        ${getLightColorTheme("secondary", store.oklch.secondaryHue)}

        --color-text-light-strong: oklch(8% ${
          store.oklch.light.neutral.chroma
        } ${store.oklch.light.neutral.hue});
        --color-text-light-base: oklch(16% ${
          store.oklch.light.neutral.chroma
        } ${store.oklch.light.neutral.hue});
        --color-text-light-subtle: oklch(30% ${
          store.oklch.light.neutral.chroma
        } ${store.oklch.light.neutral.hue});

        --color-surface-light-strong: oklch(99% ${
          store.oklch.light.neutral.chroma
        } ${store.oklch.light.neutral.hue});
        --color-surface-light-base: oklch(97% ${
          store.oklch.light.neutral.chroma
        } ${store.oklch.light.neutral.hue});
        --color-surface-light-subtle: oklch(90% ${
          store.oklch.light.neutral.chroma
        } ${store.oklch.light.neutral.hue});

        --color-border-light-strong: oklch(4% ${
          store.oklch.light.neutral.chroma
        } ${store.oklch.light.neutral.hue});
        --color-border-light-base: oklch(20% ${
          store.oklch.light.neutral.chroma
        } ${store.oklch.light.neutral.hue});
        --color-border-light-subtle: oklch(40% ${
          store.oklch.light.neutral.chroma
        } ${store.oklch.light.neutral.hue});

        /* Dark Theme */

        ${getDarkColorTheme("primary", store.oklch.primaryHue)}
        ${getDarkColorTheme("secondary", store.oklch.secondaryHue)}

        --color-text-dark-strong: oklch(99% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});
        --color-text-dark-base: oklch(94% ${store.oklch.dark.neutral.chroma} ${
    store.oklch.dark.neutral.hue
  });
        --color-text-dark-subtle: oklch(80% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});

        --color-surface-dark-strong: oklch(8% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});
        --color-surface-dark-base: oklch(12% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});
        --color-surface-dark-subtle: oklch(16% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});

        --color-border-dark-strong: oklch(99% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});
        --color-border-dark-base: oklch(80% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});
        --color-border-dark-subtle: oklch(54% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});

        /*    Status */
        --color-status-error: ${store.default.status.error};
        `;

  return colorStyle;
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
