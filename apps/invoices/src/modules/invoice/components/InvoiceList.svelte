<script lang="ts">
    import {loadInvoiceListFromLocalStorage} from "../utils/invoiceToLocalStorage";
    import {onMount} from "svelte";
    import type {InvoiceListItem} from "../models/Invoice.model";
    import {formatDateString, formatMoney} from "../../common/utils/formatters";

    let invoices: InvoiceListItem[] = []

    onMount(() => {
        invoices = loadInvoiceListFromLocalStorage()
        console.log(invoices)
    })
</script>

<table>
    <thead>
    <tr>
        <th>Invoice Number</th>
        <th>Customer Name</th>
        <th>Total</th>
        <th>Date</th>
        <th></th>
    </tr>
    </thead>
    <tbody>
    {#each invoices as invoice}
        <tr>
            <td>{invoice.invoiceNumber}</td>
            <td>{invoice.customerName}</td>
            <td>{formatMoney(invoice.total)}</td>
            <td>{formatDateString(invoice.date)}</td>
            <td><a href={`/view?id=${invoice.invoiceNumber}`} class="cluster">
                View </a></td>

        </tr>
    {/each}
    </tbody>
</table>
