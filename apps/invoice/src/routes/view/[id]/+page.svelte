<script lang="ts">
import InvoiceDisplay from '$lib/invoice/components/InvoiceDisplay.svelte';
import { Navigation } from '$lib/common/config/Navigation';
import type { Invoice } from '$lib/invoice/models/Invoice.model.js';

export const layout = {};

interface PageData {
    data: {
        invoice: Invoice;
    };
}

let { data }: PageData = $props();
</script>

<svelte:head>
    <title>Rechnung Nr {data.invoice.invoiceNumber}</title>
</svelte:head>

<header class="no-print nc-cluster nc-box">
    <a href={Navigation.list.url}>{Navigation.list.name}</a>
    <a href="{Navigation.edit.url}/{data.invoice.invoiceNumber}">Bearbeiten</a>

</header>
<InvoiceDisplay currentInvoice={data.invoice} />

<style>
    html {
        font-size: 14px;
    }
</style>
