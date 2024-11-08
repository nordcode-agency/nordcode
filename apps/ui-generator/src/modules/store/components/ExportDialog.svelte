<script lang="ts">
    import { configStore } from '../configStore';

    interface ExportDialogProps {
        allStyles: string;
    }

    let { allStyles = '' }: ExportDialogProps = $props();

    const styleString = $derived(`:root {
${allStyles.trim()}
}`);

    const copyStyleExport = async () => {
        const exportString = configStore?.exportToString();
        if (exportString) {
            await navigator.clipboard.writeText(exportString);
        }
    };

    const copyURLToClipboard = async () => {
        const searchParams = new URLSearchParams({ styles: configStore?.exportToString() ?? '' });
        const url = new URL(window.location.origin + window.location.pathname);
        url.search = searchParams.toString();
        if (url) {
            await navigator.clipboard.writeText(url.toString());
        }
    };
</script>

<dialog class="nc-dialog" id="export-dialog" data-level="1" style="max-inline-size: 50rem">
    <div class="dialog-container">
        <div class="dialog-header">
            <h2 class="dialog-title">Export Theme</h2>
            <button data-closes-dialog="export-dialog" class="nc-button -round -small -stealth"
                >×
            </button>
        </div>
        <div class="dialog-content">
            <pre><code>{styleString}</code></pre>
        </div>
        <footer class="dialog-actions | nc-cluster">
            <button
                data-copy-target={styleString}
                data-has-notification
                data-notification-title="✓ To clipboard"
                data-notification-description="Copied all styles to clipboard"
                data-closes-dialog
                >Copy to clipboard
            </button>
            <button
                onclick={copyStyleExport}
                data-closes-dialog="export-dialog"
                data-has-notification
                data-notification-title="✓ To clipboard"
                data-notification-description="Copied config to clipboard"
                >Copy Config to clipboard
            </button>
            <button
                onclick={copyURLToClipboard}
                data-closes-dialog="export-dialog"
                data-has-notification
                data-notification-title="✓ To clipboard"
                data-notification-description="Copied stateful URL to clipboard"
                >Copy URL
            </button>
        </footer>
    </div>
</dialog>
