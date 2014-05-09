

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
    for (var i = 0; i < 12; i++) {
        titles[i] = document.getElementById("check" + i).checked;
    }
}



/*

_0_|_1_|_2_
_3_|_4_|_5_
_6_|_7_|_8_

*/

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


$(document).ready(

	function () {
	    var found = 0;
	    ///////////////////////////////////////////////////////////////////////////////////
	    ///////////////////////////////////////////////////////////////////////////////////
	    ////////////////Take picture and put it in cell////////////////////////////////////
	    ///////////////////////////////////////////////////////////////////////////////////
	    $(".spyTarget").click(function (event) { // triggers open file menu
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
	    $('#tag').html(titles[found]);
	    $('#next').click(function () {
	        found++;
	        $('#tag').html(titles[found]);
	    });
	    
	    console.log(titles);



	});