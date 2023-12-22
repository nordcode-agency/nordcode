<script lang="ts">
  // import ArrowRightSolid from '@nordcode/ui/ArrowRightSolid';
  // import Story from '$lib/modules/common/components/Story.svelte';
	// import StoryItem from './StoryItem.svelte';
	import WorkCard from './WorkCard.svelte';
	import type { TProjects } from '$lib/content';

  export let projects: TProjects;
</script>

<div class="nc-stack container">
  <div class="headings">
    <h1 class="text">Wir erschaffen digitale Erlebnisse.</h1>
  </div>
  <div class="footer">
    <div class="nc-gallery preview">
      <div style="flex-grow: 1;">
        <a href="/start" class="cta nc-card">
          <strong>Loslegen</strong>
          <p>Lass uns schauen, wie wir dich unterstützen können</p>
        </a>
      </div>
      <WorkCard
        variant="horizontal"
        heading={projects[0].heading}
        subheading={projects[0].subheading}
        cover={projects[0].cover}
        slug={projects[0].slug}
      />
      <WorkCard
        variant="horizontal"
        heading={projects[1].heading}
        subheading={projects[1].subheading}
        cover={projects[1].cover}
        slug={projects[1].slug}
      />
    </div>
  </div>
</div>

<style lang="postcss">

  .container {
    inline-size: 100%;
    flex-grow: 1;
  }

  .headings {
    max-inline-size: 68ch;
    padding-inline: var(--spacing-adaptive);
    flex-grow: 1;
    display: grid;
    gap: var(--spacing-far);
    align-content: center;
  }

  h1 {
    hyphens: none;
    font-weight: var(--font-weight-regular);
    /* font-size: var(--font-size-display); @todo adjust theme */
    font-size: 3rem;
    line-height: 4rem;

    @media (--md-n-above) {
      font-size: 4rem;
      line-height: 5rem;
    }

    background: linear-gradient(
      to left,
      var(--color-brand-secondary-base),
      var(--color-brand-primary-base)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .footer {
    inline-size: 100%;
  }

  .cta {
    padding-block: var(--spacing-base);
    padding-inline: var(--spacing-far);
    inline-size: inherit;
    block-size: 100%;
    text-decoration: none;
    color: var(--color-brand-primary-base);

    & strong {
      font-size: var(--font-size-largest);
    }

    & p {
      inline-size: min(100%, 30ch);
      color: var(--color-text-muted);
    }
  }

  .preview {
    --gallery-gap: var(--spacing-adaptive);
    --_item-size: 40ch;

    padding-block: var(--gallery-gap);
    inline-size: 100%;

    & :global(> *) {
      inline-size: min(var(--_item-size), calc(100vw - 2 * var(--gallery-gap)));
    }

    @media (--md-n-above) {
      --stack-flex-wrap: no-wrap;
    }

    @media (--lg-n-above) {
      gap: var(--spacing-far);
    }
  }
</style>
