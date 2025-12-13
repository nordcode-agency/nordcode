<script lang="ts">
import type { FormEventHandler } from 'svelte/elements';
import type { Option } from '../../shared/models/Option.ts';
import type { GenericInputProps } from './types/GenericInputProps.ts';

interface RadioInputFieldProps extends GenericInputProps {
    options: Option[];
    value?: number | string | boolean;
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
}: RadioInputFieldProps = $props();

const handleChange: FormEventHandler<HTMLFieldSetElement> = event => {
    const target = event.target as HTMLInputElement;

    value = +target.value;
};
</script>

<fieldset class="nc-fieldset nc-input-field nc-radio-field" onchange={handleChange}>
    <legend class="nc-legend nc-stack">
        <span class="nc-input-label" {id}>
            <span>{label}
                {#if required}
                    <span class="nc-input-required-mark">
                        *
                    </span>
                {/if}
            </span>
        </span>
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
                class={`nc-input-radio | ${className}`}
                type="radio"
                value={option.value}
                {name}
                {required}
                checked={value === option.value}
                {...rest}
            />
        </div>
    {/each}
</fieldset>
