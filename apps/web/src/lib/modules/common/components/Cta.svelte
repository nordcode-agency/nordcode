<section class="nc-box">
    <div class="box nc-stack -farthest">
        <h2>
            {#each [...'norcode'] as char, idx}
                <div class="char-animation" style={`--char-animation-delay: ${idx * 120}ms`}>{char}</div>
            {/each}
        </h2>
        <button type="button" class="nc-button">Loslegen</button>
    </div>
</section>

<style lang="postcss">
    section {
        inline-size: 100%;
        block-size: 70dvh;
        display: grid;
        place-items: center;
    }

    h2 {
        display: flex;
    }

    .box {
        align-items: center;
    }
</style>
