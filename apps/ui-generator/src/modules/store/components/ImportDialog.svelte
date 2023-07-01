<script>
    import Textarea from "@nordcode/ui/src/modules/forms/svelte/InputFields/Textarea.svelte"
    import {configStore} from "../configStore";

    let importedStyles = ""

    const importStyles = () => {
        configStore.import(importedStyles)
    }

</script>

<dialog class="nc-dialog" data-id="import-dialog" data-level="1" style="max-inline-size: 50rem">
    <div class="dialog-container">
        <div class="dialog-header">
            <h2 class="dialog-title">Import Theme</h2>
            <button data-closes-dialog="import-dialog">X</button>
        </div>
        <div class="dialog-content">
            <div class="stack">
            <Textarea
                    name="imported Styles"
                    label="Styles to import"
                    id="imported Styles"
                    bind:value={importedStyles}
            ></Textarea>
            </div>
        </div>
        <div class="dialog-actions">
            <button class="nc-button" on:click={importStyles} data-closes-dialog="import-dialog"
            >Import
            </button>
        </div>
    </div>
</dialog>
