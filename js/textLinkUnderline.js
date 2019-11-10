$(function() {
	$('a').css('text-decoration', 'underline');
	$('a').hover(function() {
		$(this).css('text-decoration', 'none');
	}, function() {
		$(this).css('text-decoration', 'underline');
	});
})