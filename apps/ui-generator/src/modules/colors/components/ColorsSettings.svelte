<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import LCHColorSettings from "./LCHColorSettings.svelte";
    import {configStore} from "../../store/configStore";
</script>

<div class="stack -layour-far -full-width -stretched">
            <Input type="checkbox" name="useLCH" label="Use LCH Color picker?"
                           id="useLCH"
                           bind:value={$configStore.useLCH}/>
    {#if $configStore.useLCH}
        <LCHColorSettings />
        {:else}
    <form class="stack -layout-far -full-width -stretched">

        <fieldset class="stack -layout-base">
            <legend>Colors</legend>
            <Input
                    name="colorLightPrimaryStrong"
                    label="Light Primary Strong"
                    id="colorLightPrimaryStrong"
                    type="color"
                    bind:value={$configStore.default.light.primary.strong}/>
            <Input
                    name="colorLightPrimaryBase"
                    label="Light Primary Base"
                    id="colorLightPrimaryBase"
                    type="color"
                    bind:value={$configStore.default.light.primary.base}/>
            <Input
                    name="colorLightPrimarySubtle"
                    label="Light Primary Subtle"
                    id="colorLightPrimarySubtle"
                    type="color"
                    bind:value={$configStore.default.light.primary.subtle}/>
            <hr />

        </fieldset>
                <button type="button" class="nc-button -destructive" on:click={configStore.reset}>Reset</button>

    </form>
        {/if}
</div>
