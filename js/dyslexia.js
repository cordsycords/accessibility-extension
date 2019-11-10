$(function () {
    var attrs = {};
    freezeAllGifs();
    /*$("i").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });

    $("em").replaceWith(function () {
        return $("<strong />", attrs).append($(this).contents());
    });
    $("marquee").replaceWith(function(){
        return $("<div />", attrs).append($(this).contents());
    });*/
    $(":visible").find('*').each(function () {
        var fontStyle = $(this).css("font-style");
        var fontFamily = $(this).css("font-family");
        var backgroundColor = $(this).css("background-color");
        //console.log(fontStyle);
        //console.log(fontFamily);
        console.log(backgroundColor);
        console.log(RGBA_To_Hex(backgroundColor));
        colorManager(backgroundColor);
        if($(this).is("em") ||$(this).is("i")){
           return $("<strong />", attrs).append($(this).contents());
        }
        if($(this).is("marquee")){
            return $("<div />", attrs).append($(this).contents());
        }                        
        if (fontStyle == "italic") {
            $(this).css({ "font-style": "normal" });
        }
        if($(this).is("img")){
            $this.stop();
        }
        //if (backgroundColor == "rgb(255, 255, 255)" || ) {
        //    $(this).css("background-color", "#fffff8");
        //}
        $(this).css({ "font-family": "Arial, Helvetica, sans-serif", "word-spacing": "10"});
    });

    //$(":visible").find('*').each(function () {
    //    //var currentBackgroundColor = RGBToHex($(this).css("background-color"));
    //    //var newBackgroundColor =   subHexColor(currentBackgroundColor, backgroundColorChange);

    //    //alert( newBackgroundColor);
    //    $(this).css("background-color", backgroundColorChange);
    //    
    //    $(this).css("color", "#000000");
    //});

    //$("p").find('*').each(function () {
    //    //if($(this).css("line-height", "1.5"))
    //    $(this).css("line-height", "1.5");
    //    //}
    //});
});

function colorManager(backgroundColor) {
    isRGBA(backgroundColor);
    var hexBackgroundColor = RGBA_To_Hex(backgroundColor);
    isHexColor = hexBackgroundColor => typeof hexBackgroundColor === 'string' && hexBackgroundColor.length === (6 || 8) && !isNaN(Number('0x' + hexBackgroundColor))
    if (isHexColor) {
        if (hexBackgroundColor == ("#ffffff")) {
            $(this).css("background-color", "#fffff8");
        }
    }
};

function isRGBA(input) {
    var re = /^ (?: #(?: [A - Fa - f0 - 9]{ 3 }) { 1, 2 }| (?: rgb[(](?: \s * 0 * (?: \d\d ? (?: \.\d +) ? (?: \s *%)?|\.\d +\s *%| 100(?: \.0 *) ?\s *%| (?: 1\d\d | 2[0 - 4]\d | 25[0 - 5]) (?: \.\d +)?) \s * (?:, (? ![)]) | (?= [)]))) { 3 }| hsl[(]\s * 0 * (?: [12] ?\d{ 1, 2 }| 3(?: [0 - 5]\d | 60)) \s * (?: \s *, \s * 0 * (?: \d\d ? (?: \.\d +)?\s *%|\.\d +\s *%| 100(?: \.0 *) ?\s *%)) { 2 } \s *| (?: rgba[(](?: \s * 0 * (?: \d\d ? (?: \.\d +) ? (?: \s *%)?|\.\d +\s *%| 100(?: \.0 *) ?\s *%| (?: 1\d\d | 2[0 - 4]\d | 25[0 - 5]) (?: \.\d +)?) \s *,) { 3 }| hsla[(]\s * 0 * (?: [12] ?\d{ 1, 2 }| 3(?: [0 - 5]\d | 60)) \s * (?: \s *, \s * 0 * (?: \d\d ? (?: \.\d +)?\s *%|\.\d +\s *%| 100(?: \.0 *) ?\s *%)) { 2 } \s *,) \s * 0 * (?: \.\d +| 1(?: \.0 *) ?) \s *)[)]) $/
    var output = re.exec(input);
    console.log(output);
}

function RGBA_To_Hex(rgba) {
    
    let sep = rgba.indexOf(",") > -1 ? "," : " ";
    rgba = rgba.substr(4).split(")")[0].split(sep);
    let r = (+rgba[0]).toString(16),
        g = (+rgba[1]).toString(16),
        b = (+rgba[2]).toString(16),
        a = (+rgba[3]).toString(16);
    console.log("R: " + r);
    console.log("G: " + g);
    console.log("B: " + b);
    console.log("A: " + a);
    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;
    if (a.length == 1) {
        a = "0" + a;
        return "#" + r + g + b + a;
    }
    return "#" + r + g + b;
};

function addHexColor(c1, c2) {
    var overflow = additionDoesOverflow(parseInt(c1, 16), parseInt(c2, 16))
    if (overflow == true) {
        var hexValue = parseInt(c1, 16) + parseInt(c2, 16);
        var hexStr = (hexValue).toString(16);
        while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
        return hexStr;
    }
    return backgroundColorChange;
};
function additionDoesOverflow(a, b) {
  var c = a + b;
  return a !== c-b || b !== c-a;
};
function removeExtraSpaces(string){ return string.replace(/\s{2,}/g, ' ');}

function freezeGif(img) {
    var width = img.width,
    height = img.height,
    canvas = createElement('canvas', function(clone) {
        clone.width = width;
        clone.height = height;
    }),
    attr,
    i = 0;

    var freeze = function() {
        canvas.getContext('2d').drawImage(img, 0, 0, width, height);

        for (i = 0; i < img.attributes.length; i++) {
            attr = img.attributes[i];

            if (attr.name !== '"') { // test for invalid attributes
                canvas.setAttribute(attr.name, attr.value);
            }
        }

        canvas.style.position = 'absolute';

        img.parentNode.insertBefore(canvas, img);
        img.style.opacity = 0;
    };

    if (img.complete) {
        freeze();
    } else {
        img.addEventListener('load', freeze, true);
    }
}

function freezeAllGifs() {
    return new Array().slice.apply(document.images).map(freezeGif);
}


