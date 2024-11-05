<script lang="ts">
import { Input, MarkdownEditor } from '@nordcode/forms-svelte';
import { Navigation } from '../../common/config/Navigation';
import { NEW_QUESTION_ID, currentQuestionnaire } from '../editorStore';
import { createDataUrl } from '../utils/createDataUrl';
import { finaliseQuestionnaire } from '../utils/finaliseQuestionnaire';
import QuestionLink from './QuestionLink.svelte';

type Download = {
    dataUri: string;
    title: string;
};

let download: Download | null = $state(null);

const createQuestionnaire = async (event: SubmitEvent) => {
    event.preventDefault();
    if (!$currentQuestionnaire?.questionnaire) {
        return;
    }

    const cleanQuestionnaire = await finaliseQuestionnaire($currentQuestionnaire.questionnaire);
    download = {
        dataUri: createDataUrl(cleanQuestionnaire),
        title: encodeURI(cleanQuestionnaire.title),
    };
};

const createNewQuestion = () => {
    window.location.href = Navigation.question.url.replace(':id', NEW_QUESTION_ID);
};

const orderedQuestions = $derived.by(() => {
    return (
        $currentQuestionnaire?.questionnaire.questionsOrder.map((questionId) => {
            return $currentQuestionnaire.questionnaire.questions[questionId];
        }) ?? []
    );
});
</script>

{#if $currentQuestionnaire}
    <form class="nc-card nc-form" onsubmit={createQuestionnaire}>
        <h1 class="nc-form-title">Fragenbogen erstellen</h1>

        <p class="nc-form-hint">
            Zuerst erstellen wir eine grobe Beschreibung. Diese wird den Ausfüller:innen zum Start
            angezeigt. Idealerweise beschreibt sie den Zweck des Fragebogens.
        </p>

        <div class="nc-stack -far">
            <Input
                errors={$currentQuestionnaire.errors.title}
                name="title"
                label="Fragebogen Titel"
                id="title"
                type="text"
                bind:value={$currentQuestionnaire.questionnaire.title}
            />
            <MarkdownEditor
                errors={$currentQuestionnaire.errors.description}
                name="description"
                label="Fragebogen Beschreibung"
                id="description"
                hint="Markdown wird unterstützt."
                optional={true}
                bind:value={$currentQuestionnaire.questionnaire.description}
            />

            <fieldset style="inline-size: 100%;">
                <legend>Fragen</legend>
                <div class="nc-stack">
                    <div class="nc-table questionsTable" role="group">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Titel</th>
                                    <th>Typ</th>
                                    <th>Aktionen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each orderedQuestions as question, idx}
                                    <QuestionLink {question} questionOrderIdx={idx}></QuestionLink>
                                {/each}
                            </tbody>
                        </table>
                    </div>

                    <button class="nc-button -outline" type="button" onclick={createNewQuestion}>
                        Frage hinzufügen
                    </button>
                </div>
            </fieldset>

            <hr />


            <button class="nc-button" type="submit">Fragebogen erstellen</button>

            {#if download}
                <a href={download.dataUri} download={`${download.title}.json`}>
                    Download "{$currentQuestionnaire.questionnaire.title}"
                </a>
            {/if}
        </div>
    </form>
{/if}

<style>
    .questionsTable thead > tr {
        &:before,
        &:after {
            content: '';
            position: absolute;
            inline-size: 100%;
            block-size: 2px;
            inset-inline: 0;
        }
    }
</style>
