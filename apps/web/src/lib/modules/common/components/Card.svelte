<script lang="ts">
import type { Size } from 'packages/types';
interface Props {
    children?: import('svelte').Snippet;
}

let { children }: Props = $props();

export const size: Extract<Size, Size.Xs | Size.Sm> | undefined = undefined;
</script>

<div class="nc-card" data-size={size}>
    {@render children?.()}
</div>
