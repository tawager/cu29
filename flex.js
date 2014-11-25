/**
 * Created by a_wags25 on 11/5/14.
 */

 $(function (){
     $(".gal-img").on('click', 'li', function (){
         var myImage = $(this).children("img");
         $(this).parents('section').addClass('open');
         $('.hero').text($(myImage).attr('src'));
         $('.hero').append ("<img src='" + $(myImage).attr('src') + "'alt =''/>");
     });
 });