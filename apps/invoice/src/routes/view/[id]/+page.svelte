<script lang="ts">
    import InvoiceDisplay from '$lib/invoice/components/InvoiceDisplay.svelte';

    export const layout = {};
    export let data;
</script>

<svelte:head>
    <title>Rechnung Nr</title>
</svelte:head>

<InvoiceDisplay currentInvoice={data.invoice} />
