var buswait = new Array();
var titles = new Array();

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

titles[0] = "Baby";
titles[1] = "Baby on Leash";
titles[2] = "Business Man";
titles[3] = "Dog";
titles[4] = "Full Dumpster";
titles[5] = "Food Truck";
titles[6] = "Elderly Man";
titles[7] = "School Bus";
titles[8] = "Starbucks";

function showPosition(position)
{
	$('#trackloc').html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}

function fillgrid() {
	for(var i = 0; i < buswait.length; i++){
		$('#pic' + i).attr('src',buswait[i]);
		$('#title' + i).html(titles[i]);
	}
}

function changeColor() {
	var $el = $("#score"),
		x = 300,
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
		if(count0 < 8) {
			count0+= 2;
			$('#pic0').css('opacity',count0/10);
			score++;
			$('#score').html("Score: " + score);
			changeColor();							//changing color of the score for .5 seconds
		}
		else if(count0 == 8){
			count0+= 2;
			score++;
			$('#pic0').attr('src',buswait[9]);
			$('#score').html("Score: " + score);
			changeColor()
		}
	});
	$( "#pic1" ).click(function() {
		if(count1 < 8) {
			count1+= 2;
			$('#pic1').css('opacity',count1/10);
			score++;
			$('#score').html("Score: " + score);
			changeColor();
		}
		else if(count1 == 8){
			count1+= 2;
			score++;
			$('#pic1').attr('src',buswait[9]);
			$('#score').html("Score: " + score);
			changeColor()
		}
	});
	$( "#pic2" ).click(function() {
		if(count2 < 8) {
			count2+= 2;
			$('#pic2').css('opacity',count2/10);
			score++;
			$('#score').html("Score: " + score);
			changeColor();
		}
		else if(count2 == 8){
			count2+= 2;
			score++;
			$('#pic2').attr('src',buswait[9]);
			$('#score').html("Score: " + score);
			changeColor()
		}
	});
	$( "#pic3" ).click(function() {
		if(count3 < 8) {
			count3+= 2;
			$('#pic3').css('opacity',count3/10);
			score++;
			$('#score').html("Score: " + score);
			changeColor();
		}
		else if(count3 == 8){
			count3+= 2;
			score++;
			$('#pic3').attr('src',buswait[9]);
			$('#score').html("Score: " + score);
			changeColor()
		}
	});
	$( "#pic4" ).click(function() {
		if(count4 < 8) {
			count4+= 2;
			$('#pic4').css('opacity',count4/10);
			score++;
			$('#score').html("Score: " + score);
			changeColor();
		}
		else if(count4 == 8){
			count4+= 2;
			score++;
			$('#pic4').attr('src',buswait[9]);
			$('#score').html("Score: " + score);
			changeColor()
		}
	});
	$( "#pic5" ).click(function() {
		if(count5 < 8) {
			count5+= 2;
			$('#pic5').css('opacity',count5/10);
			score++;
			$('#score').html("Score: " + score);
			changeColor();
		}
		else if(count5 == 8){
			count5+= 2;
			score++;
			$('#pic5').attr('src',buswait[9]);
			$('#score').html("Score: " + score);
			changeColor()
		}
	});
	$( "#pic6" ).click(function() {
		if(count6 < 8) {
			count6+= 2;
			$('#pic6').css('opacity',count6/10);
			score++;
			$('#score').html("Score: " + score);
			changeColor();
		}
		else if(count6 == 8){
			count6+= 2;
			score++;
			$('#pic6').attr('src',buswait[9]);
			$('#score').html("Score: " + score);
			changeColor()
		}
	});
	$( "#pic7" ).click(function() {
		if(count7 < 8) {
			count7+= 2;
			$('#pic7').css('opacity',count7/10);
			score++;
			$('#score').html("Score: " + score);
			changeColor();
		}
		else if(count7 == 8){
			count7+= 2;
			score++;
			$('#pic7').attr('src',buswait[9]);
			$('#score').html("Score: " + score);
			changeColor()
		}
	});


});
