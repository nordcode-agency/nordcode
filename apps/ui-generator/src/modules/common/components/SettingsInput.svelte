<script lang="ts">
export let label: string;
export let max: string;
export let min: string;
export let step: string;

export let value: number | string | boolean;

const name = label.split(' ').join('').toLowerCase();

const handleInput = (event: InputEvent) => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    const target = event.target as HTMLInputElement;
    value = +target.value;
    $host().dispatchEvent(
        new CustomEvent('input', {
            detail: { value },
        }),
    );
};
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
               value={value}
               on:input={handleInput}
               {...$$restProps}
        >

        <input class="nc-input"
               name={`${name}-precise`}
               aria-labelledby="{`${name}-label`}"
               autocomplete="off"
               type="number"
               min={min}
               max={max}
               step={step}
               value={value}
               on:input={handleInput}
               {...$$restProps}
        >
    </div>
</div>
