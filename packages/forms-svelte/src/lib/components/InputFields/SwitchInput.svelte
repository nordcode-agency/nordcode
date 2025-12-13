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
    required = true,
    checked = $bindable(),
    class: className,
    value,
    ...rest
}: CheckboxInputProps = $props();
</script>

<div class="nc-cluster | nc-input-field | nc-checkbox-wrapper">
    <label for={id} class="nc-stack" data-label>
        <span>{label}
            {#if required}
                <span class="nc-input-required-mark">
                    *
                </span>
            {/if}
        </span>

        {#if hint}<span class="nc-input-hint">{hint}</span>{/if}
        {#if errors?.length > 0}
            {#each errors as error}
                <span class="nc-input-error">{error}</span>
            {/each}
        {/if}
    </label>
    <input
        data-input
        class={`nc-input-switch | ${className}`}
        {id}
        {name}
        {autocomplete}
        {required}
        aria-required={required}
        type={'checkbox'}
        {checked}
        {value}
        oninput={() => (checked = !checked)}
        {...rest}
    />
</div>
