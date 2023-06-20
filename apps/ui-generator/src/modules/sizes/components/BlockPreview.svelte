<script lang="ts">
    export let style;
    export let label;
</script>

<div class="preview-row">
        <span class="label">{label}</span>
        <div class="block live-theme" style={style}>
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

    .block {
        inline-size: 2rem;
        block-size: 2rem;
        display: block;
        background-color: var(--color-surface-strong);
        border: 2px solid var(--color-brand-primary-base);
    }

</style>
