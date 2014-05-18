
function fillgrid() {
    for (var ii = 0; ii < 26; ii++) {
        $('#pic' + ii).attr('src', 'imgABC/letter' + ii + '.png');
    }
    console.log("got here");
}



function getClass() {
    var classes = $(this).attr('class');
    console.log(classes);
}

function addcheck() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
}



function getActiveTarget() {
    //find which cell has the class active target
    var blah = $('.activeTarget').first();
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
	    fillgrid();
	    
	});