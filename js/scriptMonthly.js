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
            type: 'area'
            //  areaspline or area.
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: [
        '#FC2400',
        '#01410f',
        '#9EA4AF',
        '#B2FC05'


            // '#df3555', //pink
            // '#01410f', //dark green
            // '#ff9c03', //giallo ocra 
            // '#88b0b0' //azzurro sbiadito
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
            data: [5, 4, 3.5, 2.5],
            pointPlacement: 'on',
            fillColor: '#FC2400',
            fillOpacity: 0.7
        }, {
            name: 'Lake Tahoe, CA',
            data: [3.5, 5, 2.85, 3],
            pointPlacement: 'on',            
            color:  '#01410f',
            fillOpacity: 0.7
        }, {
            name: 'Stratton, VT',
            data: [2.5, 1, 4.85, 5],
            pointPlacement: 'on',            
            color:  '##9EA4AF',
            fillOpacity: 0.7
        }, {
            name: 'Park City, UT',
            data: [4, 1, 2, 1],
            pointPlacement: 'on',            
            color:  '#B2FC05',
            fillOpacity: 0.7
        }]
    });

$('#containerDec').highcharts({

        chart: {
            polar: true,
            type: 'area'
            //  areaspline or area.
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
         colors: [
            '#df3555', //pink
            '#01410f', //dark green
            '#ff9c03', //giallo ocra 
            '#88b0b0' //azzurro sbiadito
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
            data: [5, 4, 3.5, 2.5],
            pointPlacement: 'on',
            fillColor: '#df3555',
            fillOpacity: 0.7

        }, {
            name: 'Lake Tahoe, CA',
            data: [3.5, 5, 2.85, 3],
            pointPlacement: 'on',            
            color:  '#01410f',
            fillOpacity: 0.7
        }, {
            name: 'Stratton, VT',
            data: [2.5, 1, 4.85, 5],
            pointPlacement: 'on',            
            color:  '#ff9c03',
            fillOpacity: 0.7
        }, {
            name: 'Park City, UT',
            data: [4, 1, 2, 1],
            pointPlacement: 'on',            
            color:  '#88b0b0',
            fillOpacity: 0.7
        }]

    });
$('#containerJan').highcharts({

        chart: {
            polar: true,
            type: 'area'
            //  areaspline or area.
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
         colors: [
            '#df3555', //pink
            '#01410f', //dark green
            '#ff9c03', //giallo ocra 
            '#88b0b0' //azzurro sbiadito
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
            data: [5, 4, 6, 2],
            pointPlacement: 'on',
            fillColor: '#df3555',
            fillOpacity: 0.7

        }, {
            name: 'Lake Tahoe, CA',
            data: [3, 5, 2, 3],
            pointPlacement: 'on',            
            color:  '#01410f',
            fillOpacity: 0.7
        }, {
            name: 'Stratton, VT',
            data: [2, 1, 4, 5],
            pointPlacement: 'on',            
            color:  '#ff9c03',
            fillOpacity: 0.7
        }, {
            name: 'Park City, UT',
            data: [4, 1, 2, 1],
            pointPlacement: 'on',            
            color:  '#88b0b0',
            fillOpacity: 0.7
        }]

    });
$('#containerFeb').highcharts({

        chart: {
            polar: true,
            type: 'area'
            //  areaspline or area.
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
          colors: [
            '#df3555', //pink
            '#01410f', //dark green
            '#ff9c03', //giallo ocra 
            '#88b0b0' //azzurro sbiadito
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
            data: [5, 4, 6, 2],
            pointPlacement: 'on',
            fillColor: '#df3555',
            fillOpacity: 0.2

        }, {
            name: 'Lake Tahoe, CA',
            data: [3, 5, 2, 3],
            pointPlacement: 'on',            
            color:  '#01410f',
            fillOpacity: 0.2
        }, {
            name: 'Stratton, VT',
            data: [2, 1, 4, 5],
            pointPlacement: 'on',            
            color:  '#ff9c03',
            fillOpacity: 0.2
        }, {
            name: 'Park City, UT',
            data: [4, 1, 2, 1],
            pointPlacement: 'on',            
            color:  '#88b0b0',
            fillOpacity: 0.7
        }]

    });
$('#containerMar').highcharts({

        chart: {
            polar: true,
            type: 'area'
            //  areaspline or area.
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
         colors: [
            '#df3555', //pink
            '#01410f', //dark green
            '#ff9c03', //giallo ocra 
            '#88b0b0' //azzurro sbiadito
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
            data: [5, 4, 6, 2],
            pointPlacement: 'on',
            fillColor: '#df3555',
            fillOpacity: 0.2

        }, {
            name: 'Lake Tahoe, CA',
            data: [3, 5, 2, 3],
            pointPlacement: 'on',            
            color:  '#01410f',
            fillOpacity: 0.2
        }, {
            name: 'Stratton, VT',
            data: [2, 1, 4, 5],
            pointPlacement: 'on',            
            color:  '#ff9c03',
            fillOpacity: 0.2
        }, {
            name: 'Park City, UT',
            data: [4, 1, 2, 1],
            pointPlacement: 'on',            
            color:  '#88b0b0',
            fillOpacity: 0.7
        }]

    });
$('#containerApr').highcharts({

        chart: {
            polar: true,
            type: 'area'
            //  areaspline or area.
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
         colors: [
            '#df3555', //pink
            '#01410f', //dark green
            '#ff9c03', //giallo ocra 
            '#88b0b0' //azzurro sbiadito
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
            data: [5, 4, 6, 2],
            pointPlacement: 'on',
            fillColor: '#df3555',
            fillOpacity: 0.8

        }, {
            name: 'Lake Tahoe, CA',
            data: [3, 5, 2, 3],
            pointPlacement: 'on',            
            color:  '#01410f',
            fillOpacity: 0.2
        }, {
            name: 'Stratton, VT',
            data: [2, 1, 4, 5],
            pointPlacement: 'on',            
            color:  '#ff9c03',
            fillOpacity: 0.2
        }, {
            name: 'Park City, UT',
            data: [4, 1, 2, 1],
            pointPlacement: 'on',            
            color:  '#88b0b0',
            fillOpacity: 0.7
        }]

    });
});