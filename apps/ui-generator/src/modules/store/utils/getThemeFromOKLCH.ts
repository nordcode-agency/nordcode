import type { ColorsStore } from "../../colors/colorStore";

export const getThemeFromOKLCH = (store: ColorsStore) => {
  const colorStyle = `
        /* COLORS */

        /* Light Theme */
        
        ${getLightColorTheme("primary", store.oklch.light.primary.hue)} 
        ${getLightColorTheme("secondary", store.oklch.light.secondary.hue)}

        --color-text-light-strong: oklch(8% ${
          store.oklch.light.neutral.chroma
        } ${store.oklch.light.neutral.hue});
        --color-text-light-base: oklch(16% ${
          store.oklch.light.neutral.chroma
        } ${store.oklch.light.neutral.hue});
        --color-text-light-subtle: oklch(24% ${
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

        ${getDarkColorTheme("primary", store.oklch.dark.primary.hue)}
        ${getDarkColorTheme("secondary", store.oklch.dark.secondary.hue)}

        --color-text-dark-strong: oklch(99% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});
        --color-text-dark-base: oklch(95% ${store.oklch.dark.neutral.chroma} ${
    store.oklch.dark.neutral.hue
  });
        --color-text-dark-subtle: oklch(88% ${
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

        --color-border-dark-strong: oklch(4% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});
        --color-border-dark-base: oklch(20% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});
        --color-border-dark-subtle: oklch(40% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});

        --color-border-dark-strong: oklch(99% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});
        --color-border-dark-base: oklch(88% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});
        --color-border-dark-subtle: oklch(64% ${
          store.oklch.dark.neutral.chroma
        } ${store.oklch.dark.neutral.hue});


        /*    Status */
        --color-status-error: ${store.default.status.error}
        `;

  return colorStyle;
};

const getLightColorTheme = (name: "primary" | "secondary", hue: number) => {
  return `
        --color-brand-${name}-light-strong: oklch(75% 0.3 ${hue});
        --color-brand-${name}-light-base: oklch(64% 0.19 ${hue});
        --color-brand-${name}-light-subtle: oklch(48% 0.10 ${hue});
    `;
};

const getDarkColorTheme = (name: "primary" | "secondary", hue: number) => {
  return `
        --color-brand-${name}-dark-strong: oklch(75% 0.3 ${hue});
        --color-brand-${name}-dark-base: oklch(64% 0.19 ${hue});
        --color-brand-${name}-dark-subtle: oklch(55% 0.10 ${hue});
    `;
};

//
//
// trong: "oklch(7.4% 0.01 195.3)",
//         base: "oklch(16.4% 0.015 195.3)",
//         subtle: "oklch(30.6% 0.01 195.3)",
//
//
// --color-0: oklch(99% .03 var(--color-hue, 0));
//   --color-1: oklch(95% .06 var(--color-hue, 0));
//   --color-2: oklch(88% .12 var(--color-hue, 0));
//   --color-3: oklch(80% .14 var(--color-hue, 0));
//   --color-4: oklch(74% .16 var(--color-hue, 0));
//   --color-5: oklch(68% .19 var(--color-hue, 0));
//   --color-6: oklch(63% .20 var(--color-hue, 0));
//   --color-7: oklch(58% .21 var(--color-hue, 0));
//   --color-8: oklch(53% .20 var(--color-hue, 0));
//   --color-9: oklch(49% .19 var(--color-hue, 0));
//   --color-10: oklch(42% .17 var(--color-hue, 0));
//   --color-11: oklch(35% .15 var(--color-hue, 0));
//   --color-12: oklch(27% .12 var(--color-hue, 0));
//   --color-13: oklch(20% .09 var(--color-hue, 0));
//   --color-14: oklch(14% .07 var(--color-hue, 0));
//   --color-15: oklch(11% .05 var(--color-hue, 0));
//   --color-bright: oklch(65% .3 var(--color-hue));
//
//  --gray-0: oklch(99% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-1: oklch(95% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-2: oklch(88% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-3: oklch(80% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-4: oklch(74% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-5: oklch(68% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-6: oklch(63% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-7: oklch(58% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-8: oklch(53% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-9: oklch(49% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-10: oklch(43% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-11: oklch(37% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-12: oklch(31% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-13: oklch(25% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-14: oklch(18% var(--gray-chroma, none) var(--gray-hue, none));
//   --gray-15: oklch(10% var(--gray-chroma, none) var(--gray-hue, none));
