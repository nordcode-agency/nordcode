<script lang="ts">
import InputWrapper from './InputWrapper.svelte';
import GenericInput from './GenericInput.svelte';
import DateInput from './DateInput.svelte';
import CheckboxInput from './CheckboxInput.svelte';
import RangeInput from './RangeInput.svelte';

export let label: string;
export let name: string;
export let id: string;
export let errors: string[] = [];
export let hint: string = '';
export let autocomplete: string = 'off';
export let type: string = 'text';
export let optional: boolean = false;

export let value;
</script>

{#if type === "checkbox"}
    <CheckboxInput {id} {name} bind:value={value} {label} {autocomplete} {optional} {errors} {hint}/>
{:else}
    <InputWrapper {id} {label} {optional} {errors} {hint}>
        {#if type === 'date'}
            <DateInput {id} {name} {optional} {autocomplete} bind:value={value}/>
        {:else if type === "range"}
            <RangeInput {id} {name} {optional} {autocomplete} {type} bind:value={value} {...$$restProps}/>
        {:else}
            <GenericInput {id} {name} {optional} {autocomplete} {type} bind:value={value} {...$$restProps}/>
        {/if}
        <slot></slot>
    </InputWrapper>
{/if}
