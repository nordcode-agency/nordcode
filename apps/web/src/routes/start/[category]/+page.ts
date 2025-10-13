import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    const category = params.category;

    return {
        title: 'nordcode – Was ist dein Budget?',
        options: [
            {
                slug: `/start/${category}/till-1000`,
                desc:
                    'Hier kommen kleine statische Websites oder einfache Landingpages in Frage. Auch kleine individuelle Softwarelösungen zählen dazu.',
                displayNumbers: [1000],
                label: 'Bis %n',
            },
            {
                slug: `/start/${category}/1000-to-5000`,
                desc:
                    'Dieser Bereich umfasst kleine bis mittelgroße Websites, die die Implementierung von Content-Management-Systemen (CMS) erfordern. Auch einfache E-Commerce-Lösungen, individuelle Softwarelösungen oder einfache native Apps zählen dazu.',
                displayNumbers: [1000, 5000],
                label: '%n bis %n',
            },
            {
                slug: `/start/${category}/5000-to-10000`,
                desc:
                    'Hier kommen mittelgroße bis große Websites in Frage, die eine umfangreiche Funktionalität erfordern. Auch umfangreiche E-Commerce-Lösungen, individuelle Softwarelösungen oder native Apps zählen dazu.',
                displayNumbers: [5000, 10_000],
                label: '%n bis %n',
            },
            {
                slug: `/start/${category}/more-than-10000`,
                desc:
                    'Dieser Bereich umfasst umfangreiche Projekte, die eine hohe Funktionalität erfordern. Dazu kommt ein hoher Umfang und Komplexität aus den Bereichen Websites, Apps, E-Commerce oder maßgeschneiderten Softwarelösungen.',
                displayNumbers: [10_000],
                label: 'Mehr als %n',
            },
        ],
    };
}) satisfies PageLoad;
