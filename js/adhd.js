//ADHD Accessibility Extension JavaScript Code Module
$(function() {
    var attrs = { };

    $("marquee").replaceWith(function(){
        return $("<div />", attrs).append($(this).contents());
    });

    $("blink").replaceWith(function(){
        return $("<strong />", attrs).append($(this).contents());
    });
});