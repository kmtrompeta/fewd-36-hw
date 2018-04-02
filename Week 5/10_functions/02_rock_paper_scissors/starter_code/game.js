



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
	var computerChoice = Math.random();
	if(computerChoice < 0.333) {
		return 'rock';

	}else if(computerChoiceNumber < 0.667){
		return 'paper';

	}else if{
			return 'scissors';
	}
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compareTheGame(me, opponent) {
	
	jQuery('#computerSelection').text(opponent);



	//Determine who wins

if(me===opponent){
        return 'Tie';
    } else if(me === 'rock') {

        if (opponent === 'paper') {
            return 'My rock lost to paper :(';
        } else if (opponent === 'scissors') {
            return 'My rock crushed scissors! >:)';
        }
   
    }else if(me == 'paper') {

    	if (opponent === 'scissors') {
    		return 'My paper lost to scissors :(';
    	} else if (opponent === 'rock')
    		return 'My paper crushed rock! >:)'
    }    







	//Display winner


};




jQuery( document ).ready(function() {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html

    jQuery("#scissors").click(function(e) {
    	e.preventDefault();
    	var computerPlayerChoice = computerChoice();


		// Compare Winner
    	compareTheGame('scissors',computerPlayerChoice);


});
