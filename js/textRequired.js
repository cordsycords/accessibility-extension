$(function () {
	var required_inputs = document.getElementsByTagName("input");
    for(var i=0;i<required_inputs.length;i++)
    {
        required_inputs[i].placeholder = "Required"
    }  
});
