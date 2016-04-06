/*Created by User on 13/03/2016.*/

//Conversation Object

function SavedMessage(sender, content, topic) {
    this.sender = sender;
    this.messageContent = content;
    this.topic = topic;
}

conversation = {};

(function (conversation) {

    conversation.init = function () {

        //var welcomeUser = $('<p></p>', {class: 'animated zoomIn msg conversation', title: 'welcome', id:'first',
        //    data:{type: 'computer', text: 'Hey, ' + $('.username').text()}});
        //var howIsUser = $('<p></p>', {class: 'animated zoomIn msg conversation', title: 'welcome', id:'second',
        //    data:{type: 'computer', text: 'How are you doing today? Did you sleep well last night?'}});
        //
        //$('.screen-wrapper').append(welcomeUser, howIsUser);




        $('#second').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {

            var btnHolder = $('<div></div>', {class: 'btnHolder'});
            var yesButton = $('<a></a>', {
                title: 'welcome',
                id: 'initYes',
                class: "btn btn-success waves-effect waves-light button animated zoomIn",
                text: 'Yes'
            });
            var noButton = $('<a></a>', {
                title: 'welcome',
                id: 'initNo',
                class: "btn btn-warning waves-effect waves-light animated zoomIn",
                text: 'No'
            });
            $('.screen-wrapper').append(btnHolder);
            btnHolder.append(yesButton, noButton);
            conversation.analyze();
        });
    };

    conversation.next = function () {
        $('#initYes').one('click', function () {
            console.log($(this));
            buttonHandler.getBtnData($(this), $(this).next());
            messageHolders.create(2);
            var wait = $('<p></p>', {text: '...', class: 'animated zoomIn'});
            $('#2').append(wait);
            wait.removeClass('zoomIn');
            wait.addClass('fadeOut');
            var head = $('<p></p>', {
                title: 'photo',
                text: 'Great, glad to hear it. You know what they say: ' +
                'a good laugh and a long sleep are the best cures in the doctor\'s book', class: 'msg animated zoomIn wait conversation',
                data: {type: 'computer'}
            });
            $('#2').append(head);
            $(conversation.lesion);

        })
    };

    conversation.lesion = function () {
        messageHolders.create(3);
        var asking_for_picture = $('<p></p>', {
            title: 'photo',
            text: 'I must admit, Micah, the beauty sleep has a done' +
            ' a thing or two for you. You\'re skin looks a bit better- would you like to take a picture of it?',
            id: 'third', class: 'msg animated zoomIn waitTwo conversation', data: {type: 'computer'}
        });
        $('#3').append(asking_for_picture);

        $('#third').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            var btnHolder = $('<div></div>', {class: 'btnHolder'});
            var yesBtn = $('<a></a>', {
                title: 'photo',
                id: 'cameraYes',
                class: "btn btn-success waves-effect waves-light button animated zoomIn",
                text: 'Yes'
            });
            var noBtn = $('<a></a>', {
                title: 'photo',
                id: 'cameraNo',
                class: "btn btn-warning waves-effect waves-light animated zoomIn",
                text: 'No'
            });
            btnHolder.append(yesBtn, noBtn);
            $('#3').append(btnHolder);

            $('#cameraYes').one('click', function () {
                console.log($(this));
                buttonHandler.getBtnData($(this), $(this).next());
                messageHolders.create(4);
                var cam = $('<p></p>', {
                    title: 'photo',
                    text: 'Alrighty then. Remember: there are no good pictures; that\'s ' +
                    'just how your face looks sometimes', class: 'msg animated zoomIn wait conversation',
                    data: {type: 'computer'}
                });
                $('#4').append(cam);
            })

            //-------->>>>>>TO DO
            //DIRECT TO TAKING A PICTURE OF A LESION PART
        });

    };

    conversation.analyze = function () {
        messageHolders.create(5);
        var analyze = $('<p></p>', {
            text: 'Great! Bare with me for a moment while I analyze this..',
            class: 'msg animated zoomIn '
        });
        $('#5').append(analyze);

        var wait = $('<p></p>', {text: '...', class: 'msg animated zoomIn wait'});
        $('#5').append(wait);
        wait.removeClass('zoomIn');
        wait.addClass('fadeOut');

        var warning = $('<p></p>', {
            text: 'Seems like the lesion has gotten a bit worse. Lets take a look at your current PASI graph',
            class: 'msg animated zoomIn waitTwo conversation',
            id: 'pasi'
        });
        $('#5').append(warning);

        //---------->>>>>>>>>>>TO DO
        //NEED TO PULL UP PASI GRAPH!!!!!!!!!!!!!
        $('#pasi').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            chartHandler.createPasiChart();
            chartHandler.viewPasiChart();

            var flareUp = $('<p></p>', {
                text: 'Not only has your lesion worsened but ' +
                'I actually predict a more serious flare-up soon. Try in the next few days to get more sleep, exercise a bit more and' +
                ' focus on a better diet to reduce the likelihood of a flare-up.',
                class: 'msg animated zoomIn waitTwo'
            });
            $('#5').append(flareUp);

            var consult = $('<p></p>', {
                text: 'Would you like to have a consultation with a doctor?',
                class: 'msg animated zoomIn waitThree',
                id: 'five'
            });
            $('#5').append(consult);


            $('#five').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
                var yesBtn = $('<a></a>', {
                    id: 'consultYes',
                    class: "btn btn-success waves-effect waves-light button animated  zoomIn navigate",
                    text: 'Yes'
                });
                var noBtn = $('<a></a>', {
                    id: 'consultNo',
                    class: "btn btn-warning waves-effect waves-light animated zoomIn navigate",
                    text: 'No'
                });
                $('#5').append(yesBtn, noBtn);

                $('#consultYes').one('click', function () {
                    console.log($(this));
                    buttonHandler.getBtnData($(this), $(this).next());
                    messageHolders.create(6);
                    var doctor = $('<p></p>', {
                        text: 'Your wish is my command!', class: 'msg animated zoomIn wait'
                    });
                    $('#6').append(doctor);
                    //------->>>>>>TO DO
                    //NEED TO PULL UP DOCTOR PAGE. OFFER OPTION OF DOCTOR COHEN OR OTHER DOCTORS NEARBY. ONCE DOCTOR IS PICKED
                    //A CALENDAR IS PULLED UP WITH ALL RELEVANT OPEN TIME SLOTS
                })
            });
        });

    };


    conversation.medicine = function () {
        messageHolders.create(7);
        var meds = $('<p></p>', {
            text: 'Would you like to follow Dr. Cohen\'s advice and review your current medicine?',
            class: 'msg animated zoomIn ',
            id: 'seven'
        });
        $('#7').append(meds);

        $('#seven').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            var yesBtn = $('<a></a>', {
                id: 'currentMedsYes',
                class: "btn btn-success waves-effect waves-light button animated  zoomIn",
                text: 'Absolutely'
            });
            var noBtn = $('<a></a>', {
                id: 'currentMedsNo',
                class: "btn btn-warning waves-effect waves-light animated zoomIn",
                text: 'Not now'
            });
            $('#7').append(yesBtn, noBtn);

            $('#currentMedsYes').one('click', function () {
                console.log($(this));
                buttonHandler.getBtnData($(this), $(this).next());
                messageHolders.create(8);
                var doctor = $('<p></p>', {
                    text: 'Your wish is my command!', class: 'msg animated zoomIn wait'
                });
                $('#8').append(doctor);

                //------->>>>>> TO DO
                //NAVIGATE TO CURRENT/PAST MEDICATION. WHEN YOU CLICK ON MEDS YOU CAN SEE OVERALL EFFECTIVENSS
                // WITH THREE DIFFERENT vales: 1) Treatment effectiveness (based on PASI)
                // 2) Average emotional wellness while on treatment and 3) ADHERENCE

            })
        })

    };

    conversation.otherMedicine = function () {
        messageHolders.create(9);
        var otherMeds = $('<p></p>', {
            text: 'Seems like your current medication treatments could be better. Would you like to see other options?',
            class: 'msg animated zoomIn ',
            id: 'nine'
        });
        $('#9').append(otherMeds);

        $('#nine').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            var yesBtn = $('<a></a>', {
                id: 'otherMedsYes',
                class: "btn btn-success waves-effect waves-light button animated  zoomIn",
                text: 'Absolutely'
            });
            var noBtn = $('<a></a>', {
                id: 'otherMedsNo',
                class: "btn btn-warning waves-effect waves-light animated zoomIn",
                text: 'Not now'
            });
            $('#9').append(yesBtn, noBtn);

            $('#otherMedsYes').one('click', function () {
                console.log($(this));
                buttonHandler.getBtnData($(this), $(this).next());
                messageHolders.create(10);
                var otherMed = $('<p></p>', {
                    text: 'Alright! Let\'s see what else is out there!', class: 'msg animated zoomIn wait'
                });
                $('#10').append(otherMed);

                //------->>>>>> TO DO
                //NAVIGATE TO CURRENT/PAST MEDICATION. WHEN YOU CLICK ON MEDS YOU CAN SEE OVERALL EFFECTIVENSS
                // WITH THREE DIFFERENT vales: 1) Treatment effectiveness (based on PASI)
                // 2) Average emotional wellness while on treatment and 3) ADHERENCE

            })
        })


    };


    conversation.manageEmotion = function () {

        messageHolders.create(11);
        var manage = $('<p></p>', {
            text: 'I notice you are getting a bit stressed. Would you like to try relax for a bit and have a quick ' +
            'emotional management session? ',
            class: 'msg animated zoomIn ',
            id: 'eleven'
        });
        $('#11').append(manage);

        $('#eleven').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            var yesBtn = $('<a></a>', {
                id: 'manageYes',
                class: "btn btn-success waves-effect waves-light button animated  zoomIn",
                text: 'Yup!'
            });
            var noBtn = $('<a></a>', {
                id: 'manageNo',
                class: "btn btn-warning waves-effect waves-light animated zoomIn",
                text: 'Not now'
            });
            $('#11').append(yesBtn, noBtn);

            $('#manageYes').one('click', function () {
                console.log($(this));
                buttonHandler.getBtnData($(this), $(this).next());
                messageHolders.create(12);
                var manageStress = $('<p></p>', {
                    text: 'Off we go!', class: 'msg animated zoomIn wait'
                });
                $('#12').append(manageStress);

                //------->>>>>> TO DO
                //NAVIGATE TO STRESS REDUCTION SESSION.
                // shows a video and underneath it shows �real time� feedback of patients stress decreasing


            })
        })

    };

    conversation.saveConversation = function () {
        $('.conversation').each(function(ind, val){
            var msg = new SavedMessage($(val).data(), $(val).text(), $(val).attr('title'));
            sendData.toServer((msg));
        })
    };
    //conversation.saveCompConvo = function () {
    //    $('.msg').each(function (ind, val) {
    //        var newMsg = new SavedMessage('computer', $(val).text(), null, $(val).attr('title'));
    //        sendData.toServer(newMsg);
    //    });
    //};
    //
    //conversation.saveUserResponse = function () {
    //    $('.userResponse').each(function (ind, val) {
    //        var newUserMsg = new SavedMessage('user', null, $(val).text(), $(val).attr('title'));
    //        sendData.toServer(newUserMsg);
    //    });
    //}

})(conversation);

$(conversation.init);


messageHolders = {};

(function (messageHolders) {

    messageHolders.ids = 0;
    messageHolders.create = function (n) {
        var row = $('<div></div>', {class: 'row', id: 'row' + ++messageHolders.ids});
        var col = $('<div></div>', {class: 'col-md-8 col-md-offset-2'});
        var wrapper = $('<div></div>', {class: 'screen-wrapper', id: n});

        $('#main-container').append(row);
        row.append(col);
        col.append(wrapper);

    };

})(messageHolders);


buttonHandler = {};

(function (buttonHandler) {

    buttonHandler.idcount = 0;

    buttonHandler.getBtnData = function (selected, notselected) {
        var button1Text = selected.text();
        var buttonTitle = selected.attr('title');
        selected.remove();
        notselected.remove();
        buttonHandler.createButtonText(button1Text, buttonTitle);

    };

    buttonHandler.createButtonText = function(btnText, btnTitle){
        var responseHolder = $('<a></a>', {data:{type: 'user'}, title: btnTitle, text: btnText, class: "userResponse btn btn-success waves-effect waves-light disabled conversation",
            id:'btn' + ++buttonHandler.idcount});
        $('.screen-wrapper').append(responseHolder);
    }

})(buttonHandler);


var sendData = {};

(function (sendData) {

    sendData.setupNavigate = function () {
        $('.navigate').on('click', function () {
            conversation.saveConversation();
            //conversation.saveCompConvo();
            //conversation.saveUserResponse();
        })
    };

    $(sendData.setupNavigate);

    sendData.toServer = function (msg) {

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
            success: function (res) {

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

chartHandler = {};

(function (chartHandler) {
    chartHandler.createPasiChart = function () {
        var chartHolder = $('<canvas></canvas>', {id: 'pasiChart'})
        $('#5').append(chartHolder);
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
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [25, 14, 18, 7, 32, 6, 5, 8, 9, 18]
                }]
        };
        var myLineChart = new Chart(ctx).Line(data, option);
    }
})(chartHandler);
