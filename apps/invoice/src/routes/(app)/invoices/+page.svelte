<script lang="ts">
import InvoiceForm from '$lib/invoice/components/InvoiceForm.svelte';
import { onMount } from 'svelte';
import { resetInvoice } from '$lib/invoice/invoiceStore';
import type { Issuer, BankingDetails, ContactDetails } from '$lib/invoice/models/Invoice.model';

interface PageData {
    data: {
        issuers: Issuer[];
        bankDetails: BankingDetails[];
        recipients: ContactDetails[];
    };
}

let { data }: PageData = $props();

$effect(() => {
    resetInvoice();
});
</script>

<svelte:head>
    <title>Neue Rechnung anlegen</title>
</svelte:head>

<div class="nc-stack -far -contained">
    <h1>Neue Rechnung anlegen</h1>
    <InvoiceForm availableIssuers={data.issuers}
                 availableBankingDetails={data.bankDetails}
                 availableRecipients={data.recipients}

    ></InvoiceForm>
</div>
