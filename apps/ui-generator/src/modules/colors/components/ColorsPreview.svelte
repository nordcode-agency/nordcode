<script lang="ts">

    import ColorPreview from "./ColorPreview.svelte";
    import {configStore} from "../../store/configStore";

    const colors = [
        {
            token: '--color-brand-primary-base',
            description: "Primary brand color. Used for accents and highlights."
        },
                {
            token: '--color-brand-primary-subtle',
            description: "Subtle version of the primary brand color. Used for backgrounds and borders."
        },

        {
            token: '--color-brand-primary-hover',
            description: "Used for slight hover highlights, like on outline buttons or checkbox inputs"
        },
        {
            token: '--color-brand-primary-contrast',
            description: "Used for text and icons on top of the primary brand color."
        },
                {
            token: '--color-brand-secondary-base',
            description: "Secondary brand color. Used for accents and highlights."
        },
                {
            token: '--color-brand-secondary-subtle',
            description: "Subtle version of the secondary brand color. Used for backgrounds and borders."
        },

        {
            token: '--color-brand-secondary-hover',
            description: "Used for slight hover highlights, like on outline buttons or checkbox inputs"
        },
        {
            token: '--color-brand-secondary-contrast',
            description: "Used for text and icons on top of the secondary brand color."
        },

        // text
        {
        token: '--color-text-default',
        description: 'Primary color for text and icons in any given interface. It should be used for body content, titles and labels.',
    },
        {
            token: '--color-text-muted',
            description: "Use for content that is secondary or that provides additional context but is not critical to understanding the flow of an interface.",
        },
        {
            token: '--color-text-subtle',
            description: 'Use for placeholder text, icons or decorative foregrounds.'
        },
        {
            token: '--color-text-on-emphasis',
description: 'Use for text on top of emphasized backgrounds, such as banners, badges, and alerts.'

        },

        // bg
        {
            token: '--color-surface-default',
            description: 'Primary color for backgrounds in any given interface.',
        },
        {
            token: '--color-surface-subtle',
            description: "Provides visual rest and contrast against the default background."
        },
        {
            token: '--color-surface-inset',
            description: 'Can be used instead of the default background to create a focal point, such as in conversations or activity feeds.'
        },
        {
            token: '--color-surface-emphasis',
            description: 'Use for backgrounds that need to stand out, such as banners, badges, and alerts.'
        },

        // border
        {
            token: '--color-border-default',
            description: 'Primary color for borders in aUse to create bounds around content, for example elements inside a card. Default borders are critical to understanding a page layout.',
        },
        {
            token: '--color-border-muted',
            description: 'Use for dividers to emphasize the separation between items, columns or sections.'
        }
    ]

</script>

{#if Object.values($configStore).length > 0}
    <div class="stack -layout-far">
        <div class="stack -layout-near">
            <h2>Colors</h2>
            {#each colors as color}
                <ColorPreview color={color.token} description={color.description}/>
            {/each}
        </div>
        <div class="cluster -layout-near">
            <button class="nc-button">Default / Basic</button>
            <button class="nc-button -primary">Primary</button>
            <button class="nc-button -secondary">Secondary</button>
            <button class="nc-button -outline -basic">Outline Basic</button>
            <button class="nc-button -outline -primary">Outline Primary</button>
            <button class="nc-button -outline -secondary">Outline Secondary</button>
            <button class="nc-button -stealth">Stealth Basic</button>
            <button class="nc-button -stealth -primary">Stealth Primary</button>
            <button class="nc-button -stealth -secondary">Stealth Secondary</button>
        </div>
    </div>

{:else}
    <p>loading...</p>
{/if}
