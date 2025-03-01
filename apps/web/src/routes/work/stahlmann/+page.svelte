<script lang="ts">
	import header from '$lib/assets/projects/stahlmann/stahlmann-header.webp?enhanced';
	import exercise from '$lib/assets/projects/stahlmann/stahlmann-exercise.webp?enhanced';
	import videos from '$lib/assets/projects/stahlmann/stahlmann-videos.webp?enhanced';
	import videoplayer from '$lib/assets/projects/stahlmann/stahlmann-videoplayer.webp?enhanced';
	import BlogImagePreview from '$lib/modules/common/components/BlogImagePreview.svelte';
</script>

<h2>Was war das Ziel?</h2>
<div class="nc-flow nc-box -bordered -muted -filled nc-alert">
	<p>
    	Wir wollen ein Fitness-Programm auf die Beine stellen, das leicht zu bedienen ist und unsere Kund:innen an die Hand nimmt und durch ihre erste Fitness-Journey begleitet.<br>
	</p>
	<p>
	Dafür wollen wir folgende Funktionen:
	</p>
	<ol>
    	<li>Es gibt einen eingeloggten Bereich, der nur für Mitglieder:innen ist, die den Plan gekauft haben.</li>
        <li>Es gibt einen Trainingsplan, mit vielen Videos und Erklärungen.</li>
        <li>Es gibt eine Übersicht über alle Übungen mit Filterfunktion.</li>
        <li>Es gibt eine Tagebuchfunktion, wo die Mitglieder:innen ihre Fortschritte festhalten.</li>
        <li>Alles soll über ein CMS pflegbar sein.</li>
    </ol>
</div>

<p>So weit, so gut. Das Ziel war ambitioniert und wir mussten zusätzlich Beratung und Support hinter den Kulissen geben, aber es hat richtig Spaß gemacht</p>
<p>Dazu standen wir in regem Austausch mit unseren Kundinnen, die sich viele Mühen gemacht haben und wir haben Hand in Hand gearbeitet, um das Projekt zu einem Erfolg zu machen.</p>

<h2>Was habt ihr erreicht?</h2>
<p>
    Wir waren <strong>pünktlich</strong> und der Launch zum neuen Jahr war ein großer Erfolg. Die Seite und der Plan sind super angekommen und werden rege benutzt.
    Das Feedback war durchweg positiv und die Kundinnen sind sehr zufrieden.
</p>
<p>Zusätzlich haben wir viele neue Erfahrungen gesammelt, was gut funktioniert und worauf man besondern Wert legen muss, gerade bei der Arbeit mit Wix.</p>
<p>Schauen wir uns mal ein paar Details an.</p>

<BlogImagePreview image={header}>
    Im Fokus steht der Fortschritt. 90 Tage. Dazu gibt's eine klare Navigation & Aufmunterung.
</BlogImagePreview>

<h2 id="design">Design und Aufbau</h2>
	<p>
	Es gab ein ganz grobes Design. Soll heißen, eine ungefähre Idee und ein paar Farben. Den Rest haben wir selbst gemacht und abgeleitet.
	</p>
	<p>
	Die Webseite strahlt Kraft aus, ist <strong>klar strukturiert und einfach zu bedienen</strong>, denn unsere Zielgruppe sind Menschen, die weder viel Fitnesserfahrung, noch viel Fitnessplan-Erfahrung haben.
	</p>

<BlogImagePreview image={exercise}>
    Die Übungen sind häufig aufgeteilt in drei Level. Dazu gibt's Links zu den Videos und die relevanten Infos auf einen Blick.
</BlogImagePreview>

	<p>Dafür haben wir uns viele Gedanken gemacht, wo sich die Inhalte intuitiv anfühlen und wie wir die Nutzer:innen an die Hand nehmen können. Wir arbeiten hier viel mit Breadcrumbs und unterstützenden Sprungmarken, damit die Nutzer:innen immer wissen.</p>
	<p>Unsere Kundin hat sich bei den Inhalten viel Mühe gegeben und Anleitungen in Text und Videoform erstellt, um hier zu unterstützen.</p>
	<BlogImagePreview image={videoplayer}>
    Der Videoplayer strahlt in den Farben des Designs und greift verschiedene Design Elemente auf. Auf kleinen Bildschirmen passt sich das Layout an, damit weiterhin alle Infos sichtbar bleiben.
</BlogImagePreview>

	<p>Das Programm soll über <strong>alle Geräte funktionieren</strong>, denn wir erwarteten, dass es gleichermaßen auf dem Handy, als auch am Laptop genutzt wird. Zusätzlich gibts ein Druckversion als weitere Möglichkeit fürs Fitnessstudio.</p>


<p>
    Der <strong>Star ist die Fülle an Videos</strong>, die wir natürlich entsprechend in Szene setzen wollten. Mit einer <strong>filter- und durchsuchbaren Übersicht, einem gebrandeten Videoplayer</strong> und sinnvoll gesetzten Tipps ist und das ganz gut gelungen,</p>

<BlogImagePreview image={videos}>
    Die Übersicht orientiert sich an den gewohnten Videoplayer. Mit Suche und Filtern finet man so schnell die passenden Videos.
</BlogImagePreview>

<h2 id="cms">CMS, Userdaten und Techstack</h2>

<p>Unsere Kundinnen hatten sich schon auf <strong>Wix</strong> festgelegt. Unsere Aufgabe war es also, die Daten dort sinnvoll zu strukturieren und per API sicher abzurufen.<p>
<p>Wix stellt dazu eine ganz vernünftige SDK zur Verfügung, die serverseitig von uns benutazt werden, damit wir keine sensiblen Daten öffentlich machen müssen.</p>
<p>Dazu haben wir Wix' Anmeldung und Preisplan Funktionen genutzt, damit wirklich nur Kund:innen auf die Inhalte zugreifen können, die den Plan auch gekauft haben.</p>
<p>Leider bietet Wix keine gute Möglichkeit an, um Nutzerdaten zu speichern. Dafür sind wir dann auch <strong>Cloudflare Worker</strong> ausgewichen, die ganz hervorragend mit unserem Framework der Wahl, <strong>SvelteKit</strong>, zusammenarbeiten.</p>

<style>
</style>
