$(function () {
    chrome.storage.sync.get('options', function (data) {
        let backgroundColorChange = data.options.reduceContrastColor;
        let rgbRegex = /rgb\(25[0-6],\s25[0-6],\s25[0-6]\)/g;
        let rgbaRegex = /rgba\(25[0-6],\s25[0-6],\s25[0-6],\s(\d*\.\d+),?\)/g;

        $(":visible").find('*').each(function () {
            var colour = $(this).css("background-color");
            //console.log(colour);
    
            if (colour.match(rgbRegex) != null) {
                $(this).css("background-color", backgroundColorChange);
                console.log($(this).css("background-color"));
            } else if (colour.match(rgbaRegex) != null) {
                var [r, g, b, a] = colour.match(/[\d\.]+/g);;
                var newColour = "rgba(255, 255, 240, ${a})";
                $(this).css("background-color", newColour);
            }
    
        });
    });
});

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete (parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    hexcolour = '#' + parts.join('');
}
