<script lang="ts">
import type { Questionnaire } from '$lib/index.ts';
import { QuestionnaireRenderer } from '../lib/renderer/index.ts';

const json = {
    'id': 'questionnaire-mY9P_63BkEzaee3iAbs4W',
    'title': 'Erstelle deinen Beitrag',
    'description':
        '<article class="nc-markdown nc-flow"><p>Bitte beachte dabei unsere <a href="/richtlinien/">Richtlinien</a> für Beiträge. Wenn du Genaueres über den Prozess wissen möchtest, schau dir unsere <a href="/faqs/">FAQs</a> an.</p></article>',
    'questions': {
        'question-HFRSvzU-qzbseg7A0jH8o': {
            'id': 'question-HFRSvzU-qzbseg7A0jH8o',
            'title': 'Wer bist du?',
            'type': 'text',
            'description':
                '<article class="nc-markdown nc-flow"><p>Damit deine Nachbarn wissen, von wem der Beitrag ist, gib bitte deinen Namen an.</p></article>',
            'next': [],
            'hint': 'Kann auch der Name deiner Organisation sein.',
            'required': true,
            'label': 'Dein Name',
        },
        'question-oWfa1Sm5mCnyHbQx772_w': {
            'id': 'question-oWfa1Sm5mCnyHbQx772_w',
            'title': 'In welche Kategorie fällt dein Beitrag?',
            'type': 'single_choice',
            'description':
                '<article class="nc-markdown nc-flow"><p>Anhand der Kategorie können andere deinen Beitrag besser einordnen.</p></article>',
            'next': [],
            'options': [
                {
                    'id': 'option-8H885_PP2M2KoVU82bPFq',
                    'title': 'Veranstaltung',
                    'description': 'Alles von Theateraufführung bis Informationsabend.',
                    'value': 'Veranstaltung',
                },
                {
                    'id': 'option-ZDk2ca1GBL1wbk3wp6o6w',
                    'title': 'Info',
                    'description': 'Verkündigungen, Benachrichtungen, etc.',
                    'value': 'Info',
                },
                {
                    'id': 'option-TsC5-i0gvyQoD3R8kt7nd',
                    'title': 'Gesucht & Gefunden',
                    'description': 'Du suchst etwas oder hast etwas gefunden.',
                    'value': 'Gesucht & Gefunden',
                },
                {
                    'id': 'option-i7PseAK5Mgumx0pfB8JO2',
                    'title': 'Nachbarschaftshilfe',
                    'description': 'Du suchst Hilfe bei etwas oder möchtest deine Hilfe anbieten.',
                    'value': 'Nachbarschaftshilfe',
                },
            ],
            'required': true,
            'label': 'Beitragskategorie',
        },
        'question-jCRan3sz82x6x2tdatYA6': {
            'id': 'question-jCRan3sz82x6x2tdatYA6',
            'title': 'Gib deinem Beitrag einen Titel',
            'type': 'text',
            'description':
                '<article class="nc-markdown nc-flow"><p>Ein kurzer, klarer Titel sorgt dafür, dass deine Nachbarn auf den ersten Blick wissen, worum es geht.</p></article>',
            'next': [],
            'required': true,
        },
        'question-qOIpe8i2Ve9iRnvNBTCFw': {
            'id': 'question-qOIpe8i2Ve9iRnvNBTCFw',
            'title': 'Hat dein Beitrag ein Startdatum?',
            'type': 'single_choice',
            'description':
                '<article class="nc-markdown nc-flow"><p>Entweder der Zeitpunkt, ab dem dein Beitrag gilt oder wann er beginnt. Wenn du kein Startdatum angibst, gilt dein Beitrag ab sofort.</p></article>',
            'next': [
                {
                    'questionId': 'question-jR8ZuFQJ9fCVlUJ-oyuHj',
                    'when': [
                        {
                            'key': 'value',
                            'operator': 'EQ',
                            'compareValue': 'Nein',
                        },
                    ],
                },
            ],
            'options': [
                {
                    'id': 'option-wO4E8O-kJLPBalRwGQIbB',
                    'title': 'Ja, ich möchte ein Startdatum angeben',
                    'description': '',
                    'value': 'Ja',
                },
                {
                    'id': 'option-tXBb2y4ooCBb1CY8N5mge',
                    'title': 'Nein, ich habe kein Startdatum',
                    'description': '',
                    'value': 'Nein',
                },
            ],
            'required': true,
            'label': 'Startdatum',
        },
        'question-7SxnI7OitrFUQBJeV37UA': {
            'id': 'question-7SxnI7OitrFUQBJeV37UA',
            'title': 'Ab wann beginnt dein Beitrag?',
            'type': 'date_time',
            'description':
                '<article class="nc-markdown nc-flow"><p>Gib für eine <strong>Veranstaltung</strong> an, wann sie losgeht. Für alle anderen Kategorien ein Datum, ab wann dein Beitrag veröffentlicht werden soll.</p></article>',
            'next': [],
            'label': 'Startdatum',
            'required': true,
        },
        'question-ipu4BIPmJeZiTqEe1cgaE': {
            'id': 'question-ipu4BIPmJeZiTqEe1cgaE',
            'title': 'Hast du ein Vorschaubild für deinen Beitrag?',
            'type': 'image',
            'description':
                '<article class="nc-markdown nc-flow"><p>Ein Bild verleiht deinem Beitrag noch mehr Ausdruck. Reiche hier auch gerne deinen Flyer als Bild ein.</p></article>',
            'next': [],
            'label': 'Vorschaubild',
            'maxSizeInBytes': 1048576,
        },
        'question-jR8ZuFQJ9fCVlUJ-oyuHj': {
            'id': 'question-jR8ZuFQJ9fCVlUJ-oyuHj',
            'title': 'Gibt es ein klares Ende für deinen Beitrag?',
            'type': 'single_choice',
            'description':
                '<article class="nc-markdown nc-flow"><p>Wenn du kein Enddatum angibst, bleibt dein Beitrag für 30 Tage sichtbar.</p></article>',
            'next': [
                {
                    'questionId': 'question-SAE2DL4YDvDEkkrC2mQx6',
                    'when': [
                        {
                            'key': 'value',
                            'operator': 'EQ',
                            'compareValue': 'Nein',
                        },
                    ],
                },
            ],
            'required': true,
            'options': [
                {
                    'id': 'option-1hMNrzXa8D6TBYkFLX7uH',
                    'title': 'Ja, es gibt ein Ende',
                    'description': '',
                    'value': 'Ja',
                },
                {
                    'id': 'option-RYPL4iZSHacbXEvteAJPb',
                    'title': 'Nein, es gibt kein klares Ende',
                    'description': '',
                    'value': 'Nein',
                },
            ],
            'label': 'Gibt es ein Enddatum?',
        },
        'question-gk9uvoiKsm19frXOjK7EM': {
            'id': 'question-gk9uvoiKsm19frXOjK7EM',
            'title': 'Wann ist das Ende deines Beitrags?',
            'type': 'date_time',
            'description':
                '<article class="nc-markdown nc-flow"><p>Gib an, wie lange dein Beitrag gültig ist.</p></article>',
            'next': [],
            'hint': 'Wenn du keine klare Uhrzeit hast, gib einfach 0:00 Uhr an.',
            'label': 'Enddatum',
            'required': true,
        },
        'question-vxJF2f0nFF53478hGOHmV': {
            'id': 'question-vxJF2f0nFF53478hGOHmV',
            'title': 'Worum geht es bei deinem Beitrag?',
            'type': 'long_text',
            'description':
                '<article class="nc-markdown nc-flow"><p>Das ist der Hauptinhalt deines Beitrags. Erzähl uns alles. Je mehr Details, desto besser.</p></article>',
            'next': [],
            'hint': '',
            'required': true,
            'label': 'Beschreibung',
        },
        'question-8V6Na6zmTm0ticmBXpP9b': {
            'id': 'question-8V6Na6zmTm0ticmBXpP9b',
            'title': 'Fasse den Inhalt nochmal kurz zusammen',
            'type': 'long_text',
            'description':
                '<article class="nc-markdown nc-flow"><p>Für die Vorschau brauchen wir noch eine Kurzbeschreibung. Je klarer, desto besser.</p></article>',
            'next': [],
            'hint': 'Am besten maximal 200 Zeichen.',
            'required': true,
            'label': 'Kurzbeschreibung',
        },
        'question-Y1azGo6YnyLCHZvOuvyV3': {
            'id': 'question-Y1azGo6YnyLCHZvOuvyV3',
            'title': 'Gibt es einen Ort für deinen Beitrag?',
            'type': 'long_text',
            'description':
                '<article class="nc-markdown nc-flow"><p>Gibt es eine Adresse? Oder eine grobe Ortsbeschreibung?</p><p>Gib für deine Veranstaltung eine möglichst genaue Adresse an, damit dich Leute finden. Für die anderen Kategorien reicht für deine Privatsphäre auch der Ortsname.</p></article>',
            'next': [],
            'hint': 'So genau wie nötig.',
            'label': 'Adresse',
        },
        'question-SAE2DL4YDvDEkkrC2mQx6': {
            'id': 'question-SAE2DL4YDvDEkkrC2mQx6',
            'title': 'Gibt es einen Link für deinen Beitrag?',
            'type': 'text',
            'description': '',
            'next': [],
            'label': 'Link',
        },
        'question-BdnF07eGtGdt2kNdHKzy1': {
            'id': 'question-BdnF07eGtGdt2kNdHKzy1',
            'title': 'Kann man dich per E-Mail erreichen?',
            'type': 'email',
            'description':
                '<article class="nc-markdown nc-flow"><p>Gib am besten entweder hier deine E-Mail oder im nächsten Schritt deine Telefonnummer an, damit deine Nachbarn dich bei Rückfragen erreichen können.</p></article>',
            'next': [],
            'label': 'E-Mail',
        },
        'question-LHgtWgm9JJbYDoSV0t2HI': {
            'id': 'question-LHgtWgm9JJbYDoSV0t2HI',
            'title': 'Kann man dich per Telefon erreichen?',
            'type': 'phone',
            'description': '',
            'next': [],
            'label': 'Telefonnummer',
        },
    },
    'questionsOrder': [
        'question-HFRSvzU-qzbseg7A0jH8o',
        'question-oWfa1Sm5mCnyHbQx772_w',
        'question-jCRan3sz82x6x2tdatYA6',
        'question-vxJF2f0nFF53478hGOHmV',
        'question-8V6Na6zmTm0ticmBXpP9b',
        'question-Y1azGo6YnyLCHZvOuvyV3',
        'question-qOIpe8i2Ve9iRnvNBTCFw',
        'question-7SxnI7OitrFUQBJeV37UA',
        'question-jR8ZuFQJ9fCVlUJ-oyuHj',
        'question-gk9uvoiKsm19frXOjK7EM',
        'question-SAE2DL4YDvDEkkrC2mQx6',
        'question-BdnF07eGtGdt2kNdHKzy1',
        'question-LHgtWgm9JJbYDoSV0t2HI',
        'question-ipu4BIPmJeZiTqEe1cgaE',
    ],
    'summaryText':
        'Hier sind nochmal alle deine Angaben im Überblick. Wenn du etwas ändern möchtest, klicke einfach auf "Bearbeiten" für das Feld.',
    'finalCTA': 'Beitrag erstellen',
};
</script>

<QuestionnaireRenderer
    questionnaire={json as Questionnaire}
    onFinish={answers => console.table(answers)}
></QuestionnaireRenderer>
