chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
    console.log('onMessageExternal', message, sender);
});
chrome.runtime.onConnectExternal.addListener(function(port){
    console.log('onConnectExternal', port);
    port.onMessage.addListener(function (message, port) {
        console.log('Message from webpage', message);
    })
    port.postMessage('Hello from background page');
});