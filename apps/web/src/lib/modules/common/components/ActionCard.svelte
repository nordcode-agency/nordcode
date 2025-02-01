<script lang="ts">
	interface Props {
		heading: string;
		subheading?: string | undefined;
		action?: import('svelte').Snippet;
	}

	let { heading, subheading = undefined, action }: Props = $props();
</script>

<div class="container">
	<div class="nc-card card">
		<div class="header">
			<div class="headings">
				{#if subheading}
					<span>{subheading}</span>
				{/if}
				<h2>{heading}</h2>
			</div>
		</div>
		{#if action}
			<div class="action">
				{@render action?.()}
			</div>
		{/if}
	</div>
</div>

<style>
	.container {
		/* container-type: inline-size; */
		inline-size: 100%;
		block-size: 100%;
	}

	.card {
		--card-padding-inline: 0px;
		--card-padding-block: 0px;

		display: grid;
		grid-template:
			[header-start]
			1fr
			[header-end action-start]
			auto
			[action-end]
			/ 1fr;
		background: linear-gradient(
			45deg,
			color-mix(in oklch, var(--color-border-base), transparent 97%),
			color-mix(in oklch, var(--color-surface-base), transparent 20%)
		);
		backdrop-filter: blur(var(--spacing-base));
		box-shadow:
			var(--_card-shadow),
			inset 0px 0px var(--spacing-base) calc(var(--spacing-near) * -1)
				color-mix(in oklch, var(--color-border-base), transparent 20%);
		block-size: 100%;
		text-decoration: none;
		transition:
			border-color 300ms ease,
			box-shadow 300ms;
	}

	.header {
		grid-area: header;
		padding: var(--spacing-base);
	}

	h2 {
		font-size: var(--font-size-base);
		line-height: 2.8ex;
	}

	.headings {
		& span {
			color: var(--color-text-muted);
		}
	}

	.action {
		grid-area: action;
		padding: var(--spacing-base);
		display: flex;
		justify-content: end;
		line-height: var(--line-height-base);
	}
</style>
