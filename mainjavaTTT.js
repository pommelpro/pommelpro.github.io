var buswait = new Array();
var titles = new Array();

var count0 = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;
var count7 = 0;
var count8 = 0;

var zeroA = false;
var oneA = false;
var twoA = false;
var threeA = false;
var fourA = false;
var fiveA = false;
var sixA = false;
var sevenA = false;
var eightA = false;

var zeroB = false;
var oneB = false;
var twoB = false;
var threeB = false;
var fourB = false;
var fiveB = false;
var sixB = false;
var sevenB = false;
var eightB = false;


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

titles[0] = "Baby";
titles[1] = "Child on Leash";
titles[2] = "Man Wearing a Suit";
titles[3] = "Dog";
titles[4] = "Full Dumpster";
titles[5] = "Foodtruck";
titles[6] = "Elderly Man";
titles[7] = "School Bus";
titles[8] = "Starbucks Coffeehouse";

function fillgrid() {
    for (var i = 0; i < buswait.length; i++) {
        $('#pic' + i).attr('src', buswait[i]);
        $('#title' + i).html(titles[i]);
    }
}

function whosturn() {
    if (turns == 0)
        $('#switcher').html("Turn: Player 1");
    else if(turns == 1) { $('#switcher').html("Turn: Player 2"); }
}


var winner = 0;
function WinGame() {

    if (zeroA && oneA && twoA ||
        threeA && fourA && fiveA ||
        sixA && sevenA && eightA ||
        zeroA && threeA && sixA ||
        oneA && fourA && sevenA ||
        twoA && fiveA && eightA ||
        zeroA && fourA && eightA ||
        twoA && fourA && sixA ||
        zeroB && oneB && twoB ||
        threeB && fourB && fiveB ||
        sixB && sevenB && eightB ||
        zeroB && threeB && sixB ||
        oneB && fourB && sevenB ||
        twoB && fiveB && eightB ||
        zeroB && fourB && eightB ||
        twoB && fourB && sixB)
    {
        if (turns == 0) { winner = 10; }
        else { winner = 9; }
        for (var i = 0; i < buswait.length; i++) {
            $('#pic' + i).attr('src', buswait[winner]);
        }
        if (winner == 10) { $('#switcher').html("Player 1 Wins!!!"); }
        else if (winner == 9) { $('#switcher').html("Player 2 Wins!!!"); }
        turns = 10;
        count0 = 1;
        count1 = 1;
        count2 = 1;
        count3 = 1;
        count4 = 1;
        count5 = 1;
        count6 = 1;
        count7 = 1;
        count8 = 1;
    }

}


/*
_0_|_1_|_2_
_3_|_4_|_5_
_6_|_7_|_8_
*/

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
	    $('#reload').click(function () { location.reload() });
	    $("#pic0").click(function () {					//on click, add to score and change picture
	        if (count0 != 1) {
	            if (turns == 0) {
	                $('#pic0').attr('src', buswait[10]);
	                turns = 1;
	                count0 = 1;
	                zeroA = true;
	                WinGame();
	                whosturn();

	            }
	            else {
	                $('#pic0').attr('src', buswait[9]);
	                count0 = 1;
	                zeroB = true;
	                WinGame();
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
	                oneA = true;
	                WinGame();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic1').attr('src', buswait[9]);
	                count1 = 1;
	                oneB = true;
	                WinGame();
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
	                twoA = true;
	                WinGame();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic2').attr('src', buswait[9]);
	                count2 = 1;
	                twoB = true;
	                WinGame();
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
	                threeA = true;
	                WinGame();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic3').attr('src', buswait[9]);
	                count3 = 1;
	                threeB = true;
	                WinGame();
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
	                fourA = true;
	                WinGame();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic4').attr('src', buswait[9]);
	                count4 = 1;
	                fourB = true;
	                WinGame();
	                turns = 0;
	                whosturn();
	            }
	        }
	    });
	    $("#pic5").click(function () {
;
	        if (count5 != 1) {
	            if (turns == 0) {
	                $('#pic5').attr('src', buswait[10]);
	                count5 = 1;
	                fiveA = true;
	                WinGame()
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic5').attr('src', buswait[9]);
	                count5 = 1;
	                fiveB = true;
	                WinGame()
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
	                sixA = true;
	                WinGame();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic6').attr('src', buswait[9]);
	                count6 = 1;
	                sixB = true;
	                WinGame();;
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
	                sevenA = true;
	                WinGame();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic7').attr('src', buswait[9]);
	                count7 = 1;
	                sevenB = true;
	                WinGame();
	                turns = 0;
	                whosturn();
	            }
	        }
	    });
	    $("#pic8").click(function () {

	        if (count8 != 1) {
	            if (turns == 0) {
	                $('#pic8').attr('src', buswait[10]);
	                count8 = 1;
	                eightA = true;
	                WinGame();
	                turns = 1;
	                whosturn();
	            }
	            else {
	                $('#pic8').attr('src', buswait[9]);
	                count8 = 1;
	                eightB = true;
	                WinGame();
	                turns = 0;
	                whosturn();
	            }
	        }
	    });



	});
