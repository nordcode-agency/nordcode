/**
 * Either navigates or scrolls element into view with a given `id`.
 * This can be helpful to scroll horizontal galleries by clicking.
 * @param {string} id The `id` attribute value of the HTML element to be navigated to.
 */
export const navigateToId = (id: string) => {
	if (document?.navigation?.navigate) {
		document.navigation.navigate(`#${id}`, { history: 'replace' });
	} else {
		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: 'smooth' });
	}
};
