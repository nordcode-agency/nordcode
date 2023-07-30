<script lang="ts">
  import type {ActionData, PageData} from './$types';
  import FormLayout from "$lib/modules/common/components/FormLayout.svelte";

  export let form: ActionData;
  export let data: PageData

</script>

<FormLayout>
  <div class="stack -full-width">
    <h1>Create a collection</h1>
    <form method="POST" class="stack -full-width">
      <fieldset class="nc-fieldset stack -layout-far -full-width">

    <button>Create new collection</button>

  </fieldset>
</form>

<p>Already have a collection? <a href="/open-collection">Login here</a>!</p>


{#if form?.success}
  <p>You have created a new collection. You're collection ID is: <strong>{data.collectionId}</strong>. Please make sure to write that down somewhere.
  </p >
  <p>
    You can now start <a href="/collection">collecting bookmarks.</a>
  </p>
{/if}

{#if form?.error}
  <p>{form.error}</p>
{/if}
  </div>
</FormLayout>
