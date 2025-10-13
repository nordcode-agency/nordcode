<script lang="ts">
import { invalidate } from '$app/navigation';
import type { Recipient } from '$lib/invoice/models/Invoice.model';
import { Select } from '@nordcode/forms-svelte';
import { currentInvoice, setRecipient } from '../invoiceStore';

interface InvoiceListProps {
    availableRecipients: Recipient[];
}

let { availableRecipients }: InvoiceListProps = $props();

let selectedRecipientId = $state('');

const createRecipient = async () => {
    const res = await fetch('/recipients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify($currentInvoice.invoice.recipient),
    });
    if (res.status === 201) {
        await invalidate('recipients:get');
        selectedRecipientId = $currentInvoice.invoice.recipient.id;
    }
};

$effect(() => {
    const selectedRecipient = availableRecipients.find(
        (issuer) => issuer.id === selectedRecipientId,
    );
    if (selectedRecipient) {
        setRecipient({ ...selectedRecipient });
    }
});
</script>

<div class="nc-cluster full-width recipients">
    <Select
        label="Empfänger:in wählen"
        id="selectRecipient"
        name="selectRecipient"
        options={availableRecipients.map(recipient => ({
            value: recipient.id,
            label: `${recipient.id} - ${recipient.name}`,
        }))}
        bind:value={selectedRecipientId}
    ></Select>
    <button class="nc-button" type="button" onclick={createRecipient}>
        Aktuellen Empfänger:in speichern
    </button>
</div>

<style>
.recipients {
    align-items: flex-end;
}
</style>
