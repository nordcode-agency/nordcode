export const Navigation = {
    root: {
        url: '/',
        name: 'übersicht',
    },
    invoices: {
        url: '/invoices',
        name: 'Rechnungen',
    },
    new: {
        url: '/new',
        name: 'Neue Rechnung',
    },
    view: {
        url: '/view',
        name: 'Rechnungsdetails',
    },
} as const;
