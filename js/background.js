//init
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ contentscript: 'js/dyslexia.js' }, function () {
        console.log("Content script is set to default.");
    });
});

chrome.webNavigation.onCompleted.addListener(function() {
    chrome.storage.sync.get('contentscript', function (data) {
        chrome.tabs.executeScript({
            file : data.contentscript
        });
    });
});