import { localStore } from '@nordcode/forms-svelte';
import type { Questionnaire } from '../../questionnaire/models/Questionnaire.model.ts';
import type {
    AnswerValue,
    QuestionnaireAnswer,
} from '$lib/questionnaire/models/QuestionnaireAnswers.model.ts';

const STORE_KEY = 'RENDERER_QUESTIONNAIRE';

export type QuestionnaireState = 'idle' | 'loading' | 'error' | 'start' | 'finished' | 'questions';

export type CurrentQuestionnaireStore = {
    questionnaire: Questionnaire | null;
    currentQuestion: number;
    currentState: QuestionnaireState;
    answers: QuestionnaireAnswer[];
    errors: Partial<{ [name in keyof Questionnaire]: string[] }>;
};

export const rendererStore =
    typeof localStorage === 'undefined'
        ? null
        : localStore<CurrentQuestionnaireStore>(STORE_KEY, {
              questionnaire: null,
              currentQuestion: 0,
              currentState: 'idle',
              answers: [],
              errors: {},
          });

export const setQuestionnaire = (questionnaire: Questionnaire) => {
    rendererStore?.set({
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

export const startQuestionnaire = () => {
    rendererStore?.update((store: CurrentQuestionnaireStore) => {
        return {
            ...store,
            currentState: 'questions',
        };
    });
};

export const goBack = () => {
    rendererStore?.update((store: CurrentQuestionnaireStore) => {
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

export const answerQuestion = (answer: AnswerValue) => {
    rendererStore.update((store: CurrentQuestionnaireStore) => {
        if (!store.questionnaire) {
            return;
        }

        store.answers[store.currentQuestion].answer = answer;
        return store;
    });
};
