/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  "printWidth": 100,
  "singleQuote": true,
  "useTabs": false,
  "tabWidth": 4,
  "semi": true,
  "bracketSpacing": true,
  "trailingComma": "all",
  "arrowParens": "avoid",
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
