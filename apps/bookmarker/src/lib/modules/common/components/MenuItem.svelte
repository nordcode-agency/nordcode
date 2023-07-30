<script lang="ts">
    export let link: string = '';
    export let action: () => void = () => {};
    export let type: "link" | "action";

</script>

{#if type === "link"}
    <a href={link} class="menu-item" {...$$restProps}>
        <slot></slot>
    </a>
{:else}
    <button class="buttonReset menu-item" on:click={action} {...$$restProps}>
        <slot></slot>
    </button>
{/if}

<style lang="postcss">
    .menu-item {
        padding-inline: var(--spacing-near);
        padding-block: var(--spacing-nearest);
        font-size: var(--font-size-small);
        display: flex;
        flex-direction: row;
        color: var(--color-text-strong);
        text-decoration: none;
        inline-size: 100%;
    }

    .menu-item:hover {
        color: var(--color-brand-primary-strong);
    }

</style>
