// Ensure storage keys always exist
chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get(["networkBlocked", "cosmeticBlocked", "siteStats"], (data) => {
        const defaults = {};
        if (data.networkBlocked === undefined) defaults.networkBlocked = 0;
        if (data.cosmeticBlocked === undefined) defaults.cosmeticBlocked = 0;
        if (!data.siteStats) defaults.siteStats = {};

        if (Object.keys(defaults).length > 0) {
            chrome.storage.local.set(defaults);
        }
    });
});

// Also run on installation
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        networkBlocked: 0,
        cosmeticBlocked: 0,
        siteStats: {}
    });
});
