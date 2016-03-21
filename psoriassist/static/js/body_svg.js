/**
 * Created by User on 3/9/2016.
 */
photoBody = {};

$(function() {
    $('path').on('click', function () {
        console.log($(this));
        $(this).css('fill', 'blue');
        photoBody.hide();
    });
});


photoBody.hide = function () {
   $('.body-cont').addClass('hidden');
   $('.camera-cont').removeClass('hidden');
    Webcam.attach('#my_camera');
};




