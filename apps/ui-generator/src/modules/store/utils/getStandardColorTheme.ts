import type { ConfigStore } from "../configStore";

export const getStandardColorTheme = (store: ConfigStore) => {
  return `
        /* COLORS */

        /* Light Theme */

        --color-brand-primary-light-strong: ${store.default.light.primary.strong};
        --color-brand-primary-light-base: ${store.default.light.primary.base};
        --color-brand-primary-light-subtle: ${store.default.light.primary.subtle};
        --color-brand-primary-light-hover: ${store.default.light.primary.hover}

        --color-brand-secondary-light-strong: ${store.default.light.secondary.strong};
        --color-brand-secondary-light-base: ${store.default.light.secondary.base};
        --color-brand-secondary-light-subtle: ${store.default.light.secondary.subtle};

        --color-text-light-strong:  ${store.default.light.text.strong};
        --color-text-light-base:  ${store.default.light.text.base};
        --color-text-light-subtle:  ${store.default.light.text.subtle};

        --color-surface-light-strong:  ${store.default.light.surface.strong};
        --color-surface-light-base:  ${store.default.light.surface.base};
        --color-surface-light-subtle:  ${store.default.light.surface.subtle};

        --color-border-light-strong:  ${store.default.light.border.strong};
        --color-border-light-base:  ${store.default.light.border.base};
        --color-border-light-subtle:  ${store.default.light.border.subtle};

        /* Dark Theme */

        --color-brand-primary-dark-strong: ${store.default.dark.primary.strong};
        --color-brand-primary-dark-base: ${store.default.dark.primary.base};
        --color-brand-primary-dark-subtle: ${store.default.dark.primary.subtle};

        --color-brand-secondary-dark-strong: ${store.default.dark.secondary.strong};
        --color-brand-secondary-dark-base: ${store.default.dark.secondary.base};
        --color-brand-secondary-dark-subtle: ${store.default.dark.secondary.subtle};

        --color-text-dark-strong: ${store.default.dark.text.strong};
        --color-text-dark-base: ${store.default.dark.text.base};
        --color-text-dark-subtle: ${store.default.dark.text.subtle};

        --color-surface-dark-strong: ${store.default.dark.surface.strong};
        --color-surface-dark-base: ${store.default.dark.surface.base};
        --color-surface-dark-subtle: ${store.default.dark.surface.subtle};

        --color-border-dark-strong: ${store.default.dark.border.strong};
        --color-border-dark-base: ${store.default.dark.border.base};
        --color-border-dark-subtle: ${store.default.dark.border.subtle};


        /*    Status */
        --color-status-error: ${store.default.status.error}
        `;
};
