<script lang="ts">
	import Header from '$lib/modules/common/components/Header.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="nc-stack fullscreen">
	<Header />
	<section class="nc-stack -farthest nc-center">
		<div class="nc-stack">
			<h1>Erzähl uns mehr!</h1>
		</div>
		<div class="actions-card">
			<a href="mailto:hallo@nordcode.agency" class="nc-card">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-mail"
						width="44"
						height="44"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#ffffff"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path
							d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
						/>
						<path d="M3 7l9 6l9 -6" />
					</svg>
				</div>
				<span>Email</span>
			</a>
			<a href="https://wa.me/490000" class="nc-card">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-whatsapp"
						width="44"
						height="44"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#ffffff"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
						<path
							d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
						/>
					</svg>
				</div>
				<span>Whatsapp</span>
			</a>
			<a href="https://signal.me/#p/+490000" class="nc-card">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-message-circle-2"
						width="44"
						height="44"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#ffffff"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
					</svg>
				</div>
				<span>Signal</span>
			</a>
			<a href="tel:+490000" class="nc-card">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-phone"
						width="44"
						height="44"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#ffffff"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path
							d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
						/>
					</svg>
				</div>
				<span>Telefon</span>
			</a>
		</div>
	</section>
</div>

<style lang="postcss">
    h1 {
		font-size: var(--font-size-display);
	}

	.actions-card {
		inline-size: 100%;
		display: flex;
		justify-content: space-between;
		gap: var(--spacing-far);
	}

	a {
		display: grid;
		place-items: center;
		text-align: center;
		gap: var(--spacing-base);
	}

	svg {
		stroke: var(--color-text-default);
	}
</style>
