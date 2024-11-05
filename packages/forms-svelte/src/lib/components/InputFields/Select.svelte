<script lang="ts">
import type { FormEventHandler } from 'svelte/elements';
import type { Option } from '../../shared/models/Option.ts';
import InputWrapper from './InputWrapper.svelte';
import type { GenericInputProps } from './types/GenericInputProps.ts';

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
    oninput,
}: SelectProps = $props();

const handleInput: FormEventHandler<HTMLSelectElement> = (event) => {
    oninput?.(event);
    const target = event.target as HTMLInputElement;

    value = target.value;
};
</script>

<InputWrapper {id} {label} {optional} {errors} {hint}>
    <select class="nc-select"
            id={id}
            name={name}
            required={optional ? false : true}
            oninput={handleInput}
    >
        {#each options as option}
            <option value={option.value} selected={value === option.value}>{option.label}</option>
        {/each}
    </select>
    {@render children?.()}
</InputWrapper>
