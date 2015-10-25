console.log("Sanity Check: JS is working!");


var loser;
$(document).ready(function(){


//Player 1 Loser
var getLoser = function() {
	var loser;

	var playerOneName = $("#player-one-input").val();
	var playerTwoName = $("#player-two-input").val();
	var playerOneDare = $("#dare").val();
	var playerTwoOdds = parseInt($("#odds").val(), 10);
	var playerOneChoice = parseInt($("#player-one-number").val(), 10);
	var playerTwoChoice = parseInt($("#player-two-number").val(), 10);
	var loserAlert = $("#loser");
	var publicFeed = $("#upload"); 


	if (playerOneChoice + playerTwoChoice == playerTwoOdds){
		loser = playerOneName;
	}
	else if (playerOneChoice == playerTwoChoice) {
		loser = playerTwoName;
		console.log(playerTwoName);
	}

	else if (playerTwoOdds == 2 && playerOneChoice == 1 && playerTwoChoice == 2) {
		loser = $playerOneName;

	}

	else if (playerTwoOdds == 2 && playerOneChoice == 2 && playerTwoChoice == 1) {
		loser = playerOneName;

	}
	else {
		loser = "tie";
	}
	
	return loser;

};





var playButton = $("#play-the-game");

playButton.click(function() {
	getLoser();

	var oneName = document.getElementById("player-one-input").value;
	var twoName = document.getElementById("player-two-input").value;
	var dare = document.getElementById("dare").value;
	var playerOneName = $("#player-one-input").val();
	var playerTwoName = $("#player-two-input").val();
	var playerOneDare = $("#dare").val();
	

	$("#loserOne").html(oneName + " loses to " + twoName + " and has to " + dare);
	
	$("#loserTwo").html(twoName + " loses to " + oneName + " and has to " + dare);
	
	console.log(loser);
	if (loser = playerOneName) {
		$("#loserOne").show();
	}

	else {
		$("#loserTwo").show();
	}



});


});



/*
	if (loser = playerOneName) {
		$(playerOneLoses).show('slow', function() {
		}
	}

	*/








//Validate Player 1 Name (cap on number of letters,)

//Validate Player 2 Name (cap on number of letters)

//Validate Dare Input (cap # of letters, create dare as a variable)

//Validate Odds Input (only allow numbers, between 1-50, else return an error)

//Validate Player 1 Number Choice (must be within the "odds-input")

//Validate Player 2 Number Choice (must be within the "odds-input")

//Play The Game Button
    //Compare Player 1 Number Choice to Player 2 Number Choice
    	//if the numbers are the same than Player 2 loses
    	//else if the numbers are different, but adds up to "odds-input" than Player 1 Loses
    	//else the numbers are different...'TIE'

    	//if the "odds input" is 1/2 than there will be a guranteed loser
    		//if "Player 1 Number Choice" = Player 2 Number Choice"
    			//return Player 2 Loses
    		//else (if the numbers are different)
    			//return Player 1 Loses 








/*
	IDs

	Player 1 Input = player-one-input
	Player 2 Input = player-two-input

	Player 1 Dare Input = dare
	Player 2 Odds Input = odds

	Player 1 Number = player-one-number
	Player 2 Number = player-two-number

	Play The Game Button = play-the-game

	Who Lost Alert = loser
	Upload to Odds Feed = upload
	*/





