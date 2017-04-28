/*eslint linebreak-style: ["error", "windows"]*/
/*
* ----------------------------------------------------------------------------------------
Author       : Fullstackdev
Template Name: Tichki - Onepage Creative Business Template
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/

(function($) {
    "use strict";

                /*
             * ----------------------------------------------------------------------------------------
             *  city-select
             * ----------------------------------------------------------------------------------------
             */

             $(".search-dropdown").on('click','.search',function(){
                $('body').toggleClass('city-select-on');
                $('.city-search-panel').slideToggle( ); 

                    // to close Locality filter
                closeLocalityFilter();            

             });
             //close when click on close btn
             $(".city-search-panel").on('click','.closeBtn',function(){
                    $('body').removeClass('city-select-on');
                     $('.city-search-panel').slideToggle( ); 
             });

             //to close city search when click on overlay
             $(".city-select-overlay").on('click',function(){
                $('body').toggleClass('city-select-on');
                $('.city-search-panel').slideToggle( );             

             });

             //To set name of city in dropdown search buuton for both city and locality plus first search keyword
             $("#txtAutoComplete").focusout(function(){
                var cityname=$(this).val();
                if(cityname !== ""){
                    $(".search-dropdown .search").html(cityname +"<span class='caret'></span>");
                    // $('body').toggleClass('city-select-on');
                    // $('.city-search-panel').slideToggle( );  

                    //add city to localityy filter
                    $(".tag-container.filter-locality").html(
                                                                    "<span class='tag inline search-entity my-city'>"+
                                                                        "<span class='tag-label'>"+cityname+"</span>"+
                                                                        "<span class='tag-close'> ×</span>"+
                                                                    "</span>"
                                                                    );
                }
                
             });

             // $(".search-input").on('focusin',function(){
             //     $(".search-list ").addClass("open-list");
             // });
             // $(".search-input").on('focusout',function(){
             //     $(".search-list ").removeClass("open-list");
             // });


    /*==============================================================================
                          =          Locality filter          =
    =================================================================================*/

    /*----------  subsearch locality  ----------*/
        //open and close sub search
        $(".sub-search").on("click",function(){
            $(".sub-search").toggleClass("open-seach-list");
        });

        // to add active class after selection
        $(".sub-search .autosuggest-list-container ").on("click",".item",function(){
            $(".sub-search .autosuggest-list-container .item").removeClass("active");
            $(this).addClass("active");

        });

    /*----------  Range slider  ----------*/

    // Initialize Sliders
    $("#slider-range").slider({
        range: true,
        step: 5,
        min: 0,
        max: 500,
        values: [0, 500],
        slide: function(event, ui) {
            var minValue,
                maxValue;
            if (ui.values[0] > 99) {
                minValue = (ui.values[0] / 100) + " Cr";
            } else {
                minValue = ui.values[0] + " Lacs";
            }

            if (ui.values[1] > 99) {
                maxValue = (ui.values[1] / 100) + " Cr";
            } else {
                maxValue = ui.values[1] + " Lacs";
            }

            $("#amount").val(minValue + " - " + maxValue);


        }
    });

//slider stop position
    $("#slider-range").slider({
        stop: function(event, ui) {

            var values = $("#slider-range").slider("option", "values");
            var minValue,
                maxValue;
            if (values[0] > 99) {
                minValue = (values[0] / 100) + " Cr";
            } else {
                minValue = values[0] + " Lacs";
            }

            if (values[1] > 99) {
                maxValue = (values[1] / 100) + " Cr";
            } else {
                maxValue = values[1] + " Lacs";
            }

            if (values[0] > 0 && values[1] === 500) {
                $('.tag-container.filter-locality #tag-range').remove();
                $('.tag-container.filter-locality')
                    .append(' <span id="tag-range" class="tag inline active"><span class="tag-label">min ' + minValue + '</span> <span class="tag-close">×</span></span>');

            }
            if (values[0] === 0 && values[1] < 500) {
                $('.tag-container.filter-locality #tag-range').remove();
                $('.tag-container.filter-locality')
                    .append(' <span id="tag-range" class="tag inline active"><span class="tag-label">max ' + maxValue + '</span> <span class="tag-close">×</span></span>');
            }
            if (values[0] > 0 && values[1] < 500) {
                $('.tag-container.filter-locality #tag-range').remove();
                $('.tag-container.filter-locality')
                    .append(' <span id="tag-range" class="tag inline active"><span class="tag-label">Between ' + minValue + ' and ' + maxValue + '</span> <span class="tag-close">×</span></span>');
            }
            if (values[0] === 0 && values[1] === 500) {
                $('.tag-container.filter-locality #tag-range').remove();
            }

        }
    });






    // to create id dynamically for every keword
    $('#tag-filters span.tag.inline').each(function(index) {
        $(this).attr('id', "tag" + index);

    });


 // to add keywords to the top search
    $('#tag-filters').on("click", "span.tag.inline", function(e) {
        var $this = $(this);
        $this.toggleClass("active");
        if ($this.hasClass("active")) {
            $this.clone()
                .append('<span class="tag-close">×</span>')
                .appendTo(".tag-container.filter-locality");

            $(".search-initiator-btn").removeClass("disabled");
            $(".search-initiator-btn").addClass("active");

        } else {
            var theid = "#" + $this.attr("id");
            $(".tag-container.filter-locality>" + theid + "").remove();
        }

    });

// close and remove active class when click on close button of key in searchbar
    $('.tag-container.filter-locality').on("click", ".tag-close", function(e) {
        var $this = $(this);
        var theid = "#" + $this.parent().attr("id");

        $this.parent().remove();
        $("#tag-filters" + " " + theid + "").removeClass("active");

    });

// to reset seach bar // remove all search keys
    $("#reset-tag").on("click", function() {

        $(".tag-container.filter-locality> span[id^='tag']").remove();
        $("#tag-filters span.tag.inline.active").removeClass("active");


        $(".search-initiator-btn").removeClass("active");
        $(".search-initiator-btn").addClass("disabled");
    });







})(jQuery);






// Function
function openLocalityFilter() {
    $("#filter-locality").css("height", "100%");
    $("body").addClass("apply-to-body");

}

function closeLocalityFilter() {
    $("#filter-locality").css("height", "0%");
    $("body").removeClass("apply-to-body");

}
