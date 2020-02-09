$(function() {
    var attrs = { };


    $("i").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });

    $("em").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });

    var title_text_colour = '#CC8A30'
    var background_colour_yellow ='#C26D36'
    var background_colour_blue = '#1C801F'

    //Adding "Required" text to manadatory fields to prevent relying on 
    //colour indicators
    var required_inputs = document.getElementsByTagName("input");
    for(var i=0;i<required_inputs.length;i++)
    {
        required_inputs[i].placeholder = "Required"
    }  

  
    // Changes colours that the users cannot identify
    $(":visible").find('*').each(function(){
        var name = this.className;
        var count = 0

        //Finds background colours that need to be changed. 
        var back_colour = String($(this).css("background-color"));
        var originial_colour = $(this).css("background-color")
        back_colour = back_colour.replace('rgb(','')
        back_colour = back_colour.replace(')','')
        var back_red = Number(back_colour.split(',')[0])
        var back_green = Number(back_colour.split(',')[1])
        var back_blue = Number(back_colour.split(',')[2])
        
        //Checks if white or off-white colour
        if (back_red >= 170 && back_blue >= 170 && back_green >= 170){
            $(this).css("background-color", originial_colour)
        }
        //Checks for deep blue colours
        else if (back_blue>=100 && back_red < 70 && back_blue - back_red >30){
            $(this).css("background-color", background_colour_blue);
            count = 1;
        }
        //Checks for yellow colours
        else if (back_red >=80 && back_green >=80 && back_blue <= 50){
           $(this).css("background-color", background_colour_yellow);
          
        }

        //Finds text colours that need to be changed. 
        var text_colour =String($(this).css("color"));
        var original_text_colour = $(this).css("color");
        text_colour = text_colour.replace('rgb(','')
        text_colour = text_colour.replace(')','')
        var red = Number(text_colour.split(',')[0])
        var green = Number(text_colour.split(',')[1])
        var blue = Number(text_colour.split(',')[2])
        if (red >= 225 && blue >= 225 && green >= 225){
            $(this).css("color", 'white');
        }
        //Checks for yellow text and makes it darker
        else if (red >=80 && green >=80 && blue <= 50){
           $(this).css("color", title_text_colour);
            
        }
        //Checks for black text
        else if (red <= 35 && blue <= 35 && green <= 35){
            $(this).css("color", 'black')
        }
        //Checks is background has been made darker and if so then the text is 
        //turned white is increase constrast
        else if (count == 1){
            $(this).css("color", '#FFFFFF');
        }
        else {
            $(this).css("color", original_text_colour);
        }

    })

    //For Altering Background of Tables
    //Cell colour
    var tds = document.getElementsByTagName("td");

    for(var i = 0, j = tds.length; i < j; ++i)
        tds[i].style.color = "black";

    //Background for rows
    var trs = document.getElementsByTagName("tr");

    for(var i = 0, j = trs.length; i < j; ++i)
        trs[i].style.backgroundColor = "white";

    //Alters the Link style of website
    //1.Changes link text to bold
    //2.Adds blue underline to each link
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        links[i].style.textDecoration = "underline"; 
        links[i].style.fontWeight = "bold";  
    }  

    var existing_classes = [];
    $('body').find('*').each(function(){ 
        if($(this)[0].className) {
            if(!existing_classes.includes($(this)[0].className)) {
                existing_classes.push($(this)[0].className);
            }
        }
    });

    //console.log(existing_classes);

});