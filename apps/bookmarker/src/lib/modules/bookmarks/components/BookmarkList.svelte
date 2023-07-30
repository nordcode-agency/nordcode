<script lang="ts">
  import type {Bookmark} from "$lib/modules/bookmarks/Bookmark";
  import BookmarkArticle from "$lib/modules/bookmarks/components/BookmarkArticle.svelte";

  export let bookmarks: Bookmark[];

</script>

<ul class="list-reset stack -layout-base bookmark-list">
  {#each bookmarks as bookmark, index (bookmark.id)}
    <li class="-full-width"><BookmarkArticle bookmark={bookmark} /></li>
  {/each}
</ul>

<style lang="postcss">
  .bookmark-list {
        container: bookmarklist / inline-size;
    }

  .bookmark-list:hover li:not(:hover) {
    opacity: 0.7
  }
</style>
