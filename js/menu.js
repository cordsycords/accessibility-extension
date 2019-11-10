$(function() {
    
    document.getElementById('save-button').onclick = function(e) {
        aeOptions = {};

        $('.ae-option').each(function() {
            if($(this).is('select')) {
                aeOptions[$(this).attr('id')] = $(this).value;
            } else if ($(this).is('input')) {
                switch ($(this).attr('type')) {
                    case 'checkbox':
                        aeOptions[$(this).attr('id')] = $(this)[0].checked;
                        console.log($(this));
                        break;
                    case 'text':
                        aeOptions[$(this).attr('id')] = $(this).value;
                        break;

                }
            }
        });

        console.log(aeOptions);
        chrome.storage.sync.set( {options: aeOptions}, function () {
            chrome.tabs.reload();
        });

    };

    init();
});

function init() {
    chrome.storage.sync.get('options', function (data) {
        let boldCB = document.getElementById('text-bold');
        let underlineCB = document.getElementById('text-link-underline');
        let fontCB = document.getElementById('text-fontchange');
        let fontChoiceDD = document.getElementById('text-fontchange-value');
        let tableCB = document.getElementById('color-table');

        boldCB.checked = data.options.bold;
        underlineCB.checked = data.options.underline;
        fontCB.checked = data.options.personalText.enabled;
        fontChoiceDD.value = data.options.personalText.fontchoice;
        tableCB.checked = data.options.table;
    });
}

