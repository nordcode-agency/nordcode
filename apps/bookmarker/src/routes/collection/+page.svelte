<script lang="ts">
    import ListLayout from "$lib/modules/bookmarks/components/ListLayout.svelte";
    import type {PageData} from './$types';
    import TagList from "$lib/modules/bookmarks/components/TagList.svelte";
    import BookmarkList from "$lib/modules/bookmarks/components/BookmarkList.svelte";
    import SearchBar from "$lib/modules/common/components/SearchBar.svelte";
    import {goto} from "$app/navigation";
    import BookmarkEditDialog from "$lib/modules/bookmarks/components/BookmarkEditDialog.svelte";

    export let data: PageData;

    function updateSearch(evt: { detail: string }) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        if (evt.detail === '') {
            urlSearchParams.delete('search');
        } else {
            urlSearchParams.set('search', evt.detail);
        }
        goto(`?${urlSearchParams.toString()}`, {replaceState: true});
    }

</script>


<ListLayout>
    <TagList slot="aside" tags={data.tags}/>
    <div slot="main" class="stack -layout-far -stretched">
        <SearchBar initialValue={data.search ?? ''} on:search={updateSearch}/>
        <BookmarkList bookmarks={data.bookmarks}></BookmarkList>
        <BookmarkEditDialog bookmarkToEdit={data.bookmarks[0]}/>
    </div>
</ListLayout>
