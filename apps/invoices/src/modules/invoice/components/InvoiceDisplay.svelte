<script lang="ts">
    import {
        onDestroy,
        onMount,
    } from "svelte";
    import { loadInvoiceFromLocalStorage } from "../utils/invoiceToLocalStorage";
    import { readable } from 'svelte/store';
    import {
        formatDateString,
        formatMoney,
    } from "../../common/utils/formatters";
    import type { Invoice } from '../models/Invoice.model.ts';

    const currentInvoice = readable<Invoice>(undefined, function start(set) {
        const id = new URL(window.location.href).searchParams.get('id');

        if (!id) {
            window.location.href = '/invoices';
        }

        const invoice = loadInvoiceFromLocalStorage(id ?? '');

        if (invoice) {
            set(invoice);
        }

        if (!currentInvoice) {
            window.location.href = '/invoices';
        }
    });

    let initialStyle = '';
    let targetDate: Date;

    const setInitialStyle = () => {
        initialStyle = document.documentElement.getAttribute('style') ?? '';
        document.documentElement.setAttribute('style', initialStyle + 'font-size: 14px;');
    };

    onMount(() => {
        setInitialStyle();
    });

    onDestroy(() => {
        document.documentElement.setAttribute('style', initialStyle);
    });

    $: {
        if ($currentInvoice) {
            const date = new Date($currentInvoice.date);
            date.setDate(date.getDate() + $currentInvoice.daysToPay);
            targetDate = date;
        }
    }
    ;
</script>

{#if $currentInvoice}
    <div class="printBg full-width">
        <section class="printWrap | nc-stack -far">
            <div class="printSection | grid-2">
                <div class="nc-stack -far">
                    <h1>Rechnung</h1>
                    <div class="nc-stack -nogap">
                        <h4>An</h4>
                        <p>
                            {$currentInvoice.recipient.name}
                        </p>
                        {#each $currentInvoice.recipient.address as row}
                            <p>
                                {row}
                            </p>
                        {/each}
                    </div>

                </div>
                <div class="printOverview num">
                    <span>R.Nr.</span><span class="tl-right">{$currentInvoice.invoiceNumber}</span>
                    <span>Datum</span><span class="tl-right">{formatDateString($currentInvoice.date)}</span>
                    <span>Zahlungsziel</span><span class="tl-right">{formatDateString(targetDate)}</span>
                    <span class="-bold mt-base">Gesamt</span><span
                    class="-bold font-mono mt-base tl-right">{formatMoney($currentInvoice.invoiceTotal)}</span>
                </div>

            </div>
            <div class="printSection | nc-stack -far">
                <div class="nc-stack -near">
                    <div class="nc-stack -nogap">
                        <h2>Leistungen</h2>
                        <small class="num">{$currentInvoice.jobDuration}</small>
                    </div>

                    <div class="nc-stack">
                        {#each $currentInvoice.jobDescriptions as job}
                            <p class="-big">{job.description}</p>
                        {/each}
                    </div>

                </div>

                <div class="nc-stack -nogap">
                    <span class="-bold">Gesamt:</span>
                    <strong class="printTotal | badge font-mono -bold num">
                        {formatMoney($currentInvoice.invoiceTotal)}
                    </strong>
                </div>

                <div class="printSection | nc-stack -near">
                    <h3>Anmerkungen</h3>
                    {#if $currentInvoice.jobDateEqualsInvoiceDate}
                        <p>Sofern nicht anders angegeben, entspricht das Leistungsdatum dem
                            Rechnungsdatum.
                        </p>
                    {/if}
                    {#if $currentInvoice.payableUntil}
                        <p>
                            Zahlbar ohne Abzüge bis zum {formatDateString(targetDate)}.</p>
                    {/if}
                    {#if $currentInvoice.hasUmsatzSteuer}
                        <p>Gemäß §19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.</p>
                    {/if}
                    <p class="printGreeting">
                        <strong>{$currentInvoice.goodbyePhrase}</strong> {$currentInvoice.name}
                    </p>
                </div>
            </div>

            <div class="printSection printContact grid-2 mt-auto">
                <div class="nc-stack -near | printContactDetails">
                    <h4>Kontakt</h4>
                    <div class="stack -nogap">
                        <p>{$currentInvoice.issuer.name}</p>
                        {#each $currentInvoice.issuer.address as address}
                            <p>{address}</p>
                        {/each}
                    </div>
                    <div class="nc-stack -nogap">
                        <p>{$currentInvoice.contact.phone}</p>
                        <p>{$currentInvoice.contact.email}</p>
                    </div>
                </div>
                <div class="printBankDetails">
                    <div class="nc-stack -near">
                        <h4>Bitte überweisen an</h4>
                        <div class="nc-stack -nogap mt-auto">
                            <p>{$currentInvoice.bankingDetails.bankName}</p>
                            <p>{$currentInvoice.bankingDetails.iban}</p>
                            <p>{$currentInvoice.bankingDetails.bic}</p>
                            <p>{$currentInvoice.bankingDetails.ust}</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
{:else}
    <p>Loading...</p>
{/if}

<style>
    .printWrap {
        inline-size: 100%;
        padding-inline: 0.5in;
        padding-block: 0.5in;
        max-inline-size: 210mm;
        block-size: 100%;
        min-block-size: 297mm;
        margin: 0 auto;
        background: var(--color-surface-default);

        & h1 {
            font-size: var(--font-size-largest);
        }

        & h2 {
            font-size: var(--font-size-large);
        }

        & h3 {
            font-size: var(--font-size-base);
        }

        & h4 {
            font-size: var(--font-size-small);
        }

        & p {
            font-size: var(--font-size-small);
            line-height: var(--line-height-base);
        }

        & .-big {
            font-size: var(--font-size-base);
        }
    }

    .num {
        font-variant-numeric: tabular-nums;
    }

    .grid-2 {
        display: grid;
        grid-template-columns: 1fr auto;
        inline-size: 100%;
    }

    .printOverview {
        border: var(--border-width-medium) solid var(--color-border-default);
        padding: var(--spacing-near);
        justify-self: flex-end;
        align-self: flex-start;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: var(--spacing-base);
        row-gap: var(--spacing-tiny);

        & span {
            display: block;
        }
    }

    .printBg {
        width: 100%;
        background: var(--color-surface-inset);
        padding-block: var(--spacing-far);
        margin: 0 auto;
    }

    .printBankDetails {
        display: flex;
        flex-direction: column;
        justify-items: flex-end;
        width: fit-content;
        text-align: right;
    }

    .tl-right {
        text-align: right;
    }

    @media print {
        :root {
            --color-text: #222;
            --color-text-strong: #222;
            --color-background: white;

        }

        .printBg {
            background: none;
            padding: 0;
        }

        .printWrap {
            background: var(--color-background) !important;
            color: var(--color-text) !important;

            & *:not(:is(h1,h2,h3,h4, strong)) {
                color: var(--color-text) !important;
                border-color: var(--color-text) !important;
            }

            & *:is(h1,h2,h3,h4, strong) {
                color: var(--color-text-strong) !important;
            }
        }
    }

</style>
