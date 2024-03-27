<script lang="ts">
    import InvoiceForm from '$lib/invoice/components/InvoiceForm.svelte';
    import { onMount } from 'svelte';
    import {
        resetInvoice,
    } from '$lib/invoice/invoiceStore';

    export let data;

    onMount(() => {
        resetInvoice();
    });
</script>

<svelte:head>
    <title>Neue Rechnung anlegen</title>
</svelte:head>

<div class="nc-stack -far -contained">
    <h1>Neue Rechnung anlegen</h1>
    <InvoiceForm availableIssuers={data.issuers}></InvoiceForm>
</div>
