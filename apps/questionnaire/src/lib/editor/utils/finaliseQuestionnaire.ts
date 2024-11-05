import { convertToHtml } from '@nordcode/forms-svelte';
import type { Question, Questionnaire } from '@nordcode/questionnaire-renderer';
import { QuestionType, questionHasOptions } from '@nordcode/questionnaire-renderer';

const cleanupQuestions = (questions: Record<string, Question>): Record<string, Question> => {
    for (const [questionId, question] of Object.entries(questions)) {
        if (!questionHasOptions(question) && 'options' in question) {
            question.options = undefined;
        }

        // @todo: to save for later reuse, skip this step
        question.description = convertToHtml(question.description ?? '');

        questions[questionId] = question;
    }

    return questions;
};

export const finaliseQuestionnaire = async (questionnaire: Questionnaire) => {
    return {
        ...questionnaire,
        description: convertToHtml(questionnaire.description ?? ''),
        questions: cleanupQuestions(questionnaire.questions),
    };
};
