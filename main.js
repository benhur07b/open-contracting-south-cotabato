var canvasProcPerMode = document.getElementById('procurement-per-mode').getContext('2d');

var chartProcPerMode = new Chart(canvasProcPerMode, {
    type: 'horizontalBar',
    data: {
        labels: ["Public Bidding", "Small Value Procurement", "Shopping", "Direct Contracting", "APR", "Repeat Order"],
        datasets: [{
            label: "Procurement Activites",
            data: [187, 1122, 93, 54, 68, 2],
            backgroundColor: "#0084de"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Procurement Activites'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var canvasContractsPerMode = document.getElementById('contracts-per-mode').getContext('2d');

var chartContractsPerMode = new Chart(canvasContractsPerMode, {
    type: 'horizontalBar',
    data: {
        labels: ["Public Bidding", "Small Value Procurement", "Shopping", "Direct Contracting", "APR", "Repeat Order"],
        datasets: [{
            label: "Awarded Contracts",
            data: [282, 1407, 87, 50, 26, 2],
            backgroundColor: "#0084de"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Awarded Contracts"
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var canvasBudgetPerMode = document.getElementById('budget-per-mode').getContext('2d');

var chartBudgetPerMode = new Chart(canvasBudgetPerMode, {
    type: 'horizontalBar',
    data: {
        labels: ["Public Bidding", "Small Value Procurement", "Shopping", "Direct Contracting", "APR", "Repeat Order"],
        datasets: [{
            label: "Approved Budget (PHP)",
            data: [521136499.76, 126061130.21, 3889098.90, 1901550.34, 10162360.65, 946100.00],
            backgroundColor: "#0084de"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Approved Budget (PHP)"
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var canvasAmountPerMode = document.getElementById('amount-per-mode').getContext('2d');

var chartAmountPerMode = new Chart(canvasAmountPerMode, {
    type: 'horizontalBar',
    data: {
        labels: ["Public Bidding", "Small Value Procurement", "Shopping", "Direct Contracting", "APR", "Repeat Order"],
        datasets: [{
            label: "Contract Amount (PHP)",
            data: [437999227.88, 104893092.81, 3000490.03, 1756649.26, 787526.57, 946100.00],
            backgroundColor: "#0084de"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Contract Amount (PHP)"
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var canvasITBcontracts = document.getElementById('itb-top-contracts').getContext('2d');
var canvasITBamounts = document.getElementById('itb-top-amount').getContext('2d');
var canvasITBlocations = document.getElementById('itb-top-loc').getContext('2d');

var chartITBcontracts = new Chart(canvasITBcontracts, {
    type: 'horizontalBar',
    data: {
        labels: ["LAFORTEZA PHARMACY", "ASEANA GENERAL MERCHANDISE", "BEROVAN MARKETING INC.", "AGREDA SHELL STATION", "ARGO DISTRIBUTORS INC."],
        datasets: [{
            label: "Contracts Awarded",
            data: [17, 17, 13, 11, 11],
            backgroundColor: "#0084de"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Contracts Awarded'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartITBamounts = new Chart(canvasITBamounts, {
    type: 'horizontalBar',
    data: {
        labels: ["LAFORTEZA PHARMACY", "ASEANA GENERAL MERCHANDISE", "MEDICAL GALLERY TRADING CO.", "AGREDA SHELL STATION", "BEROVAN MARKETING INC."],
        datasets: [{
            label: "Contract Amount (PHP)",
            data: [36464976.30, 36042410.00, 29223626.00, 28092766.00, 24526889.45],
            backgroundColor: "#0084de",
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Contract Amount'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartITBlocations = new Chart(canvasITBlocations, {
    type: 'horizontalBar',
    data: {
        labels: ["Davao City", "Koronadal City", "General Santos City", "Tacurong City", "Pasig City"],
        datasets: [{
            label: "Contracts Awarded",
            data: [75, 56, 52, 17, 7],
            backgroundColor: "#0084de",
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Contracts Awarded",
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var canvasSVPcontracts = document.getElementById('svp-top-contracts').getContext('2d');
var canvasSVPamounts = document.getElementById('svp-top-amount').getContext('2d');
var canvasSVPlocations = document.getElementById('svp-top-loc').getContext('2d');

var chartSVPcontracts = new Chart(canvasSVPcontracts, {
    type: 'horizontalBar',
    data: {
        labels: ["SPRINTER LUMBER HARDWARE", "PEOPLES GENERAL MERCHANDISE", "ACE CENTERPOINT", "EMCOR, INC.", "PA GASOLINE STATION"],
        datasets: [{
            label: "Contracts Awarded",
            data: [29, 23, 15, 13, 11],
            backgroundColor: "#0084de"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Contracts Awarded'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartSVPamounts = new Chart(canvasSVPamounts, {
    type: 'horizontalBar',
    data: {
        labels: ["PA GASOLINE STATION", "SPRINTER LUMBER HARDWARE", "DSSD FAMILY REALTY CORP.", "APO PRODUCTION UNIT, INC.", "FRED-ANNS FOODHAUS"],
        datasets: [{
            label: "Contract Amount (PHP)",
            data: [1520036.39, 1407710.91, 1188763.7, 1032000, 977500],
            backgroundColor: "#0084de",
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Contract Amount'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartSVPlocations = new Chart(canvasSVPlocations, {
    type: 'horizontalBar',
    data: {
        labels: ["Koronadal City", "General Santos City", "Davao City", "Polomolok", "Banga"],
        datasets: [{
            label: "Contracts Awarded",
            data: [296, 39, 22, 11, 3],
            backgroundColor: "#0084de",
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Contracts Awarded",
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var canvasSMcontracts = document.getElementById('sm-top-contracts').getContext('2d');
var canvasSMamounts = document.getElementById('sm-top-amount').getContext('2d');
var canvasSMlocations = document.getElementById('sm-top-loc').getContext('2d');

var chartSMcontracts = new Chart(canvasSMcontracts, {
    type: 'horizontalBar',
    data: {
        labels: ["PEOPLES GENERAL MERCHANDISE", "STARBRIGHT OFFICE DEPOT", "GSC KRISTAN EDUC. SUPPLY", "DADIANGAS CROWN BOOKSTORE", "GAKKEN PHILIPPINES"],
        datasets: [{
            label: "Contracts Awarded",
            data: [67, 7, 4, 2, 2],
            backgroundColor: "#0084de"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Contracts Awarded'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartSMamounts = new Chart(canvasSMamounts, {
    type: 'horizontalBar',
    data: {
        labels: ["PEOPLES GENERAL MERCHANDISE", "DADIANGAS CROWN BOOKSTORE", "STARBRIGHT OFFICE DEPOT", "GSC KRISTAN EDUC. SUPPLY", "GAKKEN PHILIPPINES"],
        datasets: [{
            label: "Contract Amount (PHP)",
            data: [2111685.69, 497409.74, 259874.60, 40720.00, 26260.00],
            backgroundColor: "#0084de",
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Contract Amount'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartSMlocations = new Chart(canvasSMlocations, {
    type: 'horizontalBar',
    data: {
        labels: ["Koronadal City", "Davao City", "General Santos City", "Sampaloc, Manila"],
        datasets: [{
            label: "Contracts Awarded",
            data: [82, 3, 1, 1],
            backgroundColor: "#0084de",
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Contracts Awarded",
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var canvasDCcontracts = document.getElementById('dc-top-contracts').getContext('2d');
var canvasDCamounts = document.getElementById('dc-top-amount').getContext('2d');
var canvasDClocations = document.getElementById('dc-top-loc').getContext('2d');

var chartDCcontracts = new Chart(canvasDCcontracts, {
    type: 'horizontalBar',
    data: {
        labels: ["PHILIPPINE DUPLICATORS, INC.", "COPYLANDIA OFFICE SYSTEMS", "U-BIX CORPORATION", "CD TECHNOLOGIES ASIA", "MITA GENERAL SANTOS"],
        datasets: [{
            label: "Contracts Awarded",
            data: [21, 14, 8, 4, 3],
            backgroundColor: "#0084de"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Contracts Awarded'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartDCamounts = new Chart(canvasDCamounts, {
    type: 'horizontalBar',
    data: {
        labels: [ "COPYLANDIA OFFICE SYSTEMS", "ABS-CBN CORPORATION", "PHILIPPINE DUPLICATORS, INC.","U-BIX CORPORATION", "CD TECHNOLOGIES ASIA"],
        datasets: [{
            label: "Contract Amount (PHP)",
            data: [569433.32, 500000.00, 422460.34, 126232, 37023.6],
            backgroundColor: "#0084de",
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Contract Amount'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartDClocations = new Chart(canvasDClocations, {
    type: 'horizontalBar',
    data: {
        labels: ["General Santos City", "Koronadal City", "Davao City", "Quezon City"],
        datasets: [{
            label: "Contracts Awarded",
            data: [44, 4, 3, 1],
            backgroundColor: "#0084de",
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Contracts Awarded",
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var canvasITBdays = document.getElementById('itb-days-post-notice').getContext('2d');

var chartITBdays =  new Chart(canvasITBdays, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
        datasets: [{
            label: "Projects",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 6, 0, 0, 0, 0, 0, 0, 1, 4, 1, 3, 2, 1, 6, 11, 2, 2, 0, 0, 1, 1, 6, 13, 2, 8, 2, 3, 0, 10, 4, 3, 2, 2, 4, 4, 2, 0, 0, 0, 0, 2, 4, 3, 0, 1, 0, 0, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            backgroundColor: "#ffd600",
            pointRadius: 0,
        }]
    },
    options: {
        maintainAspectRatio: true,
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Days'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Projects'
                }
            }]
        }
    }
});
