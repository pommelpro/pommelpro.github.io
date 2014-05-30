
$(document).ready( function() {

	$('body').hide().fadeIn(1000);
	
	var ranNum = Math.floor((Math.random() * 2));
	console.log(ranNum);

    $('#moveon').click(function() {
        window.location.href = "htmlspecific.html";
    });

/*
    $('#moveon').click(function () {
        if (ranNum) { window.location.href = "htmlspecific.html"; }
        else { window.location.href = "htmlabc.html"; }
    });
    */
});
