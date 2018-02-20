jQuery("#submit") .click(function(){

// Get values
var a = jQuery("#a") .val();
var b = jQuery("#b") .val();


//If A > B show >

if(a > b) {
	jQuery("comparison") .text(">");
}


// If A < B show <

if(b > a) {
	jQuery("comparison") .text("<");
}


// If A = B show =

if(a == b) {
	jQuery("comparison") .text("==");
}

if(parseInt(a) == NaN) {
	jQuery("#comparison") .text("NaN")
}


});