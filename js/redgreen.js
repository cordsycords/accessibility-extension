$(function() {
    var attrs = { };

    var start = performance.now();
    $("i").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });

    $("em").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });

    var title_text_colour = '#6873B1'
    var background_colour_red ='#A7B8F8'
    var background_colour_green = '#09458F'//'#052955'

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
        if (back_red >= 220 && back_blue >= 220 && back_green >= 220){
            $(this).css("background-color", originial_colour)
        }
        //Checks for green colours
        else if (back_green >=90 && back_green > back_blue){
            $(this).css("background-color", background_colour_green);
            count = 1;
        }
        //Checks for red colours
        else if (back_red >=150){
           $(this).css("background-color", background_colour_red);
          
        }

        //Finds text colours that need to be changed. 
        var text_colour =String($(this).css("color"));
        var original_text_colour = $(this).css("color");
        text_colour = text_colour.replace('rgb(','')
        text_colour = text_colour.replace(')','')
        var red = Number(text_colour.split(',')[0])
        var green = Number(text_colour.split(',')[1])
        var blue = Number(text_colour.split(',')[2])
        
        //Checks for white text
        if (red >= 225 && blue >= 225 && green >= 225){
            $(this).css("color", 'white');
        }
        //Checks for red text
        else if (red >=120){
           $(this).css("color", title_text_colour);  
        }
        //Checks for black text
        else if (red <= 35 && blue <= 35 && green <= 35){
            $(this).css("color", 'black')
        }

        else {
            $(this).css("color", original_text_colour);
        }
        //Checks is background has been made darker and if so then the text is 
        //turned white is increase constrast
        if (count == 1){
            $(this).css("color", '#FFFFFF');
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
    //1.Changes link text to black
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

    var end = performance.now();
    console.log("Call to doSomething took " + (end - start) + " milliseconds.");
    //console.log(existing_classes);

});