/**
 * Created by User on 3/9/2016.
 */
body = {};

body.select = $(function() {
    $('path').on('click', function () {
        console.log($(this));
        $(this).css('fill', 'blue');
        body.unselect()

    });
});


body.unselect = function(){
    $('path').css('fill', '');
};




