$(function() {
    //For Altering Background of Tables
    //Cell colour
    var tds = document.getElementsByTagName("td");

    for(var i = 0, j = tds.length; i < j; ++i)
        tds[i].style.color = "black";

    //Background for rows
    var trs = document.getElementsByTagName("tr");

    for(var i = 0, j = trs.length; i < j; ++i)
        trs[i].style.backgroundColor = "white";
});