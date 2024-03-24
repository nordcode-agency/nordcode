export const toSpecificVersion = (color: string, version: 'light' | 'dark') =>
    `${color.split('-').slice(0, -1).join('-')}-${version}-${color.split('-').slice(-1)}`;
