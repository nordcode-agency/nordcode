<script lang="ts">
  import type {ActionData} from './$types';
  import InputWrapper from "@nordcode/ui/src/modules/forms/svelte/InputFields/InputWrapper.svelte";
  import FormLayout from "$lib/modules/common/components/FormLayout.svelte";

  export let form: ActionData;

</script>

<FormLayout>
  <div class="stack -full-width">
    <h1>Sign Up</h1>
    <form method="POST" class="stack -full-width">
      <fieldset class="nc-fieldset stack -layout-far -full-width">
    <InputWrapper label="E-Mail" id="email" hint="You can add an email to attach to your account." optional={true}>
      <input type="email" id="email" name="email" placeholder="-Email"/>
    </InputWrapper>


    <button>Sign up</button>

  </fieldset>
</form>

<p>Already have an account? <a href="/login">Login here</a>!</p>


{#if form?.success}
  <p>You have sign-up successfully. You can now start <a href="/">using the app</a>
    .</p>
{/if}

{#if form?.error}
  <p>{form.error}</p>
{/if}
  </div>
</FormLayout>
