export type ColorPalette = {
    light: string[];
    dark: string[];
};

export type WorkProject = {
    heading: string;
    subheading: string;
    cover: ImageMetadata;
    coverAlt?: string;
    slug: string;
    name: string;
    // @todo: make these mandatory maybe
    url: string;
    colorPalette?: ColorPalette;
    goal: string;
    // what we did
    tags: string[];
};
