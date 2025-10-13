export type TNavigationItem = {
    url: string;
    name: string;
};

export type TNavgation = Record<string, TNavigationItem>;

export const Navigation = {
    home: {
        url: '/',
        name: 'Home',
    },
    start: {
        url: '/start',
        name: 'Loslegen',
    },
    work: {
        url: '/work',
        name: 'Work',
    },
    about: {
        url: '/about',
        name: 'About',
    },
    impressum: {
        url: '/impressum',
        name: 'Impressum',
    },
    datenschutz: {
        url: '/datenschutz',
        name: 'Datenschutzerklärung',
    },
} as const;
