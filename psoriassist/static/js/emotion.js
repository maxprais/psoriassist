$(function move() {
    var elem = document.getElementById("myBar"); 
    var width = 0;
    var id = setInterval(frame,500);
    function frame() {
        if (width < 20){
            $("#myBar").css("backgroundColor","darkRed")
        }
        else if (width > 20 && width < 40){
            $("#myBar").css("backgroundColor","orange")
        }
        else if (width > 40 && width < 60){
             $("#myBar").css("backgroundColor","yellow")
        }
        else if (width  > 60 && width < 80){
             $("#myBar").css("backgroundColor","Green")
        }
        else if (width  > 80 && width < 100){
             $("#myBar").css("backgroundColor","DarkGreen")
        }
        if (width >= 100) {
            clearInterval(id);
            var completion = $('<p></p>', {
                text: 'Stress Session completed! Stress reduced 28%',
                class: 'msg animated zoomIn '
            });
            $('#completion').append(completion);
        } else {
            width+= .08;
            elem.style.width = width + '%'; 
            document.getElementById("label").innerHTML = Math.floor(width * 1) + '%';
        }
    }
});
