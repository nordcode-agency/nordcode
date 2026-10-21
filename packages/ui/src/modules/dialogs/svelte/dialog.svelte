<script lang="ts">
import type { Snippet } from 'svelte';

interface DialogProps {
    heading: string;
    id: string;
    children?: Snippet;
}

let { heading, id, children }: DialogProps = $props();
</script>

<dialog
    class="nc-dialog"
    {id}
    data-level="1"
    inert
>
    <form method="dialog" class="dialog-container">
        <div class="dialog-header">
            <h2 class="dialog-title">{heading}</h2>
            <button data-closes-dialog>×</button>
        </div>
        <div class="dialog-content">
            {@render children?.()}
        </div>
    </form>
</dialog>
