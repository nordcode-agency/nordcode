module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  // parser: "@babel/eslint-parser",
  // parserOptions: {
  //   babelOptions: {
  //     presets: [require.resolve("next/babel")],
  //   },
  // },
};
