<script lang="ts">
import { writable } from 'svelte/store';
import ContextPreview from './ContextPreview.svelte';
import ExportDialog from './ExportDialog.svelte';
import type { ConfigStore } from '../configStore';
import { configStore } from '../configStore';
import ImportDialog from './ImportDialog.svelte';
import { generateStyleString } from '../utils/generateStyleString';

interface ConfigLoaderProps {
    allStyles: string;
}

let { allStyles = '' }: ConfigLoaderProps = $props();

const previewContainer = typeof document !== 'undefined' ? document?.body : undefined;

const updateStyles = (store: ConfigStore) => {
    allStyles = generateStyleString(store);
    previewContainer?.setAttribute('style', allStyles);
};

configStore?.subscribe(updateStyles);

const previewShown = writable(false);
const togglePreview = () => {
    previewShown.update((prev) => !prev);
};
</script>

<div class="nc-cluster">
    <button class="nc-button -small -icon" onclick={togglePreview}>
        <span class="text-assistive">Toggle Preview</span>
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             class="nc-icon"
             aria-hidden="true"
             focusable="false"
        >
            <path
                d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM6 9C5.44772 9 5 9.44772 5 10V14H7V10C7 9.44772 6.55228 9 6 9ZM19 5H10V3H20C20.5523 3 21 3.44772 21 4V15C21 15.5523 20.5523 16 20 16H16.5758L19.3993 22H17.1889L14.3654 16H10V14H19V5Z"
            ></path>
        </svg
        >
    </button>
</div>
<ExportDialog allStyles={allStyles} />
<ImportDialog />
{#if $previewShown}
    <div class="preview content-block">
        <ContextPreview />
    </div>
{/if}

<style>
    .preview {
        inline-size: 100%;
        position: absolute;
        top: 3.5rem;
        left: 0;
        right: 0;
        background: var(--color-surface-base);
        z-index: 1;
        overflow-y: scroll;
        block-size: calc(100vh - 3.5rem);
    }

</style>
