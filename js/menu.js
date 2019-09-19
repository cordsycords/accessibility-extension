$(function() {
    chrome.storage.sync.get('contentscript', function (data) {
        let accessSelector = document.getElementById('select-option');
        accessSelector.value = data.contentscript;
    });
    
    
    document.getElementById('save-button').onclick = function(e) {
        let accessSelector = document.getElementById('select-option');
        
        chrome.storage.sync.set({ contentscript: accessSelector.value }, function () {
            console.log("Content script is set to: " + accessSelector.value);
            chrome.tabs.reload();
        });
    };
});

