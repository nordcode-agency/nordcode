<script lang="ts">
import { configStore } from '../../store/configStore';
</script>

<button type="button" class="nc-button -icon -small" onclick={configStore?.reset} title="Reset theme">
    <span class="text-assistive">Reset theme</span>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="nc-icon"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style="fill: none"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3.06 13a9 9 0 1 0 .49 -4.087" />
        <path d="M3 4.001v5h5" />
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
</button>
