<script lang="ts">
import {
    CheckboxInputField,
    DateTimeInput,
    ImageInput,
    Input,
    RadioInputField,
    TextArea,
} from '@nordcode/forms-svelte';
import { type Question, QuestionType } from '../../questionnaire/models/Questionnaire.model.ts';
import type { QuestionnaireAnswer } from '../../questionnaire/models/QuestionnaireAnswers.model.ts';

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
            required={question.required ?? false}
            value={answer?.answer}
        ></Input>
    {:else if question.type === QuestionType.long_text}
        <TextArea
            label={question.title}
            name={question.id}
            id={question.id}
            hint={question.hint}
            required={question.required ?? false}
            value={answer?.answer as string}
        ></TextArea>
    {:else if question.type === QuestionType.multiple_choice}
        <CheckboxInputField
            label={question.title}
            name={question.id}
            id={question.id}
            hint={question.hint}
            required={question.required ?? false}
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
            required={question.required ?? false}
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
            required={question.required ?? false}
            value={answer?.answer as number}
            type="number"
        ></Input>
    {:else if question.type === QuestionType.date_time}
        <DateTimeInput
            label={question.title}
            name={question.id}
            id={question.id}
            hint={question.hint}
            required={question.required ?? false}
            value={answer?.answer as Date}
        ></DateTimeInput>
    {:else if question.type === QuestionType.image}
        <ImageInput
            label={question.title}
            name={question.id}
            id={question.id}
            hint={question.hint}
            required={question.required ?? false}
            value={answer?.answer as string}
        ></ImageInput>
    {/if}
</fieldset>
