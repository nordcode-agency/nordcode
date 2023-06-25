<script lang="ts">
    export let dismissAllText = "Dismiss All"
    export let closeText = "Close"
</script>

<div class="nc-notification-center -archive">
    <div class="nc-notification-center-header">
        <button data-notifications-dismiss-all class="nc-button">{dismissAllText}</button>
        <button data-toggle-notification-center class="nc-button">{closeText}</button>
    </div>
    <div class="nc-notification-center-container"></div>
</div>

<output class="nc-notification-output"></output>
