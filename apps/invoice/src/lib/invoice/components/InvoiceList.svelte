<script lang="ts">
    import type { InvoiceListItem } from "../models/Invoice.model";
    import {
        formatDateString,
        formatMoney,
    } from "$lib/common/utils/formatters";

    export let invoices: InvoiceListItem[] = [];

</script>

<div class="nc-table" role="group" style="background: none;">
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
                <td><a href={`/view/${invoice.invoiceNumber}`} class="cluster">
                    View </a></td>

            </tr>
        {/each}
        </tbody>
    </table>
</div>
