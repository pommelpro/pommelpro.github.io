var buswait = new Array();
var elid = 0;
var score = 0;
var count0 = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;
var count7 = 0;




buswait[0] = "img/baby.gif";
buswait[1] = "img/babyleash.jpg";
buswait[2] = "img/business.jpg";
buswait[3] = "img/dog.bmp";
buswait[4] = "img/dumpster.jpg";
buswait[5] = "img/foodtruck.jpg";
buswait[6] = "img/oldman.jpeg";
buswait[7] = "img/schoolbus.gif";
buswait[8] = "img/starbucks.jpg";
buswait[9] = "img/check.jpg";




function showPosition(position)
{
	$('#trackloc').html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}

function fillgrid() {
	for(var i = 0; i < buswait.length; i++){
		$('#pic' + i).attr('src',buswait[i]);
	}
}

function changeColor() {
	var $el = $("#score"),
		x = 500,
		originalColor = $el.css("color");
	$el.css("color", "#00FF00");
	setTimeout(function(){
	  $el.css("color", originalColor);
	}, x);
}






$(document).ready(

	function()
	{
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		}
	else {
		$('#trackloc').html("Geolocation is not supported by this browser.");
	}

	$('body').hide().fadeIn(1000);
	$('#score').html("Score: " + score);
	$(function() {
	  fillgrid();									//execute fill grid
	});

	$( "#pic0" ).click(function() {					//on click, add to score and change picture
		$('#pic0').attr('src',buswait[9]);
		if(count0 != 1) {
			score++;
			$('#score').html("Score: " + score);
			count0 = 1;
			changeColor();							//changing color of the score for .5 seconds
		}
	});
	$( "#pic1" ).click(function() {
		$('#pic1').attr('src',buswait[9]);
		if(count1 != 1) {
			score++;
			$('#score').html("Score: " + score);
			count1 = 1;
			changeColor();
		}
	});
	$( "#pic2" ).click(function() {
		$('#pic2').attr('src',buswait[9]);
		if(count2 != 1) {
			score++;
			$('#score').html("Score: " + score);
			count2 = 1;
			changeColor();
		}
	});
	$( "#pic3" ).click(function() {
		$('#pic3').attr('src',buswait[9]);
		if(count3 != 1) {
			score++;
			$('#score').html("Score: " + score);
			count3 = 1;
			changeColor();
		}
	});
	$( "#pic4" ).click(function() {
		$('#pic4').attr('src',buswait[9]);
		if(count4 != 1) {
			score++;
			$('#score').html("Score: " + score);
			count4 = 1;
			changeColor();
		}
	});
	$( "#pic5" ).click(function() {
		$('#pic5').attr('src',buswait[9]);
		if(count5 != 1) {
			score++;
			$('#score').html("Score: " + score);
			count5 = 1;
			changeColor();
		}
	});
	$( "#pic6" ).click(function() {
		$('#pic6').attr('src',buswait[9]);
		if(count6 != 1) {
			score++;
			$('#score').html("Score: " + score);
			count6 = 1;
			changeColor();
		}
	});
	$( "#pic7" ).click(function() {
		$('#pic7').attr('src',buswait[9]);
		if(count7 != 1) {
			score++;
			$('#score').html("Score: " + score);
			count7 = 1;
			changeColor();
		}
	});

});
