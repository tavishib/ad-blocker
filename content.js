const hideAds = () => {
    const selectors = [
        "[id*='ad']",
        "[class*='ad']",
        "[id*='Ad']",
        "[class*='Ad']",
        "iframe[src*='ads']",
        "iframe[src*='doubleclick']"
    ];

    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            el.style.display = "none";
        });
    });
};

// Run initially
hideAds();

// Re-run every second to catch dynamic ads
setInterval(hideAds, 1000);
