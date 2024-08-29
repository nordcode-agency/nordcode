<script lang="ts">
import InputWrapper from './InputWrapper.svelte';
import type { GenericInputProps } from './types/GenericInputProps.ts';
import type { Option } from '../../shared/models/Option.ts';
import type { FormEventHandler } from 'svelte/elements';

interface SelectProps extends Omit<GenericInputProps, 'type'> {
    options: Option[];
}

let {
    label,
    name = label.split(' ').join('').toLowerCase(),
    id = `${name}-label`,
    errors = [],
    hint = '',
    optional = false,
    value = $bindable(),
    children,
    options,
}: SelectProps = $props();

const handleInput: FormEventHandler<HTMLSelectElement> = (event) => {
    const target = event.target as HTMLInputElement;

    value = target.value;
};
</script>

<InputWrapper {id} {label} {optional} {errors} {hint}>
    <select class="nc-select"
            id={id}
            name={name}
            aria-required={!optional}
            oninput={handleInput}
    >
        {#each options as option}
            <option value={option.value} selected={value === option.value}>{option.label}</option>
        {/each}
    </select>
    {@render children?.()}
</InputWrapper>
