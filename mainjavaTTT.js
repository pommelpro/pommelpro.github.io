var buswait = new Array();

var count0 = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;
var count7 = 0;
var count8 = 0;

var turns = 0;

buswait[0] = "img/baby.gif";
buswait[1] = "img/babyleash.jpg";
buswait[2] = "img/business.jpg";
buswait[3] = "img/dog.bmp";
buswait[4] = "img/dumpster.jpg";
buswait[5] = "img/foodtruck.jpg";
buswait[6] = "img/oldman.jpeg";
buswait[7] = "img/schoolbus.gif";
buswait[8] = "img/starbucks.jpg";
buswait[9] = "img/redX.jpg";
buswait[10] = "img/greenO.jpg";

function showPosition(position) {
    $('#trackloc').html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}

function fillgrid() {
    for (var i = 0; i < buswait.length; i++) {
        $('#pic' + i).attr('src', buswait[i]);
    }
}

function whosturn() {
    if (turns == 0)
        $('#switcher').html("Turn: Player 1");
    else { $('#switcher').html("Turn: Player 2"); }
}


function changeColor() {
    var $el = $("#score"),
		x = 500,
		originalColor = $el.css("color");
    $el.css("color", "#00FF00");
    setTimeout(function () {
        $el.css("color", originalColor);
    }, x);
}


$(document).ready(

	function () {
//	    if (navigator.geolocation) {
//	        navigator.geolocation.getCurrentPosition(showPosition);
//	    }
//	    else {
//	        $('#trackloc').html("Geolocation is not supported by this browser.");
//	    }

	    $('body').hide().fadeIn(1000);
	    
	    $(function () {
	        fillgrid();     //execute fill grid
	        whosturn();
	    });

	    $("#pic0").click(function () {					//on click, add to score and change picture
	        if (count0 != 1) {
	            if (turns == 0) {
	                $('#pic0').attr('src', buswait[10]);
	                turns = 1;
	                count0 = 1;
	                changeColor();							//changing color of the score for .5 seconds
	                whosturn();
	            }
	            else {
	                $('#pic0').attr('src', buswait[9]);
	                count0 = 1;
	                changeColor();
	                turns = 0;
	                whosturn();
	            }
            }
	    });
	    $("#pic1").click(function () {
	        if (count1 != 1) {
	            if (turns == 0) {
	                $('#pic1').attr('src', buswait[10]);
	                count1 = 1;
	                changeColor();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic1').attr('src', buswait[9]);
	                count1 = 1;
	                changeColor();
	                turns = 0;
	                whosturn();
	            }
	        }
	    });
	    $("#pic2").click(function () {
	        if (count2 != 1) {
	            if (turns == 0) {
	                $('#pic2').attr('src', buswait[10]);
	                count2 = 1;
	                changeColor();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic2').attr('src', buswait[9]);
	                count2 = 1;
	                changeColor();
	                turns = 0;
	                whosturn();
	            }
	        }
	    });
	    $("#pic3").click(function () {
	        if (count3 != 1) {
	            if (turns == 0) {
	                $('#pic3').attr('src', buswait[10]);
	                count3 = 1;
	                changeColor();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic3').attr('src', buswait[9]);
	                count3 = 1;
	                changeColor();
	                turns = 0;
	                whosturn();
	            }
	        }
	    });
	    $("#pic4").click(function () {
	        if (count4 != 1) {
	            if (turns == 0) {
	                $('#pic4').attr('src', buswait[10]);
	                count4 = 1;
	                changeColor();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic4').attr('src', buswait[9]);
	                count4 = 1;
	                changeColor();
	                turns = 0;
	                whosturn();
	            }
	        }
	    });
	    $("#pic5").click(function () {
	        if (count5 != 1) {
	            if (turns == 0) {
	                $('#pic5').attr('src', buswait[10]);
	                count5 = 1;
	                changeColor();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic5').attr('src', buswait[9]);
	                count5 = 1;
	                changeColor();
	                turns = 0;
	                whosturn();
	            }
	        }
	    });
	    $("#pic6").click(function () {
	        if (count6 != 1) {
	            if (turns == 0) {
	                $('#pic6').attr('src', buswait[10]);
	                count6 = 1;
	                changeColor();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic6').attr('src', buswait[9]);
	                count6 = 1;
	                changeColor();
	                turns = 0;
	                whosturn();
	            }
	        }
	    });
	    $("#pic7").click(function () {
	        if (count7 != 1) {
	            if (turns == 0) {
	                $('#pic7').attr('src', buswait[10]);
	                count7 = 1;
	                changeColor();
	                turns = 1;
	            }
	            else {
	                $('#pic7').attr('src', buswait[9]);
	                count7 = 1;
	                changeColor();
	                turns = 0;
	            }
	        }
	    });
	    $("#pic8").click(function () {
	        if (count8 != 1) {
	            if (turns == 0) {
	                $('#pic8').attr('src', buswait[10]);
	                count8 = 1;
	                changeColor();
	                turns = 1;
	            }
	            else {
	                $('#pic8').attr('src', buswait[9]);
	                count8 = 1;
	                changeColor();
	                turns = 0;
	            }
	        }
	    });



	});
