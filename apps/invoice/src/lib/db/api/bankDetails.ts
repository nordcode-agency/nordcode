import fs from 'node:fs/promises';
import { BankingDetailsPath } from '$lib/db/config/FilePaths';
import type { BankingDetails } from '$lib/invoice/models/Invoice.model';

export async function loadBankdetails(): Promise<BankingDetails[]> {
    try {
        const bankDetails = await fs.readFile(BankingDetailsPath, 'utf-8');
        return JSON.parse(bankDetails);
    } catch (e) {
        console.error(
            `Could not read banking file at ${BankingDetailsPath}. Did you forget to create it?`,
        );
        return [];
    }
}

export const saveBankdetails = async (bankDetails: BankingDetails[]) => {
    await fs.writeFile(BankingDetailsPath, JSON.stringify(bankDetails));
};

export const deleteBankdetail = async (iban: string) => {
    const bankDetails = await loadBankdetails();
    const updatedBankdetails = bankDetails.filter(i => i.iban !== iban);
    await saveBankdetails(updatedBankdetails);
};

export const updateOrCreateBankdetail = async (issuer: BankingDetails) => {
    const bankDetails = await loadBankdetails();
    const index = bankDetails.findIndex(i => i.iban === issuer.iban);
    if (index === -1) {
        bankDetails.push(issuer);
    } else {
        bankDetails[index] = issuer;
    }
    await saveBankdetails(bankDetails);
};

export const createBankDetailsFileIfNotExists = async () => {
    try {
        await fs.access(BankingDetailsPath);
    } catch (e) {
        await fs.writeFile(BankingDetailsPath, '[]');
    }
};
