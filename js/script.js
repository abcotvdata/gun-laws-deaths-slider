/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//jquery code here

	// $(".slideything").slider({
	// 	// value: 40,
	// 	// min: 0,
	// 	// max: 100,
	// 	// step: 10,
	// 	// slide: function(e,ui){
	// 	// 	console.log(ui.value);
	// 	// 	$(".boxything").css(
	// 	// 		"width", ui.value + "%")

	// 	// }
	// });

	$(".slider").slider({
		value: 0,
		min: 0,
		max: 1,
		step: 0.01,
		slide: function(e,ui){
			console.log(ui.value);
		 	$(".photo2").css("opacity", ui.value)
		 	$(".photo1").css("opacity", (1-ui.value))

		 	if (ui.value < 0.5) {
		 		$(".photo1").css({'z-index':'2'})
		 		$(".photo2").css({'z-index':'1'})
		 	} else {
		 		$(".photo1").css({'z-index':'1'})
		 		$(".photo2").css({'z-index':'2'})
		 	}

		 }
	});


}); //end document.ready block
