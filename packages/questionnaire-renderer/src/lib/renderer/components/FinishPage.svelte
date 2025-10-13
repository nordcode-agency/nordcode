<script lang="ts">
import type { AnswerValue } from '$lib/questionnaire/models/QuestionnaireAnswers.model.ts';
import { rendererStore } from '../store/rendererStore.ts';
import AnswerDisplay from './AnswerDisplay.svelte';
import RendererLayout from './RendererLayout.svelte';

type Props = {
    onFinish?: (
        answers: {
            questionId: string;
            title: string;
            answer: AnswerValue;
        }[],
    ) => void;
};

let { onFinish }: Props = $props();

const finishQuestionnaire = () => {
    const formattedAnswers = $rendererStore.answers.map(answer => ({
        questionId: answer.question.id,
        title: answer.question.title,
        answer: answer.answer,
    }));

    if (onFinish) {
        onFinish(formattedAnswers);
    }
};
</script>

<RendererLayout>
    {#snippet content()}
        <h1>{$rendererStore?.questionnaire?.title}</h1>
        <p>Danke, dass du mit gemacht hast</p>
        <p>
            Hier sind nochmal deine Antworten. Wenn du nicht zufrieden bist, kannst du sie nochmal überarbeiten.
        </p>
        <AnswerDisplay></AnswerDisplay>
    {/snippet}
    {#snippet controls()}
        <button class="nc-button -primary" type="button" onclick={finishQuestionnaire}>
            Ich bin fertig
        </button>
    {/snippet}
</RendererLayout>
