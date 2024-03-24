<script lang="ts">
    import Color from 'colorjs.io';
    import ColorSelect from '../../common/components/ColorSelect.svelte';
    import { toSpecificVersion } from '../../common/utils/toSpecificVersion.ts';
    import ContrastPreview from '../../colors/components/ContrastPreview.svelte';

    const surfaceOptions = {
        Primary: [
            '--color-brand-primary-surface',
        ],
        Secondary: [
            '--color-brand-secondary-surface',
        ],
        Neutrals: [
            "--color-surface-default",
            "--color-surface-subtle",
            "--color-surface-inset",
            "--color-surface-emphasis",
        ],
    };

    const textOptions = {
        Primary: [
            "--color-brand-primary-base",
            "--color-brand-primary-emphasis",
            "--color-brand-primary-contrast",
        ],
        Secondary: [
            "--color-brand-secondary-base",
            "--color-brand-secondary-emphasis",
            "--color-brand-secondary-contrast",
        ],
        Neutrals: [
            "--color-text-default",
            "--color-text-subtle",
            "--color-text-muted",
            "--color-text-on-emphasis",
        ],
    };

    const getContrast = (surfaceColor: string, textColor: string) => {
        if (!document) {
            return [0, 0];
        }
        const themeEl = document.querySelector('.live-theme');
        if (!themeEl) {
            return [0, 0];
        }
        const style = getComputedStyle(themeEl);

        const colorBg = new Color(style.getPropertyValue(surfaceColor));
        const colorFg = new Color(style.getPropertyValue(textColor));
        const wcag = +colorFg.contrast(colorBg, 'WCAG21').toFixed(2);
        const apca = +colorBg.contrast(colorFg, 'APCA').toFixed(2);
        return [wcag, apca];
    };

    let surfaceColor: string = surfaceOptions.Neutrals[0];
    let textColor: string = textOptions.Neutrals[0];

    $: lightSurface = toSpecificVersion(surfaceColor, 'light');
    $: darkSurface = toSpecificVersion(surfaceColor, 'dark');

    $: lightText = toSpecificVersion(textColor, 'light');
    $: darkText = toSpecificVersion(textColor, 'dark');

    $: lightContrast = getContrast(lightSurface, lightText);
    $: darkContrast = getContrast(darkSurface, darkText);

    $: console.log(lightSurface);

</script>

<style>
    .contrastTool {
        grid-template-columns: 2fr 1fr 1fr;
        inline-size: 100%;
    }
</style>

<section class="nc-region nc-grid contrastTool -far">
    <form class="nc-stack">
        <ColorSelect label="Surface Color"
                     bind:value={surfaceColor}
                     options={surfaceOptions}></ColorSelect>
        <ColorSelect label="Foreground Color"
                     bind:value={textColor}
                     options={textOptions}></ColorSelect>
    </form>
    <div class="nc-stack lightpreview">
        <ContrastPreview textColor={lightText}
                         surfaceColor={lightSurface}
                         wcagContrast={lightContrast[0]}
                         apcaContrast={lightContrast[1]}>
        </ContrastPreview>

    </div>
    <div class="nc-stack darkreview">
        <ContrastPreview textColor={darkText}
                         surfaceColor={darkSurface}
                         wcagContrast={darkContrast[0]}
                         apcaContrast={darkContrast[1]}>
        </ContrastPreview>

    </div>

</section>
