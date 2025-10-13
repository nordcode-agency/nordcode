import type { AnswerValue, QuestionnaireAnswer } from '$lib/questionnaire/models/QuestionnaireAnswers.model.ts';
import { localStore } from '@nordcode/forms-svelte';
import { get, type Writable } from 'svelte/store';
import type { Questionnaire } from '../../questionnaire/models/Questionnaire.model.ts';

const STORE_KEY = 'RENDERER_QUESTIONNAIRE';

export type QuestionnaireState = 'idle' | 'loading' | 'error' | 'start' | 'finished' | 'questions';

export type CurrentQuestionnaireStore = {
    questionnaire: Questionnaire | null;
    currentQuestionId: string;
    currentQuestionIdx: number;
    currentState: QuestionnaireState;
    answers: QuestionnaireAnswer[];
    errors: Partial<{ [name in keyof Questionnaire]: string[] }>;
};

export const rendererStore: Writable<CurrentQuestionnaireStore> & {
    hasStoredValue: boolean;
    exportToString: () => string;
    exportToJson: () => CurrentQuestionnaireStore;
    import: (valueString: string) => void;
    reset: () => void;
} = localStore<CurrentQuestionnaireStore>(STORE_KEY, {
    questionnaire: null,
    currentQuestionIdx: 0,
    currentQuestionId: '',
    currentState: 'idle',
    answers: [],
    errors: {},
});

export const setQuestionnaire = (questionnaire: Questionnaire) => {
    rendererStore.set({
        questionnaire,
        errors: {},
        currentQuestionIdx: 0,
        currentQuestionId: questionnaire.questionsOrder[0],
        currentState: 'start',
        answers: [],
    });
};

export const initialiseQuestionnaire = (questionnaire: Questionnaire) => {
    if (rendererStore.hasStoredValue) {
        const oldValue = get(rendererStore);
        if (oldValue?.questionnaire?.id === questionnaire.id) {
            // do nothing and let the old version take over
            return;
        }
    }

    setQuestionnaire(questionnaire);
};

export const startQuestionnaire = () => {
    rendererStore.update((store) => {
        return {
            ...store,
            currentState: 'questions',
        };
    });
};

export const resetQuestionnaire = () => {
    rendererStore.update((store) => {
        return {
            ...store,
            errors: {},
            currentQuestionIdx: 0,
            currentQuestionId: store.questionnaire?.questionsOrder[0] ?? '',
            currentState: 'start',
            answers: [],
        };
    });
};

export const goBack = () => {
    rendererStore.update((store) => {
        if (store.currentState === 'start') {
            return store;
        }

        if (store.currentQuestionIdx === 0) {
            return {
                ...store,
                currentState: 'start',
            };
        }

        const prevIdx = Math.max(store.currentQuestionIdx - 1, 0);
        // prev question by answer to not confuse the user

        return {
            ...store,
            currentQuestionIdx: prevIdx,
            currentQuestionId: store.answers[prevIdx]?.question.id ?? '',
        };
    });
};

export const goToNextQuestion = () => {
    rendererStore.update(store => {
        if (!store.questionnaire) {
            return store;
        }

        if (store.currentState === 'start') {
            return store;
        }

        const customNextConfig = store.questionnaire.questions[store.currentQuestionId].next;

        if (customNextConfig && customNextConfig.length > 0) {
            const currentAnswer = store.answers[store.currentQuestionIdx].answer;

            // this is a very simplistic implementation that regards most options
            // @todo: implement correctly and move elsewhere
            const nextQuestion = customNextConfig.find((config) => {
                return config.when.every((condition) => {
                    return condition.compareValue === currentAnswer;
                });
            });

            if (nextQuestion) {
                return {
                    ...store,
                    currentQuestionIdx: Math.min(
                        store.currentQuestionIdx + 1,
                        store.questionnaire.questionsOrder.length - 1,
                    ),
                    currentQuestionId: nextQuestion.questionId,
                };
            }
        }

        // we already rule out a custom next question, so we can go by order
        const isFinalQuestion = store.currentQuestionIdx === store.questionnaire.questionsOrder.length - 1;

        if (isFinalQuestion) {
            return {
                ...store,
                currentState: 'finished',
            };
        }

        return {
            ...store,
            currentQuestionIdx: Math.min(
                store.currentQuestionIdx + 1,
                store.questionnaire.questionsOrder.length - 1,
            ),
            currentQuestionId: store.questionnaire.questionsOrder[store.currentQuestionIdx + 1],
        };
    });
};

export const goToQuestion = (questionNumber: number) => {
    rendererStore.update((store) => {
        return {
            ...store,
            currentQuestionIdx: questionNumber,
            currentQuestionId: store.answers[questionNumber]?.question.id ?? '',
            currentState: 'questions',
        };
    });
};

export const answerQuestion = (answer: AnswerValue) => {
    rendererStore.update((store) => {
        if (!store.questionnaire) {
            return store;
        }

        if (!store.answers[store.currentQuestionIdx]) {
            store.answers[store.currentQuestionIdx] = {
                question: store.questionnaire.questions[store.currentQuestionId],
                answer: undefined,
            };
        }

        store.answers[store.currentQuestionIdx].answer = answer;
        return store;
    });
};
