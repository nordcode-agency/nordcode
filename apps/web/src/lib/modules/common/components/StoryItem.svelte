<script lang="ts">
	import { navigateToId } from "$lib/utils/navigateToId";
	import { onMount } from "svelte";

  export let caption: string;
  export let id: string;
  let liEl: HTMLLIElement;

  let disabledPrevious = false;
  let disabledNext = false;

  onMount(() => {
    if (liEl.id === liEl.parentElement?.firstElementChild?.id) disabledPrevious = true
    else disabledPrevious = false

    if (liEl.id === liEl.parentElement?.lastElementChild?.id) disabledNext = true
    else disabledNext = false
  })

  const handleNext = (e: MouseEvent) => {
    const btnEl = e.target as HTMLButtonElement;
    const storyItem = btnEl.closest('li');
    const nextStoryItemId = storyItem?.nextElementSibling?.id;
    if (nextStoryItemId) navigateToId(nextStoryItemId);
  }
  const handlePrevious = (e: MouseEvent) => {
    const btnEl = e.target as HTMLButtonElement;
    const storyItem = btnEl.closest('li');
    const previousStoryItem = storyItem?.previousElementSibling;
    if (previousStoryItem?.id) navigateToId(previousStoryItem?.id);
    
  }
</script>

<li {id} bind:this={liEl}>
  <figure>
    <div class="figure">
      <slot />
    </div>
    <button
      class="nc-button -stealth previous"
      on:click={handlePrevious}
      disabled={disabledPrevious}
      type="button"
      aria-label="Previous"
    ></button>
    <button
      class="nc-button -stealth next"
      on:click={handleNext}
      disabled={disabledNext}
      type="button"
      aria-label="Next"
    ></button>
    <footer>
      {#if caption}
        <figcaption>
          {caption}
        </figcaption>
      {/if}
      {#if $$slots.cta}
        <slot name="cta" />
      {/if}
    </footer>
  </figure>
</li>

<style lang="postcss">
  @import "@nordcode/ui/media";

  li {
    inline-size: 100%;
    block-size: 100%;
  }

  figure {
    inline-size: 100%;
    block-size: 100%;
    display: grid;
    grid-template:
      [fig-start previous-start next-start]
      1fr
      [footer-start previous-end next-end]
      auto
      [footer-end fig-end]
      / [footer-start fig-start previous-start] 1fr [previous-end next-start] 1fr [footer-end fig-end next-end];
  }

  footer {
    display: grid;
    gap: var(--spacing-base);
    grid-area: footer;
    inline-size: 100%;
    padding-inline: var(--spacing-base);
    padding-block: var(--spacing-base);
    background: linear-gradient(transparent, rgba(0,0,0,0.6));
  }

  .figure {
    grid-area: fig;
    inline-size: 100%;
    block-size: 100%;

    & :global(> *) {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
    }
  }

  .previous, .next {
    inline-size: 100%;
    block-size: 100%;
    background-color: transparent;
    padding: 0;
    margin: 0;
  }

  .previous {
    grid-area: previous;
  }

  .next {
    grid-area: next;
  }

  figcaption {
    color: var(--color-text-dark-base);
    text-shadow: 0px var(--spacing-nearest) var(--spacing-base) var(--color-shadow-light-base);

    @media (--md-n-above) {
      font-size: var(--font-size-large);
    }
  }
</style>