import type { Question } from './Questionnaire.model.ts';

export type AnswerValue = string | number | boolean | undefined | Date | AnswerValue[];

export type QuestionnaireAnswer = {
    question: Question;
    answer: AnswerValue;
};

export const NotAnswered = '(nicht beantwortet)';
