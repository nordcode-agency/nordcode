<script lang="ts">
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import {sizesStore} from "../../config/sizesStore";
</script>

<div>
    <form class="stack -layout-far -full-width -stretched">
        <fieldset class="stack -layout-base">
            <legend>Spacings</legend>
            <Input
                    name="spacingTiny"
                    label="Spacing Tiny"
                    id="spacingTiny"
                    type="number"
                    step="0.01"
                    bind:value={$sizesStore.spacingTiny}/>
            <Input
                    name="spacingNearest"
                    label="Spacing Nearest"
                    id="spacingNearest"
                    type="number"
                    step="0.01"
                    bind:value={$sizesStore.spacingNearest}/>
            <Input
                    name="spacingNear"
                    label="Spacing Near"
                    id="spacingNear"
                    type="number"
                    step="0.01"
                    bind:value={$sizesStore.spacingNear}/>
            <Input
                    name="spacingBase"
                    label="Spacing Base"
                    id="spacingBase"
                    type="number"
                    step="0.01"
                    bind:value={$sizesStore.spacingBase}/>
            <Input
                    name="spacingFar"
                    label="Spacing Far"
                    id="spacingFar"
                    type="number"
                    step="0.01"
                    bind:value={$sizesStore.spacingFar}/>
            <Input
                    name="spacingFarthest"
                    label="Spacing Farthest"
                    id="spacingFarthest"
                    type="number"
                    step="0.01"
                    bind:value={$sizesStore.spacingFarthest}/>
        </fieldset>
                <button type="button" class="nc-button -destructive" on:click={sizesStore.reset}>Reset</button>

    </form>
</div>
