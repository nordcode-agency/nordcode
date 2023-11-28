<script lang="ts">
  import imgPerson1 from '$lib/assets/person1.jpg';
  import imgPerson2 from '$lib/assets/person2.jpg';
</script>

<section class="container nc-box nc-stack">
  <div class="nc-ram-grid" style="--nc-ram-grid-gap: var(--spacing-adaptive); --nc-ram-grid-min-width: 32ch;">
    <div class="images">
      <figure>
        <img src={imgPerson1} alt="Joshua">
      </figure>
      <figure>
        <img src={imgPerson2} alt="Lukas">
      </figure>
    </div>
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

  .container {
    min-block-size: 100dvh;
    display: grid;
    place-items: center;
  }

  .nc-flow, figure {
    @media (--md-n-above) {
      flex-wrap: nowrap;
    }
  }

  .images {
    display: flex;
    gap: var(--spacing-base);
    justify-content: center;
  }

  figure {
    flex-basis: 32ch;
    display: grid;
    place-items: center;
    aspect-ratio: 4/5;
    inline-size: min(calc(var(--spacing-farthest) * 4), 100%);
    border-radius: calc(var(--border-radius-large) * 1);
    overflow: hidden;

    @media (--md-n-above) {
      border-radius: calc(var(--border-radius-large) * 2);
    }

    @media (--lg-n-above) {
      margin-block-end: var(--spacing-farthest);

      &:last-of-type {
        transform: translateY(var(--spacing-farthest));
      }
    }

    & img {
      object-fit: cover;
      inline-size: 100%;
      block-size: 100%;
    }
  }

  .content {
    flex-shrink: 0;
    inline-size: 100%;
  }

  .nc-flow {
    inline-size: 100%;

    @media (--lg-n-above) {
      inline-size: min(48ch, 100%);
    }
    margin-inline: auto;
  }
</style>