<script lang="ts">
import { currentQuestionnaire, NEW_QUESTION_ID } from '../editorStore';
import { Input, MarkdownEditor } from '@nordcode/forms-svelte';
import QuestionLink from './QuestionLink.svelte';
import { Navigation } from '../../common/config/Navigation';
import { finaliseQuestionnaire } from '../utils/finaliseQuestionnaire';
import { createDataUrl } from '../utils/createDataUrl';

type Download = {
    dataUri: string;
    title: string;
};

let download: Download | null = $state(null);

const createQuestionnaire = async (event: SubmitEvent) => {
    event.preventDefault();
    const cleanQuestionnaire = await finaliseQuestionnaire($currentQuestionnaire.questionnaire);
    download = {
        dataUri: createDataUrl(cleanQuestionnaire),
        title: encodeURI(cleanQuestionnaire.title),
    };
};

const createNewQuestion = () => {
    window.location.href = Navigation.question.url.replace(':id', NEW_QUESTION_ID);
};
</script>

{#if $currentQuestionnaire}
<form class="nc-card nc-form" onsubmit={createQuestionnaire}>
    <h1 class="nc-form-title">Fragenbogen erstellen</h1>

    <p class="nc-form-hint">Zuerst erstellen wir eine grobe Beschreibung. Diese wird den Ausfüller:innen zum Start angezeigt. Idealerweise beschreibt sie den Zweck des Fragebogens.</p>

    <div class="nc-stack -far">
    <Input errors={$currentQuestionnaire.errors.title}
           name="title"
           label="Fragebogen Titel"
           id="title"
           type="text"
           bind:value={$currentQuestionnaire.questionnaire.title}
    />
    <MarkdownEditor errors={$currentQuestionnaire.errors.description}
           name="description"
           label="Fragebogen Beschreibung"
           id="description"
           type="text"
           hint="Markdown wird unterstützt."
           optional={true}
           bind:value={$currentQuestionnaire.questionnaire.description}
    />


    <fieldset style="inline-size: 100%;">
        <legend>Fragen</legend>
        <div class="nc-stack">
    <div class="nc-table" role="group">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Typ</th>
                    <th>Aktionen</th>
                </tr>
            </thead>
            <tbody>
                {#each $currentQuestionnaire.questionnaire.questions as question (question.id)}
                    <QuestionLink question={question}></QuestionLink>
                {/each}
            </tbody>
        </table>
    </div>

            <button class="nc-button" type="button" onclick={createNewQuestion}>
                Frage hinzufügen
            </button>
            </div>
            </fieldset>

    <hr>

    <button class="nc-button" type="submit">Fragebogen erstellen</button>

    {#if download}
        <a href={download.dataUri} download={`${download.title}.json`}>Download "{$currentQuestionnaire.questionnaire.title}"</a>
    {/if}
    </div>
</form>
{/if}
