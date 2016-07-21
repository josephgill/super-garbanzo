
// var loop = false
// var turn = 0 
// while (turn<4){
// 	if (turn % 2 == 0){
// 		console.log("Its player 1's turn");
// 	}
// 	else{
// 		console.log("Its player 2's turn");
// 		}
// 	var piece = prompt("what piece would you like to move(give coordinates)"
//	var move = prompt("What would you like your move to be ?")
//     console.log(piece,"to",move)
// 	turn = turn+1
//     loop = true
// }$( document ).ready(function() {


 
    //alert( "welcome" );
 
//isLegalMove(fromId, toId, $("[data-square-id=" + fromId + "]").find('.piece'))

$( document ).ready(function() {
var clickcount = 0;

	var fromId,
		toId;

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
		fromIdnumber = fromId.substring(1,2);
		toIdnumber = toId.substring(1,2);
		fromIdnumber = parseInt(fromIdnumber);
		toIdnumber = parseInt(toIdnumber);
		fromIdletter = fromId.substring(0,1)
		toIdletter = toId.substring(0,1)
		console.log(toIdletter)
		console.log(fromIdletter)
		var isLegalfoward = false
		var islegalm= false
		if ($(piece).hasClass("piece--white")){
			piececolour = "white"
		}
		else if (($(piece).hasClass("piece--black"))){
			piececolour = "black";
		}
		if (piececolour === "white"){
			if(fromIdnumber !== toIdnumber+1){

				isLegal= false;
			}
		}
		else if (piececolour === "black"){
			if(fromIdnumber !== toIdnumber-1){
				isLegal= false;
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
		
		toIdletter = parseInt(toIdletter);
		fromIdletter = parseInt(fromIdletter);

		if (fromIdletter!==toIdletter+1&&fromIdletter!==toIdletter-1)
			isLegal = false;
		// if (isLegalm === true){
		// 	if (isLegalfoward===true){
				
		// 	}
		// }
		if ($("[data-square-id=" + toId + "]").find('.piece').length === 1){
			isLegal = false;
		}

		return isLegal;

	}








});
