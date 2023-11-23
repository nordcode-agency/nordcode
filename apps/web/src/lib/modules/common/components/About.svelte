<script lang="ts">
  import imgPerson1 from '$lib/assets/person1.jpg';
  import imgPerson2 from '$lib/assets/person2.jpg';
</script>

<section class="nc-box nc-stack nc-center">
  <h2 class="heading-bg">Wer ist nordcode?</h2>
  <div class="nc-cluster" style="--nc-ram-grid-min-width: 20ch;">
    <figure>
      <img src={imgPerson1} alt="Joshua">
    </figure>
    <figure>
      <img src={imgPerson2} alt="Lukas">
    </figure>
    <div class="nc-flow">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</section>

<style lang="postcss">
  figure {
    display: grid;
    place-items: center;
    inline-size: min(calc(var(--spacing-farthest) * 4), 100%);
    aspect-ratio: 4/5;
    border-radius: var(--border-radius-medium);
    overflow: hidden;

    & img {
      object-fit: cover;
      inline-size: 100%;
      block-size: 100%;
    }
  }
</style>