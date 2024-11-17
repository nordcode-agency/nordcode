<script lang="ts">
    import RendererLayout from './RendererLayout.svelte';
    import QuestionRenderer from './QuestionRenderer.svelte';
    import { goToNextQuestion, answerQuestion, rendererStore } from '../store/rendererStore.ts';
    import type {
        AnswerValue,
        QuestionnaireAnswer,
    } from '$lib/questionnaire/models/QuestionnaireAnswers.model.ts';
    import type { Question } from '$lib/index.ts';
    import type { FormEventHandler } from 'svelte/elements';

    let currentQuestion: Question | undefined = $derived(
        $rendererStore?.questionnaire?.questions[$rendererStore.currentQuestionId],
    );

    let currentAnswer: QuestionnaireAnswer | undefined = $derived(
        $rendererStore.answers[$rendererStore.currentQuestionIdx] ?? {
            question: $rendererStore?.questionnaire?.questions[$rendererStore.currentQuestionId],
            answer: undefined,
        },
    );

    const modifierKey = navigator.userAgent.includes('Mac') ? '⌘' : 'Strg';

    const answerCurrentQuestion = (form: HTMLFormElement) => {
        if (!currentQuestion) {
            return;
        }

        const formData = new FormData(form as HTMLFormElement);
        const answer = formData.get(currentQuestion.id);

        if (!form.checkValidity()) {
            // @todo: show errors
            return;
        }

        if (answer === '' || answer === undefined || answer === null) {
            skipQuestion();
            return;
        }
        answerQuestion(answer as AnswerValue);
        goToNextQuestion();
    };

    const skipQuestion = () => {
        answerQuestion('(nicht beantwortet)');
        goToNextQuestion();
    };

    const onFormSubmit: FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();
        event.stopPropagation();

        answerCurrentQuestion(event.currentTarget);
    };

    const submitForm = () => {
        if (!currentQuestion) {
            return;
        }

        const form = document.getElementById(`${currentQuestion.id}-form`) as HTMLFormElement;
        if (!form) {
            return;
        }
        answerCurrentQuestion(form);
    };

    const handleKeyboardSubmit = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            event.stopPropagation();
            submitForm();
        }
    };

    $effect(() => {
        document.addEventListener('keydown', handleKeyboardSubmit);

        return () => {
            document.removeEventListener('keydown', handleKeyboardSubmit);
        };
    });
</script>

{#if currentQuestion}
    <RendererLayout>
        {#snippet content()}
            <form
                class="nc-stack -far -contained -stretched"
                id={`${currentQuestion.id}-form`}
                onsubmit={onFormSubmit}
            >
                <div class="nc-stack -nogap">
                    <span class="nc-slub -muted">{$rendererStore?.questionnaire?.title}</span>
                    <h1>{currentQuestion.title}</h1>
                </div>
                {#if currentQuestion.description}
                    {@html currentQuestion.description}
                {/if}
                <QuestionRenderer question={currentQuestion} answer={currentAnswer} />
            </form>
        {/snippet}
        {#snippet controls()}
            <div class="nc-cluster -centered -near">
                <button class="nc-button -primary" type="button" onclick={submitForm}>
                    <span>Weiter</span>
                </button>
                <small>
                    oder <kbd>{modifierKey}</kbd> +
                    <kbd>⏎</kbd> drücken
                </small>
            </div>
        {/snippet}
    </RendererLayout>
{/if}
