<script lang="ts">
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/modules/common/components/Breadcrumbs.svelte';
	import FinalCTA from '$lib/modules/common/components/FinalCTA.svelte';
	import Header from '$lib/modules/common/components/Header.svelte';
	import type { Breadcrumb } from '$lib/types/Breadcrumb';
	import Meta from '$lib/modules/common/components/Meta.svelte';

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
</script>

<Meta title={`${$page.data.heading} | nordcode`} description={$page.data.goal}></Meta>

<Header />

<article class="section nc-center work-page">
	<div class="nc-stack">
		<div class="nc-box nc-stack -inherit hero">
			<Breadcrumbs items={breadcrumbItems} />
			<header class="header">
				<figure class="thumbnail" style={`view-transition-name: ${$page.data.name}`}>
					<enhanced:img
						class="img"
						src={$page.data.cover?.src}
						alt={""}
						loading="eager"
						decoding="async"
						fetch-priority="high"
					/>
					<figcaption class="sr-only">{$page.data.cover?.alt}</figcaption>
				</figure>
				<div class="nc-stack">
					<div class="headings">
						<span class="subheading slide-up-from">{$page.data.subheading}</span>
						<h1 class="gradient-text slide-up-from">{$page.data.heading}</h1>
					</div>
				</div>
			</header>
		</div>
		<div class="main slide-up-from nc-with-sidebar">
			<aside data-aside>
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
							<a href={$page.data.url} target="_blank">{$page.data.url}</a>
						</div>
					{/if}
				</div>
			</aside>
			<div class="body nc-flow styled-base-text prose" data-grow>
				{@render children?.()}
				<section class="nc-region">
					<FinalCTA />
				</section>
			</div>
		</div>
	</div>
</article>

<style>
	@custom-media --md-n-above (width >= 768px);
	@custom-media --xl-n-above (width >= 1440px);

	.work-page {
		--center-measure: 120ch;
	}

	.header {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-far);

		@media (width >= 768px) {
			flex-direction: row;
		}
	}

	.thumbnail {
		view-transition-name: work-figure;
		flex-basis: min(48ch, 40vw, 100%);
		aspect-ratio: 3/2;
		margin: 0;

		& * {
			inline-size: 100%;
			block-size: 100%;
			border-radius: inherit;
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
			font-size: calc(var(--font-size-display) * 0.6);
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
		--with-sidebar-target-width: 32ch;
		--with-sidebar-min-size: 60%;

		padding-inline: 0;
		margin-inline-start: 0;
		animation: var(--animation-slide-up) 0.4s;
		gap: var(--spacing-farthest);

		@media (--xl-n-above) {
			margin-inline-start: auto;
		}
	}

	article {
		padding-block-start: 0;
		color: var(--color-text-muted);
	}

	.overview {
		position: sticky;
		top: calc(var(--spacing-adaptive) / 2);
		flex-wrap: wrap;
		flex-direction: row;

		@media (--md-n-above) {
			gap: var(--spacing-far);
		}

		& > * {
			flex-basis: 32ch;
		}
	}

	.actions {
		padding-block: var(--spacing-base);
		@media (--md-n-above) {
			font-size: var(--font-size-large);
		}
	}

	.img {
		inline-size: 100%;
		block-size: 100%;
		object-fit: cover;
	}

	.tags {
		padding-inline-start: 0;
	}

	.tag {
		padding-inline-start: 0;
		display: flex;
		line-height: var(--line-height-small);
		font-size: var(--font-size-base);

		&::before {
			content: '—';
			margin-inline-end: 1ch;
		}
	}
</style>
