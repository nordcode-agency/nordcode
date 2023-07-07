<script lang="ts">
  export let heading: string = '';
  export const id: string = '';
</script>


<dialog
  class="nc-dialog"
  {id}
  data-level="1"
  inert
>
  <form method="dialog" class="dialog-container">
    <div class="dialog-header">
      <h2 class="dialog-title">{heading}</h2>
      <button data-closes-dialog>X</button>
    </div>
    <div class="dialog-content">
      <slot />
      <button data-opens-dialog="dialog-2">Show me the next dialog</button>
    </div>
  </form>
</dialog>
