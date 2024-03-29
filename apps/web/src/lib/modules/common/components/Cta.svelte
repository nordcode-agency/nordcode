<section>
    <div class="oval-wrapper">
        <div class="oval"></div>
    </div>
    <div class="nc-box box">
        <button type="button" class="nc-button">Loslegen</button>
    </div>
</section>

<style lang="postcss">
    section {
        --shadow-blur: 32px;
        --shadow-vertical-offset: -8px;
        --shadow-max-multiplier: 4;

        inline-size: 100%;
        min-block-size: 80vh;
        display: grid;
        place-items: center;
        padding-inline: 0;
        grid: "cta" 1fr / 1fr
    }

    .box {
        grid-area: cta;
        margin-block-end: calc(var(--shadow-blur) * var(--shadow-max-multiplier));
    }

    .oval-wrapper {
        grid-area: cta;
        padding-block: calc(
            60px +
            var(--shadow-blur) *
            var(--shadow-max-multiplier) +
            var(--shadow-vertical-offset) * 
            -1
        );
        min-inline-size: 0;
        inline-size: 100%;
        block-size: calc(var(--shadow-blur) * 10);
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    .oval {
        inline-size: 300vw;
        block-size: 300vw;
        margin-inline: auto;
        border-radius: 100%;
        flex-shrink: 0;
        inset: 0;
        animation-duration: 1ms;
        animation: appear linear both;
        animation-timeline: --atmosphereTimeline;
        animation-range: 86% 96%;
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
        100% {
            opacity: 1;
            transform: scaleX(1)
        }
    }
</style>
