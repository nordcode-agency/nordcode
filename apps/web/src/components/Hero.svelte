<script>
  import Card from "./Card.svelte";
</script>

<ul class="nc-gallery gallery">
  <li class="hero">
    <div>
      <h1>Hier kommt die Lösung</h1>
      <h2>Willkommen bei norcode</h2>
    </div>
  </li>
  {#each Array.from(Array(5).keys()) as item}
    <li class="card">
      <Card>
        <h1>Welcome to nordcode {item}.</h1>
      </Card>
    </li>
  {/each}
  </ul>

<style lang="postcss">
  @import "@nordcode/ui/media";

  .gallery {
    --gallery-gap: var(--spacing-far);
    --gallery-padding-inline: var(--spacing-far);

    @media (--md-n-above) {
      --gallery-padding-inline: var(--spacing-farthest);
    }
  }

  .hero {
    display: grid;
    place-items: center;
    inline-size: calc(100vw - 2 * var(--gallery-padding-inline));
    max-inline-size: calc(100vw - 2 * var(--gallery-padding-inline));
    block-size: 40svh;
    text-align: center;

    & :is(h1, h2) {
      line-height: var(--line-height-large);
    }
  }

  .card {
    display: grid;
  }
</style>