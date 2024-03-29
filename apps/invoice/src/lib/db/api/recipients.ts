import fs from 'node:fs/promises';
import { RecipientsPath } from '$lib/db/config/FilePaths';
import type { Recipient } from '$lib/invoice/models/Invoice.model';

export async function loadRecipients(): Promise<Recipient[]> {
    try {
        const recipients = await fs.readFile(RecipientsPath, 'utf-8');
        return JSON.parse(recipients);
    } catch (e) {
        console.error(
            `Could not read issuer file at ${RecipientsPath}. Did you forget to create it?`,
        );
        return [];
    }
}

export const saveRecipients = async (recipients: Recipient[]) => {
    await fs.writeFile(RecipientsPath, JSON.stringify(recipients));
};

export const deleteRecipient = async (id: string) => {
    const recipients = await loadRecipients();
    const updatedRecipients = recipients.filter(i => i.id !== id);
    await saveRecipients(updatedRecipients);
};

export const updateOrCreateRecipient = async (issuer: Recipient) => {
    const recipients = await loadRecipients();
    const index = recipients.findIndex(i => i.id === issuer.id);
    if (index === -1) {
        recipients.push(issuer);
    } else {
        recipients[index] = issuer;
    }
    await saveRecipients(recipients);
};

export const createRecipientFileIfNotExists = async () => {
    try {
        await fs.access(RecipientsPath);
    } catch (e) {
        await fs.writeFile(RecipientsPath, '[]');
    }
};
