<script lang="ts">
import type { GenericInputProps } from './types/GenericInputProps.ts';

interface CheckboxInputProps extends GenericInputProps {
    label: string;
    checked: boolean;
}

let {
    label,
    name = label.split(' ').join('').toLowerCase(),
    id = `${name}-label`,
    errors = [],
    hint = '',
    autocomplete = '',
    optional = false,
    checked = $bindable(),
    value,
}: CheckboxInputProps = $props();
</script>



<div class="nc-cluster | nc-input-field  | nc-checkbox-wrapper">
    <label for={id} class="nc-stack">
        <span class="nc-input-label">{label} {#if optional}(optional){/if}</span>
        {#if hint}<span class="nc-input-hint">{hint}</span>{/if}
        {#if errors?.length > 0}
        {#each errors as error}
            <span class="nc-input-error">{error}</span>
        {/each}
        {/if}
    </label>
    <input
      id={id}
       name={name}
       autocomplete={autocomplete}
       required={optional ? false : true}
       type={'checkbox'}
       checked={checked}
       value={value}
       oninput={() => checked = !checked}
>
</div>
