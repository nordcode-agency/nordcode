<script lang="ts">
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/modules/common/components/Breadcrumbs.svelte';
	import ColorPalette from '$lib/modules/common/components/ColorPalette.svelte';
	import FinalCTA from '$lib/modules/common/components/FinalCTA.svelte';
	import Header from '$lib/modules/common/components/Header.svelte';
	import type { Breadcrumb } from '$lib/types/Breadcrumb';

	let { children } = $props();

	const breadcrumbItems: Breadcrumb[] = [
		{
			name: 'Work',
			url: '/#work'
		},
		{
			name: $page.data?.heading,
			url: $page.data?.url?.toString() ?? ''
		}
	];

	$effect(() => {
		return () => {
			document.documentElement.style.removeProperty('--h-brand-primary');
			document.documentElement.style.removeProperty('--h-brand-secondary');
		};
	});
</script>

<Header />

<svelte:head>
	<title>{$page.data.heading} - nordcode</title>
	<meta name="description" content={$page.data.goal} />
</svelte:head>

<article class="nc-box" style="--h-brand-primary: {$page.data.hue.light}">
	<div class="nc-stack">
		<div class="nc-box nc-stack -inherit hero">
			<Breadcrumbs items={breadcrumbItems} />
			<div class="nc-with-sidebar">
				<figure
					class="thumbnail"
					style={`view-transition-name: ${$page.data.name}`}
					data-aside
				>
					<enhanced:img
						class="img"
						src={$page.data.cover?.src}
						alt={$page.data.cover?.alt}
					/>
				</figure>
				<div class="nc-stack" data-grow>
					<div class="headings">
						<span class="subheading slide-up-from">{$page.data.subheading}</span>
						<h1 class="gradient-text slide-up-from">{$page.data.heading}</h1>
					</div>
				</div>
			</div>
		</div>
		<div class="nc-with-sidebar -farthest | main slide-up-from">
			<div class="side" data-aside>
				<div class="nc-stack overview">
					<p class="font-size-large">
						<strong>
							{$page.data.goal}
						</strong>
					</p>
					{#if $page.data.tags}
						<ul class="tags">
							{#each $page.data.tags as tag}
								<li class="nc-slub tag">{tag}</li>
							{/each}
						</ul>
					{/if}
					{#if $page.data.url}
						<div class="actions">
							<a href={$page.data.url} target="_blank" class="nc-button -outline info"
								>Webseite besuchen</a
							>
						</div>
					{/if}
				</div>
			</div>
			<div class="body nc-flow text-base" data-grow>
				{#if $page.data.colorPalette}
					<ColorPalette palette={$page.data.colorPalette} hue={$page.data.hue}
					></ColorPalette>
				{/if}
				{@render children?.()}
				<section class="nc-region">
					<FinalCTA />
				</section>
			</div>
		</div>
	</div>
</article>

<style lang="postcss">
	.thumbnail {
		view-transition-name: work-figure;
		inline-size: 100%;
		aspect-ratio: 3/2;
		margin: 0;

		@media (--md-n-above) {
			flex-basis: 20ch;
			aspect-ratio: 1/1;
		}
	}

	@keyframes slide-up {
		to {
			transform: translateY(0%);
			opacity: 1;
		}
	}

	.headings {
		/* view-transition-name: work-headings; */
		max-inline-size: 100%;

		& h1 {
			animation: var(--animation-slide-up) 0.2s;
			font-size: calc(var(--font-size-display) * 0.8);
			text-wrap: pretty;
			max-inline-size: min(100%, 24ch);
			hyphens: auto;
			line-height: var(--line-height-small);

			@media (--md-n-above) {
				font-size: var(--font-size-display);
			}
		}
	}

	.subheading {
		display: block;
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-large);
		color: var(--color-text-muted);
		animation: var(--animation-slide-up);
	}

	.hero {
		padding-inline: 0;

		@media (--md-n-above) {
			--stack-gap: var(--spacing-far);
		}
	}

	.main {
		animation: var(--animation-slide-up) 0.4s;
		--with-sidebar-target-width: 32ch;
		--with-sidebar-min-size: 60%;
	}

	article {
		padding-block-start: 0;
		color: var(--color-text-muted);
	}

	.body {
		max-inline-size: min(100%, var(--measure-base));
	}
	.side {
		align-self: stretch;
	}

	.overview {
		position: sticky;
		top: calc(var(--spacing-adaptive) / 2);
	}

	.actions {
		padding-block: var(--spacing-base);
	}

	figure {
		--flow-gap: var(--spacing-far);

		margin-block: var(--flow-gap);
		min-block-size: 0;
		overflow: hidden;
	}

	.img,
	picture {
		/* aspect-ratio: 16/9; */
		inline-size: 100%;
		block-size: 100%;
		object-fit: cover;
		border-radius: var(--border-radius-large);
		overflow: hidden;
	}

	.tags {
		padding-inline-start: 0;
	}

	.tag {
		padding-inline-start: 0;
		display: flex;
		line-height: var(--line-height-small);

		&::before {
			content: '—';
			margin-inline-end: 1ch;
		}
	}
</style>
