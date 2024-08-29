<script lang="ts">
interface NotificationCenterProps {
    dismissAllText: string;
    closeText: string;
}

let { dismissAllText = 'Dismiss all', closeText = 'Close' }: NotificationCenterProps = $props();
</script>

<div class="nc-notification-center -archive">
    <div class="nc-notification-center-header">
        <button data-notifications-dismiss-all class="nc-button">{dismissAllText}</button>
        <button data-toggle-notification-center class="nc-button">{closeText}</button>
    </div>
    <div class="nc-notification-center-container"></div>
</div>

<output class="nc-notification-output"></output>
