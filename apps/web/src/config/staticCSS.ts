export const staticCSSVersion = '?v=1';

export const getVersionedCSS = (cssPath: string): string => {
    return `${cssPath}${staticCSSVersion}`;
};
