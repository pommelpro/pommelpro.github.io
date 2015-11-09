$( document ).ready(function() {
	Parse.initialize("BnOXMP44BepoqYrbvd8a3WmVL4Scxv37SzpvxqKC", "3vrQKZDI2olUgISwF8XxG9wK6rcBGqSlA1HWB3nK");
	var titles = document.getElementById("updateTitles").value;
	var sorting = document.getElementById("updateSorting").value;
	var tags = document.getElementById("updateTags").value;
	$( ".cancelMovieInfo" ).click(function() {
		removeText();
	});
	$( ".addMovieInfo" ).click(function() {
		titles = document.getElementById("updateTitles").value;
		sorting = document.getElementById("updateSorting").value;
		tags = document.getElementById("updateTags").value;
		var id = document.getElementById("objIdUpdate").innerHTML;
		event.preventDefault();
		saveMovie(titles, sorting, tags, id);
	});
	$('#updateTitles').on("change", function () {
		titles = document.getElementById("updateTitles").value;
	});	
	$('#updateSorting').on("change", function () {
		sorting = document.getElementById("updateSorting").value;
	});	
	$('#updateTags').on("change", function () {
		tags = document.getElementById("updateTags").value;
	});	
});
function removeText() {
	document.getElementById("updateTitles").value = "";
	document.getElementById("updateSorting").value = "";
	document.getElementById("updateTags").value = "";
}
function saveMovie(name, sorting, tags, id) {
	var Movies = Parse.Object.extend("Movies");
	var query = new Parse.Query(Movies)
	query.get(id,{
		success: function(movies) {
			movies.set("name", name);
			movies.set("sorting", sorting);
			movies.set("tags", tags);
			movies.save();
			removeText();
			alert('Movie Updated!');
			location.reload();
		}
	});
}