<script lang="ts">
import { currentQuestionnaire, NEW_QUESTION_ID } from '../editorStore';
import { Input } from '@nordcode/forms-svelte';
import QuestionLink from './QuestionLink.svelte';
import { Navigation } from '../../common/config/Navigation';
import { finaliseQuestionnaire } from '../utils/finaliseQuestionnaire';
import { createDataUrl } from '../utils/createDataUrl';

type Download = {
    dataUri: string;
    title: string;
};
let download: Download | null = null;

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
<form class="nc-stack -far full-width -contained -stretched nc-box" on:submit={createQuestionnaire}>
    <Input bind:errors={$currentQuestionnaire.errors.title}
           name="title"
           label="Fragebogen Titel"
           id="title"
           type="text"
           bind:value={$currentQuestionnaire.questionnaire.title}
    />
    <Input bind:errors={$currentQuestionnaire.errors.description}
           name="description"
           label="Fragebogen Beschreibung"
           id="description"
           type="text"
           optional={true}
           bind:value={$currentQuestionnaire.questionnaire.description}
    />


    <div class="nc-stack">
    <div class="nc-table" role="group" aria-labelledby="questions-table">
        <table>
            <caption id="questions-table">
            Fragen
            </caption>
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


            <button class="nc-button" type="button" on:click={createNewQuestion}>
                Frage hinzufügen
            </button>
    </div>
    <button class="nc-button" type="submit">Fragebogen erstellen</button>

    {#if download}
        <a href={download.dataUri} download="{`${download.title}.json`}">Download "{$currentQuestionnaire.questionnaire.title}"</a>
    {/if}
</form>
{/if}
