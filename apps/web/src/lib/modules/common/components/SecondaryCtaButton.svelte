<script lang="ts">
	export let href: string;
</script>

<a {href} class="nc-button -stealth gradient-text">
	<slot />
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="nc-icon"
		data-size="inline"
		stroke="var(--color-brand-secondary-base)"
		viewBox="0 0 24 24"
		stroke-width="2"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M5 12l14 0" />
		<path d="M15 16l4 -4" />
		<path d="M15 8l4 4" />
	</svg>
</a>

<style lang="postcss">
	a {
		padding-inline-start: 0;

		& svg {
			transition: transform var(--transition-duration-base) var(--ease-elastic-2);
		}

		&:hover svg {
			transform: translateX(0.5ch);
		}
	}
</style>
