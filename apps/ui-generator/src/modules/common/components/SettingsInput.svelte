<script lang="ts">
import type { FormEventHandler } from 'svelte/elements';

interface SettingsInputProps {
    label: string;
    max: string;
    min: string;
    step: string;
    value: number | string | boolean;
    oninput: FormEventHandler<HTMLInputElement>;
}

let { label, max, min, step, value = $bindable(), oninput, ...rest }: SettingsInputProps = $props();

const name = label.split(' ').join('').toLowerCase();
</script>

<div class="nc-input-field" style="inline-size: 100%;">
    <label for={name} id={`${name}-label`}>
        {label}
    </label>

    <div class="nc-grid" style="grid-template-columns: 7fr 3fr; inline-size: 100%">
        <input class="nc-input"
               id={name}
               name={name}
               autocomplete="off"
               type="range"
               min={min}
               max={max}
               step={step}
               bind:value={value}
               oninput={oninput}
               {...rest}
        >

        <input class="nc-input"
               name={`${name}-precise`}
               aria-labelledby="{`${name}-label`}"
               autocomplete="off"
               type="number"
               min={min}
               max={max}
               step={step}
               bind:value={value}
               oninput={oninput}
               {...rest}
        >
    </div>
</div>
