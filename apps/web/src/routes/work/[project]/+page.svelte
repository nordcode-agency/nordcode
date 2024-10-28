<script lang="ts">
	import Breadcrumbs from '$lib/modules/common/components/Breadcrumbs.svelte';
	import { page } from '$app/stores';
	import type { Breadcrumb } from '$lib/types/Breadcrumb';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { heading, subheading, cover, name } = data;

	const breadcrumbItems: Breadcrumb[] = [
		{
			name: 'Work',
			url: '/#work'
		},
		{
			name: heading,
			url: $page.url.toString()
		}
	];
</script>

<svelte:head>
	<title>{heading} - nordcode</title>
</svelte:head>

<article class="nc-box">
	<div class="nc-stack">
		<div class="nc-box nc-stack -inherit hero">
			<Breadcrumbs items={breadcrumbItems} />
			<div class="nc-cluster">
				<figure class="thumbnail" style={`view-transition-name: ${name}`}>
					<enhanced:img class="img" src={cover?.src} alt={cover?.alt} />
				</figure>
				<div class="headings">
					<span class="subheading slide-up-from">{subheading}</span>
					<h1 class="gradient-text slide-up-from">{heading}</h1>
				</div>
			</div>
		</div>
		<div class="main slide-up-from">
			<div class="side">
				<p class="tldr">
					<strong>
						tl;dr: Ein Stückchen davon stand auf der Dachfirste starr und steif der
						Storchvater syntax. Man hätte meinen können, er wäre aus Holz gedrechselt,
						so stille stand er.
					</strong>
				</p>
				<div class="actions">
					<a href="#" class="nc-button -outline info">Website öffnen</a>
				</div>
			</div>
			<div class="body nc-flow">
				<p>
					<strong>Auf dem letzten Hause eines kleinen Dörfchens</strong> befand sich ein
					<abbr title="Behausung eines langbeinigen Vogels">Storchnest</abbr>. Die
					Storchmutter saß im Neste bei ihren vier Jungen, welche den Kopf mit dem kleinen
					<em>schwarzen Schnabel</em>, denn er war noch nicht rot geworden,
					hervorstreckten. Ein Stückchen davon stand auf der Dachfirste starr und steif
					der Storchvater <code>syntax</code>. Man hätte meinen können, er wäre aus Holz
					gedrechselt, so stille stand er. „Gewiss sieht es recht vornehm aus, dass meine
					Frau eine Schildwache bei dem Neste hat!“ dachte er. Und er stand unermüdlich
					auf <a href="#nirgendwo" title="Title für einem Bein">einem Beine</a>.
				</p>
				<figure class="full-width">
					<enhanced:img src={cover?.src} alt={cover?.alt} />
				</figure>
				<h2>Header Level 2</h2>
				<ol>
					<li>Und was dann? fragten die Storchkinder.</li>
					<li>
						Dann werden wir aber doch gepfählt, wie die Knaben behaupteten, und höre
						nur, jetzt sagen sie es schon wieder!
					</li>
				</ol>

				<p>
					Unten auf der Straße spielte eine Schar Kinder und als sie die Störche
					erblickten, sang einer der dreistesten Knaben und allmählich alle <acronym
						title="zusammen">zus.</acronym
					> einen Vers aus einem alten Storchliede, so gut sie sich dessen erinnern konnten:
				</p>

				<blockquote cite="Hans Andersen">
					<p>
						Störchlein, Störchlein, fliege,<br />Damit ich dich nicht kriege,
						<br />Deine Frau, die liegt im Neste dein Bei deinen lieben Kindelein: Das
						eine wird gepfählt, Das andere wird abgekehlt, Das dritte wird verbrannt,
						Das vierte dir entwandt!
					</p>
					<p><cite>Hans Andersen</cite></p>
				</blockquote>

				<p>
					Höre nur, was die Jungen singen! sagten die kleinen Storchkinder. Sie sagen, wir
					sollen gebraten und verbrannt werden!
				</p>

				<h3>Header Level 3</h3>
				<ul>
					<li>Das eine wird gepfählt</li>
					<li>Das andere wird abgekehlt!</li>
				</ul>
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
		flex-basis: 40ch;
		flex-grow: 1;

		& h1 {
			animation: var(--animation-slide-up) 0.2s;
			font-size: calc(var(--font-size-display) * 1.1);
			line-height: 1.3;

			@media (--md-n-above) {
				font-size: calc(var(--font-size-display) * 1.5);
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

		@media (--lg-n-above) {
			padding-block-end: calc(var(--spacing-farthest) * 2);
		}
	}

	.main {
		animation: var(--animation-slide-up) 0.4s;
		display: grid;
		grid:
			'side' auto
			'main' auto
			/ 1fr;
		align-items: start;
		justify-items: start;
		gap: var(--spacing-far);

		@media (--lg-n-above) {
			grid:
				'side main' auto
				'side main' auto
				'.    main' auto
				/ 2fr 5fr;
		}
	}

	article {
		padding-block-start: 0;
		color: var(--color-text-muted);
	}

	.body {
		grid-area: main;
		max-inline-size: min(100%, var(--measure-base));
	}

	p,
	ul,
	li {
		font-size: var(--font-size-large);
		line-height: var(--line-height-base);
	}

	.full-width {
		inline-size: 100%;
		margin-block: var(--spacing-far);
	}

	.side {
		grid-area: side;

		@media (--lg-n-above) {
			position: sticky;
			top: calc(var(--spacing-adaptive) / 2);
		}
	}

	.actions {
		padding-block: var(--spacing-base);
	}

	.tldr {
		flex-grow: 1;
		flex-basis: 24ch;
		text-wrap: balance;
		font-size: var(--font-size-large);
		color: var(--color-text-base);
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
</style>
