export const ensureTrailingSlash = (url: string): string => {
	if (url.endsWith('/')) {
		return url.slice(0, -1);
	}

	return `${url}`;
};
