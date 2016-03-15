/**
 * Created by User on 13/03/2016.
 */

conversation = {};

var savedConversation = ["WELCOME BACK, MICAH!", "How are you doing today? Did you sleep well last night?"];
savedConversation.push("test");

if (window.localStorage['conversationText'] !== undefined) {
    //load conversation
} else {
    window.localStorage.setItem('conversationText', JSON.stringify(savedConversation));
    console.log(JSON.parse(window.localStorage['conversationText']));
}

function save(sender, text) {
    window.localStorage.setItem('conversationText', JSON.stringify(sender, text));
}

$(function (conversation) {

    conversation.init = $(function () {
        $('#second').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            var yesButton = $('<a></a>', {
                id: 'initYes',
                class: "btn btn-success waves-effect waves-light button animated zoomIn",
                text: 'Yes'
            });
            var noButton = $('<a></a>', {
                id: 'initNo',
                class: "btn btn-warning waves-effect waves-light animated zoomIn",
                text: 'No'
            });
            $('.screen-wrapper').append(yesButton, noButton);

            //put this later in convo.. just for practicing purposes
            conversation.manageEmotion();
           // conversation.next();


        });
    });

    conversation.next = function () {
        console.log('in');
        $('#initYes').one('click', function () {
            console.log($(this));
            chosen.button($(this), $(this).next());
            divs.create(2);
            var wait = $('<p></p>', {text: '...', class: 'animated zoomIn'});
            $('#2').append(wait);
            wait.removeClass('zoomIn');
            wait.addClass('fadeOut');
            var head = $('<p></p>', {
                text: 'Great, glad to hear it. You know what they say: ' +
                'a good laugh and a long sleep are the best cures in the doctor\'s book', class: 'animated zoomIn wait'
            });
            $('#2').append(head);
            conversation.lesion();

        })
    };

    conversation.lesion = function () {
        divs.create(3);
        var asking_for_picture = $('<p></p>', {
            text: 'I must admit, Micah, the beauty sleep has a done' +
            ' a thing or two for you. You\'re skin looks a bit better- would you like to take a picture of it?',
            id: 'third', class: 'animated zoomIn waitTwo'
        });
        $('#3').append(asking_for_picture);

        $('#third').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            var yesBtn = $('<a></a>', {
                id: 'cameraYes',
                class: "btn btn-success waves-effect waves-light button animated  zoomIn navigate",
                text: 'Yes'
            });
            var noBtn = $('<a></a>', {
                id: 'cameraNo',
                class: "btn btn-warning waves-effect waves-light animated zoomIn navigate",
                text: 'No'
            });
            $('#3').append(yesBtn, noBtn);

            $('#cameraYes').one('click', function () {
                console.log($(this));
                chosen.button($(this), $(this).next());
                divs.create(4);
                var cam = $('<p></p>', {
                    text: 'Alrighty then. Remember: there are no good pictures; that\'s ' +
                    'just how your face looks sometimes', class: 'animated zoomIn wait'
                });
                $('#4').append(cam);
            })
        });


    };

    conversation.analyze = function(){
        divs.create(5);
        var analyze = $('<p></p>', {
            text: 'Great! Bare with me for a moment while I analyze this..',
            class: 'animated zoomIn '
        });
        $('#5').append(analyze);

        var wait = $('<p></p>', {text: '...', class: 'animated zoomIn wait'});
        $('#5').append(wait);
        wait.removeClass('zoomIn');
        wait.addClass('fadeOut');

        var warning = $('<p></p>', {
            text: 'Seems like the lesion has gotten a bit worse. Lets take a look at your current PASI graph',
            class: 'animated zoomIn waitTwo'
        });
        $('#5').append(warning);

        //---------->>>>>>>>>>>TO DO
        //NEED TO PULL UP PASI GRAPH!!!!!!!!!!!!!

        var flareUp = $('<p></p>', {
            text: 'Not only has your lesion worsened but ' +
            'I actually predict a more serious flare-up soon. Try in the next few days to get more sleep, exercise a bit more and' +
            ' focus on a better diet to reduce the likelihood of a flare-up.',
            class: 'animated zoomIn waitThree'
        });
        $('#5').append(flareUp);

        var consult = $('<p></p>', {
            text: 'Would you like to have a consultation with a doctor?',
            class: 'animated zoomIn waitFour',
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
                chosen.button($(this), $(this).next());
                divs.create(6);
                var doctor = $('<p></p>', {
                    text: 'Your wish is my command!', class: 'animated zoomIn wait'
                });
                $('#6').append(doctor);
                //------->>>>>>TO DO
                //NEED TO PULL UP DOCTOR PAGE. OFFER OPTION OF DOCTOR COHEN OR OTHER DOCTORS NEARBY. ONCE DOCTOR IS PICKED
                //A CALENDAR IS PULLED UP WITH ALL RELEVANT OPEN TIME SLOTS
            })
        });

    };

    conversation.medicine= function(){
        divs.create(7);
        var meds = $('<p></p>', {
            text: 'Would you like to follow Dr. Cohen\'s advice and review your current medicine?',
            class: 'animated zoomIn ',
            id: 'seven'
        });
        $('#7').append(meds);

        $('#seven').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            var yesBtn = $('<a></a>', {
                id: 'currentMedsYes',
                class: "btn btn-success waves-effect waves-light button animated  zoomIn navigate",
                text: 'Absolutely'
            });
            var noBtn = $('<a></a>', {
                id: 'currentMedsNo',
                class: "btn btn-warning waves-effect waves-light animated zoomIn navigate",
                text: 'Not now'
            });
            $('#7').append(yesBtn, noBtn);

            $('#currentMedsYes').one('click', function () {
                console.log($(this));
                chosen.button($(this), $(this).next());
                divs.create(8);
                var doctor = $('<p></p>', {
                    text: 'Your wish is my command!', class: 'animated zoomIn wait'
                });
                $('#8').append(doctor);

                //------->>>>>> TO DO
                //NAVIGATE TO CURRENT/PAST MEDICATION. WHEN YOU CLICK ON MEDS YOU CAN SEE OVERALL EFFECTIVENSS
                // WITH THREE DIFFERENT vales: 1) Treatment effectiveness (based on PASI)
                // 2) Average emotional wellness while on treatment and 3) ADHERENCE

            })
        })

    }

    conversation.otherMedicine = function(){
        divs.create(9);
        var otherMeds = $('<p></p>', {
            text: 'Seems like your current medication treatments could be better. Would you like to see other options?',
            class: 'animated zoomIn ',
            id: 'nine'
        });
        $('#9').append(otherMeds);

        $('#nine').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            var yesBtn = $('<a></a>', {
                id: 'otherMedsYes',
                class: "btn btn-success waves-effect waves-light button animated  zoomIn navigate",
                text: 'Absolutely'
            });
            var noBtn = $('<a></a>', {
                id: 'otherMedsNo',
                class: "btn btn-warning waves-effect waves-light animated zoomIn navigate",
                text: 'Not now'
            });
            $('#9').append(yesBtn, noBtn);

            $('#otherMedsYes').one('click', function () {
                console.log($(this));
                chosen.button($(this), $(this).next());
                divs.create(10);
                var otherMed = $('<p></p>', {
                    text: 'Alright! Let\'s see what else is out there!', class: 'animated zoomIn wait'
                });
                $('#10').append(otherMed);

                //------->>>>>> TO DO
                //NAVIGATE TO CURRENT/PAST MEDICATION. WHEN YOU CLICK ON MEDS YOU CAN SEE OVERALL EFFECTIVENSS
                // WITH THREE DIFFERENT vales: 1) Treatment effectiveness (based on PASI)
                // 2) Average emotional wellness while on treatment and 3) ADHERENCE

            })
        })


    };


    conversation.manageEmotion = function(){

        divs.create(11);
        var manage = $('<p></p>', {
            text: 'I notice you are getting a bit stressed. Would you like to try relax for a bit and have a quick ' +
            'emotional management session? ',
            class: 'animated zoomIn ',
            id: 'eleven'
        });
        $('#11').append(manage);

        $('#eleven').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatione', function () {
            var yesBtn = $('<a></a>', {
                id: 'manageYes',
                class: "btn btn-success waves-effect waves-light button animated  zoomIn navigate",
                text: 'Yup!'
            });
            var noBtn = $('<a></a>', {
                id: 'manageNo',
                class: "btn btn-warning waves-effect waves-light animated zoomIn navigate",
                text: 'Not now'
            });
            $('#11').append(yesBtn, noBtn);

            $('#manageYes').one('click', function () {
                console.log($(this));
                chosen.button($(this), $(this).next());
                divs.create(12);
                var manageStress = $('<p></p>', {
                    text: 'Off we go!', class: 'animated zoomIn wait'
                });
                $('#12').append(manageStress);

                //------->>>>>> TO DO
                //NAVIGATE TO STRESS REDUCTION SESSION.
                // shows a video and underneath it shows “real time” feedback of patients stress decreasing


            })
        })

    }




});


divs = {};

divs.create = function (x) {
    var row = $('<div></div>', {class: 'row'});
    var col = $('<div></div>', {class: 'col-md-8 col-md-offset-2'});
    var wrapper = $('<div></div>', {class: 'screen-wrapper', id: x});

    $('#main-container').append(row);
    row.append(col);
    col.append(wrapper);

};


chosen = {};

chosen.button = function (button1, button2) {
    button1.addClass('active');
    button2.addClass('disabled');
};

