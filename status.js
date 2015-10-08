$(document).ready(function(){
	Parse.initialize("UH7MO8P4clCNUjUy0o33gZ7X8NzbXoMc044QkSw9", "QNcLaUAUmLrrmD0sYhqhLcZ9t97tMLr4w3egSvWs");
	$(".btn").click(function(){
		document.getElementById("success").hidden = true;
		document.getElementById("failure").hidden = true;
		var fullName = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
		event.preventDefault();
		getUser(fullName);
	});
});
function getUser(name) {
	var PersonApplication = Parse.Object.extend("PersonApplication");
	var query = new Parse.Query(PersonApplication);
	query.equalTo("name", name);
	query.first({
		success: function(object) {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			if(typeof object === "undefined") {
				document.getElementById("failure").hidden = false;
			} else { document.getElementById("success").hidden = false; }
		},
		error: function(error) {
			document.getElementById("failure").hidden = false;
		}
	});
}