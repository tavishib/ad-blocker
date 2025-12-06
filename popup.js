// Display total stats
chrome.storage.local.get(["networkBlocked", "cosmeticBlocked", "siteStats"], (data) => {
    document.getElementById("netCount").innerText = data.networkBlocked || 0;
    document.getElementById("cosCount").innerText = data.cosmeticBlocked || 0;

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const url = new URL(tabs[0].url);
        const host = url.hostname;

        const siteStats = data.siteStats || {};
        const count = siteStats[host] || 0;

        document.getElementById("siteStats").innerText =
            host + ": " + count + " ads blocked";
    });
});

// Reload button
document.getElementById("reload").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.reload(tabs[0].id);
    });
});
