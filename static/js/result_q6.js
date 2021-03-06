$(function() {

//    var graph1;
    var container = document.getElementById('editor-render-5');

//    console.log('init');
//    console.log(q1);
//    console.log(q1.d1);

    Flotr.draw(container, [{
        data: [[0, result.working_hours[1]]],
        label: '1'
    }, {
        data: [[0, result.working_hours[2]]],
        label: '2'
    }, {
        data: [[0, result.working_hours[3]]],
        label: '3'
    }, {
        data: [[0, result.working_hours[4]]],
        label: '4'
    }, {
        data: [[1, result.working_hours[5]]],
        label: '5'
    }], {
        HtmlText: true,
        grid: {
            verticalLines: false,
            horizontalLines: false
        },
        xaxis: {
            showLabels: false
        },
        yaxis: {
            showLabels: false
        },
        pie: {
            show: true,
            explode: 6
        },
        mouse: {
            relative : true,
            track: true
        },
        legend: {
            position: 'se',
            backgroundColor: '#D2E8FF'
        }
    });
});
