<script lang="ts">
  import type {Size} from 'packages/types';

  export const size: Extract<Size, Size.Xs | Size.Sm> | undefined = undefined;
</script>

<div class="nc-card" data-size={size}>
	<slot />
</div>
