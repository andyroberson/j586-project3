$(document).ready(function()  {
$.getJSON('maps-2000.json', function (data) {

    // Make codes uppercase to match the map data
    $.each(data, function () {
        this.code = this.code.toUpperCase();
    });

    // puts this map in id map
    $('#map').highcharts('Map', {

        chart : {
            borderWidth : 1
        },

        title : {
            text : 'US Obesity Rates (%)'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 10,
            type: 'logarithmic',
            minColor: '#EEEEFF',
            maxColor: '#000022',
            stops: [
                [.1, '#EFEFFF'],
                [0.5, '#4444FF'],
                [1, '#000022']
            ]
        },

        series : [{
            animation: {
                duration: 10
            },
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                format: '{point.code}'
            },
            name: 'Obesity percentage',
            tooltip: {
                pointFormat: '{point.code}: {point.value}%'
            }
        }]
    });
}); //end making map function

$.getJSON('maps-2003.json', function (data) {

    // Make codes uppercase to match the map data
    $.each(data, function () {
        this.code = this.code.toUpperCase();
    });

    // puts this map in id map
    $('#map2003').highcharts('Map', {

        chart : {
            borderWidth : 1
        },

        title : {
            text : 'US Obesity Rates (%)'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 10,
            type: 'logarithmic',
            minColor: '#EEEEFF',
            maxColor: '#000022',
            stops: [
                [.1, '#EFEFFF'],
                [0.5, '#4444FF'],
                [1, '#000022']
            ]
        },

        series : [{
            animation: {
                duration: 10
            },
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                format: '{point.code}'
            },
            name: 'Obesity percentage',
            tooltip: {
                pointFormat: '{point.code}: {point.value}%'
            }
        }]
    });
}); //end making map function

$.getJSON('maps-2003.json', function (data) {

    // Make codes uppercase to match the map data
    $.each(data, function () {
        this.code = this.code.toUpperCase();
    });

    // puts this map in id map
    $('#map2004').highcharts('Map', {

        chart : {
            borderWidth : 1
        },

        title : {
            text : 'US Obesity Rates (%)'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 10,
            type: 'logarithmic',
            minColor: '#EEEEFF',
            maxColor: '#000022',
            stops: [
                [.1, '#EFEFFF'],
                [0.5, '#4444FF'],
                [1, '#000022']
            ]
        },

        series : [{
            animation: {
                duration: 10
            },
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                format: '{point.code}'
            },
            name: 'Obesity percentage',
            tooltip: {
                pointFormat: '{point.code}: {point.value}%'
            }
        }]
    });
}); //end making map function

$.getJSON('maps-2005.json', function (data) {

    // Make codes uppercase to match the map data
    $.each(data, function () {
        this.code = this.code.toUpperCase();
    });

    // puts this map in id map
    $('#map2003').highcharts('Map', {

        chart : {
            borderWidth : 1
        },

        title : {
            text : 'US Obesity Rates (%)'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 10,
            type: 'logarithmic',
            minColor: '#EEEEFF',
            maxColor: '#000022',
            stops: [
                [.1, '#EFEFFF'],
                [0.5, '#4444FF'],
                [1, '#000022']
            ]
        },

        series : [{
            animation: {
                duration: 10
            },
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                format: '{point.code}'
            },
            name: 'Obesity percentage',
            tooltip: {
                pointFormat: '{point.code}: {point.value}%'
            }
        }]
    });
}); //end making map function

$.getJSON('maps-2006.json', function (data) {

    // Make codes uppercase to match the map data
    $.each(data, function () {
        this.code = this.code.toUpperCase();
    });

    // puts this map in id map
    $('#map2003').highcharts('Map', {

        chart : {
            borderWidth : 1
        },

        title : {
            text : 'US Obesity Rates (%)'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 10,
            type: 'logarithmic',
            minColor: '#EEEEFF',
            maxColor: '#000022',
            stops: [
                [.1, '#EFEFFF'],
                [0.5, '#4444FF'],
                [1, '#000022']
            ]
        },

        series : [{
            animation: {
                duration: 10
            },
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                format: '{point.code}'
            },
            name: 'Obesity percentage',
            tooltip: {
                pointFormat: '{point.code}: {point.value}%'
            }
        }]
    });
}); //end making map function

$.getJSON('maps-2007.json', function (data) {

    // Make codes uppercase to match the map data
    $.each(data, function () {
        this.code = this.code.toUpperCase();
    });

    // puts this map in id map
    $('#map2003').highcharts('Map', {

        chart : {
            borderWidth : 1
        },

        title : {
            text : 'US Obesity Rates (%)'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 10,
            type: 'logarithmic',
            minColor: '#EEEEFF',
            maxColor: '#000022',
            stops: [
                [.1, '#EFEFFF'],
                [0.5, '#4444FF'],
                [1, '#000022']
            ]
        },

        series : [{
            animation: {
                duration: 10
            },
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                format: '{point.code}'
            },
            name: 'Obesity percentage',
            tooltip: {
                pointFormat: '{point.code}: {point.value}%'
            }
        }]
    });
}); //end making map function

$.getJSON('maps-2008.json', function (data) {

    // Make codes uppercase to match the map data
    $.each(data, function () {
        this.code = this.code.toUpperCase();
    });

    // puts this map in id map
    $('#map2003').highcharts('Map', {

        chart : {
            borderWidth : 1
        },

        title : {
            text : 'US Obesity Rates (%)'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 10,
            type: 'logarithmic',
            minColor: '#EEEEFF',
            maxColor: '#000022',
            stops: [
                [.1, '#EFEFFF'],
                [0.5, '#4444FF'],
                [1, '#000022']
            ]
        },

        series : [{
            animation: {
                duration: 10
            },
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                format: '{point.code}'
            },
            name: 'Obesity percentage',
            tooltip: {
                pointFormat: '{point.code}: {point.value}%'
            }
        }]
    });
}); //end making map function

$.getJSON('maps-2009.json', function (data) {

    // Make codes uppercase to match the map data
    $.each(data, function () {
        this.code = this.code.toUpperCase();
    });

    // puts this map in id map
    $('#map2003').highcharts('Map', {

        chart : {
            borderWidth : 1
        },

        title : {
            text : 'US Obesity Rates (%)'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 10,
            type: 'logarithmic',
            minColor: '#EEEEFF',
            maxColor: '#000022',
            stops: [
                [.1, '#EFEFFF'],
                [0.5, '#4444FF'],
                [1, '#000022']
            ]
        },

        series : [{
            animation: {
                duration: 10
            },
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                format: '{point.code}'
            },
            name: 'Obesity percentage',
            tooltip: {
                pointFormat: '{point.code}: {point.value}%'
            }
        }]
    });
}); //end making map function

$.getJSON('maps-2010.json', function (data) {

    // Make codes uppercase to match the map data
    $.each(data, function () {
        this.code = this.code.toUpperCase();
    });

    // puts this map in id map
    $('#map2003').highcharts('Map', {

        chart : {
            borderWidth : 1
        },

        title : {
            text : 'US Obesity Rates (%)'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 10,
            type: 'logarithmic',
            minColor: '#EEEEFF',
            maxColor: '#000022',
            stops: [
                [.1, '#EFEFFF'],
                [0.5, '#4444FF'],
                [1, '#000022']
            ]
        },

        series : [{
            animation: {
                duration: 10
            },
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                format: '{point.code}'
            },
            name: 'Obesity percentage',
            tooltip: {
                pointFormat: '{point.code}: {point.value}%'
            }
        }]
    });
}); //end making map function

$.getJSON('maps-2011.json', function (data) {

    // Make codes uppercase to match the map data
    $.each(data, function () {
        this.code = this.code.toUpperCase();
    });

    // puts this map in id map
    $('#map2003').highcharts('Map', {

        chart : {
            borderWidth : 1
        },

        title : {
            text : 'US Obesity Rates (%)'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 10,
            type: 'logarithmic',
            minColor: '#EEEEFF',
            maxColor: '#000022',
            stops: [
                [.1, '#EFEFFF'],
                [0.5, '#4444FF'],
                [1, '#000022']
            ]
        },

        series : [{
            animation: {
                duration: 10
            },
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                format: '{point.code}'
            },
            name: 'Obesity percentage',
            tooltip: {
                pointFormat: '{point.code}: {point.value}%'
            }
        }]
    });
}); //end making map function




}); //end doc ready
