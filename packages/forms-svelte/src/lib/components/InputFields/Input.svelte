<script lang="ts">
import InputWrapper from './InputWrapper.svelte';
import GenericInput from './GenericInput.svelte';
import DateInput from './DateInput.svelte';
import CheckboxInput from './CheckboxInput.svelte';
import RangeInput from './RangeInput.svelte';
import type { GenericInputProps } from './types/GenericInputProps.ts';

let { value = $bindable(), ...props }: GenericInputProps = $props();

const { id, label, optional, errors, hint, type = 'text', children, name } = props;
</script>

{#if type === "checkbox" && typeof value === "boolean"}
    <CheckboxInput {...props} bind:value={value} />
{:else}
    <InputWrapper {id} {label} {optional} {errors} {hint}>
        {#if type === 'date' && value instanceof Date}
            <DateInput {...props} bind:value={value} name={name ?? label} />
        {:else if type === "range"}
            <RangeInput {...props} bind:value={value} />
        {:else}
            <GenericInput {...props} bind:value={value} />
        {/if}
        {@render children?.()}
    </InputWrapper>
{/if}
