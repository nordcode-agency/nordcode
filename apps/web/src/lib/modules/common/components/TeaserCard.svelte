<script lang="ts">
    export let heading: string = '';
</script>

<div class="nc-card nc-stack">
    <!-- <p>Lass uns schauen, wie wir dich unterstützen können.</p> -->
    <div class="action">
        <slot></slot>
    </div>
    <h3>{heading}</h3>
</div>

<style lang="postcss">
    .action {
        align-self: end;
    }
</style>
