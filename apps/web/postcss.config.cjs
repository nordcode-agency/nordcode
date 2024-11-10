/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('@nordcode/postcss-config');
const postcssGlobalData = require('@csstools/postcss-global-data');
const customMediaUrl = require.resolve('@nordcode/ui/utils/media');

module.exports = {
	plugins: [
		postcssGlobalData({
			files: [customMediaUrl]
		}),
		...config.plugins
	]
};
