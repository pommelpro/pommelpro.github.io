var filteredArr = []
$( document ).ready(function() {
	var searchTerm = "";
	$( ".cancelMovieList" ).click(function() {
		removeText();
	});

	$('#searchBar').on("change", function () {
		searchTerm = document.getElementById("searchBar");
	});	

});


function Search(searchTerm) {
	
}