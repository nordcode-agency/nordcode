<script lang="ts">
    import type { FormEventHandler } from 'svelte/elements';
    import type { GenericInputProps } from './types/GenericInputProps.ts';

    let {
        label,
        name = label.split(' ').join('').toLowerCase(),
        id = `${name}-label`,
        errors = [],
        hint = '',
        required = true,
        autocomplete = 'off',
        type,
        value = $bindable(),
        class: className,
        ...rest
    }: GenericInputProps = $props();

    const handleInput: FormEventHandler<HTMLInputElement> = event => {
        // in here, you can switch on type and implement
        // whatever behaviour you need
        const target = event.target as HTMLInputElement;

        if (type?.match(/^(number|range)$/)) {
            value = +target.value;
        }
        value = target.value;
    };
</script>

<div class="nc-stack -nogap full-width | nc-input-range">
    <input
        class={`nc-input | ${className}`}
        {id}
        {name}
        {required}
        {autocomplete}
        {type}
        {value}
        oninput={handleInput}
        {...rest}
    />
    <small class="nc-hint">{value}</small>
</div>
