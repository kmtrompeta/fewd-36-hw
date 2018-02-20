var theScore = 0;


// Function to add 5
function addFive () {
	theScore = 5 + theScore;
	jQuery("#result").text(theScore);

}


// Function to add 10
function addTen () {
	// theScore = 10 + theScore;
	theScore += 10;
	jQuery("#result").text(theScore);

}



// Function to stubtract 1
function subTractTen () {
	theScore = theScore - 1;
	jQuery("#result").text(theScore);

}


// Function to reset to zero
function resetToZero () {
	theScore = 0;
	jQuery("#result").text(theScore);
}

jQuery(document).ready(function(){
	

	jQuery("#add5") .click(addFive);
	jQuery("#add10") .click(addTen);
	jQuery("#sub1") .click(subTractTen);
	jQuery("#zero") .click(resetToZero);

	});
