<script lang="ts">
	import { navigateToId } from '$lib/utils/navigateToId';
	import { onMount } from 'svelte';

	interface Props {
		caption: string;
		id: string;
		children?: import('svelte').Snippet;
		cta?: import('svelte').Snippet;
	}

	let { caption, id, children, cta }: Props = $props();
	let liEl: HTMLLIElement = $state();

	let disabledPrevious = $state(false);
	let disabledNext = $state(false);

	onMount(() => {
		if (liEl.id === liEl.parentElement?.firstElementChild?.id) disabledPrevious = true;
		else disabledPrevious = false;

		if (liEl.id === liEl.parentElement?.lastElementChild?.id) disabledNext = true;
		else disabledNext = false;
	});

	const handleNext = (e: MouseEvent) => {
		const btnEl = e.target as HTMLButtonElement;
		const storyItem = btnEl.closest('li');
		const nextStoryItemId = storyItem?.nextElementSibling?.id;
		if (nextStoryItemId) navigateToId(nextStoryItemId);
	};
	const handlePrevious = (e: MouseEvent) => {
		const btnEl = e.target as HTMLButtonElement;
		const storyItem = btnEl.closest('li');
		const previousStoryItem = storyItem?.previousElementSibling;
		if (previousStoryItem?.id) navigateToId(previousStoryItem?.id);
	};
</script>

<li {id} bind:this={liEl}>
	<figure>
		<div class="figure">
			{@render children?.()}
		</div>
		<button
			class="nc-button -stealth previous"
			onclick={handlePrevious}
			disabled={disabledPrevious}
			type="button"
			aria-label="Previous"
		></button>
		<button
			class="nc-button -stealth next"
			onclick={handleNext}
			disabled={disabledNext}
			type="button"
			aria-label="Next"
		></button>
		<div class="gradient"></div>
		{#if caption}
			<figcaption>
				{caption}
			</figcaption>
		{/if}
		{#if cta}
			<div class="cta">
				{@render cta?.()}
			</div>
		{/if}
	</figure>
</li>

<style lang="postcss">
    @custom-media --md-n-above (width >= 768px);

	li {
		inline-size: 100%;
		block-size: 100%;
	}

	figure {
		inline-size: 100%;
		block-size: 100%;
		display: grid;
		grid-template:
			[fig-start previous-start next-start]
			1fr
			[caption-start gradient-start previous-end next-end]
			auto
			[caption-end cta-start]
			auto
			[fig-end cta-end gradient-end]
			/ [caption-start gradient-start cta-start fig-start previous-start] 1fr [previous-end next-start] 1fr [caption-end gradient-end cta-end fig-end next-end];
	}

	.gradient {
		grid-area: gradient;
		inline-size: 100%;
		block-size: 100%;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
	}

	.figure {
		grid-area: fig;
		inline-size: 100%;
		block-size: 100%;

		& :global(> *) {
			inline-size: 100%;
			block-size: 100%;
			object-fit: cover;
		}
	}

	.previous,
	.next {
		inline-size: 100%;
		block-size: 100%;
		background-color: transparent;
		padding: 0;
		margin: 0;
	}

	.previous {
		grid-area: previous;
	}

	.next {
		grid-area: next;
	}

	figcaption {
		grid-area: caption;
		inline-size: 100%;
		padding-inline: var(--spacing-base);
		padding-block: var(--spacing-base);
		color: var(--color-text-dark-base);
		text-shadow: 0px var(--spacing-nearest) var(--spacing-base) var(--color-shadow-light-base);

		@media (--md-n-above) {
			font-size: var(--font-size-large);
		}
	}

	.cta {
		grid-area: cta;
		inline-size: 100%;
		padding-inline: var(--spacing-base);
		padding-block: var(--spacing-base);
		padding-block-start: 0;

		& :global(> *) {
			inline-size: 100%;
		}
	}
</style>
