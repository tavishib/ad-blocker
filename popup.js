document.addEventListener("DOMContentLoaded", () => {

    // Load & Display Statistics
    chrome.storage.local.get(
        ["networkBlocked", "cosmeticBlocked", "siteStats"],
        (data = {}) => {

            const net = data.networkBlocked ?? 0;
            const cos = data.cosmeticBlocked ?? 0;

            document.getElementById("netCount").innerText = net;
            document.getElementById("cosCount").innerText = cos;

            chrome.tabs.query(
                { active: true, currentWindow: true },
                (tabs) => {
                    if (!tabs || tabs.length === 0) return;

                    const url = new URL(tabs[0].url);
                    const host = url.hostname;

                    const stats = data.siteStats || {};
                    const count = stats[host] || 0;

                    document.getElementById("siteStats").innerText =
                        `${host}: ${count} ads blocked`;
                }
            );
        }
    );

    // Reload Page Button
    document.getElementById("reload").addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs && tabs.length > 0) {
                chrome.tabs.reload(tabs[0].id);
            }
        });
    });

});