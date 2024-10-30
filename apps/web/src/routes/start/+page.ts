import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		title: 'nordcode – Lass uns starten.',
		questions: [
			{
				heading: 'Website',
				desc: 'Für dein Geschäft, Blog, selbständige Arbeit oder Ähnliches haben wir kostengünstige Lösungen.',
				slug: '/start/website'
			},
			{
				heading: 'E-Commerce',
				desc: 'Ein manueller Prozess, zum Beispiel bei der Erfassung, Übertragung oder Verarbeitung von Daten können wir automatisieren um Zeit- und Kostenersparnisse zu erzielen.',
				slug: '/start/e-commerce'
			},
			{
				heading: 'Apps',
				desc: 'Visualisierungen von 3D Modellen, zum Beispiel bei Konfiguratoren oder Storytelling.',
				slug: '/start/apps'
			},
			{
				heading: 'Individuell',
				desc: 'Durch den Einsatz von KI-Modellen (AI) können wir Prozesse optimieren oder neue Funktionen in deine Anwendung integrieren.',
				slug: '/start/custom'
			}
		]
	};
}) satisfies PageLoad;
