<script lang="ts">
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

interface Props {
    image: SvelteHTMLElements['enhanced:img'];
    children: Snippet;
}

let { image, children }: Props = $props();
</script>

<figure class="case-img-container card-bg">
    <a href={image.img.src} aria-hidden="true">
        <enhanced:img class="case-img" src={image} alt="" />
    </a>
    <figcaption>
        {@render children()}
    </figcaption>
</figure>
