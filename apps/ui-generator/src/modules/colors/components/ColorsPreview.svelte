<script lang="ts">

    import {colorStore} from "../colorStore";
    import ColorPreview from "./ColorPreview.svelte";

    let rendered = [];
    const colors = [
        '--color-brand-primary-strong',
        '--color-brand-primary-base',
        '--color-brand-primary-subtle',

        '--color-brand-secondary-strong',
        '--color-brand-secondary-base',
        '--color-brand-secondary-subtle',

        '--color-text-strong',
        '--color-text-base',
        '--color-text-subtle',

        '--color-surface-strong',
        '--color-surface-base',
        '--color-surface-subtle',

        '--color-border-strong',
        '--color-border-base',
        '--color-border-subtle',
    ]

  //           document?.querySelectorAll('.color-bg').forEach(element => {
  //          const parent = element.parentNode;
  // const clone = element.cloneNode(true);
  // parent.replaceChild(clone, element);
  //
  // // Trigger a reflow by accessing a property that requires layout information
  // clone.offsetHeight; // For example, offsetHeight
  //
  // // Reattach the clone to restore the element
  // parent.replaceChild(element, clone);
  //       })


    // setInterval(() => {
    //     rendered = rendered.length === 0 ? colors : []
    // }, 50)


</script>

{#if Object.values($colorStore).length > 0}
    <div class="stack -layout-far">
        <div class="stack -layout-near">
            <h2>Colors</h2>
            {#each colors as color}
                <ColorPreview color={color}/>
            {/each}
        </div>
    </div>

{:else}
    <p>loading...</p>
{/if}
