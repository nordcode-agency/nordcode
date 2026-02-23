export type ColorDefinition = {
    l: number;
    c: number;
    h: number;
    lDark: number;
};

// this is tricky, because it's not completely uniform
// the best contrast seems to be achieved by moving slightly upwards from the middle
const contrastCutOff = 57;

const generateLightColorValues = (
    tokenName: string,
    colorDef: ColorDefinition,
): Record<string, string> => {
    const themeSuffix = 'light';
    const lTokenName = `--l-${tokenName}-${themeSuffix}`;
    const cTokenName = `--c-${tokenName}`;
    const hTokenName = `--h-${tokenName}`;
    const baseColorName = `--color-${tokenName}-base-${themeSuffix}`;
    const contrastToken = colorDef.l < contrastCutOff ? 'var(--lightness-min)' : 'var(--lightness-max)';

    return {
        [lTokenName]: `${colorDef.l / 100}`,
        [baseColorName]: `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-emphasis-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) calc(l * 0.85) calc(c * 1.1) h)`,
        [`--color-${tokenName}-surface-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) calc(var(--lightness-max) - 0.1 + l / 10) calc(c * 0.25) h)`,
        [`--color-${tokenName}-contrast-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) ${contrastToken} calc(c * 0.25) h)`,
        [`--color-${tokenName}-hover-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) l c h / calc(var(--transparency-weaker) / 10))`,
    };
};

const generateDarkColorValues = (
    tokenName: string,
    colorDef: ColorDefinition,
): Record<string, string> => {
    const themeSuffix = 'dark';
    const lTokenName = `--l-${tokenName}-${themeSuffix}`;
    const cTokenName = `--c-${tokenName}`;
    const hTokenName = `--h-${tokenName}`;
    const baseColorName = `--color-${tokenName}-base-${themeSuffix}`;
    const contrastToken = colorDef.l < contrastCutOff ? 'var(--lightness-min)' : 'var(--lightness-max)';

    return {
        [lTokenName]: `${colorDef.lDark / 100}`,
        [baseColorName]: `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-emphasis-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) calc(l * 1.25) calc(c * 1.1) h)`,
        [`--color-${tokenName}-surface-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) calc(var(--lightness-min) + l / 3) calc(c * 0.25) h)`,
        [`--color-${tokenName}-contrast-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) ${contrastToken} calc(c * 0.25) h)`,
        [`--color-${tokenName}-hover-${themeSuffix}`]:
            `oklch(from var(${baseColorName}) l c h / calc(var(--transparency-weaker) / 10))`,
    };
};

export const generateColorValues = (
    tokenName: string,
    colorDef: ColorDefinition,
): Record<string, string> => {
    const cTokenName = `--c-${tokenName}`;
    const hTokenName = `--h-${tokenName}`;

    return {
        // Base color variables
        [cTokenName]: `${colorDef.c}`,
        [hTokenName]: `${colorDef.h}`,
        // theme-specific color variables
        ...generateLightColorValues(tokenName, colorDef),
        ...generateDarkColorValues(tokenName, colorDef),
    };
};
