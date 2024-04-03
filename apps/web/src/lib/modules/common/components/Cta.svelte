<script>

	import Stars from "./Stars.svelte";

</script>
<section class="nc-box">
    <div class="nc-card card">
        <div class="oval-wrapper">
            <div class="oval"></div>
        </div>
        <div class="nc-box box">
            <button type="button" class="nc-button -outline">Loslegen</button>
        </div>
        <Stars />
    </div>
</section>

<style lang="postcss">
    section {
        --shadow-blur: 7vh;
        --shadow-vertical-offset: -8px;
        --shadow-max-multiplier: 4;

        inline-size: 100%;
        block-size: 70vh;
        padding-block: 0;
        display: grid;
        place-items: center;
        grid: "cta" 1fr / 1fr
    }

    .card {
        position: relative;
        padding: 0;
        display: grid;
        place-items: center;
        overflow: hidden;
        block-size: 100%;
    }

    .box {
        --button-height-base: 3.5rem;
        --button-padding-inline: 3ch;

        z-index: 2;
        grid-area: cta;
        margin-block-end: calc(var(--shadow-blur) * var(--shadow-max-multiplier));
    }

    .oval-wrapper {
        --size: calc(
            60px +
            var(--shadow-blur) *
            var(--shadow-max-multiplier) +
            var(--shadow-vertical-offset) * 
            -1
        );

        grid-area: cta;
        padding-block-start: var(--size);
        block-size: calc(var(--size) * 2);
        min-inline-size: 0;
        inline-size: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    .oval {
        z-index: 1;
        inline-size: 260vw;
        block-size: 260vw;
        margin-inline: auto;
        border-radius: 100%;
        flex-shrink: 0;
        inset: 0;
        animation-duration: 1ms;
        animation: appear linear both;
        animation-timeline: --atmosphereTimeline;
        animation-range: 86% 96%;
        background-color: var(--color-surface-default);
        box-shadow:
            0px var(--shadow-vertical-offset) calc(var(--shadow-blur) * var(--shadow-max-multiplier) / 8) 0px rgba(255,255,255,0.7),
            0px var(--shadow-vertical-offset) calc(var(--shadow-blur) * var(--shadow-max-multiplier) / 4) 0px rgba(255,255,255,0.5),
            0px var(--shadow-vertical-offset) calc(var(--shadow-blur) * var(--shadow-max-multiplier) / 2) 0px var(--color-brand-secondary-dark-emphasis),
            0px var(--shadow-vertical-offset) calc(var(--shadow-blur) * var(--shadow-max-multiplier)) 0px var(--color-brand-primary-light-emphasis);
    }

    @keyframes appear {
        0% {
            opacity: 0;
            transform: scaleX(0.5);
        }
        6% {
            transform: scaleX(0.5);
        }
        80% {
            opacity: 1;
        }
        100% {
            transform: scaleX(1)
        }
    }
</style>
