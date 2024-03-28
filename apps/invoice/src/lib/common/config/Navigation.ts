export const Navigation = {
    root: {
        url: '/',
        name: 'übersicht',
    },
    list: {
        url: '/invoices/list',
        name: 'Rechnungen',
    },
    new: {
        url: '/invoices',
        name: 'Neue Rechnung',
    },
    edit: {
        url: '/invoices',
        name: 'Rechnung bearbeiten',
    },
    view: {
        url: '/view',
        name: 'Rechnungsdetails',
    },
    admin: {
        url: '/management',
        name: 'Verwaltung',
    },
} as const;
