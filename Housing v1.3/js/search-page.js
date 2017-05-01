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
                    
                    //add city to locality filter
                    $(".tag-container.filter-locality").html(
                                                            "<span class='tag inline search-entity my-city'>"+
                                                                "<span class='tag-label'>"+cityname+"</span>"+
                                                                "<span class='tag-close'> ×</span>"+
                                                            "</span>"
                                                            );
                }
                
             });

             //close when city select
             $("#txtAutoComplete").on('input', function () {
                 var val = this.value;
                 if($('#cityList option').filter(function(){
                     return this.value === val;        
                 }).length) {
                     $('body').toggleClass('city-select-on');
                     $('.city-search-panel').slideToggle( );  

                     // clear all keys from locality filter
                     $(".tag-container.filter-locality> span[id^='tag']").remove();
                     $("#tag-filters span.tag.inline.active").removeClass("active");
                     $(".search-initiator-btn").removeClass("active");
                     $(".search-initiator-btn").addClass("disabled"); 

                     // clear disable class from buy selection
                     $(".buy-flat").find(".tag.inline").removeClass("span-disable");
                     $(".buy-shop").find(".tag.inline").removeClass("span-disable");
                     $(".buy-land").find(".tag.inline").removeClass("span-disable");
                 }
             });




    /*==============================================================================
                          =          Locality filter          =
    =================================================================================*/

    /*----------  subsearch locality  ----------*/
        //open and close sub search
        $(".sub-search").on("click",function(){
            $(".sub-search .autosuggest-list-container").slideToggle();
        });

        // to add active class after selection
        $(".sub-search .autosuggest-list-container ").on("click",".item",function(){
            $(".sub-search .autosuggest-list-container .item").removeClass("active");
            $(this).addClass("active");

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
      



       /*----------  buy filters  ----------*/
      //toggle between buy-flat, buy-shop, buy-land

      $(".buy").on("click",".tag.inline",function(){

        var $this=$(this);
        var parent =$this.parent();
        var statusActive = $(parent).find(".tag.inline.active");
        console.log(statusActive.length);
        if(statusActive.length === 1 && $this.hasClass("active")){
            $(".buy-flat").find(".tag.inline").removeClass("span-disable");
            $(".buy-shop").find(".tag.inline").removeClass("span-disable");
            $(".buy-land").find(".tag.inline").removeClass("span-disable");

            $("#buyShop-container").slideUp();
        }else{
            if(parent.attr('class')==="buy-flat"){
                
                $(".buy-shop").find(".tag.inline").addClass("span-disable");
                $(".buy-land").find(".tag.inline").addClass("span-disable");
            }
            else if(parent.attr('class')==="buy-shop"){
                $("#buyShop-container").slideDown();
                $("#budget-container").slideDown();
                $(".buy-flat").find(".tag.inline").addClass("span-disable");
                $(".buy-land").find(".tag.inline").addClass("span-disable");
            }
            else if(parent.attr('class')==="buy-land"){
                $("#buyShop-container").slideDown();
                $("#budget-container").slideDown();
                $(".buy-shop").find(".tag.inline").addClass("span-disable");
                $(".buy-flat").find(".tag.inline").addClass("span-disable");
            }
        }

        

       
      });

      $(".rent").on("click",".tag.inline",function(){
        var $this=$(this);
        var parent =$this.parent();
        var statusActive = $(parent).find(".tag.inline.active");
        console.log(statusActive.length);
        if(statusActive.length === 1 && $this.hasClass("active")){

            $("#buyShop-container").slideUp();
            $("#rentShop-container").slideUp();
            $("#budget-container").slideDown();

        }else{
           $("#buyShop-container").slideDown();
           $("#rentShop-container").slideDown();
           $("#budget-container").slideUp();
        }

      });


          /*----------  Rent shop slider  ----------*/

          // Initialize Sliders
          $("#rentShop-slider-range").slider({
              range: true,
              step: 5,
              min: 0,
              max: 5000,
              values: [0, 5000],
              slide: function(event, ui) {
                  var minValue,
                      maxValue;
                  if (ui.values[0] > 99) {
                      minValue = (ui.values[0] / 100) + " Lacs";
                  } else {
                      minValue = ui.values[0] + " K";
                  }

                  if (ui.values[1] > 99) {
                      maxValue = (ui.values[1] / 100) + " Lacs";
                  } else {
                      maxValue = ui.values[1] + " K";
                  }

                  $("#rentShop-amount").val(minValue + " - " + maxValue);


              }
          });

      //slider stop position
          $("#rentShop-slider-range").slider({
              stop: function(event, ui) {

                  var values = $("#rentShop-slider-range").slider("option", "values");
                  var minValue,
                      maxValue;
                  if (values[0] > 99) {
                      minValue = (values[0] / 100) + " Lacs";
                  } else {
                      minValue = values[0] + " K";
                  }

                  if (values[1] > 99) {
                      maxValue = (values[1] / 100) + " Lacs";
                  } else {
                      maxValue = values[1] + " K";
                  }

                  if (values[0] > 0 && values[1] === 5000) {
                      $('.tag-container.filter-locality #rentShop-tag-range').remove();
                      $('.tag-container.filter-locality')
                          .append(' <span id="rentShop-tag-range" class="tag inline active"><span class="tag-label">min ' + minValue + '</span> <span class="tag-close">×</span></span>');

                  }
                  if (values[0] === 0 && values[1] < 5000) {
                      $('.tag-container.filter-locality #rentShop-tag-range').remove();
                      $('.tag-container.filter-locality')
                          .append(' <span id="rentShop-tag-range" class="tag inline active"><span class="tag-label">max ' + maxValue + '</span> <span class="tag-close">×</span></span>');
                  }
                  if (values[0] > 0 && values[1] < 5000) {
                      $('.tag-container.filter-locality #rentShop-tag-range').remove();
                      $('.tag-container.filter-locality')
                          .append(' <span id="rentShop-tag-range" class="tag inline active"><span class="tag-label">Between ' + minValue + ' and ' + maxValue + '</span> <span class="tag-close">×</span></span>');
                  }
                  if (values[0] === 0 && values[1] === 5000) {
                      $('.tag-container.filter-locality #rentShop-tag-range').remove();
                  }

              }
          });
    /*----------  Budget Range slider  ----------*/

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

        /*----------  buyShop Range slider  ----------*/

        // Initialize Sliders
        $("#buyShop-slider-range").slider({
            range: true,
            step: 50,
            min: 0,
            max: 50000,
            values: [300, 50000],
            slide: function(event, ui) {
                var minValue=ui.values[0] + " sq.ft";
                var maxValue =ui.values[1] + "  sq.ft";
                

                $("#buyShop-amount").val(minValue + " - " + maxValue); //


            }
        });

    //buyShop  slider stop position
        $("#buyShop-slider-range").slider({
            stop: function(event, ui) {

                var values = $("#buyShop-slider-range").slider("option", "values");
                var minValue=ui.values[0] + " sq.ft";
                var maxValue =ui.values[1] + "  sq.ft";

                if (values[0] > 0 && values[1] === 50000) {
                    $('.tag-container.filter-locality #flat-tag-range').remove();
                    $('.tag-container.filter-locality')
                        .append(' <span id="buyShop-tag-range" class="tag inline active"><span class="tag-label">min ' + minValue + '</span> <span class="tag-close">×</span></span>');

                }
                if (values[0] === 0 && values[1] < 50000) {
                    $('.tag-container.filter-locality #buyShop-tag-range').remove();
                    $('.tag-container.filter-locality')
                        .append(' <span id="buyShop-tag-range" class="tag inline active"><span class="tag-label">max ' + maxValue + '</span> <span class="tag-close">×</span></span>');
                }
                if (values[0] > 0 && values[1] < 50000) {
                    $('.tag-container.filter-locality #buyShop-tag-range').remove();
                    $('.tag-container.filter-locality')
                        .append(' <span id="buyShop-tag-range" class="tag inline active"><span class="tag-label">Between ' + minValue + ' and ' + maxValue + '</span> <span class="tag-close">×</span></span>');
                }
                if (values[0] === 0 && values[1] === 50000) {
                    $('.tag-container.filter-locality #buyShop-tag-range').remove();
                }

            }
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
