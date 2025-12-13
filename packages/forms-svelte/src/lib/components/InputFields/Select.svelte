<script lang="ts">
import type { FormEventHandler, HTMLSelectAttributes } from 'svelte/elements';
import type { Option } from '../../shared/models/Option.ts';
import InputWrapper from './InputWrapper.svelte';
import type { InputLabelProps } from './types/InputLabelProps.ts';

interface SelectProps extends InputLabelProps, Omit<HTMLSelectAttributes, 'id' | 'name' | 'required'> {
    options: Option[];
}

let {
    label,
    name = label.split(' ').join('').toLowerCase(),
    id = `${name}-label`,
    errors = [],
    hint = '',
    required = true,
    value = $bindable(),
    children,
    options,
    oninput,
    class: className,
    ...rest
}: SelectProps = $props();

const handleInput: FormEventHandler<HTMLSelectElement> = event => {
    oninput?.(event);
    const target = event.target as HTMLSelectElement;

    value = target.value;
};
</script>

<InputWrapper {id} {label} {required} {errors} {hint}>
    <select
        class={`nc-select | ${className}`}
        {id}
        {name}
        {required}
        aria-readonly={required}
        oninput={handleInput}
        {...rest}
    >
        {#each options as option}
            <option value={option.value} selected={value === option.value}>{option.label}</option>
        {/each}
    </select>
    {@render children?.()}
</InputWrapper>
