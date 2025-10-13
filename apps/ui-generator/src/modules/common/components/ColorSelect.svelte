<script lang="ts">
import type { FormEventHandler } from 'svelte/elements';

interface ColorSelectProps {
    options: Record<string, string[]>;
    label: string;
    value: string;
}

let { options, label, value = $bindable() }: ColorSelectProps = $props();

const name = label.split(' ').join('').toLowerCase();

const handleInput: FormEventHandler<HTMLSelectElement> = (event) => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    const target = event.target as HTMLInputElement;

    value = target.value;
};
</script>

<div class="nc-input-field" style="inline-size: 100%">
    <label for={name} id={`${name}-label`}>
        {label}
    </label>

    <select name={name} oninput={handleInput}>
        {#each Object.entries(options) as optGroup}
            <optgroup label={optGroup[0]}>
                {#each optGroup[1] as option}
                    <option value={option} selected={option === value}>
                        {option}
                    </option>
                {/each}
            </optgroup>
        {/each}
    </select>
</div>
