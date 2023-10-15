<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;

  const { heading, subheading, cover, slug } = data;
  
</script>

<article class="section">
  <div class="stack">
    <figure style={`--name: work-figure-${slug}`}>
      <img src={cover?.src} alt={cover?.alt}>
    </figure>
    <div class="headings" style={`--name: work-headings-${slug}`}>
      <span>{subheading}</span>
      <h2>{heading}</h2>
    </div>
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
</article>

<style lang="postcss">
  article {
    inline-size: min(60vw, 96ch, 100%);
    margin-inline: auto;
  }

  figure {
    view-transition-name: work-figure;
  }

  :global(::view-transition-old(work-figure)),
  :global(::view-transition-new(work-figure)) {
    /** @url https://developer.chrome.com/docs/web-platform/view-transitions/#handling-changes-in-aspect-ratio */
    height: 100%;
  }

  img {
    aspect-ratio: 21/9;
    inline-size: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-large);
  }

  .headings {
    view-transition-name: work-headings;
  }
</style>