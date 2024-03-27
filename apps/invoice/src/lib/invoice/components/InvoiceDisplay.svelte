<script lang="ts">
    import {
        formatDateString,
        formatMoney,
    } from "$lib/common/utils/formatters";
    import type { Invoice } from '../models/Invoice.model';
    import "../styles/invoiceDisplay.css";

    let targetDate: Date;

    export let currentInvoice: Invoice;

    console.log(currentInvoice);

    $: {
        if (currentInvoice) {
            const date = new Date(currentInvoice.date);
            date.setDate(date.getDate() + currentInvoice.daysToPay);
            targetDate = date;
        }
    }
</script>

<div class="printBg full-width">
    <section class="printWrap | nc-stack -far">
        <div class="printSection | grid-2">
            <div class="nc-stack -far">
                <h1>Rechnung</h1>
                <div class="nc-stack -nearest">
                    <h4>An</h4>
                    <div class="nc-stack -nogap">
                        <p>
                            {currentInvoice.recipient.name}
                        </p>
                        {#each currentInvoice.recipient.address as row}
                            <p>
                                {row}
                            </p>
                        {/each}
                    </div>
                </div>

            </div>
            <div class="printOverview num">
                <span>R.Nr.</span><span class="tl-right">{currentInvoice.invoiceNumber}</span>
                <span>Datum</span><span class="tl-right">{formatDateString(currentInvoice.date)}</span>
                <span>Zahlungsziel</span><span class="tl-right">{formatDateString(targetDate)}</span>
                <span class="-bold mt-base">Gesamt</span><span
                class="-bold font-mono mt-base tl-right">{formatMoney(currentInvoice.invoiceTotal)}</span>
            </div>

        </div>
        <div class="printSection | nc-stack -far">
            <div class="nc-stack">
                <div class="nc-stack -nogap">
                    <h2>Leistungen</h2>
                    <small class="num">{currentInvoice.jobDuration}</small>
                </div>

                <div class="nc-stack">
                    {#each currentInvoice.jobDescriptions as job}
                        <div class="nc-stack -nearest">
                            {#if job.title}<h3>{job.title}</h3>{/if}
                            <p class="-big description">{job.description}</p>
                        </div>
                    {/each}
                </div>

            </div>

            <div class="nc-stack -nogap">
                <span class="-bold">Gesamt:</span>
                <strong class="printTotal | badge font-mono -bold num">
                    {formatMoney(currentInvoice.invoiceTotal)}
                </strong>
            </div>

            <div class="printSection | nc-stack -nearest">
                <h3>Anmerkungen</h3>
                {#if currentInvoice.jobDateEqualsInvoiceDate}
                    <p>Sofern nicht anders angegeben, entspricht das Leistungsdatum dem
                        Rechnungsdatum.
                    </p>
                {/if}
                {#if currentInvoice.payableUntil}
                    <p>
                        Zahlbar ohne Abzüge bis zum {formatDateString(targetDate)}.</p>
                {/if}
                {#if currentInvoice.hasUmsatzSteuer}
                    <p>Gemäß §19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.</p>
                {/if}
                <p class="printGreeting">
                    <strong>{currentInvoice.goodbyePhrase}</strong> {currentInvoice.name}
                </p>
            </div>
        </div>

        <div class="printSection printContact grid-2 mt-auto">
            <div class="nc-stack -nearest | printContactDetails">
                <h4>Kontakt</h4>
                <div class="stack -nogap">
                    <p>{currentInvoice.issuer.name}</p>
                    {#each currentInvoice.issuer.address as address}
                        <p>{address}</p>
                    {/each}
                </div>
                <div class="nc-stack -nogap">
                    <p>{currentInvoice.issuer.phone}</p>
                    <p>{currentInvoice.issuer.email}</p>
                </div>
            </div>
            <div class="printBankDetails">
                <div class="nc-stack -nearest">
                    <h4>Bitte überweisen an</h4>
                    <div class="nc-stack -nogap mt-auto">
                        <p>{currentInvoice.bankingDetails.bankName}</p>
                        <p>{currentInvoice.bankingDetails.iban}</p>
                        <p>{currentInvoice.bankingDetails.bic}</p>
                        <p>{currentInvoice.bankingDetails.ust}</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</div>
