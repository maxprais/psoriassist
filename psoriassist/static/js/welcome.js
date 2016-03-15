/**
 * Created by User on 13/03/2016.
 */


//Conversation Object
function SavedMessage(sender, content, response, topic){
    this.sender = sender;
    this.messageContent = content;
    this.response = response;
    this.topic = topic;
}

conversation = {};

(function(conversation){

    conversation.init = function () {
        $('#second').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            var btnHolder = $('<div></div>', {class: 'btnHolder'});
            var yesButton = $('<a></a>', {title: 'welcome', id: 'initYes', class: "btn btn-success waves-effect waves-light button animated zoomIn",
                text: 'Yes'});
            var noButton = $('<a></a>', {title: 'welcome', id: 'initNo', class: "btn btn-warning waves-effect waves-light animated zoomIn", text: 'No'});
            $('.screen-wrapper').append(btnHolder);
            btnHolder.append(yesButton, noButton);

            conversation.next();
        });
    };

    conversation.next = function () {
        $('#initYes').one('click', function () {
            buttonHandler.getBtnData($(this), $(this).next());
            messageHolders.create();
            var head = $('<p></p>', {title: 'photo', text: 'Great, glad to hear it. You know what they say:' +
            'a good laugh and a long sleep are the best cures in the doctor\'s book', class: 'animated zoomIn msg'});
            $('#' + messageHolders.ids).append(head);
        })
    };

    conversation.saveCompConvo = function () {
        $('.msg').each(function (ind, val) {
            var newMsg = new SavedMessage('computer', $(val).text(), null, $(val).attr('title'));
            sendData.toServer(newMsg);
        });
    };

    conversation.saveUserResponse = function () {
        $('.userResponse').each(function (ind, val) {
            var newUserMsg = new SavedMessage('user', null, $(val).text(), $(val).attr('title'));
            sendData.toServer(newUserMsg);
        });
    }

})(conversation);

$(conversation.init);



messageHolders = {};

(function(messageHolders){

    messageHolders.ids = 0;
    messageHolders.create = function () {
        var row = $('<div></div>', {class: 'row', id:'row'+ ++messageHolders.ids});
        var col = $('<div></div>', {class: 'col-md-8 col-md-offset-2'});
        var wrapper = $('<div></div>', {class: 'screen-wrapper', id: ++messageHolders.ids});

        $('#main-container').append(row);
        row.append(col);
        col.append(wrapper);

    };

})(messageHolders);




buttonHandler = {};

(function(buttonHandler){

    buttonHandler.idcount = 0;

    buttonHandler.getBtnData = function (selected, notselected) {
        var button1Text = selected.text();
        var buttonTitle = selected.attr('title');
        selected.remove();
        notselected.remove();
        buttonHandler.createButtonText(button1Text, buttonTitle);

    };

    buttonHandler.createButtonText = function(btnText, btnTitle){
        var responseHolder = $('<a></a>', {title: btnTitle, text: btnText, class: "userResponse btn btn-success waves-effect waves-light disabled", id:'btn' + ++buttonHandler.idcount});
        $('.screen-wrapper').append(responseHolder);
    }

})(buttonHandler);


var sendData = {};

(function(sendData){

    sendData.setupNavigate = function () {
        $('.navigate').on('click', function () {
            conversation.saveCompConvo();
            conversation.saveUserResponse();
        })
    };

    $(sendData.setupNavigate);

    sendData.toServer = function(msg){

        var msgObj = {
            msg: msg,
            user: $('.username').text()
        };

        $.ajax({
            url: '/app/sendata/',
            type: 'post',
            contentType: 'application/json; charset=UTF-8',
            dataType: 'json',
            data: JSON.stringify(msgObj),
            success: function(res){



            }
        })
    };

})(sendData);




//
//if(window.localStorage['conversationText'] !== undefined){
//    //load conversation
//} else{
//    window.localStorage.setItem('conversationText', JSON.stringify(savedConversation));
//    console.log(JSON.parse(window.localStorage['conversationText']));
//}
//
//function save(sender, text){
//     window.localStorage.setItem('conversationText', JSON.stringify(sender, text));
//}