/**
 * Created by a_wags25 on 12/5/14.
 */
$(document).ready (function (){


    $(function() {
        $('.banner').unslider();

    });

    $('.banner').unslider({
        speed: 1000,               //  The speed to animate each slide (in milliseconds)
        delay: 9000,              //  The delay between slide animations (in milliseconds)
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: false               //  Support responsive design. May break non-responsive designs
    });
    var slideshow = $('banner').unslider();
    var slide = slideshow.children('img.slide');

    slide.next();


});
