<script lang="ts">
    import SearchIcon from "$lib/modules/common/icons/SearchIcon.svelte";
    import {createEventDispatcher} from "svelte";

    export let initialValue: string = '';
    let inputValue = initialValue;

    const dispatch = createEventDispatcher<{ search: string }>();

    function search() {
        dispatch("search", inputValue);
    }

</script>

<form on:submit|preventDefault={search} class="cluster -nowrap -stretched -centered -layout-none">
    <div class="search-input">
    <input type="search" placeholder="Search for a bookmark" bind:value={inputValue}/>
    <span class="icon">
    <SearchIcon/>
        </span>
        </div>

    <button class="nc-button">Search</button>
</form>


<style lang="postcss">
    .search-input {
        display: grid;
        grid-template-columns: var(--button-height-base) 1fr;
        block-size: calc(var(--button-height-base) + 2 * var(--border-width-thin));
        border-radius: var(--border-radius-large);
        border: var(--border-width-thin) solid var(--color-border-subtle);
        flex: 1;
        border-start-end-radius: 0;
        border-end-end-radius: 0;
        padding-inline-end: var(--spacing-nearest);
    }

    .icon {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        aspect-ratio: 1;
        block-size: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-start-start-radius: var(--border-radius-large);
        border-end-start-radius: var(--border-radius-large);
    }

    input {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        border: none;
        padding-inline-start: var(--button-height-base);
        min-block-size: 100%;
        border-start-start-radius: var(--border-radius-large);
        border-end-start-radius: var(--border-radius-large);
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    button {
        border-start-end-radius: var(--border-radius-large);
        border-end-end-radius: var(--border-radius-large);
        border-start-start-radius: 0;
        border-end-start-radius: 0;
        min-block-size:calc(var(--button-height-base) + 2 * var(--border-width-thin));
        box-shadow: none !important;
        transform: none !important;
        inset: 0 !important;
    }
</style>
