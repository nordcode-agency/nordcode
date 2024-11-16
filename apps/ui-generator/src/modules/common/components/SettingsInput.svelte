<script lang="ts">
    import type { FormEventHandler } from 'svelte/elements';

    interface SettingsInputProps {
        label: string;
        token?: string;
        hint?: string;
        max: string;
        min: string;
        step: string;
        value: number | string | boolean;
        oninput?: FormEventHandler<HTMLInputElement>;
        disabled?: boolean;
    }

    let {
        label,
        token,
        hint,
        max,
        min,
        step,
        value = $bindable(),
        oninput,
        ...rest
    }: SettingsInputProps = $props();

    const name = label.split(' ').join('').toLowerCase();
</script>

<div class="nc-input-field" style="inline-size: 100%;">
    <label for={name} id={`${name}-label`} class="nc-stack">
        <span class="nc-input-label">{label}</span>
        {#if token}
            <span
                >Token: <var class="token | input-token">
                    {token}
                </var>
            </span>
        {/if}
        {#if hint}
            <p class="nc-hint">{hint}</p>
        {/if}
    </label>

    <div class="nc-grid" style="grid-template-columns: 7fr 3fr; inline-size: 100%">
        <input
            class="nc-input"
            id={name}
            {name}
            autocomplete="off"
            type="range"
            {min}
            {max}
            {step}
            bind:value
            {oninput}
            {...rest}
        />

        <input
            class="nc-input"
            name={`${name}-precise`}
            aria-labelledby={`${name}-label`}
            autocomplete="off"
            type="number"
            {min}
            {max}
            {step}
            bind:value
            {oninput}
            {...rest}
        />
    </div>
</div>
