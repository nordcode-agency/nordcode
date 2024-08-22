import type { Question } from './Questionnaire.model.ts';

export type AnswerValue = string | number | boolean | undefined | AnswerValue[];

export type QuestionnaireAnswer = Question & {
    answer: AnswerValue;
};
