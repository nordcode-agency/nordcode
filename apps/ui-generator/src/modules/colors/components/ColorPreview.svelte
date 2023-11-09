<script lang="ts">
    export let color;
    export let description;
</script>

<div class="preview-row">
    <span class="label">{color}</span>
    <div class="nc-cluster -centered -nowrap">
        <div class="color-bg live-theme" style={`background-color: var(${color})`}></div>
        <div class="color-fg live-theme">
            {description}
        </div>
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

    .color-bg {
        inline-size: 3rem;
        block-size: 3rem;
        min-inline-size: 3rem;
        display: block;
        border: 1px solid #eee;
    }

    .color-fg {
        color: var(--color-text-default);
        font-size: var(--font-size-small);
    }

</style>
