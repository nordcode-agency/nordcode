<script lang="ts">
import { Navigation } from '$lib/common/config/Navigation';
import InvoiceList from '$lib/invoice/components/InvoiceList.svelte';
import {
    type BankingDetails,
    type ContactDetails,
    type Invoice,
    type Issuer,
} from '$lib/invoice/models/Invoice.model.js';
import { toInvoiceListItem } from '$lib/invoice/utils/toInvoiceListItem';

interface PageData {
    data: {
        issuers: Issuer[];
        bankDetails: BankingDetails[];
        recipients: ContactDetails[];
        invoices: Invoice[];
    };
}
let { data }: PageData = $props();

const invoiceList = data.invoices.map(toInvoiceListItem);
</script>

<svelte:head>
    <title>Alle Rechnungen</title>
</svelte:head>

<div class="nc-stack">
    <h1>Alle Rechnungen</h1>
    <InvoiceList invoices={invoiceList}></InvoiceList>
    <a href={Navigation.new.url}>{Navigation.new.name}</a>
</div>
