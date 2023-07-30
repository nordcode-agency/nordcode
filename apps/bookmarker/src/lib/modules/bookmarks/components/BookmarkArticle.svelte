<script lang="ts">
    import type {Bookmark} from "$lib/modules/bookmarks/Bookmark";
    import MoreButton from "$lib/modules/common/components/MoreButton.svelte";
    import MenuItem from "$lib/modules/common/components/MenuItem.svelte";
    import {bookmarkToEdit} from "$lib/modules/bookmarks/stores/bookmarkToEdit";

    export let bookmark: Bookmark;

    const domain = bookmark.url.split("/")[2].replace("www.", "");

    function getPrettyDate(date: Date) {
        const delta = Math.round((+new Date - date) / 1000);

        const minute = 60,
            hour = minute * 60,
            day = hour * 24,
            week = day * 7,
            month = day * 30,
            year = day * 365;


        if (delta < 30) {
            return 'just now.';
        }
        if (delta < minute) {
            return delta + ' seconds ago.';
        }
        if (delta < 2 * minute) {
            return 'a minute ago.'
        }
        if (delta < hour) {
            return Math.floor(delta / minute) + ' minutes ago.';
        }
        if (Math.floor(delta / hour) == 1) {
            return '1 hour ago.'
        }
        if (delta < day) {
            return Math.floor(delta / hour) + ' hours ago.';
        }
        if (delta < day * 2) {
            return 'yesterday.';
        }
        if (delta < week) {
            return Math.floor(delta / day) + ' days ago.';
        }
        if (delta < week * 2) {
            return 'last week.';
        }
        if (delta < month) {
            return Math.floor(delta / week) + ' weeks ago.';
        }
        if (delta < month * 2) {
            return 'last month.';
        }
        if (delta < year) {
            return Math.floor(delta / month) + ' months ago.';
        }
        return date.toLocaleDateString()
    }

    const formattedDate = getPrettyDate(new Date(bookmark.dateAdded));

    const deleteBookmark = () => {
        console.log("delete")
    }

    function editBookmark() {
        bookmarkToEdit.set(bookmark)
    }
</script>

<article>
    <img src={bookmark.image}/>
    <a href={bookmark.url} target="_blank" rel="nofollow norefferer" class="title">
        <h2>{bookmark.title}</h2>
        <div class="cluster -centered -layout-near"><p>{domain}</p>–<time>{formattedDate}</time></div>
    </a>
    <div class="meta">

        <MoreButton>
            <MenuItem link={`/bookmark/${bookmark.id}`} type="link">
                Details
            </MenuItem>
            <MenuItem type="action" data-dialogtarget="edit-dialog" action={editBookmark}>
                Edit
            </MenuItem>
            <MenuItem type="action"
                      data-has-notification
                      data-notification-title="✓ To clipboard"
                      data-notification-description="Copied url to clipboard"
                      data-copy-target={bookmark.url}>
                Copy URL
            </MenuItem>
            <MenuItem action={deleteBookmark} type="action">Delete</MenuItem>
        </MoreButton>
    </div>
    <div class="description">
        <p>{bookmark.description}</p>
    </div>
</article>


<style lang="postcss">
    a {
        text-decoration: none;
    }


    article {
        --favicon-size: 3rem;
        padding: var(--spacing-near);
        border-radius: var(--border-radius-medium);
        background-color: var(--color-surface-strong);
        box-shadow: var(--shadow-nearest);
        inline-size: 100%;
        display: grid;
        grid-template:
            "image title" auto
            "description description " 1fr
            ". meta" auto
        / var(--favicon-size) 1fr;
        gap: var(--spacing-near);
    }

    @container bookmarklist (min-width: 24rem) {
        article {
            grid-template:
                "image title meta" auto
                ". description ." 1fr
            / var(--favicon-size) 1fr auto;
        }

    }


    img {
        inline-size: var(--favicon-size);
        block-size: var(--favicon-size);
        grid-area: image;
        border-radius: var(--border-radius-medium);
    }

    .title {
        grid-area: title;
        align-self: center;
    }

    .title h2 {
        font-size: var(--font-size-base);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-small);
        color: var(--color-text-strong);
    }

    .title p {
        font-size: var(--font-size-small);
        color: var(--color-text-subtle);
        line-height: var(--line-height-small);
    }

    .title:hover p {
        color: var(--color-brand-primary-strong);
    }

    .description {
        grid-area: description;
        font-size: var(--font-size-small);
        color: var(--color-text-base);
    }

    .meta {
        grid-area: meta;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        block-size: max-content;
    }

    time {
        font-size: var(--font-size-small);
        color: var(--color-text-subtle);
        line-height: var(--line-height-small);
    }

</style>
