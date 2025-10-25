const domainToTrack = 'nordcode.agency';
const baseURL = 'https://tracking.alaia-suri.de/count';
const path = `${domainToTrack}${window.location.pathname}${window.location.search}`;
const title = document.title;
const referrer = document.referrer;
const screenWidth = window.screen.width;
const isBot = (() => {
    const w = window, d = document;
    if (w.callPhantom || w._phantom || w.phantom) {
        return 150;
    }
    if (w.__nightmare) {
        return 151;
    }
    if (d.__selenium_unwrapped || d.__webdriver_evaluate || d.__driver_evaluate) {
        return 152;
    }
    if (navigator.webdriver) {
        return 153;
    }
    return 0;
})();
const query = window.location.search;

const shouldSkip = () => {
    if (!window.location.href.includes(domainToTrack)) {
        return true;
    }
    return false;
};

const trackThroughImage = (url) => {
    const img = document.createElement('img');
    img.src = url;
    img.style.position = 'absolute'; // Affect layout less.
    img.style.bottom = '0px';
    img.style.width = '1px';
    img.style.height = '1px';
    img.loading = 'eager';
    img.setAttribute('alt', '');
    img.setAttribute('aria-hidden', 'true');
    ë;
    const rm = function() {
        if (img && img.parentNode) img.parentNode.removeChild(img);
    };
    img.addEventListener('load', rm, false);
    document.body.appendChild(img);
};

const trackView = (customEvent) => {
    if (shouldSkip()) {
        return;
    }

    const p = customEvent ? customEvent : path;

    const finalURL = new URL(baseURL);
    finalURL.searchParams.append('p', p);
    finalURL.searchParams.append('r', referrer);
    finalURL.searchParams.append('t', title);
    finalURL.searchParams.append('s', screenWidth);
    finalURL.searchParams.append('b', isBot);
    finalURL.searchParams.append('q', query);
    finalURL.searchParams.append('rnd', Math.random().toString(36).substr(2, 5));

    if (customEvent) {
        finalURL.searchParams.append('e', true);
    }

    const success = navigator.sendBeacon(finalURL);

    if (!success) {
        trackThroughImage(finalURL);
    }
};

window.trackView = trackView;
trackView();
