<script lang="ts">
    export let label: string;
    export let id: string;
    export let errors: string[] = [];
    export let hint: string = '';
    export let optional: boolean = false;

</script>

<div class="nc-input-field">
    <label for={id} class="nc-stack">
        <span class="nc-input-label">{label} {#if optional}(optional){/if}</span>
        {#if hint}<span class="nc-input-hint">{hint}</span>{/if}
        {#if errors?.length > 0}
        {#each errors as error}
            <span class="nc-input-error">{error}</span>
        {/each}
        {/if}
    </label>
    <div class="nc-cluster full-width -nowrap"><slot></slot></div>
</div>
