<svelte:options customElement="nc-model-viewer" />

<script lang="ts">
import type { Snippet } from 'svelte';

interface Props {
    children: Snippet;
    rotateSpeedFactor?: number;
    perspective?: number;
    defaultZoom?: number;
}

let { children, rotateSpeedFactor = 0.4, perspective = 720, defaultZoom = 30 }: Props = $props();

let zoom: number = $state(defaultZoom);
let rotateX: number = $state(0);
let rotateY: number = $state(0);
let isGrabbing: boolean = $state(false);

const toFixed = (num: number, precision: number): number => {
    const pow = 10 ** precision;
    return Math.round(num * pow) / pow;
};

const clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
};

$effect(() => {
    $host().addEventListener('wheel', (event: WheelEvent) => {
        event.preventDefault();
        event.stopPropagation();
        zoom = clamp(Math.round(zoom + event.deltaY * 0.5), -perspective, perspective * 0.7);
    });

    $host().addEventListener('mousedown', () => {
        $host().style.cursor = 'grabbing';
        isGrabbing = true;
    });

    $host().addEventListener('mouseup', () => {
        $host().style.cursor = 'grab';
        isGrabbing = false;
    });

    $host().addEventListener('mousemove', (event: MouseEvent) => {
        if (isGrabbing) {
            rotateY = toFixed(rotateY + event.movementX * rotateSpeedFactor, 2);
            rotateX = clamp(toFixed(rotateX - event.movementY * rotateSpeedFactor, 2), -90, 90);
        }
    });

    $host().style.inlineSize = '100%';
    $host().style.blockSize = '100%';

    $host().firstChild.style =
        'transform: translateZ(var(--zoom)) rotateX(var(--rotate-x)) rotateY(var(--rotate-y)); transform-style: preserve-3d; transform-origin: center; will-change: transform;';
});
</script>


<div class="nc-model-viewer" style={`--zoom: ${zoom}px; --rotate-y: ${rotateY}deg; --rotate-x: ${rotateX}deg`}>
    <!-- {#if children}
    	{@render children()}
    {:else}
       	<p>Please provide a model to view</p>
    {/if} -->
    <slot />
</div>

<style>
    .nc-model-viewer {
        perspective: 40em;

        display: grid;
        place-items: center;
        inline-size: 100%;
        block-size: 100%;
        max-block-size: 100%;
        max-inline-size: 100%;
        overflow: hidden;
        cursor: grab;
        user-select: none;
    }
</style>
