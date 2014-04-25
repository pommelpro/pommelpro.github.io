var buswait = new Array();

var clicked = 0;
var score = 0;

buswait[0] = "img/baby.gif";
buswait[1] = "img/babyleash.jpg";
buswait[2] = "img/business.jpg";
buswait[3] = "img/dog.bmp";
buswait[4] = "img/dumpster.jpg";
buswait[5] = "img/foodtruck.jpg";
buswait[6] = "img/oldman.jpeg";
buswait[7] = "img/schoolbus.gif";
buswait[8] = "img/starbucks.jpg";
buswait[9] = "img/done.jpg";

function showPosition(position) {
    $('#trackloc').html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}

function showpic() {
    $('#pic').attr('src', buswait[clicked]);
    $('#YesNo').html("Score: " + score);
}



function changeColor() {
    var $el = $("#score"),
		x = 1000,
		originalColor = $el.css("color");
    $el.css("color", "#00FF00");
    setTimeout(function () {
        $el.css("color", originalColor);
    }, x);
}


$(document).ready(

	function () {

	    $('body').hide().fadeIn(1000);
	    showpic();
	    $('#success').click(function () {
	        if (clicked <= 8) {
	            clicked++;
	            score++;
	            showpic();
	        }
	    });
	    $('#danger').click(function () {
	        if (clicked <= 8) {
	            clicked++;
	            score--;
	            showpic();
	        }
	    });

	

	});
