<script lang="ts">
import BankDetailsSelect from '$lib/invoice/components/BankDetailsSelect.svelte';
import IssuerSelect from '$lib/invoice/components/IssuerSelect.svelte';
import RecipientSelect from '$lib/invoice/components/RecipientSelect.svelte';
import type { BankingDetails, Issuer, Recipient } from '$lib/invoice/models/Invoice.model';
import { CheckboxInput, Input, TextArea } from '@nordcode/forms-svelte';
import { MarkdownEditor } from '@nordcode/forms-svelte/markdown';
import { addJobDescription, currentInvoice, removeJobDescription } from '../invoiceStore';

interface InvoiceFormProps {
    availableIssuers: Issuer[];
    availableRecipients: Recipient[];
    availableBankingDetails: BankingDetails[];
}

export const {
    availableIssuers = [],
    availableRecipients = [],
    availableBankingDetails = [],
}: InvoiceFormProps = $props();

const createInvoice = async (event: SubmitEvent) => {
    event.preventDefault();

    const res = await fetch('/invoices', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify($currentInvoice.invoice),
    });

    if (res.status === 201) {
        const { invoiceNumber } = await res.json();
        location.href = `/view/${invoiceNumber}`;
    }
};
</script>

<form class="nc-stack -farthest full-width -contained -stretched" onsubmit={createInvoice}>
    <header>
        <nav>
            <ul class="nc-list-reset nc-cluster">
                <li><a href="#allgemeines">1. Allgemeines</a></li>
                <li><a href="#empfaenger">2. Empfänger</a></li>
                <li><a href="#leistungen">3. Leistungen</a></li>
                <li><a href="#rechnungsdetails">4. Rechnungsdetails</a></li>
                <li><a href="#aussteller">5. Austeller</a></li>
                <li><a href="#bankverbindung">6. Bankverbindung</a></li>
                <li class="generate">
                    <a href="#generieren" class="nc-cluster -near -centered">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            aria-hidden="true"
                            class="nc-icon"
                            data-size="inline"
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4z" />
                        </svg>
                        <span>Rechnungs Generieren</span></a>
                </li>
            </ul>
        </nav>
    </header>
    <Input
        errors={$currentInvoice.errors.title}
        name="title"
        label="Rechnungs Titel"
        id="title"
        type="text"
        bind:value={$currentInvoice.invoice.title}
    />
    <div class="nc-card">
        <fieldset class="nc-fieldset nc-stack">
            <legend class="nc-legend"><h2 id="allgemeines">1. Allgemeines</h2></legend>

            <Input
                errors={$currentInvoice.errors.invoiceNumber}
                name="invoiceNumber"
                label="Rechnungsnummer"
                id="rechnungsnummer"
                type="text"
                bind:value={$currentInvoice.invoice.invoiceNumber}
            />

            <Input
                errors={$currentInvoice.errors.invoiceTotal}
                name="total"
                label="Gesamtbetrag"
                id="title"
                type="text"
                bind:value={$currentInvoice.invoice.invoiceTotal}
            />

            <Input
                errors={$currentInvoice.errors.date}
                name="date"
                label="Rechnungsdatum"
                id="date"
                type="date"
                bind:value={$currentInvoice.invoice.date}
            />

            <Input
                errors={$currentInvoice.errors.daysToPay}
                name="daysToPay"
                label="Tage zum Zahlen"
                id="daysToPay"
                type="number"
                bind:value={$currentInvoice.invoice.daysToPay}
            />
        </fieldset>
    </div>

    <div class="nc-card">
        <fieldset class="nc-fieldset nc-stack">
            <legend class="nc-legend"><h2 id="empfaenger">2. Empfänger</h2></legend>
            <RecipientSelect {availableRecipients} />
            <Input
                errors={$currentInvoice.errors.recipient}
                name="recipientId"
                label="ID"
                id="recipientId"
                type="text"
                bind:value={$currentInvoice.invoice.recipient.id}
            ></Input>
            <Input
                errors={$currentInvoice.errors.recipient}
                name="recipientName"
                label="Name"
                id="recipientName"
                type="text"
                bind:value={$currentInvoice.invoice.recipient.name}
            />
            <TextArea
                errors={$currentInvoice.errors.recipient}
                name="recipientAddress"
                label="Adresse"
                id="recipientAddress"
                splitLines={true}
                bind:value={$currentInvoice.invoice.recipient.address}
            />
        </fieldset>
    </div>

    <div class="nc-card">
        <fieldset class="nc-fieldset nc-stack -stretched -contained">
            <legend class="nc-legend"><h2 id="leistungen">3. Leistungen</h2></legend>
            <Input
                errors={$currentInvoice.errors.jobDuration}
                name="jobDuration"
                label="Leistungszeitraum"
                id="jobDuration"
                type="daterange"
                bind:value={$currentInvoice.invoice.jobDuration}
            />

            {#each $currentInvoice.invoice.jobDescriptions as job, index (job.id)}
                <div class="nc-box job-entry">
                    <fieldset class="nc-fieldset nc-stack">
                        <legend class="nc-legend">Leistung {index + 1}</legend>
                        <Input
                            name={`job-${job.id}-title`}
                            label="Titel"
                            id={`job-${job.id}-title`}
                            required={false}
                            bind:value={job.title}
                        />

                        <MarkdownEditor
                            name={`job-${job.id}-description`}
                            label={'Beschreibung'}
                            id={`job-${job.id}-description`}
                            bind:value={job.description}
                        ></MarkdownEditor>
                        <button
                            class="nc-button -small -destructive"
                            type="button"
                            onclick={() => removeJobDescription(job.id)}
                        >
                            Leistung "{index + 1}" löschen
                        </button>
                    </fieldset>
                </div>
            {/each}
            <button class="nc-button" type="button" onclick={addJobDescription}>
                Leistung hinzufügen
            </button>
        </fieldset>
    </div>
    <div class="nc-card">
        <fieldset class="nc-fieldset nc-stack">
            <legend class="nc-legend"><h2 id="rechnungsdetails">4. Rechnungsdetails</h2></legend>

            <TextArea
                errors={$currentInvoice.errors.notes}
                name="notes"
                label="Anmerkungen"
                id="notes"
                splitLines={true}
                required={false}
                bind:value={$currentInvoice.invoice.notes}
            />
            <CheckboxInput
                errors={$currentInvoice.errors.jobDateEqualsInvoiceDate}
                name="jobDateEqualsInvoiceDate"
                label="Leistungsdatum = Rechungsdatum?"
                id="jobDateEqualsInvoiceDate"
                required={false}
                bind:checked={$currentInvoice.invoice.jobDateEqualsInvoiceDate}
            />

            <CheckboxInput
                errors={$currentInvoice.errors.hasUmsatzSteuer}
                name="hasUmsatzSteuer"
                label="Mit Umsatzsteuerklausel?"
                id="hasUmsatzSteuer"
                required={false}
                bind:checked={$currentInvoice.invoice.hasUmsatzSteuer}
            />
        </fieldset>
    </div>
    <div class="nc-card">
        <fieldset class="nc-fieldset nc-stack">
            <legend class="nc-legend"><h2 id="aussteller">5. Aussteller</h2></legend>

            <IssuerSelect {availableIssuers} />

            <Input
                errors={$currentInvoice.errors.issuer}
                name="issuerId"
                label="ID"
                id="issuerId"
                type="text"
                bind:value={$currentInvoice.invoice.issuer.id}
            ></Input>

            <Input
                errors={$currentInvoice.errors.issuer}
                name="issuerName"
                label="Name"
                id="issuerName"
                type="text"
                bind:value={$currentInvoice.invoice.issuer.name}
            />
            <TextArea
                errors={$currentInvoice.errors.issuer}
                name="issuerAddress"
                label="Adresse"
                id="issuerAddress"
                splitLines={true}
                bind:value={$currentInvoice.invoice.issuer.address}
            />
            <Input
                errors={$currentInvoice.errors.issuer}
                name="issuerPhone"
                label="Telefonnummer"
                id="issuerPhone"
                type="tel"
                bind:value={$currentInvoice.invoice.issuer.phone}
            />
            <Input
                errors={$currentInvoice.errors.issuer}
                name="issuerMail"
                label="E-Mail"
                id="issuerMail"
                type="email"
                bind:value={$currentInvoice.invoice.issuer.email}
            />
        </fieldset>
    </div>
    <div class="nc-card">
        <fieldset class="nc-fieldset nc-stack">
            <legend class="nc-legend"><h2 id="bankverbindung">6. Bankverbindung</h2></legend>

            <BankDetailsSelect {availableBankingDetails} />

            <Input
                errors={$currentInvoice.errors.bankingDetails}
                name="bankName"
                label="Name"
                id="bankName"
                type="text"
                bind:value={$currentInvoice.invoice.bankingDetails.bankName}
            />
            <Input
                errors={$currentInvoice.errors.bankingDetails}
                name="bankIban"
                label="IBAN"
                id="bankIban"
                type="text"
                bind:value={$currentInvoice.invoice.bankingDetails.iban}
            />
            <Input
                errors={$currentInvoice.errors.bankingDetails}
                name="bankBic"
                label="BIC"
                id="bankBic"
                type="text"
                bind:value={$currentInvoice.invoice.bankingDetails.bic}
            />
            <Input
                errors={$currentInvoice.errors.bankingDetails}
                name="bankUST"
                label="UST-ID"
                id="bankUST"
                type="text"
                bind:value={$currentInvoice.invoice.bankingDetails.ust}
            />
        </fieldset>
    </div>
    <button class="nc-button" id="generieren" type="submit">Rechnung generieren</button>
</form>

<style>
header {
    position: sticky;
    inset-block-start: 0;
    inset-inline: 0;
    inline-size: 100%;
    padding-block: var(--spacing-near);
    background: var(--color-surface-muted);
    box-shadow: var(--shadow-near);
    padding-inline: var(--spacing-base);
    border-block-end: var(--border-width-thin) solid var(--color-border-muted);
    z-index: 2;
}

a {
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}

.generate {
    margin-inline-start: auto;
}

form {
    --input-field-max-inline-size: 40ch;
}

.job-entry {
    border-block-start: var(--border-width-medium) dashed var(--color-border-muted);
}

.nc-button {
    max-inline-size: fit-content;
}

:target {
    scroll-margin-block-start: 7ex;
}
</style>
