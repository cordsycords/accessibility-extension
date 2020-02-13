$(function() {
    
    init();

    document.getElementById('save-button').onclick = function(e) {
        aeOptions = {};
        overide = '';

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

        $('.overide').each(function() {
            if ($(this).prop('checked') === true) {
                overide = $(this).attr('id');
            }
        });

        chrome.storage.sync.set( {options: aeOptions, overide: overide}, function () {
            chrome.tabs.reload();
        });

    };

    $('#overideDyslexia').change(function(e) {
        if($(this).prop('checked') === true) {
            $('#overideADHD').prop('checked', '');
            $('#overideColorblindness').prop('checked', '');

            $('.ae-option').each(function() {
                if($(this).is('input') && $(this).attr('type') === 'checkbox') {
                    $(this).prop('checked', '');
                }
            });

            $('.overide-dys').each(function() {
                $(this).prop('checked', 'true');
            });
        } else {
            $('.overide-dys').each(function() {
                $(this).prop('checked', '');
            });
        }
    });

    $('#overideADHD').change(function(e) {
        if($(this).prop('checked') === true) {
            $('#overideDyslexia').prop('checked', '');
            $('#overideColorblindness').prop('checked', '');

            $('.ae-option').each(function() {
                if($(this).is('input') && $(this).attr('type') === 'checkbox') {
                    $(this).prop('checked', '');
                }
            });

            $('.overide-adhd').each(function() {
                $(this).prop('checked', 'true');
            });
        } else {
            $('.overide-adhd').each(function() {
                $(this).prop('checked', '');
            });
        }
    });

    $('#overideColorblindness').change(function(e) {
        if($(this).prop('checked') === true) {
            $('#overideDyslexia').prop('checked', '');
            $('#overideADHD').prop('checked', '');

            $('.ae-option').each(function() {
                if($(this).is('input') && $(this).attr('type') === 'checkbox') {
                    $(this).prop('checked', '');
                }
            });

            $('.overide-cb').each(function() {
                $(this).prop('checked', 'true');
            });
        } else {
            $('.overide-cb').each(function() {
                $(this).prop('checked', '');
            });
        }
    });


});

function init() {
    chrome.storage.sync.get('options', function (data) {
        aeOptions = data.options;
        overide = data.overide;

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

        if(overide.length > 0) {
            $('#' + overide).prop('checked', 'true');
        }
    });

    chrome.storage.sync.get('overide', function (data) {
        overide = data.overide;

        if(overide.length > 0) {
            $('#' + overide).prop('checked', 'true');
        }
    });
}

