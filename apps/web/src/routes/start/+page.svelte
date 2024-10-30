<script lang="ts">
	import Header from '$lib/modules/common/components/Header.svelte';
	import type { PageData } from '../$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { questions } = data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="nc-stack fullscreen">
	<Header />
	<section class="nc-stack -farthest nc-center">
		<div class="nc-stack">
			<h1>Wähle die Option, die am besten für dich passt.</h1>
		</div>
		<div class="nc-ram-grid -base grid">
			{#each questions as question}
				<a href={question.slug} class="nc-card card">
					<div class="nc-stack">
						<h3 class="gradient-text">{question.heading}</h3>
						<p class="nc-hint">{question.desc}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>

<style lang="postcss">
	h1 {
		view-transition-name: title;
		font-size: var(--font-size-display);
	}

	p {
		font-size: var(--font-size-base);
	}

	.grid {
		--nc-ram-grid-gap: var(--spacing-base);
		--nc-ram-grid-min-width: 40ch;

		inline-size: 100%;
	}

	section {
		box-sizing: border-box;
		inline-size: 100%;
	}
</style>
