$( document ).ready(function() {
	$('.btn').click(function() {
		var email = $('#emailAddress').val();
		var name = $('#fullName').val();
		var valid = validateEmail(email);
		if(!valid) {
			$('#validEmail').addClass('has-error');
			$('.alert-success').hide();
			$('.alert-danger').show();
		} else {
			if (name) {
				$('#userName').text(" " + name);
			} else {
				$('#userName').text("");
			}
			success();
		}
	});

});
function validateEmail(email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}
function tog(v){return v?'addClass':'removeClass';} 
	$(document).on('input', '.clearable', function(){
		$(this)[tog(this.value)]('x');
	}).on('mousemove', '.x', function( e ){
		$(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');
	}).on('touchstart click', '.onX', function( ev ){
		ev.preventDefault();
		$(this).removeClass('x onX').val('').change();
});
function success() {
	var titles = ["fullName", "emailAddress", "phoneNumber"];
	$('#validEmail').removeClass('has-error');
	$('.alert-danger').hide();
	$('.alert-success').show();
	for (var i=0; i<titles.length; i++) {
		$('#' + titles[i]).removeClass('clearable');
		$('#' + titles[i]).val('');
	}
}