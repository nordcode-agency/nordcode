<script lang="ts">
import { invalidate } from '$app/navigation';
import type { BankingDetails } from '$lib/invoice/models/Invoice.model';
import { Select } from '@nordcode/forms-svelte';
import { currentInvoice, setBankDetails } from '../invoiceStore';

interface BankDetailsSelectProps {
    availableBankingDetails: BankingDetails[];
}

export const { availableBankingDetails = [] }: BankDetailsSelectProps = $props();

let selectedBankIban = $state('');

const createBankDetails = async () => {
    const res = await fetch('/bankDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify($currentInvoice.invoice.bankingDetails),
    });
    if (res.status === 201) {
        await invalidate('bankDetails:get');
        selectedBankIban = $currentInvoice.invoice.bankingDetails.iban;
    }
};

$effect(() => {
    const selectedBankDetails = availableBankingDetails.find(
        (bankDetails) => bankDetails.iban === selectedBankIban,
    );
    if (selectedBankDetails) {
        setBankDetails({ ...selectedBankDetails });
    }
});
</script>

<div class="nc-cluster full-width bankDetails">
    <Select
        label="Bankverbindung wählen"
        id="selectBankDetails"
        name="selectBankDetails"
        options={availableBankingDetails.map(details => ({
            value: details.iban,
            label: `${details.bankName} - ${details.iban}`,
        }))}
        bind:value={selectedBankIban}
    ></Select>
    <button class="nc-button" type="button" onclick={createBankDetails}>
        Aktuelle Bankverbindung speichern
    </button>
</div>

<style>
.bankDetails {
    align-items: flex-end;
}
</style>
