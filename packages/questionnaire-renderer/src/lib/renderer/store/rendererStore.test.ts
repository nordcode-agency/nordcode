import { get } from 'svelte/store';
import { beforeEach, describe, expect, it } from 'vitest';
import type { Question, Questionnaire } from '../../questionnaire/models/Questionnaire.model.ts';
import {
    answerQuestion,
    goToNextQuestion,
    rendererStore,
    setQuestionnaire,
    startQuestionnaire,
} from './rendererStore.ts';

const createQuestion = (partial: Partial<Question> & { id: string }): Question =>
    ({
        title: partial.id,
        label: '',
        type: 'text',
        ...partial,
    }) as Question;

const createQuestionnaire = (questions: Question[]): Questionnaire => ({
    id: 'questionnaire-test',
    title: 'Test',
    questions: Object.fromEntries(questions.map(question => [question.id, question])),
    questionsOrder: questions.map(question => question.id),
});

describe('goToNextQuestion', () => {
    beforeEach(() => {
        setQuestionnaire(
            createQuestionnaire([
                createQuestion({
                    id: 'q1',
                    next: [{ questionId: 'q3', when: [] }],
                } as Partial<Question> & { id: string }),
                createQuestion({
                    id: 'q2',
                    next: [
                        {
                            questionId: 'q4',
                            when: [{ key: 'value', operator: 'EQ', compareValue: 'b' }],
                        },
                    ],
                } as Partial<Question> & { id: string }),
                createQuestion({ id: 'q3' }),
                createQuestion({ id: 'q4' }),
            ]),
        );
        startQuestionnaire();
    });

    it('follows an unconditional jump', () => {
        answerQuestion('something');
        goToNextQuestion();

        expect(get(rendererStore).currentQuestionId).toBe('q3');
    });

    it('follows an unconditional jump even when the question was not answered', () => {
        goToNextQuestion();

        expect(get(rendererStore).currentQuestionId).toBe('q3');
    });

    it('follows a conditional jump when the answer matches', () => {
        goToNextQuestion();
        rendererStore.update(store => ({ ...store, currentQuestionIdx: 1, currentQuestionId: 'q2' }));
        answerQuestion('b');
        goToNextQuestion();

        expect(get(rendererStore).currentQuestionId).toBe('q4');
    });

    it('falls through to the regular order when a conditional question was not answered', () => {
        rendererStore.update(store => ({ ...store, currentQuestionIdx: 1, currentQuestionId: 'q2' }));
        goToNextQuestion();

        expect(get(rendererStore).currentQuestionId).toBe('q3');
    });
});
