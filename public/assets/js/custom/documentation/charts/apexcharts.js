/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!***********************************************************!*\
  !*** ../src/js/custom/documentation/charts/apexcharts.js ***!
  \***********************************************************/


// Class definition
var KTGeneralApexCharts = function () {
    // Shared variables

    // Private functions
    var example1 = function () {
        var element = document.getElementById("kt_apexcharts_1");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');
        var dangerColor = KTUtil.getCssVariableValue('--bs-danger');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 43, 56, 65, 41, 55, 66]
            }, {
                name: 'Cost',
                data: [32, 34, 52, 46, 27, 60, 41, 49, 13, 11, 44, 33]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 87, 99, 75, 82, 91, 89]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['40%'],
                    endingShape: 'rounded'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, dangerColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    var example2 = function () {
        var element = document.getElementById("kt_apexcharts_2");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-warning');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    columnWidth: ['30%'],
                    endingShape: 'rounded'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    var example3 = function () {
        var element = document.getElementById("kt_apexcharts_3");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-info');
        var lightColor = KTUtil.getCssVariableValue('--bs-light-info');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [30, 40, 40, 90, 90, 70, 70]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [lightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    var example4 = function () {
        var element = document.getElementById("kt_apexcharts_4");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');

        var baseColor = KTUtil.getCssVariableValue('--bs-success');
        var baseLightColor = KTUtil.getCssVariableValue('--bs-light-success');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-warning');
        var secondaryLightColor = KTUtil.getCssVariableValue('--bs-light-warning');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [60, 50, 80, 40, 100, 60]
            }, {
                name: 'Revenue',
                data: [70, 60, 110, 40, 50, 70]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: labelColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                colors: [baseLightColor, secondaryLightColor],
                strokeColor: [baseLightColor, secondaryLightColor],
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    var example5 = function () {
        var element = document.getElementById("kt_apexcharts_5");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');

        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var baseLightColor = KTUtil.getCssVariableValue('--bs-light-primary');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-info');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                type: 'bar',
                stacked: true,
                data: [40, 50, 65, 70, 50, 30]
            }, {
                name: 'Revenue',
                type: 'bar',
                stacked: true,
                data: [20, 20, 25, 30, 30, 20]
            }, {
                name: 'Expenses',
                type: 'area',
                data: [50, 80, 60, 90, 50, 70]
            }],
            chart: {
                fontFamily: 'inherit',
                stacked: true,
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    stacked: true,
                    horizontal: false,
                    endingShape: 'rounded',
                    columnWidth: ['12%']
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                max: 120,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [baseColor, secondaryColor, baseLightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    var example6 = function () {
        var element = document.getElementById("kt_apexcharts_6");

        var height = parseInt(KTUtil.css(element, 'height'));

        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var baseLightColor = KTUtil.getCssVariableValue('--bs-success');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-info');

        if (!element) {
            return;
        }

        var options = {
            series: [
                {
                    name: 'Bob',
                    data: [
                        {
                            x: 'Design',
                            y: [
                                new Date('2019-03-05').getTime(),
                                new Date('2019-03-08').getTime()
                            ]
                        },
                        {
                            x: 'Code',
                            y: [
                                new Date('2019-03-02').getTime(),
                                new Date('2019-03-05').getTime()
                            ]
                        },
                        {
                            x: 'Code',
                            y: [
                                new Date('2019-03-05').getTime(),
                                new Date('2019-03-07').getTime()
                            ]
                        },
                        {
                            x: 'Test',
                            y: [
                                new Date('2019-03-03').getTime(),
                                new Date('2019-03-09').getTime()
                            ]
                        },
                        {
                            x: 'Test',
                            y: [
                                new Date('2019-03-08').getTime(),
                                new Date('2019-03-11').getTime()
                            ]
                        },
                        {
                            x: 'Validation',
                            y: [
                                new Date('2019-03-11').getTime(),
                                new Date('2019-03-16').getTime()
                            ]
                        },
                        {
                            x: 'Design',
                            y: [
                                new Date('2019-03-01').getTime(),
                                new Date('2019-03-03').getTime()
                            ]
                        }
                    ]
                },
                {
                    name: 'Joe',
                    data: [
                        {
                            x: 'Design',
                            y: [
                                new Date('2019-03-02').getTime(),
                                new Date('2019-03-05').getTime()
                            ]
                        },
                        {
                            x: 'Test',
                            y: [
                                new Date('2019-03-06').getTime(),
                                new Date('2019-03-16').getTime()
                            ]
                        },
                        {
                            x: 'Code',
                            y: [
                                new Date('2019-03-03').getTime(),
                                new Date('2019-03-07').getTime()
                            ]
                        },
                        {
                            x: 'Deployment',
                            y: [
                                new Date('2019-03-20').getTime(),
                                new Date('2019-03-22').getTime()
                            ]
                        },
                        {
                            x: 'Design',
                            y: [
                                new Date('2019-03-10').getTime(),
                                new Date('2019-03-16').getTime()
                            ]
                        }
                    ]
                },
                {
                    name: 'Dan',
                    data: [
                        {
                            x: 'Code',
                            y: [
                                new Date('2019-03-10').getTime(),
                                new Date('2019-03-17').getTime()
                            ]
                        },
                        {
                            x: 'Validation',
                            y: [
                                new Date('2019-03-05').getTime(),
                                new Date('2019-03-09').getTime()
                            ]
                        },
                    ]
                }
            ],
            chart: {
                type: 'rangeBar',
                fontFamily: 'inherit',
                height: height,
                toolbar: {
                    show: false
                }
            },
            colors: [baseColor, secondaryColor, baseLightColor],
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '80%'
                }
            },
            xaxis: {
                type: 'datetime'
            },
            stroke: {
                width: 1
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left'
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    return {
        // Public Functions
        init: function () {
            example1();
            example2();
            example3();
            example4();
            example5();
            example6();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralApexCharts.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/apexcharts.js":
/*!********************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/apexcharts.js ***!
  \********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralApexCharts = function () {\n  // Shared variables\n  // Private functions\n  var example1 = function example1() {\n    var element = document.getElementById(\"kt_apexcharts_1\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var baseColor = KTUtil.getCssVariableValue('--bs-primary');\n    var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        data: [44, 55, 57, 56, 61, 58, 43, 56, 65, 41, 55, 66]\n      }, {\n        name: 'Cost',\n        data: [32, 34, 52, 46, 27, 60, 41, 49, 13, 11, 44, 33]\n      }, {\n        name: 'Revenue',\n        data: [76, 85, 101, 98, 87, 105, 87, 99, 75, 82, 91, 89]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        type: 'bar',\n        height: height,\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {\n        bar: {\n          horizontal: false,\n          columnWidth: ['40%'],\n          endingShape: 'rounded'\n        }\n      },\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      stroke: {\n        show: true,\n        width: 2,\n        colors: ['transparent']\n      },\n      xaxis: {\n        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      fill: {\n        opacity: 1\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [baseColor, dangerColor, secondaryColor],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        }\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  var example2 = function example2() {\n    var element = document.getElementById(\"kt_apexcharts_2\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var baseColor = KTUtil.getCssVariableValue('--bs-warning');\n    var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        data: [44, 55, 57, 56, 61, 58]\n      }, {\n        name: 'Revenue',\n        data: [76, 85, 101, 98, 87, 105]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        type: 'bar',\n        height: height,\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {\n        bar: {\n          horizontal: true,\n          columnWidth: ['30%'],\n          endingShape: 'rounded'\n        }\n      },\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      stroke: {\n        show: true,\n        width: 2,\n        colors: ['transparent']\n      },\n      xaxis: {\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      fill: {\n        opacity: 1\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [baseColor, secondaryColor],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        }\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  var example3 = function example3() {\n    var element = document.getElementById(\"kt_apexcharts_3\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var baseColor = KTUtil.getCssVariableValue('--bs-info');\n    var lightColor = KTUtil.getCssVariableValue('--bs-light-info');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        data: [30, 40, 40, 90, 90, 70, 70]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        type: 'area',\n        height: height,\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {},\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      fill: {\n        type: 'solid',\n        opacity: 1\n      },\n      stroke: {\n        curve: 'smooth',\n        show: true,\n        width: 3,\n        colors: [baseColor]\n      },\n      xaxis: {\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        },\n        crosshairs: {\n          position: 'front',\n          stroke: {\n            color: baseColor,\n            width: 1,\n            dashArray: 3\n          }\n        },\n        tooltip: {\n          enabled: true,\n          formatter: undefined,\n          offsetY: 0,\n          style: {\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [lightColor],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        }\n      },\n      markers: {\n        strokeColor: baseColor,\n        strokeWidth: 3\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  var example4 = function example4() {\n    var element = document.getElementById(\"kt_apexcharts_4\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var baseColor = KTUtil.getCssVariableValue('--bs-success');\n    var baseLightColor = KTUtil.getCssVariableValue('--bs-light-success');\n    var secondaryColor = KTUtil.getCssVariableValue('--bs-warning');\n    var secondaryLightColor = KTUtil.getCssVariableValue('--bs-light-warning');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        data: [60, 50, 80, 40, 100, 60]\n      }, {\n        name: 'Revenue',\n        data: [70, 60, 110, 40, 50, 70]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        type: 'area',\n        height: height,\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {},\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      fill: {\n        type: 'solid',\n        opacity: 1\n      },\n      stroke: {\n        curve: 'smooth'\n      },\n      xaxis: {\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        },\n        crosshairs: {\n          position: 'front',\n          stroke: {\n            color: labelColor,\n            width: 1,\n            dashArray: 3\n          }\n        },\n        tooltip: {\n          enabled: true,\n          formatter: undefined,\n          offsetY: 0,\n          style: {\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [baseColor, secondaryColor],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        }\n      },\n      markers: {\n        colors: [baseLightColor, secondaryLightColor],\n        strokeColor: [baseLightColor, secondaryLightColor],\n        strokeWidth: 3\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  var example5 = function example5() {\n    var element = document.getElementById(\"kt_apexcharts_5\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var baseColor = KTUtil.getCssVariableValue('--bs-primary');\n    var baseLightColor = KTUtil.getCssVariableValue('--bs-light-primary');\n    var secondaryColor = KTUtil.getCssVariableValue('--bs-info');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        type: 'bar',\n        stacked: true,\n        data: [40, 50, 65, 70, 50, 30]\n      }, {\n        name: 'Revenue',\n        type: 'bar',\n        stacked: true,\n        data: [20, 20, 25, 30, 30, 20]\n      }, {\n        name: 'Expenses',\n        type: 'area',\n        data: [50, 80, 60, 90, 50, 70]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        stacked: true,\n        height: height,\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {\n        bar: {\n          stacked: true,\n          horizontal: false,\n          endingShape: 'rounded',\n          columnWidth: ['12%']\n        }\n      },\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      stroke: {\n        curve: 'smooth',\n        show: true,\n        width: 2,\n        colors: ['transparent']\n      },\n      xaxis: {\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        max: 120,\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      fill: {\n        opacity: 1\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [baseColor, secondaryColor, baseLightColor],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        },\n        padding: {\n          top: 0,\n          right: 0,\n          bottom: 0,\n          left: 0\n        }\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  var example6 = function example6() {\n    var element = document.getElementById(\"kt_apexcharts_6\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var baseColor = KTUtil.getCssVariableValue('--bs-primary');\n    var baseLightColor = KTUtil.getCssVariableValue('--bs-success');\n    var secondaryColor = KTUtil.getCssVariableValue('--bs-info');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Bob',\n        data: [{\n          x: 'Design',\n          y: [new Date('2019-03-05').getTime(), new Date('2019-03-08').getTime()]\n        }, {\n          x: 'Code',\n          y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()]\n        }, {\n          x: 'Code',\n          y: [new Date('2019-03-05').getTime(), new Date('2019-03-07').getTime()]\n        }, {\n          x: 'Test',\n          y: [new Date('2019-03-03').getTime(), new Date('2019-03-09').getTime()]\n        }, {\n          x: 'Test',\n          y: [new Date('2019-03-08').getTime(), new Date('2019-03-11').getTime()]\n        }, {\n          x: 'Validation',\n          y: [new Date('2019-03-11').getTime(), new Date('2019-03-16').getTime()]\n        }, {\n          x: 'Design',\n          y: [new Date('2019-03-01').getTime(), new Date('2019-03-03').getTime()]\n        }]\n      }, {\n        name: 'Joe',\n        data: [{\n          x: 'Design',\n          y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()]\n        }, {\n          x: 'Test',\n          y: [new Date('2019-03-06').getTime(), new Date('2019-03-16').getTime()]\n        }, {\n          x: 'Code',\n          y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()]\n        }, {\n          x: 'Deployment',\n          y: [new Date('2019-03-20').getTime(), new Date('2019-03-22').getTime()]\n        }, {\n          x: 'Design',\n          y: [new Date('2019-03-10').getTime(), new Date('2019-03-16').getTime()]\n        }]\n      }, {\n        name: 'Dan',\n        data: [{\n          x: 'Code',\n          y: [new Date('2019-03-10').getTime(), new Date('2019-03-17').getTime()]\n        }, {\n          x: 'Validation',\n          y: [new Date('2019-03-05').getTime(), new Date('2019-03-09').getTime()]\n        }]\n      }],\n      chart: {\n        type: 'rangeBar',\n        fontFamily: 'inherit',\n        height: height,\n        toolbar: {\n          show: false\n        }\n      },\n      colors: [baseColor, secondaryColor, baseLightColor],\n      plotOptions: {\n        bar: {\n          horizontal: true,\n          barHeight: '80%'\n        }\n      },\n      xaxis: {\n        type: 'datetime'\n      },\n      stroke: {\n        width: 1\n      },\n      fill: {\n        type: 'solid',\n        opacity: 1\n      },\n      legend: {\n        position: 'top',\n        horizontalAlign: 'left'\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n      example2();\n      example3();\n      example4();\n      example5();\n      example6();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralApexCharts.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9hcGV4Y2hhcnRzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLG1CQUFtQixHQUFHLFlBQVk7QUFDbEM7QUFFQTtBQUNBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7QUFDdkIsUUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWQ7QUFFQSxRQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFQLENBQVdOLE9BQVgsRUFBb0IsUUFBcEIsQ0FBRCxDQUFyQjtBQUNBLFFBQUlPLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixlQUEzQixDQUFqQjtBQUNBLFFBQUlDLFdBQVcsR0FBR0osTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixlQUEzQixDQUFsQjtBQUNBLFFBQUlFLFNBQVMsR0FBR0wsTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixjQUEzQixDQUFoQjtBQUNBLFFBQUlHLGNBQWMsR0FBR04sTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixlQUEzQixDQUFyQjtBQUNBLFFBQUlJLFdBQVcsR0FBR1AsTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixhQUEzQixDQUFsQjs7QUFFQSxRQUFJLENBQUNSLE9BQUwsRUFBYztBQUNWO0FBQ0g7O0FBRUQsUUFBSWEsT0FBTyxHQUFHO0FBQ1ZDLE1BQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLFFBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekIsRUFBNkIsRUFBN0IsRUFBaUMsRUFBakMsRUFBcUMsRUFBckMsRUFBeUMsRUFBekMsRUFBNkMsRUFBN0M7QUFGRCxPQUFELEVBR0w7QUFDQ0QsUUFB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QUssRUFBRTtBQURILE9BdElFO0FBeUlWVSxNQUFBQSxJQUFJLEVBQUU7QUFDRnRCLFFBQUFBLElBQUksRUFBRSxPQURKO0FBRUZ1QixRQUFBQSxPQUFPLEVBQUU7QUFGUCxPQXpJSTtBQTZJVmYsTUFBQUEsTUFBTSxFQUFFO0FBQ0pxQyxRQUFBQSxRQUFRLEVBQUUsS0FETjtBQUVKd0IsUUFBQUEsZUFBZSxFQUFFO0FBRmI7QUE3SUUsS0FBZDtBQW1KQSxRQUFJdkUsS0FBSyxHQUFHLElBQUl3QyxVQUFKLENBQWV6RCxPQUFmLEVBQXdCYSxPQUF4QixDQUFaO0FBQ0FJLElBQUFBLEtBQUssQ0FBQ3lDLE1BQU47QUFDSCxHQWxLRDs7QUFvS0EsU0FBTztBQUNIO0FBQ0ErQixJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZDFGLE1BQUFBLFFBQVE7QUFDUjRELE1BQUFBLFFBQVE7QUFDUkMsTUFBQUEsUUFBUTtBQUNSWSxNQUFBQSxRQUFRO0FBQ1JHLE1BQUFBLFFBQVE7QUFDUlEsTUFBQUEsUUFBUTtBQUNYO0FBVEUsR0FBUDtBQVdILENBbDBCeUIsRUFBMUIsQyxDQW8wQkE7OztBQUNBOUUsTUFBTSxDQUFDcUYsa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQzVGLEVBQUFBLG1CQUFtQixDQUFDMkYsSUFBcEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvYXBleGNoYXJ0cy5qcz9iY2JlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RHZW5lcmFsQXBleENoYXJ0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTaGFyZWQgdmFyaWFibGVzXG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2FwZXhjaGFydHNfMVwiKTtcblxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktNTAwJyk7XG4gICAgICAgIHZhciBib3JkZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMjAwJyk7XG4gICAgICAgIHZhciBiYXNlQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1wcmltYXJ5Jyk7XG4gICAgICAgIHZhciBzZWNvbmRhcnlDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMzAwJyk7XG4gICAgICAgIHZhciBkYW5nZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWRhbmdlcicpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs0NCwgNTUsIDU3LCA1NiwgNjEsIDU4LCA0MywgNTYsIDY1LCA0MSwgNTUsIDY2XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdDb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzIsIDM0LCA1MiwgNDYsIDI3LCA2MCwgNDEsIDQ5LCAxMywgMTEsIDQ0LCAzM11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmV2ZW51ZScsXG4gICAgICAgICAgICAgICAgZGF0YTogWzc2LCA4NSwgMTAxLCA5OCwgODcsIDEwNSwgODcsIDk5LCA3NSwgODIsIDkxLCA4OV1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IFsnNDAlJ10sXG4gICAgICAgICAgICAgICAgICAgIGVuZGluZ1NoYXBlOiAncm91bmRlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsndHJhbnNwYXJlbnQnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBheGlzVGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3JzOiBbYmFzZUNvbG9yLCBkYW5nZXJDb2xvciwgc2Vjb25kYXJ5Q29sb3JdLFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgICAgICAgICAgICBzdHJva2VEYXNoQXJyYXk6IDQsXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdmFyIGV4YW1wbGUyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfYXBleGNoYXJ0c18yXCIpO1xuXG4gICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdoZWlnaHQnKSk7XG4gICAgICAgIHZhciBsYWJlbENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS01MDAnKTtcbiAgICAgICAgdmFyIGJvcmRlckNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS0yMDAnKTtcbiAgICAgICAgdmFyIGJhc2VDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXdhcm5pbmcnKTtcbiAgICAgICAgdmFyIHNlY29uZGFyeUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS0zMDAnKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbNDQsIDU1LCA1NywgNTYsIDYxLCA1OF1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmV2ZW51ZScsXG4gICAgICAgICAgICAgICAgZGF0YTogWzc2LCA4NSwgMTAxLCA5OCwgODcsIDEwNV1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogWyczMCUnXSxcbiAgICAgICAgICAgICAgICAgICAgZW5kaW5nU2hhcGU6ICdyb3VuZGVkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgIGNvbG9yczogWyd0cmFuc3BhcmVudCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFtiYXNlQ29sb3IsIHNlY29uZGFyeUNvbG9yXSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgc3Ryb2tlRGFzaEFycmF5OiA0LFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlMyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2FwZXhjaGFydHNfM1wiKTtcblxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktNTAwJyk7XG4gICAgICAgIHZhciBib3JkZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMjAwJyk7XG4gICAgICAgIHZhciBiYXNlQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1pbmZvJyk7XG4gICAgICAgIHZhciBsaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtaW5mbycpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDAsIDQwLCA5MCwgOTAsIDcwLCA3MF1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxuICAgICAgICAgICAgICAgIGNvbG9yczogW2Jhc2VDb2xvcl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJ10sXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmcm9udCcsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJhc2VDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFzaEFycmF5OiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3JzOiBbbGlnaHRDb2xvcl0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogNCxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogYmFzZUNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlNCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2FwZXhjaGFydHNfNFwiKTtcblxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktNTAwJyk7XG4gICAgICAgIHZhciBib3JkZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMjAwJyk7XG5cbiAgICAgICAgdmFyIGJhc2VDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXN1Y2Nlc3MnKTtcbiAgICAgICAgdmFyIGJhc2VMaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtc3VjY2VzcycpO1xuICAgICAgICB2YXIgc2Vjb25kYXJ5Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy13YXJuaW5nJyk7XG4gICAgICAgIHZhciBzZWNvbmRhcnlMaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtd2FybmluZycpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs2MCwgNTAsIDgwLCA0MCwgMTAwLCA2MF1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmV2ZW51ZScsXG4gICAgICAgICAgICAgICAgZGF0YTogWzcwLCA2MCwgMTEwLCA0MCwgNTAsIDcwXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge30sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICBjdXJ2ZTogJ3Ntb290aCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnXSxcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFzaEFycmF5OiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3JzOiBbYmFzZUNvbG9yLCBzZWNvbmRhcnlDb2xvcl0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogNCxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtiYXNlTGlnaHRDb2xvciwgc2Vjb25kYXJ5TGlnaHRDb2xvcl0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtiYXNlTGlnaHRDb2xvciwgc2Vjb25kYXJ5TGlnaHRDb2xvcl0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdmFyIGV4YW1wbGU1ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfYXBleGNoYXJ0c181XCIpO1xuXG4gICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdoZWlnaHQnKSk7XG4gICAgICAgIHZhciBsYWJlbENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS01MDAnKTtcbiAgICAgICAgdmFyIGJvcmRlckNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS0yMDAnKTtcblxuICAgICAgICB2YXIgYmFzZUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtcHJpbWFyeScpO1xuICAgICAgICB2YXIgYmFzZUxpZ2h0Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC1wcmltYXJ5Jyk7XG4gICAgICAgIHZhciBzZWNvbmRhcnlDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWluZm8nKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs0MCwgNTAsIDY1LCA3MCwgNTAsIDMwXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdSZXZlbnVlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGE6IFsyMCwgMjAsIDI1LCAzMCwgMzAsIDIwXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFeHBlbnNlcycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs1MCwgODAsIDYwLCA5MCwgNTAsIDcwXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVuZGluZ1NoYXBlOiAncm91bmRlZCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiBbJzEyJSddXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgIGNvbG9yczogWyd0cmFuc3BhcmVudCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICBtYXg6IDEyMCxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFtiYXNlQ29sb3IsIHNlY29uZGFyeUNvbG9yLCBiYXNlTGlnaHRDb2xvcl0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogNCxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdmFyIGV4YW1wbGU2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfYXBleGNoYXJ0c182XCIpO1xuXG4gICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdoZWlnaHQnKSk7XG5cbiAgICAgICAgdmFyIGJhc2VDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXByaW1hcnknKTtcbiAgICAgICAgdmFyIGJhc2VMaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtc3VjY2VzcycpO1xuICAgICAgICB2YXIgc2Vjb25kYXJ5Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1pbmZvJyk7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0JvYicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAnRGVzaWduJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCcyMDE5LTAzLTA1JykuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgnMjAxOS0wMy0wOCcpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogJ0NvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoJzIwMTktMDMtMDInKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCcyMDE5LTAzLTA1JykuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAnQ29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgnMjAxOS0wMy0wNScpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoJzIwMTktMDMtMDcnKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6ICdUZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCcyMDE5LTAzLTAzJykuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgnMjAxOS0wMy0wOScpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogJ1Rlc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoJzIwMTktMDMtMDgnKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCcyMDE5LTAzLTExJykuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAnVmFsaWRhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgnMjAxOS0wMy0xMScpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoJzIwMTktMDMtMTYnKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6ICdEZXNpZ24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoJzIwMTktMDMtMDEnKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCcyMDE5LTAzLTAzJykuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdKb2UnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogJ0Rlc2lnbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgnMjAxOS0wMy0wMicpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoJzIwMTktMDMtMDUnKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6ICdUZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCcyMDE5LTAzLTA2JykuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgnMjAxOS0wMy0xNicpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogJ0NvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoJzIwMTktMDMtMDMnKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCcyMDE5LTAzLTA3JykuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAnRGVwbG95bWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgnMjAxOS0wMy0yMCcpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoJzIwMTktMDMtMjInKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6ICdEZXNpZ24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoJzIwMTktMDMtMTAnKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCcyMDE5LTAzLTE2JykuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdEYW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogJ0NvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoJzIwMTktMDMtMTAnKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCcyMDE5LTAzLTE3JykuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAnVmFsaWRhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgnMjAxOS0wMy0wNScpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoJzIwMTktMDMtMDknKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhbmdlQmFyJyxcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFtiYXNlQ29sb3IsIHNlY29uZGFyeUNvbG9yLCBiYXNlTGlnaHRDb2xvcl0sXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBiYXJIZWlnaHQ6ICc4MCUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhdGV0aW1lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICBjaGFydC5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGUxKCk7XG4gICAgICAgICAgICBleGFtcGxlMigpO1xuICAgICAgICAgICAgZXhhbXBsZTMoKTtcbiAgICAgICAgICAgIGV4YW1wbGU0KCk7XG4gICAgICAgICAgICBleGFtcGxlNSgpO1xuICAgICAgICAgICAgZXhhbXBsZTYoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVEdlbmVyYWxBcGV4Q2hhcnRzLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUR2VuZXJhbEFwZXhDaGFydHMiLCJleGFtcGxlMSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVpZ2h0IiwicGFyc2VJbnQiLCJLVFV0aWwiLCJjc3MiLCJsYWJlbENvbG9yIiwiZ2V0Q3NzVmFyaWFibGVWYWx1ZSIsImJvcmRlckNvbG9yIiwiYmFzZUNvbG9yIiwic2Vjb25kYXJ5Q29sb3IiLCJkYW5nZXJDb2xvciIsIm9wdGlvbnMiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsImNoYXJ0IiwiZm9udEZhbWlseSIsInR5cGUiLCJ0b29sYmFyIiwic2hvdyIsInBsb3RPcHRpb25zIiwiYmFyIiwiaG9yaXpvbnRhbCIsImNvbHVtbldpZHRoIiwiZW5kaW5nU2hhcGUiLCJsZWdlbmQiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsInN0cm9rZSIsIndpZHRoIiwiY29sb3JzIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwiYXhpc0JvcmRlciIsImF4aXNUaWNrcyIsImxhYmVscyIsInN0eWxlIiwiZm9udFNpemUiLCJ5YXhpcyIsImZpbGwiLCJvcGFjaXR5Iiwic3RhdGVzIiwibm9ybWFsIiwiZmlsdGVyIiwidmFsdWUiLCJob3ZlciIsImFjdGl2ZSIsImFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uIiwidG9vbHRpcCIsInkiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJncmlkIiwic3Ryb2tlRGFzaEFycmF5IiwibGluZXMiLCJBcGV4Q2hhcnRzIiwicmVuZGVyIiwiZXhhbXBsZTIiLCJleGFtcGxlMyIsImxpZ2h0Q29sb3IiLCJjdXJ2ZSIsImNyb3NzaGFpcnMiLCJwb3NpdGlvbiIsImNvbG9yIiwiZGFzaEFycmF5IiwidW5kZWZpbmVkIiwib2Zmc2V0WSIsIm1hcmtlcnMiLCJzdHJva2VDb2xvciIsInN0cm9rZVdpZHRoIiwiZXhhbXBsZTQiLCJiYXNlTGlnaHRDb2xvciIsInNlY29uZGFyeUxpZ2h0Q29sb3IiLCJleGFtcGxlNSIsInN0YWNrZWQiLCJtYXgiLCJwYWRkaW5nIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiZXhhbXBsZTYiLCJ4IiwiRGF0ZSIsImdldFRpbWUiLCJiYXJIZWlnaHQiLCJob3Jpem9udGFsQWxpZ24iLCJpbml0Iiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/apexcharts.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/apexcharts.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=apexcharts.js.map