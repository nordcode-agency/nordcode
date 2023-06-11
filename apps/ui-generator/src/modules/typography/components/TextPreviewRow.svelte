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
        grid-template-columns: 80px 1fr;
        gap: var(--spacing-near);
        inline-size: 100%;
        align-items: center;
    }

    .label {
        font-size: var(--font-size-small);
        color: var(--color-brand-primary-base);
    }

</style>
