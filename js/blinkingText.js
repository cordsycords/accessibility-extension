$(function() {
    var attrs = { };

    //stop marquee text
    $("marquee").replaceWith(function() {
        return $("<div />", attrs).append($(this).contents());
    });

    //stop blinking text
    $("blink").replaceWith(function() {
        return $("<strong />", attrs).append($(this).contents());
    });

    //stop animated text
    var existing_classes = [];
    $('body').find('*').each(function () {
        let elems = document.getElementsByClassName($(this)[0].className);
        if (elems.length > 0) {
            let style = window.getComputedStyle(elems[0], null);
            if (style.getPropertyValue('animation-iteration-count') === "infinite"){
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

    for (const animationClass of existing_classes) {
        $('.' + animationClass).css('animation-iteration-count', '0');
    }//end for
    //end stop animated text
});