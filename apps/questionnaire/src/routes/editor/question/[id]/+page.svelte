<script lang="ts">
import QuestionEditor from '$lib/editor/components/QuestionEditor.svelte';
import { currentQuestionnaire } from '$lib/editor/editorStore';
import { createNewQuestion, NEW_QUESTION_ID } from '../../../../lib/editor/editorStore';

interface PageData {
    data: {
        questionId: string;
    };
}

let { data }: PageData = $props();

const question =
    data.questionId === NEW_QUESTION_ID
        ? createNewQuestion()
        : $currentQuestionnaire?.questionnaire.questions.find((q) => q.id === data.questionId);
</script>

{#if question}
<section class="nc-center page-center-layout">
    <QuestionEditor question={question}></QuestionEditor>
</section>
{:else}
LOADING...
{/if}
