

var endgame = "img/catgame.jpg";
var switcher = 0;
var zero;
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;


function fillgrid() {
    var titles = new Array();
    titles[0] = "Apple Computer";
    titles[1] = "iPhone";
    titles[2] = "Student";
    titles[3] = "Nicely Dressed Person";
    titles[4] = "Clock";
    titles[5] = "Jeans";
    titles[6] = "Android Phone";
    titles[7] = "Stuffed Animal";
    titles[8] = "Shorts";
    for (var i = 0; i < titles.length; i++) {
        $('#title' + i).html(titles[i]);
    }
    $('#switcher').html("Turn: Player 1");
    $('#switcher').css('color', 'red');
}



function winner() {




}

/*

_0_|_1_|_2_
_3_|_4_|_5_
_6_|_7_|_8_

*/
function getClass() {
    var classes = $(this).attr('class');
    console.log(classes);
}





function getActiveTarget() {
    //find which cell has the class active target
    var blah = $('.activeTarget').first();
    console.log(blah.attr('id'));
    return blah
}

/*
function whichChecked() {
	var check = new Array();
	var values = new Array();
	var totalcheck = 0;
	var fillList = 0;
	for(var i = 0; i < 9; i++) {
		check[i] = document.getElementById("check"+i).checked;
		if(check[i] == true)
			totalcheck++;
	}
	if (totalcheck != 9) {
        for(var ii=)
	    document.getElementById("check").checked = true

	}
	for(var j = 0; j < check.length; j++) {
		if(check[j] == true){
			$('#title' + fillList).html(document.getElementById("check"+j).value);
		    //console.log(document.getElementById("check"+j).value);
			fillList++;
		}
	}
}
*/

$(document).ready(

	function () {

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////Take picture and put it in cell////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
	    $(".spyTarget").click(function (event) { // triggers open file menu
	        $(this).addClass("activeTarget");
	        var parid = $(this).parent().attr('id');
	        if (switcher == 0) {
	            $('#' + parid).css('background-color', 'red');
	            $(this).parent().removeClass("Player1");
	            $(this).parent().removeClass("Player2");
	            $(this).parent().addClass("Player1");
	            $('#switcher').html("Turn: Player 2");
	            $('#switcher').css('color', 'green');
	            getClass();
	            switcher = 1;
	        }
	        else {
	            $('#' + parid).css('background-color', 'green');
	            $(this).parent().removeClass("Player1");
	            $(this).parent().removeClass("Player2");
	            $(this).parent().addClass("Player2");
	            $('#switcher').html("Turn: Player 1");
	            $('#switcher').css('color', 'red');
	            getClass();
	            switcher = 0;
	        }
	            $('#takePicture').trigger('click');
	        return false;

	    });

	    $('#takePicture').on('change', function (e) {
	        e.preventDefault();
	        if (this.files.length === 0) return;

	        var imageFile = this.files[0];
	        var activeTarget = getActiveTarget();
	        var imgURL = URL.createObjectURL(imageFile);
	        activeTarget.attr('src', imgURL);
	        activeTarget.removeClass('activeTarget');

	    });
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////Take picture and put it in cell////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

	    $('body').hide().fadeIn(1000);

	    $(function () {
	        fillgrid();     //execute fill grid
	    });

		$('#submit').click(function() {
//			whichChecked();
		});




	});
