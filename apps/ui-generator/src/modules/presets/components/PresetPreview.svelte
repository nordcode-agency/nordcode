<script lang="ts">

    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import {configStore} from "../../store/configStore";
    import CheckboxInput from "@nordcode/ui/src/modules/forms/svelte/InputFields/CheckboxInput.svelte";


    let name = ''
    let checkboxValue = false


</script>

{#if configStore}
    <div class="nc-stack -far">
        <div class="nc-stack -near">
            <h2>Component Preview</h2>

            <div class="nc-card">
                <div class="nc-stack">
                    <div class="nc-stack -nogap">
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
                                hint="this is your name"
                                bind:value={name}
                        >
                        <button class="nc-button -round -icon -small -stealth" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="nc-icon">
                                <path fill="currentColor"
                                      d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"/>
                            </svg>
</button>
                        </Input>
                    </form>
                    <div class="nc-cluster -layout-near">
                        <button class="nc-button -primary">Primary</button>
                        <button class="nc-button -neutral">Neutral</button>
                        <button class="nc-button -neutral -outline">Neutral outline</button>
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
            <p class="muted">Secondary text, der aber immer noch wichtig genug ist, um gelesen zu werden.</p>
            <p class="subtle">Text der wirklich nicht so wichtig ist. Maximal Placeholder.</p>
            <div class="nc-box inset">
                <p>If you need an inset bg, use this. It's like a lower elevation.</p>
            </div>
            <div class="nc-box subtle-bg">
                this is a sublte border
            </div>
            <footer>
                This could be your footer
            </footer>
        </div>


    </div>
{:else}
    <p>loading...</p>
{/if}


<style lang="postcss">
    .muted {
        color: var(--color-text-muted);
    }
    .subtle {
        color: var(--color-text-subtle);
    }

    .inset {
        background: var(--color-surface-inset);
    }
    .subtle-bg {
        border: var(--border-width-thin) solid var(--color-border-muted);
        border-radius: var(--border-radius-medium);
    }
    footer {
        padding: var(--spacing-base);
        inline-size: 100%;
        background: var(--color-surface-subtle);
        border: var(--border-width-thin) solid var(--color-border-muted);
        border-radius: var(--border-radius-medium);
    }
</style>
