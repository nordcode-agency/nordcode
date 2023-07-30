<script lang="ts">
  import {goto} from "$app/navigation";

  export let name: string = '';
	export let checked: boolean = false;

  function toggleButton() {
    const newValue = !checked;
    const urlSearchParams = new URLSearchParams(window.location.search);

    if (newValue) {
      urlSearchParams.append("tags", name);
    } else {
      const currentTags = new Set(urlSearchParams.getAll("tags"));
      currentTags.delete(name);
      urlSearchParams.delete("tags");
      currentTags.forEach(tag => urlSearchParams.append("tags", tag))

    }
    goto(`?${urlSearchParams.toString()}`, {replaceState: true});

  }
</script>

<button class="tag" aria-pressed={checked} on:click={toggleButton}>
  # {name}
</button>


<style lang="postcss">
  .tag {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: var(--spacing-nearest) var(--spacing-near);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-small);
    color: var(--color-text-subtle);
    opacity: 0.7;
    transition: var(--transition-duration-short) color ease-in-out, var(--transition-duration-short) opacity ease-in-out;
  }


  .tag[aria-pressed="true"] {
    color: var(--color-brand-primary-strong);
    opacity: 1;
  }

</style>
