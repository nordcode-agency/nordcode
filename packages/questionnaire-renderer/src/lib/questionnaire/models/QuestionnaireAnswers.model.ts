export type AnswerValue = string | number | boolean | undefined | AnswerValue[];

export type QuestionnaireAnswer = {
    questionId: string;
    answer: AnswerValue;
};
