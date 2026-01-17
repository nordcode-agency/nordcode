// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://nordcode.agency',
    trailingSlash: 'never',
    integrations: [sitemap()],
    build: {
        inlineStylesheets: 'never',
    },
    devToolbar: {
        enabled: false,
    },
    vite: {
        css: {
            transformer: 'lightningcss',
            lightningcss: {
                drafts: {
                    customMedia: true,
                },
            },
        },
    },
});
