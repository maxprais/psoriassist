/**
 * Created by User on 3/9/2016.
 */
photoBody = {};

$(function() {
    $('path').on('click', function () {
        console.log($(this));
        $(this).css('fill', 'blue');
        photoBody.hide();
<<<<<<< HEAD
=======




>>>>>>> e7afa41c524d9810cfdbdbd2e53137f007ba1f45
    });
});


photoBody.hide = function () {
   $('.body-cont').addClass('hidden');
   $('.camera-cont').removeClass('hidden');
    //Webcam.attach('#my_camera');
};



