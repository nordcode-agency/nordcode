<script lang="ts">
import type { Questionnaire } from '$lib/index.ts';
import { QuestionnaireRenderer } from '../lib/renderer/index.ts';

const json = {
    'id': 'questionnaire-mY9P_63BkEzaee3iAbs4W',
    'title': 'Erstelle deinen Beitrag',
    'description':
        'Bitte beachte dabei unsere [Richtlinien](/richtlinien/) für Beiträge. Wenn du Genaueres über den Prozess wissen möchtest, schau dir unsere [FAQs](/faqs/) an.\n',
    'questions': {
        'question-HFRSvzU-qzbseg7A0jH8o': {
            'id': 'question-HFRSvzU-qzbseg7A0jH8o',
            'title': 'Dein Name',
            'type': 'text',
            'description': 'Damit deine Nachbarn wissen, von wem der Beitrag ist, gib bitte deinen Namen an.',
            'next': [],
            'hint': 'Kann auch der Name deiner Organisation sein.',
        },
        'question-oWfa1Sm5mCnyHbQx772_w': {
            'id': 'question-oWfa1Sm5mCnyHbQx772_w',
            'title': 'In welche Kategorie fällt dein Beitrag?',
            'type': 'single_choice',
            'description': 'Anhand der Kategorie können andere deinen Beitrag besser einordnen.',
            'next': [],
            'options': [{
                'id': 'option-8H885_PP2M2KoVU82bPFq',
                'title': 'Veranstaltung',
                'description': 'Alles von Theateraufführung bis Informationsabend.',
                'value': 'Veranstaltung',
            }, {
                'id': 'option-ZDk2ca1GBL1wbk3wp6o6w',
                'title': 'Info',
                'description': 'Verkündigungen, Benachrichtungen, etc.',
                'value': 'Info',
            }, {
                'id': 'option-TsC5-i0gvyQoD3R8kt7nd',
                'title': 'Gesucht & Gefunden',
                'description': 'Du suchst etwas oder hast etwas gefunden.',
                'value': 'Gesucht & Gefunden',
            }, {
                'id': 'option-i7PseAK5Mgumx0pfB8JO2',
                'title': 'Nachbarschaftshilfe',
                'description': 'Du suchst Hilfe bei etwas oder möchtest deine Hilfe anbieten.',
                'value': 'Nachbarschaftshilfe',
            }],
        },
        'question-jCRan3sz82x6x2tdatYA6': {
            'id': 'question-jCRan3sz82x6x2tdatYA6',
            'title': 'Gib deinem Beitrag einen Titel',
            'type': 'text',
            'description':
                'Ein kurzer, klarer Titel sorgt dafür, dass deine Nachbarn auf den ersten Blick wissen, worum es geht.',
            'next': [],
        },
        'question-qOIpe8i2Ve9iRnvNBTCFw': {
            'id': 'question-qOIpe8i2Ve9iRnvNBTCFw',
            'title': 'Hat dein Beitrag ein Startdatum?',
            'type': 'single_choice',
            'description':
                'Entweder der Zeitpunkt, ab dem dein Beitrag gilt oder wann er beginnt. Wenn du kein Startdatum\nangibst, gilt dein Beitrag ab sofort.',
            'next': [{
                'questionId': 'question-ipu4BIPmJeZiTqEe1cgaE',
                'when': [{ 'key': 'value', 'operator': 'EQ', 'compareValue': 'Nein' }],
            }],
            'options': [{
                'id': 'option-wO4E8O-kJLPBalRwGQIbB',
                'title': 'Ja, ich möchte ein Startdatum angeben',
                'description': '',
                'value': 'Ja',
            }, {
                'id': 'option-tXBb2y4ooCBb1CY8N5mge',
                'title': 'Nein, ich habe kein Startdatum',
                'description': '',
                'value': 'Nein',
            }],
        },
        'question-7SxnI7OitrFUQBJeV37UA': {
            'id': 'question-7SxnI7OitrFUQBJeV37UA',
            'title': 'Ab wann beginnt dein Beitrag?',
            'type': 'date_time',
            'description':
                'Gib für eine **Veranstaltung** an, wann sie losgeht. Für alle anderen Kategorien ein Datum, ab wann dein Beitrag veröffentlicht werden soll.',
            'next': [],
        },
        'question-ipu4BIPmJeZiTqEe1cgaE': {
            'id': 'question-ipu4BIPmJeZiTqEe1cgaE',
            'title': 'Hast du ein Vorschaubild für deinen Beitrag?',
            'type': 'image',
            'maxSizeInBytes': 1048576,
            'description':
                'Ein Bild verleiht deinem Beitrag noch mehr Ausdruck. Reiche hier auch gerne deinen Flyer als Bild ein.',
            'next': [],
        },
    },
    'questionsOrder': [
        'question-HFRSvzU-qzbseg7A0jH8o',
        'question-oWfa1Sm5mCnyHbQx772_w',
        'question-jCRan3sz82x6x2tdatYA6',
        'question-qOIpe8i2Ve9iRnvNBTCFw',
        'question-7SxnI7OitrFUQBJeV37UA',
        'question-ipu4BIPmJeZiTqEe1cgaE',
    ],
};
</script>

<QuestionnaireRenderer
    questionnaire={json as Questionnaire}
    onFinish={answers => console.table(answers)}
></QuestionnaireRenderer>
