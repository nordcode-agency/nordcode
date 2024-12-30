<script lang="ts">
	import Header from '$lib/modules/common/components/Header.svelte';
	import Meta from '$lib/modules/common/components/Meta.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	let showMessage = $state(false);
</script>

<Meta noIndex title="Projektanfrage" description=""></Meta>

<div class="nc-stack">
	<Header />
	<section class="nc-stack -farthest nc-center">
		<div class="nc-stack">
			<h1>Wir melden uns bei dir.</h1>
			<p>
				Mit der Angabe deiner E-Mail bekommen wir einen guten ersten Einblick, was dir
				vorschwebt. Wir melden uns bei dir, damit wir mehr über dein Projekt, deine Idee
				oder Herausforderung erfahren können. Zusammen finden wir eine Lösung die zu dir und
				deinem Budget passt.
			</p>
		</div>
		<form class="nc-stack -far" method="post" action="https://mailings.whats-this.org/nordcode">
			<!-- COMPONENT-START: nc-input-field -->
			<div class="nc-input-field">
				<label for="email" class="nc-stack">
					<span class="nc-input-label">E-Mail</span>
					<!-- <span class="nc-input-error">ERR</span> -->
				</label>
				<input
					id="email"
					name="email"
					class="nc-input"
					aria-required="true"
					autocomplete="email"
					type="email"
					required
				/>
			</div>
			<!-- COMPONENT-END: nc-input-field -->
			<!-- COMPONENT-START: nc-input-field: Textarea -->
			{#if showMessage}
				<div class="nc-input-field">
					<label for="message" class="nc-stack">
						<span class="nc-input-label">Nachricht</span>
					</label>
					<textarea
						id="message"
						name="message"
						class="nc-input nc-textarea"
						aria-required="true"
						required
					></textarea>
				</div>
			{/if}

			<input type="text" name="budget" hidden value={data.budget} />
			<input type="text" name="category" hidden value={data.category} />
			<input
				type="checkbox"
				name="contactMe"
				value="Yes please"
				tabindex="-1"
				autocomplete="off"
				style="display:none !important"
			/>
			<!-- COMPONENT-END: nc-input-field: Textarea -->
			<div class="actions">
				<button
					type="button"
					class="nc-button -outline"
					onclick={() => (showMessage = !showMessage)}>Nachricht hinzufügen</button
				>
				<button type="submit" class="nc-button">Abschicken</button>
			</div>
		</form>
	</section>
</div>

<style lang="postcss">
	h1 {
		view-transition-name: title;
		font-size: var(--font-size-display);
	}

	form {
		flex: 0 1 40ch;

		& :is(input, textarea) {
			--input-padding-block: 1lh;

			min-inline-size: 32ch;
			font-size: var(--font-size-largest);
		}
	}

	textarea {
		min-block-size: 4rlh;
		min-block-size: 4lh;
		max-block-size: 80svh;

		@supports (field-sizing: content) {
			field-sizing: content;
		}
	}

	.nc-center {
		box-sizing: border-box;
	}

	.actions {
		display: flex;
		gap: var(--spacing-near);
	}
</style>
