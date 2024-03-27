<script lang="ts">

    import InvoiceForm from '$lib/invoice/components/InvoiceForm.svelte';
    import { onMount } from 'svelte';
    import { setInvoice } from '$lib/invoice/invoiceStore';

    export let data;

    onMount(() => {
        setInvoice(data.invoice);
    });
</script>

<svelte:head>
    <title>Rechnung Nr. {data.invoice.invoiceNumber} bearbeiten</title>
</svelte:head>

<div class="nc-stack -far -contained">
    <h1>Rechnung Nr. {data.invoice.invoiceNumber} bearbeiten</h1>
    <InvoiceForm availableIssuers={data.issuers}></InvoiceForm>
</div>
