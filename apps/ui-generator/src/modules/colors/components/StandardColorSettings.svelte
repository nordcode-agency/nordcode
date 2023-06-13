<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import {colorStore} from "../colorStore";
</script>


    <form class="stack -layout-far -full-width -stretched">

        <fieldset class="nc-fieldset stack -layout-base">
            <legend>Light</legend>
            <Input
                    name="colorLightPrimaryStrong"
                    label="Light Primary Strong"
                    id="colorLightPrimaryStrong"
                    type="color"
                    bind:value={$colorStore.default.light.primary.strong}/>
            <Input
                    name="colorLightPrimaryBase"
                    label="Light Primary Base"
                    id="colorLightPrimaryBase"
                    type="color"
                    bind:value={$colorStore.default.light.primary.base}/>
            <Input
                    name="colorLightPrimarySubtle"
                    label="Light Primary Subtle"
                    id="colorLightPrimarySubtle"
                    type="color"
                    bind:value={$colorStore.default.light.primary.Subtle}/>
            <hr />
        </fieldset>
    </form>

