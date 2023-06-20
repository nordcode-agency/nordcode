<script>
    export let allStyles = '';
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
            <button data-copy-target={allStyles}>Copy to clipboard</button>
        </div>
    </div>
</dialog>
