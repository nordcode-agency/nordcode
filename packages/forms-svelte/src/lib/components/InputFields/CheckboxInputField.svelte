<script lang="ts">
import type { FormEventHandler } from 'svelte/elements';
import type { Option } from '../../shared/models/Option.ts';
import type { GenericInputProps } from './types/GenericInputProps.ts';

interface CheckboxInputFieldProps extends GenericInputProps {
    options: Option[];
    value?: (number | string | boolean)[];
}

let {
    label,
    name = label.split(' ').join('').toLowerCase(),
    id = `${name}-label`,
    errors = [],
    hint = '',
    required = true,
    options,
    value = $bindable(),
    class: className,
    ...rest
}: CheckboxInputFieldProps = $props();

const handleChange: FormEventHandler<HTMLFieldSetElement> = event => {
    const target = event.target as HTMLInputElement;

    if (!value) {
        value = [];
    }

    if (target.checked) {
        value.push(+target.value);
    } else {
        value = value.filter(v => v !== +target.value);
    }
};
</script>

<fieldset class="nc-fieldset nc-input-field nc-checkbox-field" onchange={handleChange}>
    <legend class="nc-legend nc-stack">
        <span class="nc-input-label" {id}>{label}</span>
        {#if !required}
            <span class="nc-hint">
                (optional)
            </span>
        {/if}

        {#if hint}
            <span class="nc-hint" id={`${id}-hint`}>{hint}</span>
        {/if}
        {#if errors?.length > 0}
            {#each errors as error}
                <span class="nc-input-error">{error}</span>
            {/each}
        {/if}
    </legend>

    {#each options as option}
        <div class="nc-checkbox-wrapper nc-input-field">
            <label for={option.label} class="nc-stack" data-label>
                <span class="nc-input-label">{option.label}</span>
                {#if option.hint}
                    <span class="nc-hint">{option.hint}</span>
                {/if}
            </label>
            <input
                data-input
                id={option.label}
                class={`nc-input-checkbox | ${className}`}
                type="checkbox"
                value={option.value}
                checked={value?.includes(option.value)}
                {name}
                {required}
                {...rest}
            />
        </div>
    {/each}
</fieldset>
