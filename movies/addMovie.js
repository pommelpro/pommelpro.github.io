$( document ).ready(function() {
	Parse.initialize("BnOXMP44BepoqYrbvd8a3WmVL4Scxv37SzpvxqKC", "3vrQKZDI2olUgISwF8XxG9wK6rcBGqSlA1HWB3nK");
	var titles, sorting, tags;
	$( ".cancelMovieList" ).click(function() {
		removeText();
	});
	$( ".addMovieList" ).click(function() {
		tags = document.getElementById("tags").value;
		sorting = document.getElementById("sorting").value;
		titles = document.getElementById("titles").value;
		event.preventDefault();
		submit(titles, sorting, tags);
	});
	$('#titles').on("change", function () {
		tags = document.getElementById("tags").value;
		sorting = document.getElementById("sorting").value;
		titles = document.getElementById("titles").value;
	});	
	$('#sorting').on("change", function () {
		tags = document.getElementById("tags").value;
		sorting = document.getElementById("sorting").value;
		titles = document.getElementById("titles").value;
	});	
	$('#tags').on("change", function () {
		tags = document.getElementById("tags").value;
		sorting = document.getElementById("sorting").value;
		titles = document.getElementById("titles").value;
	});	
});
function removeText() {
	document.getElementById("titles").value = "";
	document.getElementById("sorting").value = "";
	document.getElementById("tags").value = "";
}
function submit(name, sorting, tags) {
	var Movies = Parse.Object.extend("Movies");
	var movies = new Movies();
	movies.set("name", name);
	movies.set("sorting", sorting);
	movies.set("tags", tags);
	movies.save(null, {
		success: function(movies) {
			removeText();
			alert('Movie Added!');
			location.reload();
	},
	error: function(personApplication, error) {
		alert('There was an error!');
		location.reload();
		}
	});	
}