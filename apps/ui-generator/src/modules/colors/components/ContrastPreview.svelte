<script lang="ts">
    export let textColor: string;
    export let surfaceColor: string;
    export let wcagContrast: number;
    export let apcaContrast: number;
</script>

<style>
    .big-text {
        font-size: var(--font-size-large);
    }

    .badge {
        display: flex;
        align-items: center;
        gap: 1ch;
        background: var(--color-surface-default);
    }

    .badge > span {
        inline-size: 1ch;
        block-size: 1ch;
        border-color: var(--border-radius-round);
        display: block;
    }



    [data-ok=true] {
        background: var(--color-status-warning-base);
    }

    [data-good=true] {
        background: var(--color-status-success-base);
    }

    [data-fail=true] {
        background: var(--color-status-error-base);
    }
</style>


<div class="nc-stack -near nc-box" style="color: var({textColor}); background: var({surfaceColor})">
    <svg
        class="nc-icon"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-size="xl"
    >
        <path
            d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"
        ></path>
    </svg>
    <p class="big-text">Bigger Text</p>
    <p>Smaller text but more</p>
    <div class="nc-cluster -nearest">
        <p class="badge"><strong>W</strong> {wcagContrast} <span
        data-ok="{wcagContrast >= 4.5}" data-good="{wcagContrast >= 7}" data-fail="{wcagContrast < 4.5}"
        >
            <span></span>
        </span></p>
        <p class="badge"><strong>A</strong> {apcaContrast} <span
            data-ok="{Math.abs(apcaContrast) >= 60}"
            data-good="{Math.abs(apcaContrast) >= 75}"
            data-fail="{Math.abs(apcaContrast) < 60}">
            <span></span>
        </span></p>
    </div>
</div>
