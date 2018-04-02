$(document).ready(function(){
	$('body').keyup(function(event) {
		if (event.keyCode == 13) {
			$( ".btn" ).trigger( "click" );
		}
	});
	$(".btn").click(function(){
		document.getElementById("success").hidden = true;
		document.getElementById("failure").hidden = true;
		var fullName = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
		event.preventDefault();
		getUser(fullName);
	});
});
function getUser(name) {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	if(typeof object === "undefined") {
		document.getElementById("failure").hidden = false;
	} else { document.getElementById("success").hidden = false; }
}