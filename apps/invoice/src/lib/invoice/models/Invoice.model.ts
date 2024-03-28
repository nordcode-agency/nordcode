export type ContactDetails = {
    id: string;
    name: string;
    address: string[];
};

export type Recipient = ContactDetails;

export type Issuer = ContactDetails & {
    phone: string;
    email: string;
};

export type JobDescription = {
    title?: string;
    description: string;
    id: string;
};
export type JobDescriptions = JobDescription[];

export type BankingDetails = {
    bankName: string;
    iban: string;
    bic: string;
    ust: string;
};

export type Invoice = {
    title: string;
    invoiceNumber: string;
    invoiceTotal: number;
    date: Date;
    daysToPay: number;
    recipient: Recipient;
    jobDescriptions: JobDescriptions;
    jobDuration: string;
    jobDateEqualsInvoiceDate: boolean;
    invoiceTargetDate: Date;
    hasUmsatzSteuer: boolean;
    payableUntil: boolean;
    notes: string[];
    goodbyePhrase: string;
    name: string;
    issuer: Issuer;
    bankingDetails: BankingDetails;
};

export type InvoiceListItem = {
    invoiceNumber: string;
    customerName: string;
    total: number;
    date: Date;
};
