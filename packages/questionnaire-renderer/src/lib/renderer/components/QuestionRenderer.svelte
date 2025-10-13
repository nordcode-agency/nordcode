<script lang="ts">
import type { QuestionnaireAnswer } from '$lib/questionnaire/models/QuestionnaireAnswers.model.ts';
import { CheckboxInputField, Input, MarkdownEditor, RadioInputField } from '@nordcode/forms-svelte';
import { type Question, QuestionType } from '../../questionnaire/models/Questionnaire.model.ts';

interface QuestionRendererProps {
    question: Question;
    answer?: QuestionnaireAnswer;
}

let { question, answer }: QuestionRendererProps = $props();
</script>

<fieldset>
    {#if question.type === QuestionType.text}
        <Input
            label={question.title}
            name={question.id}
            id={question.id}
            hint={question.hint}
            required={question.required}
            value={answer?.answer}
        ></Input>
    {:else if question.type === QuestionType.long_text}
        <MarkdownEditor
            label={question.title}
            name={question.id}
            id={question.id}
            hint={question.hint}
            required={question.required}
            value={answer?.answer as string}
        ></MarkdownEditor>
    {:else if question.type === QuestionType.multiple_choice}
        <CheckboxInputField
            label={question.title}
            name={question.id}
            id={question.id}
            hint={question.hint}
            required={question.required}
            value={answer?.answer as string}
            options={question.options.map(o => ({
                label: o.title,
                value: o.value,
                hint: o.description,
            }))}
        ></CheckboxInputField>
    {:else if question.type === QuestionType.single_choice}
        <RadioInputField
            label={question.title}
            name={question.id}
            id={question.id}
            hint={question.hint}
            required={question.required}
            value={answer?.answer as string}
            options={question.options.map(o => ({
                label: o.title,
                value: o.value,
                hint: o.description,
            }))}
        ></RadioInputField>
    {:else if question.type === QuestionType.number}
        <Input
            label={question.title}
            name={question.id}
            id={question.id}
            hint={question.hint}
            required={question.required}
            value={answer?.answer as number}
            type="number"
        ></Input>
    {/if}
</fieldset>
