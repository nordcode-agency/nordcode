<script lang="ts">
import { onMount } from 'svelte';

const DARK = '(prefers-color-scheme: dark)';

const Theme = {
    Light: 0,
    Dark: 1,
} as const;

const schemes = ['light', 'dark'] as const;
const labels = ['Zur dunklen Ansicht wechseln', 'Zur hellen Ansicht wechseln'] as const;
const pressed = ['false', 'true'] as const;

let currentTheme: number = $state(Theme.Light);

const setToLight = (shouldUpdateTheme: boolean) => {
    document.documentElement.setAttribute('color-scheme', 'light');
    currentTheme = Theme.Light;
    if (shouldUpdateTheme) {
        localStorage?.setItem('color-scheme', 'light');
    }
};

const setToDark = (shouldUpdateTheme: boolean) => {
    document.documentElement.setAttribute('color-scheme', 'dark');
    currentTheme = Theme.Dark;
    if (shouldUpdateTheme) {
        localStorage?.setItem('color-scheme', 'dark');
    }
};

const functionsByScheme = {
    light: setToDark,
    dark: setToLight,
} as const;

const toggleTheme = () => {
    const nextScheme = schemes[currentTheme];
    functionsByScheme[nextScheme as keyof typeof functionsByScheme](true);
};

$effect(() => {
    const colorScheme = localStorage?.getItem('color-scheme');
    if (colorScheme) {
        const nextTheme = colorScheme === 'light' ? 'dark' : 'light';
        functionsByScheme[nextTheme]?.(false);
    } else if (window.matchMedia(DARK).matches) {
        setToDark(false);
    } else {
        setToLight(false);
    }
});
</script>

<div>
    <button class="theme-toggle"
            title="Theme Picker"
            aria-pressed={pressed[currentTheme]}
            aria-label={labels[currentTheme]}
            onclick={toggleTheme}
    >
        <svg xmlns="http://www.w3.org/2000/svg"
             class="nc-icon sun"
             data-size="inline"
             viewBox="0 0 256 256"
             aria-hidden="true">
            <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
        </svg>
        <span class="nc-input-switch theme-toggle-switch" aria-hidden="true"></span>
        <svg xmlns="http://www.w3.org/2000/svg"
             class="nc-icon moon"
             data-size="inline"
             viewBox="0 0 256 256"
             aria-hidden="true">
            <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
        </svg>
    </button>
</div>

<style lang="postcss">
    .theme-toggle {
        all: unset;
        display: flex;
        padding: 0;
        position: relative;
        cursor: pointer;
        align-items: center;
        gap: var(--spacing-near);
    }

    .sun {
        color: var(--color-brand-secondary-emphasis);
    }

    .moon {
        color: var(--color-text-subtle);
    }

    .theme-toggle[aria-pressed="true"] {

        & .moon {
            color: var(--color-brand-secondary-emphasis);
        }

        & .sun {
            color: var(--color-text-subtle);
        }

        & .theme-toggle-switch {

            --current-background: var(--color-brand-secondary-base);

            &:before {
                margin-inline-start: calc(
                    var(--_switch-width) - var(--_switch-height) + var(--_thumb-margin)
                );
            }
        }

    }
</style>
