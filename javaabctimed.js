function fillgrid() {
    $('#topimage').attr('src', 'imgABC/clickhere.jpg');
    for (var ii = 0; ii < 26; ii++) {
        $('#pic' + ii).attr('src', 'imgABC/letter' + ii + '.png');
    }
}

function addScore(score, id) {
    var values = new Array();
    values = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];
    id = id.replace("pic", "");
    return score = score + values[id];
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






$(document).ready(function () {

    Parse.initialize("TohTpNrTgJf0MTUkm5Ax9LtzfXoyaEOmSaQKnGRl", "p7CQveFxWDaYln4pNawiV8qkXiRuda9iR3zBqw8v");
    $('#submit').hide();
    $('.letterpics').hide();
    var score = 0;
    $('#score').html('Score: ' + score);
    var imagepath;
    $('#score').html("Score: 0");
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
            var getID = $('.' + $('#textboxer').val()).attr('id');
            score = addScore(score, getID);
            $('#score').html('Score: ' + score);
            $('#topimage').attr('src', 'imgABC/clickhere.jpg');
            $('#submit').hide();
        } else { $('.boxer').css({ "background-color": "#FF0000" }); }
    });

    $('body').hide().fadeIn(1000);
    fillgrid();
    $('#showpics').hide();
    $('#topimage').click(function () {
        var stuff = document.getElementById('textboxer').value;
    });

    var picshowval = 1;
    $("#showpics").click(function () {
        $(".letterpics").slideToggle("slow");
        if (picshowval) {
            document.getElementById("showpics").innerHTML = "See Less";
            picshowval = 0;
        }
        else {
            document.getElementById("showpics").innerHTML = "See what you spied so far";
            picshowval = 1;
        }
    });


});
