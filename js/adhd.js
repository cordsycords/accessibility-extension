//ADHD Accessibility Extension JavaScript Code Module
$(function() {
    var attrs = { };

    $("marquee").replaceWith(function(){
        return $("<div />", attrs).append($(this).contents());
    });
});