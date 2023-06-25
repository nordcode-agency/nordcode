<script>
    import {configStore} from "../configStore";

    export let allStyles = '';


    const copyStyleExport = async () => {
        const exportString = configStore.export()
        await navigator.clipboard.writeText(exportString);
    }
</script>

<dialog data-id="export-dialog" data-level="1" style="max-inline-size: 50rem">
    <div class="dialog-container">
        <div class="dialog-header">
            <h2 class="dialog-title">Export Theme</h2>
            <button data-closes-dialog="export-dialog">X</button>
        </div>
        <div class="dialog-content">
            <pre>
                <code>
                    {allStyles}
                </code>
            </pre>
        </div>
        <footer class="dialog-actions | cluster">
            <button data-copy-target={allStyles}
                    data-has-notification
                    data-notification-title="✓ To clipboard"
                    data-notification-description="Copied all styles to clipboard"
                    data-closes-dialog="export-dialog"
            >Copy to clipboard
            </button>
            <button on:click={copyStyleExport}
                    data-closes-dialog="export-dialog"
                    data-has-notification
                    data-notification-title="✓ To clipboard"
                    data-notification-description="Copied all styles to clipboard"
            >Export to clipboard
            </button>
        </footer>
    </div>
</dialog>
