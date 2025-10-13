import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [enhancedImages(), sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
    },
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
});
