<script lang="ts">
import { Input, MarkdownEditor, Select, TextArea } from '@nordcode/forms-svelte';
import { Navigation } from '../../common/config/Navigation';
import { type Question, QuestionType } from '@nordcode/questionnaire-renderer';
import { questionHasOptions } from '@nordcode/questionnaire-renderer';
import { createOrUpdateQuestion } from '../editorStore';
import OptionsEditor from './OptionsEditor.svelte';

interface QuestionEditorProps {
    question: Question;
}

let { question }: QuestionEditorProps = $props();

let questionUpdate = $state({ ...question });

export const availableTypesRecord: Record<QuestionType, string> = {
    [QuestionType.text]: 'Text',
    [QuestionType.long_text]: 'Langer Text',
    [QuestionType.multiple_choice]: 'Multiple Choice',
    [QuestionType.single_choice]: 'Single Choice',
    [QuestionType.number]: 'Zahl',
};

export const availableTypes = Object.entries(availableTypesRecord).map(([key, value]) => ({
    value: key,
    label: value,
}));

const createQuestion = async (event: SubmitEvent) => {
    event.preventDefault();

    // @todo: remove options if question type does not support options
    createOrUpdateQuestion(questionUpdate);
    window.location.href = Navigation.editor.url;
};

const updateQuestionOptions = (q: Question) => {
    if (questionHasOptions(q) && q.options === undefined) {
        q.options = [];
    }
};

$effect(() => {
    updateQuestionOptions(questionUpdate);
});
</script>

<form class="nc-stack -far full-width -contained -stretched nc-box" onsubmit={createQuestion}>
<fieldset class="nc-fieldset nc-stack">
        <Input
            name={`question-${questionUpdate.id}-title`}
            label="Titel"
            id={`question-${questionUpdate.id}-title`}
            bind:value={questionUpdate.title} />
        <MarkdownEditor
            name={`question-${questionUpdate.id}-description`}
            label={"Beschreibung"}
            id={`question-${questionUpdate.id}-description`}
            optional={true}
            bind:value={questionUpdate.description}
        ></MarkdownEditor>
        <Select
            name={`question-${questionUpdate.id}-type`}
            id={`question-${questionUpdate.id}-type`}
            label={"Typ"}
            bind:value={questionUpdate.type}
            options={availableTypes}
        >
        </Select>
        <TextArea
            name={`question-${questionUpdate.id}-hint`}
            id={`question-${questionUpdate.id}-hint`}
            label={"Hinweis"}
            hint={"Ein Hinweis, wie die Frage gemeint oder zu beantworten ist"}
            optional={true}
            bind:value={questionUpdate.hint}
            splitLines={false}
        >
        </TextArea>
        {#if questionHasOptions(questionUpdate)}
            <OptionsEditor bind:options={questionUpdate.options}></OptionsEditor>
        {/if}
    </fieldset>
<button class="nc-button" type="submit">
    Frage speichern
</button>
</form>
