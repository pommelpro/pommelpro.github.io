var found = 0;
var score = 0;
var go = false;

function getActiveTarget() {
    //find which cell has the class active target
    var blah = $('.activeTarget').first();
    return blah
}

function startGame() {
    titles = ["iPhone", "Apple Computer", "Student", "Nicely Dressed Person", "Clock", "Jeans", "Android Phone", "Stuffed Animal", "Shorts", "Headphones", "Rolling Chair", "Bicycle"];
    $('#seeing').text("I spy a " + titles[found]);
    $('#tag').html(titles[found]);
    $('#pic0').attr('src', 'img/white.jpg');
}


var seconds = 120;
function secondPassed() {
    if (go) {
        var minutes = Math.round((seconds - 30) / 60);
        var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }
        document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
        if (seconds == 0) {
            clearInterval(countdownTimer);
            $('.buttonclick').hide();
            $('#pic0').attr('src', 'img/done.jpg');
            $('#tag').hide();
            $('#countdown').html('Your score was ' + score);
        } else {
            seconds--;
        }
    }
}

var countdownTimer = setInterval('secondPassed()', 1000);
var found = 0;
var titles = new Array();

$(document).ready(function () {
    startGame();
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
	        score++;
	        if (found < titles.length) {
	            setTimeout(function () { $('#pic0').attr('src', 'img/white.jpg'); }, 1000);
	            setTimeout(function () { $('#tag').html(titles[found]); }, 1000);
	            setTimeout(function () { $('#seeing').text("I spy a " + titles[found]); }, 1000); 
	        } else {
	            clearInterval(countdownTimer);
	            $('.buttonclick').hide();
	            $('#pic0').attr('src', 'img/done.jpg');
	            $('#tag').hide();
	            $('#countdown').html('Your score was ' + score);
	        }
	    });
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////Take picture and put it in cell////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

	    $('body').hide().fadeIn(1000);
	    $('.buttonclick').hide();
	    $('#pictable').hide();


	    $('#start').click(function () {
	        go = true;
	        $('.buttonclick').show();
	        $('#pictable').show();
	        $('#start').hide();
	    });

	    $('#skip').click(function () {
	        found++;
	        score--;
	        if (found < titles.length) {
	            $('#tag').html(titles[found]);
	            $('#seeing').text("I spy a " + titles[found]);
	        } else {
	            clearInterval(countdownTimer);
	            $('.buttonclick').hide();
	            $('#pic0').attr('src', 'img/done.jpg');
	            $('#tag').hide();
	            $('#countdown').html('Your score was ' + score);
	        }
	    });
	    
	});


/*
<input type="checkbox" value="iPhone" id="check0">iPhone<br></span>
<span class="checkbox"><input type="checkbox" value="Mac" id="check1">Apple Computer<br></span>
<span class="checkbox"><input type="checkbox" value="Student" id="check2">Student<br></span>
<span class="checkbox"><input type="checkbox" value="Nicely Dressed Person" id="check3">Nicely Dressed Person<br></span>
<span class="checkbox"><input type="checkbox" value="Clock" id="check4">Clock<br></span>
<span class="checkbox"><input type="checkbox" value="Jeans" id="check5">Jeans<br></span>
<span class="checkbox"><input type="checkbox" value="Android Phone" id="check6">Android Phone<br></span>
<span class="checkbox"><input type="checkbox" value="Stuffed Animal" id="check7">Stuffed Animal<br></span>
<span class="checkbox"><input type="checkbox" value="Shorts" id="check8">Shorts<br></span>
<span class="checkbox"><input type="checkbox" value="Headphones" id="check9">Headphones<br></span>
<span class="checkbox"><input type="checkbox" value="Rolling Chair" id="check10">Rolling Chair<br></span>
<span class="checkbox"><input type="checkbox" value="Bicycle" id="check11">Bicycle<br></span>


["iPhone", "Apple Computer", "Student", "Nicely Dressed Person", "Clock", "Jeans", "Android Phone", "Stuffed Animal", "Shorts", "Headphones", "Rolling Chair", "Bicycle"]
*/

