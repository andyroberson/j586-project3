//charts for sugar and obesity

var amtDelivered = []; //tons of sugar delivered
var time = []; //sugar graph years
var percentage = []; //% of people obese for USA obesity graph
var years = []; //years for USA obesity graph

$(document).ready(function(){

$.ajax({
   type: "GET",
   url: "sugar-use.xml",
   dataType: "xml",
   success: function(xml) {

             $(xml).find('year').each(function(){
                 //once for every year, do this stuff
                 var $year = $(this);
                 time.push($year.attr("time"));; //finds the appropriate year, adds it to the time array
                 amtDelivered.push(parseInt($year.find('tons').text())); //make "tons" a number and then add it to the amtDelivered array
             });  //end loop for finding each year

          } //end success:function(xml) for sugar-use
      }); //end ajax call for sugar-use

$.ajax({
    type: "GET",
    url: "us-obesity-trend.xml",
    dataType: "xml",
    success: function(xml) {
            $(xml).find('year').each(function(){
            //do this once for every year
              var $year = $(this);
              years.push($year.attr("date"));; //find the year (which i called date) and add it to years array
              percentage.push($year.find('percent').text()); //find the percent obese and add it to the percentage array


            }); //end loop for finding each year
            buildChart();
        } //  end: success:function(xml) for obesity-trend
    }); //end ajax call for us-obesity-trend

      function buildChart() {

                  /* ************************* chart 1 - sugar delivered *********************************/
                  $('#sugar-chart').highcharts({  //chart will show up in id #sugar-chart
                  chart: {
                      type: 'areaspline',
                  },
                  title: {
                      text: 'Sugar Deliveries by Year'
                  },
                  legend: {
                      layout: 'vertical',
                      align: 'left',
                      verticalAlign: 'top',
                      x: 150,
                      y: 100,
                      floating: true,
                      borderWidth: 1,
                      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                  },
                  xAxis: {
                      categories: [
                          time[0], time[1], time[2], time [3] , time[4], time[5], time[6], time[7], time[8], time[9]
                      ],
                      plotBands: [{ // visualize the weekend
                          /*from: 4.5,
                          to: 6.5,
                          color: 'rgba(68, 170, 213, .2)'*/
                      }],

                      min: .5,
                      max: 8.5

                  },
                  yAxis: {
                      title: {
                          text: 'Tons'
                      },
                      min: 7000
                  },
                  tooltip: {
                      shared: true,
                      valueSuffix: ' units'
                  },
                  credits: {
                      enabled: false
                  },
                  plotOptions: {
                      areaspline: {
                          fillOpacity: 0.5
                      }
                  },
                  series: [{
                      name: 'Amount Delivered',
                      data: [amtDelivered[0], amtDelivered[1], amtDelivered[2], amtDelivered[3], amtDelivered[4], amtDelivered[5], amtDelivered[6],
                      amtDelivered[7], amtDelivered[8], amtDelivered[9]]
                  }/*, {
                      name: 'Jane',
                      data: [1, 3, 4, 3, 3, 5, 4]
                  }*/]
              });
              /********************************* var chart2 - obesity ***********************************************/

              $('#obesity-chart').highcharts({  //chart will show up in id obesity-chart
                        chart: {
                            type: 'areaspline',
                            renderTo: 'obesity-chart'
                        },
                        title: {
                            text: 'USA Obesity Trend by Percentage'
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'left',
                            verticalAlign: 'top',
                            x: 150,
                            y: 100,
                            floating: true,
                            borderWidth: 1,
                            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                        },
                        xAxis: {
                            categories: [
                                years[0], years[1], years[2], years [3] , years[4], years[5], years[6], years[7], years[8], years[9]
                            ],
                            plotBands: [{ // visualize the weekend
                                /*from: 4.5,
                                to: 6.5,
                                color: 'rgba(68, 170, 213, .2)'*/
                            }],

                            min: .5,
                            max: 8.5

                        },
                        yAxis: {
                            title: {
                                text: 'percent'
                            },

                        },
                        tooltip: {
                            shared: true,
                            valueSuffix: '%'
                        },
                        credits: {
                            enabled: false
                        },
                        plotOptions: {
                            areaspline: {
                                fillOpacity: 0.5
                            }
                        },
                        series: [{
                            name: 'Percentage',
                            data: [percentage[0]*100, percentage[1]*100, percentage[2]*100, percentage[3]*100, percentage[4]*100, percentage[5]*100, percentage[6]*100,
                            percentage[7]*100, percentage[8]*100, percentage[9]*100]
                        }/*, {
                            name: 'Jane',
                            data: [1, 3, 4, 3, 3, 5, 4]
                        }*/]
                    });

            } // end of buildChart

      }); //end doc ready
