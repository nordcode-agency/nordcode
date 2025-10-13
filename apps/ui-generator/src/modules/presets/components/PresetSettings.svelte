<script lang="ts">
import { configStore, setDensityPreset, setPreset } from '../../store/configStore';
</script>

{#if configStore}
    <div class="nc-region content-block">
        <form class="nc-stack -far -full-width -stretched">
            <div class="settings-container nc-stack -far">
                <fieldset class="nc-fieldset">
                    <legend>Presets</legend>
                    <div class="nc-cluster">
                        <button class="nc-button" type="button" on:click={() => setPreset('modern')}>Modern</button>
                        <button class="nc-button -round" type="button" on:click={() => setPreset('playful')}>
                            Playful
                        </button>
                        <button class="nc-button" type="button" on:click={() => setPreset('brutalist')}>
                            Brutalist
                        </button>
                        <button class="nc-button" type="button" on:click={() => setPreset('elegant')}>Elegant</button>
                    </div>
                </fieldset>

                <fieldset class="nc-fieldset">
                    <legend>Density Presets</legend>
                    <div class="nc-cluster">
                        <button class="nc-button" type="button" on:click={() => setDensityPreset('compact')}>
                            Compact
                        </button>
                        <button class="nc-button" type="button" on:click={() => setDensityPreset('default')}>
                            Default
                        </button>
                        <button class="nc-button" type="button" on:click={() => setDensityPreset('spacious')}>
                            Spacious
                        </button>
                    </div>
                </fieldset>
            </div>
        </form>
    </div>
{/if}
