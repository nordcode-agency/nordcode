import {
    QuestionType,
    type Question,
    type Questionnaire,
    type Option,
} from '@nordcode/questionnaire-renderer';
import { localStore } from '@nordcode/forms-svelte';
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
    questions: [],
};

export const currentQuestionnaire =
    typeof localStorage === 'undefined'
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
    renderedDescription: '',
});

export const createOrUpdateQuestion = (question: Question) => {
    currentQuestionnaire?.update((currentState) => {
        const updatedQuestions = currentState.questionnaire.questions;

        if (question.id === NEW_QUESTION_ID) {
            question.id = generateId('question');
            updatedQuestions.push(question);
        } else {
            const questionIndex = updatedQuestions.findIndex(({ id }) => id === question.id);
            updatedQuestions[questionIndex] = question;
        }

        return {
            errors: currentState.errors,
            questionnaire: {
                ...currentState.questionnaire,
                questions: updatedQuestions,
            },
        };
    });
};

export const removeQuestion = (questionToDelete: string) => {
    currentQuestionnaire?.update((currentState) => {
        const updatedQuestions = currentState.questionnaire.questions.filter(
            ({ id, description }) => id !== questionToDelete,
        );

        return {
            errors: currentState.errors,
            questionnaire: {
                ...currentState.questionnaire,
                questions: updatedQuestions,
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
