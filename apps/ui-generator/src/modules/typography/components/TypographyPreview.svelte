<script lang="ts">

    import TextPreviewRow from "./TextPreviewRow.svelte";
    import {configStore} from "../../store/configStore";

    const fontFamilies = {
        '--font-family-sans': 'font-family: var(--font-family-sans)',
        '--font-family-serif': 'font-family: var(--font-family-serif)',
        '--font-family-mono': 'font-family: var(--font-family-mono)',
        '--font-familiy-default': 'font-family: var(--font-family-default)'
    }

    const fontSizes = {
        '--font-size-display': 'font-size: var(--font-size-display)',
        '--font-size-largest': 'font-size: var(--font-size-largest)',
        '--font-size-large': 'font-size: var(--font-size-large)',
        '--font-size-base': 'font-size: var(--font-size-base)',
        '--font-size-small': 'font-size: var(--font-size-small)',
        '--font-size-smallest': 'font-size: var(--font-size-smallest)',
    }

    const tracking = {
        '--tracking-wide': 'letter-spacing: var(--tracking-wide)',
        '--tracking-base': 'letter-spacing: var(--tracking-base)',
        '--tracking-tight': 'letter-spacing: var(--tracking-tight)',
    }

    const lineheights = {
        '--line-height-large': 'line-height: var(--line-height-large); background-color: var(--color-surface-subtle)',
        '--line-height-base': 'line-height: var(--line-height-base); background-color: var(--color-surface-subtle)',
        '--line-height-small': 'line-height: var(--line-height-small); background-color: var(--color-surface-subtle)',
    }

    const measures = {
        '--measure-large': 'max-width: var(--measure-large)',
        '--measure-base': 'max-width: var(--measure-base)',
        '--measure-small': 'max-width: var(--measure-small)',
    }

    const text = "Hallo Luki"
    const longText = "Dies ist ein langer Text für dich Lukas. Ich hoffe, du kannst ihn lesen und er tut deinen Augen nicht weh."
</script>



{#if configStore}
<div class="nc-stack -layout-far">
    <div class="nc-stack -layout-near">
        <h2>Font Families</h2>
        {#each Object.entries(fontFamilies) as [key, value]}
            <TextPreviewRow label="{key}" style="{value}" text={text}/>
        {/each}
    </div>
    <div class="nc-stack -layout-near">
        <h2>Font sizes</h2>
        {#each Object.entries(fontSizes) as [key, value]}
            <TextPreviewRow label="{key}" style="{value}" text={text}/>
        {/each}
    </div>
    <div class="nc-stack -layout-near">
        <h2>Tracking</h2>
        {#each Object.entries(tracking) as [key, value]}
            <TextPreviewRow label="{key}" style="{value}" text={text}/>
        {/each}
    </div>

    <div class="nc-stack -layout-near">
        <h2>Line Heights</h2>
        {#each Object.entries(lineheights) as [key, value]}
            <TextPreviewRow label="{key}" style="{value}" text={text}/>
        {/each}
    </div>

    <div class="nc-stack -layout-near">
        <h2>Measures</h2>
        {#each Object.entries(measures) as [key, value]}
            <TextPreviewRow label="{key}" style="{value}" text={longText}/>
        {/each}
    </div>

</div>
    {:else}
    <p>loading</p>
{/if}
