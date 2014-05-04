var titles = new Array();

var endgame = "img/catgame.jpg";

titles[0] = "Apple Computer";
titles[1] = "iPhone";
titles[2] = "Student";
titles[3] = "Nicely Dressed Person";
titles[4] = "Clock";
titles[5] = "Jeans";
titles[6] = "Android Phone";
titles[7] = "Stuffed Animal";
titles[8] = "Shorts";

function fillgrid() {
    for (var i = 0; i < buswait.length; i++) {
        $('#title' + i).html(titles[i]);
    }
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
	        activeTarget.removeClass('activeTarget');
	        
	    });


	    $('body').hide().fadeIn(1000);
	    
	    $(function () {
	        fillgrid();     //execute fill grid
	        whosturn();
	    });
	    $('td').click(function () {
	        $(this).toggleClass('on');
	    });





	});
