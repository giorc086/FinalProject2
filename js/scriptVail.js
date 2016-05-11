/////////////NOVEMBER
(function(d3) {
    'use strict';

    var width = 100; //size of donut
    var height = 100;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 25; //width of donut

    
    var color = d3.scale.ordinal()
        .domain(["Good", "Ok", "Bad"])
        .range(["#E7E4C7", "#C5C7AE", "#879A79"]);

    var svg = d3.select('#chartNovVail')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');

       var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return d.percent + "%";
        })

    var arc = d3.svg.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);

 

    var pie = d3.layout.pie()
        .value(function(d) {
            return d.month;
        })
        .sort(null);

    svg.call(tip);

    d3.csv('data/nov_Vail.csv', function(error, dataset) {
        dataset.forEach(function(d) {
            d.month = +d.month;
        });

        var path = svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d, i) {
                return color(d.data.condition);
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide);

    });

})(window.d3);

/////////////DECEMBER
(function(d3) {
    'use strict';

    var width = 100; //size of donut
    var height = 100;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 25; //width of donut

    var color = d3.scale.ordinal()
        .domain(["Good", "Ok", "Bad"])
        .range(["#E7E4C7", "#C5C7AE", "#879A79"]);

    var svg = d3.select('#chartDecVail')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');

    var arc = d3.svg.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);

    var pie = d3.layout.pie()
        .value(function(d) {
            return d.month;
        })
        .sort(null);

    d3.csv('data/dec_Vail.csv', function(error, dataset) {
        dataset.forEach(function(d) {
            d.month = +d.month;
        });

        var path = svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d, i) {
                return color(d.data.condition);
            });

    });

})(window.d3);

/////////////JANUARY
(function(d3) {
    'use strict';

    var width = 100; //size of donut
    var height = 100;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 25; //width of donut

    var color = d3.scale.ordinal()
        .domain(["Good", "Ok", "Bad"])
        .range(["#E7E4C7", "#C5C7AE", "#879A79"]);

    var svg = d3.select('#chartJanVail')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');

    var arc = d3.svg.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);

    var pie = d3.layout.pie()
        .value(function(d) {
            return d.month;
        })
        .sort(null);

    d3.csv('data/jan_Vail.csv', function(error, dataset) {
        dataset.forEach(function(d) {
            d.month = +d.month;
        });

        var path = svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d, i) {
                return color(d.data.condition);
            });
    });

})(window.d3);

/////////////FEBRUARY
(function(d3) {
    'use strict';

    var width = 100; //size of donut
    var height = 100;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 25; //width of donut

    var color = d3.scale.ordinal()
        .domain(["Good", "Ok", "Bad"])
        .range(["#E7E4C7", "#C5C7AE", "#879A79"]);

    var svg = d3.select('#chartFebVail')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');

    var arc = d3.svg.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);

    var pie = d3.layout.pie()
        .value(function(d) {
            return d.month;
        })
        .sort(null);

    d3.csv('data/feb_Vail.csv', function(error, dataset) {
        dataset.forEach(function(d) {
            d.month = +d.month;
        });

        var path = svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d, i) {
                return color(d.data.condition);
            });

    });

})(window.d3);


/////////////MARCH
(function(d3) {
    'use strict';

    var width = 100; //size of donut
    var height = 100;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 25; //width of donut

    var color = d3.scale.ordinal()
        .domain(["Good", "Ok", "Bad"])
        .range(["#E7E4C7", "#C5C7AE", "#879A79"]);

    var svg = d3.select('#chartMarVail')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');

    var arc = d3.svg.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);

    var pie = d3.layout.pie()
        .value(function(d) {
            return d.month;
        })
        .sort(null);

    d3.csv('data/mar_Vail.csv', function(error, dataset) {
        dataset.forEach(function(d) {
            d.month = +d.month;
        });

        var path = svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d, i) {
                return color(d.data.condition);
            });
    });

})(window.d3);

/////////////APRIL
(function(d3) {
    'use strict';

    var width = 100; //size of donut
    var height = 100;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 25; //width of donut

    var color = d3.scale.ordinal()
        .domain(["Good", "Ok", "Bad"])
        .range(["#E7E4C7", "#C5C7AE", "#879A79"]);

    var svg = d3.select('#chartAprVail')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');

    var arc = d3.svg.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);

    var pie = d3.layout.pie()
        .value(function(d) {
            return d.month;
        })
        .sort(null);

    d3.csv('data/apr_Vail.csv', function(error, dataset) {
        dataset.forEach(function(d) {
            d.month = +d.month;
        });

        var path = svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d, i) {
                return color(d.data.condition);
            });

    });

})(window.d3);

//////////bar chart below
var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
    },
    width = 700 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .5);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(8);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return d.inches + '" ';
    })

var mySVG2 = d3.select("#barChartVail").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

mySVG2.call(tip);

d3.csv("data/snowfallVail.csv", type, function(error, data) {
    if (error) throw error;

    x.domain(data.map(function(d) {
        return d.month;
    }));
    y.domain([0, d3.max(data, function(d) {
        return d.inches;
    })]);

    mySVG2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    mySVG2.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Inches");

    mySVG2.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) {
            return x(d.month);
        })
        .attr("width", x.rangeBand())
        .attr("y", function(d) {
            return y(d.inches);
        })
        .attr("height", function(d) {
            return height - y(d.inches);
        })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);


    //         mySVG2.append("text")
    // .attr("text-anchor", "left")  
    // .style("font-size", "16px") 
    // .style("margin", "10px")
    // .text("AVERAGE SNOWFALL");
});

function type(d) {
    d.inches = +d.inches;
    return d;
}