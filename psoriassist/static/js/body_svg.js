/**
 * Created by User on 3/9/2016.
 */
body = {};

body.select = $(function(){
    $('g').on('click', function(){
        console.log($(this));
        $(this).addClass('selected');
    });
});



