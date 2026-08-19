import type { Question, Questionnaire } from '@nordcode/questionnaire-renderer';
import { describe, expect, it } from 'vitest';
import { buildFlowGraph } from './buildFlowGraph';

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

describe('buildFlowGraph', () => {
    it('connects start directly to end for an empty questionnaire', () => {
        const graph = buildFlowGraph(createQuestionnaire([]));

        expect(graph.nodes).toEqual([
            { id: '__start__', title: 'Start', kind: 'start', orderIdx: 0 },
            { id: '__end__', title: 'Ende', kind: 'end', orderIdx: 1 },
        ]);
        expect(graph.edges).toEqual([{ from: '__start__', to: '__end__', kind: 'sequential' }]);
    });

    it('chains questions in order between start and end', () => {
        const graph = buildFlowGraph(
            createQuestionnaire([
                createQuestion({ id: 'q1', title: 'Frage 1' }),
                createQuestion({ id: 'q2', title: 'Frage 2' }),
            ]),
        );

        expect(graph.nodes).toEqual([
            { id: '__start__', title: 'Start', kind: 'start', orderIdx: 0 },
            { id: 'q1', title: 'Frage 1', kind: 'question', orderIdx: 1 },
            { id: 'q2', title: 'Frage 2', kind: 'question', orderIdx: 2 },
            { id: '__end__', title: 'Ende', kind: 'end', orderIdx: 3 },
        ]);
        expect(graph.edges).toEqual([
            { from: '__start__', to: 'q1', kind: 'sequential' },
            { from: 'q1', to: 'q2', kind: 'sequential' },
            { from: 'q2', to: '__end__', kind: 'sequential' },
        ]);
    });

    it('adds a labeled jump edge alongside the sequential fallthrough', () => {
        const q1 = createQuestion({
            id: 'q1',
            type: 'single_choice',
            options: [
                { id: 'opt-a', title: 'Option A', value: 'a' },
                { id: 'opt-b', title: 'Option B', value: 'b' },
            ],
            next: [
                {
                    questionId: 'q3',
                    when: [{ key: 'value', operator: 'EQ', compareValue: 'b' }],
                },
            ],
        } as Partial<Question> & { id: string });
        const graph = buildFlowGraph(
            createQuestionnaire([
                q1,
                createQuestion({ id: 'q2' }),
                createQuestion({ id: 'q3' }),
            ]),
        );

        expect(graph.edges).toContainEqual({
            from: 'q1',
            to: 'q3',
            kind: 'jump',
            label: 'Option B',
        });
        expect(graph.edges).toContainEqual({ from: 'q1', to: 'q2', kind: 'sequential' });
    });

    it('labels jumps on questions without options using the condition', () => {
        const graph = buildFlowGraph(
            createQuestionnaire([
                createQuestion({
                    id: 'q1',
                    type: 'number',
                    next: [
                        {
                            questionId: 'q2',
                            when: [{ key: 'value', operator: 'GT', compareValue: 5 }],
                        },
                    ],
                } as Partial<Question> & { id: string }),
                createQuestion({ id: 'q2' }),
            ]),
        );

        expect(graph.edges).toContainEqual({
            from: 'q1',
            to: 'q2',
            kind: 'jump',
            label: '> 5',
        });
    });

    it('labels unconditional jumps as "immer"', () => {
        const graph = buildFlowGraph(
            createQuestionnaire([
                createQuestion({
                    id: 'q1',
                    next: [{ questionId: 'q2', when: [] }],
                } as Partial<Question> & { id: string }),
                createQuestion({ id: 'q2' }),
            ]),
        );

        expect(graph.edges).toContainEqual({
            from: 'q1',
            to: 'q2',
            kind: 'jump',
            label: 'immer',
        });
    });

    it('drops the sequential fallthrough when an unconditional jump replaces it', () => {
        const graph = buildFlowGraph(
            createQuestionnaire([
                createQuestion({
                    id: 'q1',
                    next: [{ questionId: 'q3', when: [] }],
                } as Partial<Question> & { id: string }),
                createQuestion({ id: 'q2' }),
                createQuestion({ id: 'q3' }),
            ]),
        );

        expect(graph.edges.filter(edge => edge.from === 'q1')).toEqual([
            { from: 'q1', to: 'q3', kind: 'jump', label: 'immer' },
        ]);
    });

    it('skips jump edges pointing to deleted questions', () => {
        const graph = buildFlowGraph(
            createQuestionnaire([
                createQuestion({
                    id: 'q1',
                    next: [{ questionId: 'gone', when: [] }],
                } as Partial<Question> & { id: string }),
            ]),
        );

        expect(graph.edges.filter(edge => edge.kind === 'jump')).toEqual([]);
    });
});
