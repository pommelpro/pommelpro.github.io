var newArr = [];
$(document).ready(function() {
    Parse.initialize("BnOXMP44BepoqYrbvd8a3WmVL4Scxv37SzpvxqKC", "3vrQKZDI2olUgISwF8XxG9wK6rcBGqSlA1HWB3nK");
    if(location.href.split("/").slice(-1) == "index.html") {
        retrieveMovies();
    }
    $( "#submit" ).click(function() {
        var element = document.getElementById('input-box').value;
        var sel = document.getElementById('select-box');
        var sv = sel.options[sel.selectedIndex].value;
        if (element != "" && sv != "medium" && element != "You Must Enter A Movie") {
            saveMovie(element, sv);
            document.getElementById('input-box').value = ""
            alert(element + " was successfully submitted")
            document.getElementById('input-box').placeholder = "Enter Another Movie"

        } else {
            console.log("element or medium is empty");
            document.getElementById('input-box').value = "You Must Enter A Movie"
        }        
    });
//    $( ".btn-lg" ).click(function() {
//        $('#myModal').modal('show');
//    }); 
    $( "#0" ).click(function() {
        sortby(newArr, 0)
    });
    $( "#1" ).click(function() {
        sortby(newArr, 1)
    }); 
    
    
    
});


function saveMovie( inputMovie , selectorValue) {
    var Movie = Parse.Object.extend("Movies");
    var movie = new Movie();
    movie.set("name", inputMovie);
    movie.set("medium", selectorValue);
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
//    var createdAt = query.createdAt;
    query.select("name", "medium", "createdAt");
    
    query.limit(500);
    query.find().then(function(results) {
        for (var i = 0; i < results.length; i++) {
            var newMovie = {name: results[i].get("name"), medium: results[i].get("medium"), createdAt: results[i].get("createdAt")};
            newArr[i] = newMovie; 
        }
    newArr.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
        fillTable();
    });  
}

function fillTable() {
    var tableCells = newArr.length
    var table = document.getElementById("movieTable");
    for (var j = 1; j < tableCells + 1; j++) {
        var row1 = table.insertRow(j);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1)
        var cell3 = row1.insertCell(2)
        cell1.innerHTML = newArr[j-1].name;
        cell1.id = newArr[j-1].name;
        cell1.className = "MovieCell"
        cell2.innerHTML = newArr[j-1].medium;
        cell2.id = newArr[j-1].medium;
        cell2.className = "MovieCell"
        cell3.innerHTML = newArr[j-1].createdAt;
        cell3.id = newArr[j-1].createdAt;
        cell3.className = "MovieCell"
        
//        cell1.addEventListener("click", addMovie, false);
    }
    var row = table.insertRow(tableCells+1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = ""
    cell1.className = "MovieCell"
    var cell2 = row.insertCell(1);
    cell2.className = "MovieCell"
    cell2.innerHTML = ""
    var cell3 = row.insertCell(2);
    cell3.className = "MovieCell"
    cell3.innerHTML = ""
}

function sortby(arrayToSort, input) {
    if(input == 0) {
        newArr.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });   
    }
    if(input == 1) {
        newArr.sort(function (a, b) {
            if (a.medium > b.medium) {
                return 1;
            }
            if (a.medium < b.medium) {
                return -1;
            }
            return 0;
        });   
    }
    $(".MovieCell").remove();
    fillTable()
}




//function addMovie() {
//    var thisID = this.id;
//    console.log(thisID);
//    $('#deleteMovie').innerHTML = thisID;
//    $('#myModal').modal('show');
//    
//}