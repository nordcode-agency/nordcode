<script lang="ts">
import Header from '$lib/modules/common/components/Header.svelte';
import Meta from '$lib/modules/common/components/Meta.svelte';
</script>

<Meta noIndex title="Danke für deine Anfrage" description="Wir melden uns umgehend bei dir."></Meta>

<div class="nc-stack">
    <Header />
    <section class="nc-stack -farthest nc-center">
        <div class="nc-stack">
            <h1>Danke für deine Anfrage!</h1>
            <p>
                Wir melden uns umgehend bei dir, nachdem wir alles geprüft haben. Normalerweise binnen der nächsten 2-3
                Tage.
            </p>
            <a href="/" class="nc-button -primary">Zurück zur Startseite</a>
        </div>
    </section>
</div>
