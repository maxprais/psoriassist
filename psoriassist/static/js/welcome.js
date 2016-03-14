/**
 * Created by User on 13/03/2016.
 */

conversation = {};

$(function(conversation){

    conversation.init = $(function () {
        $('#second').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            var yesButton = $('<a></a>', {
                id: 'initYes',
                class: "btn btn-success waves-effect waves-light",
                text: 'Yes'
            });
            var noButton = $('<a></a>', {id: 'initNo', class: "btn btn-warning waves-effect waves-light", text: 'No'});
            $('.screen-wrapper').append(yesButton, noButton);

            conversation.next();

        });
    });

        conversation.next = function () {
            console.log('in');
            $('#initYes').one('click', function () {
                console.log($(this));
                chosen.button($(this), $(this).next());
                divs.create();
                var head = $('<h1></h1>', {text: 'Great, glad to hear it', class: 'animated zoomIn'});
                $('#2').append(head);
            })


        };

});




divs = {};

divs.create = function () {
    var row = $('<div></div>', {class: 'row'});
    var col = $('<div></div>', {class: 'col-md-8'});
    var wrapper = $('<div></div>', {class: 'screen-wrapper', id: '2'});

    $('#main-container').append(row, col, wrapper);

};


chosen = {};

chosen.button = function (button1, button2) {
    button1.addClass('disabled');
    button2.addClass('disabled');
};

