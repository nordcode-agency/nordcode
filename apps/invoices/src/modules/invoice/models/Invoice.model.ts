export type ContactDetails = {
  name: string;
  address: string[];
};

export type WithId = {
  id: string;
};

export type JobDescription = {
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
  invoiceNumber: number;
  invoiceTotal: number;
  date: Date;
  daysToPay: number;
  recipient: ContactDetails;
  jobDescriptions: JobDescriptions;
  jobDuration: string;
  jobDateEqualsInvoiceDate: boolean;
  invoiceTargetDate: Date;
  hasUmsatzSteuer: boolean;
  payableUntil: boolean;
  notes: string[];
  goodbyePhrase: string;
  name: string;
  issuer: ContactDetails;
  contact: {
    phone: string;
    email: string;
  };
  bankingDetails: BankingDetails;
};

export type InvoiceListItem = {
  invoiceNumber: number;
  customerName: string;
  total: number;
  date: Date;
};
