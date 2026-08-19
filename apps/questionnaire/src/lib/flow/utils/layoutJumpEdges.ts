import type { FlowEdge, FlowGraph } from './buildFlowGraph';

export type JumpEdgeLayout = {
    edge: FlowEdge;
    fromIdx: number;
    toIdx: number;
    side: 'left' | 'right';
    lane: number;
};

export const layoutJumpEdges = (graph: FlowGraph): JumpEdgeLayout[] => {
    const orderIdxById = new Map(graph.nodes.map(node => [node.id, node.orderIdx]));

    const layouts = graph.edges
        .filter(edge => edge.kind === 'jump')
        .map((edge): JumpEdgeLayout => {
            const fromIdx = orderIdxById.get(edge.from) ?? 0;
            const toIdx = orderIdxById.get(edge.to) ?? 0;

            return {
                edge,
                fromIdx,
                toIdx,
                side: toIdx >= fromIdx ? 'right' : 'left',
                lane: 0,
            };
        });

    // assign short spans first so long arcs end up in the outer lanes
    const bySpan = [...layouts].sort(
        (a, b) => Math.abs(a.toIdx - a.fromIdx) - Math.abs(b.toIdx - b.fromIdx),
    );

    const placed: JumpEdgeLayout[] = [];

    for (const layout of bySpan) {
        const [min, max] = [
            Math.min(layout.fromIdx, layout.toIdx),
            Math.max(layout.fromIdx, layout.toIdx),
        ];

        const blockedLanes = new Set(
            placed
                .filter(other =>
                    other.side === layout.side
                    && Math.min(other.fromIdx, other.toIdx) <= max
                    && Math.max(other.fromIdx, other.toIdx) >= min
                )
                .map(other => other.lane),
        );

        while (blockedLanes.has(layout.lane)) {
            layout.lane += 1;
        }

        placed.push(layout);
    }

    return layouts;
};
