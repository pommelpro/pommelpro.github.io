window.setTimeout( function() {
	$( document ).ready(function() {
		var prevId = '';
		$('li').click(function() {
			var clicked = this.id;
			prevId = moreInfo(prevId, clicked);
		});
	});
}, 500);
function moreInfo(prevId, id) {
	if (prevId != "" && prevId != id) {
		$( "." + prevId ).hide();
		$( "#" + prevId ).removeClass( "moreInfo", 200);
	}
	$( "." + id ).toggle();
	$('#'+id).toggleClass('moreInfo', 200);
	prevId = id;
	return prevId;
}