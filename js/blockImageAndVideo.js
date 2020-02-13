$(function() {
    var attrs = { };

    hideImageInputs();
    hideVideoInputs();
});

//Input (Images, Gif, Video) Hiding Code
function hideImageInputs() {
    return new Array().slice.apply(document.images).map(hideInput);
}

function hideVideoInputs() {
    return new Array().slice.apply(document.getElementsByTagName('video')).map(hideYouTubeVideoInput);
}


//YouTube PoC
function hideYouTubeVideoInput(input) {
    if ((input.parentNode.parentNode.parentNode.className != "canvas")
            ||  !IsNullOrWhiteSpace(input.getAttribute("hideInputDisabled"))) {
        input.pause();
        
        var inputHider = document.createElement('canvas');
        inputHider.className = "canvas";

        var hide = function() {

            var style = input.getAttribute("style");
            inputHider.setAttribute("style", style);
            inputHider.style.margin = "auto";

            var ctx = inputHider.getContext('2d');
            ctx.fillStyle = '#CDCDCD';
            ctx.fillRect(0, 0, inputHider.width, inputHider.height);

            var fontSize = determineFontSize(inputHider);

            if (fontSize >= 8) {
                ctx.font =  fontSize + 'px Arial';
                ctx.fillStyle = '#444444';
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.fillText("(View Hidden)", inputHider.width/2, inputHider.height/2);
            }

            input.parentNode.parentNode.parentNode.insertBefore(inputHider, input.parentNode.parentNode);
            inputHider.parentNode.removeChild(input.parentNode.parentNode);
            inputHider.appendChild(input.parentNode.parentNode);

            inputHider.addEventListener('click',
            anonFunction = function(event) {
                event.preventDefault();
                youTubeCanvasHider(inputHider, input);
            }, {passive : false, once : true});

            inputHider.style.width = '100%';
        };

        if (input.style.height != 0) {
            hide();
        }
    }//end if
}

function youTubeCanvasHider(inputHider, input) {
    input.setAttribute("hideInputDisabled", "true");
    inputHider.removeChild(input.parentNode.parentNode);
    inputHider.parentNode.insertBefore(input.parentNode.parentNode, inputHider);
    inputHider.parentNode.removeChild(inputHider);
}
//end YouTube PoC



function hideVideoInput(input) {
    if ((input.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className != "canvas")
            ||  !IsNullOrWhiteSpace(input.getAttribute("hideInputDisabled"))) {
        input.pause();
        
        var inputHider = document.createElement('canvas');
        inputHider.className = "canvas";

        var hide = function() {
            // inputHider.style.width = input.style.width;
            // inputHider.style.height = input.style.height;
            // inputHider.style.right = input.style.right;
            // inputHider.style.left = input.style.left;
            // inputHider.style.top = input.style.top;
            // inputHider.style.bottom = input.style.bottom;

            var style = input.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("style");
            inputHider.setAttribute("style", style);

            var ctx = inputHider.getContext('2d');
            ctx.fillStyle = '#CDCDCD';
            ctx.fillRect(0, 0, inputHider.width, inputHider.height);

            var fontSize = determineFontSize(inputHider);

            if (fontSize >= 8) {
                ctx.font =  fontSize + 'px Arial';
                ctx.fillStyle = '#444444';
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.fillText("(View Hidden)", inputHider.width/2, inputHider.height/2);
            }

            input.parentNode.insertBefore(inputHider, input);
            inputHider.parentNode.removeChild(input);
            inputHider.appendChild(input);

            var originalOpacity = input.style.opacity;

            inputHider.addEventListener('click',
            anonFunction = function(event) {
                event.preventDefault();
                canvasHider(inputHider, input, originalOpacity);
            }, {passive : false, once : true});
        };

        if (input.style.height != 0) {
            hide();
        }
    }//end if
}

function hideInput(input) {
    if ((input.parentNode.className != "canvas") ||  !IsNullOrWhiteSpace(input.getAttribute("hideInputDisabled"))) {
        var inputHider = document.createElement('canvas');
        inputHider.className = "canvas";

        var hide = function() {
            inputHider.width = input.width;
            inputHider.height = input.height;

            var ctx = inputHider.getContext('2d');
            ctx.fillStyle = '#CDCDCD';
            ctx.fillRect(0, 0, inputHider.width, inputHider.height);

            var fontSize = determineFontSize(inputHider);

            if (fontSize >= 8) {
                ctx.font =  fontSize + 'px monospace';
                ctx.fillStyle = '#444444';
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.fillText("(View Hidden)", inputHider.width/2, inputHider.height/2);
            }

            input.parentNode.insertBefore(inputHider, input);
            inputHider.parentNode.removeChild(input);
            inputHider.appendChild(input);

            var originalOpacity = input.style.opacity;

            input.style.opacity = 0;
            inputHider.addEventListener('click',
            anonFunction = function(event) {
                event.preventDefault();
                canvasHider(inputHider, input, originalOpacity);
            }, {passive : false, once : true});
        };

        if (input.complete && ((input.height > 0) || (input.style.height >= 0))) {
            hide();
        }
    }//end if
}//end hideInput

function canvasHider(inputHider, input, originalOpacity) {
    input.style.opacity = originalOpacity;
    input.setAttribute("hideInputDisabled", "true");
    inputHider.removeChild(input);
    inputHider.parentNode.insertBefore(input, inputHider);
    inputHider.parentNode.removeChild(inputHider);
    inputHider.removeEventListener('click', anonFunction);
}
//end Input Hiding Code


//Util Code
function determineFontSize(inputHider) {
    var fontSize = inputHider.width/10;

    if (fontSize < 8) {
        fontSize = inputHider.width/20;
    }

    if (fontSize < 8) {
        fontSize = inputHider.width/35;
    }

    return Math.min(fontSize, 64); //maximum font size of 64pt
}

function IsNullOrWhiteSpace(str) {
    if ((str == null) || (str.trim() === '')){
        return true;
    }
}