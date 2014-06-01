var categories = ["red", "blue", "green", "round", "electronic","cars","square","yellow","furniture","orange","purple"]
var randomnumber = Math.floor(Math.random() * categories.length);
function setupGame() {
    $('#headtitle').html("Find as many different <b><u><i>" + categories[randomnumber] + "</i></u></b> things as you can in two minutes!");

    $('#topimage').attr('src', 'imgABC/clickhere.jpg');
    for (var ii = 0; ii < 26; ii++) {
        $('#pic' + ii).attr('src', 'imgABC/white.jpg');
    }
    $('#pictable').hide();
    $('#seeFinals').hide();
    $('#seeAllpics').hide();
    $('#restart').hide();
    $('#endGame').hide();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showfound() {
    var imgSrc;
    for (var i = 0; i < 26; i++) {
        imgSrc = $('#pic' + i).attr("src");
        console.log(imgSrc);
        if (imgSrc == "imgABC/white.jpg") {
            $('#pic' + i).hide();
        } else {
            $('#pic' + i).show();
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var score = 0;
function addScore() {
    score = score + 1;
    $('#score').html('Score: ' + score);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getActiveTarget() {
    //find which cell has the class active target
    var blah = $('.activeTarget').first();
    return blah
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var uploadcount = 0;
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
                var upIMG = Parse.Object.extend("specific");
                var upimg = new upIMG();
                upimg.set("urlPath", JSON.parse(xhr.responseText).data.link);
                upimg.set("latitude", lat);
                upimg.set("longitude", longi);
                upimg.set("category", categories[randomnumber]);
                upimg.save(null, {
                    success: function () {
                        $('#pic' + uploadcount).attr('src', JSON.parse(xhr.responseText).data.link);
                        uploadcount++;
                    }
                });
            }
        });
    };
    reader.readAsDataURL(myfile)

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var go = false;
var seconds = 120;
var countdownTimer = setInterval('secondPassed()', 1000);
function secondPassed() {
    if (go) {
        var minutes = Math.round((seconds - 30) / 60);
        var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }
        document.getElementById('timer').innerHTML = minutes + ":" + remainingSeconds;
        if (seconds == 0) {
            clearInterval(countdownTimer);
            $('#seeFinals').show();
            $('#seeAllpics').show();
            $('#inputtop').hide();
            $('#restart').show();
            $('#endGame').hide();

        } else {
            seconds--;
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////DOCUMENT.READY PART//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {

    Parse.initialize("TohTpNrTgJf0MTUkm5Ax9LtzfXoyaEOmSaQKnGRl", "p7CQveFxWDaYln4pNawiV8qkXiRuda9iR3zBqw8v");
    $('#submit').hide();

    $('#score').html('Score: ' + score);
    var imagepath;
//////////////////////////////////////////////////////////////////////////////////////////////////
    $(".spyTargetFin").click(function (event) { // triggers open file menu
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
        imagepath = imageFile;
        getLocation();
        setTimeout(function () {
            upload(imagepath);
            addScore();
            $('#topimage').attr('src', 'imgABC/clickhere.jpg');
            }, 1500);
        var activeTarget = getActiveTarget();
        var imgURL = URL.createObjectURL(imageFile);
        activeTarget.attr('src', imgURL);
        activeTarget.removeClass('activeTarget');
    });
//////////////////////////////////////////////////////////////////////////////////////////////////

    $('body').hide().fadeIn(1000);
    setupGame();

    $('#getstarted').click(function () {
        go = true;
        $('#getstarted').hide();
        $('#pictable').show();
        for (var pp = 0; pp < 26; pp++) {
            $('#pic' + pp).hide();
        }
        $('#headtop').hide();
        $('#endGame').show();
    });



//////////////////////////////////////////////////////////////////////////////////////////////////
    $('#seeFinals').click(function () {
       showfound();
    });
    $('#seeAllpics').click(function () {
        window.location.href = "htmlspecificEnd.html"
    });
    $('#restart').click(function () {
        window.location.href = "htmlspecific.html"
    });

    $('#endGame').click(function () {
        seconds = 0;
    });

});


//setTimeout(function () { $('#pic0').attr('src', 'img/white.jpg'); }, 1000);