<script lang="ts">

  import { configStore } from "../../store/configStore";

</script>

{#if Object.values($configStore).length > 0}
  <div class="stack -layout-far">
    <section class="stack -layout-near">
      <h1 id="form-elements">Form Elements</h1>

      <div class="nc-card">
        <h2>FieldSets</h2>
        <div class="stack">

          <div class="box -bordered">
          <fieldset>
            <legend>
              Standard Example
            </legend>
            <p class="nc-hint">this is a hint for this fieldset</p>
            <div class="stack">
              <div class="nc-input-field">
                <label for="input" class="stack">
                  <span class="nc-input-label">Label</span>
                  <span class="nc-hint">Hint is an accessible way to provide additional information that might help the user</span>
                </label>
                <input id="input" class="nc-input" />
              </div>
              <div class="nc-input-field">
                <label for="input2" class="stack">
                  <span class="nc-input-label">Label 2</span>
                  <span class="nc-input-error">An error is a good indicator of something that went wrong</span>
                </label>
                <input id="input2" class="nc-input" />
              </div>
            </div>
          </fieldset>
        </div>

        <div class="box -bordered">
          <fieldset>
            <legend>
              <h1>Legend as H1</h1>
            </legend>
            <p class="nc-hint">this is a hint for this fieldset</p>
            <div class="nc-input-field">
                <label for="input3" class="stack">
                  <span class="nc-input-label">Label</span>
                  <span class="nc-hint">Hint is an accessible way to provide additional information that might help the user</span>
                </label>
                <input id="input3" class="nc-input" />
              </div>
          </fieldset>
        </div>



          </div>
      </div>
    </section>
  </div>

{:else}
  <p>loading...</p>
{/if}
