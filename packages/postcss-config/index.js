const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const combineSelectors = require("postcss-combine-duplicated-selectors");

// copied from open props
// https://github.com/argyleink/open-props/blob/main/postcss.config.cjs

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 0,
      autoprefixer: false,
      features: {
        "logical-properties-and-values": false,
        "prefers-color-scheme-query": false,
        "gap-properties": false,
        "custom-properties": false,
        "place-properties": false,
        "not-pseudo-class": false,
        "focus-visible-pseudo-class": false,
        "focus-within-pseudo-class": false,
        "color-functional-notation": false,
      },
    }),
    combineSelectors(),
  ],
};