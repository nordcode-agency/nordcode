<script lang="ts">
import { QuestionnaireRenderer } from '../lib/renderer/index.ts';

const json = {
    id: 'questionnaire-bfNmIRO71UVjc0WHL3cW-',
    title: 'Neuer Fragebogen',
    description: '',
    questions: [
        {
            id: 'question-c5SD_4Kon7O4DpAA-EhiO',
            title: 'Wie gehts?',
            type: 'single_choice',
            description: 'Wie geht es dir heute?',
            options: [
                { id: 'option-_5liKlwvv86iPNd0G0tNB', title: 'Gut', description: '', value: 'Gut' },
                {
                    id: 'option-3DYR_EfRswywyJ156X7SF',
                    title: 'Schlecht',
                    description: '',
                    value: 'Schlecht',
                },
            ],
        },
    ],
};
</script>

<QuestionnaireRenderer questionnaire={json}></QuestionnaireRenderer>
