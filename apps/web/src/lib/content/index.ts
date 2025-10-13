import ReadiiCover from '$lib/assets/projects/readii/cover1.png?enhanced&w=1960;1170;980;585;360';
import StahlmannCover from '$lib/assets/projects/stahlmann/stahlmann-cover.jpeg?enhanced&w=1960;1170;980;585;360';
import VeganHamburgCover from '$lib/assets/projects/vegan-hamburg/vegan-hamburg-titlecard.webp?enhanced&w=1960;1170;980;585;360';
import WildtierrettungCover from '$lib/assets/projects/wildtierrettung/cover.webp?enhanced&w=1960;1170;980;585;360';
import type { WorkProject } from '$lib/types';

export const projects = [
    {
        heading: 'Vereinswebseite für Wildtierrettung',
        subheading: 'Wildtierrettung Rhein-Berg e.V.',
        cover: {
            src: WildtierrettungCover,
            alt: 'Ein Kitz wird in eine Box verladen',
        },
        slug: '/work/wildtierrettung-rhein-berg',
        name: 'wildtierrettung-rhein-berg',
        colorPalette: {
            light: ['#FBFFFB', '#040E04', '#285628', '#6A7301'],
            dark: ['#0A0C0A', '#EBEFEC', '#94C792', '#B6C058'],
        },
        url: 'https://wildtierrettung-rhein-berg.de/',
        goal:
            'Eine moderne Vorzeigewebseite, auf der Landwirte, interessierte Freiwillige und neue Helfer leicht finde, wonach sie suchen.',
        tags: ['Design', 'Entwicklung', 'Content', 'SEO'],
        hue: [142, 115],
    },
    {
        heading: 'Ein einfacher, KI-gestützter RSS Reader',
        subheading: 'readii',
        cover: {
            src: ReadiiCover,
            alt: 'readii, ein einfacher, KI-gestützter RSS Reader',
        },
        slug: '/work/readii',
        name: 'readii',
        url: 'https://nordcode.agency/',
        goal:
            'Ein einfacher RSS-Reader, der die Möglichkeiten von lokalen KI-Modellen (Gemini Nano) nutzt um Artikel zusammenzufassen.',
        tags: ['Design', 'Entwicklung', 'KI'],
        hue: [83, 83],
    },
    {
        heading: 'Fitnessprogramm mit vielen Videos',
        subheading: 'Stahlmann',
        cover: {
            src: StahlmannCover,
            alt: 'Fitnessprogramme von Linda Dahlmann',
        },
        slug: '/work/stahlmann',
        name: 'stahlmann',
        url: 'https://www.stahlmannlinda.com/',
        goal: 'Eine Fitnessprogramm-Webseite, mit Fokus auf Videos und intuitiver Bedienung',
        tags: ['Design', 'Entwicklung', 'Beratung', 'CMS'],
        hue: [25, 25],
    },
    {
        heading: 'Verzeichniswebseite für veganes Essen in Hamburg',
        subheading: 'Vegan Hamburg',
        cover: {
            src: VeganHamburgCover,
            alt: 'Logo und Titel von Vegan Hamburg',
        },
        slug: '/work/vegan-hamburg',
        name: 'vegan-hamburg',
        url: 'https://vegan-hamburg.com',
        goal: 'Eine SEO- und Performance-optimierte Webseite mit allen veganen Orten in Hamburg',
        tags: ['Design', 'Entwicklung', 'Performance'],
        hue: [25, 25],
    },
] as const satisfies readonly WorkProject[];

export type TProjects = typeof projects;
