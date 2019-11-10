$(function() {
    
    init();

    document.getElementById('save-button').onclick = function(e) {
        aeOptions = {};

        $('.ae-option').each(function() {
            if($(this).is('select')) {
                aeOptions[$(this).attr('id')] = $(this).prop('value');
            } else if ($(this).is('input')) {
                switch ($(this).attr('type')) {
                    case 'checkbox':
                        aeOptions[$(this).attr('id')] = $(this).prop('checked');
                        console.log($(this));
                        break;
                    case 'text':
                        aeOptions[$(this).attr('id')] = $(this).prop('value');
                        break;

                }
            }
        });

        chrome.storage.sync.set( {options: aeOptions}, function () {
            chrome.tabs.reload();
        });

    };
});

function init() {
    chrome.storage.sync.get('options', function (data) {
        aeOptions = data.options;

        $('.ae-option').each(function() {
            if($(this).is('select')) {
                $(this).prop('value', aeOptions[$(this).attr('id')]);
            } else if ($(this).is('input')) {
                switch ($(this).attr('type')) {
                    case 'checkbox':
                        $(this).prop('checked', aeOptions[$(this).attr('id')]);
                        break;
                    case 'text':
                         $(this).prop('value', aeOptions[$(this).attr('id')]);
                        break;

                }
            }
        });
    });
}

