var buswait = new Array();
var titles = new Array();
var complete = 0;

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


var endgame = "img/catgame.jpg";

titles[0] = "Windows Computer";
titles[1] = "TV";
titles[2] = "Haoqi";
titles[3] = "Undergraduate";
titles[4] = "Clock";
titles[5] = "Red Chair";
titles[6] = "Mac Computer";
titles[7] = "Blue Ball";
titles[8] = "Diabetes Bear";

function fillgrid() {
    for (var i = 0; i < buswait.length; i++) {
   //     $('#pic' + i).attr('src', buswait[i]);
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
    if (complete == 9) {
        for (var j = 0; j < buswait.length; j++) {
            $('#pic' + j).attr('src', endgame);
            $('#title' + j).html("Cat's Game");
        }
        $('#switcher').html("Cat's Game");
    }
    else if (zeroA && oneA && twoA ||
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
        twoB && fourB && sixB) {
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
    turns = 10;
}

function getActiveTarget() {
    //find which cell has the class active target
    var blah = $('.activeTarget').first();
    console.log(blah.attr('id'));
    return blah
}


/*
_0_|_1_|_2_
_3_|_4_|_5_
_6_|_7_|_8_
*/

$(document).ready(

	function () {


	    $(".spyTarget").click(function (event) { // triggers open file menu 
	        $(this).addClass("activeTarget");
	        $('#takePicture').trigger('click');
	        return false;

	    });

	    $('#takePicture').on('change', function (e) {
	        console.log("got to takePicture");
	        e.preventDefault();
	        if (this.files.length === 0) return;

	        var imageFile = this.files[0];
	        var activeTarget = getActiveTarget();
	        var imgURL = URL.createObjectURL(imageFile);
	        activeTarget.attr('src', imgURL);
//	        $(this).css('background-color', 'red');
	        activeTarget.removeClass('activeTarget');
	        
	    });


	    $('body').hide().fadeIn(1000);
	    
	    $(function () {
	        fillgrid();     //execute fill grid
	        whosturn();
	    });
/*
	    $("#pic0").click(function () {
	        if (count0 != 1) {
	            if (turns == 0) {
	                $('#pic0').attr('src', buswait[10]);
	                turns = 1;
	                count0 = 1;
	                zeroA = true;
	                complete++;
	                WinGame();
	                whosturn();
	            }
	            else {
	                $('#pic0').attr('src', buswait[9]);
	                count0 = 1;
	                zeroB = true;
	                complete++;
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
	                complete++;
	                WinGame();
	                turns = 1;
	                whosturn();
	                
	            }
	            else {
	                $('#pic1').attr('src', buswait[9]);
	                count1 = 1;
	                oneB = true;
	                complete++;
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
	                complete++;
	                WinGame();
	                turns = 1;
	                whosturn();
	               
	            }
	            else {
	                $('#pic2').attr('src', buswait[9]);
	                count2 = 1;
	                twoB = true;
	                complete++;
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
	                complete++;
	                WinGame();
	                turns = 1;
	                whosturn();
	               
	            }
	            else {
	                $('#pic3').attr('src', buswait[9]);
	                count3 = 1;
	                threeB = true;
	                complete++;
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
	                complete++;
	                WinGame();
	                turns = 1;
	                whosturn();
	              
	            }
	            else {
	                $('#pic4').attr('src', buswait[9]);
	                count4 = 1;
	                fourB = true;
	                complete++;
	                WinGame();
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
	                fiveA = true;
	                complete++;
	                WinGame()
	                turns = 1;
	                whosturn();
	                
	            }
	            else {
	                $('#pic5').attr('src', buswait[9]);
	                count5 = 1;
	                fiveB = true;
	                complete++;
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
	                complete++;
	                WinGame();
	                turns = 1;
	                whosturn();
	                
	            }
	            else {
	                $('#pic6').attr('src', buswait[9]);
	                count6 = 1;
	                sixB = true;
	                complete++;
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
	                complete++;
	                WinGame();
	                turns = 1;
	                whosturn();
	               
	            }
	            else {
	                $('#pic7').attr('src', buswait[9]);
	                count7 = 1;
	                sevenB = true;
	                complete++;
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
	                complete++;
	                WinGame();
	                turns = 1;
	                whosturn();
	               
	            }
	            else {
	                $('#pic8').attr('src', buswait[9]);
	                count8 = 1;
	                eightB = true;
	                complete++;
	                WinGame();
	                turns = 0;
	                whosturn();
	                
	            }
	        }
	    });
*/
	});
