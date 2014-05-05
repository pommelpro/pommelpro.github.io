

var endgame = "img/catgame.jpg";
var switcher = 0;

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
    alert(titles.length);
}



function winner() {
    







}

/*

_0_|_1_|_2_
_3_|_4_|_5_
_6_|_7_|_8_

*/
function getClass(picClass) {
    var Classes = $("#" + picClass).attr('class');
    return Classes;
}





function getActiveTarget() {
    //find which cell has the class active target
    var blah = $('.activeTarget').first();
    console.log(blah.attr('id'));
    return blah
}


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
	            
	            switcher = 1;
	        }
	        else {
	            $('#' + parid).css('background-color', 'green');
	            $(this).parent().removeClass("Player1");
	            $(this).parent().removeClass("Player2");
	            $(this).parent().addClass("Player2");
	            switcher = 0;
	        }
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
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////Take picture and put it in cell////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

	    $('body').hide().fadeIn(1000);
	    
	    $(function () {
	        fillgrid();     //execute fill grid
	    });






	});
