jQuery(document).ready(function($) {
	$('.large_entry a').hover(
		function (e) {
			var link_id = $(this).attr('rel');
			var left = 0;
			if ((e.pageX + 322) > $(window).width()) {
				left = $(this).width() - 322;
			}
			var top = $(this).outerHeight()+e.pageY;
			if ((top + $('#'+link_id).outerHeight() - $(window).scrollTop()) > $(window).height()) {
				top = e.pageY - $('#'+link_id).outerHeight()-$(this).outerHeight();
			}
			$('#'+link_id).css({'display' : 'block', 'margin-left' : left+'px', 'top' : top +'px'});
		}, 
		function () {
			var link_id = $(this).attr('rel');
			$('#'+link_id).css('display', 'none');
		}
	);
	
		
});