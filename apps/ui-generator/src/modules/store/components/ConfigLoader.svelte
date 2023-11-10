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


    const previewContainer = typeof document !== 'undefined' ? document?.body : undefined

    const updateStyles = (store: ConfigStore) => {
        allStyles = generateStyleString(store)
        previewContainer?.setAttribute('style', allStyles)
    }


    configStore?.subscribe(updateStyles)

    const previewShown = writable(false)
    const togglePreview = () => {
        previewShown.update(prev => !prev)
    }
</script>

<div class="nc-stack container">
    <div class="nc-cluster | actions">

        <button
            class="nc-button import-button" data-dialogtarget="import-dialog"
        >
            Import
        </button>
        <button
            class="nc-button export-button" data-dialogtarget="export-dialog"
        >
            Export
        </button>
        <button class="nc-button" on:click={togglePreview}>Preview</button>
    </div>
    <ExportDialog allStyles={allStyles}/>
    <ImportDialog/>
  {#if $previewShown}
        <div class="preview">
            <ContextPreview/>
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

    .preview {
        inline-size: 100%;
    }

</style>
