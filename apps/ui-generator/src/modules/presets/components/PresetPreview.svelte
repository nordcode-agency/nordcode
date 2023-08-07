<script lang="ts">

    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import {configStore} from "../../store/configStore";
  import CheckboxInput from "@nordcode/ui/src/modules/forms/svelte/InputFields/CheckboxInput.svelte";


    let name = ''
    let checkboxValue = false


</script>

{#if Object.values($configStore).length > 0}
    <div class="stack -layout-far container live-theme">
        <div class="stack">
            <h2>Component Preview</h2>

            <div class="nc-card live-theme">
                <div class="stack">
                    <div class="stack -layout-none">
                        <span class="badge">Cool Card</span>
                        <h3>Hello Friend</h3>
                    </div>
                    <p>Welcome to your new style.</p>
                    <form>
                        <Input
                                name="name"
                                label="What's your name?"
                                id="name"
                                type="text"
                                bind:value={name}
                        >
                        <button class="nc-button live-theme -round -icon -small -stealth" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="nc-icon">
                                <path fill="currentColor"
                                      d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"/>
                            </svg>
</button>
                        </Input>
                    </form>
                    <div class="cluster -layout-near">
                        <button class="nc-button live-theme">Primary</button>
                        <button class="nc-button -secondary live-theme">Secondary</button>
                    </div>
                <CheckboxInput name="checkbox" label="I agree to use this theme" id="checkbox" bind:value={checkboxValue} />
                </div>
            </div>
            <p>
                Let's get started!

                (z.B. das man bei modern im gegensatz zu brutalist z.B border color haben will der nicht so harte
                kontraste hat, kann man sicher auch, dadurch das wir oklch haben, die l von lch "presetten" und man
                selber wählt idealerweise nur noch das h von lch mit der entsprechenden brand color – rot, blau, grün
                etc.)
            </p>
        </div>


    </div>
{:else}
    <p>loading...</p>
{/if}


<style lang="postcss">
    .container {
        background: var(--color-surface-strong);
        padding: var(--spacing-base);
        inline-size: 100%;
        color: var(--color-text-base);
    }
</style>
