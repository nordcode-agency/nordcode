<script lang="ts">
    export let style;
    export let text;
    export let label;
</script>

<div class="text-preview-row">
        <span class="label">{label}</span>
        <p style={style}>{text}</p>
    </div>

<style>
    .text-preview-row {
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

</style>
