$(function() {

//    var graph1;
    var container = document.getElementById('editor-render-3');

    var
        horizontal = (horizontal ? true : false), // Show horizontal bars
//        d1 = [],                                  // First data series
//        d2 = [],                                  // Second data series
        point,                                    // Data point variable declaration
        i;

    for (i = 0; i < 4; i++) {

//        if (horizontal) {
//            point = [Math.ceil(Math.random()*10), i];
//        } else {
//            point = [i, Math.ceil(Math.random()*10)];
//        }
//
//        d1.push(point);
//        console.log(d1, '4-d1');

//        if (horizontal) {
//            point = [Math.ceil(Math.random()*10), i+0.5];
//        } else {
//            point = [i+0.5, Math.ceil(Math.random()*10)];
//        }
//
//        d2.push(point);
    };

    // Draw the graph
    Flotr.draw(
        container,
        [q4],
        {
            bars : {
                show : true,
                horizontal : horizontal,
                shadowSize : 0,
                barWidth : 0.5
            },
            mouse : {
                track : true,
                relative : true
            },
            yaxis : {
                min : 0,
                autoscaleMargin : 1
            }
        }
    );
});
