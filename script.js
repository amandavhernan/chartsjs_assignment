var ctx = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'],
        datasets: [{
            label: "Temperature anomalies in the continental United States", 
            data: [1.25,1.67,1.19,1.24,1.08,1.62,2.23,1.63,0.27,0.59,0.96,1.16,3.26,0.41,0.52,2.38,2.9,2.53,1.5,0.66,2.29],
            backgroundColor: ['rgba(238, 77, 90, 0.2)'],
            borderColor: ['rgb(238, 77, 90)'],
            borderWidth: 2,
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Title',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Subtitle'
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
