$(function move() {
    var elem = document.getElementById("myBar"); 
    var width = 2;
    var id = setInterval(frame,5);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            var completion = $('<p></p>', {
                text: 'Stress Session completed! Stress reduced 28%',
                class: 'msg animated zoomIn '
            });
            $('#completion').append(completion);
        } else {
            width+= .05;
            elem.style.width = width + '%'; 
            document.getElementById("label").innerHTML = Math.floor(width * 1) + '%';
        }
    }
});
