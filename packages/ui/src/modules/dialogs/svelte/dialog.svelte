<script lang="ts">
  export let heading: string = '';
</script>


<dialog
  class="nc-dialog"
  data-id="dialog-1"
  data-level="1"
  inert
  loading
>
  <div class="dialog-container">
    <div class="dialog-header">
      <h2 class="dialog-title">{heading}</h2>
      <button data-closes-dialog="dialog-1">X</button>
    </div>
    <div class="dialog-content">
      <slot />
      <button data-opens-dialog="dialog-2">Show me the next dialog</button>
    </div>
  </div>
</dialog>
