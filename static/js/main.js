$('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

Chart.plugins.unregister(ChartDataLabels);

Chart.scaleService.updateScaleDefaults('logarithmic', {
    ticks: {
        callback: function(tick, index, ticks) {
            return tick.toLocaleString()
        }
    }
});

// // Summary
// var canvasProcPerMode = document.getElementById('procurement-per-mode').getContext('2d');
// var chartProcPerMode = new Chart(canvasProcPerMode, {
//     type: 'bar',
//     data: {
//         labels: ['Public Bidding', 'Small Value Procurement', 'Shopping', 'Direct Contracting', 'APR', 'Repeat Order'],
//         datasets: [{
//             label: 'Completed',
//             data: [153, 938, 74, 47, 68, 0],
//             backgroundColor: 'rgba(0, 51, 176, 0.85)'
//             },
//             {
//             label: 'Failed',
//             data: [34, 184, 19, 7, 0, 0],
//             backgroundColor: 'rgba(210, 162, 55, 0.85)'
//             }
//         ]
//     },
//     options: {
//         maintainAspectRatio: true,
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Completed and Failed Procurement Activities'
//         },
//         scales: {
//             xAxes: [{
//                 scaleLabel: {
//                     display: false,
//                     // labelString: 'Procurement Activites'
//                 },
//                 ticks: {
//                     beginAtZero: true
//                 },
//                 stacked: true
//             }],
//             yAxes: [{stacked: true}]
//         }
//     }
// });
//
// var canvasContractsPerMode = document.getElementById('contracts-per-mode').getContext('2d');
// var chartContractsPerMode = new Chart(canvasContractsPerMode, {
//     type: 'bar',
//     data: {
//         datasets: [{
//             label: 'Contract Cost',
//             data: [437999227.88, 104893092.81, 3000490.03, 1756649.26, 787526.57, 946100.00],
//             type: 'line',
//             fill: false,
//             borderColor: 'rgba(210, 162, 55, 0.85)',
//             pointRadius: 5,
//             pointBorderColor: 'rgba(210, 162, 55, 0.85)',
//             pointBackgroundColor: 'rgba(210, 162, 55, 0.85)',
//             backgroundColor: 'rgba(210, 162, 55, 0.85)',
//             yAxisID: 'cost',
//         },{
//             label: 'Contracts Awarded',
//             data: [282, 1407, 87, 50, 26, 2],
//             backgroundColor: 'rgba(0, 51, 176, 0.85)',
//             yAxisID: 'awards',
//         }],
//         labels: ['Public Bidding', 'Small Value Procurement', 'Shopping', 'Direct Contracting', 'Agency Procurement Request', 'Repeat Order']
//     },
//     options: {
//         maintainAspectRatio: true,
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Contract Cost and Contracts Awarded'
//         },
//         scales: {
//             yAxes: [{
//                 id: 'cost',
//                 type: 'logarithmic',
//                 position: 'left',
//                 ticks: {
//                     maxTicksLimit: 10,
//                     max: 500000000,
//                     min: 0,
//                     fontColor: 'rgba(210, 162, 55, 1)'
//                 }
//             },
//                 {
//                 id: 'awards',
//                 type: 'linear',
//                 position: 'right',
//                 ticks: {
//                     maxTicksLimit: 10,
//                     max: 1500,
//                     min: 0,
//                     fontColor: 'rgba(0, 51, 176, 1)'
//                 }
//             }],
//         }
//     }
// });
//
// var canvasSpendingPerMode = document.getElementById('spending-per-mode').getContext('2d');
// var chartSpendingPerMode = new Chart(canvasSpendingPerMode, {
//     type: 'bar',
//     data: {
//         labels: ['Public Bidding', 'Small Value Procurement', 'Shopping', 'Direct Contracting', 'APR', 'Repeat Order'],
//         datasets: [
//             {
//                 label: 'Spending Efficiency',
//                 backgroundColor: 'rgba(0, 51, 176, 0.85)',
//                 data: [100*437999227.88/521136499.76, 100*104893092.81/126061130.21, 100*3000490.03/3889098.90, 100*1756649.26/1901550.34, 100*787526.57/10162360.65, 100*946100.00/946100.00],
//                 type: 'line',
//                 fill: false,
//                 borderColor: 'rgba(210, 162, 55, 0.85)',
//                 pointRadius: 5,
//                 pointBorderColor: 'rgba(210, 162, 55, 0.85)',
//                 pointBackgroundColor: 'rgba(210, 162, 55, 0.85)',
//                 backgroundColor: 'rgba(210, 162, 55, 0.85)',
//                 yAxisID: 'eff',
//             },
//             {
//                 label: 'Approved Budget of Contract',
//                 backgroundColor: 'rgba(0, 51, 176, 0.85)',
//                 data: [521136499.76, 126061130.21, 3889098.90, 1901550.34, 10162360.65, 946100.00]
//             },
//             {
//                 label: 'Awarded Contract Amount',
//                 backgroundColor: 'rgba(234, 95, 148, 0.85)',
//                 data: [437999227.88, 104893092.81, 3000490.03, 1756649.26, 787526.57, 946100.00]
//             }
//         ]
//     },
//     options: {
//         maintainAspectRatio: true,
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Spending Efficiency'
//         },
//         barValueSpacing: 20,
//         scales: {
//             yAxes: [{
//                 type: 'logarithmic',
//                 position: 'right',
//                 ticks: {
//                     maxTicksLimit: 10,
//                     max: 500000000,
//                     min: 0,
//                 }
//             },
//             {
//                 id: 'eff',
//                 type: 'linear',
//                 position: 'left',
//                 ticks: {
//                     maxTicksLimit: 10,
//                     max: 100,
//                     min: 0,
//                     fontColor: 'rgba(210, 162, 55, 1)'
//                 }
//             }]
//         }
//     }
// });
//
// // Timelines
// var canvasITBtimeline = document.getElementById('itb-timeline').getContext('2d');
// var chartITBtimeline =  new Chart(canvasITBtimeline, {
//     type: 'line',
//     data: {
//         labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172],
//         datasets: [{
//             label: "Projects",
//             data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 6, 0, 0, 0, 0, 0, 0, 1, 4, 1, 3, 2, 1, 6, 11, 2, 2, 0, 0, 1, 1, 6, 13, 2, 8, 2, 3, 0, 10, 4, 3, 2, 2, 4, 4, 2, 0, 0, 0, 0, 2, 4, 3, 0, 1, 0, 0, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//             backgroundColor: 'rgba(255, 212, 91, 0.75)',
//             pointRadius: 0,
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'How fast is the Procurement Process in South Cotabato?'
//         },
//         maintainAspectRatio: true,
//         scales: {
//             xAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Days from Posting to Contract Signing'
//                 }
//             }],
//             yAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Number of Projects'
//                 }
//             }]
//         }
//     }
// });
//
// // Women
// var canvasWomenContractors = document.getElementById('women-contractors').getContext('2d');
// var chartWomenContractors =  new Chart(canvasWomenContractors, {
//     type: 'doughnut',
//     data: {
//         labels: ['Women-owned', 'Others'],
//         datasets: [
//         {
//         data: [42, 308],
//         backgroundColor: ['rgba(205, 52, 181, 0.85)', 'rgba(200, 200, 200, 0.5)']
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Participation of Women-owned businesses in Public Bidding'
//         },
//         plugins: {
//             doughnutlabel: {
//                 labels: [
//                 {
//                     text: '12%',
//                     font: {
//                         size: '36'
//                     }
//                 }
//                 ]
//             }
//         },
//         responsive: true,
//         legend: {
//             display: false
//         }
//     }
// });
//
// var canvasWomenContracts = document.getElementById('women-contracts').getContext('2d');
// var chartWomenContracts =  new Chart(canvasWomenContracts, {
//     type: 'doughnut',
//     data: {
//         labels: ['Women-owned', 'Others'],
//         datasets: [
//         {
//         data: [254, 1600],
//         backgroundColor: ['rgba(205, 52, 181, 0.85)', 'rgba(200, 200, 200, 0.5)']
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Contracts awarded to Women-owned businesses'
//         },
//         plugins: {
//             doughnutlabel: {
//                 labels: [
//                 {
//                     text: '14%',
//                     font: {
//                         size: '36'
//                     }
//                 }
//                 ]
//             }
//         },
//         responsive: true,
//         legend: {
//             display: false
//         }
//     }
// });
//
// var canvasWomenAmount = document.getElementById('women-amount').getContext('2d');
// var chartWomenAmount=  new Chart(canvasWomenAmount, {
//     type: 'doughnut',
//     data: {
//         labels: ['Women-owned businesses', 'Others'],
//         datasets: [
//         {
//         data: [32962985.19, 516420101.36],
//         backgroundColor: ['rgba(205, 52, 181, 0.85)', 'rgba(200, 200, 200, 0.5)']
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Contract Amount for Women-owned businesses'
//         },
//         plugins: {
//             doughnutlabel: {
//                 labels: [
//                 {
//                     text: '7%',
//                     font: {
//                         size: '36'
//                     }
//                 }
//                 ]
//             }
//         },
//         responsive: true,
//         legend: {
//             display: false
//         }
//     }
// });
//
// var canvasWomenProjects = document.getElementById('women-projects').getContext('2d');
// var chartWomenProjects =  new Chart(canvasWomenProjects, {
//     type: 'doughnut',
//     data: {
//         labels: ['Projects Engaging Women', 'Others'],
//         datasets: [
//         {
//         data: [127, 985],
//         backgroundColor: ['rgba(205, 52, 181, 0.85)', 'rgba(200, 200, 200, 0.5)']
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Projects for Women Engagement and Empowerment'
//         },
//         plugins: {
//             doughnutlabel: {
//                 labels: [
//                 {
//                     text: '11%',
//                     font: {
//                         size: '36'
//                     }
//                 }
//                 ]
//             }
//         },
//         responsive: true,
//         legend: {
//             display: false
//         }
//     }
// });
//
// // ITB
// var canvasITBcontracts = document.getElementById('itb-top-contracts').getContext('2d');
// var chartITBcontracts = new Chart(canvasITBcontracts, {
//     type: 'horizontalBar',
//     data: {
//         labels: ['LAFORTEZA PHARMACY', 'ASEANA GENERAL MERCHANDISE', 'BEROVAN MARKETING INC.', 'AGREDA SHELL STATION', 'ARGO DISTRIBUTORS INC.'],
//         datasets: [{
//             label: 'Contracts Awarded',
//             data: [17, 17, 13, 11, 11],
//             backgroundColor: 'rgba(255, 212, 91, 0.85)'
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Top Suppliers by Contracts Awarded'
//         },
//         scales: {
//             xAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Contracts Awarded'
//                 },
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
// var canvasITBamounts = document.getElementById('itb-top-amounts').getContext('2d');
// var chartITBamounts = new Chart(canvasITBamounts, {
//     type: 'horizontalBar',
//     data: {
//         labels: ['LAFORTEZA PHARMACY', 'ASEANA GENERAL MERCHANDISE', 'MEDICAL GALLERY TRADING CO.', 'AGREDA SHELL STATION', 'BEROVAN MARKETING INC.'],
//         datasets: [{
//             label: 'Contract Amount (PHP)',
//             data: [36464976.30, 36042410.00, 29223626.00, 28092766.00, 24526889.45],
//             backgroundColor: 'rgba(255, 212, 91, 0.85)'
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Top Suppliers by Contract Amount'
//         },
//         scales: {
//             xAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Contract Amount (PHP)'
//                 },
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
// // SVP
// var canvasSVPcontracts = document.getElementById('svp-top-contracts').getContext('2d');
// var chartSVPcontracts = new Chart(canvasSVPcontracts, {
//     type: 'horizontalBar',
//     data: {
//         labels: ['SPRINTER LUMBER HARDWARE', 'PEOPLES GENERAL MERCHANDISE', 'ACE CENTERPOINT', 'EMCOR, INC.', 'PA GASOLINE STATION'],
//         datasets: [{
//             label: 'Contracts Awarded',
//             data: [29, 23, 15, 13, 11],
//             backgroundColor:  'rgba(255, 212, 91, 0.85)'
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Top Suppliers by Contracts Awarded'
//         },
//         scales: {
//             xAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Contracts Awarded'
//                 },
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
// var canvasSVPamounts = document.getElementById('svp-top-amounts').getContext('2d');
// var chartSVPamounts = new Chart(canvasSVPamounts, {
//     type: 'horizontalBar',
//     data: {
//         labels: ['PA GASOLINE STATION', 'SPRINTER LUMBER HARDWARE', 'DSSD FAMILY REALTY CORP.', 'APO PRODUCTION UNIT, INC.', 'FRED-ANNS FOODHAUS'],
//         datasets: [{
//             label: 'Contract Amount (PHP)',
//             data: [1520036.39, 1407710.91, 1188763.7, 1032000, 977500],
//             backgroundColor: 'rgba(255, 212, 91, 0.85)'
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Top Suppliers by Contract Amount'
//         },
//         scales: {
//             xAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Contract Amount (PHP)'
//                 },
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
// // SM
// var canvasSMcontracts = document.getElementById('sm-top-contracts').getContext('2d');
// var chartSMcontracts = new Chart(canvasSMcontracts, {
//     type: 'horizontalBar',
//     data: {
//         labels: ['PEOPLES GENERAL MERCHANDISE', 'STARBRIGHT OFFICE DEPOT', 'GSC KRISTAN EDUC. SUPPLY', 'DADIANGAS CROWN BOOKSTORE', 'GAKKEN PHILIPPINES'],
//         datasets: [{
//             label: 'Contracts Awarded',
//             data: [67, 7, 4, 2, 2],
//             backgroundColor:  'rgba(255, 212, 91, 0.85)'
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Top Suppliers by Contracts Awarded'
//         },
//         scales: {
//             xAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Contracts Awarded'
//                 },
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
// var canvasSMamounts = document.getElementById('sm-top-amounts').getContext('2d');
// var chartSMamounts = new Chart(canvasSMamounts, {
//     type: 'horizontalBar',
//     data: {
//         labels: ['PEOPLES GENERAL MERCHANDISE', 'DADIANGAS CROWN BOOKSTORE', 'STARBRIGHT OFFICE DEPOT', 'GSC KRISTAN EDUC. SUPPLY', 'GAKKEN PHILIPPINES'],
//         datasets: [{
//             label: 'Contract Amount (PHP)',
//             data: [2111685.69, 497409.74, 259874.60, 40720.00, 26260.00],
//             backgroundColor: 'rgba(255, 212, 91, 0.85)'
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Top Suppliers by Contract Amount'
//         },
//         scales: {
//             xAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Contract Amount (PHP)'
//                 },
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
// // DC
// var canvasDCcontracts = document.getElementById('dc-top-contracts').getContext('2d');
// var chartDCcontracts = new Chart(canvasDCcontracts, {
//     type: 'horizontalBar',
//     data: {
//         labels: ['PHILIPPINE DUPLICATORS, INC.', 'COPYLANDIA OFFICE SYSTEMS', 'U-BIX CORPORATION', 'CD TECHNOLOGIES ASIA', 'MITA GENERAL SANTOS'],
//         datasets: [{
//             label: 'Contracts Awarded',
//             data: [21, 14, 8, 4, 3],
//             backgroundColor:  'rgba(255, 212, 91, 0.85)'
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Top Suppliers by Contracts Awarded'
//         },
//         scales: {
//             xAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Contracts Awarded'
//                 },
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
// var canvasDCamounts = document.getElementById('dc-top-amounts').getContext('2d');
// var chartDCamounts = new Chart(canvasDCamounts, {
//     type: 'horizontalBar',
//     data: {
//         labels: [ 'COPYLANDIA OFFICE SYSTEMS', 'ABS-CBN CORPORATION', 'PHILIPPINE DUPLICATORS, INC.','U-BIX CORPORATION', 'CD TECHNOLOGIES ASIA'],
//         datasets: [{
//             label: 'Contract Amount (PHP)',
//             data: [569433.32, 500000.00, 422460.34, 126232, 37023.6],
//             backgroundColor: 'rgba(255, 212, 91, 0.85)'
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             fontSize: 24,
//             fontColor: '#212529',
//             text: 'Top Suppliers by Contract Amount'
//         },
//         scales: {
//             xAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Contract Amount (PHP)'
//                 },
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
