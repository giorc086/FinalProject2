$(function conditions() {
    Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'karla'
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
        '#FC2400',
        '#01410f',
        '#9EA4AF',
        '#B2FC05',
        '#df3555', //pink
        '#01410f' //dark green
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
            categories: ['November', 'December', 'January', 'February','March','April'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 5
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'SNOW'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [5, 4, 3.5, 2.5, 5, 4],
            pointPlacement: 'on',
        }, {
            name: 'Lake Tahoe, CA',
            data: [3.5, 5, 2.85, 3, 3, 2],
            pointPlacement: 'on',            
        }, {
            name: 'Stratton, VT',
            data: [2.5, 1, 4.85, 5, 3, 2],
            pointPlacement: 'on',            
        }, {
            name: 'Park City, UT',
            data: [4, 1, 2, 1, 3, 1],
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
            categories: ['November', 'December', 'January', 'February','March','April'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 5
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'TEMPERATURE'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [5, 4, 3.5, 2.5, 2, 2],
            pointPlacement: 'on',

        }, {
            name: 'Lake Tahoe, CA',
            data: [3.5, 5, 2.85, 3, 2, 2],
            pointPlacement: 'on',            
        }, {
            name: 'Stratton, VT',
            data: [2.5, 1, 4.85, 5, 2, 2],
            pointPlacement: 'on',            
        }, {
            name: 'Park City, UT',
            data: [4, 1, 2, 1, 2, 2],
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
            categories: ['November', 'December', 'January', 'February','March','April'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 5

        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'WIND'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [5, 4, 6, 2, 2, 2],
            pointPlacement: 'on'
        }, {
            name: 'Lake Tahoe, CA',
            data: [3, 5, 2, 3, 2, 2],
            pointPlacement: 'on'
        }, {
            name: 'Stratton, VT',
            data: [2, 1, 4, 5, 2, 2],
            pointPlacement: 'on'
        }, {
            name: 'Park City, UT',
            data: [4, 1, 2, 1, 2, 2],
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
            categories: ['November', 'December', 'January', 'February','March','April'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 5

        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            title:{
                text:'VISIBILITY'
            },
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },

        series: [{
            name: 'Vail, CO',
            data: [5, 4, 6, 2, 3, 3],
            pointPlacement: 'on',
        
        }, {
            name: 'Lake Tahoe, CA',
            data: [3, 5, 2, 3, 3, 2],
            pointPlacement: 'on'
        }, {
            name: 'Stratton, VT',
            data: [2, 1, 4, 5, 5, 5],
            pointPlacement: 'on'
        }, {
            name: 'Park City, UT',
            data: [4, 1, 2, 1, 3, 2],
            pointPlacement: 'on'
        }]

    });

});