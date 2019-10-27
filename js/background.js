//init
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ contentscript: 'js/dyslexia.js' }, function () {
        console.log("Content script is set to default.");
    });
});

chrome.webNavigation.onCompleted.addListener(function() {
    chrome.storage.sync.get('contentscript', function (data) {
        chrome.tabs.executeScript(null, { file: "js/jquery-3.4.1.min.js" }, function() {
            chrome.tabs.executeScript(null, { file : data.contentscript });
        });
    });
});
