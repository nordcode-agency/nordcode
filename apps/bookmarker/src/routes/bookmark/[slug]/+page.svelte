<script lang="ts">
    import type {PageData} from './$types';

    export let data: PageData;


</script>

<article class="stack -layout-far -stretched">
    <div class="cluster -centered">
        <img src={data.bookmark.image} loading="lazy" alt={`favicon for ${data.bookmark.title}`} />
        <h1>{data.bookmark.title}</h1>
    </div>
    <div class="stack -layout-near">
    <small class="cluster">
        <span>{data.bookmark.url} - {new Date(data.bookmark.dateAdded).toLocaleDateString()}</span>
    </small>
        {#if data.bookmark.tags.length > 0}
    <div class="cluster -centered">
        <b>Tags:</b>
        {#each data.bookmark.tags as tag}
            <a class="tag" href={`/collection?tags=${tag}`}>#{tag}</a>
        {/each}
    </div>
            {:else}
            <p>No tags set.</p>
        {/if}
        </div>
    <p>
        {data.bookmark.description}
    </p>
</article>


<style lang="postcss">
    article {
        margin-block-start: var(--spacing-farthest);
    }

    img {
        inline-size: 2rem;
    }

    small {
        color: var(--color-text-subtle);
    }

    .tag {
        color: var(--color-brand-primary-strong);
        text-decoration: none;
    }

    .tag:hover {
        color: var(--color-brand-primary-base);
    }

</style>
