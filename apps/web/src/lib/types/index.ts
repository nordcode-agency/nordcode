export type MediaImage = {
	src: string;
	alt: string;
};

type ColorPalette = {
	light: string[];
	dark: string[];
};

export type WorkProject = {
	heading: string;
	subheading: string;
	cover: MediaImage;
	slug: string;
	name: string;
	// @todo: make these mandatory maybe
	url?: string;
	colorPalette?: ColorPalette;
	goal?: string;
	// what we did
	tags?: string[];
	hue?: {
		light: string;
		dark: string;
	};
};
