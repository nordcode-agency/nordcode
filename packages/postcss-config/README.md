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

## Using Global Data

Following the getting started section allows you to extend the postcss config in your project with any plugin you like.

A common scenario is the usage of custom media queries like offered by `@nordcode/ui/media`. You can achieve this by adding the [`@csstools/postcss-global-data`](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-global-data#readme) to your app.

Extend `postcss.config.cjs` as follows:

```js
const config = require('@nordcode/postcss-config');
const postcssGlobalData = require('@csstools/postcss-global-data');
const customMediaUrl = require.resolve('@nordcode/ui/media');

module.exports = {
    plugins: [
        postcssGlobalData({
            files: [
                customMediaUrl,
            ],
        }),
        ...config.plugins,
    ],
};
```
