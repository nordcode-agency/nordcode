<script lang="ts">
import Color from 'colorjs.io';
import ColorSelect from '../../common/components/ColorSelect.svelte';
import { toSpecificVersion } from '../../common/utils/toSpecificVersion.ts';
import ContrastPreview from '../../colors/components/ContrastPreview.svelte';
import {
    getThemeMutationObserver,
    type ThemeMutationObserverListener,
} from '../../common/utils/ThemeMutationObserver.ts';

const surfaceOptions = {
    Primary: ['--color-brand-primary-surface'],
    Secondary: ['--color-brand-secondary-surface'],
    Neutrals: [
        '--color-surface-base',
        '--color-surface-muted',
        '--color-surface-subtle',
        '--color-surface-emphasis',
    ],
};

const textOptions = {
    Primary: [
        '--color-brand-primary-base',
        '--color-brand-primary-emphasis',
        '--color-brand-primary-contrast',
    ],
    Secondary: [
        '--color-brand-secondary-base',
        '--color-brand-secondary-emphasis',
        '--color-brand-secondary-contrast',
    ],
    Neutrals: [
        '--color-text-base',
        '--color-text-subtle',
        '--color-text-muted',
        '--color-text-on-emphasis',
    ],
};

let lightContrast: [number, number] = $state([0, 0]);
let darkContrast: [number, number] = $state([0, 0]);
let surfaceColor: string = $state(surfaceOptions.Neutrals[0]);
let textColor: string = $state(textOptions.Neutrals[0]);

let lightSurface = $derived(toSpecificVersion(surfaceColor, 'light'));
let darkSurface = $derived(toSpecificVersion(surfaceColor, 'dark'));

let lightText = $derived(toSpecificVersion(textColor, 'light'));
let darkText = $derived(toSpecificVersion(textColor, 'dark'));

const getContrast = (
    style: CSSStyleDeclaration | null,
    surfaceColor: string,
    textColor: string,
): [number, number] => {
    if (!style) {
        return [0, 0];
    }

    const colorBg = new Color(style.getPropertyValue(surfaceColor));
    const colorFg = new Color(style.getPropertyValue(textColor));
    const wcag = +colorFg.contrast(colorBg, 'WCAG21').toFixed(2);
    const apca = +colorBg.contrast(colorFg, 'APCA').toFixed(2);
    return [wcag, apca];
};

const updateContrast: ThemeMutationObserverListener = (style) => {
    if (!style) {
        return;
    }

    lightContrast = getContrast(style, lightSurface, lightText);
    darkContrast = getContrast(style, darkSurface, darkText);
};

$effect(() => {
    const style = getThemeMutationObserver().getStyle();

    if (style) {
        lightContrast = getContrast(style, lightSurface, lightText);
        darkContrast = getContrast(style, darkSurface, darkText);
    }
});

$effect(() => {
    getThemeMutationObserver().subscribe((style) => {
        updateContrast(style);
    });

    updateContrast(getThemeMutationObserver().getStyle());
});
</script>

<style>
    .contrastTool-container {
        background: var(--color-surface-subtle);
        margin-inline: var(--spacing-base);
        inline-size: calc(100% - 2 * var(--spacing-base));
    }
    .contrastTool {
        grid-template-columns: 2fr 1fr 1fr;
        inline-size: 100%;
    }
</style>

<section class="nc-region nc-stack -stretched -contained nc-box -bordered contrastTool-container">
    <h2 id="contrast-checker">Contrast Checker</h2>
    <p class="nc-hint">
        Select a surface color and a foreground color to see the contrast ratio between them.
    </p>
    <div class="nc-grid contrastTool -far">
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
    </div>

</section>
