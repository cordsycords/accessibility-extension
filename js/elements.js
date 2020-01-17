$(function () {
    $(":visible").find('*').each(function () {
        console.log($(this).css("background-color"));
    });
});