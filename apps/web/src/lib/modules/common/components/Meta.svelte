<script lang="ts">
	type Props = {
		title: string;
		description: string;
		noIndex?: boolean;
	};

	let { title, description, noIndex }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if noIndex}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>
