module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-custom`
    extends: ['custom'],
    settings: {
        next: {
            rootDir: ['apps/*/'],
        },
    },
    overrides: [
        {
            // Adapt to your needs (e.g. some might want to only override "next.config.js")
            files: ['*.js', '*.svelte'],
            // This is the default parser of ESLint
            parser: 'espree',
            parserOptions: {
                ecmaVersion: 2020,
            },
        },
    ],
};
