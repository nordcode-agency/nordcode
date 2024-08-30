<script lang="ts">
import { currentInvoice, setIssuer } from '../invoiceStore';
import { Select } from '@nordcode/forms-svelte';
import type { Issuer } from '$lib/invoice/models/Invoice.model';
import { invalidate } from '$app/navigation';

interface InvoiceListProps {
    availableIssuers: Issuer[];
}

let { availableIssuers }: InvoiceListProps = $props();

let selectedIssuerId = $state('');

const createIssuer = async () => {
    const res = await fetch('/issuers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify($currentInvoice.invoice.issuer),
    });
    if (res.status === 201) {
        await invalidate('issuers:get');
        selectedIssuerId = $currentInvoice.invoice.issuer.id;
    }
};

$effect(() => {
    const selectedIssuer = availableIssuers.find((issuer) => issuer.id === selectedIssuerId);
    if (selectedIssuer) {
        setIssuer({ ...selectedIssuer });
    }
});
</script>

<div class="nc-cluster full-width issuers">
    <Select
        label="Aussteller:in wählen"
        id="selectIssuer"
        name="selectIssuer"
        options="{availableIssuers.map(issuer => ({ value: issuer.id, label: `${issuer.id} - ${issuer.name}` }))}"
        bind:value={selectedIssuerId}
    ></Select>
    <button class="nc-button" type="button" onclick={createIssuer}>
        Aktuellen Aussteller:in speichern
    </button>
</div>

<style>
    .issuers {
        align-items: flex-end;
    }
</style>
