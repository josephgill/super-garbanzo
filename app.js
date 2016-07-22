
// var loop = false
 //var turn = 0 
// while (turn<4){
	//if (turn % 2 == 0){
 		//console.log("Its player 1's turn");
 	//}
	//else{
		//console.log("Its player 2's turn");
// 		}
//	var move = prompt("What would you like your move to be ?")
//     console.log(piece,"to",move)
 	//turn = turn+1
//     loop = true
// }$( document ).ready(function() {


 
    //alert( "welcome" );
 
//isLegalMove(fromId, toId, $("[data-square-id=" + fromId + "]").find('.piece'))

$( document ).ready(function() {
var clickcount = 0;

	var fromId,
		toId;
	var turn = 0

	$( ".square" ).click(function( event ) {

    	event.preventDefault();

    	// Check if the click count is 0
    	if (clickcount===0){

	    	// set the from variable
	    	fromId = $(this).attr("data-square-id");
	    	// increase the click count by 1
	    	clickcount = clickcount+1;


    	}
    	else if(clickcount===1){

			// Check if the click count is 1
			toId = $(this).attr("data-square-id");

			// set the to variable
			// set click count to 0
			clickcount = 0;

			// Check if there is a piece inside the 'from' square
			if($("[data-square-id=" + fromId + "]").find('.piece').length === 1) {

				if(isLegalMove(fromId, toId, $("[data-square-id=" + fromId + "]").find('.piece'))) {

					// Move piece from first to second square
					$("[data-square-id=" + fromId + "]").find('.piece').appendTo( $("[data-square-id=" + toId + "]"));

				}

			}

		}
	});
	function isLegalMove(fromId, toId, piece) {

		var isLegal = true,
			colour;

		// figoure out the color
		var foward,
		piececolour;
		var num = 0;
		var number = 0;
		number = parseInt(number)
		var fromIdnumbermid;
		var fromIdnumber = fromId.substring(1,2);
		var toIdnumber = toId.substring(1,2);
		fromIdnumber = parseInt(fromIdnumber);
		toIdnumber = parseInt(toIdnumber);
		fromIdletter = fromId.substring(0,1)
		toIdletter = toId.substring(0,1)
		var isLegalfoward = false
		var islegalm= false

		
		if(($(".piece").hasClass("piece--white--king"))||($(".piece").hasClass("piece--black--king"))) {			
			if(fromIdnumber !== toIdnumber+1&&(fromIdnumber !== toIdnumber-1)){
				isLegal= false;

			}
		}else if ($(piece).hasClass("piece--white")){
			piececolour = "white"
			players = "player 1"
		}
		else if ($(piece).hasClass("piece--black")){
			piececolour = "black";
			players = "player 2"
		}
		
		// IF piece is king

		 if (piececolour === "white"){
			// Check if it's trying to move more than 1 space
			// forwards or backwards

			if(fromIdnumber !== toIdnumber+1) {
				isLegal= false;
				num = num+2;
			}
		} else if (piececolour === "black"){

			if(fromIdnumber !== toIdnumber-1){
				isLegal= false;
				num=num-2;
			}

		}


	

		if($("[data-square-id=" + toId + "]" ).hasClass("white")) {
			colour =  "white";
		} else {
			colour = "black";
		}

		if (colour === "white"){
			isLegal = false;
		}



		if (toIdletter === 'A'){
			toIdletter=1
		}
		else if (toIdletter === 'B'){
			toIdletter=2
			}
		else if (toIdletter === 'C'){
			toIdletter=3
			}

		else if (toIdletter === 'D'){
			toIdletter=4
			}
		else if (toIdletter === 'E'){
			toIdletter=5
			}
		else if (toIdletter === 'F'){
			toIdletter=6
			}
		else if (toIdletter === 'G'){
			toIdletter=7
			}
		else if (toIdletter === 'H'){
			toIdletter=8
			}
		if (fromIdletter === 'A'){
			fromIdletter=1
		}
		else if (fromIdletter === 'B'){
			fromIdletter=2
			}
		else if (fromIdletter === 'C'){
			fromIdletter=3
			}

		else if (fromIdletter === 'D'){
			fromIdletter=4
			}
		else if (fromIdletter === 'E'){
			fromIdletter=5
			}
		else if (fromIdletter === 'F'){
			fromIdletter=6
			}
		else if (fromIdletter === 'G'){
			fromIdletter=7
			}
		else if (fromIdletter === 'H'){
			fromIdletter=8
			}
		if ((fromIdnumber < toIdnumber)){
			number = number+1
		}
		if (fromIdnumber > toIdnumber){
			number=number-1;
		} 
		toIdletter = parseInt(toIdletter);
		fromIdletter = parseInt(fromIdletter);
		if (fromIdletter > toIdletter){
			num =-1
		} 
		if (fromIdletter < toIdletter){
			num = 1
		} 
		if (fromIdletter!==toIdletter+1&&fromIdletter!==toIdletter-1){
			isLegal = false;
		}

			
		if ($("[data-square-id=" + toId + "]").find('.piece').length === 1){
			isLegal = false;
			console.log(isLegal)

		}

		var fromIdlettermid = fromIdletter + num


		if (fromIdlettermid === 1){
			fromIdlettermid='A'
		}
		else if (fromIdlettermid ===  2){
			fromIdlettermid='B'
			}
		else if (fromIdlettermid === 3){
			fromIdlettermid='C'
			}

		else if (fromIdlettermid === 4){
			fromIdlettermid='D'
			}
		else if (fromIdlettermid === 5){
			fromIdlettermid='E'
			}
		else if (fromIdlettermid === 6){
			fromIdlettermid='F'
			}
		else if (fromIdlettermid === 7){
			fromIdlettermid='G'
			}
		else if (fromIdlettermid === 8){
			fromIdlettermid='H'
			}


		var fromIdnumbermid = fromIdnumber+number;
		var complete = fromIdlettermid+fromIdnumbermid;

		// If the user is moving two squares diagonally
		
		if(fromIdletter === toIdletter+2 ||fromIdletter === toIdletter-2 &&fromIdnumber === toIdnumber+2 ||fromIdnumber === toIdnumber-2) {

			console.log('DEBUG: User is moving two squares.');

			// Does the middle square contain a piece?
			if ($("[data-square-id=" + complete + "]").find('.piece').length===1) {
				console.log(isLegal)

				var middle = ('DEBUG: Middle square contains piece.');
				console.log(middle)
				$("[data-square-id=" + fromId + "]").find('.piece').appendTo( $("[data-square-id=" + toId + "]"))
				
				console.log('COMPLETE: ' + complete);
				$("[data-square-id=" + complete + "]").find('.piece').remove();
			
				// Remove the piece


			}

		}

		if ($(".whiteking").find('.piece--white').length === 1){
			$( ".whiteking").find('.piece--white').addClass( "piece--white--king" );

		}
		if ($(".blackking").find('.piece--black').length === 1){
			$( ".blackking").find('.piece--black').addClass( "piece--black--king" );
		}
		return isLegal;
	}






	// is a white piece been on the white king line.
	// if yes change the white piece to a white king.
	// is the black piece on the black piece line.
	// if yes change the black piece to a black king.


});
