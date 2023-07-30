<script lang="ts">
  import type {PageData} from './$types';

  export let data: PageData;
</script>


<div class="wrapper">
  hello
  {#if data.loggedIn}
    <p>You're logged in!</p>
  {:else}
    <ul>
      <li>
        <a href="/new-collection">New collection</a>
      </li>
       <li>
        <a href="/open-collection">Open existing collection</a>
      </li>
    </ul>
  {/if}



</div>


<style lang="postcss">
	.wrapper {
		display: grid;
    grid-template-rows: auto 1fr auto;
		block-size: 100svh;
		padding-inline: var(--spacing-base);
		padding-block-end: var(--spacing-base);

	}
</style>
