<script lang="ts">
import type { Breadcrumb } from '$lib/types/Breadcrumb';
import { ensureTrailingSlash } from '$lib/utils/ensureTrailingSlash';

interface Props {
    items: Breadcrumb[];
}

let { items }: Props = $props();
</script>

<!-- COMPONENT-START: nc-breadcrumbs -->
<nav>
    <ol class="nc-list-reset nc-cluster -nogap nc-breadcrumbs">
        {#each items as bc, index}
            <li class="nc-breadcrumb-item b-listitem">
                <a
                    class="nc-breadcrumb-link slub"
                    href={ensureTrailingSlash(bc.url)}
                    aria-current={index === items.length - 1 ? 'page' : undefined}
                >{bc.name}</a>
            </li>
        {/each}
    </ol>
</nav>
<!-- COMPONENT-END: nc-breadcrumbs -->
