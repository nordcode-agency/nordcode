<script lang="ts">
  import type {PageData} from './$types';

  export let data: PageData;
</script>


<div class="wrapper">
  hello
  {#if data.user}
    <p>You're logged in!</p>
  {:else}
    <ul>
      <li>
        <a href="/login">Login</a>
      </li>
       <li>
        <a href="/signup">Signup</a>
      </li>
    </ul>
  {/if}

  {JSON.stringify(data)}


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
