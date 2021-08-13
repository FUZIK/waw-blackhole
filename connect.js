const EXTENSION_ID = 'fdjaebaeopplcaikloeldlhbopefoilf';
let extensionPort = null;
function startConnect(id = null) {
    extensionPort = chrome.runtime.connect(id);
    extensionPort.onMessage.addListener(function (message, port) {
       console.log('Message from extension', message, port);
    });
    extensionPort.postMessage('Hello, world!');
}
try {
    startConnect();
} catch (e) {
    try {
        startConnect(EXTENSION_ID)
    } catch (e) {
        console.error(e)
    }

}
