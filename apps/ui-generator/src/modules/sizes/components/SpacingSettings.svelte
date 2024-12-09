<script lang="ts">
    import SpacingPreview from './SpacingPreview.svelte';
    import { configStore, updateSpacingBase, updateSpacingScale } from '../../store/configStore';
    import SettingsInput from '../../common/components/SettingsInput.svelte';

    const spacings = [
        {
            name: 'Tiny',
            description: 'For the smallest gaps, usually when things belong tightly together.',
        },
        {
            name: 'Nearest',
            description: 'Small gaps, like icons from text.',
        },
        {
            name: 'Near',
            description: 'Display a relationship, like a label from an input field.',
        },
        {
            name: 'Base',
            description: 'The Base value for most things, like boxes or cards or other elements.',
        },
        {
            name: 'Far',
            description:
                'When elements need more room or to display, that they do not belong together.',
        },
        {
            name: 'Farthest',
            description: 'For the largest gaps, like sections or regions.',
        },
    ];
</script>

<section class="nc-region content-block">
    <h2 id="borders" class="section-headline">Spacings</h2>
    <div class="nc-grid preview-grid">
        <div>
            <form class="settings-container -sticky">
                <fieldset class="nc-fieldset nc-stack">
                    <SettingsInput
                        label="Spacing Base"
                        bind:value={$configStore.spacingBase}
                        step="0.1"
                        min="0.1"
                        max="3"
                        oninput={evt => {
                            updateSpacingBase(evt.target.value);
                        }}
                    ></SettingsInput>

                    <SettingsInput
                        label="Spacing Scale"
                        bind:value={$configStore.spacingScale}
                        step="0.1"
                        min="0.1"
                        max="3"
                        oninput={evt => updateSpacingScale(evt.target.value)}
                    ></SettingsInput>
                </fieldset>
            </form>
        </div>
        <div class="nc-stack -stretched -contained">
            {#each spacings as spacing}
                <SpacingPreview entry={spacing} />
            {/each}
        </div>
    </div>
</section>
