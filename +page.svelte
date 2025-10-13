<script lang="ts">
import header from '$lib/assets/projects/wildtierrettung/header.jpg?enhanced';
import start from '$lib/assets/projects/wildtierrettung/start.jpg?enhanced';
import verteiler from '$lib/assets/projects/wildtierrettung/verteiler.jpg?enhanced';
import ColorPalette from '$lib/modules/common/components/ColorPalette.svelte';
</script>

<h2>Was war das Ziel?</h2>
<div class="nc-flow nc-box -bordered -muted -filled nc-alert">
    <p>
        Bitte erstellt eine Webseite, mit der wir uns sehen lassen können. Dazu soll die Seite folgende Funktionene
        erfüllen:
    </p>
    <ol>
        <li>Unser Verein, seine Aufgaben und Akitvitäten sollen vorsgestellt werden</li>
        <li>Wir wollen zeigen, wie man helfen kann (Spenden und Freiwilligenarbeit)</li>
        <li>
            Landwirt:innen sollen über die Vorteile informiert werden und es soll ihnen einfach gemacht werden, die
            Wildtierrettung zu beauftragen
        </li>
        <li>Wir brauchen eine neue E-Mail-Adresse (und unsere Domain zurück)</li>
        <li>Wir wollen ein Kontaktformular, weil das den Großteil unserer Kontaktaufnahmen war</li>
    </ol>
</div>
<p>
    Dazu mussten wir die Inhalte weitestgehend selber schreiben. Sie sollten natürlich auch ein Stück weit SEO-optimiert
    sein, damit man die Seite auch findet. Konkretes dazu unter <a href="#seo">SEO und Content</a>.
</p>
<p>
    Beim Design hatten wir freie Hand. Es gibt ein Logo und einen Instagram Account, woran wir uns orientiert haben, um
    in der Brand Sprache zu bleiben. Mehr Details dazu unter <a href="#design">Design</a>.
</p>

<h2>Was habt ihr erreicht?</h2>

<p>
    Zuerst haben wir die alte Domain wiederbekommen. Das war eine kleine Aufregung, aber lief glücklicherweise
    glimpflich.
</p>
<p>
    Das wichtigste natürlich zuerst: <strong>die Webseite gefällt</strong> und der Verein kann sie mit Stolz vorzeigen.
</p>

<p>
    Wir haben den Besucher:innen möglichst viel Übersicht durch Gliederung, Verteilerpunkte und Links gegeben, sodass
    sie schnell an den richtigen Ort gelangen. Den Abschluss machen dann
    <strong>sinnvoll positionierte CTAs, das Kontaktformular und weitere Kontaktmöglichkeiten</strong>.
</p>

<figure class="case-img-container card-bg">
    <enhanced:img class="case-img" src={header} />
    <figcaption>
        Klare Strukturen, einfache Navigation ein CTA, um direkt zur Anmeldung zu kommen.
    </figcaption>
</figure>

<p>
    Auch auf dem Handy ist die Webseite <strong>sehr einfach zu bedienen</strong>.
</p>
<p>
    Durch <strong>keyword-recherche-basierte</strong> und
    <strong>ansprechend geschriebene Inhalte</strong> ist die Seite sowohl leicht auf Google und co zu finden und auch
    nett zu lesen. Zur Unterstüzung haben wir den Verein noch auf Google my Business angemeldet auf diversen
    Wildtierrettungs-Registern eingetragen. So findet jeder, der regionale Wildtierrettung sucht den Verein schnell und
    treffsicher.
</p>

<h2 id="design">Designumsetzung</h2>
<div class="nc-flow nc-box -bordered -muted -filled nc-alert">
    <p>
        Das Design soll <strong>aufgeräumt, modern und klar</strong> sein. Nicht zu verspielt, aber auch nicht
        langweilig, klinisch oder trocken.
    </p>
    <p>
        Die Webseite richtet sich dabei an alle Altersgruppen und unteranderem auch an Menschen, die nicht so viel im
        Internet unterwegs sind.
    </p>
</div>
<p>Klarer Brief, schauen wir mal, was wir daraus machen können.</p>
<h3>Farben</h3>
<p>
    Für die Farben haben wir uns am Logo orientiert und daraus abgeleitet Varianten entworfen. Da wir verschiedene
    Zielgruppen auf der Seite bedienen, konnten wir mit den Farben unterstützen und die Navigation und Wiedererkennung
    etwas erleichtern.
</p>

<ColorPalette
    palette={{
        light: ['#FBFFFB', '#040E04', '#285628', '#6A7301'],
        dark: ['#0A0C0A', '#EBEFEC', '#94C792', '#B6C058'],
    }}
></ColorPalette>

<figure class="case-img-container card-bg">
    <enhanced:img class="case-img" src={verteiler} />
    <figcaption class="column-2">
        Durch die Farben haben wir die Bereiche getrennt. Auf den Detailseiten findet man sie direkt wieder und weiß,
        dass man richtig ist.
    </figcaption>
</figure>

<p>
    Die Farben siedeln sich in den naturnahen Wald- und Wiesenfarben an, die auch im Logo zu finden sind. Das ist
    freundlich und einladend und passt zum Thema.
</p>
<p>
    Dabei haben wir natürlich stets wert darauf gelegt, dass die <strong>Farben barrierefrei sind</strong> und eine gute
    Lesbarkeit gewährleisten.
</p>

<h3>Struktur</h3>

<p>
    Auch hier gilt klar: <strong>Fokus auf Klarheit</strong>. Mit einer gut lesbaren Schriftgröße, ausreichend Abstand
    und klaren Blöcken ist die Seite gut scanbar und lesbar.
</p>
<p>
    Durch <strong>viele exzellente Bilder</strong>, die wir vom Verein bekommen haben, schaffen wir eine persönliche
    Note und vermitteln einen Eindruck über die freundlichen Mitglieder und die Arbeit des Vereins.
</p>
<p>
    Dazu kommen Zahlenblöcken für eine gute Übersicht über die Arbeit des Vereins und Zitaten der Mitglieder:innen für
    mehr Persönlichkeit.
</p>

<h2 id="seo">SEO und Content</h2>

<div
    class="nc-box -bordered nc-cluster nc-alert -neutral -filled"
    style="padding: var(--spacing-base)"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="nc-icon"
        data-size="lg"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-7 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
    </svg>
    <p>Beides hat die exzellente SEO-Managerin Marthe Schubert für uns gemacht.</p>
</div>
<p>
    Nach zwei Interviews mit dem Vortand und viel Recherche zur Arbeit des Vereins und den damit verbundenen Keywords
    hat sie die Webseite strukturiert und betextet, damit mit sowohl Besucher:innen als auch Suchmaschinen zufrieden
    sind.
</p>
<figure class="case-img-container card-bg">
    <enhanced:img class="case-img" src={start} />
    <figcaption class="column-2">
        Schon der Start erklärt das Problem und wie der Verein es löst. Zudem bieten wir einen direkten Link für
        Landwirt:innen an, damit sie schnell handeln können, wenn sie wissen, warum sie gekommen sind.
    </figcaption>
</figure>

<p>
    Der Stil reflektiert die freundliche Nahbarkeit des Vereins und ist leicht zu lesen: Besucher:innen werden geduzt
    und direkt angesprochen, es bleibt aber informativ und ohne moralische Aufladung.
</p>

<style>
</style>
