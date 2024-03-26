import type { Invoice } from '$lib/invoice/models/Invoice.model';
import { type RequestHandler, redirect, json } from '@sveltejs/kit';
import { Navigation } from '$lib/common/config/Navigation';
import { saveInvoice } from '$lib/db/api/invoices';

export const POST: RequestHandler = async ({ request }) => {
    const invoice = (await request.json()) as Invoice;
    saveInvoice(invoice);
    return json({ invoiceNumber: invoice.invoiceNumber }, { status: 201 });
};

const mapInvoiceFormDataToInvoice = (formData: FormData): Invoice => {
    const invoice: Invoice = {
        title: formData.get('title') as string,
        invoiceNumber: formData.get('invoiceNumber') as string,
        invoiceTotal: Number(formData.get('invoiceTotal')),
        date: new Date(formData.get('date') as string),
        daysToPay: Number(formData.get('daysToPay')),
        recipient: {
            name: formData.get('recipientName') as string,
            address: (formData.get('recipientAddress') as string).split('\n'),
        },
        jobDescriptions: JSON.parse(formData.get('jobDescriptions') as string),
        jobDuration: formData.get('jobDuration') as string,
        jobDateEqualsInvoiceDate: formData.get('jobDateEqualsInvoiceDate') === 'true',
        invoiceTargetDate: new Date(formData.get('invoiceTargetDate') as string),
        hasUmsatzSteuer: formData.get('hasUmsatzSteuer') === 'true',
        payableUntil: formData.get('payableUntil') === 'true',
        notes: (formData.get('notes') as string).split('\n'),
        goodbyePhrase: formData.get('goodbyePhrase') as string,
        name: formData.get('name') as string,
        issuer: {
            name: formData.get('issuerName') as string,
            address: (formData.get('issuerAddress') as string).split('\n'),
            phone: formData.get('phone') as string,
            email: formData.get('email') as string,
        },
        bankingDetails: {
            bankName: formData.get('bankName') as string,
            iban: formData.get('iban') as string,
            bic: formData.get('bic') as string,
            ust: formData.get('ust') as string,
        },
    };

    return invoice;
};
