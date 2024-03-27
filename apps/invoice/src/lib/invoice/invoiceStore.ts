import { writable } from 'svelte/store';
import type { Invoice } from './models/Invoice.model';

const generateJobId = (): string => `job-${Math.random() * new Date().getTime()}`;

export const initialInvoiceState: Invoice = {
    title: 'New Invoice',
    invoiceNumber: '0',
    invoiceTotal: 416.67,
    date: new Date(),
    daysToPay: 10,
    recipient: {
        id: 'customer-1',
        name: 'Unser erster Kunde',
        address: ['Eine Straße', '00000 Cool'],
    },
    jobDescriptions: [
        {
            id: generateJobId(),
            title: '',
            description:
                'Online-Marketing, Verwaltung der sozialen Medien, Erstellen von Blogbeiträgen',
        },
    ],
    jobDuration: '01.03.2022 - 31.03.2022',
    jobDateEqualsInvoiceDate: true,
    invoiceTargetDate: new Date(),
    hasUmsatzSteuer: true,
    payableUntil: true,
    notes: [],
    goodbyePhrase: 'Mit großer Freude,',
    name: 'Joshua Stübner',
    issuer: {
        id: 'joshua',
        name: 'Joshua Stübner',
        address: ['Dorfstr. 34', '19273 Zeetze'],
        phone: '0152 52481201',
        email: 'kontakt@joshuastuebner.com',
    },
    bankingDetails: {
        bankName: 'Deutsche Kreditbank AG',
        iban: 'DE76120300001060950621',
        bic: 'BYLADEM1001',
        ust: '34/551/01226',
    },
};

export const currentInvoice = writable<{
    invoice: Invoice;
    errors: Partial<{ [name in keyof Invoice]: string[] }>;
}>({
    invoice: initialInvoiceState,
    errors: {},
});

export const setInvoice = (invoice: Invoice) => {
    currentInvoice.set({
        invoice,
        errors: {},
    });
};

export const resetInvoice = () => {
    currentInvoice.set({
        invoice: initialInvoiceState,
        errors: {},
    });
};

export const addJobDescription = () => {
    currentInvoice.update(currentState => {
        return {
            errors: currentState.errors,
            invoice: {
                ...currentState.invoice,
                jobDescriptions: [
                    ...currentState.invoice.jobDescriptions,
                    {
                        id: generateJobId(),
                        description: '',
                    },
                ],
            },
        };
    });
};

export const removeJobDescription = (jobIdToDelete: string) => {
    currentInvoice.update(currentState => {
        const updatedJobs = currentState.invoice.jobDescriptions.filter(
            ({ id, description }) => id !== jobIdToDelete,
        );

        return {
            errors: currentState.errors,
            invoice: {
                ...currentState.invoice,
                jobDescriptions: updatedJobs,
            },
        };
    });
};

export const setIssuer = (issuer: Invoice['issuer']) => {
    currentInvoice.update(currentState => {
        return {
            errors: currentState.errors,
            invoice: {
                ...currentState.invoice,
                issuer,
            },
        };
    });
};
