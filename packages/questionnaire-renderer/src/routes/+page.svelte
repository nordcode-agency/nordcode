<script lang="ts">
import type { Questionnaire } from '$lib/index.ts';
import { QuestionnaireRenderer } from '../lib/renderer/index.ts';

const json = {
    id: 'questionnaire-L8ks-Rch1P54Ey96nLQja',
    title: 'Neuer Fragebogen',
    description:
        '<article class="nc-markdown nc-flow"><p>Das ist fasf fas</p><ul><li>dasd</li><li>dasd</li><li>asdsada</li></ul></article>',
    questions: [
        {
            id: 'question-fO1p45J3etnGfPJcUjNu5',
            title: 'Neue Frageadfasdf',
            type: 'long_text',
            description:
                '<article class="nc-markdown nc-flow"><p>Wie geht\'s wie stehts?</p><p>adfasf asdfasdf fasf</p><ul><li>hallo</li></ul></article>',
            hint: 'Hier kannst du angeben, was du willst',
        },
        {
            id: 'question-B_O11T7C_ebGch7D4kmfJ',
            title: 'Neue Frage',
            type: 'text',
            description: '<article class="nc-markdown nc-flow"><h1>hallo</h1></article>',
        },
        {
            id: 'question-X3VV_7l9MnJvTm3vMXEGN',
            title: 'Wie wärs mit einer Options Frage',
            type: 'multiple_choice',
            description:
                '<article class="nc-markdown nc-flow"><h2>Options sind was feines</h2><ul><li>Was ist los?</li><li>Wie geht es dir?</li><li>Was willst du machen?</li></ul><p><em>nichts</em></p></article>',
            options: [
                {
                    id: 'option-qvUqFp9juzvvczRmjw9Vc',
                    title: 'Neue Option 123',
                    description: 'Sogar mit Beschreibung, aktuell aber nur einfacher',
                    value: 'Neue Options 23',
                },
                {
                    id: 'option-mC6DUskpBp5DsXOPJ95Kw',
                    title: 'Neue Option 234',
                    description: '',
                    value: 'Option 234',
                },
            ],
        },
    ],
};
</script>

<QuestionnaireRenderer questionnaire={json as Questionnaire}></QuestionnaireRenderer>
