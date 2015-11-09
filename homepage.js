$( document ).ready(function() {
	$('.row').mouseover(function(){
		$(this).css('background','#484848');
	});
	$('.row').mouseout(function(){
		$(this).css('background','#313131');
	});
});