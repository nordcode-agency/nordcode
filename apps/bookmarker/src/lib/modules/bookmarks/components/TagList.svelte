<script lang="ts">
    import Tag from "$lib/modules/bookmarks/components/Tag.svelte";
    import type {CheckableTag} from "$lib/modules/bookmarks/Bookmark";
    import {goto} from "$app/navigation";
    import ClearIcon from "$lib/modules/common/icons/ClearIcon.svelte";


    function reset() {
        const url = new URL(window.location.href);
        url.searchParams.delete("tags");
        goto(url, {replaceState: true});

    }

    export let tags: CheckableTag[];

    $: selectedTagsAmount = tags.filter(tag => tag.checked).length;

</script>

<div class="stack -layout-far">
    <h3>Filter by tags</h3>
    <div class="stack -layout-nearest">
    {#each tags as tag, index (tag.name)}
        <Tag name={tag.name} bind:checked={tag.checked}/>
    {/each}
        </div>
    <div class="clear cluster -nowrap -centered">
        <button class="nc-button -small -icon -secondary" on:click={reset} aria-label="clear tag filters">
            <ClearIcon/>
        </button>
        <small>{selectedTagsAmount} / {tags.length} selected</small></div>
</div>

<style lang="postcss">
    .clear {
        background: var(--color-surface-subtle);
        position: sticky;
        bottom: 0;
        padding: var(--spacing-near);
        border-radius: var(--border-radius-medium);

    }

    .clear button {
        box-shadow: none !important;
        transform: none !important;
        inset: 0 !important;
    }
</style>
