(function($) {
    // "use strict";

    /*
     * ----------------------------------------------------------------------------------------
     *  Builders form
     * ----------------------------------------------------------------------------------------
     */


    jQuery(document).ready(function() {



        /*
            Form
        */
        $('.builders-form fieldset:first-child()').fadeIn('slow');

        $('.builders-form input[type="text"], .builders-form input[type="password"], .builders-form textarea').on('focus', function() {
            $(this).removeClass('input-error');
        });

        // next step
        $('.builders-form .btn-next').on('click', function() {
            var parent_fieldset = $(this).parents('fieldset');
            var next_step = true;

            // parent_fieldset.find('input[type="text"], input[type="password"], textarea').each(function() {
            //     if ($(this).val() == "") {
            //         $(this).addClass('input-error');
            //         next_step = false;
            //     } else {
            //         $(this).removeClass('input-error');
            //     }
            // });

            if (next_step) {
                parent_fieldset.fadeOut(400, function() {
                    $(this).next().fadeIn();
                    var Nameofclass = $(this).next().attr('class');
                    activeProgressBar(Nameofclass);
                });
            }

        });

        // previous step
        $('.builders-form .btn-previous').on('click', function() {
            $(this).parents('fieldset').fadeOut(400, function() {
                $(this).prev().fadeIn();
                var Nameofclass = $(this).prev().attr('class');
                activeProgressBar(Nameofclass);
            });
        });

        // submit
        $('.builders-form').on('submit', function(e) {

            $(this).find('input[type="text"], input[type="password"], textarea').each(function() {
                if ($(this).val() == "") {
                    e.preventDefault();
                    $(this).addClass('input-error');
                } else {
                    $(this).removeClass('input-error');
                }
            });

        });

        /*==============================================================================
                              =         Project photo upload slider         =
        =================================================================================*/
        $('.project-photo-slider').slick({
            dots: false,
             infinite: false,
             speed: 300,
             slidesToShow: 3,
             slidesToScroll: 1,
             variableWidth: true,


             
             responsive: [
               {
                 breakpoint: 1024,
                 settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1,
                   infinite: true,
                   dots: false
                 }
               },
               {
                 breakpoint: 600,
                 settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
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


    });



    //================== Functions===================//
    
    // function for progress bar active state
    function activeProgressBar(activeClass){
      $(".form-progressbar li").removeClass("active");
      $(".form-progressbar li."+activeClass).addClass("active");
    }

    // function for close and open Builders form
    
    $("#builderForm").on("click",function(){
        $(".builder-form-page").fadeIn();
        $("body").addClass("apply-to-body");
    });
    $(".builder-form-page").on("click",".closeBtn",function(){
        $(".builder-form-page").fadeOut();
        $("body").removeClass("apply-to-body");
    });



})(jQuery);
