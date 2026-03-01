export type BorderColorDefinition = {
    l: number;
    c: number;
    hueToken: string;
    scalingFactor: number;
};

export const generateLightBorderColorValues = (
    tokenName: string,
    colorDef: BorderColorDefinition,
): Record<string, string> => {
    const themeSuffix = 'light';
    const lTokenName = `--l-${tokenName}-${themeSuffix}`;
    const cTokenName = `--c-${tokenName}-${themeSuffix}`;
    const hTokenName = `--h-${tokenName}-${themeSuffix}`;
    const scaleTokenName = `--scale-${tokenName}-${themeSuffix}`;
    const baseColorName = `--color-${tokenName}-base-${themeSuffix}`;

    return {
        [lTokenName]: `${colorDef.l / 100}`,
        [cTokenName]: `${colorDef.c}`,
        [hTokenName]: `var(${colorDef.hueToken})`,
        [scaleTokenName]: `${colorDef.scalingFactor}`,
        [baseColorName]: `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-muted-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) calc(l * var(${scaleTokenName})) calc(c * var(--neutral-chroma-scale)) h)`,
        [`--color-${tokenName}-subtle-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) calc(l * var(${scaleTokenName}) * var(${scaleTokenName})) calc(c * var(--neutral-chroma-scale) * var(--neutral-chroma-scale)) h)`,
        [`--color-${tokenName}-on-emphasis-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) var(--lightness-max) c h)`,
        [`--color-${tokenName}-hover-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) l c h / calc(var(--transparency-weaker) / 10))`,
    };
};

export const generateDarkBorderColorValues = (
    tokenName: string,
    colorDef: BorderColorDefinition,
): Record<string, string> => {
    const themeSuffix = 'dark';
    const lTokenName = `--l-${tokenName}-${themeSuffix}`;
    const cTokenName = `--c-${tokenName}-${themeSuffix}`;
    const hTokenName = `--h-${tokenName}-${themeSuffix}`;
    const scaleTokenName = `--scale-${tokenName}-${themeSuffix}`;
    const baseColorName = `--color-${tokenName}-base-${themeSuffix}`;

    return {
        [lTokenName]: `${colorDef.l / 100}`,
        [cTokenName]: `${colorDef.c}`,
        [scaleTokenName]: `${colorDef.scalingFactor}`,
        [hTokenName]: `var(${colorDef.hueToken})`,
        [baseColorName]: `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-muted-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) calc(l * var(${scaleTokenName})) calc(c * var(--neutral-chroma-scale)) h)`,
        [`--color-${tokenName}-subtle-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) calc(l * var(${scaleTokenName}) * var(${scaleTokenName})) calc(c * var(--neutral-chroma-scale) * var(--neutral-chroma-scale)) h)`,
        [`--color-${tokenName}-on-emphasis-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) var(--lightness-max) c h)`,
        [`--color-${tokenName}-hover-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) l c h / calc(var(--transparency-weaker) / 10))`,
    };
};
