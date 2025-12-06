// Count blocked network ads
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
    // increment total blocked count
    chrome.storage.local.get(["networkBlocked"], (data) => {
        const newValue = (data.networkBlocked || 0) + 1;
        chrome.storage.local.set({ networkBlocked: newValue });
    });

    // increment per-site count
    const host = new URL(info.request.url).hostname;
    chrome.storage.local.get(["siteStats"], (data) => {
        const stats = data.siteStats || {};
        stats[host] = (stats[host] || 0) + 1;
        chrome.storage.local.set({ siteStats: stats });
    });
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ networkBlocked: 0, cosmeticBlocked: 0, siteStats: {} });
});