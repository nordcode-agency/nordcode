import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	// @todo deactivated unless alias and global @custom-media is supported
	// @see https://discord.com/channels/896960631322849340/1149432511571689522/1149432511571689522
	// css: {
	// 	transformer: 'lightningcss',
	// 	lightningcss: {
	// 		drafts: {
	// 			nesting: true,
	// 			customMedia: true
	// 		}
	// 	}
	// }
});
