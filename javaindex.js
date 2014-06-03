
$(document).ready( function() {

	$('body').hide().fadeIn(1000);
	
	var ranNum = Math.floor((Math.random() * 3) + 1);
	console.log(ranNum);

	$('#moveon').click(function () {
	    if (ranNum == 1) { window.location.href = "htmlrandom.html" }
	    else if (ranNum == 2) { window.location.href = "htmlspecific.html" }
	    else if (ranNum == 3) { window.location.href = "htmlabc.html" }
    });

/*
    $('#moveon').click(function () {
        if (ranNum) { window.location.href = "htmlspecific.html"; }
        else { window.location.href = "htmlabc.html"; }
    });
    */
});
