export const Navigation = {
    root: {
        url: '/',
        name: 'Overview',
    },
    editor: {
        url: '/editor',
        name: 'Editor',
    },
    question: {
        url: '/editor/question/:id',
        name: 'Question',
    },
    management: {
        url: '/management',
        name: 'All questionnaires',
    },
} as const;
