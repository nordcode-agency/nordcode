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
    required = true,
    checked = $bindable(),
    value,
    class: className,
    ...rest
}: CheckboxInputProps = $props();
</script>

<div class="nc-cluster | nc-input-field | nc-checkbox-wrapper">
    <label for={id} class="nc-stack" data-label>
        <span class="nc-input-label">{label}
            {#if !required}(optional){/if}</span>
        {#if hint}<span class="nc-input-hint">{hint}</span>{/if}
        {#if errors?.length > 0}
            {#each errors as error}
                <span class="nc-input-error">{error}</span>
            {/each}
        {/if}
    </label>
    <input
        data-input
        class={`nc-input-checkbox | ${className}`}
        {id}
        {name}
        {required}
        type={'checkbox'}
        {checked}
        {value}
        oninput={() => (checked = !checked)}
        {...rest}
    />
</div>
