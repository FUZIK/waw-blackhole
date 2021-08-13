function createScript(localScript) {
    const s = document.createElement('script');
    s.src = chrome.runtime.getURL(`${localScript}.js`);
    return s;
}
const rootElement = (document.head || document.documentElement);
rootElement.appendChild(createScript('@pedroslopez.moduleRaid'));
rootElement.appendChild(createScript('wwa-app-hack'));
rootElement.appendChild(createScript('connect'));


