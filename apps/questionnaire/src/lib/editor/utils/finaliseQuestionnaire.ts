import type { Question, Questionnaire } from '@nordcode/questionnaire-renderer';
import { questionHasOptions, QuestionType } from '@nordcode/questionnaire-renderer';
import { convertToHtml } from '@nordcode/forms-svelte';

const cleanupQuestions = (questions: Question[]): Question[] => {
    return questions.map((question) => {
        if (!questionHasOptions(question) && 'options' in question) {
            question.options = undefined;
        }

        // @todo: to save for later reuse, skip this step
        question.description = convertToHtml(question.description ?? '');

        return question;
    });
};

export const finaliseQuestionnaire = async (questionnaire: Questionnaire) => {
    return {
        ...questionnaire,
        description: convertToHtml(questionnaire.description ?? ''),
        questions: cleanupQuestions(questionnaire.questions),
    };
};
