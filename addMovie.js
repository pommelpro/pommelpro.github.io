var newArr = [];
$( document ).ready(function() {
    Parse.initialize("BnOXMP44BepoqYrbvd8a3WmVL4Scxv37SzpvxqKC", "3vrQKZDI2olUgISwF8XxG9wK6rcBGqSlA1HWB3nK");
    if(location.href.split("/").slice(-1) == "index.html") {
        retrieveMovies();
    }
    $( "#submit" ).click(function() {
        var element = document.getElementById('input-box').value;
        if (element != "") {
            saveMovie(element);
            document.getElementById('input-box').value = ""
            document.getElementById('input-box').placeholder = "Enter Another Movie"
            document.getElementById('success-box').value = "Movie Submitted"

        } else {
            console.log("element is empty");
            document.getElementById('success-box').value = "You Must Enter A Movie"
        }        
    });
    $( "#addRow" ).click(function() {
        retrieveMovies();
        
    });
});


function saveMovie( inputMovie ) {
    var Movie = Parse.Object.extend("Movies");
    var movie = new Movie();

    movie.set("name", inputMovie);

    movie.save(null, {
        success: function(movie) {
        // Execute any logic that should take place after the object is saved.
            console.log('New object created with objectId: ' + movie.id);
        },
        error: function(gameScore, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
            console.log('Failed to create new object, with error code: ' + error.message);
        }
    });    
}

function retrieveMovies () {
    var Movie = Parse.Object.extend("Movies");
    var query = new Parse.Query(Movie);
    query.select("name");
    query.find().then(function(results) {
        for (var i = 0; i < results.length; i++) {
            newArr[i] = results[i].get("name");
            newArr = newArr.sort();
        }
        fillTable();
    });  
}

function fillTable() {
    var tableCells = newArr.length
    var table = document.getElementById("movieTable");
    for (var j = 1; j < tableCells + 1; j++) {
        var row = table.insertRow(j);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = newArr[j-1];
    }
    var row = table.insertRow(tableCells+1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = ""
}




