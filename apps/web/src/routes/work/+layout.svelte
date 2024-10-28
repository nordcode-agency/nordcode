<script>
	import Header from "$lib/modules/common/components/Header.svelte";
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();

</script>

<Header />
{@render children?.()}