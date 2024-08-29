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
                targets: browserslistToTargets(browserslist('>= 0.25%')),
            },
        },
        build: {
            cssMinify: 'lightningcss',
        },
    },
});
