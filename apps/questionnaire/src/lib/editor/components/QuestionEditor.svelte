<script lang="ts">
import { Input, Select, TextArea } from '@nordcode/forms-svelte';
import { Navigation } from '../../common/config/Navigation';
import { type Question, QuestionType } from '@nordcode/questionnaire-renderer';
import { questionHasOptions } from '@nordcode/questionnaire-renderer';
import { createOrUpdateQuestion } from '../editorStore';
import OptionsEditor from './OptionsEditor.svelte';

export let question: Question;

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
    createOrUpdateQuestion(question);
    window.location.href = Navigation.editor.url;
};

const updateQuestionOptions = (question: Question) => {
    if (questionHasOptions(question) && question.options === undefined) {
        question.options = [];
    }
};

$: updateQuestionOptions(question);
</script>

<form class="nc-stack -far full-width -contained -stretched nc-box" on:submit={createQuestion}>
<fieldset class="nc-fieldset nc-stack">
        <Input
            name="{`question-${question.id}-title`}"
            label="Titel"
            id="{`question-${question.id}-title`}"
            bind:value={question.title} />
        <TextArea
            name={`question-${question.id}-description`}
            label={"Beschreibung"}
            id={`question-${question.id}-description`}
            optional={true}
            bind:value={question.description}
            ></TextArea>
        <Select
            name={`question-${question.id}-type`}
            id={`question-${question.id}-description`}
            label={"Typ"}
            bind:value={question.type}
            options={availableTypes}
        >
        </Select>
        {#if questionHasOptions(question)}
            <OptionsEditor bind:options={question.options}></OptionsEditor>
        {/if}
    </fieldset>
<button class="nc-button" type="submit">
    Frage speichern
</button>
</form>
