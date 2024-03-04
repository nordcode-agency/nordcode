<script>
    import { configStore } from "../configStore";
    import { getWpTheme } from '../utils/generateWpTheme';
    import { getFigmaTheme } from '../utils/getFigmaTheme';

    export let allStyles = '';
    const copyStyleExport = async () => {
        const exportString = configStore?.exportToString();
        await navigator.clipboard.writeText(exportString);
    };

    const copyURLToClipboard = async () => {
        const searchParams = new URLSearchParams({ styles: configStore?.exportToString() });
        const url = new URL(window.location.origin + window.location.pathname);
        url.search = searchParams.toString();
        await navigator.clipboard.writeText(url);
    };

    const copyFigmaColors = async () => {
        if (!configStore) {
            return;
        }
        const themeColors = getFigmaTheme(configStore?.exportToJson());
        await navigator.clipboard.writeText(JSON.stringify(themeColors, null, 2));
    };

    const copyWPThemeToClipboard = async () => {
        const theme = getWpTheme(configStore?.exportToJson());
        await navigator.clipboard.writeText(JSON.stringify(theme, null, 2));
    };
</script>

<dialog class="nc-dialog" id="export-dialog" data-level="1" style="max-inline-size: 50rem">
    <div class="dialog-container">
        <div class="dialog-header">
            <h2 class="dialog-title">Export Theme</h2>
            <button data-closes-dialog="export-dialog" class="nc-button -round -small -stealth">×
            </button>
        </div>
        <div class="dialog-content">
            <pre>
                <code>
                    {allStyles}
                </code>
            </pre>
        </div>
        <footer class="dialog-actions | nc-cluster">
            <button data-copy-target={allStyles}
                    data-has-notification
                    data-notification-title="✓ To clipboard"
                    data-notification-description="Copied all styles to clipboard"
                    data-closes-dialog
            >Copy to clipboard
            </button>
            <button on:click={copyStyleExport}
                    data-closes-dialog="export-dialog"
                    data-has-notification
                    data-notification-title="✓ To clipboard"
                    data-notification-description="Copied all styles to clipboard"
            >Export to clipboard
            </button>
            <button on:click={copyURLToClipboard}
                    data-closes-dialog="export-dialog"
                    data-has-notification
                    data-notification-title="✓ To clipboard"
                    data-notification-description="Copied stateful URL to clipboard"
            >Copy URL
            </button>
            <button on:click={copyWPThemeToClipboard}
                    data-closes-dialog="export-dialog"
                    data-has-notification
                    data-notification-title="✓ To clipboard"
                    data-notification-description="Copied WP theme to clipboard"
            >
                Copy WP
            </button>
            <button on:click={copyFigmaColors}
                    data-closes-dialog="export-dialog"
                    data-has-notification
                    data-notification-title="✓ To clipboard"
                    data-notification-description="Copied JSON colors to clipboard"
            >
                Copy JSON Colors
            </button>
        </footer>
    </div>
</dialog>
