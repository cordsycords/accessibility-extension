$(function() {
    var attrs = { };


    $("i").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });

    $("em").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });

    //Adding "Required" text to manadatory fields to prevent relying on 
    //colour indicators
    var required_inputs = document.getElementsByTagName("input");
    for(var i=0;i<required_inputs.length;i++)
    {
        required_inputs[i].placeholder = "Required"
    }  

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

    //console.log(existing_classes);

});