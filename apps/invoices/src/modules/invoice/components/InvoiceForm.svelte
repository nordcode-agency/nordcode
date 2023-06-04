<script lang="ts">
    import {addJobDescription, currentInvoice, removeJobDescription} from "../invoiceStore";
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import Textarea from "@nordcode/ui/src/modules/forms/svelte/InputFields/Textarea.svelte";
    import {saveInvoiceToLocalStorage} from "../utils/invoiceToLocalStorage";


    const createInvoice = (event: SubmitEvent) => {
        // @todo: error handling
        event.preventDefault()

        saveInvoiceToLocalStorage($currentInvoice.invoice)
        location.href = `/view?id=${$currentInvoice.invoice.invoiceNumber}`
    }
</script>

<div>
    <h1 class="typo-2xl mb-s1">Neue Rechnung anlegen</h1>
    <form class="stack -layout-l" on:submit={createInvoice}>
        <Input bind:errors={$currentInvoice.errors.title}
               name="title"
               label="Rechnungs Titel"
               id="title"
               type="text"
               bind:value={$currentInvoice.invoice.title}
        />
        <fieldset class="stack -layout-m">
            <legend>Allgemeines</legend>

            <Input errors={$currentInvoice.errors.invoiceNumber}
                   name="invoiceNumber"
                   label="Rechnungsnummer"
                   id="title"
                   type="number"
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

        <fieldset class="stack -layout-m">
            <legend>Empfänger</legend>
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

        <fieldset class="stack -layout-m">
            <legend>Leistungen</legend>
            <Input errors={$currentInvoice.errors.jobDuration}
                   name="jobDuration"
                   label="Leistungszeitraum"
                   id="jobDuration"
                   type="daterange"
                   bind:value={$currentInvoice.invoice.jobDuration}
            />

            {#each $currentInvoice.invoice.jobDescriptions as job, index (job.id)}
                <div class="stack">
            <Textarea
                    name={`job-${job.id}`}
                    label={`Leistung ${index + 1}`}
                    id={`job-${job.id}`}
                    bind:value={job.description}
            >
                    <button class="CTA-button -small -secondary -destructive" type="button" on:click={() => removeJobDescription(job.id)}>Leistung "{index + 1}" löschen</button>
                </Textarea>
                </div>
            {/each}
            <button class="CTA-button" type="button" on:click={addJobDescription}>Leistung hinzufügen</button>
        </fieldset>
        <fieldset class="stack -layout-m">
                        <legend>Rechnungsdetails</legend>

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
        <button class="CTA-button" type="submit">Rechnung generieren</button>
    </form>
</div>
