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

            var svg = d3.select('#chartNovLake')
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

            d3.csv('data/nov_Lake.csv', function(error, dataset) {
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

            var svg = d3.select('#chartDecLake')
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

            d3.csv('data/dec_Lake.csv', function(error, dataset) {
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

            var svg = d3.select('#chartJanLake')
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

            d3.csv('data/jan_Lake.csv', function(error, dataset) {
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

            var svg = d3.select('#chartFebLake')
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

            d3.csv('data/feb_Lake.csv', function(error, dataset) {
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

            var svg = d3.select('#chartMarLake')
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

            d3.csv('data/mar_Lake.csv', function(error, dataset) {
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

            var svg = d3.select('#chartAprLake')
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

            d3.csv('data/apr_Lake.csv', function(error, dataset) {
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

        var mySVG2 = d3.select("#barChartLake").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
            mySVG2.call(tip);

        d3.csv("data/snowfallLake.csv", type, function(error, data) {
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