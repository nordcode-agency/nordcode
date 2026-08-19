import type { Condition, Question, Questionnaire } from '@nordcode/questionnaire-renderer';

export const START_NODE_ID = '__start__';
export const END_NODE_ID = '__end__';

export type FlowNode = {
    id: string;
    title: string;
    kind: 'start' | 'question' | 'end';
    orderIdx: number;
};

export type FlowEdge = {
    from: string;
    to: string;
    kind: 'sequential' | 'jump';
    label?: string;
};

export type FlowGraph = {
    nodes: FlowNode[];
    edges: FlowEdge[];
};

const OPERATOR_SYMBOLS: Record<Condition['operator'], string> = {
    EQ: '=',
    NE: '≠',
    GT: '>',
    LT: '<',
    GTE: '≥',
    LTE: '≤',
    CONTAINS: 'enthält',
    STARTS_WITH: 'beginnt mit',
    ENDS_WITH: 'endet mit',
};

const formatCondition = (condition: Condition, question: Question): string => {
    if ('options' in question && condition.operator === 'EQ') {
        const matchingOption = question.options.find(option => option.value === condition.compareValue);

        if (matchingOption) {
            return matchingOption.title;
        }
    }

    return `${OPERATOR_SYMBOLS[condition.operator]} ${condition.compareValue}`;
};

const formatJumpLabel = (conditions: Condition[], question: Question): string => {
    if (conditions.length === 0) {
        return 'immer';
    }

    return conditions.map(condition => formatCondition(condition, question)).join(', ');
};

export const buildFlowGraph = (questionnaire: Questionnaire): FlowGraph => {
    const orderedQuestions = questionnaire.questionsOrder
        .map(questionId => questionnaire.questions[questionId])
        .filter(question => question !== undefined);

    const nodes: FlowNode[] = [
        { id: START_NODE_ID, title: 'Start', kind: 'start', orderIdx: 0 },
        ...orderedQuestions.map((question, idx): FlowNode => ({
            id: question.id,
            title: question.title,
            kind: 'question',
            orderIdx: idx + 1,
        })),
        { id: END_NODE_ID, title: 'Ende', kind: 'end', orderIdx: orderedQuestions.length + 1 },
    ];

    const edges: FlowEdge[] = [];

    edges.push({
        from: START_NODE_ID,
        to: orderedQuestions[0]?.id ?? END_NODE_ID,
        kind: 'sequential',
    });

    orderedQuestions.forEach((question, idx) => {
        // the renderer falls through to the regular order when no jump matches;
        // only an unconditional jump (empty `when`) always wins and replaces it
        const hasUnconditionalJump = (question.next ?? []).some(
            nextConfig => nextConfig.when.length === 0 && questionnaire.questions[nextConfig.questionId],
        );

        if (!hasUnconditionalJump) {
            edges.push({
                from: question.id,
                to: orderedQuestions[idx + 1]?.id ?? END_NODE_ID,
                kind: 'sequential',
            });
        }

        for (const nextConfig of question.next ?? []) {
            if (!questionnaire.questions[nextConfig.questionId]) {
                continue;
            }

            edges.push({
                from: question.id,
                to: nextConfig.questionId,
                kind: 'jump',
                label: formatJumpLabel(nextConfig.when, question),
            });
        }
    });

    return { nodes, edges };
};
