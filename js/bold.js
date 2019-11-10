$(function () {
    var attrs = {};

    $("i").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });

    $("em").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });

    var existing_classes = [];
    $('body').find('*').each(function () {
        let elems = document.getElementsByClassName($(this)[0].className);
        if (elems.length > 0) {
            let style = window.getComputedStyle(elems[0]);
            if (style.fontStyle === 'italic') {
                if ($(this)[0].className && typeof ($(this)[0].className) === 'string') {
                    let classes = $(this)[0].className.split(' ');
                    for (const c of classes) {
                        if (!existing_classes.includes(c)) {
                            existing_classes.push(c);
                        }
                    }
                }
            }
        }
    });

    for(const italicClass of existing_classes) {
        $('.' + italicClass).css('font-style', 'normal').css('font-weight', 'bold');
    }

});