import type { ConfigStore } from '../configStore';

const AmountOfShadows = {
    inset: 1,
    nearest: 1,
    near: 3,
    medium: 5,
    far: 8,
};

export const getShadows = (store: ConfigStore) => {
    const shadowColorLightLch =
        `${store.lightShadowColorLightness}% ${store.lightShadowColorChroma} ${store.primaryHue}`;
    const shadowColorLight = `oklch(${shadowColorLightLch})`;

    const shadowColorDarkLch = `${store.darkShadowColorLightness}% ${store.darkShadowColorChroma} ${store.primaryHue}`;
    const shadowColorDark = `oklch(${shadowColorDarkLch})`;

    const shadowConfig = {
        baseDistance: +store.shadowConfigDistanceBase,
        scaleFactor: +store.shadowConfigDistanceScaleFactor,
        blurFactor: +store.shadowConfigBlurScaleFactor,
        startTransparency: +store.shadowConfigStartTransparency,
        transparencyScale: +store.shadowConfigTransparencyScale,
        spreadMax: +store.shadowConfigSpreadMax,
        xOffsetFactor: +store.shadowConfigXOffsetFactor,
    };

    return `
            /* SHADOWS */

        --shadow-box: ${
        generateShadow(
            AmountOfShadows.nearest,
            shadowConfig,
        )
    }, ${
        generateShadow(
            AmountOfShadows.inset,
            {
                ...shadowConfig,
                xOffsetFactor: shadowConfig.xOffsetFactor * -1,
            },
            true,
            'var(--color-surface-base)',
        )
    }, ${
        generateShadow(
            AmountOfShadows.inset,
            shadowConfig,
            true,
            'var(--color-surface-base)',
        )
    };
            --shadow-inset: ${
        generateShadow(
            AmountOfShadows.nearest,
            shadowConfig,
            true,
        )
    };
            --shadow-nearest: ${
        generateShadow(
            AmountOfShadows.nearest,
            shadowConfig,
        )
    };
            --shadow-near: ${
        generateShadow(
            AmountOfShadows.near,
            shadowConfig,
        )
    };
            --shadow-medium: ${
        generateShadow(
            AmountOfShadows.medium,
            shadowConfig,
        )
    };
            --shadow-far: ${
        generateShadow(
            AmountOfShadows.far,
            shadowConfig,
        )
    };
            /* Light Theme */

            --shadow-color-light: ${shadowColorLight};
            --shadow-color-light-lch: ${shadowColorLightLch};

            /* Dark Theme */

            --shadow-color-dark: ${shadowColorDark};
            --shadow-color-dark-lch: ${shadowColorDarkLch};
        `;
};

// ideas from: https://shadows.brumm.af/ and material design and https://www.joshwcomeau.com/shadow-palette/
// const amountOfExtraShadows = 4;
const round = (num: number) => Math.round(num * 10) / 10;
const getShadowColor = (transparency: number, shadowColor = 'var(--shadow-color)') =>
    `color-mix(in oklch, ${shadowColor}, transparent ${100 - round(transparency * 100)}%)`;

const getSpread = (min: number, max: number, totalSteps: number, step: number) => {
    const spread = min + ((max - min) / totalSteps) * step;
    return round(spread);
};

const scaleSpread = (target: number, totalSteps: number, currentStep: number): number => {
    return (currentStep / totalSteps) * target;
};
// def scale(i, x):
//     y = ((i - 1) / (3 - 1)) * x
//     return y

// use color for creating the correct one
const generateShadow = (
    amountOfShadows: number,
    config: {
        baseDistance: number;
        scaleFactor: number;
        blurFactor: number;
        startTransparency: number;
        transparencyScale: number;
        spreadMax: number;
        xOffsetFactor: number;
    },
    inset?: boolean,
    shadowColorOverwrite?: string,
) => {
    const {
        baseDistance,
        scaleFactor,
        blurFactor,
        startTransparency,
        transparencyScale,
        spreadMax,
        xOffsetFactor,
    } = config;

    let shadowString = '';

    for (let i = 0; i <= amountOfShadows - 1; i++) {
        const d = round(baseDistance * scaleFactor ** i);
        const blur = round(d * blurFactor);
        const shadowColor = getShadowColor(
            startTransparency * transparencyScale ** i,
            shadowColorOverwrite,
        );

        const spread = round(scaleSpread(+spreadMax, AmountOfShadows.far, i));

        const newShadow = `${inset ? 'inset ' : ''}${
            round(
                d * xOffsetFactor,
            )
        }px ${d}px ${blur}px ${spread}px ${shadowColor}`;

        const isFlat = blurFactor === 0;
        // it's a flat theme, so we dont need extra shadows
        if (isFlat) {
            shadowString = newShadow;
            continue;
        }

        shadowString = shadowString.concat(newShadow);
        if (i < amountOfShadows - 1) {
            shadowString = shadowString.concat(', ');
        }
    }

    return shadowString;
};
