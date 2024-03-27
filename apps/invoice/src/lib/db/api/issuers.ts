import fs from 'node:fs/promises';
import { IssuerPath } from '$lib/db/config/FilePaths';
import type { Issuer } from '$lib/invoice/models/Invoice.model';

export async function loadIssuers(): Promise<Issuer[]> {
    try {
        const issuers = await fs.readFile(IssuerPath, 'utf-8');
        return JSON.parse(issuers);
    } catch (e) {
        console.error(`Could not read issuer file at ${IssuerPath}. Did you forget to create it?`);
        return [];
    }
}

export const saveIssuers = async (issuers: Issuer[]) => {
    await fs.writeFile(IssuerPath, JSON.stringify(issuers));
};

export const deleteIssuer = async (id: string) => {
    const issuers = await loadIssuers();
    const updatedIssuers = issuers.filter(i => i.id !== id);
    await saveIssuers(updatedIssuers);
};

export const updateOrCreateIssuer = async (issuer: Issuer) => {
    const issuers = await loadIssuers();
    const index = issuers.findIndex(i => i.id === issuer.id);
    if (index === -1) {
        issuers.push(issuer);
    } else {
        issuers[index] = issuer;
    }
    await saveIssuers(issuers);
};
