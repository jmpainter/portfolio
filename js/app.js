$(document).ready( function() {
	//animate scrolling to anchors
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 700);
				return false;
			}
		}
	});
});


function slideSwitch() {
	var $active = $('#slideshow img.active');

	if ( $active.length == 0 ) $active = $('#slideshow img:last');

	var $next =  $active.next().length ? $active.next()
		  : $('#slideshow img:first')

	$active.addClass('last-active');

	$next.css({opacity: 0.0})
		  .addClass('active')
		  .animate({opacity: 1.0}, 1000, function() {
				$active.removeClass('active last-active');
	});
}

$(function() {
	setInterval("slideSwitch()", 7000 );
});
