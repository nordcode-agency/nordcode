<script lang="ts">
    interface Props {
        heading?: string;
        children?: import('svelte').Snippet;
    }

    let { heading = '', children }: Props = $props();
</script>

<div class="nc-card nc-stack">
    <!-- <p>Lass uns schauen, wie wir dich unterstützen können.</p> -->
    <div class="action">
        {@render children?.()}
    </div>
    <h3>{heading}</h3>
</div>

<style lang="postcss">
    .action {
        align-self: end;
    }
</style>
