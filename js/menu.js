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
                    case 'color':
                        aeOptions[$(this).attr('id')] = $(this).prop('value');
                        break;
                }
            }
        });

        chrome.storage.sync.set( {options: aeOptions}, function () {
            chrome.tabs.reload();
        });

    };

    document.getElementById('overrideDyslexia').onclick = function(e) {
        $('.ae-option').each(function() {
            if($(this).attr('type') === 'checkbox') {
                $(this).prop('checked', 'false');
            }
        });
    };

    document.getElementById('overrideADHD').onclick = function(e) {
        $('.ae-option').each(function() {
            if($(this).attr('type') === 'checkbox') {
                $(this).prop('checked', 'false');
            }
        });
    };

    document.getElementById('overrideColorblindness').onclick = function(e) {
        $('.ae-option').each(function() {
            if($(this).attr('type') === 'checkbox') {
                $(this).prop('checked', 'false');
            }
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
                    case 'color':
                        $(this).prop('value', aeOptions[$(this).attr('id')]);
                        break;

                }
            }
        });
    });
}

