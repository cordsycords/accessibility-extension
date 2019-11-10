//init
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ contentscript: 'js/dyslexia.js' }, function () {
        console.log("Content script is set to default.");
    });
});

chrome.webNavigation.onCompleted.addListener(function() {
    chrome.storage.sync.get('options', function (data) {
        chrome.tabs.executeScript(null, { file: "js/jquery-3.4.1.min.js" }, function() {
            
            if(data.options.bold) {
                chrome.tabs.executeScript(null, { file : 'js/bold.js' });
            }

            if(data.options.underline) {
                chrome.tabs.executeScript(null, { file : 'js/underline.js' });
            }

            if(data.options.personalText.enabled) {
                chrome.tabs.executeScript(null, { file : 'js/fontchange.js' });
            }

            if(data.options.table) {
                chrome.tabs.executeScript(null, {file : 'js/table.js'});
            }
        });
    });
});