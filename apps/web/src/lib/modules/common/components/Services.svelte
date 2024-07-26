<script lang="ts">
	import SecondaryCtaButton from "./SecondaryCtaButton.svelte";

    type TService = {
        title: string;
        description: string;
        cta: {
            href: string;
            label: string;
        }
    }

    const services: TService[] = [
        {
            title: "Websites",
            description: "Wir entwickeln Webseiten und Webanwendungen, die auf modernen Technologien basieren und auf allen Geräten gut aussehen.",
            cta: {
                href: "/start/website",
                label: "Website erstellen"
            }
        },
        {
            title: "E-Commerce",
            description: "Wir erstellen Online-Shops, die einfach zu bedienen sind und die Kunden begeistern.",
            cta: {
                href: "/start/shop",
                label: "Shop eröffnen"
            }
        },
        {
            title: "Apps",
            description: "Wir optimieren Webseiten für Suchmaschinen, damit sie besser gefunden werden und mehr Besucher anziehen.",
            cta: {
                href: "/start/app",
                label: "App erstellen"
            }
        },
        {
            title: "Individuell",
            description: "Wir erstellen Inhalte, die Ihre Zielgruppe ansprechen und überzeugen, sei es Text, Bild oder Video.",
            cta: {
                href: "/start/custom",
                label: "Anfragen"
            }
        }
    ]

</script>
<section id="services" class="nc-box nc-stack -farthest">
    <h2>Was wir gut können</h2>
    <div class="container">
        {#each services as { title, description, cta }}
            <div class="nc-stack item">
                <div class="nc-stack">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <SecondaryCtaButton href={cta.href}>{cta.label}</SecondaryCtaButton>
            </div>
        {/each}
    </div>
</section>

<style lang="postcss">

    .container {
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-adaptive);
        row-gap: calc(var(--spacing-adaptive) * 1.5);
        counter-reset: steps;
        inline-size: 80%;

    }

    .item {
        --offset: 10rem;

        position: relative;
        max-inline-size: 42ch;
        justify-content: space-between;
        counter-increment: steps;

        &::before {
            content: "0" counter(steps);
            position: absolute;
            font-size: var(--offset);
            font-weight: bold;
            transform: translate(-20%, -42%);
            color: var(--color-surface-inset);
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
        }
    }
</style>
