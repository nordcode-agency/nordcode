// @ts-check

/**
 * @typedef {T[keyof T]} valueOf<T>
 * @template T
 */

/**
 * @typedef SelectorType
 * @property {string} notificationTemplate
 * @property {string} notification
 * @property {string} notificationTitle
 * @property {string} notificationDescription
 * @property {string} notificationTime
 * @property {string} notificationButton
 * @property {string} notificationCenterToggle
 * @property {string} notificationCenterDismissAll
 * @property {string} notificationCenter
 * @property {string} notificationCenterContainer
 * @property {string} notificationOutput
 */

/**
 * @type {SelectorType}
 */
export const Selector = {
    notificationTemplate: '#nc-notification',
    notification: '.nc-notification',
    notificationTitle: '.nc-notification-title',
    notificationDescription: '.nc-notification-description',
    notificationTime: '.nc-notification-time',

    notificationButton: 'button[data-has-notification]',
    notificationCenterToggle: 'button[data-toggle-notification-center]',
    notificationCenterDismissAll: 'button[data-notifications-dismiss-all]',

    notificationCenter: '.nc-notification-center',
    notificationCenterContainer: '.nc-notification-center-container',
    notificationOutput: '.nc-notification-output',
};

/** @type {Set<string>} */
const notifications = new Set();

/** @type {function(): HTMLTemplateElement | null} */
const getNotificationTemplate = () => document.querySelector(Selector.notificationTemplate);

/** @type {function(): NodeListOf<HTMLButtonElement>} */
const getNotificationButtons = () => document.querySelectorAll(Selector.notificationButton);

/** @type {function(): HTMLElement | null} */
const getNotificationCenter = () => document.querySelector(Selector.notificationCenter);

/** @type {function(): NodeListOf<HTMLButtonElement>} */
const getNotificationCenterToggle = () =>
    document.querySelectorAll(Selector.notificationCenterToggle);

/** @type {function(): HTMLOutputElement | null} */
const getNotificationOutput = () => document.querySelector(Selector.notificationOutput);

/** @type {function(): NodeListOf<HTMLButtonElement>} */
const getNotificationCenterDismissAll = () =>
    document.querySelectorAll(Selector.notificationCenterDismissAll);

/** @type {function(): HTMLElement | null} */
const getNotificationCenterContainer = () =>
    document.querySelector(Selector.notificationCenterContainer);

/**
 * Create a unique id for a notification
 * @param {string} title
 * @return {`${string}-${number}`}
 */
const createNotificationId = title => {
    return `${title}-${Date.now()}`;
};

/**
 * Set the inner text of an element if it is defined
 * @param {HTMLElement} notification
 * @param {valueOf<SelectorType>} selector
 * @param {string | undefined} text
 */
const setElementTextIfItExists = (notification, selector, text) => {
    /** @type {HTMLElement | null} */
    const element = notification.querySelector(selector);

    if (!element) {
        return;
    }

    element.textContent = text || '';
};

/**
 * Remove all notifications
 */
const dismissAllNotifications = () => {
    notifications.forEach(notificationId => {
        /** @type {HTMLElement | null} */
        const notification = document.querySelector(`[data-notification-id="${notificationId}"]`);

        if (!notification) {
            return;
        }

        removeNotification(notificationId, notification);
    });
};

/**
 * Register all buttons
 */
const setupNotificationButtons = () => {
    const htmlEl = document.documentElement;

    htmlEl?.addEventListener('click', e => {
        const el = e.target;
        if (el.hasAttribute('data-has-notification')) {
            const title = el.dataset.notificationTitle;
            const description = el.dataset.notificationDescription;

            if (!title) {
                console.error('No title defined for notification');
                return;
            }
            addNotification(title, description);
        }
    });

    getNotificationCenterDismissAll()?.forEach(button =>
        button.addEventListener('click', () => {
            dismissAllNotifications();
        }),
    );

    getNotificationCenterToggle()?.forEach(button =>
        button.addEventListener('click', () => {
            getNotificationCenter()?.classList.toggle('-open');
        }),
    );
};

/**
 * Hide the notification center
 */
const closeNavigationCenter = () => {
    getNotificationCenter()?.classList?.remove('-open');
};

/**
 * Create a new notification from the template and set the necessary data and event listeners
 * @param {string} title
 * @param {string | undefined} description
 * @param {string} notificationId
 * @return {HTMLElement | null} The notification element
 */
const createNotification = (title, description, notificationId) => {
    const notificationTemplate = getNotificationTemplate();

    if (!notificationTemplate) {
        console.error('Could not find notification template', Selector.notificationTemplate);
        return null;
    }

    const clonedTemplate = notificationTemplate.content.cloneNode(true);
    /** @type {HTMLElement | null} */
    const notificationElement = /** @type {HTMLTemplateElement} */ (clonedTemplate).querySelector(
        Selector.notification,
    );
    if (!notificationElement) {
        console.error('Could not find notification element');
        return null;
    }

    /** @type {HTMLButtonElement | null} */
    const notificationClose = notificationElement.querySelector('button');

    notificationElement.dataset.notificationId = notificationId;
    setElementTextIfItExists(notificationElement, Selector.notificationTitle, title);
    setElementTextIfItExists(notificationElement, Selector.notificationDescription, description);
    setElementTextIfItExists(
        notificationElement,
        Selector.notificationTime,
        new Date().toLocaleTimeString(),
    );

    notificationClose?.addEventListener(
        'click',
        e => {
            closeCorrespondingNotification(e);
        },
        { once: true },
    );

    return notificationElement;
};

/**
 * Handle the creation of the necessary DOM elements and add them to the DOM
 * @param {string} title
 * @param {string | undefined} description
 */
export const addNotification = (title, description) => {
    const notificationId = createNotificationId(title);
    const liveNotification = createNotification(title, description, notificationId);
    const notificationOutput = getNotificationOutput();

    if (!liveNotification || !notificationOutput) {
        return;
    }

    notificationOutput.append(liveNotification);
    notifications.add(notificationId);

    setTimeout(() => {
        /** @type {HTMLElement | null} */
        const notification = notificationOutput.querySelector(
            `[data-notification-id="${notificationId}"]`,
        );

        if (!notification) {
            return;
        }

        removeNotification(notificationId, notification, false);
        const archiveNotification = createNotification(title, description, notificationId);
        const notificationCenterContainer = getNotificationCenterContainer();
        if (!archiveNotification || !notificationCenterContainer) {
            return;
        }
        notificationCenterContainer.append(archiveNotification);
    }, 4000);
};

/**
 * Close the notification that is associated with the button that was clicked
 * @param {MouseEvent} e
 */
const closeCorrespondingNotification = e => {
    /** @type {HTMLElement | null} */
    const notification = /** @type {HTMLButtonElement} */ (e.target).closest(Selector.notification);

    const notificationId = notification?.dataset?.notificationId;
    if (!notificationId) {
        return;
    }
    removeAllNotificationsWithId(notificationId);
};

/**
 * Remove a notification from the DOM after playing the closing animation
 *
 * @param {string} notificationId
 * @param {HTMLElement | null} notification
 * @param {boolean} removeId
 */
const removeNotification = (notificationId, notification, removeId = true) => {
    if (!notification) {
        return;
    }

    notification.addEventListener(
        'animationend',
        () => {
            notification.remove();

            if (removeId) {
                notifications.delete(notificationId);
            }

            if (notifications.size === 0) {
                closeNavigationCenter();
            }
        },
        { once: true },
    );

    notification.classList.add('-closing');
};

/**
 * Remove all notifications with the same id. This is used to remove the live notification and the archived notification
 * @param {string} notificationId
 */
const removeAllNotificationsWithId = notificationId => {
    /** @type {NodeListOf<HTMLElement>} */
    const relatedNotifications = document.querySelectorAll(
        `[data-notification-id="${notificationId}"]`,
    );
    relatedNotifications.forEach(n => removeNotification(notificationId, n));
};

setupNotificationButtons();
