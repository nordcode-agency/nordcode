import ReadiiCover from '../assets/images/projects/readii/cover.png';
import StahlmannCover from '../assets/images/projects/stahlmann/stahlmann-cover.jpeg';
import VeganHamburgCover from '../assets/images/projects/vegan-hamburg/vegan-hamburg-titlecard.jpg';
import WildtierrettungCover from '../assets/images/projects/wildtierrettung/cover.webp';
import type { WorkProject } from '../types';

export const projects: WorkProject[] = [
    {
        heading: 'Vereinswebseite für Wildtierrettung',
        subheading: 'Wildtierrettung Rhein-Berg e.V.',
        cover: WildtierrettungCover,
        coverAlt: 'Ein Kitz wird in eine Box verladen',
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
    },
    {
        heading: 'Ein einfacher, KI-gestützter RSS Reader',
        subheading: 'readii',
        cover: ReadiiCover,
        coverAlt: 'readii, ein einfacher, KI-gestützter RSS Reader',
        slug: '/work/readii',
        name: 'readii',
        url: 'https://readii.de/',
        goal:
            'Ein einfacher RSS-Reader, der die Möglichkeiten von lokalen KI-Modellen (Gemini Nano) nutzt um Artikel zusammenzufassen.',
        tags: ['Design', 'Entwicklung', 'KI'],
    },
    {
        heading: 'Fitnessprogramm mit vielen Videos',
        subheading: 'Stahlmann',
        cover: StahlmannCover,
        coverAlt: 'Fitnessprogramme von Linda Dahlmann',
        slug: '/work/stahlmann',
        name: 'stahlmann',
        url: 'https://www.stahlmannlinda.com/',
        goal: 'Eine Fitnessprogramm-Webseite, mit Fokus auf Videos und intuitiver Bedienung',
        tags: ['Design', 'Entwicklung', 'Beratung', 'CMS'],
    },
    {
        heading: 'Verzeichniswebseite für veganes Essen in Hamburg',
        subheading: 'Vegan Hamburg',
        cover: VeganHamburgCover,
        coverAlt: 'Logo und Titel von Vegan Hamburg',
        slug: '/work/vegan-hamburg',
        name: 'vegan-hamburg',
        url: 'https://vegan-hamburg.com',
        goal: 'Eine SEO- und Performance-optimierte Webseite mit allen veganen Orten in Hamburg',
        tags: ['Design', 'Entwicklung', 'Performance'],
    },
] as const;

export type TProjects = typeof projects;
