// grouped bar chart
var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["1990","1995","2000","2005","2010","2015"],
    datasets: [{
      label: 'Carbon Dioxide',
      backgroundColor: "rgb(238, 77, 90, 0.6)",
      borderColor: "rgb(238, 77, 90)",
      borderWidth: 2,
      data: [22849.92, 23890.22, 25637.87, 29663.75, 33328.38, 34521.91],
    }, {
      label: 'Methane',
      backgroundColor: "rgb(249, 123, 87, 0.6)",
      borderColor: "rgb(249, 123, 87)",
      borderWidth: 2,
      data: [7072.53, 6946.31, 6990.5, 7373.14, 7816.38, 8240.68],
    }, {
      label: 'Nitrous Oxide',
      backgroundColor: "rgb(247, 148, 93, 0.6)",
      borderColor: "rgb(247, 148, 93)",
      borderWidth: 2,
      data: [2421.26, 2537.56, 2535.63, 2721.22, 2851.54, 2997.24],
    }, {
      label: 'HFCs, PFCs and SF₆',
      backgroundColor: "rgb(239, 196, 126, 0.6)",
      borderColor: "rgb(239, 196, 126)",
      borderWidth: 2,
      data: [302.21, 329.36, 443.72, 541.91, 762.28, 1000.64],
    }],
   },
   options: {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Global greenhouse gas emissions',
            font: {
                size: 18
            }
        },
        subtitle: {
            display: true,
            text: 'In 2015, global greenhouse gas emissions totaled nearly 47 billion metric tons, which is a 43% increase from 1990.'
        }
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
            beginAtZero: true,
            title: {
                display: true,
                text: 'Emissions (million metric tons)'
            }
        }
    },
},
});

// line chart
var ctx = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'],
        datasets: [{
            label: "Average temperature change (ºF)", 
            data: [1.25,1.67,1.19,1.24,1.08,1.62,2.23,1.63,0.27,0.59,0.96,1.16,3.26,0.41,0.52,2.38,2.9,2.53,1.5,0.66,2.29],
            backgroundColor: ['rgba(238, 77, 90, 0.6)'],
            borderColor: ['rgb(238, 77, 90)'],
            borderWidth: 2
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Changes in the United States' average surface temperature",
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: '2012 and 2016 were the two warmest years on record since 2000.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Temperature Anomaly (ºF)'
                }
            }
        },
    },
});

// polar chart
new Chart(document.getElementById('polarChart'), {
    type: 'polarArea',
    data: {
      labels: ["2022","2021","2020","2019","2018","2017","2016"],
      datasets: [
        { 
          label: "Number of Wildfires",
          backgroundColor: ['rgb(236, 218, 154, 0.6)','rgb(239, 196, 126, 0.6)','rgb(243, 173, 106, 0.6)','rgb(247, 148, 93, 0.6)','rgb(249, 123, 87, 0.6)','rgb(246, 99, 86, 0.6)','rgb(238, 77, 90, 0.6)'],
          borderColor: ['rgb(236, 218, 154)','rgb(239, 196, 126)','rgb(243, 173, 106)','rgb(247, 148, 93)','rgb(249, 123, 87)','rgb(246, 99, 86)','rgb(238, 77, 90)'],
          data: [66255,58733,58258,49786,55911,66131,65575]
        }
      ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Wildfire frequency in the United States by year',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The United States saw the most wildfires in 2022.'
            }
        },
    },
});
