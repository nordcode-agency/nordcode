<script lang="ts">
    import type { InvoiceListItem } from "../models/Invoice.model";
    import {
        formatDateString,
        formatMoney,
    } from "$lib/common/utils/formatters";
    import { Navigation } from '$lib/common/config/Navigation';

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
                <td><a href={`${Navigation.view.url}/${invoice.invoiceNumber}`} class="cluster">
                    View </a></td>
                <td><a href={`${Navigation.edit.url}/${invoice.invoiceNumber}`} class="cluster">
                    Edit </a></td>

            </tr>
        {/each}
        </tbody>
    </table>
</div>
