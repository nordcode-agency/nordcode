<script lang="ts">
import { Navigation } from '$lib/content/navigation';
import { ensureTrailingSlash } from '$lib/utils/ensureTrailingSlash';
</script>

<nav>
    <ul>
        <li><a href={ensureTrailingSlash(Navigation.work.url)}>{Navigation.work.name}</a></li>
        <li><a href={ensureTrailingSlash(Navigation.about.url)}>{Navigation.about.name}</a></li>
    </ul>
</nav>

<style>
@custom-media --md-n-above (width >= 768px);

nav {
    display: flex;
    justify-content: flex-end;

    @media (--md-n-above) {
        justify-content: center;
    }
}
a {
    /* font-size: var(--font-size-largest); */
    font-size: clamp(1.5rem, 6vw, 2.5rem);
    text-decoration: none;
    color: var(--color-brand-primary-base);
    padding-block: var(--spacing-nearest);
    padding-inline: var(--spacing-base);
}

ul {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-base);
    list-style: none;
    padding: 0;
}
</style>
