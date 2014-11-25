$(function(){
    $(".frame").on('click','.card',function() {
        //grab the image in the card that was clicked.
        var myImage = $(this).children('img');
        //get the name of the person.
        var myName = $(this).children('.name').text();
        //assign the src text to a var to be easier to handle.
        var imgSrc = $(myImage).attr('src');
        //add the class to the big section to get it to shrink
        $(this).parents('section').addClass('openPic');

        //two inserts for the price of one.  Easier to read on the projector.
        $('.hero img').fadeOut();
        $('.hero').empty().append('<img src="' + imgSrc +  '" alt="" />');
        $('.hero').append("<div class='name'>" + myName + "</div>");
        $('.hero img').on('click',function(){
            $(myImage).parent('.card').addClass('dead');
            $('.bang').show();
            setTimeout(function(){
                $('.bang').hide();
            },400);
        });
        $('.hero img').fadeIn();
    });

    $('header button').on('click',function(){
        $('.dead').removeClass('dead');
        $('.openPic').removeClass('openPic');
        $('.hero').empty();
    })
});
