import type { ConfigStore } from '../configStore';
import { getColorTheme } from './getColorTheme';

export const getStringTheme = (store: ConfigStore) => {
    const theme = getColorTheme(store);

    let themeString = '';

    for (const [name, value] of Object.entries(theme)) {
        themeString = themeString.concat(
            `
${name}-lch: ${value};
${name}: oklch(var(${name}-lch));
            `.trim(),
        );
        themeString = `${themeString}\n`;
    }

    return themeString;
};
