<script lang="ts">
import type { ColorPalette } from '$lib/types';

interface Props {
    palette: ColorPalette;
}

let { palette }: Props = $props();
</script>

<h2>Farbpalette</h2>
<div class="nc-grid colorPalette">
					<div class="nc-stack -near">
						<p class="nc-slub">Hell</p>
						<div class="nc-cluster">
						{#each palette.light as color}
						<div
						    class="palette-item"
							style={`background-color: ${color}`}
							title={color}
						>
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
							<div
							    class="palette-item"
								style={`background-color: ${color}`}
								title={color}
							>
							    <span class="sr-only">
									{color}
								</span>
							</div>
						{/each}
						</div>
					</div>
</div>

<style>
    .colorPalette {
        --grid-min-item-size: 16rem;
        max-inline-size: 100%;

        margin-block-end: var(--spacing-farthest);
    }

    .palette-item {
        aspect-ratio: 1/1;
        inline-size: 5ex;
    }
</style>
