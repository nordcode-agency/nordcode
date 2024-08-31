<script lang="ts">
import IssuerList from '$lib/invoice/components/IssuerList.svelte';
import RecipientList from '$lib/invoice/components/RecipientList.svelte';
import BankingDetailsList from '$lib/invoice/components/BankingDetailsList.svelte';
import type { BankingDetails, ContactDetails, Issuer } from '$lib/invoice/models/Invoice.model.js';

interface PageData {
    data: {
        issuers: Issuer[];
        bankDetails: BankingDetails[];
        recipients: ContactDetails[];
    };
}

let { data }: PageData = $props();

async function createFiles() {
    const res = await fetch('/management', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (res.ok) {
        alert('Dateien wurden erstellt');
    } else {
        alert('Fehler beim Erstellen der Dateien');
    }
}
</script>

<svelte:head>
    <title>Verwaltung</title>
</svelte:head>

<div class="nc-stack -far -contained">
    <h1>Verwaltung</h1>

    <RecipientList recipients={data.recipients} />
    <IssuerList issuers={data.issuers} />
    <BankingDetailsList bankDetails={data.bankDetails} />

    <div class="nc-stack -near">
        <button class="nc-button" onclick={createFiles}>Dateien erstellen</button>
        <p class="nc-hint">Erstellt alle notwendigen Dateien, falls sie noch nicht existieren</p>
    </div>
</div>
