/**
 * Created by a_wags25 on 10/28/14.
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
    $("body").append($overlay);

//capture click event and prevent anchor from default link behavior
    $(".page_gallery a").click(function(event){
        event.preventDefault();

        var imageAnchor = $(this).attr("href");
        //relaunch overlay with clicked image
        $image.attr("src", imageAnchor);



        $overlay.show();

        var captionText= $(this).children("p.photo_caption").text();
        $caption.text(captionText);

    });

//hide overlay when clicked
    $overlay.click(function () {
        $overlay.hide();
    });


});