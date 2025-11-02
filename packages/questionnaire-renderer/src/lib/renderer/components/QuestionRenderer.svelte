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
    {#key question.id}
        {#if question.type === QuestionType.text}
            <Input
                label={question.label}
                name={question.id}
                id={question.id}
                hint={question.hint}
                required={question.required ?? false}
                value={answer?.answer}
            ></Input>
        {:else if question.type === QuestionType.email}
            <Input
                label={question.label}
                name={question.id}
                id={question.id}
                hint={question.hint}
                required={question.required ?? false}
                value={answer?.answer}
                type="email"
            ></Input>
        {:else if question.type === QuestionType.phone}
            <Input
                label={question.label}
                name={question.id}
                id={question.id}
                hint={question.hint}
                required={question.required ?? false}
                value={answer?.answer}
                type="phone"
            ></Input>
        {:else if question.type === QuestionType.date}
            <Input
                label={question.label}
                name={question.id}
                id={question.id}
                hint={question.hint}
                required={question.required ?? false}
                value={answer?.answer}
                type="date"
            ></Input>
        {:else if question.type === QuestionType.long_text}
            <TextArea
                label={question.label}
                name={question.id}
                id={question.id}
                hint={question.hint}
                required={question.required ?? false}
                value={answer?.answer as string}
            ></TextArea>
        {:else if question.type === QuestionType.multiple_choice}
            <CheckboxInputField
                label={question.label}
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
                label={question.label}
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
                label={question.label}
                name={question.id}
                id={question.id}
                hint={question.hint}
                required={question.required ?? false}
                value={answer?.answer as number}
                type="number"
            ></Input>
        {:else if question.type === QuestionType.date_time}
            <DateTimeInput
                label={question.label}
                name={question.id}
                id={question.id}
                hint={question.hint}
                required={question.required ?? false}
                value={answer?.answer as Date}
            ></DateTimeInput>
        {:else if question.type === QuestionType.image}
            <ImageInput
                label={question.label}
                name={question.id}
                id={question.id}
                hint={question.hint}
                required={question.required ?? false}
                value={answer?.answer as string}
                maxSizeInBytes={question.maxSizeInBytes}
            ></ImageInput>
        {/if}
    {/key}
</fieldset>
