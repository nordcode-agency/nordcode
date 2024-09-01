import { localStore } from '@nordcode/forms-svelte';
import type { Questionnaire } from '../../questionnaire/models/Questionnaire.model.ts';
import type {
    AnswerValue,
    QuestionnaireAnswer,
} from '$lib/questionnaire/models/QuestionnaireAnswers.model.ts';
import { get } from 'svelte/store';

const STORE_KEY = 'RENDERER_QUESTIONNAIRE';

export type QuestionnaireState = 'idle' | 'loading' | 'error' | 'start' | 'finished' | 'questions';

export type CurrentQuestionnaireStore = {
    questionnaire: Questionnaire | null;
    currentQuestion: number;
    currentState: QuestionnaireState;
    answers: QuestionnaireAnswer[];
    errors: Partial<{ [name in keyof Questionnaire]: string[] }>;
};

export const rendererStore = localStore<CurrentQuestionnaireStore>(STORE_KEY, {
    questionnaire: null,
    currentQuestion: 0,
    currentState: 'idle',
    answers: [],
    errors: {},
});

export const setQuestionnaire = (questionnaire: Questionnaire) => {
    rendererStore.set({
        questionnaire,
        errors: {},
        currentQuestion: 0,
        currentState: 'start',
        answers: questionnaire.questions.map((question) => ({
            question,
            answer: undefined,
        })),
    });
};

export const initialiseQuestionnaire = (questionnaire: Questionnaire) => {
    if (rendererStore.hasStoredValue) {
        const oldValue = get(rendererStore) as CurrentQuestionnaireStore;
        if (oldValue?.questionnaire?.id === questionnaire.id) {
            // do nothing and let the old version take over
            return;
        }
    }

    setQuestionnaire(questionnaire);
};

export const startQuestionnaire = () => {
    rendererStore.update((store: CurrentQuestionnaireStore) => {
        return {
            ...store,
            currentState: 'questions',
        };
    });
};

export const resetQuestionnaire = () => {
    rendererStore.update((store: CurrentQuestionnaireStore) => {
        return {
            ...store,
            errors: {},
            currentQuestion: 0,
            currentState: 'start',
            answers: store?.questionnaire?.questions.map((question) => ({
                question,
                answer: undefined,
            })),
        };
    });
};

export const goBack = () => {
    rendererStore.update((store: CurrentQuestionnaireStore) => {
        if (store.currentState === 'start') {
            return;
        }

        if (store.currentQuestion === 0) {
            return {
                ...store,
                currentState: 'start',
            };
        }

        // handle final overview

        return {
            ...store,
            currentQuestion: Math.max(store.currentQuestion - 1, 0),
        };
    });
};

export const goToNextQuestion = () => {
    rendererStore.update((store: CurrentQuestionnaireStore) => {
        if (!store.questionnaire) {
            return;
        }

        if (store.currentState === 'start') {
            return;
        }
        if (store.currentQuestion === store.questionnaire.questions.length - 1) {
            return {
                ...store,
                currentState: 'finished',
            };
        }

        return {
            ...store,
            currentQuestion: Math.min(
                store.currentQuestion + 1,
                store.questionnaire.questions.length - 1,
            ),
        };
    });
};

export const goToQuestion = (questionNumber: number) => {
    rendererStore.update((store: CurrentQuestionnaireStore) => {
        return {
            ...store,
            currentQuestion: questionNumber,
            currentState: 'questions',
        };
    });
};

export const answerQuestion = (answer: AnswerValue) => {
    rendererStore.update((store: CurrentQuestionnaireStore) => {
        if (!store.questionnaire) {
            return;
        }
        store.answers[store.currentQuestion].answer = answer;
        return store;
    });
};

export const finishQuestionnaire = () => {};
