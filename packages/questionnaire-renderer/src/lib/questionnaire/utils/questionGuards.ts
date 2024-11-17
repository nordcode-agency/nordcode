import { QuestionType, type Question, type QuestionWithOption } from "../models/Questionnaire.model.ts";


export const questionHasOptions = (question: Question): question is QuestionWithOption => {
    return (
        question.type === QuestionType.single_choice ||
        question.type === QuestionType.multiple_choice
    );
};
