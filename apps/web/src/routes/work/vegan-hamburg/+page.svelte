<script lang="ts">
	import navigation from '$lib/assets/projects/vegan-hamburg/vegan-hamburg-navigation.webp?enhanced';
	import karte from '$lib/assets/projects/vegan-hamburg/vegan-hamburg-karte.webp?enhanced';
	import listing from '$lib/assets/projects/vegan-hamburg/vegan-hamburg-listing.webp?enhanced';
	import BlogImagePreview from '$lib/modules/common/components/BlogImagePreview.svelte';
</script>

<h2>Was war das Ziel?</h2>
<div class="nc-flow nc-box -bordered -muted -filled nc-alert">
	<p>
	Wir wollen eine Verzeichniswebseite erstellen, die eine gute Übersicht über alle veganen Restaurants, Cafés, usw. bietet, da es relativ schwierig ist, aktuelle Informationen dazu zu finden.
	</p>
	<p>
	Der Fokus liegt auf:
	</p>
	<ol>
		<li>Gute Navigation und übersichtliche Darstellung der wesentlichen Informationen. Es soll einfach sein, schnell auf dem Handy einen Ort zu finden.</li>
		<li>SEO-optimierten Inhalt, der Spaß macht zu lesen, damit die Inhalte gut gefunden werden, aber auch die Leser*innen anspricht</li>
		<li>
			Es soll eine Kartenansicht mit Filtern geben
		</li>
		<li>Das Design soll ansprechend sein und dem Inhalt nicht im Weg stehen</li>
	</ol>
</div>
<p>
	Ein wichtiger Unterschied: hier sind wir selber auch Stakeholder. Inhalte und SEO-relevantes macht unsere Lieblings SEO-Managerin Marthe Schubert, die andere Stakeholderin für dieses Projekt. Sie ist auch maßgeblich für die Recherche und Pflege der Inhalte verantwortlich.
</p>
<p>
    Im Zuge der SEO- und UX Optimierung habne wir hier ein besonderes Augenmaß auf Performance gelegt und dafür einige Register gezogen. Eine kurze technische Auflistung gibt's unter <a href="#performance"
		>Performance</a
	>.
</p>

<h2>Was habt ihr erreicht?</h2>
<time datetime="2025-02-23">Stand: 23.02.2025</time>
<p>
Wir haben erstmal viel Recherche betrieben und alle aktuell geöffneten Orte auf die Webseite und auf die Karte eingetragen.
</p>
<p>Aktuell gibt es pro Monat rund <strong>600-700 Besucher*innen, ca. 400 Klicks über Google mit ca. 18.5k Impressionen</strong>. Das sind keine riesigen Nummern, aber für ein relativ junges Projekt in einer relativen kleinen Nische gar nicht übel.</p>
<p>
	Die Webseite lädt natürlich schnell, ist ziemlich barrierefrei und hat eine übersichtliche Karte, die auch auf Mobilgeräten gut funktioniert.
</p>
<h2>Design und Aufbau</h2>
<p>
    Der Aufbau der Webseite ist <strong>intuitiv</strong>. Mit der Navigation kommt man über eine klare Auflistung schnell zu den gesuchten Informationen. Sie versucht, die Nutzer*innen da abzuholen, wo sie mit Ihrer Frage stehen.
</p>

<BlogImagePreview image={navigation}>
    Die Unterscheidung zwischen wo und was ist intuitiv, das Menü übersichtlich. Mit Breadcrumbs weiß man immer, wo man ist und wie man wieder zurück kommt.
</BlogImagePreview>

<p>
	Auch auf dem Handy ist die Webseite <strong>sehr einfach zu bedienen</strong>.
</p>
<BlogImagePreview image={listing}>
Die einzelnen Orte sind darauf optimiert, das sie die relevanten Informationen darstellen.
</BlogImagePreview>
<p>Auf den Karten der jeweiligen Orte findet sich die Adresse, eine kurze Auflistung der angebotenen Speisen, ein ansprechender Kurztext mit Foto, wichtige Tags und natürlich die Öffnungszeiten.</p>
<p>Die einzelnen Listen sind filterbar für aktuell geöffnete Orte, sowie strikt vegane, wo auf etwaige Milch oder Ei-Allergie geachtet wird.</p>
<BlogImagePreview image={karte}>
Auf der Karte sind alle Orte schnell zu finden. Sie lässt sich filtern und zoomen.
</BlogImagePreview>
<h2 id="performance">Performance & Technisches</h2>
<p>Performance ist bei einfachen Webseiten einfach. So hat es auch hier angefangen. Mit wachsender Anzahl an Orten und Informationen enstanden neue Challenges. Es folgt eine kleine Auflistung der Herausforderungen und Lösungen. Achtung: es wird technisch!</p>
<p>Am Anfang haben wir die SVGs inlined. Das ist erstmal kein Problem. Wenn auf einer Seite dann aber plötzlich 100 SVGs zu parsen sind, dauert das etwas länger. Hier haben wir auf eine <strong>stark gecachte Sprite-Map gewechselt, was die DOM-Größe drastisch reduziert</strong> hat und trotzdem mit Light und Dark Mode funktioniert.</p>
<p>Um die initiale Ladezeit und die Zeit, bis Nutzer*innen die Seite nutzen können <abbr title="Time to Interactive">TTI</abbr> zu verbessern, haben wir per <code>content-visibility</code> das Rendern der einzelnen Orte etwas nach hinten verlagert.</p>
<p>Die Bilder sind natürlich ebenfalls optimiert. Dazu setzen wir auf <strong>aktuelle Formate</strong>, wie <code>webp</code>, <strong>image sourcemaps</strong> und lazyloading, um die Bilder nur in den notwendigen Größen zu laden.</p>
<p>Um die Karte schnell und responsiv zu halten, nutzen wir Programmiertricks, die <strong>long running tasks aufbrechen</strong>, gerade wenn die Karte gefiltert oder gezoomt wird.</p>
<h3>Weitere technische Details</h3>
<p>Für die Privatssphäre unserer Nutzer*innen, setzen wir auf das <strong>Analytics-Tool Matomo</strong>, das die Möglichkeit bietet, ohne Cookies auszukommen. Die Daten sind weniger detailliert, anonymisiert und lokal auf unserem Server gespeichert. Das reicht vollkommen aus.</p>
<p>Alle Daten und Texte sind im Code hinterlegt. Mit kluger Typisierung unterbinden wir Tag-Duplikate und können die Daten für die Karte als geo-json wieder benutzen.</p>

<p>Vielen Dank fürs Lesen. Wenn die eine Seite dieser Art zusagt, melde dich. Wir helfen dir gerne!</p>
