var moviesArr = [];
var wishListArr = [];
$( document ).ready(function() {
	Parse.initialize("BnOXMP44BepoqYrbvd8a3WmVL4Scxv37SzpvxqKC", "3vrQKZDI2olUgISwF8XxG9wK6rcBGqSlA1HWB3nK");
	$('body').hide().fadeIn(700);
	getMovies();
	getWish();
	$( ".sorters" ).click(function() {
		var objClassClick = $(this).find('span')[0];
		var objIdClick = $(this).find('th').context.id;
		resort(objClassClick, objIdClick);
	});
	$( ".viewMoviesList" ).click(function() {
		showHide("viewMoviesList", "viewWishList", "moviesIOwn", "moviesIWant");
		$(".searchBar").show();
	});
	$( ".viewWishList" ).click(function() {
		showHide("viewWishList", "viewMoviesList", "moviesIWant", "moviesIOwn");
		$(".searchBar").hide();
		document.getElementById("searchBar").value = "";
	});
	$('#table1').on('click', 'tr', function(e) {
	    var movieClicked = this.childNodes[0].innerHTML;
	    var foundMovieInfo;
	    if (movieClicked != undefined) {
	    	foundMovieInfo = showMovieInfo(movieClicked, moviesArr);
	    	populateInfo(foundMovieInfo);
	    }
	});
});
function showMovieInfo(movieName, arr) {
	for (var i=0; i < arr.length; i++) {
		if (arr[i].name == movieName) {
			return arr[i];
		}
	}
	alert("there was an error!");
}
function populateInfo(movieObj) {
	$('#updateTitles').val(movieObj.name);
	$('#updateSorting').val(movieObj.sorting);
	$('#updateTags').val(movieObj.tags.join(', '));
	$('#objIdUpdate').text(movieObj.objId);
}
function showHide(showTab, hideTab, showTable, hideTable) {
	$( "." + hideTab ).removeClass( "active" );
	$( "." + showTab ).addClass( "active" );
	$( "." + showTable ).show();
	$( "." + hideTable ).hide();
}
function resort(objClass, objId) {
	clearTable(moviesArr.length, "table1");
	var titleSort = false;
	var dateSort = false;
	var clickedId = objId;
	if (clickedId == "title") { 
		titleSort = true;
		dateSort = false;
		var other = document.getElementById("added");
		other = $(other).find('span')[0];
	} else {
		titleSort = false;
		dateSort = true;
		var other = document.getElementById("title");
		other = $(other).find('span')[0];
	}
	$(other).removeClass( "glyphicon-chevron-up" ).removeClass( "glyphicon-chevron-down" );
	var whichClass = objClass.className.split(' ')[1];
	if(whichClass == "glyphicon-chevron-up") {
		$(objClass).removeClass( "glyphicon-chevron-up" ).addClass( "glyphicon-chevron-down" );
	} else {
		$(objClass).removeClass( "glyphicon-chevron-down" ).addClass( "glyphicon-chevron-up" );
	}
	if (titleSort && whichClass == "glyphicon-chevron-up") {
		moviesArr.sort(function(a, b) {
			return b.sorting.localeCompare(a.sorting);
		});
	} else if (titleSort && whichClass == "glyphicon-chevron-down") {
		moviesArr.sort(function(a, b) {
			return a.sorting.localeCompare(b.sorting);
		});
	} else if (dateSort && whichClass == "glyphicon-chevron-up") {
		moviesArr.sort(function(a, b) {
			var date1 = new Date(a.fullDate).getTime();
			var date2 = new Date(b.fullDate).getTime();
			if ( a.fullDate < b.fullDate ) { return 1;}
			else if ( b.fullDate < a.fullDate ) { return -1;}
			else { return 0; }
		});
	} else if (dateSort && whichClass == "glyphicon-chevron-down") {
		moviesArr.sort(function(a, b) {
			var date1 = new Date(a.fullDate).getTime();
			var date2 = new Date(b.fullDate).getTime();
			if ( a.fullDate < b.fullDate ) { return -1;}
			else if ( b.fullDate < a.fullDate ) { return 1;}
			else { return 0; }
		});
	}
	makeTable(moviesArr, "table1");
}
function getMovies() {
	var Movies = Parse.Object.extend("Movies");
	var query = new Parse.Query(Movies);
	query.limit(1000);
	query.find({
	  success: function(results) {
	    for (var i = 0; i < results.length; i++) {
	    	var d = results[i].updatedAt;
	  		var n = d.toLocaleDateString();
	    	var movieCell = {
	    		name: results[i].get('name'),
	    		sorting: results[i].get('sorting'),
	    		tags: results[i].get('tags').split(", "),
	    		fullDate: results[i].updatedAt,
	    		addedOn: n,
	    		objId: results[i].id
	    	};
	    	moviesArr.push(movieCell);
	    }
		moviesArr.sort(function(a, b) {
		    return a.sorting.localeCompare(b.sorting);
		});
		moviesArr.push({name: "", sorting: "", tags: "", fullDate: new Date(), addedOn: ""})
		makeTable(moviesArr, "table1");
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
}
function getWish() {
	var WishList = Parse.Object.extend("WishList");
	var query = new Parse.Query(WishList);
	query.limit(1000);
	query.find({
	  success: function(results) {
	    for (var i = 0; i < results.length; i++) {
	    	var d = results[i].updatedAt;
	  		var n = d.toLocaleDateString();
	    	var wishCell = {
	    		name: results[i].get('name'),
	    		sorting: results[i].get('sorting'),
	    		addedOn: n
	    	};
	    	wishListArr.push(wishCell);
	    }
		wishListArr.sort(function(a, b) {
		    return a.sorting.localeCompare(b.sorting);
		});
		wishListArr.push({name: "", sorting: "", addedOn: ""})
		makeTable(wishListArr, "table2");
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
}
function makeTable(array, tableName) {
	var table = document.getElementById(tableName);
	var counter = 0;
	for (var i=1; i<array.length; i++) {

		var row = table.insertRow(i);
		var titleCell = row.insertCell(0);
		var numberCell = row.insertCell(1);
		titleCell.innerHTML = array[counter].name;
		numberCell.innerHTML = array[counter].addedOn;
		counter++;
	}
}
function clearTable(rows, tableid) {
	for (var i = 1; i < rows; i++) {
		document.getElementById(tableid).deleteRow(1);
	}
}