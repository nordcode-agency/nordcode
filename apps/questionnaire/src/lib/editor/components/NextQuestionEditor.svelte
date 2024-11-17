<script lang="ts">
    import { Navigation } from '$lib/common/config/Navigation';
    import { Select, SwitchInput } from '@nordcode/forms-svelte';
    import type { NextQuestionConfig } from '@nordcode/questionnaire-renderer';
    import type { Option } from '@nordcode/questionnaire-renderer';
    import { NEW_QUESTION_ID, currentQuestionnaire } from '../editorStore';

    interface Props {
        nextQuestionConfig: NextQuestionConfig[];
        questionId: string;
        options?: Option[];
    }

    let { nextQuestionConfig = $bindable(), questionId, options }: Props = $props();

    let enableCustomOrder = $state(nextQuestionConfig.length > 0);

    const nextQuestion = $derived.by(() => {
        const currentId = $currentQuestionnaire?.questionnaire.questionsOrder.findIndex(
            qId => qId === questionId,
        );

        if (currentId === -1 || currentId === undefined) {
            return null;
        }

        const nextId = $currentQuestionnaire?.questionnaire.questionsOrder[currentId + 1];

        if (!nextId) {
            return null;
        }

        return $currentQuestionnaire?.questionnaire.questions[nextId];
    });

    const nextQuestionLink = $derived(
        nextQuestion ? Navigation.question.url.replace(':id', nextQuestion.id) : '',
    );

    const allQuestionsOptions = $derived.by(() => {
        if (!$currentQuestionnaire?.questionnaire.questions) {
            return [
                {
                    label: 'Keine Fragen vorhanden',
                    value: '',
                },
            ];
        }
        return [
            {
                label: 'Normale Reihenfolge beibehalten',
                value: '',
            },
        ].concat(
            Object.values($currentQuestionnaire.questionnaire.questions)
                .map(question => ({
                    label: question.title,
                    value: question.id,
                }))
                .filter(question => question.value !== questionId),
        );
    });

    const updateNextQuestionConfig = (
        optionValue: string | number | boolean,
        selectedQuestionId: string,
    ) => {
        // Default is selected, so filter this option out
        if (selectedQuestionId === '') {
            // at the moment, we only have one when value
            nextQuestionConfig = nextQuestionConfig.filter(
                questionConfig => questionConfig.when[0].compareValue !== optionValue,
            );
            return;
        }

        nextQuestionConfig = nextQuestionConfig.concat({
            questionId: selectedQuestionId,
            when: [
                {
                    key: 'value',
                    operator: 'EQ',
                    compareValue: optionValue,
                },
            ],
        });
    };

    const createNewQuestion = () => {
        window.location.href = Navigation.question.url.replace(':id', NEW_QUESTION_ID);
    };
</script>

<fieldset class="nc-fieldset">
    <legend class="nc-legend">
        <h2>Nächste Frage</h2>
    </legend>
    {#if nextQuestion}
        <p class="nc-hint">
            Die aktuelle nächste Frage ist <a href={nextQuestionLink}>{nextQuestion.title}</a>
        </p>
    {:else}
        <div class="nc-cluster -centered">
            <p class="nc-hint">Es gibt noch keine nächste Frage.</p>
            <button
                class="nc-button -stealth -primary -small"
                type="button"
                onclick={createNewQuestion}>Frage hinzufügen</button
            >
        </div>
    {/if}

    {#if options}
        <div class="nc-stack -far mt-base">
            <SwitchInput
                label="Gesonderte Reihenfolge festlegen?"
                hint="Hier kannst du pro Option eine gezielte Folgefrage festlegen"
                bind:checked={enableCustomOrder}
                optional
            ></SwitchInput>
            {#if enableCustomOrder}
                {#each options as option}
                    <div class="nc-stack">
                        <div class="nc-stack -near">
                            <Select
                                label="Wenn {option.title} ausgewählt, dann gehe zu"
                                options={allQuestionsOptions}
                                value={nextQuestionConfig.find(
                                    questionConfig =>
                                        questionConfig.when[0].compareValue === option.value,
                                )?.questionId ?? ''}
                                oninput={evt =>
                                    updateNextQuestionConfig(
                                        option.value,
                                        (event?.target as HTMLInputElement).value,
                                    )}
                                optional
                            ></Select>
                        </div>
                    </div>
                {/each}
            {/if}
        </div>
    {/if}
</fieldset>
