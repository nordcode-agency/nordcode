<script lang="ts">
    import { Input, MarkdownEditor, Select, TextArea } from '@nordcode/forms-svelte';
    import { type Question, QuestionType } from '@nordcode/questionnaire-renderer';
    import { questionHasOptions } from '@nordcode/questionnaire-renderer';
    import { Navigation } from '../../common/config/Navigation';
    import { NEW_QUESTION_ID, createOrUpdateQuestion } from '../editorStore';
    import NextQuestionEditor from './NextQuestionEditor.svelte';
    import OptionsEditor from './OptionsEditor.svelte';

    interface QuestionEditorProps {
        question: Question;
    }

    let { question }: QuestionEditorProps = $props();

    let questionUpdate = $state({ ...question, next: question.next ? [...question.next] : [] });

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

<form class="nc-card nc-form" onsubmit={createQuestion}>
    <h1 class="nc-form-title">
        {question.id === NEW_QUESTION_ID ? `Neue Frage erstellen` : `Frage bearbeiten`}
    </h1>
    <p class="nc-form-hint">
        Gib deinen Ausfüller:innen so viele Infos, wie nötig, um die besten Ergebnisse zu erziehlen.
    </p>
    <div class="nc-stack -far">
        <Input
            name={`question-${questionUpdate.id}-title`}
            label="Titel"
            id={`question-${questionUpdate.id}-title`}
            bind:value={questionUpdate.title}
        />
        <Select
            name={`question-${questionUpdate.id}-type`}
            id={`question-${questionUpdate.id}-type`}
            label={'Typ'}
            bind:value={questionUpdate.type}
            options={availableTypes}
        ></Select>
        <MarkdownEditor
            name={`question-${questionUpdate.id}-description`}
            label={'Beschreibung'}
            hint={'Markdown wird unterstützt.'}
            id={`question-${questionUpdate.id}-description`}
            optional={true}
            bind:value={questionUpdate.description}
        ></MarkdownEditor>

        <TextArea
            name={`question-${questionUpdate.id}-hint`}
            id={`question-${questionUpdate.id}-hint`}
            label={'Hinweis'}
            hint={'Ein Hinweis, wie die Frage gemeint oder zu beantworten ist'}
            optional={true}
            bind:value={questionUpdate.hint}
            splitLines={false}
        ></TextArea>
        {#if questionHasOptions(questionUpdate)}
            <OptionsEditor bind:options={questionUpdate.options}></OptionsEditor>
        {/if}

        <NextQuestionEditor
            bind:nextQuestionConfig={questionUpdate.next}
            questionId={questionUpdate.id}
            options={questionHasOptions(questionUpdate) ? questionUpdate.options : undefined}
        ></NextQuestionEditor>

        <button class="nc-button" type="submit"> Frage speichern </button>
    </div>
</form>
