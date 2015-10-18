$( document ).ready(function() {
	Parse.initialize("BnOXMP44BepoqYrbvd8a3WmVL4Scxv37SzpvxqKC", "3vrQKZDI2olUgISwF8XxG9wK6rcBGqSlA1HWB3nK");
	document.getElementsByClassName("wishListMovies").hidden = true;
	var wishTitle, wishSorting;
	$( ".cancelWishMovie" ).click(function() {
		removeText();
	});
	$( ".addWishMovie" ).click(function() {
		wishTitle = document.getElementById("wishTitle").value;
		wishSorting = document.getElementById("wishSorting").value;
		event.preventDefault();
		submit(wishTitle, wishSorting);
	});
	$('#wishTitle').on("change", function () {
		wishTitle = document.getElementById("wishTitle").value;
		wishSorting = document.getElementById("wishSorting").value;
	});	
	$('#wishSorting').on("change", function () {
		wishTitle = document.getElementById("wishTitle").value;
		wishSorting = document.getElementById("wishSorting").value;
	});	
});
function removeText() {
	document.getElementById("wishTitle").value = "";
	document.getElementById("wishSorting").value = "";
}
function submit(name, sorting) {
	var WishList = Parse.Object.extend("WishList");
	var wishList = new WishList();
	wishList.set("name", name);
	wishList.set("sorting", sorting);
	wishList.save(null, {
		success: function(wishList) {
			removeText();
			alert('Movie Added to Wish List!');
			location.reload();
	},
	error: function(wishList, error) {
		alert('There was an error!');
		location.reload();
		}
	});	
}