<script lang="ts">
	import Header from '$lib/modules/common/components/Header.svelte';
	import { ensureTrailingSlash } from '$lib/utils/ensureTrailingSlash';
	import type { PageData } from '../$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { questions, desc } = data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="nc-stack fullscreen">
	<Header />
	<section class="nc-stack -farthest nc-center">
		<div class="nc-stack">
			<h1>Wähle, was am besten für dich passt.</h1>
		</div>
		<ul class="nc-list-reset nc-ram-grid -base grid">
			{#each questions as question}
				<li class="nc-card card nc-clickable-card">
					<div class="nc-stack">
						<h3 class="gradient-text">
							<a href={ensureTrailingSlash(question.slug)} data-link="main">{question.heading}</a>
						</h3>
						<p class="nc-hint">{question.desc}</p>
					</div>
				</li>
			{/each}
		</ul>
		<details class="prose">
			<summary>Weitere Informationen</summary>
			<p>{@html desc}</p>
		</details>
	</section>
</div>

<style>
	@custom-media --md-n-above (width >= 768px);

	h1 {
		font-size: calc(var(--font-size-display) * 0.6);

		@media (--md-n-above) {
			view-transition-name: title;
			font-size: var(--font-size-display);
		}
	}

	.grid {
		--nc-ram-grid-gap: var(--spacing-base);
		--nc-ram-grid-min-width: 40ch;

		inline-size: 100%;

		& > li {
		   block-size: 100%;
		}
	}

	section {
		box-sizing: border-box;
		inline-size: 100%;
	}
</style>
