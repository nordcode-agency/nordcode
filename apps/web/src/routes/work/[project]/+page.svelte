<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;

  const { heading, subheading, cover, slug } = data;
  
</script>

<svelte:head>
	<title>nordcode – {heading}</title>
</svelte:head>

<article class="section">
  <div class="stack">
    <div class="hero full-width nc-ram-grid" style="--nc-ram-grid--nc-ram-grid-min-width: 240px; --nc-ram-grid-gap: var(--spacing-farthest);">
      <div class="stack">
        <div class="body headings" style={`--name: work-headings-${slug}`}>
          <span class="subheading">{subheading}</span>
          <h2>{heading}</h2>
        </div>
        <p class="tldr"><strong>
          tldr; Ein Stückchen davon stand auf der Dachfirste starr und steif der Storchvater syntax. Man hätte meinen können, er wäre aus Holz gedrechselt, so stille stand er.
        </strong></p>
      </div>
      <figure style={`--name: work-figure-${slug}`}>
        <img src={cover?.src} alt={cover?.alt}>
      </figure>
    </div>
    <div class="body">
      <p><strong>Auf dem letzten Hause eines kleinen Dörfchens</strong> befand sich ein <abbr title="Behausung eines langbeinigen Vogels">Storchnest</abbr>. Die Storchmutter saß im Neste bei ihren vier Jungen, welche den Kopf mit dem kleinen <em>schwarzen Schnabel</em>, denn er war noch nicht rot geworden, hervorstreckten. Ein Stückchen davon stand auf der Dachfirste starr und steif der Storchvater <code>syntax</code>. Man hätte meinen können, er wäre aus Holz gedrechselt, so stille stand er. „Gewiss sieht es recht vornehm aus, dass meine Frau eine Schildwache bei dem Neste hat!“ dachte er. Und er stand unermüdlich auf <a href="#nirgendwo" title="Title für einem Bein">einem Beine</a>.</p>
      <h2>Header Level 2</h2>
      <ol>
        <li>Und was dann? fragten die Storchkinder.</li>
        <li>Dann werden wir aber doch gepfählt, wie die Knaben behaupteten, und höre nur, jetzt sagen sie es schon wieder!</li>
      </ol>
  
      <p>Unten auf der Straße spielte eine Schar Kinder und als sie die Störche erblickten, sang einer der dreistesten Knaben und allmählich alle <acronym title="zusammen">zus.</acronym> einen Vers aus einem alten Storchliede, so gut sie sich dessen erinnern konnten:</p>
  
      <blockquote cite="Hans Andersen">
        <p>Störchlein, Störchlein, fliege,<br />Damit ich dich nicht kriege, <br />Deine Frau, die liegt im Neste dein Bei deinen lieben Kindelein: Das eine wird gepfählt, Das andere wird abgekehlt, Das dritte wird verbrannt, Das vierte dir entwandt!</p>
        <p><cite>Hans Andersen</cite></p>
      </blockquote>
  
      <p>Höre nur, was die Jungen singen! sagten die kleinen Storchkinder. Sie sagen, wir sollen gebraten und verbrannt werden!</p>
  
      <h3>Header Level 3</h3>
      <ul>
        <li>Das eine wird gepfählt</li>
        <li>Das andere wird abgekehlt!</li>
      </ul>
    </div>
  </div>
</article>

<style lang="postcss">

  .hero {
    block-size: 70vh;
  }
  article {
    padding-block-start: 0;
  }

  p, ul, li {
    font-size: var(--font-size-large);
    line-height: var(--line-height-base);
  }

  .body {
    inline-size: min(100%, var(--measure-base));
    margin-inline: auto;
  }

  .full-width {
    inline-size: 100%;
    margin-block: var(--spacing-far);
  }

  .tldr {
    font-size: var(--font-size-largest);
    color: var(--color-brand-primary-base);
  }

  figure {
    view-transition-name: work-figure;
    display: initial;
    min-block-size: 0;
  }

  :global(::view-transition-old(work-figure)),
  :global(::view-transition-new(work-figure)) {
    /** @url https://developer.chrome.com/docs/web-platform/view-transitions/#handling-changes-in-aspect-ratio */
    height: 100%;
  }

  img {
    /* aspect-ratio: 16/9; */
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-large);
  }

  .headings {
    view-transition-name: work-headings;
  }

  h2 {
    font-size: calc(var(--font-size-display) * 1.5);
  }

  .subheading {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-large);
    color: var(--color-text-dark-muted);
  }
</style>