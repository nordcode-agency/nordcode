import type { Question, Questionnaire } from '@nordcode/questionnaire-renderer';
import { questionHasOptions } from '@nordcode/questionnaire-renderer';

const cleanupQuestions = (questions: Question[]): Question[] => {
    return questions.map((question) => {
        if (!questionHasOptions(question) && 'options' in question) {
            question.options = undefined;
        }

        return question;
    });
};

export const finaliseQuestionnaire = async (questionnaire: Questionnaire) => {
    return {
        ...questionnaire,
        questions: cleanupQuestions(questionnaire.questions),
    };
};
