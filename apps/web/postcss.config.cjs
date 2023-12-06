/* eslint-disable @typescript-eslint/no-var-requires */
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
