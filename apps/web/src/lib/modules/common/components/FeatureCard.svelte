<script lang="ts">
import type { MediaImage } from '$lib/types/index';
import { ensureTrailingSlash } from '$lib/utils/ensureTrailingSlash';

interface Props {
    heading: string;
    subheading?: string | undefined;
    cover: MediaImage;
    slug: string;
    /** Used to perform view transitions */
    id?: string | undefined;
}

let { heading, subheading = undefined, cover, slug, id = undefined }: Props = $props();
</script>

<div class="container">
    <article class="nc-card card card-bg nc-clickable-card">
        <figure class="figure" style={`view-transition-name: ${id}`}>
            <enhanced:img
                class="img"
                src={cover.src}
                alt=""
                loading="lazy"
                decoding="async"
                fetch-priority="auto"
                sizes="
                    (min-width: 1100px) 585px,
                    (min-width: 585px) 980px,
                    (min-width: 480px) 585px,
                    360px"
            />
            <figcaption class="sr-only">{cover.alt}</figcaption>
        </figure>
        <div class="header">
            <div class="headings">
                {#if subheading}
                    <span>{subheading}</span>
                {/if}
                <h2 class="font-size-base | heading">
                    <a href={ensureTrailingSlash(slug)} data-link="main">{heading}</a>
                </h2>
            </div>
        </div>
    </article>
</div>

<style>
.container {
    container-type: inline-size;
    inline-size: 100%;
}
.card {
    --card-padding-inline: 0px;
    --card-padding-block: 0px;

    display: grid;
    grid-template:
        [img-start full-start]
        auto
        [img-end header-start]
        1fr
        [header-end full-end]
        / 1fr;
    block-size: 100%;

    @container (min-inline-size: 360px) {
        & h2 {
            font-size: var(--font-size-large);
        }
    }

    @container (min-inline-size: 680px) {
        & {
            aspect-ratio: 16 / 9;

            & .figure {
                grid-area: 1 / 1 / 3 / 4;
            }

            & .header {
                display: grid;
                place-items: end;
                padding-block: var(--spacing-far);
            }

            & .headings {
                background: color-mix(in oklch, var(--color-surface-subtle), transparent 3%);
                padding-block: var(--spacing-base);
                padding-inline: var(--spacing-far);
                border-radius: var(--border-radius-large);
                box-shadow: var(--shadow-near);
            }
        }
    }

    @container (min-inline-size: 1024px) {
        & {
            aspect-ratio: 21 / 9;
        }
    }
}

.figure {
    grid-area: img;
    overflow: hidden;
}

.img {
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border-radius: var(--border-radius-small);
}

.header {
    grid-area: header;
    padding: var(--spacing-base);
}

.heading {
    line-height: 2.8ex;
}

.headings {
    & span {
        color: var(--color-text-muted);
    }
}
</style>
