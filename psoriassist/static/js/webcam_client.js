/**
 * Created by User on 3/12/2016.
 */
Webcam.attach('#my_camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById('my_result').innerHTML = '<img src="' + data_uri + '"/>';
    });
}
take_snapshot();

function preview_snapshot() {
    // freeze camera so user can preview pic
    Webcam.freeze();

    // swap button sets
    document.getElementById('pre_take_buttons').style.display = 'none';
    document.getElementById('post_take_buttons').style.display = '';
}

function cancel_preview() {
    // cancel preview freeze and return to live camera feed
    Webcam.unfreeze();

    // swap buttons back
    document.getElementById('pre_take_buttons').style.display = '';
    document.getElementById('post_take_buttons').style.display = 'none';
}

function sendPhoto(img){
    $.ajax({
        type: "POST",
        url: '',
        data: [{image: img},{username: $('.username').text()}],
        dataType: 'JSON',
        success: function(data){
            console.log(data)
        }

    });
}


function save_photo() {
    // actually snap photo (from preview freeze) and display it
    Webcam.snap(function (data_uri) {
        // display results in page
        document.getElementById('my_result').innerHTML =
            '<h1>Here is your image:</h1>' +
            '<img src="' + data_uri + '"/>';

        // swap buttons back
        document.getElementById('pre_take_buttons').style.display = '';
        document.getElementById('post_take_buttons').style.display = 'none';
        sendPhoto(data_uri)


    })
}


