<script>
import { addNotification } from '@nordcode/ui/src/modules/notifications/js/notifications';
import { configStore } from '../configStore';

const checkUrlForStyles = () => {
    if (typeof window === 'undefined') {
        return;
    }
    const url = new URL(window.location.href);
    const styles = new URLSearchParams(url.search).get('styles');
    if (styles) {
        addNotification('Import successful', 'Loaded styles from URL');
        configStore.set(JSON.parse(styles));
        window.location.search = '';
    }
};

checkUrlForStyles();
</script>
