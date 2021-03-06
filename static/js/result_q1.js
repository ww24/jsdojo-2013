$(function() {

//    var graph1;
    var container = document.getElementById('editor-render-0');

//    console.log('init');
//    console.log(q1);
//    console.log(q1.d1);

    graph1 = Flotr.draw(container, [{
        data: [[0, result.times[1]]],
        label: '1回目'
    }, {
        data: [[1, result.times[2]]],
        label: '2回目'
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
