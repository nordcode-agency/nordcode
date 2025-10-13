<script lang="ts">
import { TextArea } from '@nordcode/forms-svelte';
import { configStore } from '../configStore';

let importedStyles = $state('');

const importStyles = () => {
    const cleanStyles = importedStyles
        .split('\n')
        .filter((line) => line.trim().length > 0 && !line.trim().startsWith('/'))
        .join('\n');
    configStore?.import(cleanStyles);
};
</script>

<dialog class="nc-dialog" id="import-dialog" data-level="1" style="max-inline-size: 50rem">
    <div class="dialog-container">
        <div class="dialog-header">
            <h2 class="dialog-title">Import Theme</h2>
            <button data-closes-dialog class="nc-button -round -small -stealth">×</button>
        </div>
        <div class="dialog-content">
            <div class="nc-stack">
                <TextArea
                    name="imported Styles"
                    label="Styles to import"
                    id="imported Styles"
                    bind:value={importedStyles}
                ></TextArea>
            </div>
        </div>
        <div class="dialog-actions">
            <button class="nc-button" onclick={importStyles} data-closes-dialog="import-dialog">
                Import
            </button>
        </div>
    </div>
</dialog>
