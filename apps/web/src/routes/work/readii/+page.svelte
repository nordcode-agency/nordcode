<script lang="ts">
    import preview from "$lib/assets/projects/readii/readii-app-preview.png?enhanced";
    import typographyGeorgia from "$lib/assets/projects/readii/readii-typography-text-font-family-georgia.png?enhanced";
    import typographyDM from "$lib/assets/projects/readii/readii-typography-titles-font-family-dm-serif-display.png?enhanced";
    import sampleArticles from "$lib/assets/projects/readii/sample-articles.png?enhanced";
</script>

<h2>Was war das Ziel?</h2>
<div class="nc-flow nc-box -bordered -muted -filled nc-alert">
	<p>
		Eine einfache, moderne Browser-Erweiterung für Chrome, die es ermöglicht RSS-Feeds zu
		abonnieren und zu lesen. Außerdem soll die Anwendung den Nutzer durch lokalen KI-Modelle
		unterstützen.
	</p>
</div>
<p>
	Der Fokus lag auf einem klaren, einfachen Design, welches das Folgen der eigenen RSS-Feeds
	möglichst unkompliziert gestaltet. Die Anwendung rückt die neusten Artikel in den Vordergrund.
	Farben und Typographie sollen die Lesbarkeit und Übersichtlichkeit unterstützen.
</p>

<h2>Was ist RSS?</h2>

<p>
	RSS steht für Really Simple Syndication. Es ist ein Web-Feed-Format, das verwendet wird, um
	regelmäßig aktualisierte Inhalte wie Blog-Posts, Nachrichtenartikel oder Podcasts in einem
	standardisierten Format zu liefern. Mit einem RSS-Feed können Nutzer Inhalte von verschiedenen
	Websites an einem Ort abonnieren und lesen, ohne jede Website einzeln besuchen zu müssen
</p>

<h2>Was ist KI (Künstliche Intelligenz)</h2>

<p>
	Künstliche Intelligenz (KI) oder Artifical Intelligence (AI) bezieht sich auf die Fähigkeit von
	Maschinen, menschenähnliche Intelligenz zu zeigen. Dies umfasst das Lernen aus Erfahrungen, das
	Verstehen natürlicher Sprache, das Erkennen von Mustern und das Treffen von Entscheidungen. KI
	wird in vielen Bereichen eingesetzt, von Sprachassistenten wie mir bis hin zu selbstfahrenden
	Autos und medizinischen Diagnosen. Populär wurden Sprachmodelle vor allem durch das von OpenAI
	entwickelte ChatGPT.
</p>

<figure class="case-img-container card-bg">
    <enhanced:img class="case-img" src={preview} />
	<figcaption>
		Die Optimierung für Light Theme und Dark ermöglichst bessere Lesbarkeit, je nach Umgebung oder Nutzerpräferenzen
	</figcaption>
</figure>

<h2>Herausforderungen</h2>

<p>
	Unsere App ist ein RSS-Reader, der vor allem Daten von anderen Websites bzw. Blogs verarbeitet.
	Wir haben uns sehr bemüht, dass alle Inhalte, egal aus welcher Quelle, immer gleich angezeigt
	werden. Die Herausforderung bestand also darin, RSS-Feeds mit unterschiedlichen Formaten zu
	vereinheitlichen.Dafür haben wir ein Programm entwickelt, welches die RSS-Feeds analysiert und
	in eine strukturierte Form umwandelt.Dabei kann die Vollständigkeit der RSS-Feeds, die der
	Nutzer abonniert hat, stark schwanken. Wir haben uns deshalb viele Gedanken gemacht um
	sicherzustellen, dass man auch dann einen Mehrwert hat, wenn ein Feed mal nicht vollständig
	ist.Wenn ein RSS-Feed jedoch viele Daten bereitstellt, dann sorgt zum Beispiel eine
	Vorschaufunktion für eine noch bessere Nutzererfahrung.
</p>

<p>
	Eine weitere Herausforderung bestand in der Bereitstellung der KI, die im RSS-Reader genutzt
	wird. Dieser ist in modernen Chrome Browsern verfügbar und bietet dadurch einige Vorteile. So
	ist für die Nutzung der KI Funktion zum Zusammenfassen der Artikel keine Internetverbindung
	nötig. Die Zusammenfassung kann dadurch recht schnell und ohne den Verbrauch von Datenvolumen
	erfolgen. Dadurch besteht auch nicht die Notwendigkeit Anfragen an einen Server zu senden, was
	die <a href="#privacy">Privatsphäre der Nutzer schützt</a>.
</p>
<p>
	Durch den frühen Einsatz der In-Browser-KI Gemini Nano gab es anfänglich jedoch einige
	Schwierigkeiten, die notwendige Geschwindigkeit und fehlerfreie Verarbeitung der Artikel
	sicherzustellen. Zeitweise stellen bestimmte Artikel weiterhin eine Herausforderung für die
	lokale künstliche Intelligenz dar. Wir sind jedoch zuversichtlich, dass sich diese
	Einschränkungen mit der Weiterentwicklung von Google&apos;s Gemini Nano im Laufe der Zeit auflösen
	werden.
</p>

<h2 id="design">Designumsetzung</h2>

<h3>Farben</h3>
<p>
	Um ein angenehmes Lesen zu ermöglichen, setzt das Design vor allem auf wärme Orange- und
	Brauntöne. Diese ähnelt damit auch einigen klassisch designten analogen Notizbüchern unter
	Verwendung von naturnahen Stoffen wie Leder für den Einband oder recyceltem Papier.
</p>

<p>
	Für Textinhalte haben wir auf ausreichenden Kontrast in den Farben geachtet. Satte,
	kontrastreiche Farben kommen hingegen für Buttons und das Logo zum Einsatz.
</p>

<figure class="case-img-container card-bg">
    <enhanced:img class="case-img" src={sampleArticles} />
	<figcaption>
		Ausreichend Kontrast zwischen Artikelüberschrift und ausreichender Textgröße legen den Fokus auf den Inhalt
	</figcaption>
</figure>

<p>
	Das Theming der Anwendung passt sich den Nutzerpräferenzen, bzw den OS-Einstellungen des Nutzers
	an. Verwendet das Betriebssystem, zum Beispiel weil es dunkel ist, das Dark Theme, so verwendet
	auch der RSS-Reader dunkle Hintergründe aus der Farbpalette. Ebenso verhält es sich für helle
	Farben beim Light Theme. Dieser unterstützt zusätzlich die Lesbarkeit bei Verwendung der App im
	Freien bei hohen Umgebungslicht.
</p>

<h3>Typographie</h3>

<p>
	Für Textinhalte verwendet der RSS-Reader Schriftarten mit Serifen. Für Überschriften ist dies
	"DM Serif Display". Sie ist vor allem stilistisch schön und verleiht der App eine gewisse
	Eleganz. Für Fließtexte wird die weit verbreitete Schriftart "Georgia" verwendet. Inhalte mit
	informativen Charakter oder mit einen Call-to-Action (CTA) wie buttons wird eine serifenlose
	Schrift verwendet. Dabei wird nur die Schriftart "DM Serif Display" geladen. Die verbleibenden
	Schriftarten sind systemeigene Schriftarten. Sie sind somit auf fast allen Gerät bereits
	installiert und müssen nicht extra geladen werden.
</p>

<figure class="case-img-container card-bg">
    <enhanced:img class="case-img" src={typographyDM} />
	<figcaption>
		Durch die Wahl einer separaten Schriftart für Überschriften werden diese stilistisch hervorgehoben.
	</figcaption>
</figure>

<figure class="case-img-container card-bg">
    <enhanced:img class="case-img" src={typographyGeorgia} />
	<figcaption>
		Fließtexte verwenden die Schriftart "Georgia".
	</figcaption>
</figure>

<h2 id="privacy">Privatsphäre & Datenschutz</h2>

<p>
	Die Nutzung des RSS-Readers ist ohne die Angabe von personenbezogenen Daten möglich. Zudem ist
	die offline nutzbar und benötigt keine Verbindung zu einem fremden Server. Dies vereinfacht
	nicht nur die Nutzererfahrung, sondern schützt und respektiert auch die Privatsphäre jedes
	Nutzers. Des Weiteren werden keine Analytics Tools eingesetzt oder Cookies gesetzt, die
	Nutzerverhalten tracken.
</p>

<h2 id="security">Sicherheit</h2>

<p>
	Die App ist auf die Inhalte von RSS-Feeds angewiesen. Die über den Feed bereitgestellten Daten
	liegen nicht in der Kontrolle der App. Um sicherzustellen, dass der Abruf von Inhalten der
	selbstgewählten RSS-Feeds nicht schädlich ist, wird der Inhalt for dem Anzeigen im Reader
	gereinigt ("sanitized"). Zudem erlaubt die App nur das Hinzufügen von RSS-Feeds, die auf
	sicheren Verbindungen (HTTPS) bereitgestellt werden.
</p>

<h2 id="next-steps">Ausblick</h2>

<p>
	Der RSS-Reader ist ein Projekt, das stetig weiterentwickelt wird. In Zukunft sind weitere
	Funktionen geplant, die die Nutzererfahrung verbessern sollen. Dazu gehören unter anderem
	Erweiterungen der KI-Funktionen, die eine bessere Strukturierung und Suche von Artikel
	ermöglichen soll. Außerdem soll es einfacher werden, vollständige Artikel von Websites zu lesen,
	die keinen RSS-Feed anbieten, oder die nur eine Vorschau des Artikels bereitstellen.
</p>
