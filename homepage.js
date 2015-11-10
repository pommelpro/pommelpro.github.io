$( document ).ready(function() {
	$('.btn').mouseover(function(){
		$(this).css('background','#484848');
	});
	$('.btn').mouseout(function(){
		$(this).css('background','#313131');
	});
	$('.btn').click(function(){
		$(this).css('background','#313131');
	});
	$('#contact').click(function() {
		window.location.href = 'userData/contacts.html';
	});
	$('#ios').click(function() {
		window.location.href = 'moviesios/moviesios.html';
	});
	$('#web').click(function() {
		window.location.href = 'movies/movies.html';
	});
	$('#cc').click(function() {
		window.location.href = 'CreditCardApp/index.html';
	});
});