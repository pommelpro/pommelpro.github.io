function fillgrid() {
    $('#topimage').attr('src', 'imgABC/clickhere.jpg');
    for (var ii = 0; ii < 26; ii++) {
        $('#pic' + ii).attr('src', 'imgABC/letter' + ii + '.png');
    }
    for (var j = 26; j < 52; j++) {
        $('#pic' + j).attr('src', 'imgABC/white.jpg');
    }
    $('#pictable').hide();
    $('#seeFinals').hide();
    $('#seeAllpics').hide();
    $('#restart').hide();
    
}

function showfound() {
    var imgSrc;
    var count = 0;
    for (var i = 26; i < 52; i++) {
        imgSrc = $('#pic' + i).attr("src");
        if (imgSrc == "imgABC/white.jpg") {
            $('#pic' + i).hide();
            $('#pic' + count).hide();
        } else {
            $('#pic' + i).show();
            $('#pic' + count).show();
        }
        count++;
    }
}

var score = 0;
function addScore() {
    score = score + 1;
    $('#score').html('Score: ' + score);
}


function getActiveTarget() {
    //find which cell has the class active target
    var blah = $('.activeTarget').first();
    return blah
}

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
                var upIMG = Parse.Object.extend("stImg");
                var upimg = new upIMG();
                upimg.set("urlPath", JSON.parse(xhr.responseText).data.link);
                upimg.set("letterVal", document.getElementById('textboxer').value);
                upimg.set("latitude", lat);
                upimg.set("longitude", longi);
                upimg.save(null, {
                    success: function () {
                        $('.' + $('#textboxer').val()).attr('src', JSON.parse(xhr.responseText).data.link);
                    }
                });
            }
        });
    };
    reader.readAsDataURL(myfile)

}
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
            
        } else {
            seconds--;
        }
    }
}


$(document).ready(function () {

    Parse.initialize("TohTpNrTgJf0MTUkm5Ax9LtzfXoyaEOmSaQKnGRl", "p7CQveFxWDaYln4pNawiV8qkXiRuda9iR3zBqw8v");
    $('#submit').hide();

    $('#score').html('Score: ' + score);
    var imagepath;
    ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    ////////////////Take picture and put it in cell////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
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
        $('#submit').show();
        if (this.files.length === 0) return;
        var imageFile = this.files[0];
        imagepath = imageFile;
        getLocation();
        var activeTarget = getActiveTarget();
        var imgURL = URL.createObjectURL(imageFile);
        activeTarget.attr('src', imgURL);
        activeTarget.removeClass('activeTarget');
    });
    ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    ////////////////Take picture and put it in cell////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////


    $('#submit').click(function () {
        if (document.getElementById('textboxer').value) {
            $('.boxer').css({ "background-color": "#FFCCCC" });
            upload(imagepath);
            addScore();
            $('#topimage').attr('src', 'imgABC/clickhere.jpg');
            $('#submit').hide();
        } else { $('.boxer').css({ "background-color": "#FF0000" }); }
    });

    $('body').hide().fadeIn(1000);
    fillgrid();

    $('#topimage').click(function () {
        var stuff = document.getElementById('textboxer').value;
    });

    $('#getstarted').click(function () {
        go = true;
        $('#getstarted').hide();
        $('#pictable').show();
        for (var pp = 0; pp < 52; pp++) {
            $('#pic' + pp).hide();
        }
        $('#headtop').hide();
        $('#headtitle').hide();
    });

    $('#seeFinals').click(function () {
        showfound();
    });
    $('#seeAllpics').click(function () {
        window.location.href = "htmlabcpic.html"
    });
    $('#restart').click(function () {
        window.location.href = "htmlabctimed.html"
    });


    
});


//setTimeout(function () { $('#pic0').attr('src', 'img/white.jpg'); }, 1000);