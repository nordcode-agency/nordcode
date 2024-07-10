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
		<div class="nc-ram-grid main">
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
				<!-- COMPONENT-END: nc-input-field: Textarea -->
				<button type="submit" class="nc-button">Abschicken</button>
			</form>
			<div class="nc-stack -far actions-card">
				<div class="nc-stack contact-item">
					<span class="nc-input-label">E-Mail</span>
					<a class="gradient-text contact-links" href="mailto:hallo@nordcode.agency"
						>hallo@nordcode.agency</a
					>
				</div>
				<div class="nc-stack contact-item">
					<span class="nc-input-label">Schreib uns auf</span>
					<a class="gradient-text contact-links" href="https://wa.me/490000">Whatsapp</a>
				</div>
				<!-- <a class="gradient-text contact-links" href="https://signal.me/#p/+490000"> Signal </a> -->
				<div class="nc-stack contact-item">
					<span class="nc-input-label">Telefon</span>
					<a class="gradient-text contact-links" href="tel:+490000">+49 40 228 680 000</a>
				</div>
			</div>
		</div>
        <div class="nc-flow footer">
            <h2>Noch nicht sicher?</h2>
            <p>Folge uns auf <a href="#">Instagram</a> oder abonniere unseren <a href="#">Newsletter</a>.</p>
        </div>
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

			font-size: var(--font-size-large);
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

	.main {
		display: flex;
		flex-wrap: wrap;
		inline-size: 100%;
		justify-content: space-between;
		gap: var(--spacing-farthest);
	}

	.nc-center {
		box-sizing: border-box;
	}

	.actions-card {
		flex: 0 1 28ch;
	}

	.contact-item {
		gap: 0.25lh;
	}

	.contact-links {
		font-size: 1.5rem;
		text-decoration: none;
		color: var(--color-text-default);
	}

    .footer {
        margin-block-start: var(--spacing-far);

        h2 {
            font-size: var(--font-size-largest)
        }
    
        p {
            color: var(--color-text-subtle);
        }

        a {
            color: var(--color-brand-primary-base);
        }
    }

</style>
