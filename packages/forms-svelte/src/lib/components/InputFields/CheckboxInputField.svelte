<script lang="ts">
import type { FormEventHandler } from 'svelte/elements';
import type { Option } from '../../shared/models/Option.ts';

export let label: string;
export let name: string = label.split(' ').join('').toLowerCase();
export let id: string = `${name}-label`;
export let errors: string[] = [];
export let hint: string = '';
export let optional: boolean = false;
export let options: Option[] = [];

export let value: number | string | boolean = 0;

const handleChange: FormEventHandler<HTMLFieldSetElement> = (event) => {
    const target = event.target as HTMLInputElement;

    value = +target.value;
};
</script>

<div class="nc-input-field nc-checkbox-field">
    <p class="nc-stack">
        <span class="nc-input-label" id={id}>{label}{#if optional}(optional){/if}</span>
        {#if hint}
        <span class="nc-hint" id={`${id}-hint`}
            >{hint}</span
        >
        {/if}
        {#if errors?.length > 0}
        {#each errors as error}
            <span class="nc-input-error">{error}</span>
        {/each}
        {/if}
    </p>
    <fieldset class="nc-fieldset" aria-labelledby={id} aria-describedby={`${id}-hint`} on:change={handleChange}>
        {#each options as option}
<div class="nc-checkbox-wrapper nc-input-field">
            <label for={option.label} class="nc-stack">
    <span class="nc-input-label">{option.label}</span>
    {#if option.hint}
    <span class="nc-hint"
        >{option.hint}</span
    >
    {/if}
</label>
<input
    id={option.label}
    class="nc-input-radio"
    type="checkbox"
    value={option.value}
    name={name}
/>
</div>
{/each}
    </fieldset>
</div>
