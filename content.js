const hideAds = () => {
    const selectors = [
        "[id^='ad-']", 
        "[id$='-ad']",
        "[id='ad']",
        "[class^='ad-']",
        "[class$='-ad']",
        "[class='ad']",
        "iframe[src*='ads']", 
        "iframe[src*='doubleclick']"
    ];

    let hiddenCount = 0;

    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            if (el.style.display !== "none") {
                el.style.display = "none";
                hiddenCount++;
            }
        });
    });

    if (hiddenCount > 0) {
        chrome.storage.local.get(["cosmeticBlocked"], (data) => {
            const newValue = (data.cosmeticBlocked || 0) + hiddenCount;
            chrome.storage.local.set({ cosmeticBlocked: newValue });
        });
    }

};

// Run initially
hideAds();

// Re-run every second to catch dynamic ads
setInterval(hideAds, 1000);
