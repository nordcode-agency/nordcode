<script>
	import WorkCard from "./WorkCard.svelte";
</script>

<div>
  <svg width="544" height="544" viewBox="0 0 544 544" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M287.5 202.647V-28H255.5V203.647L188.667 270.481V255.5H155.333V287.5H188.667V273.519L272 356.853L355.333 273.52V287.5H388.667V255.5H355.333V270.48L287.5 202.647ZM287.5 572.031L287.531 556.031L255.531 555.969L255.5 571.969L287.5 572.031ZM287.594 524.031L287.656 492.031L255.656 491.969L255.594 523.969L287.594 524.031ZM287.719 460.031L287.781 428.031L255.781 427.969L255.719 459.969L287.719 460.031ZM287.844 396.031L287.906 364.031L255.906 363.969L255.844 395.969L287.844 396.031ZM-11.3333 287.5H-28V255.5H-11.3333V287.5ZM55.3333 287.5H22V255.5H55.3333V287.5ZM122 287.5H88.6667V255.5H122V287.5ZM455.333 287.5H422V255.5H455.333V287.5ZM522 287.5H488.667V255.5H522V287.5ZM572 287.5H555.333V255.5H572V287.5ZM132.714 132.714L122 122L144.627 99.3726L155.342 110.087L132.714 132.714ZM175.571 175.571L154.143 154.143L176.77 131.515L198.199 152.944L175.571 175.571ZM218.429 218.429L197 197L219.627 174.373L241.056 195.801L218.429 218.429ZM347 347L325.571 325.571L348.199 302.944L369.627 324.372L347 347ZM389.857 389.857L368.429 368.428L391.056 345.801L412.485 367.23L389.857 389.857ZM422 422L411.286 411.286L433.913 388.658L444.627 399.372L422 422ZM122 422L132.714 411.286L110.087 388.658L99.3726 399.373L122 422ZM154.143 389.857L175.571 368.429L152.944 345.801L131.515 367.23L154.143 389.857ZM197 347L218.429 325.571L195.801 302.944L174.373 324.373L197 347ZM325.571 218.429L347 197L324.373 174.373L302.944 195.801L325.571 218.429ZM368.429 175.572L389.857 154.143L367.23 131.516L345.801 152.944L368.429 175.572ZM411.286 132.714L422 122L399.373 99.3728L388.658 110.087L411.286 132.714Z" fill="var(--color-surface-subtle)"/>
  </svg>    
  <section class="nc-ram-grid">
    <WorkCard />
    <WorkCard />
    <WorkCard />
    <WorkCard />
    <WorkCard />
  </section>
</div>

<style>
  section {
    position: relative;
    /* background-image: url($lib/assets/polestar.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: color-burn; */
    /* @todo NEXT add a patterns with clip blend whatever and let polestar rotate slowly */
  }

  svg {
    display: block;
    position: absolute;
    inline-size: 600%;

    & path {
      /* fill: var(--color-surface-subtle); */
      /* fill: var(--color-brand-primary-base); */
      fill: transparent;
      stroke-width: 1px;
      /* stroke: var(--color-surface-subtle); */
      stroke: var(--color-brand-primary-base);
    }
  }

  .nc-ram-grid {
    --fd-ram-grid-min-width: 44ch;
    --fd-ram-grid-gap: var(--spacing-far);

    padding: var(--spacing-base);
  }
</style>