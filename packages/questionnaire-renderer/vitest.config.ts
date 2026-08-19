import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    resolve: {
        alias: {
            // the package entry re-exports .svelte components, which would need the
            // svelte compiler; the store tests only use localStore
            '@nordcode/forms-svelte': fileURLToPath(
                new URL('../forms-svelte/src/lib/stores/localStore.ts', import.meta.url),
            ),
        },
    },
    test: {
        include: ['src/**/*.test.ts'],
        environment: 'node',
    },
});
