<script lang="ts">
	import { EMAIL } from '$lib/content/contact';
	import { Navigation } from '$lib/content/navigation';
	import { ensureTrailingSlash } from '$lib/utils/ensureTrailingSlash';
	import ThemePicker from './ThemePicker.svelte';
</script>

<footer class="footer-outer">
    <div class="footer nc-box nc-center">
	<div class="misc nc-stack -farthest">
		<span class="greeting">Liebe Grüße aus<br />Zeetze & Hamburg</span>
		<div class="nc-stack -near">
			<a href={ensureTrailingSlash(Navigation.impressum.url)}>{Navigation.impressum.name}</a>
			<a href={ensureTrailingSlash(Navigation.datenschutz.url)}
				>{Navigation.datenschutz.name}</a
			>
		</div>
		<ThemePicker />
	</div>
	<div class="nc-stack -far">
		<div class="nc-stack contact-item">
			<span class="nc-input-label">E-Mail</span>
			<a class="gradient-text contact-links" href={`mailto:${EMAIL}`}>
				{EMAIL}
			</a>
		</div>
		<div class="nc-stack contact-item">
			<span class="nc-input-label">Schreib uns auf</span>
			<a class="gradient-text contact-links" href="https://wa.me/message/6D6KQFSIQQ6EG1">Whatsapp</a>
		</div>
		<!-- <a class="gradient-text contact-links" href="https://signal.me/#p/+490000"> Signal </a> -->
		<div class="nc-stack contact-item">
			<span class="nc-input-label">Telefon</span>
			<a class="gradient-text contact-links" href="tel:+4915563134234">+49 155 63 134 234</a>
		</div>
	</div>
	</div>
</footer>

<style>
    @custom-media --md-n-above (width >= 768px);

    .footer-outer {
        background: linear-gradient(165deg,
                  var(--color-surface-muted) 40%,
                  color-mix(in oklch, var(--color-surface-base), transparent 20%));
    }

	.footer {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-farthest);
		justify-content: space-between;
		padding-block-end: var(--spacing-farthest);

		@media (--md-n-above) {
			padding-block-end: calc(var(--spacing-farthest) * 2);
		}
	}

	.greeting {
		display: block;
		max-inline-size: 24ch;
		font-size: 1.5rem;
		line-height: 3ex;
		color: var(--color-text-muted);
	}

	.contact-item {
		gap: 0.25lh;
	}

	.contact-links {
		font-size: 1.5rem;
		text-decoration: none;
		color: var(--color-text-base);
	}
</style>
