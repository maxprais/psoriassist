/**
 * Created by User on 13/03/2016.
 */

conversation = {};

var savedConversation = ["WELCOME BACK, MICAH!","How are you doing today? Did you sleep well last night?"];
savedConversation.push("test");

if(window.localStorage['conversationText'] !== undefined){
    //load conversation
} else{
    window.localStorage.setItem('conversationText', JSON.stringify(savedConversation));
    console.log(JSON.parse(window.localStorage['conversationText']));
}

function save(sender, text){
     window.localStorage.setItem('conversationText', JSON.stringify(sender, text));
}

$(function(conversation){

    conversation.init = $(function () {
        $('#second').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            var yesButton = $('<a></a>', {
                id: 'initYes',
                class: "btn btn-success waves-effect waves-light button animated zoomIn",
                text: 'Yes'
            });
            var noButton = $('<a></a>', {id: 'initNo', class: "btn btn-warning waves-effect waves-light animated zoomIn", text: 'No'});
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
                var head = $('<p></p>', {text: 'Great, glad to hear it. You know what they say:' +
                'a good laugh and a long sleep are the best cures in the doctor\'s book', class: 'animated zoomIn'});
                $('#2').append(head);
            })
        };

});





divs = {};

divs.create = function () {
    var row = $('<div></div>', {class: 'row'});
    var col = $('<div></div>', {class: 'col-md-8 col-md-offset-2'});
    var wrapper = $('<div></div>', {class: 'screen-wrapper', id: '2'});

    $('#main-container').append(row);
    row.append(col);
    col.append(wrapper);

};


chosen = {};

chosen.button = function (button1, button2) {
    button1.addClass('disabled');
    button2.addClass('disabled');
};

