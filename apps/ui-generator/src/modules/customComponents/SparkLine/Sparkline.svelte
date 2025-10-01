<script lang="ts">
    interface SparklineProps {
    data: number[];
    strokeWidth?: number;
    label: string;
    appearance?: 'gradient' | 'line';
    class?: string;
    style?: string;
}

let {
        data,
    strokeWidth = 2,
    label = "",
    appearance = "gradient",
    class: className = "",
    style = ""
    }: SparklineProps = $props();

    // x max = amount of values - 1
const viewBoxX = data.length - 1;
// y max = highest value + stroke width
const viewBoxY = Math.max(...data) + strokeWidth;

const path = data.map((value, index) => {
    return `${index === 0 ? 'M' : 'L'} ${index} ${viewBoxY - value}`;
}).join(' ');

const gradientPath = `${path} L ${viewBoxX} ${viewBoxY} L 0 ${viewBoxY} Z`;
</script>


 <svg
     width="50px"
     height="200px"
     preserveAspectRatio="none"
     viewBox={`0 0 ${viewBoxX} ${viewBoxY}`}
     style={style ?? ""}
        aria-label={label ?? ""}
        role="img"
        class={["nc-sparkline", className].filter(Boolean).join(' ')}
 >
     {#if appearance !== 'line'}
                      <defs>
        <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--gradient-color)" stop-opacity="1" />
            <stop offset="100%" stop-color="var(--gradient-color)" stop-opacity="0" />
        </linearGradient>
    </defs>

    <path d={gradientPath} fill="url(#sparkline-gradient)" stroke="transparent" />
     {/if}


    <path d={path} fill="transparent" vector-effect="non-scaling-stroke" stroke="var(--line-color)" stroke-width={strokeWidth} />
</svg>

<style>
    .nc-sparkline {
        display: inline-block;
        aspect-ratio: 4 / 1;
        width: auto;
        height: 1em;
        vertical-align: middle;

        --line-color: var(--color-brand-primary-base);
        --gradient-color: var(--color-brand-primary-surface);
    }

</style>
