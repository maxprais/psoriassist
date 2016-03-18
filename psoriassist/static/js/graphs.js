


chartHandler = {};


(function (chartHandler) {
    chartHandler.createPasiChart = function () {
        var chartHolder = $('<canvas></canvas>', {id: 'pasiChart'})
        $('#physical').append(chartHolder);
    };

    chartHandler.createEmotionalChart = function () {
        var chartHolder = $('<canvas></canvas>', {id: 'emotionalChart'})
        $('#emotional').append(chartHolder);
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

    chartHandler.viewEmotionalChart = function () {

        var ctx = document.getElementById("emotionalChart").getContext('2d');
        var option = {
            responsive: true
        };
        var data = {
            labels: ["1", "3", "6", "7", "9", "10", "13", "15", "18", "23", "25", "28", "31"],
            datasets: [
                {
                    label: "MARCH EMOTIONAL SCORE",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [25, 14, 18, 7, 32, 6, 5, 8, 9, 18]
                }]
        };
        var myLineCharts = new Chart(ctx).Line(data, option);
    }

})(chartHandler);

$(chartHandler.createPasiChart);
$(chartHandler.viewPasiChart);

$(chartHandler.createEmotionalChart);
$(chartHandler.viewEmotionalChart);
