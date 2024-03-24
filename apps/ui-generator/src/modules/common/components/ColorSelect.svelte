<script lang="ts">
    export let options: Record<string, string[]>;
    export let label: string;

    export let value: string;

    const name = label.split(" ").join("").toLowerCase();

    const handleInput = (event: InputEvent) => {
        // in here, you can switch on type and implement
        // whatever behaviour you need
        const target = event.target as HTMLInputElement;

        value = target.value;
    };
</script>

<div class="nc-input-field" style="inline-size: 100%;">
    <label for={name} id={`${name}-label`}>
        {label}
    </label>

    <select name={name}
            on:input={handleInput}
    >
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
