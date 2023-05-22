# @nordcode/postcss-config

## Getting started

Create a `postcss.config.cjs` file in the root of your project. Add the following code as base to it:

```js
const config = require('@nordcode/postcss-config');

module.exports = {
  plugins: [
    ...config.plugins,
  ],
};
```

Install the missing package `@nordcode/postcss-config` by runninf the following command:

```sh
pnpm add -D @nordcode/postcss-config
```
