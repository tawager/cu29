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
    var $specs = $('<p class="item_specs"></p>');
    var $price = $('<p class="item_price"></p>');


    var $purchase = $("<div class='purchase_item'></div>");


//add image to overlay
    $overlay.append($image);
    $overlay.append($caption);
    $overlay.append($specs);
    $overlay.append($price);
    $overlay.append($purchase);


//add overlay to page
    $("body").append($overlay);

//capture click event and prevent anchor from default link behavior
    $(".page_gallery a.item-image-link").click(function(event){
        event.preventDefault();

        var imageAnchor = $(this).attr("href");
        //relaunch overlay with clicked image
        $image.attr("src", imageAnchor);



        $overlay.show();

        var captionText= $(this).children("p.photo_caption").text();
        $caption.text(captionText);
        var specTag = $(this).children("p.specs").text();
        $specs.text(specTag);
        var priceTag =$(this).children("p.price").text();
        $price.text(priceTag);

        var $purchaseLink = $(this).children("div.make-it-mine").contents();
        $purchase.contents($purchaseLink);



    });

//hide overlay when clicked
    $overlay.click(function () {
        $overlay.hide();
    });

/*
  dP""b8    db    88     88     888888 88""Yb Yb  dP        db    88     88  dP""b8 88b 88 8b    d8 888888 88b 88 888888
 dP   `"   dPYb   88     88     88__   88__dP  YbdP        dPYb   88     88 dP   `" 88Yb88 88b  d88 88__   88Yb88   88
 Yb  "88  dP__Yb  88  .o 88  .o 88""   88"Yb    8P        dP__Yb  88  .o 88 Yb  "88 88 Y88 88YbdP88 88""   88 Y88   88
  YboodP dP""""Yb 88ood8 88ood8 888888 88  Yb  dP        dP""""Yb 88ood8 88  YboodP 88  Y8 88 YY 88 888888 88  Y8   88
*/

    /*

    var $gallery_image = $(".page_gallery li img");
    var $image_width ;
    var $adjusted_padding = function (){
            return (( 350 - $gallery_image.width() ) / 2);
        } ;

    $gallery_image.css( {
        "margin-left": $adjusted_padding,
        "margin-right": $adjusted_padding
    });
    */
    /*var $gallery_image = $(".page_gallery li img");
    $gallery_image.hover(
        function() {
            $(this).next("p.photo_caption").toggle();
        }, function (){
            $(this).next("p.photo_caption").css({
                "transform": "scale( 2.2)",
                "transition": "all .6s ease",
                "box-shadow": "0 5px 20px 0 rgba(0,0,0,0.75)",
                "z-index": "2001"

        });
        }
    );
    */

});