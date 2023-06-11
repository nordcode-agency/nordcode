<script lang="ts">

    import TextPreviewRow from "./TextPreviewRow.svelte";

    const fontFamilies = {
        sans: 'font-family: var(--font-family-sans)',
        serif: 'font-family: var(--font-family-serif)',
        mono: 'font-family: var(--font-family-mono)',
        default: 'font-family: var(--font-family-default)'
    }

    const fontSizes = {
        largest: 'font-size: var(--font-size-largest)',
        large: 'font-size: var(--font-size-large)',
        base: 'font-size: var(--font-size-base)',
        small: 'font-size: var(--font-size-small)',
        smallest: 'font-size: var(--font-size-smallest)',
    }

    const tracking = {
        wide: 'letter-spacing: var(--tracking-wide)',
        base: 'letter-spacing: var(--tracking-base)',
        tight: 'letter-spacing: var(--tracking-tight)',
    }

    const lineheights = {
        large: 'line-height: var(--line-height-large); background-color: var(--color-surface-subtle)',
        base: 'line-height: var(--line-height-base); background-color: var(--color-surface-subtle)',
        small: 'line-height: var(--line-height-small); background-color: var(--color-surface-subtle)',
    }

    const measures = {
        large: 'max-width: var(--measure-large)',
        base: 'max-width: var(--measure-base)',
        small: 'max-width: var(--measure-small)',
    }

    const text = "Hallo Luki"
    const longText = "Dies ist ein langer Text für dich Lukas. Ich hoffe, du kannst ihn lesen und er tut deinen Augen nicht weh."
</script>

PREVIEW

<div class="stack -layout-far">
    <div class="stack -layout-near">
        <h2>Font Families</h2>
        {#each Object.entries(fontFamilies) as [key, value]}
            <TextPreviewRow label="{key}" style="{value}" text={text}/>
        {/each}
    </div>
    <div class="stack -layout-near">
        <h2>Font sizes</h2>
        {#each Object.entries(fontSizes) as [key, value]}
            <TextPreviewRow label="{key}" style="{value}" text={text}/>
        {/each}
    </div>
    <div class="stack -layout-near">
        <h2>Tracking</h2>
        {#each Object.entries(tracking) as [key, value]}
            <TextPreviewRow label="{key}" style="{value}" text={text}/>
        {/each}
    </div>

    <div class="stack -layout-near">
        <h2>Line Heights</h2>
        {#each Object.entries(lineheights) as [key, value]}
            <TextPreviewRow label="{key}" style="{value}" text={text}/>
        {/each}
    </div>

    <div class="stack -layout-near">
        <h2>Measures</h2>
        {#each Object.entries(measures) as [key, value]}
            <TextPreviewRow label="{key}" style="{value}" text={longText}/>
        {/each}
    </div>

</div>
