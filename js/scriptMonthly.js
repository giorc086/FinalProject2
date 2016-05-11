$(document).ready(function(){
    $("#showC").click(function(){
        $("div#spiderMonthly").hide();
        $("div#spiderConditions").show();
    });
    $("#showM").click(function(){
        $("div#spiderMonthly").show();
        $("div#spiderConditions").hide();
    });
});

$(function monthly() {
    Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'karla'
        }
    }
});

    $('#containerNov').highcharts({

        chart: {
            polar: true,
            type: 'line'
            //  areaspline or area.
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: [
            '#A7CA8C', //new verde
            '#6F6DAC', //new viola
            '#E19D6D', // new orange
            '#E36E57', //new red 
            ],


        title: {
            text: ''//title disabled
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Visibility', 'Snow', 'Temperature', 'Wind'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            max: 5,
            min: 2
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'NOVEMBER'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [4, 3, 4, 2],
            pointPlacement: 'on',
        }, {
            name: 'Lake Tahoe, CA',
            data: [5, 4, 4, 5],
            pointPlacement: 'on',            
        }, {
            name: 'Stratton, VT',
            data: [5, 1, 4, 4],
            pointPlacement: 'on',            
        }, {
            name: 'Park City, UT',
            data: [4, 5, 4, 4],
            pointPlacement: 'on',            
        }]
    });

$('#containerDec').highcharts({

        chart: {
            polar: true,
            type: 'line'
            //  areaspline or area.
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
         colors: [
            '#A7CA8C', //new verde
            '#6F6DAC', //new viola
            '#E19D6D', // new orange
            '#E36E57', //new red 
            ],

        title: {
            text: '' //no title
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Visibility', 'Snow', 'Temperature', 'Wind'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            max: 5,
            min: 2
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'DECEMBER'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [4, 3, 4, 2],
            pointPlacement: 'on',
        }, {
            name: 'Lake Tahoe, CA',
            data: [5, 5, 4, 4],
            pointPlacement: 'on',            
        }, {
            name: 'Stratton, VT',
            data: [5, 3, 5, 3],
            pointPlacement: 'on'
        }, {
            name: 'Park City, UT',
            data: [5, 5, 5, 5],
            pointPlacement: 'on'
        }]

    });
$('#containerJan').highcharts({

        chart: {
            polar: true,
            type: 'line'
            //  areaspline or area.
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
         colors: [
            '#A7CA8C', //new verde
            '#6F6DAC', //new viola
            '#E19D6D', // new orange
            '#E36E57', //new red 
            ],

        title: {
            text: ''//no title
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Visibility', 'Snow', 'Temperature', 'Wind'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            max: 5,
            min: 2

        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'JANUARY'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [4, 4, 4, 3],
            pointPlacement: 'on'
        }, {
            name: 'Lake Tahoe, CA',
            data: [5, 5, 4, 4],
            pointPlacement: 'on'
        }, {
            name: 'Stratton, VT',
            data: [2, 3, 3, 2],
            pointPlacement: 'on'
        }, {
            name: 'Park City, UT',
            data: [5, 5, 4, 5],
            pointPlacement: 'on'
        }]

    });
$('#containerFeb').highcharts({

        chart: {
            polar: true,
            type: 'line'
            //  areaspline or area.
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
          colors: [
            '#A7CA8C', //new verde
            '#6F6DAC', //new viola
            '#E19D6D', // new orange
            '#E36E57', //new red 
            ],


        title: {
            text: '' //notitle
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Visibility', 'Snow', 'Temperature', 'Wind'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            max: 5,
            min: 2

        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'FEBRUARY'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [3, 4, 3, 3],
            pointPlacement: 'on'
        }, {
            name: 'Lake Tahoe, CA',
            data: [5, 5, 4, 4],
            pointPlacement: 'on'
        }, {
            name: 'Stratton, VT',
            data: [4, 3, 4, 4],
            pointPlacement: 'on'
        }, {
            name: 'Park City, UT',
            data: [5, 5, 5, 4],
            pointPlacement: 'on'
        }]

    });
$('#containerMar').highcharts({

        chart: {
            polar: true,
            type: 'line'
            //  areaspline or area.
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
         colors: [
            '#A7CA8C', //new verde
            '#6F6DAC', //new viola
            '#E19D6D', // new orange
            '#E36E57', //new red  
            ],


        title: {
            text: '',//disabels title
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Visibility', 'Snow', 'Temperature', 'Wind'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            max: 5,
            min: 2

        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'MARCH'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [3, 3, 4, 3],
            pointPlacement: 'on'
        }, {
            name: 'Lake Tahoe, CA',
            data: [5, 5, 4, 3],
            pointPlacement: 'on'
        }, {
            name: 'Stratton, VT',
            data: [5, 3, 5, 4],
            pointPlacement: 'on'
        }, {
            name: 'Park City, UT',
            data: [5, 5, 4, 4],
            pointPlacement: 'on'
        }]

    });
$('#containerApr').highcharts({

        chart: {
            polar: true,
            type: 'line'
            //  areaspline or area.
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
         colors: [
            '#A7CA8C', //new verde
            '#6F6DAC', //new viola
            '#E19D6D', // new orange
            '#E36E57', //new red 
            ],


        title: {
            text: ''
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Visibility', 'Snow', 'Temperature', 'Wind'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            max: 5,
            min: 2

        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
             title:{
                text:'APRIL'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [4, 3, 4, 2],
            pointPlacement: 'on'
        }, {
            name: 'Lake Tahoe, CA',
            data: [5, 3, 3, 4],
            pointPlacement: 'on'
        }, {
            name: 'Stratton, VT',
            data: [5, 1, 3, 4],
            pointPlacement: 'on'
        }, {
            name: 'Park City, UT',
            data: [5, 4, 3, 3],
            pointPlacement: 'on'
        }]

    });
});