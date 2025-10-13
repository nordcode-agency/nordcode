import { localStore } from '@nordcode/forms-svelte';
import { type Option, type Question, type Questionnaire, QuestionType } from '@nordcode/questionnaire-renderer';
import { nanoid } from 'nanoid';

const STORE_KEY = 'CURRENT_QUESTIONNAIRE';

const generateId = (prefix: string) => `${prefix}-${nanoid()}`;

export type CurrentQuestionnaireStore = {
    questionnaire: Questionnaire;
    errors: Partial<{ [name in keyof Questionnaire]: string[] }>;
};

export const initialQuestionnaireState: Questionnaire = {
    id: generateId('questionnaire'),
    title: 'Neuer Fragebogen',
    description: '',
    questions: {},
    questionsOrder: [],
};

export const currentQuestionnaire = typeof localStorage === 'undefined'
    ? null
    : localStore<CurrentQuestionnaireStore>(STORE_KEY, {
        questionnaire: initialQuestionnaireState,
        errors: {},
    });

export const setQuestionnaire = (questionnaire: Questionnaire) => {
    currentQuestionnaire?.set({
        questionnaire,
        errors: {},
    });
};

export const resetQuestionnaire = () => {
    currentQuestionnaire?.set({
        questionnaire: initialQuestionnaireState,
        errors: {},
    });
};

export const NEW_QUESTION_ID = 'new-question';

export const createNewQuestion = (): Question => ({
    id: NEW_QUESTION_ID,
    title: 'Neue Frage',
    type: QuestionType.text,
    description: '',
});

export const createOrUpdateQuestion = (question: Question) => {
    currentQuestionnaire?.update((currentState) => {
        const updatedQuestions = currentState.questionnaire.questions;

        if (question.id === NEW_QUESTION_ID) {
            question.id = generateId('question');
        }

        updatedQuestions[question.id] = question;

        const currentOrderIdx = currentState.questionnaire.questionsOrder.indexOf(question.id);

        if (currentOrderIdx === -1) {
            currentState.questionnaire.questionsOrder.push(question.id);
        }

        return {
            errors: currentState.errors,
            questionnaire: {
                ...currentState.questionnaire,
                questions: updatedQuestions,
            },
            questionsOrder: currentState.questionnaire.questionsOrder,
        };
    });
};

export const removeQuestion = (questionToDelete: string) => {
    currentQuestionnaire?.update((currentState) => {
        const updatedQuestions = currentState.questionnaire.questions;
        delete updatedQuestions[questionToDelete];
        currentState.questionnaire.questionsOrder = currentState.questionnaire.questionsOrder.filter(
            (questionId) => questionId !== questionToDelete,
        );

        return {
            errors: currentState.errors,
            questionnaire: {
                ...currentState.questionnaire,
                questions: updatedQuestions,
            },
            questionsOrder: currentState.questionnaire.questionsOrder,
        };
    });
};

export const moveQuestion = (questionId: string, toIdx: number): void => {
    currentQuestionnaire?.update((currentState) => {
        const fromIdx = currentState.questionnaire.questionsOrder.indexOf(questionId);
        const updatedOrder = [...currentState.questionnaire.questionsOrder];
        updatedOrder.splice(fromIdx, 1);
        updatedOrder.splice(toIdx, 0, questionId);

        return {
            errors: currentState.errors,
            questionnaire: {
                ...currentState.questionnaire,
                questionsOrder: updatedOrder,
            },
        };
    });
};

export const createNewOption = (): Option => ({
    id: generateId('option'),
    title: 'Neue Option',
    description: '',
    value: '',
});
