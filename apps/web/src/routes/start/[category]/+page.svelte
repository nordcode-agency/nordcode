<script lang="ts">
	import Header from '$lib/modules/common/components/Header.svelte';
	import type { PageData } from '../$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { options } = data;

	const getFormattedStr = (str: string, displayNumbers: number[]) => {
		let formattedStr = str;
		displayNumbers.forEach((num) => {
			formattedStr = formattedStr.replace(
				`%n`,
				num.toLocaleString('de-DE', {
					style: 'currency',
					currency: 'EUR',
					maximumFractionDigits: 0
				})
			);
		});
		return formattedStr;
	};
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="nc-stack fullscreen">
	<Header />
	<section class="nc-stack -farthest nc-center">
		<div class="nc-stack">
			<h1>Was ist dein Budget?</h1>
		</div>
		<div class="nc-ram-grid -base grid">
			{#each options as option}
				<a href={option.slug} class="nc-card card">
					<div class="nc-stack">
						<h3 class="gradient-text">
							{getFormattedStr(option.label, option.displayNumbers)}
						</h3>
						<p class="nc-hint">{option.desc}</p>
					</div>
				</a>
			{/each}
		</div>
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
	}

	section {
		box-sizing: border-box;
		inline-size: 100%;
	}
</style>
