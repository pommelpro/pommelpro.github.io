var score = 0;
var go = false;

function getActiveTarget() {
    //find which cell has the class active target
    var blah = $('.activeTarget').first();
    return blah
}

function startGame() {
    titles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    $('#seeing').text("I spy a " + titles[found]);
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
            $('#countdown').html('Your score was ' + score);
        } else {
            seconds--;
        }
    }
}

var countdownTimer = setInterval('secondPassed()', 1000);
var found = 0;
var titles = new Array();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else { alert("Geolocation is not supported by this browser."); }
}
var lat;
var longi;
function showPosition(position) {
    lat = position.coords.latitude;
    longi = position.coords.longitude;
}



function upload(myfile) {
    var reader = new FileReader();
    reader.onload = function (event) {
        object = {};
        object.filename = myfile.name;
        object.data = event.target.result;
        object.data = object.data.slice(object.data.indexOf('base64') + 7, object.data.length)
        $.ajax({
            url: 'https://api.imgur.com/3/image',
            method: 'POST',
            headers: {
                Authorization: 'Client-ID 1b29a07068ab56c',
            },
            data: {
                image: object.data,
                type: 'base64'
            },
            success: function (obj, stat, xhr) {
                var upIMG = Parse.Object.extend("onePlayer");
                var upimg = new upIMG();
                upimg.set("urlPath", JSON.parse(xhr.responseText).data.link);
                upimg.set("latitude", lat);
                upimg.set("longitude", longi);
                upimg.set("letter", titles[found - 1]);
                upimg.save(null, {
                    success: function () {
//                      $('.' + $('#textboxer').val()).attr('src', JSON.parse(xhr.responseText).data.link);
                    }
                });
            }
        });
    };
    reader.readAsDataURL(myfile)

}

$(document).ready(function () {

    Parse.initialize("TohTpNrTgJf0MTUkm5Ax9LtzfXoyaEOmSaQKnGRl", "p7CQveFxWDaYln4pNawiV8qkXiRuda9iR3zBqw8v");
    var imagepath;
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
	        getLocation();
	        e.preventDefault();
	        if (this.files.length === 0) return;
	        var imageFile = this.files[0];
	        imagepath = imageFile;
	        var activeTarget = getActiveTarget();
	        var imgURL = URL.createObjectURL(imageFile);
	        activeTarget.attr('src', imgURL);
	        activeTarget.removeClass('activeTarget');
	        found++;
	        score++;
	        
	        if (found < titles.length) {
	            setTimeout(function () { $('#pic0').attr('src', 'img/white.jpg'); }, 1000);
	            setTimeout(function () { $('#seeing').text("I spy a " + titles[found]); }, 1000);
	            upload(imagepath);
	        } else {
	            clearInterval(countdownTimer);
	            $('.buttonclick').hide();
	            $('#pic0').attr('src', 'img/done.jpg');
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
	        $('#skip').show();
	        $('#seeing').show();
	    });

	    $('#skip').click(function () {
	        found++;
	        score--;
	        if (found < titles.length) {
	            $('#seeing').text("I spy a " + titles[found]);
	        } else {
	            clearInterval(countdownTimer);
	            $('.buttonclick').hide();
	            $('#pic0').attr('src', 'img/done.jpg');
	            $('#countdown').html('Your score was ' + score);
	        }
	    }); 
	});