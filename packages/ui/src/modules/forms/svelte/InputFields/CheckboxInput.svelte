<script lang="ts">
    export let label: string;
    export let name: string;
    export let id: string;
    export let errors: string[] = [];
    export let hint: string = '';
    export let autocomplete: string = "";
    export let type: string = 'checkbox';
    export let optional: boolean = false;

    export let value;
</script>



<div class="nc-input-field | cluster | nc-checkbox-wrapper">
    <label for={id} class="stack">
        <span class="nc-input-label">{label} {#if optional}(optional){/if}</span>
        {#if hint}<span class="nc-input-hint">{hint}</span>{/if}
        {#if errors?.length > 0}
        {#each errors as error}
            <span class="nc-input-error">{error}</span>
        {/each}
        {/if}
    </label>
    <input
            id={id}
       name={name}
       aria-required={!optional}
       autocomplete={autocomplete}
       type={'checkbox'}
       checked={value}
       on:input={() => value = !value}
>
</div>
