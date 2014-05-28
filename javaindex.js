
$(document).ready( function() {

	$('body').hide().fadeIn(1000);
	
	var ranNum = Math.floor((Math.random() * 2));
	console.log(ranNum);

    $('#moveon').click(function() {
        if (ranNum) { window.location.href = "htmlabctimed.html"; }
        else { window.location.href = "htmlabc.html"; }
    });
});
