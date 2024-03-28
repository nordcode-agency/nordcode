import fs from 'node:fs/promises';
import { InvoicePath } from '$lib/db/config/FilePaths';
import type { Invoice } from '$lib/invoice/models/Invoice.model';

export async function loadInvoices(): Promise<Invoice[]> {
    try {
        const invoices = await fs.readFile(InvoicePath, 'utf-8');
        return JSON.parse(invoices);
    } catch (e) {
        console.error(
            `Could not read invoices file at ${InvoicePath}. Did you forget to create it?`,
        );
        return [];
    }
}

export const saveInvoices = async (invoices: Invoice[]) => {
    await fs.writeFile(InvoicePath, JSON.stringify(invoices));
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

export const updateOrCreateInvoice = async (invoice: Invoice) => {
    const invoices = await loadInvoices();
    const index = invoices.findIndex(i => i.invoiceNumber === invoice.invoiceNumber);
    if (index === -1) {
        invoices.push(invoice);
    } else {
        invoices[index] = invoice;
    }
    await saveInvoices(invoices);
};

export const createInvoiceFileIfNotExists = async () => {
    try {
        await fs.access(InvoicePath);
    } catch (e) {
        await fs.writeFile(InvoicePath, '[]');
    }
};
