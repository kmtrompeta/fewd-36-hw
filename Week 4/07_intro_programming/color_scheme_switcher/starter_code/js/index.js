
document.getElementById("grayButton") .onclick = grayClick;
document.getElementById("whiteButton") .onclick = whiteClick;

function grayClick () {
	// background of body to turn gray
	document.body.style.backgroundColor="#909090";
	// turn text color white
	document.body.style.color="white";

} //grayClick

function whiteClick () {
	// background of body to turn gray
	document.body.style.backgroundColor="white";
	// turn text color white
	document.body.style.color="black";


} //whiteClick