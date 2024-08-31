<script lang="ts">
import type { Issuer } from '../models/Invoice.model';
import { invalidate } from '$app/navigation';

interface InvoiceListProps {
    issuers: Issuer[];
}

let { issuers }: InvoiceListProps = $props();

async function deleteIssuer(id: string) {
    const response = await fetch('/issuers', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    });

    if (response.ok) {
        await invalidate('issuers:get');
    }
}
</script>

<div class="nc-table" role="group" style="background: none;">
    <table>
        <caption>Austeller:innen</caption>
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Aktionen</th>
        </tr>
        </thead>
        <tbody>
        {#each issuers as issuer}
            <tr>
                <td>{issuer.id}</td>
                <td>{issuer.name}</td>
                <td>
                    <button class="nc-button -small -destructive"
                            onclick={() => deleteIssuer(issuer.id)}>Löschen
                    </button>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>
