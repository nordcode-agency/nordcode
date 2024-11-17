<script lang="ts">
    import type { Questionnaire } from '$lib/index.ts';
    import { QuestionnaireRenderer } from '../lib/renderer/index.ts';

    const json = {
        id: 'questionnaire-Z6M9FW7JS1ySvtyP1R771',
        title: 'Neuer Fragebogen',
        description: '',
        questions: {
            'question-Wwn3gHT9nM4g_z32u6cmq': {
                id: 'question-Wwn3gHT9nM4g_z32u6cmq',
                title: 'Was macht die Kunst?',
                type: 'single_choice',
                description:
                    '<article class="nc-markdown nc-flow"><p>Einfache Frage, einfache Antwort</p></article>',
                hint: '',
                options: [
                    {
                        id: 'option-K-hXMZFj0Z8pGYWRjr-ph',
                        title: 'Gut',
                        description: '',
                        value: 'Gut',
                    },
                    {
                        id: 'option-vL8GlxhT0SvNGI-OxP7tU',
                        title: 'Schlecht',
                        description: '',
                        value: 'Schlecht',
                    },
                ],
                next: [],
            },
            'question-dZQ6bW17S-GaO_qkCfAQx': {
                id: 'question-dZQ6bW17S-GaO_qkCfAQx',
                title: 'Und sonst so?',
                type: 'text',
                description:
                    '<article class="nc-markdown nc-flow"><p>Bitte gib an, was dich sonst so beschäftigt?</p></article>',
                next: [],
            },
            'question-VWyBYVfnX1SYK1yRPk4xw': {
                id: 'question-VWyBYVfnX1SYK1yRPk4xw',
                title: 'Willst du was essen?',
                type: 'single_choice',
                description: '',
                options: [
                    {
                        id: 'option-fvewqIrr8vYvMq_AOG7nP',
                        title: 'Ja, ein Eis',
                        description: '',
                        value: 'Ja, ein Eis',
                    },
                    {
                        id: 'option-jP9WotRng7atPfzwt4uPj',
                        title: 'Ja, eine Suppe',
                        description: '',
                        value: 'Ja, eine Suppe',
                    },
                    {
                        id: 'option-UtV1cItVZ8YRQrE56AxRJ',
                        title: 'Nein, danke',
                        description: '',
                        value: 'Nein, danke',
                    },
                ],
                next: [
                    {
                        questionId: 'question-Wwn3gHT9nM4g_z32u6cmq',
                        when: [
                            {
                                key: 'value',
                                operator: 'EQ',
                                compareValue: 'Ja, ein Eis',
                            },
                        ],
                    },
                    {
                        questionId: 'question-x3qlYcC0NCY9Eid-DXyh3',
                        when: [
                            {
                                key: 'value',
                                operator: 'EQ',
                                compareValue: 'Nein, danke',
                            },
                        ],
                    },
                    {
                        questionId: 'question-x3qlYcC0NCY9Eid-DXyh3',
                        when: [
                            {
                                key: 'value',
                                operator: 'EQ',
                                compareValue: 'Nein, danke',
                            },
                        ],
                    },
                ],
                hint: 'Erzähl uns, was du wirklich essen willst',
            },
            'question-x3qlYcC0NCY9Eid-DXyh3': {
                id: 'question-x3qlYcC0NCY9Eid-DXyh3',
                title: 'Letzte Frage',
                type: 'text',
                description:
                    '<article class="nc-markdown nc-flow"><p>Dann sag uns noch kurz, was dich wirklich beschäftigt</p></article>',
                next: [],
            },
        },
        questionsOrder: [
            'question-dZQ6bW17S-GaO_qkCfAQx',
            'question-VWyBYVfnX1SYK1yRPk4xw',
            'question-Wwn3gHT9nM4g_z32u6cmq',
            'question-x3qlYcC0NCY9Eid-DXyh3',
        ],
    };
</script>

<QuestionnaireRenderer
    questionnaire={json as Questionnaire}
    onFinish={answers => console.table(answers)}
></QuestionnaireRenderer>
