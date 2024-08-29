<script lang="ts">
import type { InputLabelProps } from './types/InputLabelProps.ts';

let {
    label,
    id = `${name}-label`,
    errors = [],
    hint = '',
    optional = false,
    children,
}: InputLabelProps = $props();
</script>

<div class="nc-input-field">
    <label for={id} class="nc-stack">
        <span class="nc-input-label">{label} {#if optional}(optional){/if}</span>
        {#if hint}<span class="nc-hint">{hint}</span>{/if}
        {#if errors?.length > 0}
        {#each errors as error}
            <span class="nc-input-error">{error}</span>
        {/each}
        {/if}
    </label>
    <div class="nc-cluster full-width -nowrap">
        {@render children?.()}
        </div>
</div>
