<script lang="ts">
    export let color;
</script>

<div class="preview-row">
        <span class="label">{color}</span>
        <div class="cluster">
            <div class="color-bg live-theme" style={`background-color: var(${color})`}></div>
            <div class="color-fg live-theme" style={`color: var(${color})`}>
                Color text
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
        inline-size: 2rem;
        block-size: 2rem;
        display: block;
        border: 1px solid #eee;
    }

</style>
