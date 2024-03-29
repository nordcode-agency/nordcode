<script lang="ts">
    import type {
        Recipient,
        BankingDetails,
    } from "../models/Invoice.model";
    import { invalidate } from '$app/navigation';

    export let bankDetails: BankingDetails[] = [];

    async function deleteBankDetails(iban: number) {
        const response = await fetch(`/bankDetails`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ iban }),
        });

        if (response.ok) {
            await invalidate("bankDetails:get");
        }
    }

</script>

<div class="nc-table" role="group" style="background: none;">
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
                    <button class="nc-button -small -destructive"
                            on:click={() => deleteBankDetails(bankDetail.iban)}>Löschen
                    </button>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>
