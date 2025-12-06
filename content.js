const hideAds = () => {
    const selectors = [
        "[id*='ad']",
        "[class*='ad']",
        "[id*='Ad']",
        "[class*='Ad']",
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
