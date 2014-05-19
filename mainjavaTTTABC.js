var score = 0;

function fillgrid() {
    for (var ii = 0; ii < 26; ii++) {
        $('#pic' + ii).attr('src', 'imgABC/letter' + ii + '.png');
    }
}




function getActiveTarget() {
    //find which cell has the class active target
    var blah = $('.activeTarget').first();
    return blah
}


$(document).ready(

	function () {
	    $('#score').html("Found: " + score);
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////Take picture and put it in cell////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
	    $(".spyTarget").click(function (event) { // triggers open file menu
	        for (var jj = 0; jj < 26; jj++) {
	            $('#pic' + jj).removeClass('activeTarget');
	        }
	        $(this).addClass("activeTarget");
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
	        score++;
	        $('#score').html("Found: " + score);
	    });
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////Take picture and put it in cell////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

	    $('body').hide().fadeIn(1000);
	    fillgrid();
	    
	});