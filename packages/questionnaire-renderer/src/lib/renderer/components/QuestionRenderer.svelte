<script lang="ts">
import { type Question, QuestionType } from '../../questionnaire/models/Questionnaire.model.ts';
import { RadioInputField, CheckboxInputField, TextArea, Input } from '@nordcode/forms-svelte';

export let question: Question;
</script>

<fieldset>
     {#if question.type === QuestionType.text}
         <Input
             label={question.title}
             name={question.id}
        id={question.id}
        hint={question.description}
        optional={!question.required}></Input>
         {:else if question.type === QuestionType.long_text}
         <TextArea
             label={question.title}
             name={question.id}
        id={question.id}
        hint={question.description}
        splitLines={true}
        optional={!question.required}></TextArea>
     {:else if question.type === QuestionType.multiple_choice}
     <CheckboxInputField
         label={question.title}
         name={question.id}
        id={question.id}
        hint={question.description}
        optional={!question.required}
        options={question.options.map(o => ({
            label: o.title,
            value: o.value,
            hint: o.description,
        }))}>
    </CheckboxInputField>
     {:else if question.type === QuestionType.single_choice}
     <RadioInputField
         label={question.title}
         name={question.id}
        id={question.id}
        hint={question.description}
        optional={!question.required}
        options={question.options.map(o => ({
            label: o.title,
            value: o.value,
            hint: o.description,
        }))}>
        </RadioInputField>
     {:else if question.type === QuestionType.number}
     <Input
         label={question.title}
         name={question.id}
    id={question.id}
    hint={question.description}
    optional={!question.required}
    type="number"
    ></Input>
     {/if}
</fieldset>
