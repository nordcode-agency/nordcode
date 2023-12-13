import type { ConfigStore } from '../configStore';
import { getWpColorTheme } from './getWpColorTheme.ts';

export const getWpTheme = (store: ConfigStore) => {
    return {
        $schema: 'https://schemas.wp.org/trunk/theme.json',
        version: 2,
        settings: {
            ...getWpColorTheme(store),
        },
    };
};
