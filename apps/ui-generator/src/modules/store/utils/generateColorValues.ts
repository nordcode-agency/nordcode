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
        [`--color-${tokenName}-emphasis-${themeSuffix}`]: `color-mix(
            in oklch,
            oklch(var(${lTokenName}) calc(1.25 * var(${cTokenName})) var(${hTokenName})),
            var(--color-${tokenName}-black) 15%)`,
        [`--color-${tokenName}-surface-${themeSuffix}`]: `color-mix(
            in oklch,
            oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName})), var(--color-${tokenName}-white) 96%)`,
        [`--color-${tokenName}-contrast-lightness-${themeSuffix}`]: `calc(
  var(--lightness-max) -
  (var(--lightness-diff) * min(max((var(${lTokenName}) - var(--lightness-contrast-cutoff)) * 1000000, 0), 1))
)`,
        [`--color-${tokenName}-contrast-${themeSuffix}`]: `oklch(var(--color-${tokenName}-contrast-lightness-${themeSuffix}) var(--color-${tokenName}-neutral-chroma) var(${hTokenName}))`,
        [`--color-${tokenName}-hover-${themeSuffix}`]: `color-mix(
                in oklch,
                var(--color-${tokenName}-base-${themeSuffix}) calc(var(--transparency-weaker) * 10%),
                transparent
            )`,
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
        [`--color-${tokenName}-emphasis-${themeSuffix}`]: `color-mix(
            in oklch,
            oklch(var(${lTokenName}) calc(1.25 * var(${cTokenName})) var(${hTokenName})),
            var(--color-${tokenName}-white) 15%)`,
        [`--color-${tokenName}-surface-${themeSuffix}`]: `color-mix(
            in oklch,
            oklch(var(${lTokenName}) var(${cTokenName}) var(${hTokenName})), var(--color-${tokenName}-black) 65%)`,
        [`--color-${tokenName}-contrast-lightness-${themeSuffix}`]: `calc(
  var(--lightness-max) -
  (var(--lightness-diff) * min(max((var(${lTokenName}) - var(--lightness-contrast-cutoff)) * 1000000, 0), 1))
)`,
        [`--color-${tokenName}-contrast-${themeSuffix}`]: `oklch(var(--color-${tokenName}-contrast-lightness-${themeSuffix}) var(--color-${tokenName}-neutral-chroma) var(${hTokenName}))`,
        [`--color-${tokenName}-hover-${themeSuffix}`]: `color-mix(
                in oklch,
                var(--color-${tokenName}-base-${themeSuffix}) calc(var(--transparency-weaker) * 10%),
                transparent
            )`,
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
        [`--color-${tokenName}-neutral-chroma`]: `calc(var(${cTokenName}) * var(--neutral-chroma-scale))`,
        [`--color-${tokenName}-white`]: `oklch(var(--lightness-max) var(--color-${tokenName}-neutral-chroma) var(${hTokenName}))`,
        [`--color-${tokenName}-black`]: `oklch(var(--lightness-min) var(--color-${tokenName}-neutral-chroma) var(${hTokenName}))`,
        // theme-specific color variables
        ...generateLightColorValues(tokenName, colorDef),
        ...generateDarkColorValues(tokenName, colorDef),
    };
};
