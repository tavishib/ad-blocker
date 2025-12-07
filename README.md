**Tavishi’s AdBlocker (Chrome Extension)**

A lightweight Chrome Manifest V3 ad blocker that blocks network ads, hides page-level ad elements, and includes a real-time statistics dashboard.

This project was built to learn how modern content blocking works using Chrome’s Declarative Net Request API, service workers, and content scripts.

**Features**

1. Network Ad Blocking
Blocks requests to major ad networks using MV3 rules (rules.json).

2. Cosmetic Ad Blocking
Removes ad elements from the page using a content script.

3. Live Stats Dashboard
   Tracks:
   Network ads blocked
   Cosmetic ads hidden
   Ads blocked per website

4. Privacy-Friendly
All blocking happens locally; no data ever leaves the browser.

**Installation (Developer Mode)**

1. Clone the repository:
git clone (https://github.com/tavishib/ad-blocker.git)

2. Open Chrome → chrome://extensions

3. Enable Developer Mode

4. Click Load unpacked

5. Select the extension folder

The extension will now appear in your toolbar.

**Tech Used**

Manifest V3
DeclarativeNetRequest API
Service Workers
Content Scripts
Chrome Storage API (local)

**Project Structure**
/ad-blocker
 ├── manifest.json
 ├── rules.json
 ├── service_worker.js
 ├── content.js
 ├── popup.html
 └── popup.js

**How It Works**

Network blocking
Chrome intercepts and blocks matching requests before they leave the browser.

Cosmetic filtering
The content script hides DOM elements that match known ad selectors.

Stats tracking
The service worker and content script update counters stored in chrome.storage.local.
The popup displays them in real time.

**Future Improvements**

Add support for full EasyList filters

Improve cosmetic filtering (fewer false positives)

Add a "Block Element" mode

Dark mode popup UI
