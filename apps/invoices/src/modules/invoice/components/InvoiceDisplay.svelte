<script lang="ts">
    import {onDestroy, onMount} from "svelte";
    import {loadInvoiceFromLocalStorage} from "../utils/invoiceToLocalStorage";
    import {readable} from 'svelte/store';
    import {formatDateString, formatMoney} from "../../common/utils/formatters";

    const currentInvoice = readable(undefined, function start(set) {
        const id = +new URL(window.location.href).searchParams.get('id');
        set(loadInvoiceFromLocalStorage(id));

        if (!currentInvoice) {
            window.location.href = '/invoices';
        }
    });

    let initialStyle = '';
    let targetDate: Date;

    const setInitialStyle = () => {
        initialStyle = document.documentElement.getAttribute('style') ?? '';
        document.documentElement.setAttribute('style', initialStyle + 'font-size: 14px;');
    }

    onMount(() => {
        setInitialStyle();
    })

    onDestroy(() => {
        document.documentElement.setAttribute('style', initialStyle)
    })




    $: {
        if ($currentInvoice) {
            const date = new Date($currentInvoice.date);
            date.setDate(date.getDate() + $currentInvoice.daysToPay);
            targetDate =  date;
        }
    };
</script>

{#if $currentInvoice}
<div class="printBg full-width">
    <section class="printWrap | stack">
        <div class="printSection | grid-2">
            <div class="stack">
                <h1>Rechnung</h1>
                <div class="stack -layout-none">
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
            <div class="printOverview">
                <span>R.Nr.</span><span class="tl-right">{$currentInvoice.invoiceNumber}</span>
                <span>Datum</span><span class="tl-right">{formatDateString($currentInvoice.date)}</span>
                <span>Zahlungsziel</span><span class="tl-right">{formatDateString(targetDate)}</span>
                <span class="-bold mt-base">Gesamt</span><span
                    class="-bold font-mono mt-base tl-right">{formatMoney($currentInvoice.invoiceTotal)}</span>
            </div>

        </div>
        <div class="printSection | stack -layout-far">
            <div class="stack -layout-none">
                <h2>Leistungen</h2>
                <span class="font-mono">{$currentInvoice.jobDuration}</span>
            </div>

            <div class="stack -layout-base">
                {#each $currentInvoice.jobDescriptions as job}
                    <p class="-big">{job.description}</p>
                {/each}
            </div>
            <div class="stack -layout-none">
                <span class="-bold">Gesamt:</span>
                <span class="printTotal | badge font-mono -bold">
                    {formatMoney($currentInvoice.invoiceTotal)}
                </span>
            </div>

        </div>
        <div class="printSection | stack -layout-base">
            <h3>Anmerkungen</h3>
            <div class="stack -layout-near">
                {#if $currentInvoice.jobDateEqualsInvoiceDate}
                    <p>Sofern nicht anders angegeben, entspricht das Leistungsdatum dem Rechnungsdatum.
                    </p>
                {/if}
                {#if $currentInvoice.payableUntil}
                    <p>
                        Zahlbar ohne Abzüge bis zum {formatDateString(targetDate)}.</p>
                {/if}
                {#if $currentInvoice.hasUmsatzSteuer}
                    <p>Gemäß §19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.</p>
                {/if}
            </div>
            <p class="printGreeting">
                <span class="-bold">{$currentInvoice.goodbyePhrase}</span>{$currentInvoice.name}
            </p>
        </div>
        <div class="printSection printContact grid-2 mt-auto">
            <div class="stack -layout-near | printContactDetails">
                <h4>Kontakt</h4>
                <div class="stack -layout-none">
                    <p>{$currentInvoice.issuer.name}</p>
                    {#each $currentInvoice.issuer.address as address}
                        <p>{address}</p>
                    {/each}
                </div>
                <div class="stack -layout-none">
                    <p>{$currentInvoice.contact.phone}</p>
                    <p>{$currentInvoice.contact.email}</p>
                </div>
            </div>
            <div class="printBankDetails">
                <div class="stack -layout-near">
                    <h4>Bitte überweisen an</h4>
                    <div class="stack -layout-none mt-auto">
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

<style lang="postcss">
  .printWrap {
    width: 100%;
    padding-inline: 0.5in;
    padding-block: 0.5in;
    max-width: 210mm;
    height: 100%;
    min-height: 297mm;
    margin: 0 auto;
    background: var(--color-surface-base);
    gap: var(--spacing-base);

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

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr auto;
      inline-size: 100%;
  }

  .printOverview {
    border: var(--border-width-thick) solid var(--color-border-base);
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
    background: var(--color-surface-strong);
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
    .printBg {
      background: none;
      padding: 0;
    }

    .printWrap {
      background: white !important;
      color: var(--color-text-light-strong) !important;

      & * {
        color: var(--color-text-light-strong) !important;
        border-color: var(--color-text-light-strong) !important;
      }
    }
  }

</style>
