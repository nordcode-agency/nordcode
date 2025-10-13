<script lang="ts">
import DateInput from './DateInput.svelte';
import GenericInput from './GenericInput.svelte';
import InputWrapper from './InputWrapper.svelte';
import RangeInput from './RangeInput.svelte';
import type { GenericInputProps } from './types/GenericInputProps.ts';

let { value = $bindable(), ...props }: GenericInputProps = $props();

const { id, label, required, errors, hint, type = 'text', children, name } = props;
</script>

<InputWrapper {id} {label} {name} {required} {errors} {hint}>
    {#if type === 'date'}
        <DateInput {...props} bind:value={value as Date | undefined} />
    {:else if type === 'range'}
        <RangeInput {...props} bind:value />
    {:else}
        <GenericInput {...props} bind:value />
    {/if}
    {@render children?.()}
</InputWrapper>
