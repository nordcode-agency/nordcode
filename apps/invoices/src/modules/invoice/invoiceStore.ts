import { writable } from "svelte/store";
import type { Invoice } from "./models/Invoice.model";

const generateJobId = (): string =>
  `job-${Math.random() * new Date().getTime()}`;

export const initialInvoiceState = {
  title: "New Invoice",
  invoiceNumber: 0,
  invoiceTotal: 416.67,
  date: new Date(),
  daysToPay: 10,
  recipient: {
    name: "Unser erster Kunde",
    address: ["Eine Straße", "00000 Cool"],
  },
  jobDescriptions: [
    {
      id: generateJobId(),
      description:
        "Online-Marketing, Verwaltung der sozialen Medien, Erstellen von Blogbeiträgen",
    },
  ],
  jobDuration: "01.03.2022 - 31.03.2022",
  jobDateEqualsInvoiceDate: true,
  invoiceTargetDate: new Date(),
  hasUmsatzSteuer: true,
  payableUntil: true,
  notes: [],
  goodbyePhrase: "Mit großer Freude,",
  name: "Nordcode",
  issuer: {
    name: "Joshua Stübner",
    address: ["Dorfstr. 34", "19273 Zeetze"],
  },
  contact: {
    phone: "0152 52481201",
    email: "rechnung@nordcode.de",
  },
  bankingDetails: {
    bankName: "Bank Name",
    iban: "Irgendeine IBAN",
    bic: "Irgendeine BIC",
    ust: "UMSATZSTEUER-ID",
  },
};

export const currentInvoice = writable<{
  invoice: Invoice;
  errors: Partial<{ [name in keyof Invoice]: string[] }>;
}>({
  invoice: initialInvoiceState,
  errors: {},
});

export const addJobDescription = () => {
  currentInvoice.update((currentState) => {
    return {
      errors: currentState.errors,
      invoice: {
        ...currentState.invoice,
        jobDescriptions: [
          ...currentState.invoice.jobDescriptions,
          {
            id: generateJobId(),
            description: "",
          },
        ],
      },
    };
  });
};

export const removeJobDescription = (jobIdToDelete: string) => {
  currentInvoice.update((currentState) => {
    const updatedJobs = currentState.invoice.jobDescriptions.filter(
      ({ id, description }) => id !== jobIdToDelete
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
