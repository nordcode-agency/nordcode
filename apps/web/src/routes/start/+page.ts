import type { PageLoad } from './$types';

export const load = (async () => {

	return {
		title: 'nordcode – Lass uns starten.',
		questions: [
      {
        heading: 'Website',
        desc: 'Für dein Geschäft, Blog, selbständige Arbeit oder Ähnliches haben wir kostengünstige Lösungen.',
        queryKey: 'website',
      },
      {
        heading: 'Automation',
        desc: 'Ein manueller Prozess, zum Beispiel bei der Erfassung, Übertragung oder Verarbeitung von Daten können wir automatisieren um Zeit- und Kostenersparnisse zu erzielen.',
        queryKey: 'automation',
      },
      {
        heading: '3D',
        desc: 'Visualisierungen von 3D Modellen, zum Beispiel bei Konfiguratoren oder Storytelling.',
        queryKey: '3d',
      },
      {
        heading: 'Unterstützung',
        desc: 'Ein bestehendes oder neues Projekt benötigt Unterstützung vor allem im Frontend-Bereich',
        queryKey: 'support',
      },
      {
        heading: 'Design System',
        desc: 'Du benötigst ein einfaches und skalierbares Design System im Web für ein konsistente User Interface deiner App/s.',
        queryKey: 'support',
      },
    ],
	};
}) satisfies PageLoad;