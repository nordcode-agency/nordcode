<script lang="ts">
import type { InputLabelProps } from './types/InputLabelProps.ts';

let {
    label,
    name = label.split(' ').join('').toLowerCase(),
    id = `${name}-label`,
    errors = [],
    hint = '',
    required = true,
    children,
}: InputLabelProps = $props();
</script>

<div class="nc-input-field">
    <label for={id} class="nc-stack">
        <span class="nc-input-label">{label}
            {#if !required}
                <span class="nc-hint"> (optional)</span>
            {/if}
        </span>
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
