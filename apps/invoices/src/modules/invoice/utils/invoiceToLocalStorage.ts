import type { Invoice, InvoiceListItem } from "../models/Invoice.model";

export const saveInvoiceToLocalStorage = (invoice: Invoice) => {
  const key = `invoice-${invoice.invoiceNumber}`;
  localStorage.setItem(key, JSON.stringify(invoice));
  const invoiceListItem: InvoiceListItem = {
    invoiceNumber: invoice.invoiceNumber,
    customerName: invoice.recipient.name,
    total: invoice.invoiceTotal,
    date: invoice.date,
  };
  const invoiceList = localStorage.getItem("invoice-list");
  if (invoiceList) {
    const invoiceListArray = JSON.parse(invoiceList) as Array<InvoiceListItem>;
    invoiceListArray.push(invoiceListItem);
    localStorage.setItem("invoice-list", JSON.stringify(invoiceListArray));
  } else {
    localStorage.setItem("invoice-list", JSON.stringify([invoiceListItem]));
  }
};

export const loadInvoiceFromLocalStorage = (
  invoiceNumber: number
): Invoice | undefined => {
  const key = `invoice-${invoiceNumber}`;
  const invoice = localStorage.getItem(key);
  if (invoice) {
    return JSON.parse(invoice) as Invoice;
  }
  return undefined;
};

export const loadInvoiceListFromLocalStorage = (): InvoiceListItem[] => {
  const invoiceList = localStorage.getItem("invoice-list");
  if (invoiceList) {
    return JSON.parse(invoiceList) as InvoiceListItem[];
  }
  return [];
};
