import type { Invoice, InvoiceListItem } from '$lib/invoice/models/Invoice.model';

export const toInvoiceListItem = (invoice: Invoice): InvoiceListItem => {
    return {
        invoiceNumber: invoice.invoiceNumber,
        customerName: invoice.recipient.name,
        total: invoice.invoiceTotal,
        date: invoice.date,
    };
};
