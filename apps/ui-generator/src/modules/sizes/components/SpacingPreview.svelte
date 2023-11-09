<script lang="ts">
    export let style;
    export let label;
</script>

<div class="preview-row">
        <span class="label">{label}</span>
        <div class="nc-cluster spacings" style={style}>
            <div></div>
            <div></div>
        </div>
    </div>

<style>
    .preview-row {
        display: grid;
        grid-template-columns: 20ch 1fr;
        gap: var(--spacing-near);
        inline-size: 100%;
        align-items: center;
    }

    .label {
        font-size: 0.75rem;
        color: var(--color-brand-primary-base);
    }

    .spacings div {
        inline-size: 3rem;
        block-size: 3rem;
        display: block;
        background-color: var(--color-surface-strong);
        border: 2px solid var(--color-text-subtle);
    }

</style>
