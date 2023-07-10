<script lang="ts">
  import ArrowRightSolid from '@nordcode/ui/src/assets/icons/ArrowRightSolid.svelte';
  import Story from '$lib/modules/common/components/Story.svelte';
	import StoryItem from './StoryItem.svelte';
</script>

<div class="hero">
  <div class="nc-stack">
    <div class="nc-stack text">
      <h1>Wir erschaffen digitale Erlebnisse.</h1>
      <h2>Mit Hilfe von Design und Technologie entstehen Marken, mit der sich deine Nutzer identifizieren können und Produkte, die einfach sind und sich den Bedürfnissen jeden einzelnen anpassen.</h2>
    </div>
    <div class="actions">
      <button class="story-btn nc-button" data-dialogtarget="preview">
        Preview
      </button>
      <Story id="preview">
        <StoryItem caption="My individual caption that tells a short story. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.">
          <img src="https://images.unsplash.com/photo-1688367785310-c8c013548288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3135&q=80" alt="storyitem 1" srcset="">
          <button type="button" class="nc-button" slot="cta">
            <ArrowRightSolid />
          </button>
        </StoryItem>
        <StoryItem caption="Here is a good example on how your web app could look like">
          <img src="https://images.unsplash.com/photo-1687369500069-a0872397b3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3125&q=80" alt="storyitem 2" srcset="">
        </StoryItem>
        <StoryItem caption="Sustainability in and out">
          <img src="https://images.unsplash.com/photo-1558297010-eb4f2f472abf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2246&q=80" alt="storyitem 3" srcset="">
        </StoryItem>
      </Story>
      <button class="nc-button" type="button">Los geht's</button>
    </div>
  </div>
</div>

<style lang="postcss">
  .actions {
    display: flex;
    gap: var(--spacing-base);
  }

  .story-btn {
    /* display: grid;
    place-items: center; */
    /* aspect-ratio: 1/1; */
    /* inline-size: 3rem; */
    /* border-radius: var(--border-radius-round); */
  }

  .hero {

    & h1 {
      hyphens: none;
      background: linear-gradient(
        to left,
        var(--color-brand-secondary-strong),
        var(--color-brand-primary-strong)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    & h2 {
      color: var(--color-text-subtle);
    }
  }

  .text {
    max-inline-size: 60ch;
  }
</style>
