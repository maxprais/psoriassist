/**
 * Created by User on 3/16/2016.
 */

var welcomeTopic = {
    id: 0,
    messages: [{
        text: 'Hey, Micah',
        id: 1,
        class: 'msg conversation',
        data: {type:'computer'}
    }, {
        text: 'How are you today? Did you sleep well?',
        id: 2,
        class: 'msg conversation animated zoomIn',
        data: {type:'computer'}
    }],
    responses: [{
        text: 'Yes',
        id: 3,
        class:'btn btn-success waves-effect waves-light conversation',
        data: {type:'user'}
    }, {
        text: 'No',
        id: 4,
        class:'btn btn-warning waves-effect waves-light'
    }]
};

var askToTakePhoto = {
    id: 1,
    messages: [{
        text: 'Great, glad to hear it, you know what they say: ' +
        'a good laugh and a long sleep are the best cures in the doctor\'s book',
        id: 5,
        class: 'msg conversation',
        data: {type:'computer'}
    }, {
        text: 'I must admit, Micah, the beauty sleep has a done' +
        ' a thing or two for you. I wonder how that\'s affected your skin - would you like to take a picture of it?',
        id: 6,
        class: 'msg conversation animated zoomIn',
        data: {type:'computer'}
    }],
    responses: [{
        text: 'Yes',
        id: 7,
        class:'btn btn-success waves-effect waves-light conversation',
        data: {type:'user'}
    }, {
        text: 'No',
        id: 8,
        class:'btn btn-warning waves-effect waves-light'
    }]
};

var wantsToTakePhoto = {
    id: 2,
    messages: [{
        text: 'Alrighty then. Remember: there are no good pictures; that\'s ' +
        'just how your face looks sometimes',
        id: 9,
        class: 'msg conversation animated zoomIn',
        data: {type:'computer'}
    }],
    responses: [{
        text: 'Take Photo',
        id: 10,
        class:'btn btn-success waves-effect waves-light conversation',
        href: '/app/camera/'
    }]
};

var skinIssue = {
    id: 3,
    messages: [{
        text: 'Great! Bare with me for a moment while I analyze this...',
        id: 11,
        class: 'animated zoomIn msg conversation'
    },{
        text: 'Seems like the lesion has gotten a bit worse. Lets take a look at your current PASI graph',
        id: 12,
        class: 'animated zoomIn msg conversation',
        graph: true
    },{
        text: 'I actually predict a more serious flare-up soon. Try in the next few days to get more sleep, exercise a bit more and' +
        ' focus on a better diet to reduce the likelihood of a flare-up.',
        id: 13,
        class: 'animated zoomIn msg conversation'
    },{
        text: 'Would you like to have a consultation with your Doctor?',
        id: 14,
        class: 'animated zoomIn msg conversation animated zoomIn'
    }],
    responses: [{
        text: 'Consult My Doctor',
        id: 15,
        class:'btn btn-success waves-effect waves-light animated zoomIn conversation',
        data: {type:'user'},
        href: '/app/doctor/'
    }, {
        text: 'No',
        id: 16,
        class:'btn btn-warning waves-effect waves-light animated zoomIn'
    }]
};

var reviewMedicine = {
    id: 4,
    messages: [{
        text: 'Would you like to follow Dr Cohen\'s advice and review your medication?',
        id: 17,
        class: 'animated zoomIn msg conversation'
    }],
    responses: [{
        text: 'Absolutely',
        id: 18,
        class: 'btn btn-success waves-effect waves-light animated zoomIn conversation',
        href: '/app/medicine/'
    },{
        text: 'Not now',
        id: 19,
        class: 'btn btn-warning waves-effect waves-light animated zoomIn conversation'
    }]
};

var manageEmotion = {
    id: 5,
    messages: [{
        text: 'I notice you are getting a bit stressed. Would you like to try relax for a bit and have a quick ' +
        'emotional management session?',
        id: 20,
        class: 'animated zoomIn msg conversation'
    }],
    responses: [{
        text: 'Sure',
        id: 21,
        class: 'btn btn-success waves-effect waves-light animated zoomIn conversation',
        href: '/app/emotional_management/'
    },{
        text: 'Not now',
        id: 21,
        class: 'btn btn-warning waves-effect waves-light animated zoomIn conversation'
    }]
};

var finishedChat = {
    id: 6,
    messages: [{
        text: 'Well, Micah, looks like we\'re all done for today, how about you check out your social network?' +
        ' In any case, be sure to check in soon!',
        id: 22,
        class: 'animated zoomIn msg conversation'
    }],
    responses: [{
        text: 'View My Profile',
        id: 23,
        class: 'btn btn-success waves-effect waves-light animated zoomIn conversation',
        href: '/app/profile/'
    },{
        text: 'Not now',
        id: 24,
        class: 'btn btn-warning waves-effect waves-light animated zoomIn conversation'
    }]
};

var topics = [welcomeTopic, askToTakePhoto, wantsToTakePhoto, skinIssue, reviewMedicine, manageEmotion, finishedChat];

function printTopic(topic, container, staggered, reloaded) {

    var messagesTotalTime = 0;

    topic.messages.forEach(function (msg, ind, arr) {
        setTimeout(function () {
            var messageHolder = $('<div></div>', {class:'messageHolder'});
            container.append(messageHolder);
            var welcomeText = $('<p></p>', {
                class: msg.class, id: 'msg' + msg.id,
                data: {type: 'computer'}, text: msg.text
            });
            messageHolder.append(welcomeText);
            if (topic.messages[ind].graph){
                chartHandler.createPasiChart();
            }
        }, staggered);
        messagesTotalTime += (staggered*ind);
    });

    setTimeout(function () {
        var row = $('<div></div>', {class: 'row'});
        container.append(row);
        var col = $('<div></div>', {class: 'col-md-6 col-md-offset-5'});
        row.append(col);
        topic.responses.forEach(function (response, ind, arr) {
            var responseOption = $('<a></a>', {
                id: 'response' + response.id, class: response.class + ' ' + (reloaded ? 'userResponse disabled': ''),
                data: {type: 'user'}, text: response.text
            });
            col.append(responseOption);

            removeBtn(responseOption);
            //if (responseOption.text() === 'No' || responseOption.text() === 'Not now'){
            //    if (responseOption.hasClass('disabled')){
            //        responseOption.remove();
            //    }
            //}
            responseOption.one('click', function(){
                var row = $('<div></div>', {class: 'row'});
                container.append(row);
                var col = $('<div></div>', {class: 'col-md-6 col-md-offset-5'});
                row.append(col);
                col.append($(this), $(this).next());
                $(this).addClass('disabled userResponse');
                //removeBtn($(this).next());
                $(this).next().remove();
                manager.respond();
            });


        });
    }, staggered);

    sendDataToServer(topic);
}

function removeBtn(btn){
    if (btn.text() === 'No' || btn.text() === 'Not now'){
       if (btn.hasClass('disabled')){
           btn.remove();
       }
    }
}

function TopicManager(){
    this.topics = [];
    this.currentTopicIndex = 0;
    this.respond = function(){
        console.log('this');
        if (topics[this.currentTopicIndex].responses[0].href){
            location.href=topics[this.currentTopicIndex].responses[0].href;
            this.currentTopicIndex++;
        }
        else{
            this.currentTopicIndex++;
            printTopic(topics[this.currentTopicIndex], $('.screen-wrapper'));
        }
    };
}

var manager = new TopicManager();

function Message(computerContent, userContent, index){
    this.computerContent = computerContent;
    this.userContent = userContent;
    this.index = index;
}

var message = new Message();


function sendDataToServer(msg){

    var msgObj = {
        msg: msg,
        user: $('.username').text()
    };

    $.ajax({
        url: '/app/sendata/',
        type: 'post',
        async: false,
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        data: JSON.stringify(msgObj),
        success: function(res){
            console.log(res)
        }
    })
}


function getDataFromServer(){

    $.get('rload', function (messageID){
        messageID = JSON.parse(messageID);
        arrangeData(messageID);
    });
}


function arrangeData(messageID){

    var topicsShown = messageID.map(function(id){
        manager.currentTopicIndex++;
        return topics[id];
    });

    var nextTopic = topics[manager.currentTopicIndex];
    if(topics[manager.currentTopicIndex]){
        topicsShown.push(nextTopic);
    }

    console.warn(topicsShown);
    topicsShown.forEach(function(item,idx, arr){
        printTopic(item, msgContainer, idx === arr.length -1 ? 500 : 0, idx !== arr.length-1);
    });
}

chartHandler = {};

(function (chartHandler) {
    chartHandler.createPasiChart = function () {
        var chartHolder = $('<canvas></canvas>', {id: 'pasiChart'});

        var messageHolder = $('<div></div>', {class:'messageHolder'});
        $('.screen-wrapper').append(messageHolder);
        messageHolder.append(chartHolder);
        chartHandler.viewPasiChart();
    };


    chartHandler.viewPasiChart = function () {

        var ctx = document.getElementById("pasiChart").getContext('2d');
        var option = {
            responsive: true
        };
        var data = {
            labels: ["1", "3", "6", "7", "9", "10", "13", "15", "18", "23", "25", "28", "31"],
            datasets: [
                {
                    label: "MARCH PASI SCORE",
                    fillColor: "#4285F4",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#4285F4",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [25, 14, 18, 7, 32, 6, 5, 8, 9, 18]
                }]
        };
        var myLineChart = new Chart(ctx).Line(data, option);
    }
})(chartHandler);


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

$(function(){
    window.msgContainer = $('.screen-wrapper');
    $('html, body').animate({scrollTop: $(document).height()}, 'slow');
    getDataFromServer();
});





