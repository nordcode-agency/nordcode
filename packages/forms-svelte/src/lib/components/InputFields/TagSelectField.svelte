<script lang="ts">
    import type { FormEventHandler } from 'svelte/elements';
    import type { GenericInputProps } from './types/GenericInputProps.ts';
    import type { Option } from '../../shared/models/Option.ts';

    interface TagSelectProps extends GenericInputProps {
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
        options,
    }: TagSelectProps = $props();

    const handleChange: FormEventHandler<HTMLFieldSetElement> = event => {
        const target = event.target as HTMLInputElement;

        value = +target.value;
    };
</script>

<div class="nc-input-field nc-tag-select-field">
    <p class="nc-stack">
        <span class="nc-input-label" {id}
            >{label}
            {#if !required}
                <span class="nc-hint"> (optional)</span>
            {/if}
        </span>
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
            <label for="tag-select-1" class="nc-pile badge">
                <input
                    id="tag-select-{option.label}"
                    class="nc-tag-input"
                    type="radio"
                    value={option.value}
                    {name}
                    {required}
                />
                <span>{option.label}</span>
            </label>
        {/each}
    </fieldset>
</div>
