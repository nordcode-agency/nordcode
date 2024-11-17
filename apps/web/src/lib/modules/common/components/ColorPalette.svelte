<script lang="ts">
	import type { ColorPalette } from '$lib/types';

	interface Props {
		palette: ColorPalette;
		hue?: [string, string];
	}

	let { palette }: Props = $props();
</script>

<div class="nc-stack -contained | colorPalette-wrapper">
	<p class="nc-slub">Farbpalette</p>
	<div class="nc-grid colorPalette">
		<div class="nc-stack -near">
			<p class="nc-slub">Hell</p>
			<div class="nc-cluster">
				{#each palette.light as color}
					<div class="palette-item" style={`background-color: ${color}`} title={color}>
						<span class="sr-only">
							{color}
						</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="nc-stack -near">
			<p class="nc-slub">Dunkel</p>
			<div class="nc-cluster -near">
				{#each palette.dark as color}
					<div class="palette-item" style={`background-color: ${color}`} title={color}>
						<span class="sr-only">
							{color}
						</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<!-- <button class="nc-button -outline -small -primary" onclick={tryColorPalette}
		>Farbpalette ausprobieren</button
	> -->
</div>

<style>
	.colorPalette {
		--grid-min-item-size: 16rem;
		max-inline-size: 100%;
		inline-size: 100%;
	}

	.palette-item {
		aspect-ratio: 1/1;
		inline-size: 5ex;
	}
</style>
