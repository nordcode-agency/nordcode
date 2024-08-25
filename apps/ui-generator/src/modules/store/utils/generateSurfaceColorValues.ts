export type TextColorDefinition = {
    l: number;
    c: number;
    h: number;
    scalingFactor: number;
};

export const generateLightSurfaceColorValues = (
    tokenName: string,
    colorDef: TextColorDefinition,
): Record<string, string> => {
    const themeSuffix = 'light';
    const lTokenName = `--l-${tokenName}-${themeSuffix}`;
    const cTokenName = `--c-${tokenName}-${themeSuffix}`;
    const hTokenName = `--h-${tokenName}-${themeSuffix}`;
    const scaleTokenName = `--scale-${tokenName}-${themeSuffix}`;

    const neutralColorTokenName = `--color-${tokenName}-neutral-chroma-${themeSuffix}`;
    const contrastColorTokenName = `--color-${tokenName}-contrast-${themeSuffix}`;

    return {
        [lTokenName]: `${colorDef.l / 100}`,
        [cTokenName]: `${colorDef.c}`,
        [hTokenName]: `${colorDef.h}`,
        [scaleTokenName]: `${colorDef.scalingFactor}`,
        [neutralColorTokenName]: `calc(var(${cTokenName}) * var(--neutral-chroma-scale))`,
        [contrastColorTokenName]: `oklch(var(--lightness-min) var(${neutralColorTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-base-${themeSuffix}`]: `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-muted-${themeSuffix}`]: `
            color-mix(in oklch,
            var(--color-${tokenName}-base-${themeSuffix}),
            var(${contrastColorTokenName}) calc(var(${scaleTokenName}) * 100%))`,
        [`--color-${tokenName}-subtle-${themeSuffix}`]: `
            color-mix(in oklch,
            var(--color-${tokenName}-base-${themeSuffix}),
            var(${contrastColorTokenName}) calc(var(${scaleTokenName}) * 2 * 100%))`,
        [`--color-${tokenName}-emphasis-${themeSuffix}`]: `var(${contrastColorTokenName})`,
    };
};

export const generateDarkSurfaceColorValues = (
    tokenName: string,
    colorDef: TextColorDefinition,
): Record<string, string> => {
    const themeSuffix = 'dark';
    const lTokenName = `--l-${tokenName}-${themeSuffix}`;
    const cTokenName = `--c-${tokenName}-${themeSuffix}`;
    const hTokenName = `--h-${tokenName}-${themeSuffix}`;

    const contrastColorTokenName = `--color-${tokenName}-contrast-${themeSuffix}`;

    return {
        [lTokenName]: `${colorDef.l / 100}`,
        [cTokenName]: `${colorDef.c}`,
        [hTokenName]: `${colorDef.h}`,
        [contrastColorTokenName]: `oklch(var(--lightness-max) var(${cTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-base-${themeSuffix}`]: `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-muted-${themeSuffix}`]: `
            color-mix(in oklch,
            var(--color-${tokenName}-base-${themeSuffix}),
            var(${contrastColorTokenName}) ${colorDef.scalingFactor * 100}%)`,
        [`--color-${tokenName}-subtle-${themeSuffix}`]: `
            color-mix(in oklch,
            var(--color-${tokenName}-base-${themeSuffix}),
            var(${contrastColorTokenName}) ${colorDef.scalingFactor * 2 * 100}%)`,
        [`--color-${tokenName}-emphasis-${themeSuffix}`]: `var(${contrastColorTokenName})`,
    };
};
