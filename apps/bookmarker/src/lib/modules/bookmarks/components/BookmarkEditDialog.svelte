<script lang="ts">
    import {addTag, bookmarkToEdit, removeTag} from "$lib/modules/bookmarks/stores/bookmarkToEdit";
    import Input from "@nordcode/ui/src/modules/forms/svelte/InputFields/Input.svelte";
    import Textarea from "@nordcode/ui/src/modules/forms/svelte/InputFields/Textarea.svelte";


    function saveBookmark() {
        console.log("saveBookmark", $bookmarkToEdit);
    }

    let newTag = "";

    function addNewTag() {
        if (!newTag) {
            return
        }
        addTag(newTag)
        newTag = "";
    }


</script>

<dialog class="nc-dialog" id="edit-dialog" data-level="1" style="max-inline-size: 50rem">
    <div class="dialog-container">
        <div class="dialog-header">
            <h2 class="dialog-title">Edit {$bookmarkToEdit?.title}</h2>
            <!-- svelte-ignore a11y-autofocus -->
            <button autofocus data-closes-dialog="export-dialog" class="nc-button -small">✕</button>
        </div>
        <div class="dialog-content">
            {#if $bookmarkToEdit}
                <form class="stack">
                    <Input name="url" label="URL"
                           id="url"
                           bind:value={$bookmarkToEdit.url}/>

                    <fieldset class="stack -layout-base -full-width">
                        <legend>Tags</legend>
                        <div class="cluster">
                    {#each $bookmarkToEdit.tags as tag, index (tag)}
                        <button type="button" class="nc-button -destructive -small -secondary" on:click={() => removeTag(tag)}>Remove {tag}</button>
                    {/each}
                            </div>

                    <Input name="new-tag" label="New tag"
                           id="new-tag"
                           bind:value={newTag}>
                        <button class="nc-button -small" type="button" on:click={addNewTag}>Add tag</button>
                    </Input>
                    </fieldset>


                    <Textarea
                            name="description"
                            label="Description"
                            id="description"
                            bind:value={$bookmarkToEdit.description}
                    />
                </form>
            {/if}
        </div>
        <footer class="dialog-actions | cluster -layout-base">
            <button
                    class="nc-button -secondary"
                    data-closes-dialog
            >Cancel
            </button>
            <button
                    class="nc-button"
                    on:click={saveBookmark}
                    data-has-notification
                    data-notification-title={`Updating bookmark`}
                    data-notification-description={`Your bookmark ${$bookmarkToEdit?.title} will be updated.`}
            >Save
            </button>
        </footer>
    </div>
</dialog>

<style lang="postcss">
    dialog {
        --dialog-close-size: var(--button-height-small);
    }
    form {
        --input-field-max-inline-size: 40ch;
    }
</style>

