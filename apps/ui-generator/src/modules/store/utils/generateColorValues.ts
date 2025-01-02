export type ColorDefinition = {
    l: number;
    c: number;
    h: number;
    lDark: number;
};

const generateLightColorValues = (
    tokenName: string,
    colorDef: ColorDefinition,
): Record<string, string> => {
    const themeSuffix = 'light';
    const lTokenName = `--l-${tokenName}-${themeSuffix}`;
    const cTokenName = `--c-${tokenName}`;
    const hTokenName = `--h-${tokenName}`;

    return {
        [lTokenName]: `${colorDef.l / 100}`,
        [`--color-${tokenName}-base-${themeSuffix}`]: `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-emphasis-${themeSuffix}`]: `oklch(calc(var(${lTokenName}) * 0.85) calc(var(${cTokenName}) * 1.1) var(${hTokenName}))`,
        [`--color-${tokenName}-surface-${themeSuffix}`]: `oklch(calc(var(--lightness-max) - 0.1 + var(${lTokenName}) / 10) calc(var(${cTokenName}) * 0.25) var(${hTokenName}))`,
        [`--color-${tokenName}-contrast-lightness-${themeSuffix}`]: `calc(
  var(--lightness-max) -
  (var(--lightness-diff) * min(max((var(${lTokenName}) - var(--lightness-contrast-cutoff)) * 1000000, 0), 1))
)`,
        [`--color-${tokenName}-contrast-${themeSuffix}`]: `oklch(var(--color-${tokenName}-contrast-lightness-${themeSuffix}) calc(var(${cTokenName}) * 0.25) var(${hTokenName}))`,
        [`--color-${tokenName}-hover-${themeSuffix}`]: `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}) / calc(var(--transparency-weaker) / 10))`,
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

    return {
        [lTokenName]: `${colorDef.lDark / 100}`,
        [`--color-${tokenName}-base-${themeSuffix}`]: `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}))`,
        [`--color-${tokenName}-emphasis-${themeSuffix}`]: `oklch(calc(var(${lTokenName}) * 1.25) calc(var(${cTokenName}) * 1.1) var(${hTokenName}))`,
        [`--color-${tokenName}-surface-${themeSuffix}`]: `oklch(calc(var(--lightness-min) + var(${lTokenName}) / 3) calc(var(${cTokenName}) * 0.25) var(${hTokenName}))`,
        [`--color-${tokenName}-contrast-lightness-${themeSuffix}`]: `calc(
      var(--lightness-max) -
      (var(--lightness-diff) * min(max((var(${lTokenName}) - var(--lightness-contrast-cutoff)) * 1000000, 0), 1))
    )`,
        [`--color-${tokenName}-contrast-${themeSuffix}`]: `oklch(var(--color-${tokenName}-contrast-lightness-${themeSuffix}) calc(var(${cTokenName}) * 0.25) var(${hTokenName}))`,
        [`--color-${tokenName}-hover-${themeSuffix}`]: `oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName}) / calc(var(--transparency-weaker) / 10))`,
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
