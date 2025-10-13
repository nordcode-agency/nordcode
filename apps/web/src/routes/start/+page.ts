import type { PageLoad } from './$types';

export const load = (async () => {
    return {
        title: 'nordcode – Lass uns starten.',
        desc:
            'Bei der Umsetzung von Projekten legen wir besonderen Wert auf die Entwicklung maßgeschneiderter Lösungen, die exakt Ihren Anforderungen und Wünschen entsprechen.<br>Ein weiterer Schwerpunkt liegt auf einer umfassenden Suchmaschinenoptimierung (<abbr class="smallcaps" title="Search Engine Optimization">SEO</abbr>) sowie der Optimierung für verschiedene Endgeräte wie Smartphones, Tablets und Desktops. Ein attraktives Design (<abbr title="User Interface">UI</abbr>) und eine hohe Benutzerfreundlichkeit (<abbr title="User Experience">UX</abbr>) sind für uns ebenso selbstverständlich wie die Fokussierung auf Performance und Sicherheit.<br>Zu diesem Zweck setzen wir moderne Technologien ein, wie React, Vue, Svelte, Typescript, PHP, Laravel, React Native für iOS und Android und Node.js / Deno.',
        questions: [
            {
                heading: 'Website',
                desc:
                    'Dazu zählen beispielsweise Blogs, Websites für Ihr Geschäft oder Ihre selbstständige Arbeit, umfangreiche Unternehmensseiten, Web-Apps, interne Tools oder Managementsysteme.',
                slug: '/start/website',
            },
            {
                heading: 'E-Commerce',
                desc:
                    'Unser Leistungsspektrum umfasst die Konzeption und Umsetzung von Online-Shops, Marktplätzen sowie individuellen E-Commerce-Lösungen. Im Rahmen dessen setzen wir auch E-Commerce-Plattformen wie Shopify oder PrestaShop ein.',
                slug: '/start/e-commerce',
            },
            {
                heading: 'Apps',
                desc:
                    'Diese Option ist für Projekte geeignet, die für Smartphones und Tablets konzipiert werden. Hierzu zählt die Entwicklung nativer Apps für iOS und Android.',
                slug: '/start/apps',
            },
            {
                heading: 'Individuell',
                desc:
                    'Für Projekte geeignet, die nicht zu den restlichen Optionen passen. Hierzu zählen beispielsweise individuelle Softwarelösungen, Schnittstellen oder Automatisierungen. In enger Zusammenarbeit erarbeiten wir eine maßgeschneiderte Lösung und setzen diese um.',
                slug: '/start/custom',
            },
        ],
    };
}) satisfies PageLoad;
