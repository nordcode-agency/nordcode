<script lang="ts">
import { invalidate } from '$app/navigation';
import type { Recipient } from '../models/Invoice.model';

interface InvoiceListProps {
    recipients: Recipient[];
}

let { recipients }: InvoiceListProps = $props();

async function deleteRecipient(id: string) {
    const response = await fetch('/recipients', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    });

    if (response.ok) {
        await invalidate('recipients:get');
    }
}
</script>

<div class="nc-table" role="group" style="background: none">
    <table>
        <caption>Empfänger:innen</caption>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Aktionen</th>
            </tr>
        </thead>
        <tbody>
            {#each recipients as recipient}
                <tr>
                    <td>{recipient.id}</td>
                    <td>{recipient.name}</td>
                    <td>
                        <button class="nc-button -small -destructive" onclick={() => deleteRecipient(recipient.id)}>
                            Löschen
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
