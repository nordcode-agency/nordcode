<script lang="ts">
import QuestionEditor from '$lib/editor/components/QuestionEditor.svelte';
import { currentQuestionnaire } from '$lib/editor/editorStore';
import { NEW_QUESTION_ID, createNewQuestion } from '../../../../lib/editor/editorStore';

interface PageData {
    data: {
        questionId: string;
    };
}

let { data }: PageData = $props();

const id = $derived(data.questionId);
const question = $derived(
    data.questionId === NEW_QUESTION_ID
        ? createNewQuestion()
        : $currentQuestionnaire?.questionnaire.questions[id],
);
</script>

{#key id}
    {#if question}
    <section class="nc-center page-center-layout">
        <QuestionEditor question={question}></QuestionEditor>
    </section>
    {:else}
    LOADING...
    {/if}
{/key}
