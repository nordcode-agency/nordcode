<script lang="ts">
  import type {ActionData} from './$types';
  import InputWrapper from "@nordcode/ui/src/modules/forms/svelte/InputFields/InputWrapper.svelte";
  import FormLayout from "$lib/modules/common/components/FormLayout.svelte";

  export let form: ActionData;

</script>


<FormLayout>
  <div class="stack -full-width">
    <h1>Login</h1>
    <form method="POST" class="stack -full-width">
      <fieldset class="nc-fieldset stack -layout-far -full-width">
        <InputWrapper label="User ID" id="user-id">
          <input type="text" id="user-id" name="user-id" placeholder="Your User id"/>
        </InputWrapper>


        <button>Login</button>

      </fieldset>
    </form>

    <p>Don't have an account yet? <a href="/signup">Sign up here</a>!</p>

    {#if form?.success}
      <p>You have logged in successfully. You can now start <a href="/">using the app</a>
        .</p>
    {/if}

    {#if form?.error}
      <p>{form.error}</p>
    {/if}
  </div>
</FormLayout>
