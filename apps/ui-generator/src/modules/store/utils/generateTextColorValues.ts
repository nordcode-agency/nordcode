export type TextColorDefinition = {
    l: number;
    c: number;
    hueToken: string;
    scalingFactor: number;
};

export const generateLightTextColorValues = (
    tokenName: string,
    colorDef: TextColorDefinition,
): Record<string, string> => {
    const themeSuffix = 'light';
    const lTokenName = `--l-${tokenName}-${themeSuffix}`;
    const cTokenName = `--c-${tokenName}-${themeSuffix}`;
    const hTokenName = `--h-${tokenName}-${themeSuffix}`;
    const scaleTokenName = `--scale-${tokenName}-${themeSuffix}`;

    return {
        [lTokenName]: `${colorDef.l / 100}`,
        [cTokenName]: `${colorDef.c}`,
        [hTokenName]: `var(${colorDef.hueToken})`,
        [scaleTokenName]: `${colorDef.scalingFactor}`,
        [`--color-${tokenName}-base-${themeSuffix}`]: `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-muted-${themeSuffix}`]:
            `oklch(calc(var(${lTokenName}) * var(${scaleTokenName})) calc(var(${cTokenName}) * var(--neutral-chroma-scale)) var(${hTokenName}))`,
        [`--color-${tokenName}-subtle-${themeSuffix}`]:
            `oklch(calc(var(${lTokenName}) * var(${scaleTokenName}) * var(${scaleTokenName})) calc(var(${cTokenName}) * var(--neutral-chroma-scale) * var(--neutral-chroma-scale)) var(${hTokenName}))`,
        [`--color-${tokenName}-on-emphasis-${themeSuffix}`]:
            `oklch(var(--lightness-max) calc(var(${cTokenName}) * 0.1) var(${hTokenName}))`,
        [`--color-${tokenName}-hover-${themeSuffix}`]:
            `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}) / calc(var(--transparency-weaker) / 10))`,
    };
};

export const generateDarkTextColorValues = (
    tokenName: string,
    colorDef: TextColorDefinition,
): Record<string, string> => {
    const themeSuffix = 'dark';
    const lTokenName = `--l-${tokenName}-${themeSuffix}`;
    const cTokenName = `--c-${tokenName}-${themeSuffix}`;
    const hTokenName = `--h-${tokenName}-${themeSuffix}`;
    const scaleTokenName = `--scale-${tokenName}-${themeSuffix}`;

    return {
        [lTokenName]: `${colorDef.l / 100}`,
        [cTokenName]: `${colorDef.c}`,
        [hTokenName]: `var(${colorDef.hueToken})`,
        [scaleTokenName]: `${colorDef.scalingFactor}`,
        [`--color-${tokenName}-base-${themeSuffix}`]: `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-muted-${themeSuffix}`]:
            `oklch(calc(var(${lTokenName}) * var(${scaleTokenName})) calc(var(${cTokenName}) * var(--neutral-chroma-scale)) var(${hTokenName}))`,
        [`--color-${tokenName}-subtle-${themeSuffix}`]:
            `oklch(calc(var(${lTokenName}) * var(${scaleTokenName}) * var(${scaleTokenName})) calc(var(${cTokenName}) * var(--neutral-chroma-scale) * var(--neutral-chroma-scale)) var(${hTokenName}))`,
        [`--color-${tokenName}-on-emphasis-${themeSuffix}`]:
            `oklch(var(--lightness-min) var(${cTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-hover-${themeSuffix}`]:
            `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}) / calc(var(--transparency-weaker) / 10))`,
    };
};
