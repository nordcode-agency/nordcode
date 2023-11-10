<script lang="ts">
    import {configStore, setPreset} from "../../store/configStore";
</script>

{#if configStore}
<div>
    <form class="nc-stack -far -full-width -stretched">
            <div class="nc-box -bordered">
         <fieldset class="nc-fieldset nc-stack">
            <legend>Presets</legend>
             <div class="nc-cluster">

                <button class="nc-button" type="button" on:click={() => setPreset('modern')}>Modern</button>
                <button class="nc-button -round" type="button" on:click={() => setPreset('playful')}>Playful</button>
                 <button class="nc-button" type="button" on:click={() => setPreset('brutalist')}>Brutalist</button>
                 <button class="nc-button" type="button" on:click={() => setPreset('elegant')}>Elegant</button>
             </div>
        </fieldset>
            </div>



        <button type="button" class="nc-button -destructive" on:click={configStore.reset}>Reset</button>

    </form>
</div>
{/if}
