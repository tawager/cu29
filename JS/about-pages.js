/**
 * Created by a_wags25 on 4/10/15.
 */

$(document).ready(function(){
    /*$("#homePage_slideshow").owlCarousel({
     slideSpeed : 300,
     paginationSpeed : 400,
     singleItem:true
     });*/

    var $overlay = $('<div id= "overlay"></div>');
    var $image = $('<img>');
    var $caption = $('<p class="caption"></p>');

//add image to overlay
    $overlay.append($image);
    $overlay.append($caption);


//add overlay to page
    $(document.body).append($overlay);

//capture click event and prevent anchor from default link behavior
    $(".wrapper a").click(function(event){
        event.preventDefault();


        var imageAnchor = $(this).attr("href");
        //relaunch overlay with clicked image
        $image.attr("src", imageAnchor);



        $overlay.show();

        var captionText= $(this).children("p.informational-image-caption").text();
        $caption.text(captionText);

    });

//hide overlay when clicked
    $overlay.click(function () {
        $overlay.hide();
    });


    $("p.mineral-info").hide();
    $("div.informational-subsection").hide();
    var $mineral_name = $("li.fact");

//show mineral info when name is clicked
    $mineral_name.click(function() {
         $(this).children("p.mineral-info").toggle();

    });
    $mineral_name.click(function() {
        $(this).children("div.informational-subsection").toggle();

    });


    var isLateralNavAnimating = false;

        //open/close lateral navigation
        $('.cd-nav-trigger').on('click', function(event){
            event.preventDefault();
            //stop if nav animation is running
            if( !isLateralNavAnimating ) {
                if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;

                $('body').toggleClass('navigation-is-open');
                $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                    //animation is over
                    isLateralNavAnimating = false;
                });
            }
        });





});