//init
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ contentscript: 'js/dyslexia.js' }, function () {
        console.log("Content script is set to default.");
    });
});

chrome.webNavigation.onCompleted.addListener(function() {
    chrome.storage.sync.get('options', function (data) {
        chrome.tabs.executeScript(null, { file: "js/jquery-3.4.1.min.js" }, function() {
            aeOptions = data.options;

            for(const key of Object.keys(aeOptions)) {
                if(typeof(aeOptions[key]) === 'boolean' && aeOptions[key] === true) {
                    chrome.tabs.executeScript(null, {file : 'js/' + key + '.js'});
                }
            }
        });
    });
});