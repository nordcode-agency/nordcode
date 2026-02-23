export type TextColorDefinition = {
    l: number;
    c: number;
    hueToken: string;
    scalingFactor: number;
};

// this is tricky, because it's not completely uniform
// the best contrast seems to be achieved by moving slightly upwards from the middle
const contrastCutOff = 57;

export const generateLightSurfaceColorValues = (
    tokenName: string,
    colorDef: TextColorDefinition,
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
        [`--color-${tokenName}-emphasis-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) var(--lightness-min) c h)`,
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
        [`--color-${tokenName}-emphasis-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) var(--lightness-max) calc(c * 0.1) h)`,
    };
};
