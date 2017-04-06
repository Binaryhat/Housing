/*eslint linebreak-style: ["error", "windows"]*/
/*
* ----------------------------------------------------------------------------------------
Author       : Fullstackdev
Template Name: Tichki - Onepage Creative Business Template
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/

(function ($) {
	"use strict";


	
	var navOffset = $(".detail-nav").offset().top;

	var secondNavFixedPos= $("nav.navbar").height() + 10;


	$(window).scroll(function(){
		var scrollpos = $(window).scrollTop();

		if(scrollpos >= navOffset){	
			$(".detail-nav,#sidebar-contact").stick_in_parent();
			$(".detail-nav.is_stuck").css({'top' : secondNavFixedPos + 'px'});
			$("#sidebar-contact.is_stuck").css({'top' : secondNavFixedPos + 'px'});

			
		}
	});
})(jQuery);
