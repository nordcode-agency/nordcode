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

<ul>
    {#each invoices as invoice}
        <li>
            <a href={`/view?id=${invoice.invoiceNumber}`} class="cluster">
                <span>{invoice.invoiceNumber}</span>
                <span>{invoice.customerName}</span>
                <span>{formatMoney(invoice.total)}</span>
                <span>{formatDateString(invoice.date)}</span>
            </a>
        </li>
    {/each}
</ul>
