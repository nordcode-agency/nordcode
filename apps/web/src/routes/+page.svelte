<script>
  import Header from "$lib/modules/common/components/Header.svelte";
  import Hero from "$lib/modules/common/components/Hero.svelte";
  import Navigation from "$lib/modules/common/components/Navigation.svelte";
  import Work from "$lib/modules/common/components/Work.svelte";
</script>

<svelte:head>

</svelte:head>

<div class="wrapper">
		<Header />
		<Hero />
		<Navigation />
	</div>
	<Work />

<style lang="postcss">
	.wrapper {
		display: grid;
    grid-template-rows: auto 1fr auto;
		block-size: 100svh;
		padding-inline: var(--spacing-base);
		padding-block-end: var(--spacing-base);

		/*@media (--md-n-above) {*/
		/*	padding-inline: var(--spacing-farthest);*/
		/*	padding-block-end: var(--spacing-farthest);*/
		/*}*/
	}
</style>
