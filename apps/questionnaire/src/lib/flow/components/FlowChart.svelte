<script lang="ts">
import { Navigation } from '$lib/common/config/Navigation';
import type { Questionnaire } from '@nordcode/questionnaire-renderer';
import { buildFlowGraph, type FlowNode } from '../utils/buildFlowGraph';
import { layoutJumpEdges } from '../utils/layoutJumpEdges';

interface Props {
    questionnaire: Questionnaire;
}

let { questionnaire }: Props = $props();

const NODE_WIDTH = 260;
const NODE_HEIGHT = 56;
const ROW_GAP = 56;
const LANE_OFFSET = 40;
const LANE_GAP = 48;
const PADDING = 24;
const ARROW_GAP = 8;

const graph = $derived(buildFlowGraph(questionnaire));
const jumpLayouts = $derived(layoutJumpEdges(graph));
const nodesById = $derived(new Map(graph.nodes.map(node => [node.id, node])));

const laneCount = (side: 'left' | 'right') =>
    jumpLayouts.reduce(
        (count, layout) => (layout.side === side ? Math.max(count, layout.lane + 1) : count),
        0,
    );

const leftLanes = $derived(laneCount('left'));
const rightLanes = $derived(laneCount('right'));

const sideWidth = (lanes: number) => (lanes > 0 ? LANE_OFFSET + (lanes - 1) * LANE_GAP + PADDING : PADDING);

const nodeX = $derived(sideWidth(leftLanes));
const chartWidth = $derived(nodeX + NODE_WIDTH + sideWidth(rightLanes));
const chartHeight = $derived(
    PADDING * 2 + graph.nodes.length * NODE_HEIGHT + (graph.nodes.length - 1) * ROW_GAP,
);

const nodeY = (node: FlowNode) => PADDING + node.orderIdx * (NODE_HEIGHT + ROW_GAP);
const nodeCenterY = (node: FlowNode) => nodeY(node) + NODE_HEIGHT / 2;
const spineX = $derived(nodeX + NODE_WIDTH / 2);

const sequentialEdges = $derived(
    graph.edges
        .filter(edge => edge.kind === 'sequential')
        .map(edge => ({
            fromNode: nodesById.get(edge.from) as FlowNode,
            toNode: nodesById.get(edge.to) as FlowNode,
        })),
);

const jumpPath = (layout: (typeof jumpLayouts)[number]) => {
    const fromNode = nodesById.get(layout.edge.from) as FlowNode;
    const toNode = nodesById.get(layout.edge.to) as FlowNode;
    const edgeX = layout.side === 'right' ? nodeX + NODE_WIDTH : nodeX;
    const direction = layout.side === 'right' ? 1 : -1;
    const laneX = edgeX + direction * (LANE_OFFSET + layout.lane * LANE_GAP);
    const startY = nodeCenterY(fromNode);
    const endY = nodeCenterY(toNode);

    return {
        path: `M ${edgeX} ${startY} C ${laneX} ${startY}, ${laneX} ${endY}, ${edgeX + direction * ARROW_GAP} ${endY}`,
        labelX: laneX + direction * 6,
        labelY: (startY + endY) / 2,
        anchor: layout.side === 'right' ? 'start' : 'end',
    };
};

const truncate = (title: string) => (title.length > 30 ? `${title.slice(0, 29)}…` : title);

const questionUrl = (id: string) => Navigation.question.url.replace(':id', id);
</script>

<div class="flowChart" role="group" aria-label="Fragebogen Fluss">
    <svg
        viewBox="0 0 {chartWidth} {chartHeight}"
        width={chartWidth}
        height={chartHeight}
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <marker
                id="arrow-sequential"
                viewBox="0 0 8 8"
                refX="7"
                refY="4"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
            >
                <path d="M 0 0 L 8 4 L 0 8 z" class="arrowHead -sequential"></path>
            </marker>
            <marker
                id="arrow-jump"
                viewBox="0 0 8 8"
                refX="7"
                refY="4"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
            >
                <path d="M 0 0 L 8 4 L 0 8 z" class="arrowHead -jump"></path>
            </marker>
        </defs>

        {#each sequentialEdges as edge}
            <line
                class="edge -sequential"
                x1={spineX}
                y1={nodeY(edge.fromNode) + NODE_HEIGHT}
                x2={spineX}
                y2={nodeY(edge.toNode) - ARROW_GAP}
                marker-end="url(#arrow-sequential)"
            ></line>
        {/each}

        {#each jumpLayouts as layout}
            {@const jump = jumpPath(layout)}
            <g class="jumpEdge">
                <path class="edge -jump" d={jump.path} marker-end="url(#arrow-jump)">
                    <title>{layout.edge.label}</title>
                </path>
                {#if layout.edge.label}
                    <text
                        class="edgeLabel"
                        x={jump.labelX}
                        y={jump.labelY}
                        text-anchor={jump.anchor}
                        dominant-baseline="middle"
                    >
                        {truncate(layout.edge.label)}
                    </text>
                {/if}
            </g>
        {/each}

        {#each graph.nodes as node}
            {#if node.kind === 'question'}
                <a href={questionUrl(node.id)} aria-label="Frage {node.title} bearbeiten">
                    <g class="node -question">
                        <rect
                            x={nodeX}
                            y={nodeY(node)}
                            width={NODE_WIDTH}
                            height={NODE_HEIGHT}
                            rx="8"
                        ></rect>
                        <text
                            x={spineX}
                            y={nodeCenterY(node)}
                            text-anchor="middle"
                            dominant-baseline="middle"
                        >
                            {truncate(node.title)}
                            <title>{node.title}</title>
                        </text>
                    </g>
                </a>
            {:else}
                <g class="node -terminal">
                    <rect
                        x={spineX - 60}
                        y={nodeY(node)}
                        width="120"
                        height={NODE_HEIGHT}
                        rx={NODE_HEIGHT / 2}
                    ></rect>
                    <text
                        x={spineX}
                        y={nodeCenterY(node)}
                        text-anchor="middle"
                        dominant-baseline="middle"
                    >
                        {node.title}
                    </text>
                </g>
            {/if}
        {/each}
    </svg>
</div>

<style>
.flowChart {
    inline-size: 100%;
    overflow-x: auto;
    display: grid;
    justify-content: center;
}

.edge {
    fill: none;

    &.-sequential {
        stroke: var(--color-border-base);
        stroke-width: 2;
    }

    &.-jump {
        stroke: var(--color-brand-primary-base);
        stroke-width: 2;
    }
}

.arrowHead {
    &.-sequential {
        fill: var(--color-border-base);
    }

    &.-jump {
        fill: var(--color-brand-primary-base);
    }
}

.edgeLabel {
    fill: var(--color-text-muted);
    font-size: 0.75rem;
}

.node {
    & rect {
        fill: var(--color-surface-subtle);
        stroke: var(--color-border-base);
        stroke-width: 1.5;
    }

    & text {
        fill: var(--color-text-base);
        font-size: 0.875rem;
    }

    &.-terminal rect {
        fill: var(--color-surface-emphasis);
        stroke: none;
    }

    &.-terminal text {
        fill: var(--color-text-on-emphasis);
        font-weight: 600;
    }
}

a:hover .node rect,
a:focus-visible .node rect {
    stroke: var(--color-brand-primary-base);
    stroke-width: 2;
}
</style>
