var filteredArr = []
$( document ).ready(function() {

	var $rows = $('#moviesList tr');

	$('#searchBar').keyup(function() {
		var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
		$rows.show().filter(function() {
			var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
			console.log($(this));
			return !~text.indexOf(val);
		}).hide();
	});
});