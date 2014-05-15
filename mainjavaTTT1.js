
function fillgrid() {
    var titles = new Array();
    for (var i = 0; i < 12; i++) {
        titles[i] = document.getElementById("check" + i).checked;
    }
}


function addcheck() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
}


function getActiveTarget() {
    //find which cell has the class active target
    var blah = $('.activeTarget').first();
    console.log(blah.attr('id'));
    return blah
}

function howmany() {
    console.log("got to howmany");
    var check = new Array();
    var totalcheck = 0;
    for (var i = 0; i < 12; i++) {
        check[i] = document.getElementById("check" + i).checked;
        if (check[i] == true)
            totalcheck++;
    }
    console.log("got to end of howmany");
    $('#CheckedNum').html("You have checked " + totalcheck + " so far");

}


function whichChecked() {
    var check = new Array();
    var values = new Array();
    var totalcheck = 0;
    var fillList = 0;
    for (var i = 0; i < 12; i++) {
        check[i] = document.getElementById("check" + i).checked;
        if (check[i] == true)
            totalcheck++;
    }

    for (var j = 0; j < check.length; j++) {
        if (check[j] == true) {
            $('#title' + fillList).html(document.getElementById("check" + j).value);
            //console.log(document.getElementById("check"+j).value);
            fillList++;
        }
    }
}


var seconds = 120;
function secondPassed() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Buzz Buzz";
    } else {
        seconds--;
    }
}

var countdownTimer = setInterval('secondPassed()', 1000);


$(document).ready(

	function () {
	    var found = 0;
	    ///////////////////////////////////////////////////////////////////////////////////
	    ///////////////////////////////////////////////////////////////////////////////////
	    ////////////////Take picture and put it in cell////////////////////////////////////
	    ///////////////////////////////////////////////////////////////////////////////////
	    $("#seeing").click(function (event) { // triggers open file menu
	        $('img').addClass("activeTarget");
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
	        found++;
	        if (found < titles.length) {
	            $('#tag').html(titles[found]);
	            $('#seeing').text("I spy a " + titles[found]);
	            console.log(titles[found] + " " + found);
	        }
	    });
	    ///////////////////////////////////////////////////////////////////////////////////
	    ///////////////////////////////////////////////////////////////////////////////////
	    ////////////////Take picture and put it in cell////////////////////////////////////
	    ///////////////////////////////////////////////////////////////////////////////////

	    $('body').hide().fadeIn(1000);
	    
	    var titles = new Array();

	    for (var i = 0; i < 12; i++) {
	        titles[i] = document.getElementById("check" + i).value;
	    }
	    $('#seeing').text("I spy a " + titles[found]);
	    $('#tag').html(titles[found]);


	    $('#skip').click(function () {
	        found++;
	        if (found < titles.length) {
	            $('#tag').html(titles[found]);
	            $('#seeing').text("I spy a " + titles[found]);
	            console.log(titles[found] + " " + found);
	        }
	    });
	    
	});