export const spriteMapVersion = '?v=1';

export const getIconPath = (iconName: string): string => {
    return `/assets/icons/icons.svg${spriteMapVersion}#${iconName}`;
};
