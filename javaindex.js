
$(document).ready( function() {

	$('body').hide().fadeIn(1000);
// generates a random number to see which game to play
	var ranNum = Math.floor((Math.random() * 2) + 1);
	console.log(ranNum);
// if it's 1, 2, or 3 then go to corresponding file
	$('#moveon').click(function () {
	    if (ranNum == 1) { window.location.href = "htmlrandom.html" }
	    else if (ranNum == 2) { window.location.href = "htmlspecific.html" }
    });

});
