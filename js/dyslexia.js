$(function() {
    var attrs = { };
    
    $("i").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });

    $("em").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });

    var existing_classes = [];
    $('body').find('*').each(function(){ 
        if($(this)[0].className) {
            if(!existing_classes.includes($(this)[0].className)) {
                existing_classes.push($(this)[0].className);
            }
        }
        $
    });

    console.log(existing_classes);
//    if(document.body.style.backgroundColor == "white"){
       document.body.style.backgroundColor = "red";
       document.getElementById("content").style.backgroundColor = "lightblue";
       document.getElementById("mw-page-base").style.backgroundColor = "lightblue";
//    }

});
