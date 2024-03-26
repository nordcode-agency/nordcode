import fs from 'node:fs/promises';
import { InvoicePath } from '$lib/db/config/FilePaths';
import type { Invoice } from '$lib/invoice/models/Invoice.model';

export async function loadInvoices(): Promise<Invoice[]> {
    try {
        const invoices = await fs.readFile(InvoicePath, 'utf-8');
        return JSON.parse(invoices);
    } catch (e) {
        console.log(e);
        return [];
    }
}

export const saveInvoices = async (invoices: Invoice[]) => {
    await fs.writeFile(InvoicePath, JSON.stringify(invoices));
};

export const saveInvoice = async (invoice: Invoice) => {
    const invoices = await loadInvoices();
    invoices.push(invoice);
    await saveInvoices(invoices);
};

export const updateInvoice = async (invoice: Invoice) => {
    const invoices = await loadInvoices();
    const index = invoices.findIndex(i => i.invoiceNumber === invoice.invoiceNumber);
    invoices[index] = invoice;
    await saveInvoices(invoices);
};

export const deleteInvoice = async (invoiceNumber: string) => {
    const invoices = await loadInvoices();
    const updatedInvoices = invoices.filter(i => i.invoiceNumber !== invoiceNumber);
    await saveInvoices(updatedInvoices);
};

export const getInvoiceByNumber = async (invoiceNumber: string) => {
    const invoices = await loadInvoices();
    return invoices.find(i => i.invoiceNumber === invoiceNumber);
};
