<script lang="ts">
  import imgPerson1 from '$lib/assets/person1.jpg';
  import imgPerson2 from '$lib/assets/person2.jpg';
</script>

<section class="nc-box nc-stack">
  <!-- <div class="nc-ram-grid" style="--nc-ram-grid-gap: var(--spacing-far); --nc-ram-grid-min-width: 32ch;"> -->
  <div class="nc-cluster -far">
    <figure>
      <img src={imgPerson1} alt="Joshua">
    </figure>
    <figure>
      <img src={imgPerson2} alt="Lukas">
    </figure>
    <div class="content">
      <div class="nc-flow">
        <h2 class="heading-bg">Wer ist nordcode?</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  @import "@nordcode/ui/media";

  .nc-flow, figure {
    @media (--md-n-above) {
      flex-wrap: nowrap;
    }
  }

  figure {
    flex-basis: 32ch;
    display: grid;
    place-items: center;
    inline-size: min(calc(var(--spacing-farthest) * 4), 100%);
    aspect-ratio: 1/1;
    border-radius: 24%;
    overflow: hidden;

    &:last-of-type {
      transform: translateY(var(--spacing-farthest));
    }

    & img {
      object-fit: cover;
      inline-size: 100%;
      block-size: 100%;
    }
  }

  .content {
    flex-shrink: 0;
    margin-inline: auto;
  }

  .nc-flow {
    max-inline-size: 40ch;
  }
</style>