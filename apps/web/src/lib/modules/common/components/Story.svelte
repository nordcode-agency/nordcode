<script lang="ts">
  export let id: string;
</script>

<dialog {id}>
  <ul class="nc-gallery">
    <slot />
  </ul>
</dialog>

<style lang="postcss">
  dialog {
    padding: 0;
    aspect-ratio: 9/16;
    inline-size: min(48ch, 100%);
    border-radius: var(--border-radius-large);
  }

  .nc-gallery {
    --gallery-padding-inline: 0;
    --gallery-scroll-snap-stop: always;

    inline-size: 100%;
    block-size: 100%;
  }
</style>