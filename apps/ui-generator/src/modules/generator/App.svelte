<script lang="ts">

    import Header from "./components/Header.svelte";
    import Preview from "./components/Preview.svelte";
    import Settings from "./components/Settings.svelte";
</script>


<main>
    <header>
        <Header />
    </header>

    <aside>
        <Settings />
    </aside>
    <section>
        <Preview />
    </section>
</main>

<style lang="postcss">
    main {
        display: grid;
        grid-template:
            "header header" 50px
            "config content" 1fr
            / 400px 1fr;
        background: var(--color-surface-strong);
        inline-size: 100%;
        min-block-size: 100vh;
    }

    header {
        grid-area: header;
        background: var(--color-surface-base);
        padding-block: var(--spacing-near);
        padding-inline: var(--spacing-base);
    }

    aside {
        grid-area: config;
        background: var(--color-surface-base);
        padding-block: var(--spacing-base);
        padding-inline: var(--spacing-base);
    }

    section {
        grid-area: content;
        background: var(--color-surface-base);
        padding-block: var(--spacing-base);
        padding-inline: var(--spacing-base);
    }

</style>
