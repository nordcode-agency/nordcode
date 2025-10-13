<script lang="ts">
import { invalidate } from '$app/navigation';
import type { BankingDetails, Recipient } from '../models/Invoice.model';

interface BankDetailsListProps {
    bankDetails: BankingDetails[];
}

export const { bankDetails = [] }: BankDetailsListProps = $props();

async function deleteBankDetails(iban: string) {
    const response = await fetch('/bankDetails', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ iban }),
    });

    if (response.ok) {
        await invalidate('bankDetails:get');
    }
}
</script>

<div class="nc-table" role="group" style="background: none">
    <table>
        <caption>Bankverbindungen</caption>
        <thead>
            <tr>
                <th>Bank Name</th>
                <th>IBAN</th>
                <th>Aktionen</th>
            </tr>
        </thead>
        <tbody>
            {#each bankDetails as bankDetail}
                <tr>
                    <td>{bankDetail.bankName}</td>
                    <td>{bankDetail.iban}</td>
                    <td>
                        <button
                            class="nc-button -small -destructive"
                            onclick={() => deleteBankDetails(bankDetail.iban)}
                        >
                            Löschen
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
