<script lang="ts">
const Theme = {
    System: 'system',
    Light: 'light',
    Dark: 'dark',
} as const;

let currentTheme: string = $state(Theme.Light);

const setToSystem = () => {
    document.documentElement.setAttribute('data-theme', 'system');
    currentTheme = Theme.System;
    localStorage?.removeItem('color-scheme');
};

const setToLight = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    currentTheme = Theme.Light;
    localStorage?.setItem('color-scheme', 'light');
};

const setToDark = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    currentTheme = Theme.Dark;
    localStorage?.setItem('color-scheme', 'dark');
};

const switchTheme = (e: InputEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value === 'system') {
        setToSystem();
        return;
    }

    if (target.value === 'light') {
        setToLight();
    }

    if (target.value === 'dark') {
        setToDark();
    }
};

$effect(() => {
    const colorScheme = localStorage?.getItem('color-scheme');

    if (colorScheme) {
        document.documentElement.setAttribute('data-theme', colorScheme);
        currentTheme = colorScheme;
    }
});
</script>

<style>
    .theme-switch {
        all: unset;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 0;
        position: relative;
        cursor: pointer;
        align-items: center;
        gap: 1ch;
        isolation: isolate;
        flex-shrink: 0;
        background: var(--color-surface-emphasis);
        block-size: 2rem;
        border-radius: var(--border-radius-round);
        padding-inline: 0.5ch;
    }

    .theme-icon {
        --icon-size: 2ex;
        color: var(--color-text-on-emphasis);

        &:hover {
            color: var(--color-brand-primary-contrast);
        }
    }

    .theme-input:checked + .theme-switch-label .theme-icon {
        color: var(--color-surface-emphasis);
    }

    .theme-switch-label {
        grid-row: 1;
        display: grid;
        place-content: center;
        aspect-ratio: 1;
    }

    .theme-switch-label:nth-of-type(1) {
        grid-column: 1;
    }

    .theme-switch-label:nth-of-type(2) {
        grid-column: 2;
    }

    .theme-switch-label:nth-of-type(3) {
        grid-column: 3;
    }

    .theme-highlighter {
        pointer-events: none;
        inline-size: 1lh;
        block-size: 1lh;
        background-color: transparent;
        grid-row: 1;
        grid-column: 1;
        position: relative;
        z-index: -1;
        transition: transform var(--transition-duration-base) var(--ease-in-2);
        background: var(--color-text-on-emphasis);
        border-radius: var(--border-radius-round);
    }

    .theme-input:nth-of-type(1):checked ~ .theme-highlighter {
        transform: translateX(0%);
    }

    .theme-input:nth-of-type(2):checked ~ .theme-highlighter {
        transform: translateX(calc(100% + 1ch));
    }

    .theme-input:nth-of-type(3) ~ .theme-highlighter {
        transform: translateX(calc(200% + 2ch));
    }
</style>

<fieldset class="theme-switch" onchange={switchTheme}>
    <legend class="sr-only">Select theme appearance</legend>
    <!-- System  -->
    <input
        type="radio"
        name="theme"
        value="system"
        id="theme-system"
        class="sr-only theme-input"
        checked={currentTheme === Theme.System}
    />
    <label for="theme-system" class="theme-switch-label">
        <span class="sr-only">System</span>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="nc-icon theme-icon"
            aria-hidden="true"
            ><path
                d="M12 21.9967C6.47715 21.9967 2 17.5196 2 11.9967C2 6.47386 6.47715 1.9967 12 1.9967C17.5228 1.9967 22 6.47386 22 11.9967C22 17.5196 17.5228 21.9967 12 21.9967ZM12 19.9967V3.9967C7.58172 3.9967 4 7.57843 4 11.9967C4 16.415 7.58172 19.9967 12 19.9967Z"
            ></path></svg
        >
    </label>

    <!-- Light  -->
    <input type="radio" name="theme" value="light" id="theme-light" class="sr-only theme-input"
       checked={currentTheme === Theme.Light}
        />
    <label for="theme-light" class="theme-switch-label">
        <span class="sr-only">Light</span>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="nc-icon theme-icon"
            aria-hidden="true"
            ><path
                d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
            ></path></svg
        >
    </label>

    <!-- Dark  -->
    <input type="radio" name="theme" value="dark" id="theme-dark" class="sr-only theme-input"
       checked={currentTheme === Theme.Dark}
        />
    <label for="theme-dark" class="theme-switch-label">
        <span class="sr-only">Dark</span>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="nc-icon theme-icon"
            aria-hidden="true"
            ><path
                d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"
            ></path></svg
        >
    </label>

    <span class="theme-highlighter"></span>
</fieldset>
