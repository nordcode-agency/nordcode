<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<ul class="gallery">
	{@render children?.()}
</ul>

<style>
	.gallery {
		--_gallery-gap: var(--gallery-gap, var(--spacing-base));
		--_gallery-padding-block: var(--gallery-padding-block, 0);

		display: flex;
		flex-direction: row;
		gap: calc(var(--_gallery-gap) / 2);
		margin: 0;
		max-inline-size: 100%;
		block-size: var(--gallery-size, auto);
		padding-inline-start: var(
			--gallery-padding-inline-start,
			var(--gallery-padding-inline, var(--_gallery-gap, var(--gallery-gap)))
		);
		padding-inline-end: var(
			--gallery-padding-inline-end,
			var(--gallery-padding-inline, var(--_gallery-gap, var(--gallery-gap)))
		);
		padding-block-start: calc(var(--gallery-padding-block) / 2);
		padding-block-end: calc(var(--gallery-padding-block) / 2);
		overflow-x: auto;
		overscroll-behavior-inline: contain;
		scroll-snap-type: inline mandatory;
		scroll-padding-inline: var(
			--gallery-scroll-padding-inline,
			var(--gallery-padding-inline, var(--_gallery-gap))
		);
		list-style: none;

		@media (prefers-reduced-motion: no-preference) {
			scroll-behavior: smooth;
		}

		& > * {
			display: inline-block;
			scroll-snap-align: start;
			flex-shrink: 0;
			padding-inline-start: 0;
		}
	}
</style>
