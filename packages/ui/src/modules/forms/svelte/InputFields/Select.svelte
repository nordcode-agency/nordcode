<script lang="ts">
    import InputWrapper from "./InputWrapper.svelte";

    type Option = {
        label: string;
        // Can this be generic in svelte?
        value: string;
    }

    export let label: string;
    export let name: string;
    export let id: string;
    export let errors: string[] = [];
    export let hint: string = '';
    export let optional: boolean = false;

    export let options: Option[] = [];

    export let value;

    const handleInput = (event: InputEvent) => {
        // in here, you can switch on type and implement
        // whatever behaviour you need
        const target = event.target as HTMLInputElement

        value = target.value;
    }
</script>

<InputWrapper {id} {label} {optional} {errors} {hint}>
    <select class="nc-select"
            id={id}
              name={name}
              aria-required={!optional}
              on:input={handleInput}
    >
        {#each options as option}
            <option value={option.value} selected={value === option.value}>{option.label}</option>
        {/each}
    </select>
    <slot></slot>
</InputWrapper>
