import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	server: {
		port: 3003
	},
	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			drafts: {
				nesting: true,
				customMedia: true
			}
		}
	}
});
