<script lang="ts">
	import Header from '$lib/modules/common/components/Header.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
	let showMessage = false;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="nc-stack">
	<Header />
	<section class="nc-stack -farthest nc-center">
		<div class="nc-stack">
			<h1>Erzähl uns mehr!</h1>
		</div>
		<form class="nc-stack -far">
			<!-- COMPONENT-START: nc-input-field -->
			<div class="nc-input-field">
				<label for="email" class="nc-stack">
					<span class="nc-input-label">E-Mail</span>
					<!-- <span class="nc-input-error">ERR</span> -->
				</label>
				<input
					id="email"
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
						class="nc-input nc-textarea"
						aria-required="true"
						required
					/>
				</div>
			{/if}
			<!-- COMPONENT-END: nc-input-field: Textarea -->
			<div class="actions">
				<button
					type="button"
					class="nc-button -outline"
					on:click={() => (showMessage = !showMessage)}>Nachricht hinzufügen</button
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
