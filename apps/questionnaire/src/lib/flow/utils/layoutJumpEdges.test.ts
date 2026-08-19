import { describe, expect, it } from 'vitest';
import type { FlowGraph } from './buildFlowGraph';
import { layoutJumpEdges } from './layoutJumpEdges';

const graphWithJumps = (jumps: Array<{ from: string; to: string }>): FlowGraph => ({
    nodes: ['__start__', 'q1', 'q2', 'q3', 'q4', '__end__'].map((id, orderIdx) => ({
        id,
        title: id,
        kind: 'question',
        orderIdx,
    })),
    edges: jumps.map(jump => ({ ...jump, kind: 'jump', label: 'x' })),
});

describe('layoutJumpEdges', () => {
    it('puts forward jumps on the right and backward jumps on the left', () => {
        const layouts = layoutJumpEdges(graphWithJumps([
            { from: 'q1', to: 'q3' },
            { from: 'q3', to: 'q1' },
        ]));

        expect(layouts[0]).toMatchObject({ fromIdx: 1, toIdx: 3, side: 'right', lane: 0 });
        expect(layouts[1]).toMatchObject({ fromIdx: 3, toIdx: 1, side: 'left', lane: 0 });
    });

    it('moves overlapping jumps on the same side to separate lanes', () => {
        const layouts = layoutJumpEdges(graphWithJumps([
            { from: 'q1', to: 'q3' },
            { from: 'q2', to: 'q4' },
        ]));

        expect(layouts[0].lane).not.toBe(layouts[1].lane);
    });

    it('reuses lanes for jumps that do not overlap', () => {
        const layouts = layoutJumpEdges(graphWithJumps([
            { from: 'q1', to: 'q2' },
            { from: 'q3', to: 'q4' },
        ]));

        expect(layouts[0].lane).toBe(0);
        expect(layouts[1].lane).toBe(0);
    });

    it('keeps the edge order of the graph', () => {
        const layouts = layoutJumpEdges(graphWithJumps([
            { from: 'q2', to: 'q4' },
            { from: 'q1', to: 'q2' },
        ]));

        expect(layouts.map(layout => layout.edge.from)).toEqual(['q2', 'q1']);
    });
});
