$(function conditions() {
    Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Istok Web'
        }
    }
});

    $('#containerSnowC').highcharts({

        chart: {
            polar: true,
            type: 'line'
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
            categories: ['November', 'December', 'January', 'February','March','April'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            allowDecimals: true
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 80
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'SNOW (in)'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [29, 29, 35, 36, 26, 21],
            pointPlacement: 'on',
        }, {
            name: 'Lake Tahoe, CA',
            data: [49.7, 60.7, 73, 75, 84.6, 35.8],
            pointPlacement: 'on',            
        }, {
            name: 'Stratton, VT',
            data: [8.8, 27.9, 33.9, 27.8, 23.3, 5.7],
            pointPlacement: 'on',            
        }, {
            name: 'Park City, UT',
            data: [59.5, 76.8, 65.4, 59.2, 54.8, 46.6],
            pointPlacement: 'on',            
        }]
    });

$('#containerTemperatureC').highcharts({

        chart: {
            polar: true,
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
            categories: ['November', 'December', 'January', 'February','March','April'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            allowDecimals: true
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 10,
            max: 40
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'TEMPERATURE (°F)'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [17.5, 18.8, 15.2, 13.9, 21, 29.5],
            pointPlacement: 'on',

        }, {
            name: 'Lake Tahoe, CA',
            data: [30.9, 33.5, 31.7, 31.7, 34.6, 35.8],
            pointPlacement: 'on',            
        }, {
            name: 'Stratton, VT',
            data: [19, 23.8, 23.7, 20.7, 25.5, 38.5],
            pointPlacement: 'on',            
        }, {
            name: 'Park City, UT',
            data: [21.2, 23.8, 16.9, 22.4, 30.8, 40],
            pointPlacement: 'on',            
        }]

    });
$('#containerWindC').highcharts({

        chart: {
            polar: true,
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
            categories: ['November', 'December', 'January', 'February','March','April'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 20

        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'WIND (mph)'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [15, 15, 16, 16, 17, 19],
            pointPlacement: 'on'
        }, {
            name: 'Lake Tahoe, CA',
            data: [2.1, 5.8, 4, 4, 5, 6],
            pointPlacement: 'on'
        }, {
            name: 'Stratton, VT',
            data: [3.5, 5.3, 4, 4.2,4.7, 4.4],
            pointPlacement: 'on'
        }, {
            name: 'Park City, UT',
            data: [2, 2, 1, 2, 3, 7],
            pointPlacement: 'on'
        }]

    });
$('#containerVisibilityC').highcharts({

        chart: {
            polar: true,
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
            categories: ['November', 'December', 'January', 'February','March','April'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 10

        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'VISIBILITY (mi)'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [7, 8,7, 7, 6, 7],
            pointPlacement: 'on',
        
        }, {
            name: 'Lake Tahoe, CA',
            data: [8, 8, 9, 9, 9, 8],
            pointPlacement: 'on'
        }, {
            name: 'Stratton, VT',
            data: [9, 8, 8, 7, 8, 9],
            pointPlacement: 'on'
        }, {
            name: 'Park City, UT',
            data: [7, 9, 9, 9, 9, 9],
            pointPlacement: 'on'
        }]

    });

});