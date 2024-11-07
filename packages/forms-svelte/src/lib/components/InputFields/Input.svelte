<script lang="ts">
import CheckboxInput from './CheckboxInput.svelte';
import DateInput from './DateInput.svelte';
import GenericInput from './GenericInput.svelte';
import InputWrapper from './InputWrapper.svelte';
import RangeInput from './RangeInput.svelte';
import type { GenericInputProps } from './types/GenericInputProps.ts';

let { value = $bindable(), ...props }: GenericInputProps = $props();

const { id, label, optional, errors, hint, type = 'text', children, name } = props;
</script>

<InputWrapper id={id} label={label} optional={optional} errors={errors} hint={hint}>
    {#if type === 'date'}
        <DateInput {...props} bind:value={value as Date | undefined} name={name ?? label} />
    {:else if type === "range"}
        <RangeInput {...props} bind:value={value} />
    {:else}
        <GenericInput {...props} bind:value={value} />
    {/if}
    {@render children?.()}
</InputWrapper>
