import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';

// https://astro.build/config
// biome-ignore lint/nursery/noDefaultExport: config file works like that
export default defineConfig({
    integrations: [
        svelte({
            compilerOptions: {
                runes: true,
            },
        }),
    ],
    server: {
        port: 3002,
    },
    root: './',
    srcDir: './src',
    outDir: './dist',
    publicDir: './public',
    site: 'https://ui-generator.nordcode.agency/',
    vite: {
        css: {
            transformer: 'lightningcss',
            lightningcss: {
                drafts: {
                    customMedia: true,
                },
                targets: browserslistToTargets(browserslist([
                    'Chrome > 0 and last 2.5 years',
                    'ChromeAndroid > 0 and last 2.5 years',
                    'Edge > 0 and last 2.5 years',
                    'Firefox > 0 and last 2.5 years',
                    'FirefoxAndroid > 0 and last 2.5 years',
                    'Safari > 0 and last 2.5 years',
                    'iOS > 0 and last 2.5 years',
                    'not dead',
                ])),
            },
        },
        build: {
            cssMinify: 'lightningcss',
        },
    },
});
