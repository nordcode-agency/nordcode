import type { ConfigStore } from '../configStore';

// values from open-props: https://github.com/argyleink/open-props/blob/main/src/props.shadows.css
// each layer: [y offset, blur, spread, strength step], the step picks --shadow-color-{step} from colors.css
type ShadowLayer = [number, number, number, number];

const Shadows: Record<string, ShadowLayer[]> = {
    nearest: [[1, 2, -1, 10]],
    near: [
        [3, 5, -2, 4],
        [7, 14, -5, 6],
    ],
    medium: [
        [-1, 3, 0, 3],
        [1, 2, -5, 3],
        [2, 5, -5, 5],
        [4, 12, -5, 6],
        [12, 15, -5, 8],
    ],
    far: [
        [-1, 2, 0, 3],
        [2, 1, -2, 4],
        [5, 5, -2, 4],
        [10, 10, -2, 5],
        [20, 20, -2, 6],
        [40, 40, -2, 8],
    ],
    farthest: [
        [-1, 2, 0, 3],
        [3, 2, -2, 4],
        [7, 5, -2, 4],
        [12, 10, -2, 5],
        [22, 18, -2, 6],
        [41, 33, -2, 7],
        [100, 80, -2, 8],
    ],
};

const InsetShadows: Record<string, ShadowLayer[]> = {
    inset: [[1, 2, 0, 10]],
    insetDeep: [[2, 8, 0, 10]],
};

const round = (num: number) => Math.round(num * 10) / 10;

// flat shadows collapse to the outermost layer without blur or spread, negative spreads would hide them otherwise
// the x offset scales with the y offset, so farther shadows are thrown further sideways
const generateShadow = (layers: ShadowLayer[], flat: boolean, xOffsetFactor: number, inset = false) =>
    (flat ? layers.slice(-1) : layers)
        .map(([y, blur, spread, step]) =>
            `${inset ? 'inset ' : ''}${round(y * xOffsetFactor)}px ${y}px ${flat ? 0 : blur}px ${flat ? 0 : spread}px var(--shadow-color-${step})`
        )
        .join(', ');

export const getShadows = (store: ConfigStore) => {
    const flat = !!store.shadowFlat;
    const x = +(store.shadowXOffsetFactor ?? 0);
    const boxInsetBlur = flat ? 0 : 1;
    const boxInsetColor = 'color-mix(in oklch, var(--color-surface-base), transparent 68%)';

    const shadowColorLight =
        `oklch(${store.lightShadowColorLightness}% ${store.lightShadowColorChroma} ${store.primaryHue})`;
    const shadowColorDark = `oklch(${store.darkShadowColorLightness}% ${store.darkShadowColorChroma} ${store.primaryHue})`;

    // stored configs from before the strength and x offset controls lack these keys
    const shadowStrengthLight = store.lightShadowStrength ?? 1;
    const shadowStrengthDark = store.darkShadowStrength ?? 25;

    return `
            /* SHADOWS */

            --shadow-box: ${generateShadow(Shadows.nearest, flat, x)}, inset -0.4px 0.8px ${boxInsetBlur}px 0px ${boxInsetColor}, inset 0.4px 0.8px ${boxInsetBlur}px 0px ${boxInsetColor};
            --shadow-inset: ${generateShadow(InsetShadows.inset, flat, x, true)}, var(--shadow-highlight);
            --shadow-inset-deep: ${generateShadow(InsetShadows.insetDeep, flat, x, true)}, var(--shadow-highlight);
            --shadow-nearest: ${generateShadow(Shadows.nearest, flat, x)};
            --shadow-near: ${generateShadow(Shadows.near, flat, x)};
            --shadow-medium: ${generateShadow(Shadows.medium, flat, x)};
            --shadow-far: ${generateShadow(Shadows.far, flat, x)};
            --shadow-farthest: ${generateShadow(Shadows.farthest, flat, x)};

            /* Light Theme */

            --shadow-color-light: ${shadowColorLight};
            --shadow-strength-light: ${shadowStrengthLight}%;

            /* Dark Theme */

            --shadow-color-dark: ${shadowColorDark};
            --shadow-strength-dark: ${shadowStrengthDark}%;
        `;
};
