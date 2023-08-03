<script lang="ts">

    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import {configStore} from "../../store/configStore";


    let name = ''


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
                        />
                    </form>
                    <div class="cluster -layout-near">
                        <button class="nc-button live-theme">Primary</button>
                        <button class="nc-button -secondary live-theme">Secondary</button>
                    </div>
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
