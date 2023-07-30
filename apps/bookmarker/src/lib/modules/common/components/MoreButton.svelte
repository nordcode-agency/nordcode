<script lang="ts">
    import MoreIcon from "$lib/modules/common/icons/MoreIcon.svelte";
</script>

<div>
    <button class="nc-button -stealth -small -icon more-button">
        <MoreIcon/>
    </button>
    <menu>
        <slot />
    </menu>
</div>

<style lang="postcss">
    div {
        position: relative;
        display: flex;
        align-items: flex-start;
    }

    .more-button {
        inset: 0;
        padding: 0 var(--spacing-near);
    }

    menu {
        position: absolute;
        display: none;
        margin-block-start: 0;
        padding: 0;
        border: var(--border-width-thin) solid var(--color-border-base);
        background-color: var(--color-surface-subtle);
        visibility: hidden;
        pointer-events: none;
        opacity: 0;
        overflow: hidden;
        min-inline-size: 8rem;
        border-radius: var(--border-radius-medium);
        box-shadow: var(--shadow-nearest);
        animation: in var(--transition-duration-short) var(--ease-1) forwards;
        inset-block-start: 100%;
        inset-inline-end: 0;
        z-index: 1;
    }

    div:hover > menu,
    div:focus-within > menu {
        display: block;
        visibility: visible;
        opacity: 1;
        pointer-events: all;
    }

    div:hover > button,
    div:focus-within > button{
        background-color: var(--color-surface-strong);
        color: var(--color-brand-primary-strong);
    }

    @keyframes in {
        from {
            transform: translateY(calc(var(--spacing-nearest) * -1));
        }
        to {
            transform: translateY(0);
        }

    }


</style>
