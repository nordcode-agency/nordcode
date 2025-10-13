<script>
import { page } from '$app/stores';
</script>

<section>
    <h1>Upsi 😬</h1>
    <code>{$page.status} {$page.error.message}</code>
</section>
