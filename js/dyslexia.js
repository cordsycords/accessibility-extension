$(function() {
    var attrs = { };
    const maincolor = document.body.style.backgroundColor;
    alert("COlor is: " + maincolor.toString());
    $("i").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });

    $("em").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });
    // $(function(){
    //$("p").css("background-color","red");
    //$(":header").css("background-color","red");
    //$(":button").css("background-color","red");
    //$(":checkbox").css("background-color","red");
    //$(":radio").css("background-color","red");
    //$(":reset").css("background-color","red");
    //$(":input").css("background-color","red");
    //$(":submit").css("background-color","red");
    //$(":text").css("background-color","red");
        ///const style = getComputedStyle(element)
   //style.backgroundColor //the RGB value
    $(":visible").find('*').each(function(){
        //if($(this).is(":empty")){}else 
        if($(this).css('background-image') != 'none'){
          //  alert('There is a background image');
        }
        else{ if($(this).css('background-color') == maincolor){
            $(this).css("background", "#ffff00")
            $(this).css({"font-family": "Arial, Helvetica, sans-serif","word-spacing": "10",});
            $(this).css("color", "#000000");
        }
       
    //    }
    })

    $("p").find('*').each(function(){
        //if($(this).css("line-height", "1.5"))
        $(this).css("line-height", "1.5");
    //    }
    })

   // $(document).ready(function(){    
    //});
    //.css("background-color","red");
    //$(":root").css("background-color","red");
    //$( "body" ).first().css( "background-color", "red" );
    //$("content").css("background-color","red");
    //$("mw-body-content").css("background-color","red");
    //document.body.style.backgroundColor = "lightred";
    // }
    //var existing_classes = [];
    //$('body').find('*').each(function(){ 
    //    if($(this)[0].className) {
    //        if(!existing_classes.includes($(this)[0].className)) {
    //            existing_classes.push($(this)[0].className);
    //        }
    //    }
    //    $
    //});
    document.querySelectorAll("div")
    //var style = document.createElement('style');
    //document.head.appendChild(style);
    //style.sheet.insertRule('#target {color: darkseagreen}');
    //const element = document.querySelector('.my-element')
    ///const style = getComputedStyle(element)
   //style.backgroundColor //the RGB value
   /*  $(document).ready(function(){
        // Loop through each div element with the class box
        $(".element").each(function(){
            // Test if the div element is empty
            if($(this).is(":empty")){
                $(this).css("background", "red");
            }
        });
    });  */
    //
   // document.getElementById("content").style.backgroundColor = "lightblue";
    //document.getElementById("mw-body-content").style.backgroundColor = "lightblue";



//    var existing_classes = [];
 /*   $('body').find('*.css').each(function(){ 
        if($(this)[0].className) {
            if(!existing_classes.includes($(this)[0].className)) {
                existing_classes.push($(this)[0].className);
            }
        }
        $
    });
    //    if(document.body.style.backgroundColor == "white"){
    

    //    }
*/
});
