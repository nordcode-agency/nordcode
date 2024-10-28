<script lang="ts">
	import { navigateToId } from "$lib/utils/navigateToId";

  interface Props {
    id: string;
    children?: import('svelte').Snippet;
  }

  let { id, children }: Props = $props();

  let ulElement: HTMLUListElement = $state();
  let items = $derived(Array.from(ulElement?.children ?? []).map((item) => {
    return {
      id: item.id,
      text: (item as HTMLLIElement).innerText,
    };
  }));
</script>

<dialog {id}>
  <ul class="nc-gallery" bind:this={ulElement}>
    {@render children?.()}
  </ul>
  <div class="controls">
    <div class="indicator">
      {#each items as {id, text} (id)}
        <button
          class="nc-button -stealth"
          onclick={() => navigateToId(id)}
          aria-label={text}
        >
          <div class="indicator-item"></div>
        </button>
      {/each}
    </div>
  </div>
</dialog>

<style lang="postcss">
  dialog {
    display: grid;
    grid-template: [gallery-start controls-start] auto [controls-end] 1fr [gallery-end] / [controls-start gallery-start] 1fr [controls-end gallery-end];
    padding: 0;
    aspect-ratio: 9/16;
    inline-size: min(48ch, 100%);
    border-radius: var(--border-radius-large);
  }

  .nc-gallery {
    grid-area: gallery;
    --gallery-padding-inline: 0;
    --gallery-scroll-snap-stop: always;

    inline-size: 100%;
    block-size: 100%;
  }

  .controls {
    grid-area: controls;
    inline-size: 100%;
    block-size: auto;
    padding-inline: var(--spacing-base);
    padding-block: 0;
    background: linear-gradient(rgba(0,0,0,0.6), transparent);
  }

  .indicator {
    display: grid;
    grid-auto-flow: column;
    gap: var(--spacing-near);
  }

  .nc-button {
    --button-border-radius: 0;

    padding-block: var(--spacing-base);
    padding-inline: 0;
    background-color: transparent;
    aspect-ratio: auto;

    &:hover .indicator-item {
      background-color: rgba(255,255,255,0.8);
    }
  }

  .indicator-item {
    block-size: 4px;
    inline-size: 100%;
    background-color: rgba(255,255,255,0.5);
    border-radius: var(--border-radius-round);
    transition: background-color var(--transition-duration-base) var(--ease-2);
  }
</style>