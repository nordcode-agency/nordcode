<script lang="ts">
    import {
        configStore,
        type ConfigStore,
    } from "../../store/configStore";
    import Color from 'colorjs.io';

    let contrasts: [string, string, number, number][] = [];

    const colorPairs = [
        ['--color-brand-primary-surface', '--color-brand-primary-base'],
        ['--color-brand-secondary-surface', '--color-brand-secondary-base'],
        ['--color-brand-primary-surface', '--color-brand-primary-emphasis'],
        ['--color-brand-secondary-surface', '--color-brand-secondary-emphasis'],
        ['--color-brand-primary-base', '--color-brand-primary-contrast'],
        ['--color-brand-secondary-base', '--color-brand-secondary-contrast'],
        ['--color-surface-default', '--color-brand-primary-base'],
        ['--color-surface-default', '--color-brand-secondary-base'],
        ['--color-surface-default', '--color-text-default'],
    ];

    const updateContrasts = () => {
        const themeEl = document.querySelector('.live-theme')
        if (!themeEl) {
            return;
        }
        const style = getComputedStyle(themeEl);

        contrasts = colorPairs.map(([bg, fg]) => {
            const colorBg = new Color(style.getPropertyValue(bg))
            const colorFg = new Color(style.getPropertyValue(fg))
            const wcag = +colorFg.contrast(colorBg, 'WCAG21').toFixed(2)
            const apca = +colorBg.contrast(colorFg, 'APCA').toFixed(2)
            return [bg, fg, wcag, apca]
        });

    };

    configStore?.subscribe(updateContrasts);

</script>

<style>
    .contrast {
        padding: 0.1lh 1ch;
    }

    [data-good=true] {
        font-weight: var(--font-weight-active);

    }

    [data-ok=true] {
       color: var(--color-status-success-text);
        background: var(--color-status-success-surface);
        border: var(--color-status-success-text);
    }

    [data-fail="true"] {
       color: var(--color-status-danger-text);
        background: var(--color-status-danger-surface);
        border: var(--color-status-success-text);
    }

    p {
        block-size: 100%;

    }
</style>

<section class="nc-region nc-stack -stretched">
    <div class="nc-stack">
        <p class="nc-hint">
            Updates don't yet work for color theme swaps. Please update manually after switching.
        </p>
        <button class="nc-button" on:click={updateContrasts}>Update</button>
    </div>
    <div class="nc-grid">
        {#each contrasts as [bg, fg, wcag, apca]}
            <div class="nc-box" style="background: var({bg})">
                <p style="color: var({fg}); font-size: var(--font-size-small)" class="nc-stack -tiny">
                    <span>Text: {fg}</span>
                    <span>Surface: {bg}</span>
                    <span class="contrast mt-auto" data-ok="{wcag > 4.5}" data-good="{wcag > 7}" data-fail="{wcag < 4.5}">WCAG: {wcag}</span>
                    <span class="contrast" data-ok="{Math.abs(apca) > 60}" data-good="{Math.abs(apca) > 75}" data-fail="{Math.abs(apca) < 60}">APCA: {apca}</span>
                </p>
            </div>
        {/each}
    </div>
</section>
