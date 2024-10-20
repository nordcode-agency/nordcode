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
    optional = false,
    options,
    value = $bindable(),
}: RadioInputFieldProps = $props();

const handleChange: FormEventHandler<HTMLFieldSetElement> = (event) => {
    const target = event.target as HTMLInputElement;

    value = +target.value;
};
</script>

<div class="nc-input-field nc-radio-field">
    <p class="nc-stack">
        <span class="nc-input-label" {id}
            >{label}{#if optional}(optional){/if}</span
        >
        {#if hint}
            <span class="nc-hint" id={`${id}-hint`}>{hint}</span>
        {/if}
        {#if errors?.length > 0}
            {#each errors as error}
                <span class="nc-input-error">{error}</span>
            {/each}
        {/if}
    </p>
    <fieldset
        class="nc-fieldset"
        aria-labelledby={id}
        aria-describedby={`${id}-hint`}
        onchange={handleChange}
    >
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
                    class="nc-input-radio"
                    type="radio"
                    value={option.value}
                    {name}
                    required={optional ? false : true}
                />
            </div>
        {/each}
    </fieldset>
</div>
