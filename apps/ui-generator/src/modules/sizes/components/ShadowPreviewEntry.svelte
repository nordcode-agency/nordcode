<script lang="ts">
    import TokenDescriptor from '../../common/components/TokenDescriptor.svelte';
    import {
        getThemeMutationObserver,
        type ThemeMutationObserverListener,
    } from '../../common/utils/ThemeMutationObserver.ts';

    interface ShadowPreviewEntryProps {
        entry: {
            name: string;
            description: string;
        };
    }

    const { entry }: ShadowPreviewEntryProps = $props();

    let resolvedValue = $state('');

    let token = $derived(`--shadow-${entry.name.toLowerCase()}`);
    let lightShadow = $derived(`${token}-light`);
    let darkShadow = $derived(`${token}-dark`);

    const updateResolvedValue: ThemeMutationObserverListener = style => {
        if (!style) {
            return;
        }
        resolvedValue = `${style.getPropertyValue(token).trim()}`;
    };

    $effect(() => {
        getThemeMutationObserver().subscribe(style => {
            updateResolvedValue(style);
        });

        updateResolvedValue(getThemeMutationObserver().getStyle());
    });
</script>

<div class="nc-grid">
    <TokenDescriptor name={entry.name} {token} description={entry.description} {resolvedValue} />

    <div class="nc-box lightpreview nc-cluster">
        <div
            class="nc-box preview-box"
            style="--shadow-color: var(--shadow-color-light); box-shadow: var({token}); border-color: var(--color-border-base-light);"
        ></div>
    </div>
    <div class="nc-box darkpreview nc-cluster">
        <div
            class="nc-box preview-box"
            style="--shadow-color: var(--shadow-color-dark); box-shadow: var({token}); border-color: var(--color-border-base-dark);"
        ></div>
    </div>
</div>

<style>
    .nc-grid {
        grid-template-columns: 2fr 1fr 1fr;
        inline-size: 100%;

        &:first-of-type > .nc-box {
            border-start-start-radius: var(--border-radius-medium);
            border-start-end-radius: var(--border-radius-medium);
        }

        &:last-of-type > .nc-box {
            border-end-start-radius: var(--border-radius-medium);
            border-end-end-radius: var(--border-radius-medium);
        }
    }

    .preview-box {
        min-inline-size: 6rem;
        block-size: 6rem;
        border-radius: var(--border-radius-medium);
        border: var(--border-width-thin) solid;
    }

    .lightpreview {
        background: var(--color-surface-base-light);
    }

    .darkpreview {
        background: var(--color-surface-base-dark);
    }
</style>
