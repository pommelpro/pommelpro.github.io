
$(document).ready( function() {

	$('body').hide().fadeIn(1000);
	

	var ranNum = Math.floor((Math.random() * 2));
	console.log(ranNum);



    $('#moveon').click(function() {
        if (ranNum) { window.location.href = "timedABC.html"; }
        else { window.location.href = "tictactoeABC.html"; }
    });

});
