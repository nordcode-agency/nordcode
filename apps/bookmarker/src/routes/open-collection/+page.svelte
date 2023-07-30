<script lang="ts">
  import type {ActionData} from './$types';
  import InputWrapper from "@nordcode/ui/src/modules/forms/svelte/InputFields/InputWrapper.svelte";
  import FormLayout from "$lib/modules/common/components/FormLayout.svelte";

  export let form: ActionData;

</script>


<FormLayout>
  <div class="stack -full-width">
    <h1>Open collection</h1>
    <form method="POST" class="stack -full-width">
      <fieldset class="nc-fieldset stack -layout-far -full-width">
        <InputWrapper label="Collection ID" id="collection-id">
          <input type="text" id="user-id" name="collection-id" placeholder="Your collection id"/>
        </InputWrapper>


        <button>Open</button>

      </fieldset>
    </form>

    <p>Don't have a collection yet? <a href="/new-collection">Setup a new one</a>!</p>

    {#if form?.success}
      <p>You have logged in successfully. You can now start <a href="/">using the app</a>
        .</p>
    {/if}

    {#if form?.error}
      <p>{form.error}</p>
    {/if}
  </div>
</FormLayout>
