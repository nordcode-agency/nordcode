<script lang="ts">

    import {writable} from "svelte/store";
    import ContextPreview from "./ContextPreview.svelte";
    import {slide} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import ExportDialog from "./ExportDialog.svelte";
    import type {ConfigStore} from "../configStore";
    import {configStore} from "../configStore";
    import ImportDialog from "./ImportDialog.svelte";
    import {generateStyleString} from "../utils/generateStyleString";


    let allStyles = ''

    const updateStyles = (store: ConfigStore) => {
        allStyles = generateStyleString(store)
    }


    configStore.subscribe(updateStyles)

    const previewShown = writable(false)
    const togglePreview = () => {
        previewShown.update(prev => !prev)
    }
</script>

<div style={allStyles} class="stack container">
    <div class="cluster | actions">

        <button class="nc-button import-button" data-opens-dialog="import-dialog">Import</button>
        <button class="nc-button export-button" data-opens-dialog="export-dialog">Export</button>
        <button class="nc-button" on:click={togglePreview}>Preview</button>
    </div>
    <ExportDialog allStyles={allStyles}/>
    <ImportDialog/>
    {#if $previewShown}
        <div transition:slide={{axis: "x", ease: quintOut}}>
            <ContextPreview/>
        </div>
    {:else}
        <div transition:slide={{axis: "x", ease: quintOut}}>
            <slot></slot>
        </div>
    {/if}
</div>

<style>
    .container {
        position: relative;
    }

    .actions {
        position: sticky;
        inset: 0 0 auto auto;
        margin-inline-start: auto;
    }

</style>
