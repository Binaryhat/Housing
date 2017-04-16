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


    /*==============================================================================
                          =          Locality filter          =
    =================================================================================*/

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







    $('#tag-filters span.tag.inline').each(function(index) {
        $(this).attr('id', "tag" + index);

    });



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

    $('.tag-container.filter-locality').on("click", ".tag-close", function(e) {
        var $this = $(this);
        var theid = "#" + $this.parent().attr("id");

        $this.parent().remove();
        $("#tag-filters" + " " + theid + "").removeClass("active");

    });

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
