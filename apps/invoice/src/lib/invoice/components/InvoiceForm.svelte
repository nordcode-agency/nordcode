<script lang="ts">
    import {
        addJobDescription,
        currentInvoice,
        removeJobDescription,
    } from "../invoiceStore";
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import Textarea from "@nordcode/ui/src/modules/forms/svelte/InputFields/Textarea.svelte";

    const createInvoice = async (event: SubmitEvent) => {
        event.preventDefault();

        const res = await fetch('/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify($currentInvoice.invoice),
        });

        if (res.status === 201) {
            const { invoiceNumber } = await res.json();
            location.href = `/view/${ invoiceNumber }`;
        }
    };
</script>

<form class="nc-stack -far full-width -contained -stretched" on:submit={createInvoice}>
    <Input bind:errors={$currentInvoice.errors.title}
           name="title"
           label="Rechnungs Titel"
           id="title"
           type="text"
           bind:value={$currentInvoice.invoice.title}
    />
    <div class="nc-box -bordered">
        <fieldset class="nc-fieldset nc-stack">
            <legend class="nc-legend">Allgemeines</legend>

            <Input errors={$currentInvoice.errors.invoiceNumber}
                   name="invoiceNumber"
                   label="Rechnungsnummer"
                   id="title"
                   bind:value={$currentInvoice.invoice.invoiceNumber}
            />

            <Input errors={$currentInvoice.errors.invoiceTotal}
                   name="total"
                   label="Gesamtbetrag"
                   id="title"
                   type="text"
                   bind:value={$currentInvoice.invoice.invoiceTotal}
            />

            <Input errors={$currentInvoice.errors.date}
                   name="date"
                   label="Rechnungsdatum"
                   id="date"
                   type="date"
                   bind:value={$currentInvoice.invoice.date}
            />

            <Input errors={$currentInvoice.errors.daysToPay}
                   name="daysToPay"
                   label="Tage zum Zahlen"
                   id="daysToPay"
                   type="number"
                   bind:value={$currentInvoice.invoice.daysToPay}
            />
        </fieldset>
    </div>

    <div class="nc-box -bordered">
        <fieldset class="nc-fieldset nc-stack">
            <legend class="nc-legend">Empfänger</legend>
            <Input errors={$currentInvoice.errors.recipient}
                   name="recipientName"
                   label="Name"
                   id="recipientName"
                   type="text"
                   bind:value={$currentInvoice.invoice.recipient.name}
            />
            <Textarea errors={$currentInvoice.errors.recipient}
                      name="recipientAddress"
                      label="Adresse"
                      id="recipientAddress"
                      splitLines={true}
                      bind:value={$currentInvoice.invoice.recipient.address}
            />

        </fieldset>
    </div>

    <div class="nc-box -bordered">
        <fieldset class="nc-fieldset nc-stack">
            <legend class="nc-legend">Leistungen</legend>
            <Input errors={$currentInvoice.errors.jobDuration}
                   name="jobDuration"
                   label="Leistungszeitraum"
                   id="jobDuration"
                   type="daterange"
                   bind:value={$currentInvoice.invoice.jobDuration}
            />

            {#each $currentInvoice.invoice.jobDescriptions as job, index (job.id)}
                <div class="nc-stack">
                    <Input
                        name="{`job-${job.id}-title`}"
                        label="Titel"
                        id="{`job-${job.id}-title`}"
                        type="checkbox"
                        optional="true"
                        bind:value={job.title} />
                    <Textarea
                        name={`job-${job.id}-description`}
                        label={`Leistung ${index + 1}`}
                        id={`job-${job.id}-description`}
                        bind:value={job.description}
                    >
                    <button class="nc-button -small -destructive"
                            type="button"
                            on:click={() => removeJobDescription(job.id)}>Leistung "{index + 1}" löschen</button>
                </Textarea>
                </div>
            {/each}
            <button class="nc-button" type="button" on:click={addJobDescription}>
                Leistung hinzufügen
            </button>
        </fieldset>
    </div>
    <div class="nc-box -bordered">
        <fieldset class="nc-fieldset nc-stack">
            <legend class="nc-legend">Rechnungsdetails</legend>

            <Textarea errors={$currentInvoice.errors.notes}
                      name="notes"
                      label="Anmerkungen"
                      id="notes"
                      splitLines={true}
                      bind:value={$currentInvoice.invoice.notes}
            />
            <Input errors={$currentInvoice.errors.jobDateEqualsInvoiceDate}
                   name="jobDateEqualsInvoiceDate"
                   label="Leistungsdatum = Rechungsdatum?"
                   id="jobDateEqualsInvoiceDate"
                   type="checkbox"
                   bind:value={$currentInvoice.invoice.jobDateEqualsInvoiceDate} />

            <Input errors={$currentInvoice.errors.hasUmsatzSteuer}
                   name="hasUmsatzSteuer"
                   label="Mit Umsatzsteuer?"
                   id="hasUmsatzSteuer"
                   type="checkbox"
                   bind:value={$currentInvoice.invoice.hasUmsatzSteuer} />
        </fieldset>
    </div>
    <div class="nc-box -bordered">
        <fieldset class="nc-fieldset nc-stack">
            <legend class="nc-legend">Aussteller</legend>

            <Input errors={$currentInvoice.errors.issuer}
                   name="issuerName"
                   label="Name"
                   id="issuerName"
                   type="text"
                   bind:value={$currentInvoice.invoice.issuer.name}
            />
            <Textarea errors={$currentInvoice.errors.issuer}
                      name="issuerAddress"
                      label="Adresse"
                      id="issuerAddress"
                      splitLines={true}
                      bind:value={$currentInvoice.invoice.issuer.address}
            />
            <Input errors={$currentInvoice.errors.issuer}
                   name="issuerPhone"
                   label="Telefonnummer"
                   id="issuerPhone"
                   type="tel"
                   bind:value={$currentInvoice.invoice.issuer.phone}
            />
            <Input errors={$currentInvoice.errors.issuer}
                   name="issuerMail"
                   label="E-Mail"
                   id="issuerMail"
                   type="email"
                   bind:value={$currentInvoice.invoice.issuer.email}
            />
        </fieldset>
    </div>
    <div class="nc-box -bordered">
        <fieldset class="nc-fieldset nc-stack">
            <legend class="nc-legend">Bankverbindung</legend>

            <Input errors={$currentInvoice.errors.bankingDetails}
                   name="bankName"
                   label="Name"
                   id="bankName"
                   type="text"
                   bind:value={$currentInvoice.invoice.bankingDetails.bankName}
            />
            <Input errors={$currentInvoice.errors.bankingDetails}
                   name="bankIban"
                   label="IBAN"
                   id="bankIban"
                   bind:value={$currentInvoice.invoice.bankingDetails.iban}
            />
            <Input errors={$currentInvoice.errors.bankingDetails}
                   name="bankBic"
                   label="BIC"
                   id="bankBic"
                   bind:value={$currentInvoice.invoice.bankingDetails.bic}
            />
            <Input errors={$currentInvoice.errors.bankingDetails}
                   name="bankUST"
                   label="UST-ID"
                   id="bankUST"
                   bind:value={$currentInvoice.invoice.bankingDetails.ust}
            />
        </fieldset>
    </div>
    <button class="nc-button" type="submit">Rechnung generieren</button>
</form>

<style>
    form {
        --input-field-max-inline-size: 40ch;
    }
</style>
