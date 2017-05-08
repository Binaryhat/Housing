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

	var secondNavFixedPos= $("nav.navbar").height() +1;

	      

	        /*
         * ----------------------------------------------------------------------------------------
         *  SMOOTH SCROOL JS
         * ----------------------------------------------------------------------------------------
         */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

	/*==============================================================================
	                      =          01.stiky side and subnav           =
	=================================================================================*/

	$(window).scroll(function(){
		var scrollpos = $(window).scrollTop();

		if(scrollpos >= navOffset){	
			$(".detail-nav,#sidebar-contact").stick_in_parent();
			$(".detail-nav.is_stuck").css({'top' : secondNavFixedPos + 'px'});
			$("#sidebar-contact.is_stuck").css({'top' : secondNavFixedPos + 'px'});

			
		}
	});

	/*==============================================================================
	 *  MAGNIFIC POPUP JS
	 =================================================================================*/

	$('.gallery-popup').magnificPopup({
	    items: [
	         {
	           src: 'img/image1.jpg',
	         },
	         {
	           src: 'img/image2.jpg',
	          
	         },
	         {
	           src: 'img/image3.jpg', 
	          
	         },
	         {
	           src: 'img/image4.jpg',
	          
	         },
	         {
	           src: 'img/image5.jpg',
	          
	         },
	         	         {
	           src: 'img/image6.jpg',
	          
	         },
	         {
	           src: 'img/image7.jpg',
	          
	         },
	         {
	           src: 'img/image8.jpg', 
	          
	         }
	       ],

	    type: 'image',
	    
	    gallery: {
	        enabled: true
	        
	    },
	    


	});

	/*==============================================================================
	                      =          02. Bank offers slider           =
	=================================================================================*/
	$('.bank-slider').slick({
	    dots: false,
	     infinite: false,
	     speed: 300,
	     slidesToShow: 5,
	     slidesToScroll: 1,
	     
	     responsive: [
	       {
	         breakpoint: 1024,
	         settings: {
	           slidesToShow: 3,
	           slidesToScroll: 3,
	           infinite: true,
	           dots: false
	         }
	       },
	       {
	         breakpoint: 600,
	         settings: {
	           slidesToShow: 2,
	           slidesToScroll: 2
	         }
	       },
	       {
	         breakpoint: 480,
	         settings: {
	           slidesToShow: 1,
	           slidesToScroll: 1
	         }
	       }
	       // You can unslick at a given breakpoint now by adding:
	       // settings: "unslick"
	       // instead of a settings object
	     ]
	});
	
	/*==============================================================================
	                      =          Sidebar contact form        =
	=================================================================================*/

		  $('.form-control').on('focus blur', function (e) {
		      $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
		  }).trigger('blur');


})(jQuery);







