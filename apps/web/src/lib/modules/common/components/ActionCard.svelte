<script lang="ts" async>
export let heading: string;
export let subheading: string | undefined = undefined;
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
		{#if $$slots.action}
			<div class="action">
				<slot name="action" />
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
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
			oklch(var(--color-border-base-lch) / 0.03),
			oklch(var(--color-surface-base-lch) / 0.8)
		);
		backdrop-filter: blur(var(--spacing-base));
		box-shadow: var(--_card-shadow),
			inset 0px 0px var(--spacing-base) calc(var(--spacing-near) * -1)
				oklch(var(--color-border-base-lch) / 0.8);
		block-size: 100%;
		text-decoration: none;
		transition: border-color 300ms ease, box-shadow 300ms;
	}

	.header {
		grid-area: header;
		padding: var(--spacing-base);
	}

	h2 {
		font-size: var(--font-size-base);
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
