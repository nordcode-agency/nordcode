export const toSpecificVersion = (
    color: string,
    version: 'light' | 'dark',
    protectedString?: string,
) => {
    if (!protectedString || !color.includes(protectedString)) {
        return `${color.split('-').slice(0, -1).join('-')}-${version}-${color.split('-').slice(-1)}`;
    }

    return `${color.split(protectedString)[0]}${version}-${protectedString}`;
};
