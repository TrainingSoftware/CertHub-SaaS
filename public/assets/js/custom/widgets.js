/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../themes/metronic/html/demo10/src/js/custom/widgets.js":
/*!*********************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/widgets.js ***!
  \*********************************************************************/
/***/ ((module) => {

<<<<<<< Updated upstream


// Class definition
var KTWidgets = function () {
    // Statistics widgets
    var initStatisticsWidget3 = function() {
        var charts = document.querySelectorAll('.statistics-widget-3-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [30, 45, 32, 70, 40]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
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
                    opacity: 0.3
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
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
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: '#E4E6EF',
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
                    min: 0,
                    max: 80,
                    labels: {
                        show: false,
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
                        formatter: function(val) {
                            return "$" + val + " thousands"
                        }
                    }
                },
                colors: [baseColor],
                markers: {
                    colors: [baseColor],
                    strokeColor: [lightColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });
    }

    var initStatisticsWidget4 = function() {
        var charts = document.querySelectorAll('.statistics-widget-4-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [40, 40, 30, 30, 35, 35, 50]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
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
                    opacity: 0.3
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
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: '#E4E6EF',
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
                    min: 0,
                    max: 60,
                    labels: {
                        show: false,
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
                        formatter: function(val) {
                            return "$" + val + " thousands"
                        }
                    }
                },
                colors: [baseColor],
                markers: {
                    colors: [baseColor],
                    strokeColor: [lightColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });
    }

    // Charts widgets
    var initChartsWidget1 = function() {
        var element = document.getElementById("kt_charts_widget_1_chart");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
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
                    horizontal: false,
                    columnWidth: ['30%'],
                    borderRadius: 4
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

    var initChartsWidget2 = function() {
        var element = document.getElementById("kt_charts_widget_2_chart");

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
                    horizontal: false,
                    columnWidth: ['30%'],
                    borderRadius: 4
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

    var initChartsWidget3 = function() {
        var element = document.getElementById("kt_charts_widget_3_chart");

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
                height: 350,
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

    var initChartsWidget4 = function() {
        var element = document.getElementById("kt_charts_widget_4_chart");

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
                height: 350,
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

    var initChartsWidget5 = function() {
        var element = document.getElementById("kt_charts_widget_5_chart");

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');

        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var secondaryColor = KTUtil.getCssVariableValue('--bs-info');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [40, 50, 65, 70, 50, 30]
            }, {
                name: 'Revenue',
                data: [-30, -40, -55, -60, -40, -20]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                stacked: true,
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['12%'],
                    borderRadius: 4
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
                min: -80,
                max: 80,
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

    var initChartsWidget6 = function() {
        var element = document.getElementById("kt_charts_widget_6_chart");

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
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    stacked: true,
                    horizontal: false,
                    borderRadius: 4,
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

    var initChartsWidget7 = function() {
        var element = document.getElementById("kt_charts_widget_7_chart");

        var height = parseInt(KTUtil.css(element, 'height'));

        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var strokeColor = KTUtil.getCssVariableValue('--bs-gray-300');

        var color1 = KTUtil.getCssVariableValue('--bs-warning');
        var color1Light = KTUtil.getCssVariableValue('--bs-light-warning');

        var color2 = KTUtil.getCssVariableValue('--bs-success');
        var color2Light = KTUtil.getCssVariableValue('--bs-light-success');

        var color3 = KTUtil.getCssVariableValue('--bs-primary');
        var color3Light = KTUtil.getCssVariableValue('--bs-light-primary');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [30, 30, 50, 50, 35, 35]
            }, {
                name: 'Revenue',
                data: [55, 20, 20, 20, 70, 70]
            }, {
                name: 'Expenses',
                data: [60, 60, 40, 40, 30, 30]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
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
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [color1, 'transparent', 'transparent']
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
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: strokeColor,
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
                    show: false,
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
            colors: [color1, color2, color3],
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
                colors: [color1Light, color2Light, color3Light],
                strokeColor: [color1, color2, color3],
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    var initChartsWidget8 = function() {
        var element = document.getElementById("kt_charts_widget_8_chart");

        var height = parseInt(KTUtil.css(element, 'height'));

        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var strokeColor = KTUtil.getCssVariableValue('--bs-gray-300');

        var color1 = KTUtil.getCssVariableValue('--bs-warning');
        var color1Light = KTUtil.getCssVariableValue('--bs-light-warning');

        var color2 = KTUtil.getCssVariableValue('--bs-success');
        var color2Light = KTUtil.getCssVariableValue('--bs-light-success');

        var color3 = KTUtil.getCssVariableValue('--bs-primary');
        var color3Light = KTUtil.getCssVariableValue('--bs-light-primary');

        if (!element) {
            return;
        }

        var options = {
            series: [{
                name: 'Net Profit',
                data: [30, 30, 50, 50, 35, 35]
            }, {
                name: 'Revenue',
                data: [55, 20, 20, 20, 70, 70]
            }, {
                name: 'Expenses',
                data: [60, 60, 40, 40, 30, 30]
            },],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
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
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [color1, color2, color3]
            },
            xaxis: {
                x: 0,
                offsetX: 0,
                offsetY: 0,
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                },
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: strokeColor,
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
                y: 0,
                offsetX: 0,
                offsetY: 0,
                padding: {
                    left: 0,
                    right: 0
                },
                labels: {
                    show: false,
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
            colors: [color1Light, color2Light, color3Light],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }
            },
            markers: {
                colors: [color1, color2, color3],
                strokeColor: [color1, color2, color3],
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    // Mixed widgets
    var initMixedWidget2 = function() {
        var charts = document.querySelectorAll('.mixed-widget-2-chart');

        var color;
        var strokeColor;
        var height;
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var options;
        var chart;

        [].slice.call(charts).map(function(element) {
            height = parseInt(KTUtil.css(element, 'height'));
            color = KTUtil.getCssVariableValue('--bs-' + element.getAttribute("data-kt-color"));
            strokeColor = KTUtil.colorDarken(color, 15);

            options = {
                series: [{
                    name: 'Net Profit',
                    data: [30, 45, 32, 70, 40, 40, 40]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 5,
                        left: 0,
                        blur: 3,
                        color: strokeColor,
                        opacity: 0.5
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
                    opacity: 0
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [strokeColor]
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
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: borderColor,
                            width: 1,
                            dashArray: 3
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 80,
                    labels: {
                        show: false,
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
                        fontSize: '12px',
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val + " thousands"
                        }
                    },
                    marker: {
                        show: false
                    }
                },
                colors: ['transparent'],
                markers: {
                    colors: [color],
                    strokeColor: [strokeColor],
                    strokeWidth: 3
                }
            };

            chart = new ApexCharts(element, options);
            chart.render();
        });
    }

    var initMixedWidget3 = function() {
        var charts = document.querySelectorAll('.mixed-widget-3-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [30, 25, 45, 30, 55, 55]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
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
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
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
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: strokeColor,
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
                    min: 0,
                    max: 60,
                    labels: {
                        show: false,
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
                markers: {
                    colors: [lightColor],
                    strokeColor: [baseColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });
    }

    var initMixedWidget4 = function() {
        var charts = document.querySelectorAll('.mixed-widget-4-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );
            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-700');

            var options = {
                series: [74],
                chart: {
                    fontFamily: 'inherit',
                    height: height,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "65%"
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                show: false,
                                fontWeight: '700'
                            },
                            value: {
                                color: labelColor,
                                fontSize: "30px",
                                fontWeight: '700',
                                offsetY: 12,
                                show: true,
                                formatter: function (val) {
                                    return val + '%';
                                }
                            }
                        },
                        track: {
                            background: lightColor,
                            strokeWidth: '100%'
                        }
                    }
                },
                colors: [baseColor],
                stroke: {
                    lineCap: "round",
                },
                labels: ["Progress"]
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });
    }

    var initMixedWidget5 = function() {
        var charts = document.querySelectorAll('.mixed-widget-5-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [30, 30, 60, 25, 25, 40]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
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
                fill1: {
                    type: 'gradient',
                    opacity: 1,
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 0.5,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 0.375,
                        stops: [25, 50, 100],
                        colorStops: []
                    }
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
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
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: strokeColor,
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
                    min: 0,
                    max: 65,
                    labels: {
                        show: false,
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
                markers: {
                    colors: [lightColor],
                    strokeColor: [baseColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });
    }

    var initMixedWidget6 = function() {
        var charts = document.querySelectorAll('.mixed-widget-6-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color );

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [30, 25, 45, 30, 55, 55]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
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
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
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
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: strokeColor,
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
                    min: 0,
                    max: 60,
                    labels: {
                        show: false,
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
                markers: {
                    colors: [lightColor],
                    strokeColor: [baseColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });
    }
    var initMixedWidget12 = function() {
        var charts = document.querySelectorAll('.mixed-widget-12-chart');

        var color;
        var strokeColor;
        var height;
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var options;
        var chart;

        [].slice.call(charts).map(function(element) {
            height = parseInt(KTUtil.css(element, 'height'));

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [35, 65, 75, 55, 45, 60, 55]
                }, {
                    name: 'Revenue',
                    data: [40, 70, 80, 60, 50, 65, 60]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'bar',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: ['30%'],
                        borderRadius: 2
                    }
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 1,
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
                    min: 0,
                    max: 100,
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                fill: {
                    type: ['solid', 'solid'],
                    opacity: [0.25, 1]
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
                    },
                    marker: {
                        show: false
                    }
                },
                colors: ['#ffffff', '#ffffff'],
                grid: {
                    borderColor: borderColor,
                    strokeDashArray: 4,
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                    padding: {
                        left: 20,
                        right: 20
                    }
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render()
        });
    }

    var initMixedWidget13 = function() {
        var height;
        var charts = document.querySelectorAll('.mixed-widget-13-chart');

        [].slice.call(charts).map(function(element) {
            height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');

            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [15, 25, 15, 40, 20, 50]
                }],
                grid: {
                    show: false,
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }
                },
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
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
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.4,
                        opacityTo: 0,
                        stops: [20, 120, 120, 120]
                    }
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: ['#FFFFFF']
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
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: strokeColor,
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
                    min: 0,
                    max: 60,
                    labels: {
                        show: false,
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
                colors: ['#ffffff'],
                markers: {
                    colors: [labelColor],
                    strokeColor: [strokeColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });
    }

    var initMixedWidget14 = function() {
		var charts = document.querySelectorAll('.mixed-widget-14-chart');
        var options;
        var chart;
        var height;

        [].slice.call(charts).map(function(element) {
            height = parseInt(KTUtil.css(element, 'height'));
            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');

            options = {
                series: [{
                    name: 'Inflation',
                    data: [1, 2.1, 1, 2.1, 4.1, 6.1, 4.1, 4.1, 2.1, 4.1, 2.1, 3.1, 1, 1, 2.1]
                }],
                chart: {
                    fontFamily: 'inherit',
                    height: height,
                    type: 'bar',
                    toolbar: {
                        show: false
                    }
                },
                grid: {
                    show: false,
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }
                },
                colors: ['#ffffff'],
                plotOptions: {
                    bar: {
                        borderRadius: 2.5,
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                        columnWidth: '20%'
                    }
                },
                dataLabels: {
                    enabled: false,
                    formatter: function(val) {
                        return val + "%";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ["#304758"]
                    }
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
                    position: 'top',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                yaxis: {
                    show: false,
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                        background: labelColor
                    },
                    labels: {
                        show: false,
                        formatter: function(val) {
                            return val + "%";
                        }
                    }
                }
            };

            chart = new ApexCharts(element, options);
            chart.render();
        });
	}

    var initMixedWidget16 = function() {
        var element = document.getElementById("kt_charts_mixed_widget_16_chart");
        var height = parseInt(KTUtil.css(element, 'height'));

        if (!element) {
            return;
        }

        var options = {
            labels: ["Total Members"],
            series: [74],
            chart: {
                fontFamily: 'inherit',
                height: height,
                type: 'radialBar',
                offsetY: 0
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,

                    hollow: {
                        margin: 0,
                        size: "70%"
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            show: true,
                            fontSize: "13px",
                            fontWeight: "700",
                            offsetY: -5,
                            color: KTUtil.getCssVariableValue('--bs-gray-500')
                        },
                        value: {
                            color: KTUtil.getCssVariableValue('--bs-gray-700'),
                            fontSize: "30px",
                            fontWeight: "700",
                            offsetY: -40,
                            show: true
                        }
                    },
                    track: {
                        background: KTUtil.getCssVariableValue('--bs-light-primary'),
                        strokeWidth: '100%'
                    }
                }
            },
            colors: [KTUtil.getCssVariableValue('--bs-primary')],
            stroke: {
                lineCap: "round",
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }

    // Feeds Widgets
    var initFeedWidget1 = function() {
        var formEl = document.querySelector("#kt_forms_widget_1_form");
        var editorId = 'kt_forms_widget_1_editor';

        if ( !formEl ) {
            return;
        }

        // init editor
        var options = {
            modules: {
                toolbar: {
                    container: "#kt_forms_widget_1_editor_toolbar"
                }
            },
            placeholder: 'What is on your mind ?',
            theme: 'snow'
        };

        if (!formEl) {
            return;
        }

        // Init editor
        var editorObj = new Quill('#' + editorId, options);
    }

    var initFeedsWidget4 = function() {
        var btn = document.querySelector('#kt_widget_5_load_more_btn');
        var widget5 = document.querySelector('#kt_widget_5');

        if (btn) {
            btn.addEventListener('click', function(e){
                e.preventDefault();
                btn.setAttribute('data-kt-indicator', 'on');

                setTimeout(function() {
                    btn.removeAttribute('data-kt-indicator');
                    widget5.classList.remove('d-none');
                    btn.classList.add('d-none');

                    KTUtil.scrollTo(widget5, 200);
                }, 2000);
            });
        }
    }

    // Follow button
    var initUserFollowButton = function() {
        var follow = document.querySelector('#kt_user_follow_button');

        if (follow) {
            follow.addEventListener('click', function(e){
                // Prevent default action
                e.preventDefault();

                // Show indicator
                follow.setAttribute('data-kt-indicator', 'on');

                // Disable button to avoid multiple click
				follow.disabled = true;

                // Check button state
                if (follow.classList.contains("btn-success")) {
                     setTimeout(function() {
                        follow.removeAttribute('data-kt-indicator');
                        follow.classList.remove("btn-success");
                        follow.classList.add("btn-light");
                        follow.querySelector(".svg-icon").classList.add("d-none");
                        follow.querySelector(".indicator-label").innerHTML = 'Follow';
				        follow.disabled = false;
                    }, 1500);
                } else {
                     setTimeout(function() {
                        follow.removeAttribute('data-kt-indicator');
                        follow.classList.add("btn-success");
                        follow.classList.remove("btn-light");
                        follow.querySelector(".svg-icon").classList.remove("d-none");
                        follow.querySelector(".indicator-label").innerHTML = 'Following';
                        follow.disabled = false;
                    }, 1000);
                }
            });
        }
    }

    // Calendar
    var initCalendarWidget1 = function() {
        if (typeof FullCalendar === 'undefined' || !document.querySelector('#kt_calendar_widget_1')) {
            return;
        }

        var todayDate = moment().startOf('day');
        var YM = todayDate.format('YYYY-MM');
        var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
        var TODAY = todayDate.format('YYYY-MM-DD');
        var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

        var calendarEl = document.getElementById('kt_calendar_widget_1');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },

            height: 800,
            contentHeight: 780,
            aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio

            nowIndicator: true,
            now: TODAY + 'T09:25:00', // just for demo

            views: {
                dayGridMonth: { buttonText: 'month' },
                timeGridWeek: { buttonText: 'week' },
                timeGridDay: { buttonText: 'day' }
            },

            initialView: 'dayGridMonth',
            initialDate: TODAY,

            editable: true,
            dayMaxEvents: true, // allow "more" link when too many events
            navLinks: true,
            events: [
                {
                    title: 'All Day Event',
                    start: YM + '-01',
                    description: 'Toto lorem ipsum dolor sit incid idunt ut',
                    className: "fc-event-danger fc-event-solid-warning"
                },
                {
                    title: 'Reporting',
                    start: YM + '-14T13:30:00',
                    description: 'Lorem ipsum dolor incid idunt ut labore',
                    end: YM + '-14',
                    className: "fc-event-success"
                },
                {
                    title: 'Company Trip',
                    start: YM + '-02',
                    description: 'Lorem ipsum dolor sit tempor incid',
                    end: YM + '-03',
                    className: "fc-event-primary"
                },
                {
                    title: 'ICT Expo 2017 - Product Release',
                    start: YM + '-03',
                    description: 'Lorem ipsum dolor sit tempor inci',
                    end: YM + '-05',
                    className: "fc-event-light fc-event-solid-primary"
                },
                {
                    title: 'Dinner',
                    start: YM + '-12',
                    description: 'Lorem ipsum dolor sit amet, conse ctetur',
                    end: YM + '-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: YM + '-09T16:00:00',
                    description: 'Lorem ipsum dolor sit ncididunt ut labore',
                    className: "fc-event-danger"
                },
                {
                    id: 1000,
                    title: 'Repeating Event',
                    description: 'Lorem ipsum dolor sit amet, labore',
                    start: YM + '-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: YESTERDAY,
                    end: TOMORROW,
                    description: 'Lorem ipsum dolor eius mod tempor labore',
                    className: "fc-event-primary"
                },
                {
                    title: 'Meeting',
                    start: TODAY + 'T10:30:00',
                    end: TODAY + 'T12:30:00',
                    description: 'Lorem ipsum dolor eiu idunt ut labore'
                },
                {
                    title: 'Lunch',
                    start: TODAY + 'T12:00:00',
                    className: "fc-event-info",
                    description: 'Lorem ipsum dolor sit amet, ut labore'
                },
                {
                    title: 'Meeting',
                    start: TODAY + 'T14:30:00',
                    className: "fc-event-warning",
                    description: 'Lorem ipsum conse ctetur adipi scing'
                },
                {
                    title: 'Happy Hour',
                    start: TODAY + 'T17:30:00',
                    className: "fc-event-info",
                    description: 'Lorem ipsum dolor sit amet, conse ctetur'
                },
                {
                    title: 'Dinner',
                    start: TOMORROW + 'T05:00:00',
                    className: "fc-event-solid-danger fc-event-light",
                    description: 'Lorem ipsum dolor sit ctetur adipi scing'
                },
                {
                    title: 'Birthday Party',
                    start: TOMORROW + 'T07:00:00',
                    className: "fc-event-primary",
                    description: 'Lorem ipsum dolor sit amet, scing'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: YM + '-28',
                    className: "fc-event-solid-info fc-event-light",
                    description: 'Lorem ipsum dolor sit amet, labore'
                }
            ]
        });

        calendar.render();
    }

    // Daterangepicker
    var initDaterangepicker = function () {
        if (!document.querySelector('#kt_dashboard_daterangepicker')) {
            return;
        }

        var picker = $('#kt_dashboard_daterangepicker');
        var start = moment();
        var end = moment();

        function cb(start, end, label) {
            var title = '';
            var range = '';

            if ((end - start) < 100 || label == 'Today') {
                title = 'Today:';
                range = start.format('MMM D');
            } else if (label == 'Yesterday') {
                title = 'Yesterday:';
                range = start.format('MMM D');
            } else {
                range = start.format('MMM D') + ' - ' + end.format('MMM D');
            }

            $('#kt_dashboard_daterangepicker_date').html(range);
            $('#kt_dashboard_daterangepicker_title').html(title);
        }

        picker.daterangepicker({
            direction: KTUtil.isRTL(),
            startDate: start,
            endDate: end,
            opens: 'left',
            applyClass: 'btn-primary',
            cancelClass: 'btn-light-primary',
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end, '');
    }

    // Dark mode toggler
    var initDarkModeToggle = function() {
        var toggle = document.querySelector('#kt_user_menu_dark_mode_toggle');

        if (toggle) {
            toggle.addEventListener('click', function() {
                window.location.href = this.getAttribute('data-kt-url');
            });
        }
    }

    // Public methods
    return {
        init: function () {
            // Daterangepicker
            initDaterangepicker();

            // Dark Mode
            initDarkModeToggle();

            // Statistics widgets
            initStatisticsWidget3();
            initStatisticsWidget4();

            // Charts widgets
            initChartsWidget1();
            initChartsWidget2();
            initChartsWidget3();
            initChartsWidget4();
            initChartsWidget5();
            initChartsWidget6();
            initChartsWidget7();
            initChartsWidget8();

            // Mixed widgets
            initMixedWidget2();
            initMixedWidget3();
            initMixedWidget4();
            initMixedWidget5();
            initMixedWidget6();
            initMixedWidget7();
            initMixedWidget10();
            initMixedWidget12();
            initMixedWidget13();
            initMixedWidget14();
            initMixedWidget16();

            // Feeds
            initFeedWidget1();
            initFeedsWidget4();

            // Follow button
            initUserFollowButton();

            // Calendar
            initCalendarWidget1();
        }
    }
}();

// Webpack support
if (true) {
    module.exports = KTWidgets;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTWidgets.init();
});

=======
eval(" // Class definition\n\nvar KTWidgets = function () {\n  // Statistics widgets\n  var initStatisticsWidget3 = function initStatisticsWidget3() {\n    var charts = document.querySelectorAll('.statistics-widget-3-chart');\n    [].slice.call(charts).map(function (element) {\n      var height = parseInt(KTUtil.css(element, 'height'));\n\n      if (!element) {\n        return;\n      }\n\n      var color = element.getAttribute('data-kt-chart-color');\n      var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');\n      var baseColor = KTUtil.getCssVariableValue('--bs-' + color);\n      var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color);\n      var options = {\n        series: [{\n          name: 'Net Profit',\n          data: [30, 45, 32, 70, 40]\n        }],\n        chart: {\n          fontFamily: 'inherit',\n          type: 'area',\n          height: height,\n          toolbar: {\n            show: false\n          },\n          zoom: {\n            enabled: false\n          },\n          sparkline: {\n            enabled: true\n          }\n        },\n        plotOptions: {},\n        legend: {\n          show: false\n        },\n        dataLabels: {\n          enabled: false\n        },\n        fill: {\n          type: 'solid',\n          opacity: 0.3\n        },\n        stroke: {\n          curve: 'smooth',\n          show: true,\n          width: 3,\n          colors: [baseColor]\n        },\n        xaxis: {\n          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n          axisBorder: {\n            show: false\n          },\n          axisTicks: {\n            show: false\n          },\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          },\n          crosshairs: {\n            show: false,\n            position: 'front',\n            stroke: {\n              color: '#E4E6EF',\n              width: 1,\n              dashArray: 3\n            }\n          },\n          tooltip: {\n            enabled: true,\n            formatter: undefined,\n            offsetY: 0,\n            style: {\n              fontSize: '12px'\n            }\n          }\n        },\n        yaxis: {\n          min: 0,\n          max: 80,\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          }\n        },\n        states: {\n          normal: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          hover: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          active: {\n            allowMultipleDataPointsSelection: false,\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          }\n        },\n        tooltip: {\n          style: {\n            fontSize: '12px'\n          },\n          y: {\n            formatter: function formatter(val) {\n              return \"$\" + val + \" thousands\";\n            }\n          }\n        },\n        colors: [baseColor],\n        markers: {\n          colors: [baseColor],\n          strokeColor: [lightColor],\n          strokeWidth: 3\n        }\n      };\n      var chart = new ApexCharts(element, options);\n      chart.render();\n    });\n  };\n\n  var initStatisticsWidget4 = function initStatisticsWidget4() {\n    var charts = document.querySelectorAll('.statistics-widget-4-chart');\n    [].slice.call(charts).map(function (element) {\n      var height = parseInt(KTUtil.css(element, 'height'));\n\n      if (!element) {\n        return;\n      }\n\n      var color = element.getAttribute('data-kt-chart-color');\n      var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');\n      var baseColor = KTUtil.getCssVariableValue('--bs-' + color);\n      var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color);\n      var options = {\n        series: [{\n          name: 'Net Profit',\n          data: [40, 40, 30, 30, 35, 35, 50]\n        }],\n        chart: {\n          fontFamily: 'inherit',\n          type: 'area',\n          height: height,\n          toolbar: {\n            show: false\n          },\n          zoom: {\n            enabled: false\n          },\n          sparkline: {\n            enabled: true\n          }\n        },\n        plotOptions: {},\n        legend: {\n          show: false\n        },\n        dataLabels: {\n          enabled: false\n        },\n        fill: {\n          type: 'solid',\n          opacity: 0.3\n        },\n        stroke: {\n          curve: 'smooth',\n          show: true,\n          width: 3,\n          colors: [baseColor]\n        },\n        xaxis: {\n          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],\n          axisBorder: {\n            show: false\n          },\n          axisTicks: {\n            show: false\n          },\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          },\n          crosshairs: {\n            show: false,\n            position: 'front',\n            stroke: {\n              color: '#E4E6EF',\n              width: 1,\n              dashArray: 3\n            }\n          },\n          tooltip: {\n            enabled: true,\n            formatter: undefined,\n            offsetY: 0,\n            style: {\n              fontSize: '12px'\n            }\n          }\n        },\n        yaxis: {\n          min: 0,\n          max: 60,\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          }\n        },\n        states: {\n          normal: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          hover: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          active: {\n            allowMultipleDataPointsSelection: false,\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          }\n        },\n        tooltip: {\n          style: {\n            fontSize: '12px'\n          },\n          y: {\n            formatter: function formatter(val) {\n              return \"$\" + val + \" thousands\";\n            }\n          }\n        },\n        colors: [baseColor],\n        markers: {\n          colors: [baseColor],\n          strokeColor: [lightColor],\n          strokeWidth: 3\n        }\n      };\n      var chart = new ApexCharts(element, options);\n      chart.render();\n    });\n  }; // Charts widgets\n\n\n  var initChartsWidget1 = function initChartsWidget1() {\n    var element = document.getElementById(\"kt_charts_widget_1_chart\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var baseColor = KTUtil.getCssVariableValue('--bs-primary');\n    var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        data: [44, 55, 57, 56, 61, 58]\n      }, {\n        name: 'Revenue',\n        data: [76, 85, 101, 98, 87, 105]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        type: 'bar',\n        height: height,\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {\n        bar: {\n          horizontal: false,\n          columnWidth: ['30%'],\n          borderRadius: 4\n        }\n      },\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      stroke: {\n        show: true,\n        width: 2,\n        colors: ['transparent']\n      },\n      xaxis: {\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      fill: {\n        opacity: 1\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [baseColor, secondaryColor],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        }\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  var initChartsWidget2 = function initChartsWidget2() {\n    var element = document.getElementById(\"kt_charts_widget_2_chart\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var baseColor = KTUtil.getCssVariableValue('--bs-warning');\n    var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        data: [44, 55, 57, 56, 61, 58]\n      }, {\n        name: 'Revenue',\n        data: [76, 85, 101, 98, 87, 105]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        type: 'bar',\n        height: height,\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {\n        bar: {\n          horizontal: false,\n          columnWidth: ['30%'],\n          borderRadius: 4\n        }\n      },\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      stroke: {\n        show: true,\n        width: 2,\n        colors: ['transparent']\n      },\n      xaxis: {\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      fill: {\n        opacity: 1\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [baseColor, secondaryColor],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        }\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  var initChartsWidget3 = function initChartsWidget3() {\n    var element = document.getElementById(\"kt_charts_widget_3_chart\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var baseColor = KTUtil.getCssVariableValue('--bs-info');\n    var lightColor = KTUtil.getCssVariableValue('--bs-light-info');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        data: [30, 40, 40, 90, 90, 70, 70]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        type: 'area',\n        height: 350,\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {},\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      fill: {\n        type: 'solid',\n        opacity: 1\n      },\n      stroke: {\n        curve: 'smooth',\n        show: true,\n        width: 3,\n        colors: [baseColor]\n      },\n      xaxis: {\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        },\n        crosshairs: {\n          position: 'front',\n          stroke: {\n            color: baseColor,\n            width: 1,\n            dashArray: 3\n          }\n        },\n        tooltip: {\n          enabled: true,\n          formatter: undefined,\n          offsetY: 0,\n          style: {\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [lightColor],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        }\n      },\n      markers: {\n        strokeColor: baseColor,\n        strokeWidth: 3\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  var initChartsWidget4 = function initChartsWidget4() {\n    var element = document.getElementById(\"kt_charts_widget_4_chart\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var baseColor = KTUtil.getCssVariableValue('--bs-success');\n    var baseLightColor = KTUtil.getCssVariableValue('--bs-light-success');\n    var secondaryColor = KTUtil.getCssVariableValue('--bs-warning');\n    var secondaryLightColor = KTUtil.getCssVariableValue('--bs-light-warning');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        data: [60, 50, 80, 40, 100, 60]\n      }, {\n        name: 'Revenue',\n        data: [70, 60, 110, 40, 50, 70]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        type: 'area',\n        height: 350,\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {},\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      fill: {\n        type: 'solid',\n        opacity: 1\n      },\n      stroke: {\n        curve: 'smooth'\n      },\n      xaxis: {\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        },\n        crosshairs: {\n          position: 'front',\n          stroke: {\n            color: labelColor,\n            width: 1,\n            dashArray: 3\n          }\n        },\n        tooltip: {\n          enabled: true,\n          formatter: undefined,\n          offsetY: 0,\n          style: {\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [baseColor, secondaryColor],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        }\n      },\n      markers: {\n        colors: [baseLightColor, secondaryLightColor],\n        strokeColor: [baseLightColor, secondaryLightColor],\n        strokeWidth: 3\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  var initChartsWidget5 = function initChartsWidget5() {\n    var element = document.getElementById(\"kt_charts_widget_5_chart\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var baseColor = KTUtil.getCssVariableValue('--bs-primary');\n    var secondaryColor = KTUtil.getCssVariableValue('--bs-info');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        data: [40, 50, 65, 70, 50, 30]\n      }, {\n        name: 'Revenue',\n        data: [-30, -40, -55, -60, -40, -20]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        type: 'bar',\n        stacked: true,\n        height: 350,\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {\n        bar: {\n          horizontal: false,\n          columnWidth: ['12%'],\n          borderRadius: 4\n        }\n      },\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      stroke: {\n        show: true,\n        width: 2,\n        colors: ['transparent']\n      },\n      xaxis: {\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        min: -80,\n        max: 80,\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      fill: {\n        opacity: 1\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [baseColor, secondaryColor],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        }\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  var initChartsWidget6 = function initChartsWidget6() {\n    var element = document.getElementById(\"kt_charts_widget_6_chart\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var baseColor = KTUtil.getCssVariableValue('--bs-primary');\n    var baseLightColor = KTUtil.getCssVariableValue('--bs-light-primary');\n    var secondaryColor = KTUtil.getCssVariableValue('--bs-info');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        type: 'bar',\n        stacked: true,\n        data: [40, 50, 65, 70, 50, 30]\n      }, {\n        name: 'Revenue',\n        type: 'bar',\n        stacked: true,\n        data: [20, 20, 25, 30, 30, 20]\n      }, {\n        name: 'Expenses',\n        type: 'area',\n        data: [50, 80, 60, 90, 50, 70]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        stacked: true,\n        height: 350,\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {\n        bar: {\n          stacked: true,\n          horizontal: false,\n          borderRadius: 4,\n          columnWidth: ['12%']\n        }\n      },\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      stroke: {\n        curve: 'smooth',\n        show: true,\n        width: 2,\n        colors: ['transparent']\n      },\n      xaxis: {\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        max: 120,\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      fill: {\n        opacity: 1\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [baseColor, secondaryColor, baseLightColor],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        },\n        padding: {\n          top: 0,\n          right: 0,\n          bottom: 0,\n          left: 0\n        }\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  var initChartsWidget7 = function initChartsWidget7() {\n    var element = document.getElementById(\"kt_charts_widget_7_chart\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var strokeColor = KTUtil.getCssVariableValue('--bs-gray-300');\n    var color1 = KTUtil.getCssVariableValue('--bs-warning');\n    var color1Light = KTUtil.getCssVariableValue('--bs-light-warning');\n    var color2 = KTUtil.getCssVariableValue('--bs-success');\n    var color2Light = KTUtil.getCssVariableValue('--bs-light-success');\n    var color3 = KTUtil.getCssVariableValue('--bs-primary');\n    var color3Light = KTUtil.getCssVariableValue('--bs-light-primary');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        data: [30, 30, 50, 50, 35, 35]\n      }, {\n        name: 'Revenue',\n        data: [55, 20, 20, 20, 70, 70]\n      }, {\n        name: 'Expenses',\n        data: [60, 60, 40, 40, 30, 30]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        type: 'area',\n        height: height,\n        toolbar: {\n          show: false\n        },\n        zoom: {\n          enabled: false\n        },\n        sparkline: {\n          enabled: true\n        }\n      },\n      plotOptions: {},\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      fill: {\n        type: 'solid',\n        opacity: 1\n      },\n      stroke: {\n        curve: 'smooth',\n        show: true,\n        width: 2,\n        colors: [color1, 'transparent', 'transparent']\n      },\n      xaxis: {\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          show: false,\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        },\n        crosshairs: {\n          show: false,\n          position: 'front',\n          stroke: {\n            color: strokeColor,\n            width: 1,\n            dashArray: 3\n          }\n        },\n        tooltip: {\n          enabled: true,\n          formatter: undefined,\n          offsetY: 0,\n          style: {\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        labels: {\n          show: false,\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [color1, color2, color3],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        }\n      },\n      markers: {\n        colors: [color1Light, color2Light, color3Light],\n        strokeColor: [color1, color2, color3],\n        strokeWidth: 3\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n\n  var initChartsWidget8 = function initChartsWidget8() {\n    var element = document.getElementById(\"kt_charts_widget_8_chart\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var strokeColor = KTUtil.getCssVariableValue('--bs-gray-300');\n    var color1 = KTUtil.getCssVariableValue('--bs-warning');\n    var color1Light = KTUtil.getCssVariableValue('--bs-light-warning');\n    var color2 = KTUtil.getCssVariableValue('--bs-success');\n    var color2Light = KTUtil.getCssVariableValue('--bs-light-success');\n    var color3 = KTUtil.getCssVariableValue('--bs-primary');\n    var color3Light = KTUtil.getCssVariableValue('--bs-light-primary');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      series: [{\n        name: 'Net Profit',\n        data: [30, 30, 50, 50, 35, 35]\n      }, {\n        name: 'Revenue',\n        data: [55, 20, 20, 20, 70, 70]\n      }, {\n        name: 'Expenses',\n        data: [60, 60, 40, 40, 30, 30]\n      }],\n      chart: {\n        fontFamily: 'inherit',\n        type: 'area',\n        height: height,\n        toolbar: {\n          show: false\n        },\n        zoom: {\n          enabled: false\n        },\n        sparkline: {\n          enabled: true\n        }\n      },\n      plotOptions: {},\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      fill: {\n        type: 'solid',\n        opacity: 1\n      },\n      stroke: {\n        curve: 'smooth',\n        show: true,\n        width: 2,\n        colors: [color1, color2, color3]\n      },\n      xaxis: {\n        x: 0,\n        offsetX: 0,\n        offsetY: 0,\n        padding: {\n          left: 0,\n          right: 0,\n          top: 0\n        },\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          show: false,\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        },\n        crosshairs: {\n          show: false,\n          position: 'front',\n          stroke: {\n            color: strokeColor,\n            width: 1,\n            dashArray: 3\n          }\n        },\n        tooltip: {\n          enabled: true,\n          formatter: undefined,\n          offsetY: 0,\n          style: {\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        y: 0,\n        offsetX: 0,\n        offsetY: 0,\n        padding: {\n          left: 0,\n          right: 0\n        },\n        labels: {\n          show: false,\n          style: {\n            colors: labelColor,\n            fontSize: '12px'\n          }\n        }\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return \"$\" + val + \" thousands\";\n          }\n        }\n      },\n      colors: [color1Light, color2Light, color3Light],\n      grid: {\n        borderColor: borderColor,\n        strokeDashArray: 4,\n        padding: {\n          top: 0,\n          bottom: 0,\n          left: 0,\n          right: 0\n        }\n      },\n      markers: {\n        colors: [color1, color2, color3],\n        strokeColor: [color1, color2, color3],\n        strokeWidth: 3\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  }; // Mixed widgets\n\n\n  var initMixedWidget2 = function initMixedWidget2() {\n    var charts = document.querySelectorAll('.mixed-widget-2-chart');\n    var color;\n    var strokeColor;\n    var height;\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var options;\n    var chart;\n    [].slice.call(charts).map(function (element) {\n      height = parseInt(KTUtil.css(element, 'height'));\n      color = KTUtil.getCssVariableValue('--bs-' + element.getAttribute(\"data-kt-color\"));\n      strokeColor = KTUtil.colorDarken(color, 15);\n      options = {\n        series: [{\n          name: 'Net Profit',\n          data: [30, 45, 32, 70, 40, 40, 40]\n        }],\n        chart: {\n          fontFamily: 'inherit',\n          type: 'area',\n          height: height,\n          toolbar: {\n            show: false\n          },\n          zoom: {\n            enabled: false\n          },\n          sparkline: {\n            enabled: true\n          },\n          dropShadow: {\n            enabled: true,\n            enabledOnSeries: undefined,\n            top: 5,\n            left: 0,\n            blur: 3,\n            color: strokeColor,\n            opacity: 0.5\n          }\n        },\n        plotOptions: {},\n        legend: {\n          show: false\n        },\n        dataLabels: {\n          enabled: false\n        },\n        fill: {\n          type: 'solid',\n          opacity: 0\n        },\n        stroke: {\n          curve: 'smooth',\n          show: true,\n          width: 3,\n          colors: [strokeColor]\n        },\n        xaxis: {\n          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],\n          axisBorder: {\n            show: false\n          },\n          axisTicks: {\n            show: false\n          },\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          },\n          crosshairs: {\n            show: false,\n            position: 'front',\n            stroke: {\n              color: borderColor,\n              width: 1,\n              dashArray: 3\n            }\n          }\n        },\n        yaxis: {\n          min: 0,\n          max: 80,\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          }\n        },\n        states: {\n          normal: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          hover: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          active: {\n            allowMultipleDataPointsSelection: false,\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          }\n        },\n        tooltip: {\n          style: {\n            fontSize: '12px'\n          },\n          y: {\n            formatter: function formatter(val) {\n              return \"$\" + val + \" thousands\";\n            }\n          },\n          marker: {\n            show: false\n          }\n        },\n        colors: ['transparent'],\n        markers: {\n          colors: [color],\n          strokeColor: [strokeColor],\n          strokeWidth: 3\n        }\n      };\n      chart = new ApexCharts(element, options);\n      chart.render();\n    });\n  };\n\n  var initMixedWidget3 = function initMixedWidget3() {\n    var charts = document.querySelectorAll('.mixed-widget-3-chart');\n    [].slice.call(charts).map(function (element) {\n      var height = parseInt(KTUtil.css(element, 'height'));\n\n      if (!element) {\n        return;\n      }\n\n      var color = element.getAttribute('data-kt-chart-color');\n      var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');\n      var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');\n      var baseColor = KTUtil.getCssVariableValue('--bs-' + color);\n      var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color);\n      var options = {\n        series: [{\n          name: 'Net Profit',\n          data: [30, 25, 45, 30, 55, 55]\n        }],\n        chart: {\n          fontFamily: 'inherit',\n          type: 'area',\n          height: height,\n          toolbar: {\n            show: false\n          },\n          zoom: {\n            enabled: false\n          },\n          sparkline: {\n            enabled: true\n          }\n        },\n        plotOptions: {},\n        legend: {\n          show: false\n        },\n        dataLabels: {\n          enabled: false\n        },\n        fill: {\n          type: 'solid',\n          opacity: 1\n        },\n        stroke: {\n          curve: 'smooth',\n          show: true,\n          width: 3,\n          colors: [baseColor]\n        },\n        xaxis: {\n          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n          axisBorder: {\n            show: false\n          },\n          axisTicks: {\n            show: false\n          },\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          },\n          crosshairs: {\n            show: false,\n            position: 'front',\n            stroke: {\n              color: strokeColor,\n              width: 1,\n              dashArray: 3\n            }\n          },\n          tooltip: {\n            enabled: true,\n            formatter: undefined,\n            offsetY: 0,\n            style: {\n              fontSize: '12px'\n            }\n          }\n        },\n        yaxis: {\n          min: 0,\n          max: 60,\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          }\n        },\n        states: {\n          normal: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          hover: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          active: {\n            allowMultipleDataPointsSelection: false,\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          }\n        },\n        tooltip: {\n          style: {\n            fontSize: '12px'\n          },\n          y: {\n            formatter: function formatter(val) {\n              return \"$\" + val + \" thousands\";\n            }\n          }\n        },\n        colors: [lightColor],\n        markers: {\n          colors: [lightColor],\n          strokeColor: [baseColor],\n          strokeWidth: 3\n        }\n      };\n      var chart = new ApexCharts(element, options);\n      chart.render();\n    });\n  };\n\n  var initMixedWidget4 = function initMixedWidget4() {\n    var charts = document.querySelectorAll('.mixed-widget-4-chart');\n    [].slice.call(charts).map(function (element) {\n      var height = parseInt(KTUtil.css(element, 'height'));\n\n      if (!element) {\n        return;\n      }\n\n      var color = element.getAttribute('data-kt-chart-color');\n      var baseColor = KTUtil.getCssVariableValue('--bs-' + color);\n      var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color);\n      var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-700');\n      var options = {\n        series: [74],\n        chart: {\n          fontFamily: 'inherit',\n          height: height,\n          type: 'radialBar'\n        },\n        plotOptions: {\n          radialBar: {\n            hollow: {\n              margin: 0,\n              size: \"65%\"\n            },\n            dataLabels: {\n              showOn: \"always\",\n              name: {\n                show: false,\n                fontWeight: '700'\n              },\n              value: {\n                color: labelColor,\n                fontSize: \"30px\",\n                fontWeight: '700',\n                offsetY: 12,\n                show: true,\n                formatter: function formatter(val) {\n                  return val + '%';\n                }\n              }\n            },\n            track: {\n              background: lightColor,\n              strokeWidth: '100%'\n            }\n          }\n        },\n        colors: [baseColor],\n        stroke: {\n          lineCap: \"round\"\n        },\n        labels: [\"Progress\"]\n      };\n      var chart = new ApexCharts(element, options);\n      chart.render();\n    });\n  };\n\n  var initMixedWidget5 = function initMixedWidget5() {\n    var charts = document.querySelectorAll('.mixed-widget-5-chart');\n    [].slice.call(charts).map(function (element) {\n      var height = parseInt(KTUtil.css(element, 'height'));\n\n      if (!element) {\n        return;\n      }\n\n      var color = element.getAttribute('data-kt-chart-color');\n      var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');\n      var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');\n      var baseColor = KTUtil.getCssVariableValue('--bs-' + color);\n      var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color);\n      var options = {\n        series: [{\n          name: 'Net Profit',\n          data: [30, 30, 60, 25, 25, 40]\n        }],\n        chart: {\n          fontFamily: 'inherit',\n          type: 'area',\n          height: height,\n          toolbar: {\n            show: false\n          },\n          zoom: {\n            enabled: false\n          },\n          sparkline: {\n            enabled: true\n          }\n        },\n        plotOptions: {},\n        legend: {\n          show: false\n        },\n        dataLabels: {\n          enabled: false\n        },\n        fill: {\n          type: 'solid',\n          opacity: 1\n        },\n        fill1: {\n          type: 'gradient',\n          opacity: 1,\n          gradient: {\n            type: \"vertical\",\n            shadeIntensity: 0.5,\n            gradientToColors: undefined,\n            inverseColors: true,\n            opacityFrom: 1,\n            opacityTo: 0.375,\n            stops: [25, 50, 100],\n            colorStops: []\n          }\n        },\n        stroke: {\n          curve: 'smooth',\n          show: true,\n          width: 3,\n          colors: [baseColor]\n        },\n        xaxis: {\n          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n          axisBorder: {\n            show: false\n          },\n          axisTicks: {\n            show: false\n          },\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          },\n          crosshairs: {\n            show: false,\n            position: 'front',\n            stroke: {\n              color: strokeColor,\n              width: 1,\n              dashArray: 3\n            }\n          },\n          tooltip: {\n            enabled: true,\n            formatter: undefined,\n            offsetY: 0,\n            style: {\n              fontSize: '12px'\n            }\n          }\n        },\n        yaxis: {\n          min: 0,\n          max: 65,\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          }\n        },\n        states: {\n          normal: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          hover: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          active: {\n            allowMultipleDataPointsSelection: false,\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          }\n        },\n        tooltip: {\n          style: {\n            fontSize: '12px'\n          },\n          y: {\n            formatter: function formatter(val) {\n              return \"$\" + val + \" thousands\";\n            }\n          }\n        },\n        colors: [lightColor],\n        markers: {\n          colors: [lightColor],\n          strokeColor: [baseColor],\n          strokeWidth: 3\n        }\n      };\n      var chart = new ApexCharts(element, options);\n      chart.render();\n    });\n  };\n\n  var initMixedWidget6 = function initMixedWidget6() {\n    var charts = document.querySelectorAll('.mixed-widget-6-chart');\n    [].slice.call(charts).map(function (element) {\n      var height = parseInt(KTUtil.css(element, 'height'));\n\n      if (!element) {\n        return;\n      }\n\n      var color = element.getAttribute('data-kt-chart-color');\n      var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');\n      var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');\n      var baseColor = KTUtil.getCssVariableValue('--bs-' + color);\n      var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color);\n      var options = {\n        series: [{\n          name: 'Net Profit',\n          data: [30, 25, 45, 30, 55, 55]\n        }],\n        chart: {\n          fontFamily: 'inherit',\n          type: 'area',\n          height: height,\n          toolbar: {\n            show: false\n          },\n          zoom: {\n            enabled: false\n          },\n          sparkline: {\n            enabled: true\n          }\n        },\n        plotOptions: {},\n        legend: {\n          show: false\n        },\n        dataLabels: {\n          enabled: false\n        },\n        fill: {\n          type: 'solid',\n          opacity: 1\n        },\n        stroke: {\n          curve: 'smooth',\n          show: true,\n          width: 3,\n          colors: [baseColor]\n        },\n        xaxis: {\n          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n          axisBorder: {\n            show: false\n          },\n          axisTicks: {\n            show: false\n          },\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          },\n          crosshairs: {\n            show: false,\n            position: 'front',\n            stroke: {\n              color: strokeColor,\n              width: 1,\n              dashArray: 3\n            }\n          },\n          tooltip: {\n            enabled: true,\n            formatter: undefined,\n            offsetY: 0,\n            style: {\n              fontSize: '12px'\n            }\n          }\n        },\n        yaxis: {\n          min: 0,\n          max: 60,\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          }\n        },\n        states: {\n          normal: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          hover: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          active: {\n            allowMultipleDataPointsSelection: false,\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          }\n        },\n        tooltip: {\n          style: {\n            fontSize: '12px'\n          },\n          y: {\n            formatter: function formatter(val) {\n              return \"$\" + val + \" thousands\";\n            }\n          }\n        },\n        colors: [lightColor],\n        markers: {\n          colors: [lightColor],\n          strokeColor: [baseColor],\n          strokeWidth: 3\n        }\n      };\n      var chart = new ApexCharts(element, options);\n      chart.render();\n    });\n  };\n\n  var initMixedWidget7 = function initMixedWidget7() {\n    var charts = document.querySelectorAll('.mixed-widget-7-chart');\n    [].slice.call(charts).map(function (element) {\n      var height = parseInt(KTUtil.css(element, 'height'));\n\n      if (!element) {\n        return;\n      }\n\n      var color = element.getAttribute('data-kt-chart-color');\n      var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');\n      var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');\n      var baseColor = KTUtil.getCssVariableValue('--bs-' + color);\n      var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color);\n      var options = {\n        series: [{\n          name: 'Net Profit',\n          data: [15, 25, 15, 40, 20, 50]\n        }],\n        chart: {\n          fontFamily: 'inherit',\n          type: 'area',\n          height: height,\n          toolbar: {\n            show: false\n          },\n          zoom: {\n            enabled: false\n          },\n          sparkline: {\n            enabled: true\n          }\n        },\n        plotOptions: {},\n        legend: {\n          show: false\n        },\n        dataLabels: {\n          enabled: false\n        },\n        fill: {\n          type: 'solid',\n          opacity: 1\n        },\n        stroke: {\n          curve: 'smooth',\n          show: true,\n          width: 3,\n          colors: [baseColor]\n        },\n        xaxis: {\n          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n          axisBorder: {\n            show: false\n          },\n          axisTicks: {\n            show: false\n          },\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          },\n          crosshairs: {\n            show: false,\n            position: 'front',\n            stroke: {\n              color: strokeColor,\n              width: 1,\n              dashArray: 3\n            }\n          },\n          tooltip: {\n            enabled: true,\n            formatter: undefined,\n            offsetY: 0,\n            style: {\n              fontSize: '12px'\n            }\n          }\n        },\n        yaxis: {\n          min: 0,\n          max: 60,\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          }\n        },\n        states: {\n          normal: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          hover: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          active: {\n            allowMultipleDataPointsSelection: false,\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          }\n        },\n        tooltip: {\n          style: {\n            fontSize: '12px'\n          },\n          y: {\n            formatter: function formatter(val) {\n              return \"$\" + val + \" thousands\";\n            }\n          }\n        },\n        colors: [lightColor],\n        markers: {\n          colors: [lightColor],\n          strokeColor: [baseColor],\n          strokeWidth: 3\n        }\n      };\n      var chart = new ApexCharts(element, options);\n      chart.render();\n    });\n  };\n\n  var initMixedWidget10 = function initMixedWidget10() {\n    var charts = document.querySelectorAll('.mixed-widget-10-chart');\n    var color;\n    var height;\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var baseLightColor;\n    var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');\n    var baseColor;\n    var options;\n    var chart;\n    [].slice.call(charts).map(function (element) {\n      color = element.getAttribute(\"data-kt-color\");\n      height = parseInt(KTUtil.css(element, 'height'));\n      baseColor = KTUtil.getCssVariableValue('--bs-' + color);\n      options = {\n        series: [{\n          name: 'Net Profit',\n          data: [50, 60, 70, 80, 60, 50, 70, 60]\n        }, {\n          name: 'Revenue',\n          data: [50, 60, 70, 80, 60, 50, 70, 60]\n        }],\n        chart: {\n          fontFamily: 'inherit',\n          type: 'bar',\n          height: height,\n          toolbar: {\n            show: false\n          }\n        },\n        plotOptions: {\n          bar: {\n            horizontal: false,\n            columnWidth: ['50%'],\n            borderRadius: 4\n          }\n        },\n        legend: {\n          show: false\n        },\n        dataLabels: {\n          enabled: false\n        },\n        stroke: {\n          show: true,\n          width: 2,\n          colors: ['transparent']\n        },\n        xaxis: {\n          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],\n          axisBorder: {\n            show: false\n          },\n          axisTicks: {\n            show: false\n          },\n          labels: {\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          }\n        },\n        yaxis: {\n          y: 0,\n          offsetX: 0,\n          offsetY: 0,\n          labels: {\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          }\n        },\n        fill: {\n          type: 'solid'\n        },\n        states: {\n          normal: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          hover: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          active: {\n            allowMultipleDataPointsSelection: false,\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          }\n        },\n        tooltip: {\n          style: {\n            fontSize: '12px'\n          },\n          y: {\n            formatter: function formatter(val) {\n              return \"$\" + val + \" revenue\";\n            }\n          }\n        },\n        colors: [baseColor, secondaryColor],\n        grid: {\n          padding: {\n            top: 10\n          },\n          borderColor: borderColor,\n          strokeDashArray: 4,\n          yaxis: {\n            lines: {\n              show: true\n            }\n          }\n        }\n      };\n      chart = new ApexCharts(element, options);\n      chart.render();\n    });\n  };\n\n  var initMixedWidget12 = function initMixedWidget12() {\n    var charts = document.querySelectorAll('.mixed-widget-12-chart');\n    var color;\n    var strokeColor;\n    var height;\n    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');\n    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');\n    var options;\n    var chart;\n    [].slice.call(charts).map(function (element) {\n      height = parseInt(KTUtil.css(element, 'height'));\n      var options = {\n        series: [{\n          name: 'Net Profit',\n          data: [35, 65, 75, 55, 45, 60, 55]\n        }, {\n          name: 'Revenue',\n          data: [40, 70, 80, 60, 50, 65, 60]\n        }],\n        chart: {\n          fontFamily: 'inherit',\n          type: 'bar',\n          height: height,\n          toolbar: {\n            show: false\n          },\n          sparkline: {\n            enabled: true\n          }\n        },\n        plotOptions: {\n          bar: {\n            horizontal: false,\n            columnWidth: ['30%'],\n            borderRadius: 2\n          }\n        },\n        legend: {\n          show: false\n        },\n        dataLabels: {\n          enabled: false\n        },\n        stroke: {\n          show: true,\n          width: 1,\n          colors: ['transparent']\n        },\n        xaxis: {\n          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n          axisBorder: {\n            show: false\n          },\n          axisTicks: {\n            show: false\n          },\n          labels: {\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          }\n        },\n        yaxis: {\n          min: 0,\n          max: 100,\n          labels: {\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          }\n        },\n        fill: {\n          type: ['solid', 'solid'],\n          opacity: [0.25, 1]\n        },\n        states: {\n          normal: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          hover: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          active: {\n            allowMultipleDataPointsSelection: false,\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          }\n        },\n        tooltip: {\n          style: {\n            fontSize: '12px'\n          },\n          y: {\n            formatter: function formatter(val) {\n              return \"$\" + val + \" thousands\";\n            }\n          },\n          marker: {\n            show: false\n          }\n        },\n        colors: ['#ffffff', '#ffffff'],\n        grid: {\n          borderColor: borderColor,\n          strokeDashArray: 4,\n          yaxis: {\n            lines: {\n              show: true\n            }\n          },\n          padding: {\n            left: 20,\n            right: 20\n          }\n        }\n      };\n      var chart = new ApexCharts(element, options);\n      chart.render();\n    });\n  };\n\n  var initMixedWidget13 = function initMixedWidget13() {\n    var height;\n    var charts = document.querySelectorAll('.mixed-widget-13-chart');\n    [].slice.call(charts).map(function (element) {\n      height = parseInt(KTUtil.css(element, 'height'));\n\n      if (!element) {\n        return;\n      }\n\n      var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');\n      var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');\n      var options = {\n        series: [{\n          name: 'Net Profit',\n          data: [15, 25, 15, 40, 20, 50]\n        }],\n        grid: {\n          show: false,\n          padding: {\n            top: 0,\n            bottom: 0,\n            left: 0,\n            right: 0\n          }\n        },\n        chart: {\n          fontFamily: 'inherit',\n          type: 'area',\n          height: height,\n          toolbar: {\n            show: false\n          },\n          zoom: {\n            enabled: false\n          },\n          sparkline: {\n            enabled: true\n          }\n        },\n        plotOptions: {},\n        legend: {\n          show: false\n        },\n        dataLabels: {\n          enabled: false\n        },\n        fill: {\n          type: 'gradient',\n          gradient: {\n            opacityFrom: 0.4,\n            opacityTo: 0,\n            stops: [20, 120, 120, 120]\n          }\n        },\n        stroke: {\n          curve: 'smooth',\n          show: true,\n          width: 3,\n          colors: ['#FFFFFF']\n        },\n        xaxis: {\n          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n          axisBorder: {\n            show: false\n          },\n          axisTicks: {\n            show: false\n          },\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          },\n          crosshairs: {\n            show: false,\n            position: 'front',\n            stroke: {\n              color: strokeColor,\n              width: 1,\n              dashArray: 3\n            }\n          },\n          tooltip: {\n            enabled: true,\n            formatter: undefined,\n            offsetY: 0,\n            style: {\n              fontSize: '12px'\n            }\n          }\n        },\n        yaxis: {\n          min: 0,\n          max: 60,\n          labels: {\n            show: false,\n            style: {\n              colors: labelColor,\n              fontSize: '12px'\n            }\n          }\n        },\n        states: {\n          normal: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          hover: {\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          },\n          active: {\n            allowMultipleDataPointsSelection: false,\n            filter: {\n              type: 'none',\n              value: 0\n            }\n          }\n        },\n        tooltip: {\n          style: {\n            fontSize: '12px'\n          },\n          y: {\n            formatter: function formatter(val) {\n              return \"$\" + val + \" thousands\";\n            }\n          }\n        },\n        colors: ['#ffffff'],\n        markers: {\n          colors: [labelColor],\n          strokeColor: [strokeColor],\n          strokeWidth: 3\n        }\n      };\n      var chart = new ApexCharts(element, options);\n      chart.render();\n    });\n  };\n\n  var initMixedWidget14 = function initMixedWidget14() {\n    var charts = document.querySelectorAll('.mixed-widget-14-chart');\n    var options;\n    var chart;\n    var height;\n    [].slice.call(charts).map(function (element) {\n      height = parseInt(KTUtil.css(element, 'height'));\n      var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');\n      options = {\n        series: [{\n          name: 'Inflation',\n          data: [1, 2.1, 1, 2.1, 4.1, 6.1, 4.1, 4.1, 2.1, 4.1, 2.1, 3.1, 1, 1, 2.1]\n        }],\n        chart: {\n          fontFamily: 'inherit',\n          height: height,\n          type: 'bar',\n          toolbar: {\n            show: false\n          }\n        },\n        grid: {\n          show: false,\n          padding: {\n            top: 0,\n            bottom: 0,\n            left: 0,\n            right: 0\n          }\n        },\n        colors: ['#ffffff'],\n        plotOptions: {\n          bar: {\n            borderRadius: 2.5,\n            dataLabels: {\n              position: 'top' // top, center, bottom\n\n            },\n            columnWidth: '20%'\n          }\n        },\n        dataLabels: {\n          enabled: false,\n          formatter: function formatter(val) {\n            return val + \"%\";\n          },\n          offsetY: -20,\n          style: {\n            fontSize: '12px',\n            colors: [\"#304758\"]\n          }\n        },\n        xaxis: {\n          labels: {\n            show: false\n          },\n          categories: [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\", \"Jan\", \"Feb\", \"Mar\"],\n          position: 'top',\n          axisBorder: {\n            show: false\n          },\n          axisTicks: {\n            show: false\n          },\n          crosshairs: {\n            show: false\n          },\n          tooltip: {\n            enabled: false\n          }\n        },\n        yaxis: {\n          show: false,\n          axisBorder: {\n            show: false\n          },\n          axisTicks: {\n            show: false,\n            background: labelColor\n          },\n          labels: {\n            show: false,\n            formatter: function formatter(val) {\n              return val + \"%\";\n            }\n          }\n        }\n      };\n      chart = new ApexCharts(element, options);\n      chart.render();\n    });\n  };\n\n  var initMixedWidget16 = function initMixedWidget16() {\n    var element = document.getElementById(\"kt_charts_mixed_widget_16_chart\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      labels: [\"Total Members\"],\n      series: [74],\n      chart: {\n        fontFamily: 'inherit',\n        height: height,\n        type: 'radialBar',\n        offsetY: 0\n      },\n      plotOptions: {\n        radialBar: {\n          startAngle: -90,\n          endAngle: 90,\n          hollow: {\n            margin: 0,\n            size: \"70%\"\n          },\n          dataLabels: {\n            showOn: \"always\",\n            name: {\n              show: true,\n              fontSize: \"13px\",\n              fontWeight: \"700\",\n              offsetY: -5,\n              color: KTUtil.getCssVariableValue('--bs-gray-500')\n            },\n            value: {\n              color: KTUtil.getCssVariableValue('--bs-gray-700'),\n              fontSize: \"30px\",\n              fontWeight: \"700\",\n              offsetY: -40,\n              show: true\n            }\n          },\n          track: {\n            background: KTUtil.getCssVariableValue('--bs-light-primary'),\n            strokeWidth: '100%'\n          }\n        }\n      },\n      colors: [KTUtil.getCssVariableValue('--bs-primary')],\n      stroke: {\n        lineCap: \"round\"\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  }; // Feeds Widgets\n\n\n  var initFeedWidget1 = function initFeedWidget1() {\n    var formEl = document.querySelector(\"#kt_forms_widget_1_form\");\n    var editorId = 'kt_forms_widget_1_editor';\n\n    if (!formEl) {\n      return;\n    } // init editor\n\n\n    var options = {\n      modules: {\n        toolbar: {\n          container: \"#kt_forms_widget_1_editor_toolbar\"\n        }\n      },\n      placeholder: 'What is on your mind ?',\n      theme: 'snow'\n    };\n\n    if (!formEl) {\n      return;\n    } // Init editor\n\n\n    var editorObj = new Quill('#' + editorId, options);\n  };\n\n  var initFeedsWidget4 = function initFeedsWidget4() {\n    var btn = document.querySelector('#kt_widget_5_load_more_btn');\n    var widget5 = document.querySelector('#kt_widget_5');\n\n    if (btn) {\n      btn.addEventListener('click', function (e) {\n        e.preventDefault();\n        btn.setAttribute('data-kt-indicator', 'on');\n        setTimeout(function () {\n          btn.removeAttribute('data-kt-indicator');\n          widget5.classList.remove('d-none');\n          btn.classList.add('d-none');\n          KTUtil.scrollTo(widget5, 200);\n        }, 2000);\n      });\n    }\n  }; // Follow button\n\n\n  var initUserFollowButton = function initUserFollowButton() {\n    var follow = document.querySelector('#kt_user_follow_button');\n\n    if (follow) {\n      follow.addEventListener('click', function (e) {\n        // Prevent default action \n        e.preventDefault(); // Show indicator\n\n        follow.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n        follow.disabled = true; // Check button state\n\n        if (follow.classList.contains(\"btn-success\")) {\n          setTimeout(function () {\n            follow.removeAttribute('data-kt-indicator');\n            follow.classList.remove(\"btn-success\");\n            follow.classList.add(\"btn-light\");\n            follow.querySelector(\".svg-icon\").classList.add(\"d-none\");\n            follow.querySelector(\".indicator-label\").innerHTML = 'Follow';\n            follow.disabled = false;\n          }, 1500);\n        } else {\n          setTimeout(function () {\n            follow.removeAttribute('data-kt-indicator');\n            follow.classList.add(\"btn-success\");\n            follow.classList.remove(\"btn-light\");\n            follow.querySelector(\".svg-icon\").classList.remove(\"d-none\");\n            follow.querySelector(\".indicator-label\").innerHTML = 'Following';\n            follow.disabled = false;\n          }, 1000);\n        }\n      });\n    }\n  }; // Calendar\n\n\n  var initCalendarWidget1 = function initCalendarWidget1() {\n    if (typeof FullCalendar === 'undefined' || !document.querySelector('#kt_calendar_widget_1')) {\n      return;\n    }\n\n    var todayDate = moment().startOf('day');\n    var YM = todayDate.format('YYYY-MM');\n    var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');\n    var TODAY = todayDate.format('YYYY-MM-DD');\n    var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');\n    var calendarEl = document.getElementById('kt_calendar_widget_1');\n    var calendar = new FullCalendar.Calendar(calendarEl, {\n      headerToolbar: {\n        left: 'prev,next today',\n        center: 'title',\n        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'\n      },\n      height: 800,\n      contentHeight: 780,\n      aspectRatio: 3,\n      // see: https://fullcalendar.io/docs/aspectRatio\n      nowIndicator: true,\n      now: TODAY + 'T09:25:00',\n      // just for demo\n      views: {\n        dayGridMonth: {\n          buttonText: 'month'\n        },\n        timeGridWeek: {\n          buttonText: 'week'\n        },\n        timeGridDay: {\n          buttonText: 'day'\n        }\n      },\n      initialView: 'dayGridMonth',\n      initialDate: TODAY,\n      editable: true,\n      dayMaxEvents: true,\n      // allow \"more\" link when too many events\n      navLinks: true,\n      events: [{\n        title: 'All Day Event',\n        start: YM + '-01',\n        description: 'Toto lorem ipsum dolor sit incid idunt ut',\n        className: \"fc-event-danger fc-event-solid-warning\"\n      }, {\n        title: 'Reporting',\n        start: YM + '-14T13:30:00',\n        description: 'Lorem ipsum dolor incid idunt ut labore',\n        end: YM + '-14',\n        className: \"fc-event-success\"\n      }, {\n        title: 'Company Trip',\n        start: YM + '-02',\n        description: 'Lorem ipsum dolor sit tempor incid',\n        end: YM + '-03',\n        className: \"fc-event-primary\"\n      }, {\n        title: 'ICT Expo 2017 - Product Release',\n        start: YM + '-03',\n        description: 'Lorem ipsum dolor sit tempor inci',\n        end: YM + '-05',\n        className: \"fc-event-light fc-event-solid-primary\"\n      }, {\n        title: 'Dinner',\n        start: YM + '-12',\n        description: 'Lorem ipsum dolor sit amet, conse ctetur',\n        end: YM + '-10'\n      }, {\n        id: 999,\n        title: 'Repeating Event',\n        start: YM + '-09T16:00:00',\n        description: 'Lorem ipsum dolor sit ncididunt ut labore',\n        className: \"fc-event-danger\"\n      }, {\n        id: 1000,\n        title: 'Repeating Event',\n        description: 'Lorem ipsum dolor sit amet, labore',\n        start: YM + '-16T16:00:00'\n      }, {\n        title: 'Conference',\n        start: YESTERDAY,\n        end: TOMORROW,\n        description: 'Lorem ipsum dolor eius mod tempor labore',\n        className: \"fc-event-primary\"\n      }, {\n        title: 'Meeting',\n        start: TODAY + 'T10:30:00',\n        end: TODAY + 'T12:30:00',\n        description: 'Lorem ipsum dolor eiu idunt ut labore'\n      }, {\n        title: 'Lunch',\n        start: TODAY + 'T12:00:00',\n        className: \"fc-event-info\",\n        description: 'Lorem ipsum dolor sit amet, ut labore'\n      }, {\n        title: 'Meeting',\n        start: TODAY + 'T14:30:00',\n        className: \"fc-event-warning\",\n        description: 'Lorem ipsum conse ctetur adipi scing'\n      }, {\n        title: 'Happy Hour',\n        start: TODAY + 'T17:30:00',\n        className: \"fc-event-info\",\n        description: 'Lorem ipsum dolor sit amet, conse ctetur'\n      }, {\n        title: 'Dinner',\n        start: TOMORROW + 'T05:00:00',\n        className: \"fc-event-solid-danger fc-event-light\",\n        description: 'Lorem ipsum dolor sit ctetur adipi scing'\n      }, {\n        title: 'Birthday Party',\n        start: TOMORROW + 'T07:00:00',\n        className: \"fc-event-primary\",\n        description: 'Lorem ipsum dolor sit amet, scing'\n      }, {\n        title: 'Click for Google',\n        url: 'http://google.com/',\n        start: YM + '-28',\n        className: \"fc-event-solid-info fc-event-light\",\n        description: 'Lorem ipsum dolor sit amet, labore'\n      }]\n    });\n    calendar.render();\n  }; // Daterangepicker\n\n\n  var initDaterangepicker = function initDaterangepicker() {\n    if (!document.querySelector('#kt_dashboard_daterangepicker')) {\n      return;\n    }\n\n    var picker = $('#kt_dashboard_daterangepicker');\n    var start = moment();\n    var end = moment();\n\n    function cb(start, end, label) {\n      var title = '';\n      var range = '';\n\n      if (end - start < 100 || label == 'Today') {\n        title = 'Today:';\n        range = start.format('MMM D');\n      } else if (label == 'Yesterday') {\n        title = 'Yesterday:';\n        range = start.format('MMM D');\n      } else {\n        range = start.format('MMM D') + ' - ' + end.format('MMM D');\n      }\n\n      $('#kt_dashboard_daterangepicker_date').html(range);\n      $('#kt_dashboard_daterangepicker_title').html(title);\n    }\n\n    picker.daterangepicker({\n      direction: KTUtil.isRTL(),\n      startDate: start,\n      endDate: end,\n      opens: 'left',\n      applyClass: 'btn-primary',\n      cancelClass: 'btn-light-primary',\n      ranges: {\n        'Today': [moment(), moment()],\n        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],\n        'Last 7 Days': [moment().subtract(6, 'days'), moment()],\n        'Last 30 Days': [moment().subtract(29, 'days'), moment()],\n        'This Month': [moment().startOf('month'), moment().endOf('month')],\n        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]\n      }\n    }, cb);\n    cb(start, end, '');\n  }; // Dark mode toggler\n\n\n  var initDarkModeToggle = function initDarkModeToggle() {\n    var toggle = document.querySelector('#kt_user_menu_dark_mode_toggle');\n\n    if (toggle) {\n      toggle.addEventListener('click', function () {\n        window.location.href = this.getAttribute('data-kt-url');\n      });\n    }\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      // Daterangepicker\n      initDaterangepicker(); // Dark Mode\n\n      initDarkModeToggle(); // Statistics widgets\n\n      initStatisticsWidget3();\n      initStatisticsWidget4(); // Charts widgets\n\n      initChartsWidget1();\n      initChartsWidget2();\n      initChartsWidget3();\n      initChartsWidget4();\n      initChartsWidget5();\n      initChartsWidget6();\n      initChartsWidget7();\n      initChartsWidget8(); // Mixed widgets\n\n      initMixedWidget2();\n      initMixedWidget3();\n      initMixedWidget4();\n      initMixedWidget5();\n      initMixedWidget6();\n      initMixedWidget7();\n      initMixedWidget10();\n      initMixedWidget12();\n      initMixedWidget13();\n      initMixedWidget14();\n      initMixedWidget16(); // Feeds\n\n      initFeedWidget1();\n      initFeedsWidget4(); // Follow button\n\n      initUserFollowButton(); // Calendar\n\n      initCalendarWidget1();\n    }\n  };\n}(); // Webpack support\n\n\nif (true) {\n  module.exports = KTWidgets;\n} // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTWidgets.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS93aWRnZXRzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLFNBQVMsR0FBRyxZQUFZO0FBQ3hCO0FBQ0EsTUFBSUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFXO0FBQ25DLFFBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQiw0QkFBMUIsQ0FBYjtBQUVBLE9BQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjSixNQUFkLEVBQXNCSyxHQUF0QixDQUEwQixVQUFTQyxPQUFULEVBQWtCO0FBQ3hDLFVBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLEdBQVAsQ0FBV0osT0FBWCxFQUFvQixRQUFwQixDQUFELENBQXJCOztBQUVBLFVBQUssQ0FBQ0EsT0FBTixFQUFnQjtBQUNaO0FBQ0g7O0FBRUQsVUFBSUssS0FBSyxHQUFHTCxPQUFPLENBQUNNLFlBQVIsQ0FBcUIscUJBQXJCLENBQVo7QUFFQSxVQUFJQyxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsVUFBVSxVQUFyQyxDQUFqQjtBQUNBLFVBQUlDLFNBQVMsR0FBR04sTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixVQUFVSCxLQUFyQyxDQUFoQjtBQUNBLFVBQUlLLFVBQVUsR0FBR1AsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixnQkFBZ0JILEtBQTNDLENBQWpCO0FBRUEsVUFBSU0sT0FBTyxHQUFHO0FBQ1ZDLFFBQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0xDLFVBQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLFVBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakI7QUFGRCxTQUFELENBREU7QUFLVkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFVBQVUsRUFBRSxTQURUO0FBRUhDLFVBQUFBLElBQUksRUFBRSxNQUZIO0FBR0hoQixVQUFBQSxNQUFNLEVBQUVBLE1BSEw7QUFJSGlCLFVBQUFBLE9BQU8sRUFBRTtBQUNMQyxZQUFBQSxJQUFJLEVBQUU7QUFERCxXQUpOO0FBT0hDLFVBQUFBLElBQUksRUFBRTtBQUNGQyxZQUFBQSxPQUFPLEVBQUU7QUFEUCxXQVBIO0FBVUhDLFVBQUFBLFNBQVMsRUFBRTtBQUNQRCxZQUFBQSxPQUFPLEVBQUU7QUFERjtBQVZSLFNBTEc7QUFtQlZFLFFBQUFBLFdBQVcsRUFBRSxFQW5CSDtBQW9CVkMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pMLFVBQUFBLElBQUksRUFBRTtBQURGLFNBcEJFO0FBdUJWTSxRQUFBQSxVQUFVLEVBQUU7QUFDUkosVUFBQUEsT0FBTyxFQUFFO0FBREQsU0F2QkY7QUEwQlZLLFFBQUFBLElBQUksRUFBRTtBQUNGVCxVQUFBQSxJQUFJLEVBQUUsT0FESjtBQUVGVSxVQUFBQSxPQUFPLEVBQUU7QUFGUCxTQTFCSTtBQThCVkMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLEtBQUssRUFBRSxRQURIO0FBRUpWLFVBQUFBLElBQUksRUFBRSxJQUZGO0FBR0pXLFVBQUFBLEtBQUssRUFBRSxDQUhIO0FBSUpDLFVBQUFBLE1BQU0sRUFBRSxDQUFDdEIsU0FBRDtBQUpKLFNBOUJFO0FBb0NWdUIsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFVBQVUsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxDQURUO0FBRUhDLFVBQUFBLFVBQVUsRUFBRTtBQUNSZixZQUFBQSxJQUFJLEVBQUU7QUFERSxXQUZUO0FBS0hnQixVQUFBQSxTQUFTLEVBQUU7QUFDUGhCLFlBQUFBLElBQUksRUFBRTtBQURDLFdBTFI7QUFRSGlCLFVBQUFBLE1BQU0sRUFBRTtBQUNKakIsWUFBQUEsSUFBSSxFQUFFLEtBREY7QUFFSmtCLFlBQUFBLEtBQUssRUFBRTtBQUNITixjQUFBQSxNQUFNLEVBQUV4QixVQURMO0FBRUgrQixjQUFBQSxRQUFRLEVBQUU7QUFGUDtBQUZILFdBUkw7QUFlSEMsVUFBQUEsVUFBVSxFQUFFO0FBQ1JwQixZQUFBQSxJQUFJLEVBQUUsS0FERTtBQUVScUIsWUFBQUEsUUFBUSxFQUFFLE9BRkY7QUFHUlosWUFBQUEsTUFBTSxFQUFFO0FBQ0p2QixjQUFBQSxLQUFLLEVBQUUsU0FESDtBQUVKeUIsY0FBQUEsS0FBSyxFQUFFLENBRkg7QUFHSlcsY0FBQUEsU0FBUyxFQUFFO0FBSFA7QUFIQSxXQWZUO0FBd0JIQyxVQUFBQSxPQUFPLEVBQUU7QUFDTHJCLFlBQUFBLE9BQU8sRUFBRSxJQURKO0FBRUxzQixZQUFBQSxTQUFTLEVBQUVDLFNBRk47QUFHTEMsWUFBQUEsT0FBTyxFQUFFLENBSEo7QUFJTFIsWUFBQUEsS0FBSyxFQUFFO0FBQ0hDLGNBQUFBLFFBQVEsRUFBRTtBQURQO0FBSkY7QUF4Qk4sU0FwQ0c7QUFxRVZRLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxHQUFHLEVBQUUsQ0FERjtBQUVIQyxVQUFBQSxHQUFHLEVBQUUsRUFGRjtBQUdIWixVQUFBQSxNQUFNLEVBQUU7QUFDSmpCLFlBQUFBLElBQUksRUFBRSxLQURGO0FBRUprQixZQUFBQSxLQUFLLEVBQUU7QUFDSE4sY0FBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsY0FBQUEsUUFBUSxFQUFFO0FBRlA7QUFGSDtBQUhMLFNBckVHO0FBZ0ZWVyxRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFlBQUFBLE1BQU0sRUFBRTtBQUNKbEMsY0FBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLGNBQUFBLEtBQUssRUFBRTtBQUZIO0FBREosV0FESjtBQU9KQyxVQUFBQSxLQUFLLEVBQUU7QUFDSEYsWUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxjQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsY0FBQUEsS0FBSyxFQUFFO0FBRkg7QUFETCxXQVBIO0FBYUpFLFVBQUFBLE1BQU0sRUFBRTtBQUNKQyxZQUFBQSxnQ0FBZ0MsRUFBRSxLQUQ5QjtBQUVKSixZQUFBQSxNQUFNLEVBQUU7QUFDSmxDLGNBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxjQUFBQSxLQUFLLEVBQUU7QUFGSDtBQUZKO0FBYkosU0FoRkU7QUFxR1ZWLFFBQUFBLE9BQU8sRUFBRTtBQUNMTCxVQUFBQSxLQUFLLEVBQUU7QUFDSEMsWUFBQUEsUUFBUSxFQUFFO0FBRFAsV0FERjtBQUlMa0IsVUFBQUEsQ0FBQyxFQUFFO0FBQ0NiLFlBQUFBLFNBQVMsRUFBRSxtQkFBU2MsR0FBVCxFQUFjO0FBQ3JCLHFCQUFPLE1BQU1BLEdBQU4sR0FBWSxZQUFuQjtBQUNIO0FBSEY7QUFKRSxTQXJHQztBQStHVjFCLFFBQUFBLE1BQU0sRUFBRSxDQUFDdEIsU0FBRCxDQS9HRTtBQWdIVmlELFFBQUFBLE9BQU8sRUFBRTtBQUNMM0IsVUFBQUEsTUFBTSxFQUFFLENBQUN0QixTQUFELENBREg7QUFFTGtELFVBQUFBLFdBQVcsRUFBRSxDQUFDakQsVUFBRCxDQUZSO0FBR0xrRCxVQUFBQSxXQUFXLEVBQUU7QUFIUjtBQWhIQyxPQUFkO0FBdUhBLFVBQUk3QyxLQUFLLEdBQUcsSUFBSThDLFVBQUosQ0FBZTdELE9BQWYsRUFBd0JXLE9BQXhCLENBQVo7QUFDQUksTUFBQUEsS0FBSyxDQUFDK0MsTUFBTjtBQUNILEtBdElEO0FBdUlILEdBMUlEOztBQTRJQSxNQUFJQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQVc7QUFDbkMsUUFBSXJFLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQiw0QkFBMUIsQ0FBYjtBQUVBLE9BQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjSixNQUFkLEVBQXNCSyxHQUF0QixDQUEwQixVQUFTQyxPQUFULEVBQWtCO0FBQ3hDLFVBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLEdBQVAsQ0FBV0osT0FBWCxFQUFvQixRQUFwQixDQUFELENBQXJCOztBQUVBLFVBQUssQ0FBQ0EsT0FBTixFQUFnQjtBQUNaO0FBQ0g7O0FBRUQsVUFBSUssS0FBSyxHQUFHTCxPQUFPLENBQUNNLFlBQVIsQ0FBcUIscUJBQXJCLENBQVo7QUFFQSxVQUFJQyxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsVUFBVSxVQUFyQyxDQUFqQjtBQUNBLFVBQUlDLFNBQVMsR0FBR04sTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixVQUFVSCxLQUFyQyxDQUFoQjtBQUNBLFVBQUlLLFVBQVUsR0FBR1AsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixnQkFBZ0JILEtBQTNDLENBQWpCO0FBRUEsVUFBSU0sT0FBTyxHQUFHO0FBQ1ZDLFFBQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0xDLFVBQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLFVBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekI7QUFGRCxTQUFELENBREU7QUFLVkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFVBQVUsRUFBRSxTQURUO0FBRUhDLFVBQUFBLElBQUksRUFBRSxNQUZIO0FBR0hoQixVQUFBQSxNQUFNLEVBQUVBLE1BSEw7QUFJSGlCLFVBQUFBLE9BQU8sRUFBRTtBQUNMQyxZQUFBQSxJQUFJLEVBQUU7QUFERCxXQUpOO0FBT0hDLFVBQUFBLElBQUksRUFBRTtBQUNGQyxZQUFBQSxPQUFPLEVBQUU7QUFEUCxXQVBIO0FBVUhDLFVBQUFBLFNBQVMsRUFBRTtBQUNQRCxZQUFBQSxPQUFPLEVBQUU7QUFERjtBQVZSLFNBTEc7QUFtQlZFLFFBQUFBLFdBQVcsRUFBRSxFQW5CSDtBQW9CVkMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pMLFVBQUFBLElBQUksRUFBRTtBQURGLFNBcEJFO0FBdUJWTSxRQUFBQSxVQUFVLEVBQUU7QUFDUkosVUFBQUEsT0FBTyxFQUFFO0FBREQsU0F2QkY7QUEwQlZLLFFBQUFBLElBQUksRUFBRTtBQUNGVCxVQUFBQSxJQUFJLEVBQUUsT0FESjtBQUVGVSxVQUFBQSxPQUFPLEVBQUU7QUFGUCxTQTFCSTtBQThCVkMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLEtBQUssRUFBRSxRQURIO0FBRUpWLFVBQUFBLElBQUksRUFBRSxJQUZGO0FBR0pXLFVBQUFBLEtBQUssRUFBRSxDQUhIO0FBSUpDLFVBQUFBLE1BQU0sRUFBRSxDQUFDdEIsU0FBRDtBQUpKLFNBOUJFO0FBb0NWdUIsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFVBQVUsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxDQURUO0FBRUhDLFVBQUFBLFVBQVUsRUFBRTtBQUNSZixZQUFBQSxJQUFJLEVBQUU7QUFERSxXQUZUO0FBS0hnQixVQUFBQSxTQUFTLEVBQUU7QUFDUGhCLFlBQUFBLElBQUksRUFBRTtBQURDLFdBTFI7QUFRSGlCLFVBQUFBLE1BQU0sRUFBRTtBQUNKakIsWUFBQUEsSUFBSSxFQUFFLEtBREY7QUFFSmtCLFlBQUFBLEtBQUssRUFBRTtBQUNITixjQUFBQSxNQUFNLEVBQUV4QixVQURMO0FBRUgrQixjQUFBQSxRQUFRLEVBQUU7QUFGUDtBQUZILFdBUkw7QUFlSEMsVUFBQUEsVUFBVSxFQUFFO0FBQ1JwQixZQUFBQSxJQUFJLEVBQUUsS0FERTtBQUVScUIsWUFBQUEsUUFBUSxFQUFFLE9BRkY7QUFHUlosWUFBQUEsTUFBTSxFQUFFO0FBQ0p2QixjQUFBQSxLQUFLLEVBQUUsU0FESDtBQUVKeUIsY0FBQUEsS0FBSyxFQUFFLENBRkg7QUFHSlcsY0FBQUEsU0FBUyxFQUFFO0FBSFA7QUFIQSxXQWZUO0FBd0JIQyxVQUFBQSxPQUFPLEVBQUU7QUFDTHJCLFlBQUFBLE9BQU8sRUFBRSxJQURKO0FBRUxzQixZQUFBQSxTQUFTLEVBQUVDLFNBRk47QUFHTEMsWUFBQUEsT0FBTyxFQUFFLENBSEo7QUFJTFIsWUFBQUEsS0FBSyxFQUFFO0FBQ0hDLGNBQUFBLFFBQVEsRUFBRTtBQURQO0FBSkY7QUF4Qk4sU0FwQ0c7QUFxRVZRLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxHQUFHLEVBQUUsQ0FERjtBQUVIQyxVQUFBQSxHQUFHLEVBQUUsRUFGRjtBQUdIWixVQUFBQSxNQUFNLEVBQUU7QUFDSmpCLFlBQUFBLElBQUksRUFBRSxLQURGO0FBRUprQixZQUFBQSxLQUFLLEVBQUU7QUFDSE4sY0FBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsY0FBQUEsUUFBUSxFQUFFO0FBRlA7QUFGSDtBQUhMLFNBckVHO0FBZ0ZWVyxRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFlBQUFBLE1BQU0sRUFBRTtBQUNKbEMsY0FBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLGNBQUFBLEtBQUssRUFBRTtBQUZIO0FBREosV0FESjtBQU9KQyxVQUFBQSxLQUFLLEVBQUU7QUFDSEYsWUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxjQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsY0FBQUEsS0FBSyxFQUFFO0FBRkg7QUFETCxXQVBIO0FBYUpFLFVBQUFBLE1BQU0sRUFBRTtBQUNKQyxZQUFBQSxnQ0FBZ0MsRUFBRSxLQUQ5QjtBQUVKSixZQUFBQSxNQUFNLEVBQUU7QUFDSmxDLGNBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxjQUFBQSxLQUFLLEVBQUU7QUFGSDtBQUZKO0FBYkosU0FoRkU7QUFxR1ZWLFFBQUFBLE9BQU8sRUFBRTtBQUNMTCxVQUFBQSxLQUFLLEVBQUU7QUFDSEMsWUFBQUEsUUFBUSxFQUFFO0FBRFAsV0FERjtBQUlMa0IsVUFBQUEsQ0FBQyxFQUFFO0FBQ0NiLFlBQUFBLFNBQVMsRUFBRSxtQkFBU2MsR0FBVCxFQUFjO0FBQ3JCLHFCQUFPLE1BQU1BLEdBQU4sR0FBWSxZQUFuQjtBQUNIO0FBSEY7QUFKRSxTQXJHQztBQStHVjFCLFFBQUFBLE1BQU0sRUFBRSxDQUFDdEIsU0FBRCxDQS9HRTtBQWdIVmlELFFBQUFBLE9BQU8sRUFBRTtBQUNMM0IsVUFBQUEsTUFBTSxFQUFFLENBQUN0QixTQUFELENBREg7QUFFTGtELFVBQUFBLFdBQVcsRUFBRSxDQUFDakQsVUFBRCxDQUZSO0FBR0xrRCxVQUFBQSxXQUFXLEVBQUU7QUFIUjtBQWhIQyxPQUFkO0FBdUhBLFVBQUk3QyxLQUFLLEdBQUcsSUFBSThDLFVBQUosQ0FBZTdELE9BQWYsRUFBd0JXLE9BQXhCLENBQVo7QUFDQUksTUFBQUEsS0FBSyxDQUFDK0MsTUFBTjtBQUNILEtBdElEO0FBdUlILEdBMUlELENBOUl3QixDQTBSeEI7OztBQUNBLE1BQUlFLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBVztBQUMvQixRQUFJaEUsT0FBTyxHQUFHTCxRQUFRLENBQUNzRSxjQUFULENBQXdCLDBCQUF4QixDQUFkO0FBRUEsUUFBSWhFLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLEdBQVAsQ0FBV0osT0FBWCxFQUFvQixRQUFwQixDQUFELENBQXJCO0FBQ0EsUUFBSU8sVUFBVSxHQUFHSixNQUFNLENBQUNLLG1CQUFQLENBQTJCLGVBQTNCLENBQWpCO0FBQ0EsUUFBSTBELFdBQVcsR0FBRy9ELE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsZUFBM0IsQ0FBbEI7QUFDQSxRQUFJQyxTQUFTLEdBQUdOLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsY0FBM0IsQ0FBaEI7QUFDQSxRQUFJMkQsY0FBYyxHQUFHaEUsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixlQUEzQixDQUFyQjs7QUFFQSxRQUFJLENBQUNSLE9BQUwsRUFBYztBQUNWO0FBQ0g7O0FBRUQsUUFBSVcsT0FBTyxHQUFHO0FBQ1ZDLE1BQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLFFBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckI7QUFGRCxPQUFELEVBR0w7QUFDQ0QsUUFBQUEsSUFBSSxFQUFFLFNBRFA7QUFFQ0MsUUFBQUEsSUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULEVBQWMsRUFBZCxFQUFrQixFQUFsQixFQUFzQixHQUF0QjtBQUZQLE9BSEssQ0FERTtBQVFWQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsVUFBVSxFQUFFLFNBRFQ7QUFFSEMsUUFBQUEsSUFBSSxFQUFFLEtBRkg7QUFHSGhCLFFBQUFBLE1BQU0sRUFBRUEsTUFITDtBQUlIaUIsUUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFVBQUFBLElBQUksRUFBRTtBQUREO0FBSk4sT0FSRztBQWdCVkksTUFBQUEsV0FBVyxFQUFFO0FBQ1Q2QyxRQUFBQSxHQUFHLEVBQUU7QUFDREMsVUFBQUEsVUFBVSxFQUFFLEtBRFg7QUFFREMsVUFBQUEsV0FBVyxFQUFFLENBQUMsS0FBRCxDQUZaO0FBR0RDLFVBQUFBLFlBQVksRUFBRTtBQUhiO0FBREksT0FoQkg7QUF1QlYvQyxNQUFBQSxNQUFNLEVBQUU7QUFDSkwsUUFBQUEsSUFBSSxFQUFFO0FBREYsT0F2QkU7QUEwQlZNLE1BQUFBLFVBQVUsRUFBRTtBQUNSSixRQUFBQSxPQUFPLEVBQUU7QUFERCxPQTFCRjtBQTZCVk8sTUFBQUEsTUFBTSxFQUFFO0FBQ0pULFFBQUFBLElBQUksRUFBRSxJQURGO0FBRUpXLFFBQUFBLEtBQUssRUFBRSxDQUZIO0FBR0pDLFFBQUFBLE1BQU0sRUFBRSxDQUFDLGFBQUQ7QUFISixPQTdCRTtBQWtDVkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLFVBQVUsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxDQURUO0FBRUhDLFFBQUFBLFVBQVUsRUFBRTtBQUNSZixVQUFBQSxJQUFJLEVBQUU7QUFERSxTQUZUO0FBS0hnQixRQUFBQSxTQUFTLEVBQUU7QUFDUGhCLFVBQUFBLElBQUksRUFBRTtBQURDLFNBTFI7QUFRSGlCLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxLQUFLLEVBQUU7QUFDSE4sWUFBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsWUFBQUEsUUFBUSxFQUFFO0FBRlA7QUFESDtBQVJMLE9BbENHO0FBaURWUSxNQUFBQSxLQUFLLEVBQUU7QUFDSFYsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLEtBQUssRUFBRTtBQUNITixZQUFBQSxNQUFNLEVBQUV4QixVQURMO0FBRUgrQixZQUFBQSxRQUFRLEVBQUU7QUFGUDtBQURIO0FBREwsT0FqREc7QUF5RFZaLE1BQUFBLElBQUksRUFBRTtBQUNGQyxRQUFBQSxPQUFPLEVBQUU7QUFEUCxPQXpESTtBQTREVnNCLE1BQUFBLE1BQU0sRUFBRTtBQUNKQyxRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxZQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsWUFBQUEsS0FBSyxFQUFFO0FBRkg7QUFESixTQURKO0FBT0pDLFFBQUFBLEtBQUssRUFBRTtBQUNIRixVQUFBQSxNQUFNLEVBQUU7QUFDSmxDLFlBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxZQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURMLFNBUEg7QUFhSkUsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLGdDQUFnQyxFQUFFLEtBRDlCO0FBRUpKLFVBQUFBLE1BQU0sRUFBRTtBQUNKbEMsWUFBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLFlBQUFBLEtBQUssRUFBRTtBQUZIO0FBRko7QUFiSixPQTVERTtBQWlGVlYsTUFBQUEsT0FBTyxFQUFFO0FBQ0xMLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxRQUFRLEVBQUU7QUFEUCxTQURGO0FBSUxrQixRQUFBQSxDQUFDLEVBQUU7QUFDQ2IsVUFBQUEsU0FBUyxFQUFFLG1CQUFVYyxHQUFWLEVBQWU7QUFDdEIsbUJBQU8sTUFBTUEsR0FBTixHQUFZLFlBQW5CO0FBQ0g7QUFIRjtBQUpFLE9BakZDO0FBMkZWMUIsTUFBQUEsTUFBTSxFQUFFLENBQUN0QixTQUFELEVBQVkwRCxjQUFaLENBM0ZFO0FBNEZWSyxNQUFBQSxJQUFJLEVBQUU7QUFDRk4sUUFBQUEsV0FBVyxFQUFFQSxXQURYO0FBRUZPLFFBQUFBLGVBQWUsRUFBRSxDQUZmO0FBR0YzQixRQUFBQSxLQUFLLEVBQUU7QUFDSDRCLFVBQUFBLEtBQUssRUFBRTtBQUNIdkQsWUFBQUEsSUFBSSxFQUFFO0FBREg7QUFESjtBQUhMO0FBNUZJLEtBQWQ7QUF1R0EsUUFBSUosS0FBSyxHQUFHLElBQUk4QyxVQUFKLENBQWU3RCxPQUFmLEVBQXdCVyxPQUF4QixDQUFaO0FBQ0FJLElBQUFBLEtBQUssQ0FBQytDLE1BQU47QUFDSCxHQXRIRDs7QUF3SEEsTUFBSWEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFXO0FBQy9CLFFBQUkzRSxPQUFPLEdBQUdMLFFBQVEsQ0FBQ3NFLGNBQVQsQ0FBd0IsMEJBQXhCLENBQWQ7QUFFQSxRQUFJaEUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXSixPQUFYLEVBQW9CLFFBQXBCLENBQUQsQ0FBckI7QUFDQSxRQUFJTyxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsZUFBM0IsQ0FBakI7QUFDQSxRQUFJMEQsV0FBVyxHQUFHL0QsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixlQUEzQixDQUFsQjtBQUNBLFFBQUlDLFNBQVMsR0FBR04sTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixjQUEzQixDQUFoQjtBQUNBLFFBQUkyRCxjQUFjLEdBQUdoRSxNQUFNLENBQUNLLG1CQUFQLENBQTJCLGVBQTNCLENBQXJCOztBQUVBLFFBQUksQ0FBQ1IsT0FBTCxFQUFjO0FBQ1Y7QUFDSDs7QUFFRCxRQUFJVyxPQUFPLEdBQUc7QUFDVkMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDTEMsUUFBQUEsSUFBSSxFQUFFLFlBREQ7QUFFTEMsUUFBQUEsSUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQjtBQUZELE9BQUQsRUFHTDtBQUNDRCxRQUFBQSxJQUFJLEVBQUUsU0FEUDtBQUVDQyxRQUFBQSxJQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEdBQVQsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEdBQXRCO0FBRlAsT0FISyxDQURFO0FBUVZDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxVQUFVLEVBQUUsU0FEVDtBQUVIQyxRQUFBQSxJQUFJLEVBQUUsS0FGSDtBQUdIaEIsUUFBQUEsTUFBTSxFQUFFQSxNQUhMO0FBSUhpQixRQUFBQSxPQUFPLEVBQUU7QUFDTEMsVUFBQUEsSUFBSSxFQUFFO0FBREQ7QUFKTixPQVJHO0FBZ0JWSSxNQUFBQSxXQUFXLEVBQUU7QUFDVDZDLFFBQUFBLEdBQUcsRUFBRTtBQUNEQyxVQUFBQSxVQUFVLEVBQUUsS0FEWDtBQUVEQyxVQUFBQSxXQUFXLEVBQUUsQ0FBQyxLQUFELENBRlo7QUFHREMsVUFBQUEsWUFBWSxFQUFFO0FBSGI7QUFESSxPQWhCSDtBQXVCVi9DLE1BQUFBLE1BQU0sRUFBRTtBQUNKTCxRQUFBQSxJQUFJLEVBQUU7QUFERixPQXZCRTtBQTBCVk0sTUFBQUEsVUFBVSxFQUFFO0FBQ1JKLFFBQUFBLE9BQU8sRUFBRTtBQURELE9BMUJGO0FBNkJWTyxNQUFBQSxNQUFNLEVBQUU7QUFDSlQsUUFBQUEsSUFBSSxFQUFFLElBREY7QUFFSlcsUUFBQUEsS0FBSyxFQUFFLENBRkg7QUFHSkMsUUFBQUEsTUFBTSxFQUFFLENBQUMsYUFBRDtBQUhKLE9BN0JFO0FBa0NWQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsVUFBVSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLENBRFQ7QUFFSEMsUUFBQUEsVUFBVSxFQUFFO0FBQ1JmLFVBQUFBLElBQUksRUFBRTtBQURFLFNBRlQ7QUFLSGdCLFFBQUFBLFNBQVMsRUFBRTtBQUNQaEIsVUFBQUEsSUFBSSxFQUFFO0FBREMsU0FMUjtBQVFIaUIsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLEtBQUssRUFBRTtBQUNITixZQUFBQSxNQUFNLEVBQUV4QixVQURMO0FBRUgrQixZQUFBQSxRQUFRLEVBQUU7QUFGUDtBQURIO0FBUkwsT0FsQ0c7QUFpRFZRLE1BQUFBLEtBQUssRUFBRTtBQUNIVixRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsS0FBSyxFQUFFO0FBQ0hOLFlBQUFBLE1BQU0sRUFBRXhCLFVBREw7QUFFSCtCLFlBQUFBLFFBQVEsRUFBRTtBQUZQO0FBREg7QUFETCxPQWpERztBQXlEVlosTUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFFBQUFBLE9BQU8sRUFBRTtBQURQLE9BekRJO0FBNERWc0IsTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxNQUFNLEVBQUU7QUFDSmxDLFlBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxZQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURKLFNBREo7QUFPSkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hGLFVBQUFBLE1BQU0sRUFBRTtBQUNKbEMsWUFBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLFlBQUFBLEtBQUssRUFBRTtBQUZIO0FBREwsU0FQSDtBQWFKRSxRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsZ0NBQWdDLEVBQUUsS0FEOUI7QUFFSkosVUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxZQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsWUFBQUEsS0FBSyxFQUFFO0FBRkg7QUFGSjtBQWJKLE9BNURFO0FBaUZWVixNQUFBQSxPQUFPLEVBQUU7QUFDTEwsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFFBQVEsRUFBRTtBQURQLFNBREY7QUFJTGtCLFFBQUFBLENBQUMsRUFBRTtBQUNDYixVQUFBQSxTQUFTLEVBQUUsbUJBQVVjLEdBQVYsRUFBZTtBQUN0QixtQkFBTyxNQUFNQSxHQUFOLEdBQVksWUFBbkI7QUFDSDtBQUhGO0FBSkUsT0FqRkM7QUEyRlYxQixNQUFBQSxNQUFNLEVBQUUsQ0FBQ3RCLFNBQUQsRUFBWTBELGNBQVosQ0EzRkU7QUE0RlZLLE1BQUFBLElBQUksRUFBRTtBQUNGTixRQUFBQSxXQUFXLEVBQUVBLFdBRFg7QUFFRk8sUUFBQUEsZUFBZSxFQUFFLENBRmY7QUFHRjNCLFFBQUFBLEtBQUssRUFBRTtBQUNINEIsVUFBQUEsS0FBSyxFQUFFO0FBQ0h2RCxZQUFBQSxJQUFJLEVBQUU7QUFESDtBQURKO0FBSEw7QUE1RkksS0FBZDtBQXVHQSxRQUFJSixLQUFLLEdBQUcsSUFBSThDLFVBQUosQ0FBZTdELE9BQWYsRUFBd0JXLE9BQXhCLENBQVo7QUFDQUksSUFBQUEsS0FBSyxDQUFDK0MsTUFBTjtBQUNILEdBdEhEOztBQXdIQSxNQUFJYyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQVc7QUFDL0IsUUFBSTVFLE9BQU8sR0FBR0wsUUFBUSxDQUFDc0UsY0FBVCxDQUF3QiwwQkFBeEIsQ0FBZDtBQUVBLFFBQUloRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFQLENBQVdKLE9BQVgsRUFBb0IsUUFBcEIsQ0FBRCxDQUFyQjtBQUNBLFFBQUlPLFVBQVUsR0FBR0osTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixlQUEzQixDQUFqQjtBQUNBLFFBQUkwRCxXQUFXLEdBQUcvRCxNQUFNLENBQUNLLG1CQUFQLENBQTJCLGVBQTNCLENBQWxCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHTixNQUFNLENBQUNLLG1CQUFQLENBQTJCLFdBQTNCLENBQWhCO0FBQ0EsUUFBSUUsVUFBVSxHQUFHUCxNQUFNLENBQUNLLG1CQUFQLENBQTJCLGlCQUEzQixDQUFqQjs7QUFFQSxRQUFJLENBQUNSLE9BQUwsRUFBYztBQUNWO0FBQ0g7O0FBRUQsUUFBSVcsT0FBTyxHQUFHO0FBQ1ZDLE1BQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLFFBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekI7QUFGRCxPQUFELENBREU7QUFLVkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLFVBQVUsRUFBRSxTQURUO0FBRUhDLFFBQUFBLElBQUksRUFBRSxNQUZIO0FBR0hoQixRQUFBQSxNQUFNLEVBQUUsR0FITDtBQUlIaUIsUUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFVBQUFBLElBQUksRUFBRTtBQUREO0FBSk4sT0FMRztBQWFWSSxNQUFBQSxXQUFXLEVBQUUsRUFiSDtBQWdCVkMsTUFBQUEsTUFBTSxFQUFFO0FBQ0pMLFFBQUFBLElBQUksRUFBRTtBQURGLE9BaEJFO0FBbUJWTSxNQUFBQSxVQUFVLEVBQUU7QUFDUkosUUFBQUEsT0FBTyxFQUFFO0FBREQsT0FuQkY7QUFzQlZLLE1BQUFBLElBQUksRUFBRTtBQUNGVCxRQUFBQSxJQUFJLEVBQUUsT0FESjtBQUVGVSxRQUFBQSxPQUFPLEVBQUU7QUFGUCxPQXRCSTtBQTBCVkMsTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLEtBQUssRUFBRSxRQURIO0FBRUpWLFFBQUFBLElBQUksRUFBRSxJQUZGO0FBR0pXLFFBQUFBLEtBQUssRUFBRSxDQUhIO0FBSUpDLFFBQUFBLE1BQU0sRUFBRSxDQUFDdEIsU0FBRDtBQUpKLE9BMUJFO0FBZ0NWdUIsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLFVBQVUsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxDQURUO0FBRUhDLFFBQUFBLFVBQVUsRUFBRTtBQUNSZixVQUFBQSxJQUFJLEVBQUU7QUFERSxTQUZUO0FBS0hnQixRQUFBQSxTQUFTLEVBQUU7QUFDUGhCLFVBQUFBLElBQUksRUFBRTtBQURDLFNBTFI7QUFRSGlCLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxLQUFLLEVBQUU7QUFDSE4sWUFBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsWUFBQUEsUUFBUSxFQUFFO0FBRlA7QUFESCxTQVJMO0FBY0hDLFFBQUFBLFVBQVUsRUFBRTtBQUNSQyxVQUFBQSxRQUFRLEVBQUUsT0FERjtBQUVSWixVQUFBQSxNQUFNLEVBQUU7QUFDSnZCLFlBQUFBLEtBQUssRUFBRUksU0FESDtBQUVKcUIsWUFBQUEsS0FBSyxFQUFFLENBRkg7QUFHSlcsWUFBQUEsU0FBUyxFQUFFO0FBSFA7QUFGQSxTQWRUO0FBc0JIQyxRQUFBQSxPQUFPLEVBQUU7QUFDTHJCLFVBQUFBLE9BQU8sRUFBRSxJQURKO0FBRUxzQixVQUFBQSxTQUFTLEVBQUVDLFNBRk47QUFHTEMsVUFBQUEsT0FBTyxFQUFFLENBSEo7QUFJTFIsVUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFlBQUFBLFFBQVEsRUFBRTtBQURQO0FBSkY7QUF0Qk4sT0FoQ0c7QUErRFZRLE1BQUFBLEtBQUssRUFBRTtBQUNIVixRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsS0FBSyxFQUFFO0FBQ0hOLFlBQUFBLE1BQU0sRUFBRXhCLFVBREw7QUFFSCtCLFlBQUFBLFFBQVEsRUFBRTtBQUZQO0FBREg7QUFETCxPQS9ERztBQXVFVlcsTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxNQUFNLEVBQUU7QUFDSmxDLFlBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxZQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURKLFNBREo7QUFPSkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hGLFVBQUFBLE1BQU0sRUFBRTtBQUNKbEMsWUFBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLFlBQUFBLEtBQUssRUFBRTtBQUZIO0FBREwsU0FQSDtBQWFKRSxRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsZ0NBQWdDLEVBQUUsS0FEOUI7QUFFSkosVUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxZQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsWUFBQUEsS0FBSyxFQUFFO0FBRkg7QUFGSjtBQWJKLE9BdkVFO0FBNEZWVixNQUFBQSxPQUFPLEVBQUU7QUFDTEwsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFFBQVEsRUFBRTtBQURQLFNBREY7QUFJTGtCLFFBQUFBLENBQUMsRUFBRTtBQUNDYixVQUFBQSxTQUFTLEVBQUUsbUJBQVVjLEdBQVYsRUFBZTtBQUN0QixtQkFBTyxNQUFNQSxHQUFOLEdBQVksWUFBbkI7QUFDSDtBQUhGO0FBSkUsT0E1RkM7QUFzR1YxQixNQUFBQSxNQUFNLEVBQUUsQ0FBQ3JCLFVBQUQsQ0F0R0U7QUF1R1Y4RCxNQUFBQSxJQUFJLEVBQUU7QUFDRk4sUUFBQUEsV0FBVyxFQUFFQSxXQURYO0FBRUZPLFFBQUFBLGVBQWUsRUFBRSxDQUZmO0FBR0YzQixRQUFBQSxLQUFLLEVBQUU7QUFDSDRCLFVBQUFBLEtBQUssRUFBRTtBQUNIdkQsWUFBQUEsSUFBSSxFQUFFO0FBREg7QUFESjtBQUhMLE9BdkdJO0FBZ0hWdUMsTUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFFBQUFBLFdBQVcsRUFBRWxELFNBRFI7QUFFTG1ELFFBQUFBLFdBQVcsRUFBRTtBQUZSO0FBaEhDLEtBQWQ7QUFzSEEsUUFBSTdDLEtBQUssR0FBRyxJQUFJOEMsVUFBSixDQUFlN0QsT0FBZixFQUF3QlcsT0FBeEIsQ0FBWjtBQUNBSSxJQUFBQSxLQUFLLENBQUMrQyxNQUFOO0FBQ0gsR0FySUQ7O0FBdUlBLE1BQUllLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBVztBQUMvQixRQUFJN0UsT0FBTyxHQUFHTCxRQUFRLENBQUNzRSxjQUFULENBQXdCLDBCQUF4QixDQUFkO0FBRUEsUUFBSWhFLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLEdBQVAsQ0FBV0osT0FBWCxFQUFvQixRQUFwQixDQUFELENBQXJCO0FBQ0EsUUFBSU8sVUFBVSxHQUFHSixNQUFNLENBQUNLLG1CQUFQLENBQTJCLGVBQTNCLENBQWpCO0FBQ0EsUUFBSTBELFdBQVcsR0FBRy9ELE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsZUFBM0IsQ0FBbEI7QUFFQSxRQUFJQyxTQUFTLEdBQUdOLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsY0FBM0IsQ0FBaEI7QUFDQSxRQUFJc0UsY0FBYyxHQUFHM0UsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixvQkFBM0IsQ0FBckI7QUFDQSxRQUFJMkQsY0FBYyxHQUFHaEUsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixjQUEzQixDQUFyQjtBQUNBLFFBQUl1RSxtQkFBbUIsR0FBRzVFLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsb0JBQTNCLENBQTFCOztBQUVBLFFBQUksQ0FBQ1IsT0FBTCxFQUFjO0FBQ1Y7QUFDSDs7QUFFRCxRQUFJVyxPQUFPLEdBQUc7QUFDVkMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDTEMsUUFBQUEsSUFBSSxFQUFFLFlBREQ7QUFFTEMsUUFBQUEsSUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixFQUF0QjtBQUZELE9BQUQsRUFHTDtBQUNDRCxRQUFBQSxJQUFJLEVBQUUsU0FEUDtBQUVDQyxRQUFBQSxJQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEdBQVQsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCO0FBRlAsT0FISyxDQURFO0FBUVZDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxVQUFVLEVBQUUsU0FEVDtBQUVIQyxRQUFBQSxJQUFJLEVBQUUsTUFGSDtBQUdIaEIsUUFBQUEsTUFBTSxFQUFFLEdBSEw7QUFJSGlCLFFBQUFBLE9BQU8sRUFBRTtBQUNMQyxVQUFBQSxJQUFJLEVBQUU7QUFERDtBQUpOLE9BUkc7QUFnQlZJLE1BQUFBLFdBQVcsRUFBRSxFQWhCSDtBQWlCVkMsTUFBQUEsTUFBTSxFQUFFO0FBQ0pMLFFBQUFBLElBQUksRUFBRTtBQURGLE9BakJFO0FBb0JWTSxNQUFBQSxVQUFVLEVBQUU7QUFDUkosUUFBQUEsT0FBTyxFQUFFO0FBREQsT0FwQkY7QUF1QlZLLE1BQUFBLElBQUksRUFBRTtBQUNGVCxRQUFBQSxJQUFJLEVBQUUsT0FESjtBQUVGVSxRQUFBQSxPQUFPLEVBQUU7QUFGUCxPQXZCSTtBQTJCVkMsTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLEtBQUssRUFBRTtBQURILE9BM0JFO0FBOEJWRyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsVUFBVSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLENBRFQ7QUFFSEMsUUFBQUEsVUFBVSxFQUFFO0FBQ1JmLFVBQUFBLElBQUksRUFBRTtBQURFLFNBRlQ7QUFLSGdCLFFBQUFBLFNBQVMsRUFBRTtBQUNQaEIsVUFBQUEsSUFBSSxFQUFFO0FBREMsU0FMUjtBQVFIaUIsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLEtBQUssRUFBRTtBQUNITixZQUFBQSxNQUFNLEVBQUV4QixVQURMO0FBRUgrQixZQUFBQSxRQUFRLEVBQUU7QUFGUDtBQURILFNBUkw7QUFjSEMsUUFBQUEsVUFBVSxFQUFFO0FBQ1JDLFVBQUFBLFFBQVEsRUFBRSxPQURGO0FBRVJaLFVBQUFBLE1BQU0sRUFBRTtBQUNKdkIsWUFBQUEsS0FBSyxFQUFFRSxVQURIO0FBRUp1QixZQUFBQSxLQUFLLEVBQUUsQ0FGSDtBQUdKVyxZQUFBQSxTQUFTLEVBQUU7QUFIUDtBQUZBLFNBZFQ7QUFzQkhDLFFBQUFBLE9BQU8sRUFBRTtBQUNMckIsVUFBQUEsT0FBTyxFQUFFLElBREo7QUFFTHNCLFVBQUFBLFNBQVMsRUFBRUMsU0FGTjtBQUdMQyxVQUFBQSxPQUFPLEVBQUUsQ0FISjtBQUlMUixVQUFBQSxLQUFLLEVBQUU7QUFDSEMsWUFBQUEsUUFBUSxFQUFFO0FBRFA7QUFKRjtBQXRCTixPQTlCRztBQTZEVlEsTUFBQUEsS0FBSyxFQUFFO0FBQ0hWLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxLQUFLLEVBQUU7QUFDSE4sWUFBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsWUFBQUEsUUFBUSxFQUFFO0FBRlA7QUFESDtBQURMLE9BN0RHO0FBcUVWVyxNQUFBQSxNQUFNLEVBQUU7QUFDSkMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLE1BQU0sRUFBRTtBQUNKbEMsWUFBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLFlBQUFBLEtBQUssRUFBRTtBQUZIO0FBREosU0FESjtBQU9KQyxRQUFBQSxLQUFLLEVBQUU7QUFDSEYsVUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxZQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsWUFBQUEsS0FBSyxFQUFFO0FBRkg7QUFETCxTQVBIO0FBYUpFLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxnQ0FBZ0MsRUFBRSxLQUQ5QjtBQUVKSixVQUFBQSxNQUFNLEVBQUU7QUFDSmxDLFlBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxZQUFBQSxLQUFLLEVBQUU7QUFGSDtBQUZKO0FBYkosT0FyRUU7QUEwRlZWLE1BQUFBLE9BQU8sRUFBRTtBQUNMTCxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsUUFBUSxFQUFFO0FBRFAsU0FERjtBQUlMa0IsUUFBQUEsQ0FBQyxFQUFFO0FBQ0NiLFVBQUFBLFNBQVMsRUFBRSxtQkFBVWMsR0FBVixFQUFlO0FBQ3RCLG1CQUFPLE1BQU1BLEdBQU4sR0FBWSxZQUFuQjtBQUNIO0FBSEY7QUFKRSxPQTFGQztBQW9HVjFCLE1BQUFBLE1BQU0sRUFBRSxDQUFDdEIsU0FBRCxFQUFZMEQsY0FBWixDQXBHRTtBQXFHVkssTUFBQUEsSUFBSSxFQUFFO0FBQ0ZOLFFBQUFBLFdBQVcsRUFBRUEsV0FEWDtBQUVGTyxRQUFBQSxlQUFlLEVBQUUsQ0FGZjtBQUdGM0IsUUFBQUEsS0FBSyxFQUFFO0FBQ0g0QixVQUFBQSxLQUFLLEVBQUU7QUFDSHZELFlBQUFBLElBQUksRUFBRTtBQURIO0FBREo7QUFITCxPQXJHSTtBQThHVnVDLE1BQUFBLE9BQU8sRUFBRTtBQUNMM0IsUUFBQUEsTUFBTSxFQUFFLENBQUMrQyxjQUFELEVBQWlCQyxtQkFBakIsQ0FESDtBQUVMcEIsUUFBQUEsV0FBVyxFQUFFLENBQUNtQixjQUFELEVBQWlCQyxtQkFBakIsQ0FGUjtBQUdMbkIsUUFBQUEsV0FBVyxFQUFFO0FBSFI7QUE5R0MsS0FBZDtBQXFIQSxRQUFJN0MsS0FBSyxHQUFHLElBQUk4QyxVQUFKLENBQWU3RCxPQUFmLEVBQXdCVyxPQUF4QixDQUFaO0FBQ0FJLElBQUFBLEtBQUssQ0FBQytDLE1BQU47QUFDSCxHQXZJRDs7QUF5SUEsTUFBSWtCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBVztBQUMvQixRQUFJaEYsT0FBTyxHQUFHTCxRQUFRLENBQUNzRSxjQUFULENBQXdCLDBCQUF4QixDQUFkO0FBRUEsUUFBSWhFLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLEdBQVAsQ0FBV0osT0FBWCxFQUFvQixRQUFwQixDQUFELENBQXJCO0FBQ0EsUUFBSU8sVUFBVSxHQUFHSixNQUFNLENBQUNLLG1CQUFQLENBQTJCLGVBQTNCLENBQWpCO0FBQ0EsUUFBSTBELFdBQVcsR0FBRy9ELE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsZUFBM0IsQ0FBbEI7QUFFQSxRQUFJQyxTQUFTLEdBQUdOLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsY0FBM0IsQ0FBaEI7QUFDQSxRQUFJMkQsY0FBYyxHQUFHaEUsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixXQUEzQixDQUFyQjs7QUFFQSxRQUFJLENBQUNSLE9BQUwsRUFBYztBQUNWO0FBQ0g7O0FBRUQsUUFBSVcsT0FBTyxHQUFHO0FBQ1ZDLE1BQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLFFBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckI7QUFGRCxPQUFELEVBR0w7QUFDQ0QsUUFBQUEsSUFBSSxFQUFFLFNBRFA7QUFFQ0MsUUFBQUEsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLEVBQVcsQ0FBQyxFQUFaLEVBQWdCLENBQUMsRUFBakIsRUFBcUIsQ0FBQyxFQUF0QixFQUEwQixDQUFDLEVBQTNCO0FBRlAsT0FISyxDQURFO0FBUVZDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxVQUFVLEVBQUUsU0FEVDtBQUVIQyxRQUFBQSxJQUFJLEVBQUUsS0FGSDtBQUdIZ0UsUUFBQUEsT0FBTyxFQUFFLElBSE47QUFJSGhGLFFBQUFBLE1BQU0sRUFBRSxHQUpMO0FBS0hpQixRQUFBQSxPQUFPLEVBQUU7QUFDTEMsVUFBQUEsSUFBSSxFQUFFO0FBREQ7QUFMTixPQVJHO0FBaUJWSSxNQUFBQSxXQUFXLEVBQUU7QUFDVDZDLFFBQUFBLEdBQUcsRUFBRTtBQUNEQyxVQUFBQSxVQUFVLEVBQUUsS0FEWDtBQUVEQyxVQUFBQSxXQUFXLEVBQUUsQ0FBQyxLQUFELENBRlo7QUFHREMsVUFBQUEsWUFBWSxFQUFFO0FBSGI7QUFESSxPQWpCSDtBQXdCVi9DLE1BQUFBLE1BQU0sRUFBRTtBQUNKTCxRQUFBQSxJQUFJLEVBQUU7QUFERixPQXhCRTtBQTJCVk0sTUFBQUEsVUFBVSxFQUFFO0FBQ1JKLFFBQUFBLE9BQU8sRUFBRTtBQURELE9BM0JGO0FBOEJWTyxNQUFBQSxNQUFNLEVBQUU7QUFDSlQsUUFBQUEsSUFBSSxFQUFFLElBREY7QUFFSlcsUUFBQUEsS0FBSyxFQUFFLENBRkg7QUFHSkMsUUFBQUEsTUFBTSxFQUFFLENBQUMsYUFBRDtBQUhKLE9BOUJFO0FBbUNWQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsVUFBVSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLENBRFQ7QUFFSEMsUUFBQUEsVUFBVSxFQUFFO0FBQ1JmLFVBQUFBLElBQUksRUFBRTtBQURFLFNBRlQ7QUFLSGdCLFFBQUFBLFNBQVMsRUFBRTtBQUNQaEIsVUFBQUEsSUFBSSxFQUFFO0FBREMsU0FMUjtBQVFIaUIsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLEtBQUssRUFBRTtBQUNITixZQUFBQSxNQUFNLEVBQUV4QixVQURMO0FBRUgrQixZQUFBQSxRQUFRLEVBQUU7QUFGUDtBQURIO0FBUkwsT0FuQ0c7QUFrRFZRLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxHQUFHLEVBQUUsQ0FBQyxFQURIO0FBRUhDLFFBQUFBLEdBQUcsRUFBRSxFQUZGO0FBR0haLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxLQUFLLEVBQUU7QUFDSE4sWUFBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsWUFBQUEsUUFBUSxFQUFFO0FBRlA7QUFESDtBQUhMLE9BbERHO0FBNERWWixNQUFBQSxJQUFJLEVBQUU7QUFDRkMsUUFBQUEsT0FBTyxFQUFFO0FBRFAsT0E1REk7QUErRFZzQixNQUFBQSxNQUFNLEVBQUU7QUFDSkMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLE1BQU0sRUFBRTtBQUNKbEMsWUFBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLFlBQUFBLEtBQUssRUFBRTtBQUZIO0FBREosU0FESjtBQU9KQyxRQUFBQSxLQUFLLEVBQUU7QUFDSEYsVUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxZQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsWUFBQUEsS0FBSyxFQUFFO0FBRkg7QUFETCxTQVBIO0FBYUpFLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxnQ0FBZ0MsRUFBRSxLQUQ5QjtBQUVKSixVQUFBQSxNQUFNLEVBQUU7QUFDSmxDLFlBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxZQUFBQSxLQUFLLEVBQUU7QUFGSDtBQUZKO0FBYkosT0EvREU7QUFvRlZWLE1BQUFBLE9BQU8sRUFBRTtBQUNMTCxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsUUFBUSxFQUFFO0FBRFAsU0FERjtBQUlMa0IsUUFBQUEsQ0FBQyxFQUFFO0FBQ0NiLFVBQUFBLFNBQVMsRUFBRSxtQkFBVWMsR0FBVixFQUFlO0FBQ3RCLG1CQUFPLE1BQU1BLEdBQU4sR0FBWSxZQUFuQjtBQUNIO0FBSEY7QUFKRSxPQXBGQztBQThGVjFCLE1BQUFBLE1BQU0sRUFBRSxDQUFDdEIsU0FBRCxFQUFZMEQsY0FBWixDQTlGRTtBQStGVkssTUFBQUEsSUFBSSxFQUFFO0FBQ0ZOLFFBQUFBLFdBQVcsRUFBRUEsV0FEWDtBQUVGTyxRQUFBQSxlQUFlLEVBQUUsQ0FGZjtBQUdGM0IsUUFBQUEsS0FBSyxFQUFFO0FBQ0g0QixVQUFBQSxLQUFLLEVBQUU7QUFDSHZELFlBQUFBLElBQUksRUFBRTtBQURIO0FBREo7QUFITDtBQS9GSSxLQUFkO0FBMEdBLFFBQUlKLEtBQUssR0FBRyxJQUFJOEMsVUFBSixDQUFlN0QsT0FBZixFQUF3QlcsT0FBeEIsQ0FBWjtBQUNBSSxJQUFBQSxLQUFLLENBQUMrQyxNQUFOO0FBQ0gsR0ExSEQ7O0FBNEhBLE1BQUlvQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQVc7QUFDL0IsUUFBSWxGLE9BQU8sR0FBR0wsUUFBUSxDQUFDc0UsY0FBVCxDQUF3QiwwQkFBeEIsQ0FBZDtBQUVBLFFBQUloRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFQLENBQVdKLE9BQVgsRUFBb0IsUUFBcEIsQ0FBRCxDQUFyQjtBQUNBLFFBQUlPLFVBQVUsR0FBR0osTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixlQUEzQixDQUFqQjtBQUNBLFFBQUkwRCxXQUFXLEdBQUcvRCxNQUFNLENBQUNLLG1CQUFQLENBQTJCLGVBQTNCLENBQWxCO0FBRUEsUUFBSUMsU0FBUyxHQUFHTixNQUFNLENBQUNLLG1CQUFQLENBQTJCLGNBQTNCLENBQWhCO0FBQ0EsUUFBSXNFLGNBQWMsR0FBRzNFLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsb0JBQTNCLENBQXJCO0FBQ0EsUUFBSTJELGNBQWMsR0FBR2hFLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsV0FBM0IsQ0FBckI7O0FBRUEsUUFBSSxDQUFDUixPQUFMLEVBQWM7QUFDVjtBQUNIOztBQUVELFFBQUlXLE9BQU8sR0FBRztBQUNWQyxNQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUNMQyxRQUFBQSxJQUFJLEVBQUUsWUFERDtBQUVMSSxRQUFBQSxJQUFJLEVBQUUsS0FGRDtBQUdMZ0UsUUFBQUEsT0FBTyxFQUFFLElBSEo7QUFJTG5FLFFBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckI7QUFKRCxPQUFELEVBS0w7QUFDQ0QsUUFBQUEsSUFBSSxFQUFFLFNBRFA7QUFFQ0ksUUFBQUEsSUFBSSxFQUFFLEtBRlA7QUFHQ2dFLFFBQUFBLE9BQU8sRUFBRSxJQUhWO0FBSUNuRSxRQUFBQSxJQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCO0FBSlAsT0FMSyxFQVVMO0FBQ0NELFFBQUFBLElBQUksRUFBRSxVQURQO0FBRUNJLFFBQUFBLElBQUksRUFBRSxNQUZQO0FBR0NILFFBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckI7QUFIUCxPQVZLLENBREU7QUFnQlZDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxVQUFVLEVBQUUsU0FEVDtBQUVIaUUsUUFBQUEsT0FBTyxFQUFFLElBRk47QUFHSGhGLFFBQUFBLE1BQU0sRUFBRSxHQUhMO0FBSUhpQixRQUFBQSxPQUFPLEVBQUU7QUFDTEMsVUFBQUEsSUFBSSxFQUFFO0FBREQ7QUFKTixPQWhCRztBQXdCVkksTUFBQUEsV0FBVyxFQUFFO0FBQ1Q2QyxRQUFBQSxHQUFHLEVBQUU7QUFDRGEsVUFBQUEsT0FBTyxFQUFFLElBRFI7QUFFRFosVUFBQUEsVUFBVSxFQUFFLEtBRlg7QUFHREUsVUFBQUEsWUFBWSxFQUFFLENBSGI7QUFJREQsVUFBQUEsV0FBVyxFQUFFLENBQUMsS0FBRDtBQUpaO0FBREksT0F4Qkg7QUFnQ1Y5QyxNQUFBQSxNQUFNLEVBQUU7QUFDSkwsUUFBQUEsSUFBSSxFQUFFO0FBREYsT0FoQ0U7QUFtQ1ZNLE1BQUFBLFVBQVUsRUFBRTtBQUNSSixRQUFBQSxPQUFPLEVBQUU7QUFERCxPQW5DRjtBQXNDVk8sTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLEtBQUssRUFBRSxRQURIO0FBRUpWLFFBQUFBLElBQUksRUFBRSxJQUZGO0FBR0pXLFFBQUFBLEtBQUssRUFBRSxDQUhIO0FBSUpDLFFBQUFBLE1BQU0sRUFBRSxDQUFDLGFBQUQ7QUFKSixPQXRDRTtBQTRDVkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLFVBQVUsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxDQURUO0FBRUhDLFFBQUFBLFVBQVUsRUFBRTtBQUNSZixVQUFBQSxJQUFJLEVBQUU7QUFERSxTQUZUO0FBS0hnQixRQUFBQSxTQUFTLEVBQUU7QUFDUGhCLFVBQUFBLElBQUksRUFBRTtBQURDLFNBTFI7QUFRSGlCLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxLQUFLLEVBQUU7QUFDSE4sWUFBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsWUFBQUEsUUFBUSxFQUFFO0FBRlA7QUFESDtBQVJMLE9BNUNHO0FBMkRWUSxNQUFBQSxLQUFLLEVBQUU7QUFDSEUsUUFBQUEsR0FBRyxFQUFFLEdBREY7QUFFSFosUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLEtBQUssRUFBRTtBQUNITixZQUFBQSxNQUFNLEVBQUV4QixVQURMO0FBRUgrQixZQUFBQSxRQUFRLEVBQUU7QUFGUDtBQURIO0FBRkwsT0EzREc7QUFvRVZaLE1BQUFBLElBQUksRUFBRTtBQUNGQyxRQUFBQSxPQUFPLEVBQUU7QUFEUCxPQXBFSTtBQXVFVnNCLE1BQUFBLE1BQU0sRUFBRTtBQUNKQyxRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxZQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsWUFBQUEsS0FBSyxFQUFFO0FBRkg7QUFESixTQURKO0FBT0pDLFFBQUFBLEtBQUssRUFBRTtBQUNIRixVQUFBQSxNQUFNLEVBQUU7QUFDSmxDLFlBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxZQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURMLFNBUEg7QUFhSkUsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLGdDQUFnQyxFQUFFLEtBRDlCO0FBRUpKLFVBQUFBLE1BQU0sRUFBRTtBQUNKbEMsWUFBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLFlBQUFBLEtBQUssRUFBRTtBQUZIO0FBRko7QUFiSixPQXZFRTtBQTRGVlYsTUFBQUEsT0FBTyxFQUFFO0FBQ0xMLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxRQUFRLEVBQUU7QUFEUCxTQURGO0FBSUxrQixRQUFBQSxDQUFDLEVBQUU7QUFDQ2IsVUFBQUEsU0FBUyxFQUFFLG1CQUFVYyxHQUFWLEVBQWU7QUFDdEIsbUJBQU8sTUFBTUEsR0FBTixHQUFZLFlBQW5CO0FBQ0g7QUFIRjtBQUpFLE9BNUZDO0FBc0dWMUIsTUFBQUEsTUFBTSxFQUFFLENBQUN0QixTQUFELEVBQVkwRCxjQUFaLEVBQTRCVyxjQUE1QixDQXRHRTtBQXVHVk4sTUFBQUEsSUFBSSxFQUFFO0FBQ0ZOLFFBQUFBLFdBQVcsRUFBRUEsV0FEWDtBQUVGTyxRQUFBQSxlQUFlLEVBQUUsQ0FGZjtBQUdGM0IsUUFBQUEsS0FBSyxFQUFFO0FBQ0g0QixVQUFBQSxLQUFLLEVBQUU7QUFDSHZELFlBQUFBLElBQUksRUFBRTtBQURIO0FBREosU0FITDtBQVFGZ0UsUUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFVBQUFBLEdBQUcsRUFBRSxDQURBO0FBRUxDLFVBQUFBLEtBQUssRUFBRSxDQUZGO0FBR0xDLFVBQUFBLE1BQU0sRUFBRSxDQUhIO0FBSUxDLFVBQUFBLElBQUksRUFBRTtBQUpEO0FBUlA7QUF2R0ksS0FBZDtBQXdIQSxRQUFJeEUsS0FBSyxHQUFHLElBQUk4QyxVQUFKLENBQWU3RCxPQUFmLEVBQXdCVyxPQUF4QixDQUFaO0FBQ0FJLElBQUFBLEtBQUssQ0FBQytDLE1BQU47QUFDSCxHQXpJRDs7QUEySUEsTUFBSTBCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBVztBQUMvQixRQUFJeEYsT0FBTyxHQUFHTCxRQUFRLENBQUNzRSxjQUFULENBQXdCLDBCQUF4QixDQUFkO0FBRUEsUUFBSWhFLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLEdBQVAsQ0FBV0osT0FBWCxFQUFvQixRQUFwQixDQUFELENBQXJCO0FBRUEsUUFBSU8sVUFBVSxHQUFHSixNQUFNLENBQUNLLG1CQUFQLENBQTJCLGVBQTNCLENBQWpCO0FBQ0EsUUFBSTBELFdBQVcsR0FBRy9ELE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsZUFBM0IsQ0FBbEI7QUFDQSxRQUFJbUQsV0FBVyxHQUFHeEQsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixlQUEzQixDQUFsQjtBQUVBLFFBQUlpRixNQUFNLEdBQUd0RixNQUFNLENBQUNLLG1CQUFQLENBQTJCLGNBQTNCLENBQWI7QUFDQSxRQUFJa0YsV0FBVyxHQUFHdkYsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixvQkFBM0IsQ0FBbEI7QUFFQSxRQUFJbUYsTUFBTSxHQUFHeEYsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixjQUEzQixDQUFiO0FBQ0EsUUFBSW9GLFdBQVcsR0FBR3pGLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsb0JBQTNCLENBQWxCO0FBRUEsUUFBSXFGLE1BQU0sR0FBRzFGLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsY0FBM0IsQ0FBYjtBQUNBLFFBQUlzRixXQUFXLEdBQUczRixNQUFNLENBQUNLLG1CQUFQLENBQTJCLG9CQUEzQixDQUFsQjs7QUFFQSxRQUFJLENBQUNSLE9BQUwsRUFBYztBQUNWO0FBQ0g7O0FBRUQsUUFBSVcsT0FBTyxHQUFHO0FBQ1ZDLE1BQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLFFBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckI7QUFGRCxPQUFELEVBR0w7QUFDQ0QsUUFBQUEsSUFBSSxFQUFFLFNBRFA7QUFFQ0MsUUFBQUEsSUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQjtBQUZQLE9BSEssRUFNTDtBQUNDRCxRQUFBQSxJQUFJLEVBQUUsVUFEUDtBQUVDQyxRQUFBQSxJQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCO0FBRlAsT0FOSyxDQURFO0FBV1ZDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxVQUFVLEVBQUUsU0FEVDtBQUVIQyxRQUFBQSxJQUFJLEVBQUUsTUFGSDtBQUdIaEIsUUFBQUEsTUFBTSxFQUFFQSxNQUhMO0FBSUhpQixRQUFBQSxPQUFPLEVBQUU7QUFDTEMsVUFBQUEsSUFBSSxFQUFFO0FBREQsU0FKTjtBQU9IQyxRQUFBQSxJQUFJLEVBQUU7QUFDRkMsVUFBQUEsT0FBTyxFQUFFO0FBRFAsU0FQSDtBQVVIQyxRQUFBQSxTQUFTLEVBQUU7QUFDUEQsVUFBQUEsT0FBTyxFQUFFO0FBREY7QUFWUixPQVhHO0FBeUJWRSxNQUFBQSxXQUFXLEVBQUUsRUF6Qkg7QUEwQlZDLE1BQUFBLE1BQU0sRUFBRTtBQUNKTCxRQUFBQSxJQUFJLEVBQUU7QUFERixPQTFCRTtBQTZCVk0sTUFBQUEsVUFBVSxFQUFFO0FBQ1JKLFFBQUFBLE9BQU8sRUFBRTtBQURELE9BN0JGO0FBZ0NWSyxNQUFBQSxJQUFJLEVBQUU7QUFDRlQsUUFBQUEsSUFBSSxFQUFFLE9BREo7QUFFRlUsUUFBQUEsT0FBTyxFQUFFO0FBRlAsT0FoQ0k7QUFvQ1ZDLE1BQUFBLE1BQU0sRUFBRTtBQUNKQyxRQUFBQSxLQUFLLEVBQUUsUUFESDtBQUVKVixRQUFBQSxJQUFJLEVBQUUsSUFGRjtBQUdKVyxRQUFBQSxLQUFLLEVBQUUsQ0FISDtBQUlKQyxRQUFBQSxNQUFNLEVBQUUsQ0FBQzBELE1BQUQsRUFBUyxhQUFULEVBQXdCLGFBQXhCO0FBSkosT0FwQ0U7QUEwQ1Z6RCxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsVUFBVSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLENBRFQ7QUFFSEMsUUFBQUEsVUFBVSxFQUFFO0FBQ1JmLFVBQUFBLElBQUksRUFBRTtBQURFLFNBRlQ7QUFLSGdCLFFBQUFBLFNBQVMsRUFBRTtBQUNQaEIsVUFBQUEsSUFBSSxFQUFFO0FBREMsU0FMUjtBQVFIaUIsUUFBQUEsTUFBTSxFQUFFO0FBQ0pqQixVQUFBQSxJQUFJLEVBQUUsS0FERjtBQUVKa0IsVUFBQUEsS0FBSyxFQUFFO0FBQ0hOLFlBQUFBLE1BQU0sRUFBRXhCLFVBREw7QUFFSCtCLFlBQUFBLFFBQVEsRUFBRTtBQUZQO0FBRkgsU0FSTDtBQWVIQyxRQUFBQSxVQUFVLEVBQUU7QUFDUnBCLFVBQUFBLElBQUksRUFBRSxLQURFO0FBRVJxQixVQUFBQSxRQUFRLEVBQUUsT0FGRjtBQUdSWixVQUFBQSxNQUFNLEVBQUU7QUFDSnZCLFlBQUFBLEtBQUssRUFBRXNELFdBREg7QUFFSjdCLFlBQUFBLEtBQUssRUFBRSxDQUZIO0FBR0pXLFlBQUFBLFNBQVMsRUFBRTtBQUhQO0FBSEEsU0FmVDtBQXdCSEMsUUFBQUEsT0FBTyxFQUFFO0FBQ0xyQixVQUFBQSxPQUFPLEVBQUUsSUFESjtBQUVMc0IsVUFBQUEsU0FBUyxFQUFFQyxTQUZOO0FBR0xDLFVBQUFBLE9BQU8sRUFBRSxDQUhKO0FBSUxSLFVBQUFBLEtBQUssRUFBRTtBQUNIQyxZQUFBQSxRQUFRLEVBQUU7QUFEUDtBQUpGO0FBeEJOLE9BMUNHO0FBMkVWUSxNQUFBQSxLQUFLLEVBQUU7QUFDSFYsUUFBQUEsTUFBTSxFQUFFO0FBQ0pqQixVQUFBQSxJQUFJLEVBQUUsS0FERjtBQUVKa0IsVUFBQUEsS0FBSyxFQUFFO0FBQ0hOLFlBQUFBLE1BQU0sRUFBRXhCLFVBREw7QUFFSCtCLFlBQUFBLFFBQVEsRUFBRTtBQUZQO0FBRkg7QUFETCxPQTNFRztBQW9GVlcsTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxNQUFNLEVBQUU7QUFDSmxDLFlBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxZQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURKLFNBREo7QUFPSkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hGLFVBQUFBLE1BQU0sRUFBRTtBQUNKbEMsWUFBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLFlBQUFBLEtBQUssRUFBRTtBQUZIO0FBREwsU0FQSDtBQWFKRSxRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsZ0NBQWdDLEVBQUUsS0FEOUI7QUFFSkosVUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxZQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsWUFBQUEsS0FBSyxFQUFFO0FBRkg7QUFGSjtBQWJKLE9BcEZFO0FBeUdWVixNQUFBQSxPQUFPLEVBQUU7QUFDTEwsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFFBQVEsRUFBRTtBQURQLFNBREY7QUFJTGtCLFFBQUFBLENBQUMsRUFBRTtBQUNDYixVQUFBQSxTQUFTLEVBQUUsbUJBQVVjLEdBQVYsRUFBZTtBQUN0QixtQkFBTyxNQUFNQSxHQUFOLEdBQVksWUFBbkI7QUFDSDtBQUhGO0FBSkUsT0F6R0M7QUFtSFYxQixNQUFBQSxNQUFNLEVBQUUsQ0FBQzBELE1BQUQsRUFBU0UsTUFBVCxFQUFpQkUsTUFBakIsQ0FuSEU7QUFvSFZyQixNQUFBQSxJQUFJLEVBQUU7QUFDRk4sUUFBQUEsV0FBVyxFQUFFQSxXQURYO0FBRUZPLFFBQUFBLGVBQWUsRUFBRSxDQUZmO0FBR0YzQixRQUFBQSxLQUFLLEVBQUU7QUFDSDRCLFVBQUFBLEtBQUssRUFBRTtBQUNIdkQsWUFBQUEsSUFBSSxFQUFFO0FBREg7QUFESjtBQUhMLE9BcEhJO0FBNkhWdUMsTUFBQUEsT0FBTyxFQUFFO0FBQ0wzQixRQUFBQSxNQUFNLEVBQUUsQ0FBQzJELFdBQUQsRUFBY0UsV0FBZCxFQUEyQkUsV0FBM0IsQ0FESDtBQUVMbkMsUUFBQUEsV0FBVyxFQUFFLENBQUM4QixNQUFELEVBQVNFLE1BQVQsRUFBaUJFLE1BQWpCLENBRlI7QUFHTGpDLFFBQUFBLFdBQVcsRUFBRTtBQUhSO0FBN0hDLEtBQWQ7QUFvSUEsUUFBSTdDLEtBQUssR0FBRyxJQUFJOEMsVUFBSixDQUFlN0QsT0FBZixFQUF3QlcsT0FBeEIsQ0FBWjtBQUNBSSxJQUFBQSxLQUFLLENBQUMrQyxNQUFOO0FBQ0gsR0E1SkQ7O0FBOEpBLE1BQUlpQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQVc7QUFDL0IsUUFBSS9GLE9BQU8sR0FBR0wsUUFBUSxDQUFDc0UsY0FBVCxDQUF3QiwwQkFBeEIsQ0FBZDtBQUVBLFFBQUloRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFQLENBQVdKLE9BQVgsRUFBb0IsUUFBcEIsQ0FBRCxDQUFyQjtBQUVBLFFBQUlPLFVBQVUsR0FBR0osTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixlQUEzQixDQUFqQjtBQUNBLFFBQUkwRCxXQUFXLEdBQUcvRCxNQUFNLENBQUNLLG1CQUFQLENBQTJCLGVBQTNCLENBQWxCO0FBQ0EsUUFBSW1ELFdBQVcsR0FBR3hELE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsZUFBM0IsQ0FBbEI7QUFFQSxRQUFJaUYsTUFBTSxHQUFHdEYsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixjQUEzQixDQUFiO0FBQ0EsUUFBSWtGLFdBQVcsR0FBR3ZGLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsb0JBQTNCLENBQWxCO0FBRUEsUUFBSW1GLE1BQU0sR0FBR3hGLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsY0FBM0IsQ0FBYjtBQUNBLFFBQUlvRixXQUFXLEdBQUd6RixNQUFNLENBQUNLLG1CQUFQLENBQTJCLG9CQUEzQixDQUFsQjtBQUVBLFFBQUlxRixNQUFNLEdBQUcxRixNQUFNLENBQUNLLG1CQUFQLENBQTJCLGNBQTNCLENBQWI7QUFDQSxRQUFJc0YsV0FBVyxHQUFHM0YsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixvQkFBM0IsQ0FBbEI7O0FBRUEsUUFBSSxDQUFDUixPQUFMLEVBQWM7QUFDVjtBQUNIOztBQUVELFFBQUlXLE9BQU8sR0FBRztBQUNWQyxNQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUNMQyxRQUFBQSxJQUFJLEVBQUUsWUFERDtBQUVMQyxRQUFBQSxJQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCO0FBRkQsT0FBRCxFQUdMO0FBQ0NELFFBQUFBLElBQUksRUFBRSxTQURQO0FBRUNDLFFBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckI7QUFGUCxPQUhLLEVBTUw7QUFDQ0QsUUFBQUEsSUFBSSxFQUFFLFVBRFA7QUFFQ0MsUUFBQUEsSUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQjtBQUZQLE9BTkssQ0FERTtBQVdWQyxNQUFBQSxLQUFLLEVBQUU7QUFDSEMsUUFBQUEsVUFBVSxFQUFFLFNBRFQ7QUFFSEMsUUFBQUEsSUFBSSxFQUFFLE1BRkg7QUFHSGhCLFFBQUFBLE1BQU0sRUFBRUEsTUFITDtBQUlIaUIsUUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFVBQUFBLElBQUksRUFBRTtBQURELFNBSk47QUFPSEMsUUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFVBQUFBLE9BQU8sRUFBRTtBQURQLFNBUEg7QUFVSEMsUUFBQUEsU0FBUyxFQUFFO0FBQ1BELFVBQUFBLE9BQU8sRUFBRTtBQURGO0FBVlIsT0FYRztBQXlCVkUsTUFBQUEsV0FBVyxFQUFFLEVBekJIO0FBMEJWQyxNQUFBQSxNQUFNLEVBQUU7QUFDSkwsUUFBQUEsSUFBSSxFQUFFO0FBREYsT0ExQkU7QUE2QlZNLE1BQUFBLFVBQVUsRUFBRTtBQUNSSixRQUFBQSxPQUFPLEVBQUU7QUFERCxPQTdCRjtBQWdDVkssTUFBQUEsSUFBSSxFQUFFO0FBQ0ZULFFBQUFBLElBQUksRUFBRSxPQURKO0FBRUZVLFFBQUFBLE9BQU8sRUFBRTtBQUZQLE9BaENJO0FBb0NWQyxNQUFBQSxNQUFNLEVBQUU7QUFDSkMsUUFBQUEsS0FBSyxFQUFFLFFBREg7QUFFSlYsUUFBQUEsSUFBSSxFQUFFLElBRkY7QUFHSlcsUUFBQUEsS0FBSyxFQUFFLENBSEg7QUFJSkMsUUFBQUEsTUFBTSxFQUFFLENBQUMwRCxNQUFELEVBQVNFLE1BQVQsRUFBaUJFLE1BQWpCO0FBSkosT0FwQ0U7QUEwQ1Y3RCxNQUFBQSxLQUFLLEVBQUU7QUFDSGdFLFFBQUFBLENBQUMsRUFBRSxDQURBO0FBRUhDLFFBQUFBLE9BQU8sRUFBRSxDQUZOO0FBR0hwRCxRQUFBQSxPQUFPLEVBQUUsQ0FITjtBQUlIc0MsUUFBQUEsT0FBTyxFQUFFO0FBQ0xJLFVBQUFBLElBQUksRUFBRSxDQUREO0FBRUxGLFVBQUFBLEtBQUssRUFBRSxDQUZGO0FBR0xELFVBQUFBLEdBQUcsRUFBRTtBQUhBLFNBSk47QUFTSG5ELFFBQUFBLFVBQVUsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxDQVRUO0FBVUhDLFFBQUFBLFVBQVUsRUFBRTtBQUNSZixVQUFBQSxJQUFJLEVBQUU7QUFERSxTQVZUO0FBYUhnQixRQUFBQSxTQUFTLEVBQUU7QUFDUGhCLFVBQUFBLElBQUksRUFBRTtBQURDLFNBYlI7QUFnQkhpQixRQUFBQSxNQUFNLEVBQUU7QUFDSmpCLFVBQUFBLElBQUksRUFBRSxLQURGO0FBRUprQixVQUFBQSxLQUFLLEVBQUU7QUFDSE4sWUFBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsWUFBQUEsUUFBUSxFQUFFO0FBRlA7QUFGSCxTQWhCTDtBQXVCSEMsUUFBQUEsVUFBVSxFQUFFO0FBQ1JwQixVQUFBQSxJQUFJLEVBQUUsS0FERTtBQUVScUIsVUFBQUEsUUFBUSxFQUFFLE9BRkY7QUFHUlosVUFBQUEsTUFBTSxFQUFFO0FBQ0p2QixZQUFBQSxLQUFLLEVBQUVzRCxXQURIO0FBRUo3QixZQUFBQSxLQUFLLEVBQUUsQ0FGSDtBQUdKVyxZQUFBQSxTQUFTLEVBQUU7QUFIUDtBQUhBLFNBdkJUO0FBZ0NIQyxRQUFBQSxPQUFPLEVBQUU7QUFDTHJCLFVBQUFBLE9BQU8sRUFBRSxJQURKO0FBRUxzQixVQUFBQSxTQUFTLEVBQUVDLFNBRk47QUFHTEMsVUFBQUEsT0FBTyxFQUFFLENBSEo7QUFJTFIsVUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFlBQUFBLFFBQVEsRUFBRTtBQURQO0FBSkY7QUFoQ04sT0ExQ0c7QUFtRlZRLE1BQUFBLEtBQUssRUFBRTtBQUNIVSxRQUFBQSxDQUFDLEVBQUUsQ0FEQTtBQUVIeUMsUUFBQUEsT0FBTyxFQUFFLENBRk47QUFHSHBELFFBQUFBLE9BQU8sRUFBRSxDQUhOO0FBSUhzQyxRQUFBQSxPQUFPLEVBQUU7QUFDTEksVUFBQUEsSUFBSSxFQUFFLENBREQ7QUFFTEYsVUFBQUEsS0FBSyxFQUFFO0FBRkYsU0FKTjtBQVFIakQsUUFBQUEsTUFBTSxFQUFFO0FBQ0pqQixVQUFBQSxJQUFJLEVBQUUsS0FERjtBQUVKa0IsVUFBQUEsS0FBSyxFQUFFO0FBQ0hOLFlBQUFBLE1BQU0sRUFBRXhCLFVBREw7QUFFSCtCLFlBQUFBLFFBQVEsRUFBRTtBQUZQO0FBRkg7QUFSTCxPQW5GRztBQW1HVlcsTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxNQUFNLEVBQUU7QUFDSmxDLFlBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxZQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURKLFNBREo7QUFPSkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hGLFVBQUFBLE1BQU0sRUFBRTtBQUNKbEMsWUFBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLFlBQUFBLEtBQUssRUFBRTtBQUZIO0FBREwsU0FQSDtBQWFKRSxRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsZ0NBQWdDLEVBQUUsS0FEOUI7QUFFSkosVUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxZQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsWUFBQUEsS0FBSyxFQUFFO0FBRkg7QUFGSjtBQWJKLE9BbkdFO0FBd0hWVixNQUFBQSxPQUFPLEVBQUU7QUFDTEwsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFFBQVEsRUFBRTtBQURQLFNBREY7QUFJTGtCLFFBQUFBLENBQUMsRUFBRTtBQUNDYixVQUFBQSxTQUFTLEVBQUUsbUJBQVVjLEdBQVYsRUFBZTtBQUN0QixtQkFBTyxNQUFNQSxHQUFOLEdBQVksWUFBbkI7QUFDSDtBQUhGO0FBSkUsT0F4SEM7QUFrSVYxQixNQUFBQSxNQUFNLEVBQUUsQ0FBQzJELFdBQUQsRUFBY0UsV0FBZCxFQUEyQkUsV0FBM0IsQ0FsSUU7QUFtSVZ0QixNQUFBQSxJQUFJLEVBQUU7QUFDRk4sUUFBQUEsV0FBVyxFQUFFQSxXQURYO0FBRUZPLFFBQUFBLGVBQWUsRUFBRSxDQUZmO0FBR0ZVLFFBQUFBLE9BQU8sRUFBRTtBQUNMQyxVQUFBQSxHQUFHLEVBQUUsQ0FEQTtBQUVMRSxVQUFBQSxNQUFNLEVBQUUsQ0FGSDtBQUdMQyxVQUFBQSxJQUFJLEVBQUUsQ0FIRDtBQUlMRixVQUFBQSxLQUFLLEVBQUU7QUFKRjtBQUhQLE9BbklJO0FBNklWM0IsTUFBQUEsT0FBTyxFQUFFO0FBQ0wzQixRQUFBQSxNQUFNLEVBQUUsQ0FBQzBELE1BQUQsRUFBU0UsTUFBVCxFQUFpQkUsTUFBakIsQ0FESDtBQUVMbEMsUUFBQUEsV0FBVyxFQUFFLENBQUM4QixNQUFELEVBQVNFLE1BQVQsRUFBaUJFLE1BQWpCLENBRlI7QUFHTGpDLFFBQUFBLFdBQVcsRUFBRTtBQUhSO0FBN0lDLEtBQWQ7QUFvSkEsUUFBSTdDLEtBQUssR0FBRyxJQUFJOEMsVUFBSixDQUFlN0QsT0FBZixFQUF3QlcsT0FBeEIsQ0FBWjtBQUNBSSxJQUFBQSxLQUFLLENBQUMrQyxNQUFOO0FBQ0gsR0E1S0QsQ0Foc0N3QixDQTgyQ3hCOzs7QUFDQSxNQUFJb0MsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFXO0FBQzlCLFFBQUl4RyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQWI7QUFFQSxRQUFJUyxLQUFKO0FBQ0EsUUFBSXNELFdBQUo7QUFDQSxRQUFJMUQsTUFBSjtBQUNBLFFBQUlNLFVBQVUsR0FBR0osTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixlQUEzQixDQUFqQjtBQUNBLFFBQUkwRCxXQUFXLEdBQUcvRCxNQUFNLENBQUNLLG1CQUFQLENBQTJCLGVBQTNCLENBQWxCO0FBQ0EsUUFBSUcsT0FBSjtBQUNBLFFBQUlJLEtBQUo7QUFFQSxPQUFHbEIsS0FBSCxDQUFTQyxJQUFULENBQWNKLE1BQWQsRUFBc0JLLEdBQXRCLENBQTBCLFVBQVNDLE9BQVQsRUFBa0I7QUFDeENDLE1BQUFBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLEdBQVAsQ0FBV0osT0FBWCxFQUFvQixRQUFwQixDQUFELENBQWpCO0FBQ0FLLE1BQUFBLEtBQUssR0FBR0YsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixVQUFVUixPQUFPLENBQUNNLFlBQVIsQ0FBcUIsZUFBckIsQ0FBckMsQ0FBUjtBQUNBcUQsTUFBQUEsV0FBVyxHQUFHeEQsTUFBTSxDQUFDZ0csV0FBUCxDQUFtQjlGLEtBQW5CLEVBQTBCLEVBQTFCLENBQWQ7QUFFQU0sTUFBQUEsT0FBTyxHQUFHO0FBQ05DLFFBQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0xDLFVBQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLFVBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekI7QUFGRCxTQUFELENBREY7QUFLTkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFVBQVUsRUFBRSxTQURUO0FBRUhDLFVBQUFBLElBQUksRUFBRSxNQUZIO0FBR0hoQixVQUFBQSxNQUFNLEVBQUVBLE1BSEw7QUFJSGlCLFVBQUFBLE9BQU8sRUFBRTtBQUNMQyxZQUFBQSxJQUFJLEVBQUU7QUFERCxXQUpOO0FBT0hDLFVBQUFBLElBQUksRUFBRTtBQUNGQyxZQUFBQSxPQUFPLEVBQUU7QUFEUCxXQVBIO0FBVUhDLFVBQUFBLFNBQVMsRUFBRTtBQUNQRCxZQUFBQSxPQUFPLEVBQUU7QUFERixXQVZSO0FBYUgrRSxVQUFBQSxVQUFVLEVBQUU7QUFDUi9FLFlBQUFBLE9BQU8sRUFBRSxJQUREO0FBRVJnRixZQUFBQSxlQUFlLEVBQUV6RCxTQUZUO0FBR1J3QyxZQUFBQSxHQUFHLEVBQUUsQ0FIRztBQUlSRyxZQUFBQSxJQUFJLEVBQUUsQ0FKRTtBQUtSZSxZQUFBQSxJQUFJLEVBQUUsQ0FMRTtBQU1SakcsWUFBQUEsS0FBSyxFQUFFc0QsV0FOQztBQU9SaEMsWUFBQUEsT0FBTyxFQUFFO0FBUEQ7QUFiVCxTQUxEO0FBNEJOSixRQUFBQSxXQUFXLEVBQUUsRUE1QlA7QUE2Qk5DLFFBQUFBLE1BQU0sRUFBRTtBQUNKTCxVQUFBQSxJQUFJLEVBQUU7QUFERixTQTdCRjtBQWdDTk0sUUFBQUEsVUFBVSxFQUFFO0FBQ1JKLFVBQUFBLE9BQU8sRUFBRTtBQURELFNBaENOO0FBbUNOSyxRQUFBQSxJQUFJLEVBQUU7QUFDRlQsVUFBQUEsSUFBSSxFQUFFLE9BREo7QUFFRlUsVUFBQUEsT0FBTyxFQUFFO0FBRlAsU0FuQ0E7QUF1Q05DLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxLQUFLLEVBQUUsUUFESDtBQUVKVixVQUFBQSxJQUFJLEVBQUUsSUFGRjtBQUdKVyxVQUFBQSxLQUFLLEVBQUUsQ0FISDtBQUlKQyxVQUFBQSxNQUFNLEVBQUUsQ0FBQzRCLFdBQUQ7QUFKSixTQXZDRjtBQTZDTjNCLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxVQUFVLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsQ0FEVDtBQUVIQyxVQUFBQSxVQUFVLEVBQUU7QUFDUmYsWUFBQUEsSUFBSSxFQUFFO0FBREUsV0FGVDtBQUtIZ0IsVUFBQUEsU0FBUyxFQUFFO0FBQ1BoQixZQUFBQSxJQUFJLEVBQUU7QUFEQyxXQUxSO0FBUUhpQixVQUFBQSxNQUFNLEVBQUU7QUFDSmpCLFlBQUFBLElBQUksRUFBRSxLQURGO0FBRUprQixZQUFBQSxLQUFLLEVBQUU7QUFDSE4sY0FBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsY0FBQUEsUUFBUSxFQUFFO0FBRlA7QUFGSCxXQVJMO0FBZUhDLFVBQUFBLFVBQVUsRUFBRTtBQUNScEIsWUFBQUEsSUFBSSxFQUFFLEtBREU7QUFFUnFCLFlBQUFBLFFBQVEsRUFBRSxPQUZGO0FBR1JaLFlBQUFBLE1BQU0sRUFBRTtBQUNKdkIsY0FBQUEsS0FBSyxFQUFFNkQsV0FESDtBQUVKcEMsY0FBQUEsS0FBSyxFQUFFLENBRkg7QUFHSlcsY0FBQUEsU0FBUyxFQUFFO0FBSFA7QUFIQTtBQWZULFNBN0NEO0FBc0VOSyxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsR0FBRyxFQUFFLENBREY7QUFFSEMsVUFBQUEsR0FBRyxFQUFFLEVBRkY7QUFHSFosVUFBQUEsTUFBTSxFQUFFO0FBQ0pqQixZQUFBQSxJQUFJLEVBQUUsS0FERjtBQUVKa0IsWUFBQUEsS0FBSyxFQUFFO0FBQ0hOLGNBQUFBLE1BQU0sRUFBRXhCLFVBREw7QUFFSCtCLGNBQUFBLFFBQVEsRUFBRTtBQUZQO0FBRkg7QUFITCxTQXRFRDtBQWlGTlcsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLE1BQU0sRUFBRTtBQUNKQyxZQUFBQSxNQUFNLEVBQUU7QUFDSmxDLGNBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxjQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURKLFdBREo7QUFPSkMsVUFBQUEsS0FBSyxFQUFFO0FBQ0hGLFlBQUFBLE1BQU0sRUFBRTtBQUNKbEMsY0FBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLGNBQUFBLEtBQUssRUFBRTtBQUZIO0FBREwsV0FQSDtBQWFKRSxVQUFBQSxNQUFNLEVBQUU7QUFDSkMsWUFBQUEsZ0NBQWdDLEVBQUUsS0FEOUI7QUFFSkosWUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxjQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsY0FBQUEsS0FBSyxFQUFFO0FBRkg7QUFGSjtBQWJKLFNBakZGO0FBc0dOVixRQUFBQSxPQUFPLEVBQUU7QUFDTEwsVUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFlBQUFBLFFBQVEsRUFBRTtBQURQLFdBREY7QUFJTGtCLFVBQUFBLENBQUMsRUFBRTtBQUNDYixZQUFBQSxTQUFTLEVBQUUsbUJBQVVjLEdBQVYsRUFBZTtBQUN0QixxQkFBTyxNQUFNQSxHQUFOLEdBQVksWUFBbkI7QUFDSDtBQUhGLFdBSkU7QUFTTDhDLFVBQUFBLE1BQU0sRUFBRTtBQUNKcEYsWUFBQUEsSUFBSSxFQUFFO0FBREY7QUFUSCxTQXRHSDtBQW1ITlksUUFBQUEsTUFBTSxFQUFFLENBQUMsYUFBRCxDQW5IRjtBQW9ITjJCLFFBQUFBLE9BQU8sRUFBRTtBQUNMM0IsVUFBQUEsTUFBTSxFQUFFLENBQUMxQixLQUFELENBREg7QUFFTHNELFVBQUFBLFdBQVcsRUFBRSxDQUFDQSxXQUFELENBRlI7QUFHTEMsVUFBQUEsV0FBVyxFQUFFO0FBSFI7QUFwSEgsT0FBVjtBQTJIQTdDLE1BQUFBLEtBQUssR0FBRyxJQUFJOEMsVUFBSixDQUFlN0QsT0FBZixFQUF3QlcsT0FBeEIsQ0FBUjtBQUNBSSxNQUFBQSxLQUFLLENBQUMrQyxNQUFOO0FBQ0gsS0FsSUQ7QUFtSUgsR0E5SUQ7O0FBZ0pBLE1BQUkwQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQVc7QUFDOUIsUUFBSTlHLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix1QkFBMUIsQ0FBYjtBQUVBLE9BQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjSixNQUFkLEVBQXNCSyxHQUF0QixDQUEwQixVQUFTQyxPQUFULEVBQWtCO0FBQ3hDLFVBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLEdBQVAsQ0FBV0osT0FBWCxFQUFvQixRQUFwQixDQUFELENBQXJCOztBQUVBLFVBQUssQ0FBQ0EsT0FBTixFQUFnQjtBQUNaO0FBQ0g7O0FBRUQsVUFBSUssS0FBSyxHQUFHTCxPQUFPLENBQUNNLFlBQVIsQ0FBcUIscUJBQXJCLENBQVo7QUFFQSxVQUFJQyxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsVUFBVSxVQUFyQyxDQUFqQjtBQUNBLFVBQUltRCxXQUFXLEdBQUd4RCxNQUFNLENBQUNLLG1CQUFQLENBQTJCLFVBQVUsVUFBckMsQ0FBbEI7QUFDQSxVQUFJQyxTQUFTLEdBQUdOLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsVUFBVUgsS0FBckMsQ0FBaEI7QUFDQSxVQUFJSyxVQUFVLEdBQUdQLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsZ0JBQWdCSCxLQUEzQyxDQUFqQjtBQUVBLFVBQUlNLE9BQU8sR0FBRztBQUNWQyxRQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUNMQyxVQUFBQSxJQUFJLEVBQUUsWUFERDtBQUVMQyxVQUFBQSxJQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCO0FBRkQsU0FBRCxDQURFO0FBS1ZDLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxVQUFVLEVBQUUsU0FEVDtBQUVIQyxVQUFBQSxJQUFJLEVBQUUsTUFGSDtBQUdIaEIsVUFBQUEsTUFBTSxFQUFFQSxNQUhMO0FBSUhpQixVQUFBQSxPQUFPLEVBQUU7QUFDTEMsWUFBQUEsSUFBSSxFQUFFO0FBREQsV0FKTjtBQU9IQyxVQUFBQSxJQUFJLEVBQUU7QUFDRkMsWUFBQUEsT0FBTyxFQUFFO0FBRFAsV0FQSDtBQVVIQyxVQUFBQSxTQUFTLEVBQUU7QUFDUEQsWUFBQUEsT0FBTyxFQUFFO0FBREY7QUFWUixTQUxHO0FBbUJWRSxRQUFBQSxXQUFXLEVBQUUsRUFuQkg7QUFvQlZDLFFBQUFBLE1BQU0sRUFBRTtBQUNKTCxVQUFBQSxJQUFJLEVBQUU7QUFERixTQXBCRTtBQXVCVk0sUUFBQUEsVUFBVSxFQUFFO0FBQ1JKLFVBQUFBLE9BQU8sRUFBRTtBQURELFNBdkJGO0FBMEJWSyxRQUFBQSxJQUFJLEVBQUU7QUFDRlQsVUFBQUEsSUFBSSxFQUFFLE9BREo7QUFFRlUsVUFBQUEsT0FBTyxFQUFFO0FBRlAsU0ExQkk7QUE4QlZDLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxLQUFLLEVBQUUsUUFESDtBQUVKVixVQUFBQSxJQUFJLEVBQUUsSUFGRjtBQUdKVyxVQUFBQSxLQUFLLEVBQUUsQ0FISDtBQUlKQyxVQUFBQSxNQUFNLEVBQUUsQ0FBQ3RCLFNBQUQ7QUFKSixTQTlCRTtBQW9DVnVCLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxVQUFVLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsQ0FEVDtBQUVIQyxVQUFBQSxVQUFVLEVBQUU7QUFDUmYsWUFBQUEsSUFBSSxFQUFFO0FBREUsV0FGVDtBQUtIZ0IsVUFBQUEsU0FBUyxFQUFFO0FBQ1BoQixZQUFBQSxJQUFJLEVBQUU7QUFEQyxXQUxSO0FBUUhpQixVQUFBQSxNQUFNLEVBQUU7QUFDSmpCLFlBQUFBLElBQUksRUFBRSxLQURGO0FBRUprQixZQUFBQSxLQUFLLEVBQUU7QUFDSE4sY0FBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsY0FBQUEsUUFBUSxFQUFFO0FBRlA7QUFGSCxXQVJMO0FBZUhDLFVBQUFBLFVBQVUsRUFBRTtBQUNScEIsWUFBQUEsSUFBSSxFQUFFLEtBREU7QUFFUnFCLFlBQUFBLFFBQVEsRUFBRSxPQUZGO0FBR1JaLFlBQUFBLE1BQU0sRUFBRTtBQUNKdkIsY0FBQUEsS0FBSyxFQUFFc0QsV0FESDtBQUVKN0IsY0FBQUEsS0FBSyxFQUFFLENBRkg7QUFHSlcsY0FBQUEsU0FBUyxFQUFFO0FBSFA7QUFIQSxXQWZUO0FBd0JIQyxVQUFBQSxPQUFPLEVBQUU7QUFDTHJCLFlBQUFBLE9BQU8sRUFBRSxJQURKO0FBRUxzQixZQUFBQSxTQUFTLEVBQUVDLFNBRk47QUFHTEMsWUFBQUEsT0FBTyxFQUFFLENBSEo7QUFJTFIsWUFBQUEsS0FBSyxFQUFFO0FBQ0hDLGNBQUFBLFFBQVEsRUFBRTtBQURQO0FBSkY7QUF4Qk4sU0FwQ0c7QUFxRVZRLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxHQUFHLEVBQUUsQ0FERjtBQUVIQyxVQUFBQSxHQUFHLEVBQUUsRUFGRjtBQUdIWixVQUFBQSxNQUFNLEVBQUU7QUFDSmpCLFlBQUFBLElBQUksRUFBRSxLQURGO0FBRUprQixZQUFBQSxLQUFLLEVBQUU7QUFDSE4sY0FBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsY0FBQUEsUUFBUSxFQUFFO0FBRlA7QUFGSDtBQUhMLFNBckVHO0FBZ0ZWVyxRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFlBQUFBLE1BQU0sRUFBRTtBQUNKbEMsY0FBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLGNBQUFBLEtBQUssRUFBRTtBQUZIO0FBREosV0FESjtBQU9KQyxVQUFBQSxLQUFLLEVBQUU7QUFDSEYsWUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxjQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsY0FBQUEsS0FBSyxFQUFFO0FBRkg7QUFETCxXQVBIO0FBYUpFLFVBQUFBLE1BQU0sRUFBRTtBQUNKQyxZQUFBQSxnQ0FBZ0MsRUFBRSxLQUQ5QjtBQUVKSixZQUFBQSxNQUFNLEVBQUU7QUFDSmxDLGNBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxjQUFBQSxLQUFLLEVBQUU7QUFGSDtBQUZKO0FBYkosU0FoRkU7QUFxR1ZWLFFBQUFBLE9BQU8sRUFBRTtBQUNMTCxVQUFBQSxLQUFLLEVBQUU7QUFDSEMsWUFBQUEsUUFBUSxFQUFFO0FBRFAsV0FERjtBQUlMa0IsVUFBQUEsQ0FBQyxFQUFFO0FBQ0NiLFlBQUFBLFNBQVMsRUFBRSxtQkFBVWMsR0FBVixFQUFlO0FBQ3RCLHFCQUFPLE1BQU1BLEdBQU4sR0FBWSxZQUFuQjtBQUNIO0FBSEY7QUFKRSxTQXJHQztBQStHVjFCLFFBQUFBLE1BQU0sRUFBRSxDQUFDckIsVUFBRCxDQS9HRTtBQWdIVmdELFFBQUFBLE9BQU8sRUFBRTtBQUNMM0IsVUFBQUEsTUFBTSxFQUFFLENBQUNyQixVQUFELENBREg7QUFFTGlELFVBQUFBLFdBQVcsRUFBRSxDQUFDbEQsU0FBRCxDQUZSO0FBR0xtRCxVQUFBQSxXQUFXLEVBQUU7QUFIUjtBQWhIQyxPQUFkO0FBdUhBLFVBQUk3QyxLQUFLLEdBQUcsSUFBSThDLFVBQUosQ0FBZTdELE9BQWYsRUFBd0JXLE9BQXhCLENBQVo7QUFDQUksTUFBQUEsS0FBSyxDQUFDK0MsTUFBTjtBQUNILEtBdklEO0FBd0lILEdBM0lEOztBQTZJQSxNQUFJMkMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFXO0FBQzlCLFFBQUkvRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQWI7QUFFQSxPQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0osTUFBZCxFQUFzQkssR0FBdEIsQ0FBMEIsVUFBU0MsT0FBVCxFQUFrQjtBQUN4QyxVQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFQLENBQVdKLE9BQVgsRUFBb0IsUUFBcEIsQ0FBRCxDQUFyQjs7QUFFQSxVQUFLLENBQUNBLE9BQU4sRUFBZ0I7QUFDWjtBQUNIOztBQUVELFVBQUlLLEtBQUssR0FBR0wsT0FBTyxDQUFDTSxZQUFSLENBQXFCLHFCQUFyQixDQUFaO0FBRUEsVUFBSUcsU0FBUyxHQUFHTixNQUFNLENBQUNLLG1CQUFQLENBQTJCLFVBQVVILEtBQXJDLENBQWhCO0FBQ0EsVUFBSUssVUFBVSxHQUFHUCxNQUFNLENBQUNLLG1CQUFQLENBQTJCLGdCQUFnQkgsS0FBM0MsQ0FBakI7QUFDQSxVQUFJRSxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsVUFBVSxVQUFyQyxDQUFqQjtBQUVBLFVBQUlHLE9BQU8sR0FBRztBQUNWQyxRQUFBQSxNQUFNLEVBQUUsQ0FBQyxFQUFELENBREU7QUFFVkcsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFVBQVUsRUFBRSxTQURUO0FBRUhmLFVBQUFBLE1BQU0sRUFBRUEsTUFGTDtBQUdIZ0IsVUFBQUEsSUFBSSxFQUFFO0FBSEgsU0FGRztBQU9WTSxRQUFBQSxXQUFXLEVBQUU7QUFDVG1GLFVBQUFBLFNBQVMsRUFBRTtBQUNQQyxZQUFBQSxNQUFNLEVBQUU7QUFDSkMsY0FBQUEsTUFBTSxFQUFFLENBREo7QUFFSkMsY0FBQUEsSUFBSSxFQUFFO0FBRkYsYUFERDtBQUtQcEYsWUFBQUEsVUFBVSxFQUFFO0FBQ1JxRixjQUFBQSxNQUFNLEVBQUUsUUFEQTtBQUVSakcsY0FBQUEsSUFBSSxFQUFFO0FBQ0ZNLGdCQUFBQSxJQUFJLEVBQUUsS0FESjtBQUVGNEYsZ0JBQUFBLFVBQVUsRUFBRTtBQUZWLGVBRkU7QUFNUjNELGNBQUFBLEtBQUssRUFBRTtBQUNIL0MsZ0JBQUFBLEtBQUssRUFBRUUsVUFESjtBQUVIK0IsZ0JBQUFBLFFBQVEsRUFBRSxNQUZQO0FBR0h5RSxnQkFBQUEsVUFBVSxFQUFFLEtBSFQ7QUFJSGxFLGdCQUFBQSxPQUFPLEVBQUUsRUFKTjtBQUtIMUIsZ0JBQUFBLElBQUksRUFBRSxJQUxIO0FBTUh3QixnQkFBQUEsU0FBUyxFQUFFLG1CQUFVYyxHQUFWLEVBQWU7QUFDdEIseUJBQU9BLEdBQUcsR0FBRyxHQUFiO0FBQ0g7QUFSRTtBQU5DLGFBTEw7QUFzQlB1RCxZQUFBQSxLQUFLLEVBQUU7QUFDSEMsY0FBQUEsVUFBVSxFQUFFdkcsVUFEVDtBQUVIa0QsY0FBQUEsV0FBVyxFQUFFO0FBRlY7QUF0QkE7QUFERixTQVBIO0FBb0NWN0IsUUFBQUEsTUFBTSxFQUFFLENBQUN0QixTQUFELENBcENFO0FBcUNWbUIsUUFBQUEsTUFBTSxFQUFFO0FBQ0pzRixVQUFBQSxPQUFPLEVBQUU7QUFETCxTQXJDRTtBQXdDVjlFLFFBQUFBLE1BQU0sRUFBRSxDQUFDLFVBQUQ7QUF4Q0UsT0FBZDtBQTJDQSxVQUFJckIsS0FBSyxHQUFHLElBQUk4QyxVQUFKLENBQWU3RCxPQUFmLEVBQXdCVyxPQUF4QixDQUFaO0FBQ0FJLE1BQUFBLEtBQUssQ0FBQytDLE1BQU47QUFDSCxLQTFERDtBQTJESCxHQTlERDs7QUFnRUEsTUFBSXFELGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBVztBQUM5QixRQUFJekgsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLHVCQUExQixDQUFiO0FBRUEsT0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNKLE1BQWQsRUFBc0JLLEdBQXRCLENBQTBCLFVBQVNDLE9BQVQsRUFBa0I7QUFDeEMsVUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXSixPQUFYLEVBQW9CLFFBQXBCLENBQUQsQ0FBckI7O0FBRUEsVUFBSyxDQUFDQSxPQUFOLEVBQWdCO0FBQ1o7QUFDSDs7QUFFRCxVQUFJSyxLQUFLLEdBQUdMLE9BQU8sQ0FBQ00sWUFBUixDQUFxQixxQkFBckIsQ0FBWjtBQUVBLFVBQUlDLFVBQVUsR0FBR0osTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixVQUFVLFVBQXJDLENBQWpCO0FBQ0EsVUFBSW1ELFdBQVcsR0FBR3hELE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsVUFBVSxVQUFyQyxDQUFsQjtBQUNBLFVBQUlDLFNBQVMsR0FBR04sTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixVQUFVSCxLQUFyQyxDQUFoQjtBQUNBLFVBQUlLLFVBQVUsR0FBR1AsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixnQkFBZ0JILEtBQTNDLENBQWpCO0FBRUEsVUFBSU0sT0FBTyxHQUFHO0FBQ1ZDLFFBQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0xDLFVBQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLFVBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckI7QUFGRCxTQUFELENBREU7QUFLVkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFVBQVUsRUFBRSxTQURUO0FBRUhDLFVBQUFBLElBQUksRUFBRSxNQUZIO0FBR0hoQixVQUFBQSxNQUFNLEVBQUVBLE1BSEw7QUFJSGlCLFVBQUFBLE9BQU8sRUFBRTtBQUNMQyxZQUFBQSxJQUFJLEVBQUU7QUFERCxXQUpOO0FBT0hDLFVBQUFBLElBQUksRUFBRTtBQUNGQyxZQUFBQSxPQUFPLEVBQUU7QUFEUCxXQVBIO0FBVUhDLFVBQUFBLFNBQVMsRUFBRTtBQUNQRCxZQUFBQSxPQUFPLEVBQUU7QUFERjtBQVZSLFNBTEc7QUFtQlZFLFFBQUFBLFdBQVcsRUFBRSxFQW5CSDtBQW9CVkMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pMLFVBQUFBLElBQUksRUFBRTtBQURGLFNBcEJFO0FBdUJWTSxRQUFBQSxVQUFVLEVBQUU7QUFDUkosVUFBQUEsT0FBTyxFQUFFO0FBREQsU0F2QkY7QUEwQlZLLFFBQUFBLElBQUksRUFBRTtBQUNGVCxVQUFBQSxJQUFJLEVBQUUsT0FESjtBQUVGVSxVQUFBQSxPQUFPLEVBQUU7QUFGUCxTQTFCSTtBQThCVnlGLFFBQUFBLEtBQUssRUFBRTtBQUNIbkcsVUFBQUEsSUFBSSxFQUFFLFVBREg7QUFFSFUsVUFBQUEsT0FBTyxFQUFFLENBRk47QUFHSDBGLFVBQUFBLFFBQVEsRUFBRTtBQUNOcEcsWUFBQUEsSUFBSSxFQUFFLFVBREE7QUFFTnFHLFlBQUFBLGNBQWMsRUFBRSxHQUZWO0FBR05DLFlBQUFBLGdCQUFnQixFQUFFM0UsU0FIWjtBQUlONEUsWUFBQUEsYUFBYSxFQUFFLElBSlQ7QUFLTkMsWUFBQUEsV0FBVyxFQUFFLENBTFA7QUFNTkMsWUFBQUEsU0FBUyxFQUFFLEtBTkw7QUFPTkMsWUFBQUEsS0FBSyxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULENBUEQ7QUFRTkMsWUFBQUEsVUFBVSxFQUFFO0FBUk47QUFIUCxTQTlCRztBQTRDVmhHLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxLQUFLLEVBQUUsUUFESDtBQUVKVixVQUFBQSxJQUFJLEVBQUUsSUFGRjtBQUdKVyxVQUFBQSxLQUFLLEVBQUUsQ0FISDtBQUlKQyxVQUFBQSxNQUFNLEVBQUUsQ0FBQ3RCLFNBQUQ7QUFKSixTQTVDRTtBQWtEVnVCLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxVQUFVLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsQ0FEVDtBQUVIQyxVQUFBQSxVQUFVLEVBQUU7QUFDUmYsWUFBQUEsSUFBSSxFQUFFO0FBREUsV0FGVDtBQUtIZ0IsVUFBQUEsU0FBUyxFQUFFO0FBQ1BoQixZQUFBQSxJQUFJLEVBQUU7QUFEQyxXQUxSO0FBUUhpQixVQUFBQSxNQUFNLEVBQUU7QUFDSmpCLFlBQUFBLElBQUksRUFBRSxLQURGO0FBRUprQixZQUFBQSxLQUFLLEVBQUU7QUFDSE4sY0FBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsY0FBQUEsUUFBUSxFQUFFO0FBRlA7QUFGSCxXQVJMO0FBZUhDLFVBQUFBLFVBQVUsRUFBRTtBQUNScEIsWUFBQUEsSUFBSSxFQUFFLEtBREU7QUFFUnFCLFlBQUFBLFFBQVEsRUFBRSxPQUZGO0FBR1JaLFlBQUFBLE1BQU0sRUFBRTtBQUNKdkIsY0FBQUEsS0FBSyxFQUFFc0QsV0FESDtBQUVKN0IsY0FBQUEsS0FBSyxFQUFFLENBRkg7QUFHSlcsY0FBQUEsU0FBUyxFQUFFO0FBSFA7QUFIQSxXQWZUO0FBd0JIQyxVQUFBQSxPQUFPLEVBQUU7QUFDTHJCLFlBQUFBLE9BQU8sRUFBRSxJQURKO0FBRUxzQixZQUFBQSxTQUFTLEVBQUVDLFNBRk47QUFHTEMsWUFBQUEsT0FBTyxFQUFFLENBSEo7QUFJTFIsWUFBQUEsS0FBSyxFQUFFO0FBQ0hDLGNBQUFBLFFBQVEsRUFBRTtBQURQO0FBSkY7QUF4Qk4sU0FsREc7QUFtRlZRLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxHQUFHLEVBQUUsQ0FERjtBQUVIQyxVQUFBQSxHQUFHLEVBQUUsRUFGRjtBQUdIWixVQUFBQSxNQUFNLEVBQUU7QUFDSmpCLFlBQUFBLElBQUksRUFBRSxLQURGO0FBRUprQixZQUFBQSxLQUFLLEVBQUU7QUFDSE4sY0FBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsY0FBQUEsUUFBUSxFQUFFO0FBRlA7QUFGSDtBQUhMLFNBbkZHO0FBOEZWVyxRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFlBQUFBLE1BQU0sRUFBRTtBQUNKbEMsY0FBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLGNBQUFBLEtBQUssRUFBRTtBQUZIO0FBREosV0FESjtBQU9KQyxVQUFBQSxLQUFLLEVBQUU7QUFDSEYsWUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxjQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsY0FBQUEsS0FBSyxFQUFFO0FBRkg7QUFETCxXQVBIO0FBYUpFLFVBQUFBLE1BQU0sRUFBRTtBQUNKQyxZQUFBQSxnQ0FBZ0MsRUFBRSxLQUQ5QjtBQUVKSixZQUFBQSxNQUFNLEVBQUU7QUFDSmxDLGNBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxjQUFBQSxLQUFLLEVBQUU7QUFGSDtBQUZKO0FBYkosU0E5RkU7QUFtSFZWLFFBQUFBLE9BQU8sRUFBRTtBQUNMTCxVQUFBQSxLQUFLLEVBQUU7QUFDSEMsWUFBQUEsUUFBUSxFQUFFO0FBRFAsV0FERjtBQUlMa0IsVUFBQUEsQ0FBQyxFQUFFO0FBQ0NiLFlBQUFBLFNBQVMsRUFBRSxtQkFBVWMsR0FBVixFQUFlO0FBQ3RCLHFCQUFPLE1BQU1BLEdBQU4sR0FBWSxZQUFuQjtBQUNIO0FBSEY7QUFKRSxTQW5IQztBQTZIVjFCLFFBQUFBLE1BQU0sRUFBRSxDQUFDckIsVUFBRCxDQTdIRTtBQThIVmdELFFBQUFBLE9BQU8sRUFBRTtBQUNMM0IsVUFBQUEsTUFBTSxFQUFFLENBQUNyQixVQUFELENBREg7QUFFTGlELFVBQUFBLFdBQVcsRUFBRSxDQUFDbEQsU0FBRCxDQUZSO0FBR0xtRCxVQUFBQSxXQUFXLEVBQUU7QUFIUjtBQTlIQyxPQUFkO0FBcUlBLFVBQUk3QyxLQUFLLEdBQUcsSUFBSThDLFVBQUosQ0FBZTdELE9BQWYsRUFBd0JXLE9BQXhCLENBQVo7QUFDQUksTUFBQUEsS0FBSyxDQUFDK0MsTUFBTjtBQUNILEtBckpEO0FBc0pILEdBekpEOztBQTJKQSxNQUFJK0QsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFXO0FBQzlCLFFBQUluSSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQWI7QUFFQSxPQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0osTUFBZCxFQUFzQkssR0FBdEIsQ0FBMEIsVUFBU0MsT0FBVCxFQUFrQjtBQUN4QyxVQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFQLENBQVdKLE9BQVgsRUFBb0IsUUFBcEIsQ0FBRCxDQUFyQjs7QUFFQSxVQUFLLENBQUNBLE9BQU4sRUFBZ0I7QUFDWjtBQUNIOztBQUVELFVBQUlLLEtBQUssR0FBR0wsT0FBTyxDQUFDTSxZQUFSLENBQXFCLHFCQUFyQixDQUFaO0FBRUEsVUFBSUMsVUFBVSxHQUFHSixNQUFNLENBQUNLLG1CQUFQLENBQTJCLFVBQVUsVUFBckMsQ0FBakI7QUFDQSxVQUFJbUQsV0FBVyxHQUFHeEQsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixVQUFVLFVBQXJDLENBQWxCO0FBQ0EsVUFBSUMsU0FBUyxHQUFHTixNQUFNLENBQUNLLG1CQUFQLENBQTJCLFVBQVVILEtBQXJDLENBQWhCO0FBQ0EsVUFBSUssVUFBVSxHQUFHUCxNQUFNLENBQUNLLG1CQUFQLENBQTJCLGdCQUFnQkgsS0FBM0MsQ0FBakI7QUFFQSxVQUFJTSxPQUFPLEdBQUc7QUFDVkMsUUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDTEMsVUFBQUEsSUFBSSxFQUFFLFlBREQ7QUFFTEMsVUFBQUEsSUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQjtBQUZELFNBQUQsQ0FERTtBQUtWQyxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsVUFBVSxFQUFFLFNBRFQ7QUFFSEMsVUFBQUEsSUFBSSxFQUFFLE1BRkg7QUFHSGhCLFVBQUFBLE1BQU0sRUFBRUEsTUFITDtBQUlIaUIsVUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFlBQUFBLElBQUksRUFBRTtBQURELFdBSk47QUFPSEMsVUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFlBQUFBLE9BQU8sRUFBRTtBQURQLFdBUEg7QUFVSEMsVUFBQUEsU0FBUyxFQUFFO0FBQ1BELFlBQUFBLE9BQU8sRUFBRTtBQURGO0FBVlIsU0FMRztBQW1CVkUsUUFBQUEsV0FBVyxFQUFFLEVBbkJIO0FBb0JWQyxRQUFBQSxNQUFNLEVBQUU7QUFDSkwsVUFBQUEsSUFBSSxFQUFFO0FBREYsU0FwQkU7QUF1QlZNLFFBQUFBLFVBQVUsRUFBRTtBQUNSSixVQUFBQSxPQUFPLEVBQUU7QUFERCxTQXZCRjtBQTBCVkssUUFBQUEsSUFBSSxFQUFFO0FBQ0ZULFVBQUFBLElBQUksRUFBRSxPQURKO0FBRUZVLFVBQUFBLE9BQU8sRUFBRTtBQUZQLFNBMUJJO0FBOEJWQyxRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsS0FBSyxFQUFFLFFBREg7QUFFSlYsVUFBQUEsSUFBSSxFQUFFLElBRkY7QUFHSlcsVUFBQUEsS0FBSyxFQUFFLENBSEg7QUFJSkMsVUFBQUEsTUFBTSxFQUFFLENBQUN0QixTQUFEO0FBSkosU0E5QkU7QUFvQ1Z1QixRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsVUFBVSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLENBRFQ7QUFFSEMsVUFBQUEsVUFBVSxFQUFFO0FBQ1JmLFlBQUFBLElBQUksRUFBRTtBQURFLFdBRlQ7QUFLSGdCLFVBQUFBLFNBQVMsRUFBRTtBQUNQaEIsWUFBQUEsSUFBSSxFQUFFO0FBREMsV0FMUjtBQVFIaUIsVUFBQUEsTUFBTSxFQUFFO0FBQ0pqQixZQUFBQSxJQUFJLEVBQUUsS0FERjtBQUVKa0IsWUFBQUEsS0FBSyxFQUFFO0FBQ0hOLGNBQUFBLE1BQU0sRUFBRXhCLFVBREw7QUFFSCtCLGNBQUFBLFFBQVEsRUFBRTtBQUZQO0FBRkgsV0FSTDtBQWVIQyxVQUFBQSxVQUFVLEVBQUU7QUFDUnBCLFlBQUFBLElBQUksRUFBRSxLQURFO0FBRVJxQixZQUFBQSxRQUFRLEVBQUUsT0FGRjtBQUdSWixZQUFBQSxNQUFNLEVBQUU7QUFDSnZCLGNBQUFBLEtBQUssRUFBRXNELFdBREg7QUFFSjdCLGNBQUFBLEtBQUssRUFBRSxDQUZIO0FBR0pXLGNBQUFBLFNBQVMsRUFBRTtBQUhQO0FBSEEsV0FmVDtBQXdCSEMsVUFBQUEsT0FBTyxFQUFFO0FBQ0xyQixZQUFBQSxPQUFPLEVBQUUsSUFESjtBQUVMc0IsWUFBQUEsU0FBUyxFQUFFQyxTQUZOO0FBR0xDLFlBQUFBLE9BQU8sRUFBRSxDQUhKO0FBSUxSLFlBQUFBLEtBQUssRUFBRTtBQUNIQyxjQUFBQSxRQUFRLEVBQUU7QUFEUDtBQUpGO0FBeEJOLFNBcENHO0FBcUVWUSxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsR0FBRyxFQUFFLENBREY7QUFFSEMsVUFBQUEsR0FBRyxFQUFFLEVBRkY7QUFHSFosVUFBQUEsTUFBTSxFQUFFO0FBQ0pqQixZQUFBQSxJQUFJLEVBQUUsS0FERjtBQUVKa0IsWUFBQUEsS0FBSyxFQUFFO0FBQ0hOLGNBQUFBLE1BQU0sRUFBRXhCLFVBREw7QUFFSCtCLGNBQUFBLFFBQVEsRUFBRTtBQUZQO0FBRkg7QUFITCxTQXJFRztBQWdGVlcsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLE1BQU0sRUFBRTtBQUNKQyxZQUFBQSxNQUFNLEVBQUU7QUFDSmxDLGNBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxjQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURKLFdBREo7QUFPSkMsVUFBQUEsS0FBSyxFQUFFO0FBQ0hGLFlBQUFBLE1BQU0sRUFBRTtBQUNKbEMsY0FBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLGNBQUFBLEtBQUssRUFBRTtBQUZIO0FBREwsV0FQSDtBQWFKRSxVQUFBQSxNQUFNLEVBQUU7QUFDSkMsWUFBQUEsZ0NBQWdDLEVBQUUsS0FEOUI7QUFFSkosWUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxjQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsY0FBQUEsS0FBSyxFQUFFO0FBRkg7QUFGSjtBQWJKLFNBaEZFO0FBcUdWVixRQUFBQSxPQUFPLEVBQUU7QUFDTEwsVUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFlBQUFBLFFBQVEsRUFBRTtBQURQLFdBREY7QUFJTGtCLFVBQUFBLENBQUMsRUFBRTtBQUNDYixZQUFBQSxTQUFTLEVBQUUsbUJBQVVjLEdBQVYsRUFBZTtBQUN0QixxQkFBTyxNQUFNQSxHQUFOLEdBQVksWUFBbkI7QUFDSDtBQUhGO0FBSkUsU0FyR0M7QUErR1YxQixRQUFBQSxNQUFNLEVBQUUsQ0FBQ3JCLFVBQUQsQ0EvR0U7QUFnSFZnRCxRQUFBQSxPQUFPLEVBQUU7QUFDTDNCLFVBQUFBLE1BQU0sRUFBRSxDQUFDckIsVUFBRCxDQURIO0FBRUxpRCxVQUFBQSxXQUFXLEVBQUUsQ0FBQ2xELFNBQUQsQ0FGUjtBQUdMbUQsVUFBQUEsV0FBVyxFQUFFO0FBSFI7QUFoSEMsT0FBZDtBQXVIQSxVQUFJN0MsS0FBSyxHQUFHLElBQUk4QyxVQUFKLENBQWU3RCxPQUFmLEVBQXdCVyxPQUF4QixDQUFaO0FBQ0FJLE1BQUFBLEtBQUssQ0FBQytDLE1BQU47QUFDSCxLQXZJRDtBQXdJSCxHQTNJRDs7QUE2SUEsTUFBSWdFLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBVztBQUM5QixRQUFJcEksTUFBTSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLHVCQUExQixDQUFiO0FBRUEsT0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNKLE1BQWQsRUFBc0JLLEdBQXRCLENBQTBCLFVBQVNDLE9BQVQsRUFBa0I7QUFDeEMsVUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXSixPQUFYLEVBQW9CLFFBQXBCLENBQUQsQ0FBckI7O0FBRUEsVUFBSyxDQUFDQSxPQUFOLEVBQWdCO0FBQ1o7QUFDSDs7QUFFRCxVQUFJSyxLQUFLLEdBQUdMLE9BQU8sQ0FBQ00sWUFBUixDQUFxQixxQkFBckIsQ0FBWjtBQUVBLFVBQUlDLFVBQVUsR0FBR0osTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixVQUFVLFVBQXJDLENBQWpCO0FBQ0EsVUFBSW1ELFdBQVcsR0FBR3hELE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsVUFBVSxVQUFyQyxDQUFsQjtBQUNBLFVBQUlDLFNBQVMsR0FBR04sTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixVQUFVSCxLQUFyQyxDQUFoQjtBQUNBLFVBQUlLLFVBQVUsR0FBR1AsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixnQkFBZ0JILEtBQTNDLENBQWpCO0FBRUEsVUFBSU0sT0FBTyxHQUFHO0FBQ1ZDLFFBQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0xDLFVBQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLFVBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckI7QUFGRCxTQUFELENBREU7QUFLVkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFVBQVUsRUFBRSxTQURUO0FBRUhDLFVBQUFBLElBQUksRUFBRSxNQUZIO0FBR0hoQixVQUFBQSxNQUFNLEVBQUVBLE1BSEw7QUFJSGlCLFVBQUFBLE9BQU8sRUFBRTtBQUNMQyxZQUFBQSxJQUFJLEVBQUU7QUFERCxXQUpOO0FBT0hDLFVBQUFBLElBQUksRUFBRTtBQUNGQyxZQUFBQSxPQUFPLEVBQUU7QUFEUCxXQVBIO0FBVUhDLFVBQUFBLFNBQVMsRUFBRTtBQUNQRCxZQUFBQSxPQUFPLEVBQUU7QUFERjtBQVZSLFNBTEc7QUFtQlZFLFFBQUFBLFdBQVcsRUFBRSxFQW5CSDtBQW9CVkMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pMLFVBQUFBLElBQUksRUFBRTtBQURGLFNBcEJFO0FBdUJWTSxRQUFBQSxVQUFVLEVBQUU7QUFDUkosVUFBQUEsT0FBTyxFQUFFO0FBREQsU0F2QkY7QUEwQlZLLFFBQUFBLElBQUksRUFBRTtBQUNGVCxVQUFBQSxJQUFJLEVBQUUsT0FESjtBQUVGVSxVQUFBQSxPQUFPLEVBQUU7QUFGUCxTQTFCSTtBQThCVkMsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLEtBQUssRUFBRSxRQURIO0FBRUpWLFVBQUFBLElBQUksRUFBRSxJQUZGO0FBR0pXLFVBQUFBLEtBQUssRUFBRSxDQUhIO0FBSUpDLFVBQUFBLE1BQU0sRUFBRSxDQUFDdEIsU0FBRDtBQUpKLFNBOUJFO0FBb0NWdUIsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFVBQVUsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxDQURUO0FBRUhDLFVBQUFBLFVBQVUsRUFBRTtBQUNSZixZQUFBQSxJQUFJLEVBQUU7QUFERSxXQUZUO0FBS0hnQixVQUFBQSxTQUFTLEVBQUU7QUFDUGhCLFlBQUFBLElBQUksRUFBRTtBQURDLFdBTFI7QUFRSGlCLFVBQUFBLE1BQU0sRUFBRTtBQUNKakIsWUFBQUEsSUFBSSxFQUFFLEtBREY7QUFFSmtCLFlBQUFBLEtBQUssRUFBRTtBQUNITixjQUFBQSxNQUFNLEVBQUV4QixVQURMO0FBRUgrQixjQUFBQSxRQUFRLEVBQUU7QUFGUDtBQUZILFdBUkw7QUFlSEMsVUFBQUEsVUFBVSxFQUFFO0FBQ1JwQixZQUFBQSxJQUFJLEVBQUUsS0FERTtBQUVScUIsWUFBQUEsUUFBUSxFQUFFLE9BRkY7QUFHUlosWUFBQUEsTUFBTSxFQUFFO0FBQ0p2QixjQUFBQSxLQUFLLEVBQUVzRCxXQURIO0FBRUo3QixjQUFBQSxLQUFLLEVBQUUsQ0FGSDtBQUdKVyxjQUFBQSxTQUFTLEVBQUU7QUFIUDtBQUhBLFdBZlQ7QUF3QkhDLFVBQUFBLE9BQU8sRUFBRTtBQUNMckIsWUFBQUEsT0FBTyxFQUFFLElBREo7QUFFTHNCLFlBQUFBLFNBQVMsRUFBRUMsU0FGTjtBQUdMQyxZQUFBQSxPQUFPLEVBQUUsQ0FISjtBQUlMUixZQUFBQSxLQUFLLEVBQUU7QUFDSEMsY0FBQUEsUUFBUSxFQUFFO0FBRFA7QUFKRjtBQXhCTixTQXBDRztBQXFFVlEsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLEdBQUcsRUFBRSxDQURGO0FBRUhDLFVBQUFBLEdBQUcsRUFBRSxFQUZGO0FBR0haLFVBQUFBLE1BQU0sRUFBRTtBQUNKakIsWUFBQUEsSUFBSSxFQUFFLEtBREY7QUFFSmtCLFlBQUFBLEtBQUssRUFBRTtBQUNITixjQUFBQSxNQUFNLEVBQUV4QixVQURMO0FBRUgrQixjQUFBQSxRQUFRLEVBQUU7QUFGUDtBQUZIO0FBSEwsU0FyRUc7QUFnRlZXLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxNQUFNLEVBQUU7QUFDSkMsWUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxjQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsY0FBQUEsS0FBSyxFQUFFO0FBRkg7QUFESixXQURKO0FBT0pDLFVBQUFBLEtBQUssRUFBRTtBQUNIRixZQUFBQSxNQUFNLEVBQUU7QUFDSmxDLGNBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxjQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURMLFdBUEg7QUFhSkUsVUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFlBQUFBLGdDQUFnQyxFQUFFLEtBRDlCO0FBRUpKLFlBQUFBLE1BQU0sRUFBRTtBQUNKbEMsY0FBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLGNBQUFBLEtBQUssRUFBRTtBQUZIO0FBRko7QUFiSixTQWhGRTtBQXFHVlYsUUFBQUEsT0FBTyxFQUFFO0FBQ0xMLFVBQUFBLEtBQUssRUFBRTtBQUNIQyxZQUFBQSxRQUFRLEVBQUU7QUFEUCxXQURGO0FBSUxrQixVQUFBQSxDQUFDLEVBQUU7QUFDQ2IsWUFBQUEsU0FBUyxFQUFFLG1CQUFVYyxHQUFWLEVBQWU7QUFDdEIscUJBQU8sTUFBTUEsR0FBTixHQUFZLFlBQW5CO0FBQ0g7QUFIRjtBQUpFLFNBckdDO0FBK0dWMUIsUUFBQUEsTUFBTSxFQUFFLENBQUNyQixVQUFELENBL0dFO0FBZ0hWZ0QsUUFBQUEsT0FBTyxFQUFFO0FBQ0wzQixVQUFBQSxNQUFNLEVBQUUsQ0FBQ3JCLFVBQUQsQ0FESDtBQUVMaUQsVUFBQUEsV0FBVyxFQUFFLENBQUNsRCxTQUFELENBRlI7QUFHTG1ELFVBQUFBLFdBQVcsRUFBRTtBQUhSO0FBaEhDLE9BQWQ7QUF1SEEsVUFBSTdDLEtBQUssR0FBRyxJQUFJOEMsVUFBSixDQUFlN0QsT0FBZixFQUF3QlcsT0FBeEIsQ0FBWjtBQUNBSSxNQUFBQSxLQUFLLENBQUMrQyxNQUFOO0FBQ0gsS0F2SUQ7QUF3SUgsR0EzSUQ7O0FBNklBLE1BQUlpRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQVc7QUFDL0IsUUFBSXJJLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix3QkFBMUIsQ0FBYjtBQUVBLFFBQUlTLEtBQUo7QUFDQSxRQUFJSixNQUFKO0FBQ0EsUUFBSU0sVUFBVSxHQUFHSixNQUFNLENBQUNLLG1CQUFQLENBQTJCLGVBQTNCLENBQWpCO0FBQ0EsUUFBSTBELFdBQVcsR0FBRy9ELE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsZUFBM0IsQ0FBbEI7QUFDQSxRQUFJc0UsY0FBSjtBQUNBLFFBQUlYLGNBQWMsR0FBR2hFLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsZUFBM0IsQ0FBckI7QUFDQSxRQUFJQyxTQUFKO0FBQ0EsUUFBSUUsT0FBSjtBQUNBLFFBQUlJLEtBQUo7QUFFQSxPQUFHbEIsS0FBSCxDQUFTQyxJQUFULENBQWNKLE1BQWQsRUFBc0JLLEdBQXRCLENBQTBCLFVBQVNDLE9BQVQsRUFBa0I7QUFDeENLLE1BQUFBLEtBQUssR0FBR0wsT0FBTyxDQUFDTSxZQUFSLENBQXFCLGVBQXJCLENBQVI7QUFDQUwsTUFBQUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXSixPQUFYLEVBQW9CLFFBQXBCLENBQUQsQ0FBakI7QUFDQVMsTUFBQUEsU0FBUyxHQUFHTixNQUFNLENBQUNLLG1CQUFQLENBQTJCLFVBQVVILEtBQXJDLENBQVo7QUFFQU0sTUFBQUEsT0FBTyxHQUFHO0FBQ05DLFFBQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0xDLFVBQUFBLElBQUksRUFBRSxZQUREO0FBRUxDLFVBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekIsRUFBNkIsRUFBN0I7QUFGRCxTQUFELEVBR0w7QUFDQ0QsVUFBQUEsSUFBSSxFQUFFLFNBRFA7QUFFQ0MsVUFBQUEsSUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixFQUE3QjtBQUZQLFNBSEssQ0FERjtBQVFOQyxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsVUFBVSxFQUFFLFNBRFQ7QUFFSEMsVUFBQUEsSUFBSSxFQUFFLEtBRkg7QUFHSGhCLFVBQUFBLE1BQU0sRUFBRUEsTUFITDtBQUlIaUIsVUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFlBQUFBLElBQUksRUFBRTtBQUREO0FBSk4sU0FSRDtBQWdCTkksUUFBQUEsV0FBVyxFQUFFO0FBQ1Q2QyxVQUFBQSxHQUFHLEVBQUU7QUFDREMsWUFBQUEsVUFBVSxFQUFFLEtBRFg7QUFFREMsWUFBQUEsV0FBVyxFQUFFLENBQUMsS0FBRCxDQUZaO0FBR0RDLFlBQUFBLFlBQVksRUFBRTtBQUhiO0FBREksU0FoQlA7QUF1Qk4vQyxRQUFBQSxNQUFNLEVBQUU7QUFDSkwsVUFBQUEsSUFBSSxFQUFFO0FBREYsU0F2QkY7QUEwQk5NLFFBQUFBLFVBQVUsRUFBRTtBQUNSSixVQUFBQSxPQUFPLEVBQUU7QUFERCxTQTFCTjtBQTZCTk8sUUFBQUEsTUFBTSxFQUFFO0FBQ0pULFVBQUFBLElBQUksRUFBRSxJQURGO0FBRUpXLFVBQUFBLEtBQUssRUFBRSxDQUZIO0FBR0pDLFVBQUFBLE1BQU0sRUFBRSxDQUFDLGFBQUQ7QUFISixTQTdCRjtBQWtDTkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFVBQVUsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxDQURUO0FBRUhDLFVBQUFBLFVBQVUsRUFBRTtBQUNSZixZQUFBQSxJQUFJLEVBQUU7QUFERSxXQUZUO0FBS0hnQixVQUFBQSxTQUFTLEVBQUU7QUFDUGhCLFlBQUFBLElBQUksRUFBRTtBQURDLFdBTFI7QUFRSGlCLFVBQUFBLE1BQU0sRUFBRTtBQUNKQyxZQUFBQSxLQUFLLEVBQUU7QUFDSE4sY0FBQUEsTUFBTSxFQUFFeEIsVUFETDtBQUVIK0IsY0FBQUEsUUFBUSxFQUFFO0FBRlA7QUFESDtBQVJMLFNBbENEO0FBaUROUSxRQUFBQSxLQUFLLEVBQUU7QUFDSFUsVUFBQUEsQ0FBQyxFQUFFLENBREE7QUFFSHlDLFVBQUFBLE9BQU8sRUFBRSxDQUZOO0FBR0hwRCxVQUFBQSxPQUFPLEVBQUUsQ0FITjtBQUlIVCxVQUFBQSxNQUFNLEVBQUU7QUFDSkMsWUFBQUEsS0FBSyxFQUFFO0FBQ0hOLGNBQUFBLE1BQU0sRUFBRXhCLFVBREw7QUFFSCtCLGNBQUFBLFFBQVEsRUFBRTtBQUZQO0FBREg7QUFKTCxTQWpERDtBQTRETlosUUFBQUEsSUFBSSxFQUFFO0FBQ0ZULFVBQUFBLElBQUksRUFBRTtBQURKLFNBNURBO0FBK0ROZ0MsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLE1BQU0sRUFBRTtBQUNKQyxZQUFBQSxNQUFNLEVBQUU7QUFDSmxDLGNBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxjQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURKLFdBREo7QUFPSkMsVUFBQUEsS0FBSyxFQUFFO0FBQ0hGLFlBQUFBLE1BQU0sRUFBRTtBQUNKbEMsY0FBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLGNBQUFBLEtBQUssRUFBRTtBQUZIO0FBREwsV0FQSDtBQWFKRSxVQUFBQSxNQUFNLEVBQUU7QUFDSkMsWUFBQUEsZ0NBQWdDLEVBQUUsS0FEOUI7QUFFSkosWUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxjQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsY0FBQUEsS0FBSyxFQUFFO0FBRkg7QUFGSjtBQWJKLFNBL0RGO0FBb0ZOVixRQUFBQSxPQUFPLEVBQUU7QUFDTEwsVUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFlBQUFBLFFBQVEsRUFBRTtBQURQLFdBREY7QUFJTGtCLFVBQUFBLENBQUMsRUFBRTtBQUNDYixZQUFBQSxTQUFTLEVBQUUsbUJBQVVjLEdBQVYsRUFBZTtBQUN0QixxQkFBTyxNQUFNQSxHQUFOLEdBQVksVUFBbkI7QUFDSDtBQUhGO0FBSkUsU0FwRkg7QUE4Rk4xQixRQUFBQSxNQUFNLEVBQUUsQ0FBQ3RCLFNBQUQsRUFBWTBELGNBQVosQ0E5RkY7QUErRk5LLFFBQUFBLElBQUksRUFBRTtBQUNGVyxVQUFBQSxPQUFPLEVBQUU7QUFDTEMsWUFBQUEsR0FBRyxFQUFFO0FBREEsV0FEUDtBQUlGbEIsVUFBQUEsV0FBVyxFQUFFQSxXQUpYO0FBS0ZPLFVBQUFBLGVBQWUsRUFBRSxDQUxmO0FBTUYzQixVQUFBQSxLQUFLLEVBQUU7QUFDSDRCLFlBQUFBLEtBQUssRUFBRTtBQUNIdkQsY0FBQUEsSUFBSSxFQUFFO0FBREg7QUFESjtBQU5MO0FBL0ZBLE9BQVY7QUE2R0FKLE1BQUFBLEtBQUssR0FBRyxJQUFJOEMsVUFBSixDQUFlN0QsT0FBZixFQUF3QlcsT0FBeEIsQ0FBUjtBQUNBSSxNQUFBQSxLQUFLLENBQUMrQyxNQUFOO0FBQ0gsS0FwSEQ7QUFxSEgsR0FsSUQ7O0FBb0lBLE1BQUlrRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQVc7QUFDL0IsUUFBSXRJLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix3QkFBMUIsQ0FBYjtBQUVBLFFBQUlTLEtBQUo7QUFDQSxRQUFJc0QsV0FBSjtBQUNBLFFBQUkxRCxNQUFKO0FBQ0EsUUFBSU0sVUFBVSxHQUFHSixNQUFNLENBQUNLLG1CQUFQLENBQTJCLGVBQTNCLENBQWpCO0FBQ0EsUUFBSTBELFdBQVcsR0FBRy9ELE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsZUFBM0IsQ0FBbEI7QUFDQSxRQUFJRyxPQUFKO0FBQ0EsUUFBSUksS0FBSjtBQUVBLE9BQUdsQixLQUFILENBQVNDLElBQVQsQ0FBY0osTUFBZCxFQUFzQkssR0FBdEIsQ0FBMEIsVUFBU0MsT0FBVCxFQUFrQjtBQUN4Q0MsTUFBQUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXSixPQUFYLEVBQW9CLFFBQXBCLENBQUQsQ0FBakI7QUFFQSxVQUFJVyxPQUFPLEdBQUc7QUFDVkMsUUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDTEMsVUFBQUEsSUFBSSxFQUFFLFlBREQ7QUFFTEMsVUFBQUEsSUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QjtBQUZELFNBQUQsRUFHTDtBQUNDRCxVQUFBQSxJQUFJLEVBQUUsU0FEUDtBQUVDQyxVQUFBQSxJQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEVBQXpCO0FBRlAsU0FISyxDQURFO0FBUVZDLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxVQUFVLEVBQUUsU0FEVDtBQUVIQyxVQUFBQSxJQUFJLEVBQUUsS0FGSDtBQUdIaEIsVUFBQUEsTUFBTSxFQUFFQSxNQUhMO0FBSUhpQixVQUFBQSxPQUFPLEVBQUU7QUFDTEMsWUFBQUEsSUFBSSxFQUFFO0FBREQsV0FKTjtBQU9IRyxVQUFBQSxTQUFTLEVBQUU7QUFDUEQsWUFBQUEsT0FBTyxFQUFFO0FBREY7QUFQUixTQVJHO0FBbUJWRSxRQUFBQSxXQUFXLEVBQUU7QUFDVDZDLFVBQUFBLEdBQUcsRUFBRTtBQUNEQyxZQUFBQSxVQUFVLEVBQUUsS0FEWDtBQUVEQyxZQUFBQSxXQUFXLEVBQUUsQ0FBQyxLQUFELENBRlo7QUFHREMsWUFBQUEsWUFBWSxFQUFFO0FBSGI7QUFESSxTQW5CSDtBQTBCVi9DLFFBQUFBLE1BQU0sRUFBRTtBQUNKTCxVQUFBQSxJQUFJLEVBQUU7QUFERixTQTFCRTtBQTZCVk0sUUFBQUEsVUFBVSxFQUFFO0FBQ1JKLFVBQUFBLE9BQU8sRUFBRTtBQURELFNBN0JGO0FBZ0NWTyxRQUFBQSxNQUFNLEVBQUU7QUFDSlQsVUFBQUEsSUFBSSxFQUFFLElBREY7QUFFSlcsVUFBQUEsS0FBSyxFQUFFLENBRkg7QUFHSkMsVUFBQUEsTUFBTSxFQUFFLENBQUMsYUFBRDtBQUhKLFNBaENFO0FBcUNWQyxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsVUFBVSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLENBRFQ7QUFFSEMsVUFBQUEsVUFBVSxFQUFFO0FBQ1JmLFlBQUFBLElBQUksRUFBRTtBQURFLFdBRlQ7QUFLSGdCLFVBQUFBLFNBQVMsRUFBRTtBQUNQaEIsWUFBQUEsSUFBSSxFQUFFO0FBREMsV0FMUjtBQVFIaUIsVUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFlBQUFBLEtBQUssRUFBRTtBQUNITixjQUFBQSxNQUFNLEVBQUV4QixVQURMO0FBRUgrQixjQUFBQSxRQUFRLEVBQUU7QUFGUDtBQURIO0FBUkwsU0FyQ0c7QUFvRFZRLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxHQUFHLEVBQUUsQ0FERjtBQUVIQyxVQUFBQSxHQUFHLEVBQUUsR0FGRjtBQUdIWixVQUFBQSxNQUFNLEVBQUU7QUFDSkMsWUFBQUEsS0FBSyxFQUFFO0FBQ0hOLGNBQUFBLE1BQU0sRUFBRXhCLFVBREw7QUFFSCtCLGNBQUFBLFFBQVEsRUFBRTtBQUZQO0FBREg7QUFITCxTQXBERztBQThEVlosUUFBQUEsSUFBSSxFQUFFO0FBQ0ZULFVBQUFBLElBQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBREo7QUFFRlUsVUFBQUEsT0FBTyxFQUFFLENBQUMsSUFBRCxFQUFPLENBQVA7QUFGUCxTQTlESTtBQWtFVnNCLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxNQUFNLEVBQUU7QUFDSkMsWUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxjQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsY0FBQUEsS0FBSyxFQUFFO0FBRkg7QUFESixXQURKO0FBT0pDLFVBQUFBLEtBQUssRUFBRTtBQUNIRixZQUFBQSxNQUFNLEVBQUU7QUFDSmxDLGNBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxjQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURMLFdBUEg7QUFhSkUsVUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFlBQUFBLGdDQUFnQyxFQUFFLEtBRDlCO0FBRUpKLFlBQUFBLE1BQU0sRUFBRTtBQUNKbEMsY0FBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLGNBQUFBLEtBQUssRUFBRTtBQUZIO0FBRko7QUFiSixTQWxFRTtBQXVGVlYsUUFBQUEsT0FBTyxFQUFFO0FBQ0xMLFVBQUFBLEtBQUssRUFBRTtBQUNIQyxZQUFBQSxRQUFRLEVBQUU7QUFEUCxXQURGO0FBSUxrQixVQUFBQSxDQUFDLEVBQUU7QUFDQ2IsWUFBQUEsU0FBUyxFQUFFLG1CQUFVYyxHQUFWLEVBQWU7QUFDdEIscUJBQU8sTUFBTUEsR0FBTixHQUFZLFlBQW5CO0FBQ0g7QUFIRixXQUpFO0FBU0w4QyxVQUFBQSxNQUFNLEVBQUU7QUFDSnBGLFlBQUFBLElBQUksRUFBRTtBQURGO0FBVEgsU0F2RkM7QUFvR1ZZLFFBQUFBLE1BQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBcEdFO0FBcUdWeUMsUUFBQUEsSUFBSSxFQUFFO0FBQ0ZOLFVBQUFBLFdBQVcsRUFBRUEsV0FEWDtBQUVGTyxVQUFBQSxlQUFlLEVBQUUsQ0FGZjtBQUdGM0IsVUFBQUEsS0FBSyxFQUFFO0FBQ0g0QixZQUFBQSxLQUFLLEVBQUU7QUFDSHZELGNBQUFBLElBQUksRUFBRTtBQURIO0FBREosV0FITDtBQVFGZ0UsVUFBQUEsT0FBTyxFQUFFO0FBQ0xJLFlBQUFBLElBQUksRUFBRSxFQUREO0FBRUxGLFlBQUFBLEtBQUssRUFBRTtBQUZGO0FBUlA7QUFyR0ksT0FBZDtBQW9IQSxVQUFJdEUsS0FBSyxHQUFHLElBQUk4QyxVQUFKLENBQWU3RCxPQUFmLEVBQXdCVyxPQUF4QixDQUFaO0FBQ0FJLE1BQUFBLEtBQUssQ0FBQytDLE1BQU47QUFDSCxLQXpIRDtBQTBISCxHQXJJRDs7QUF1SUEsTUFBSW1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBVztBQUMvQixRQUFJaEksTUFBSjtBQUNBLFFBQUlQLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix3QkFBMUIsQ0FBYjtBQUVBLE9BQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjSixNQUFkLEVBQXNCSyxHQUF0QixDQUEwQixVQUFTQyxPQUFULEVBQWtCO0FBQ3hDQyxNQUFBQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFQLENBQVdKLE9BQVgsRUFBb0IsUUFBcEIsQ0FBRCxDQUFqQjs7QUFFQSxVQUFLLENBQUNBLE9BQU4sRUFBZ0I7QUFDWjtBQUNIOztBQUVELFVBQUlPLFVBQVUsR0FBR0osTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixVQUFVLFVBQXJDLENBQWpCO0FBQ0EsVUFBSW1ELFdBQVcsR0FBR3hELE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsVUFBVSxVQUFyQyxDQUFsQjtBQUVBLFVBQUlHLE9BQU8sR0FBRztBQUNWQyxRQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUNMQyxVQUFBQSxJQUFJLEVBQUUsWUFERDtBQUVMQyxVQUFBQSxJQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCO0FBRkQsU0FBRCxDQURFO0FBS1YwRCxRQUFBQSxJQUFJLEVBQUU7QUFDRnJELFVBQUFBLElBQUksRUFBRSxLQURKO0FBRUZnRSxVQUFBQSxPQUFPLEVBQUU7QUFDTEMsWUFBQUEsR0FBRyxFQUFFLENBREE7QUFFTEUsWUFBQUEsTUFBTSxFQUFFLENBRkg7QUFHTEMsWUFBQUEsSUFBSSxFQUFFLENBSEQ7QUFJTEYsWUFBQUEsS0FBSyxFQUFFO0FBSkY7QUFGUCxTQUxJO0FBY1Z0RSxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsVUFBVSxFQUFFLFNBRFQ7QUFFSEMsVUFBQUEsSUFBSSxFQUFFLE1BRkg7QUFHSGhCLFVBQUFBLE1BQU0sRUFBRUEsTUFITDtBQUlIaUIsVUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFlBQUFBLElBQUksRUFBRTtBQURELFdBSk47QUFPSEMsVUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFlBQUFBLE9BQU8sRUFBRTtBQURQLFdBUEg7QUFVSEMsVUFBQUEsU0FBUyxFQUFFO0FBQ1BELFlBQUFBLE9BQU8sRUFBRTtBQURGO0FBVlIsU0FkRztBQTRCVkUsUUFBQUEsV0FBVyxFQUFFLEVBNUJIO0FBNkJWQyxRQUFBQSxNQUFNLEVBQUU7QUFDSkwsVUFBQUEsSUFBSSxFQUFFO0FBREYsU0E3QkU7QUFnQ1ZNLFFBQUFBLFVBQVUsRUFBRTtBQUNSSixVQUFBQSxPQUFPLEVBQUU7QUFERCxTQWhDRjtBQW1DVkssUUFBQUEsSUFBSSxFQUFFO0FBQ0ZULFVBQUFBLElBQUksRUFBRSxVQURKO0FBRUZvRyxVQUFBQSxRQUFRLEVBQUU7QUFDTkksWUFBQUEsV0FBVyxFQUFFLEdBRFA7QUFFTkMsWUFBQUEsU0FBUyxFQUFFLENBRkw7QUFHTkMsWUFBQUEsS0FBSyxFQUFFLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLEVBQWUsR0FBZjtBQUhEO0FBRlIsU0FuQ0k7QUEyQ1YvRixRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsS0FBSyxFQUFFLFFBREg7QUFFSlYsVUFBQUEsSUFBSSxFQUFFLElBRkY7QUFHSlcsVUFBQUEsS0FBSyxFQUFFLENBSEg7QUFJSkMsVUFBQUEsTUFBTSxFQUFFLENBQUMsU0FBRDtBQUpKLFNBM0NFO0FBaURWQyxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsVUFBVSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLENBRFQ7QUFFSEMsVUFBQUEsVUFBVSxFQUFFO0FBQ1JmLFlBQUFBLElBQUksRUFBRTtBQURFLFdBRlQ7QUFLSGdCLFVBQUFBLFNBQVMsRUFBRTtBQUNQaEIsWUFBQUEsSUFBSSxFQUFFO0FBREMsV0FMUjtBQVFIaUIsVUFBQUEsTUFBTSxFQUFFO0FBQ0pqQixZQUFBQSxJQUFJLEVBQUUsS0FERjtBQUVKa0IsWUFBQUEsS0FBSyxFQUFFO0FBQ0hOLGNBQUFBLE1BQU0sRUFBRXhCLFVBREw7QUFFSCtCLGNBQUFBLFFBQVEsRUFBRTtBQUZQO0FBRkgsV0FSTDtBQWVIQyxVQUFBQSxVQUFVLEVBQUU7QUFDUnBCLFlBQUFBLElBQUksRUFBRSxLQURFO0FBRVJxQixZQUFBQSxRQUFRLEVBQUUsT0FGRjtBQUdSWixZQUFBQSxNQUFNLEVBQUU7QUFDSnZCLGNBQUFBLEtBQUssRUFBRXNELFdBREg7QUFFSjdCLGNBQUFBLEtBQUssRUFBRSxDQUZIO0FBR0pXLGNBQUFBLFNBQVMsRUFBRTtBQUhQO0FBSEEsV0FmVDtBQXdCSEMsVUFBQUEsT0FBTyxFQUFFO0FBQ0xyQixZQUFBQSxPQUFPLEVBQUUsSUFESjtBQUVMc0IsWUFBQUEsU0FBUyxFQUFFQyxTQUZOO0FBR0xDLFlBQUFBLE9BQU8sRUFBRSxDQUhKO0FBSUxSLFlBQUFBLEtBQUssRUFBRTtBQUNIQyxjQUFBQSxRQUFRLEVBQUU7QUFEUDtBQUpGO0FBeEJOLFNBakRHO0FBa0ZWUSxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsR0FBRyxFQUFFLENBREY7QUFFSEMsVUFBQUEsR0FBRyxFQUFFLEVBRkY7QUFHSFosVUFBQUEsTUFBTSxFQUFFO0FBQ0pqQixZQUFBQSxJQUFJLEVBQUUsS0FERjtBQUVKa0IsWUFBQUEsS0FBSyxFQUFFO0FBQ0hOLGNBQUFBLE1BQU0sRUFBRXhCLFVBREw7QUFFSCtCLGNBQUFBLFFBQVEsRUFBRTtBQUZQO0FBRkg7QUFITCxTQWxGRztBQTZGVlcsUUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFVBQUFBLE1BQU0sRUFBRTtBQUNKQyxZQUFBQSxNQUFNLEVBQUU7QUFDSmxDLGNBQUFBLElBQUksRUFBRSxNQURGO0FBRUptQyxjQUFBQSxLQUFLLEVBQUU7QUFGSDtBQURKLFdBREo7QUFPSkMsVUFBQUEsS0FBSyxFQUFFO0FBQ0hGLFlBQUFBLE1BQU0sRUFBRTtBQUNKbEMsY0FBQUEsSUFBSSxFQUFFLE1BREY7QUFFSm1DLGNBQUFBLEtBQUssRUFBRTtBQUZIO0FBREwsV0FQSDtBQWFKRSxVQUFBQSxNQUFNLEVBQUU7QUFDSkMsWUFBQUEsZ0NBQWdDLEVBQUUsS0FEOUI7QUFFSkosWUFBQUEsTUFBTSxFQUFFO0FBQ0psQyxjQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKbUMsY0FBQUEsS0FBSyxFQUFFO0FBRkg7QUFGSjtBQWJKLFNBN0ZFO0FBa0hWVixRQUFBQSxPQUFPLEVBQUU7QUFDTEwsVUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFlBQUFBLFFBQVEsRUFBRTtBQURQLFdBREY7QUFJTGtCLFVBQUFBLENBQUMsRUFBRTtBQUNDYixZQUFBQSxTQUFTLEVBQUUsbUJBQVVjLEdBQVYsRUFBZTtBQUN0QixxQkFBTyxNQUFNQSxHQUFOLEdBQVksWUFBbkI7QUFDSDtBQUhGO0FBSkUsU0FsSEM7QUE0SFYxQixRQUFBQSxNQUFNLEVBQUUsQ0FBQyxTQUFELENBNUhFO0FBNkhWMkIsUUFBQUEsT0FBTyxFQUFFO0FBQ0wzQixVQUFBQSxNQUFNLEVBQUUsQ0FBQ3hCLFVBQUQsQ0FESDtBQUVMb0QsVUFBQUEsV0FBVyxFQUFFLENBQUNBLFdBQUQsQ0FGUjtBQUdMQyxVQUFBQSxXQUFXLEVBQUU7QUFIUjtBQTdIQyxPQUFkO0FBb0lBLFVBQUk3QyxLQUFLLEdBQUcsSUFBSThDLFVBQUosQ0FBZTdELE9BQWYsRUFBd0JXLE9BQXhCLENBQVo7QUFDQUksTUFBQUEsS0FBSyxDQUFDK0MsTUFBTjtBQUNILEtBaEpEO0FBaUpILEdBckpEOztBQXVKQSxNQUFJb0UsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFXO0FBQ3JDLFFBQUl4SSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsd0JBQTFCLENBQWI7QUFDTSxRQUFJZSxPQUFKO0FBQ0EsUUFBSUksS0FBSjtBQUNBLFFBQUlkLE1BQUo7QUFFQSxPQUFHSixLQUFILENBQVNDLElBQVQsQ0FBY0osTUFBZCxFQUFzQkssR0FBdEIsQ0FBMEIsVUFBU0MsT0FBVCxFQUFrQjtBQUN4Q0MsTUFBQUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXSixPQUFYLEVBQW9CLFFBQXBCLENBQUQsQ0FBakI7QUFDQSxVQUFJTyxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsVUFBVSxVQUFyQyxDQUFqQjtBQUVBRyxNQUFBQSxPQUFPLEdBQUc7QUFDTkMsUUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDTEMsVUFBQUEsSUFBSSxFQUFFLFdBREQ7QUFFTEMsVUFBQUEsSUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULEVBQVksR0FBWixFQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxFQUErQyxHQUEvQyxFQUFvRCxHQUFwRCxFQUF5RCxDQUF6RCxFQUE0RCxDQUE1RCxFQUErRCxHQUEvRDtBQUZELFNBQUQsQ0FERjtBQUtOQyxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsVUFBVSxFQUFFLFNBRFQ7QUFFSGYsVUFBQUEsTUFBTSxFQUFFQSxNQUZMO0FBR0hnQixVQUFBQSxJQUFJLEVBQUUsS0FISDtBQUlIQyxVQUFBQSxPQUFPLEVBQUU7QUFDTEMsWUFBQUEsSUFBSSxFQUFFO0FBREQ7QUFKTixTQUxEO0FBYU5xRCxRQUFBQSxJQUFJLEVBQUU7QUFDRnJELFVBQUFBLElBQUksRUFBRSxLQURKO0FBRUZnRSxVQUFBQSxPQUFPLEVBQUU7QUFDTEMsWUFBQUEsR0FBRyxFQUFFLENBREE7QUFFTEUsWUFBQUEsTUFBTSxFQUFFLENBRkg7QUFHTEMsWUFBQUEsSUFBSSxFQUFFLENBSEQ7QUFJTEYsWUFBQUEsS0FBSyxFQUFFO0FBSkY7QUFGUCxTQWJBO0FBc0JOdEQsUUFBQUEsTUFBTSxFQUFFLENBQUMsU0FBRCxDQXRCRjtBQXVCTlIsUUFBQUEsV0FBVyxFQUFFO0FBQ1Q2QyxVQUFBQSxHQUFHLEVBQUU7QUFDREcsWUFBQUEsWUFBWSxFQUFFLEdBRGI7QUFFRDlDLFlBQUFBLFVBQVUsRUFBRTtBQUNSZSxjQUFBQSxRQUFRLEVBQUUsS0FERixDQUNTOztBQURULGFBRlg7QUFLRDhCLFlBQUFBLFdBQVcsRUFBRTtBQUxaO0FBREksU0F2QlA7QUFnQ043QyxRQUFBQSxVQUFVLEVBQUU7QUFDUkosVUFBQUEsT0FBTyxFQUFFLEtBREQ7QUFFUnNCLFVBQUFBLFNBQVMsRUFBRSxtQkFBU2MsR0FBVCxFQUFjO0FBQ3JCLG1CQUFPQSxHQUFHLEdBQUcsR0FBYjtBQUNILFdBSk87QUFLUlosVUFBQUEsT0FBTyxFQUFFLENBQUMsRUFMRjtBQU1SUixVQUFBQSxLQUFLLEVBQUU7QUFDSEMsWUFBQUEsUUFBUSxFQUFFLE1BRFA7QUFFSFAsWUFBQUEsTUFBTSxFQUFFLENBQUMsU0FBRDtBQUZMO0FBTkMsU0FoQ047QUEyQ05DLFFBQUFBLEtBQUssRUFBRTtBQUNISSxVQUFBQSxNQUFNLEVBQUU7QUFDSmpCLFlBQUFBLElBQUksRUFBRTtBQURGLFdBREw7QUFJSGMsVUFBQUEsVUFBVSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLEtBQWhFLEVBQXVFLEtBQXZFLEVBQThFLEtBQTlFLEVBQXFGLEtBQXJGLEVBQTRGLEtBQTVGLEVBQW1HLEtBQW5HLENBSlQ7QUFLSE8sVUFBQUEsUUFBUSxFQUFFLEtBTFA7QUFNSE4sVUFBQUEsVUFBVSxFQUFFO0FBQ1JmLFlBQUFBLElBQUksRUFBRTtBQURFLFdBTlQ7QUFTSGdCLFVBQUFBLFNBQVMsRUFBRTtBQUNQaEIsWUFBQUEsSUFBSSxFQUFFO0FBREMsV0FUUjtBQVlIb0IsVUFBQUEsVUFBVSxFQUFFO0FBQ1JwQixZQUFBQSxJQUFJLEVBQUU7QUFERSxXQVpUO0FBZUh1QixVQUFBQSxPQUFPLEVBQUU7QUFDTHJCLFlBQUFBLE9BQU8sRUFBRTtBQURKO0FBZk4sU0EzQ0Q7QUE4RE55QixRQUFBQSxLQUFLLEVBQUU7QUFDSDNCLFVBQUFBLElBQUksRUFBRSxLQURIO0FBRUhlLFVBQUFBLFVBQVUsRUFBRTtBQUNSZixZQUFBQSxJQUFJLEVBQUU7QUFERSxXQUZUO0FBS0hnQixVQUFBQSxTQUFTLEVBQUU7QUFDUGhCLFlBQUFBLElBQUksRUFBRSxLQURDO0FBRVA4RixZQUFBQSxVQUFVLEVBQUUxRztBQUZMLFdBTFI7QUFTSDZCLFVBQUFBLE1BQU0sRUFBRTtBQUNKakIsWUFBQUEsSUFBSSxFQUFFLEtBREY7QUFFSndCLFlBQUFBLFNBQVMsRUFBRSxtQkFBU2MsR0FBVCxFQUFjO0FBQ3JCLHFCQUFPQSxHQUFHLEdBQUcsR0FBYjtBQUNIO0FBSkc7QUFUTDtBQTlERCxPQUFWO0FBZ0ZBMUMsTUFBQUEsS0FBSyxHQUFHLElBQUk4QyxVQUFKLENBQWU3RCxPQUFmLEVBQXdCVyxPQUF4QixDQUFSO0FBQ0FJLE1BQUFBLEtBQUssQ0FBQytDLE1BQU47QUFDSCxLQXRGRDtBQXVGTixHQTdGRTs7QUErRkEsTUFBSXFFLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBVztBQUMvQixRQUFJbkksT0FBTyxHQUFHTCxRQUFRLENBQUNzRSxjQUFULENBQXdCLGlDQUF4QixDQUFkO0FBQ0EsUUFBSWhFLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLEdBQVAsQ0FBV0osT0FBWCxFQUFvQixRQUFwQixDQUFELENBQXJCOztBQUVBLFFBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1Y7QUFDSDs7QUFFRCxRQUFJVyxPQUFPLEdBQUc7QUFDVnlCLE1BQUFBLE1BQU0sRUFBRSxDQUFDLGVBQUQsQ0FERTtBQUVWeEIsTUFBQUEsTUFBTSxFQUFFLENBQUMsRUFBRCxDQUZFO0FBR1ZHLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxVQUFVLEVBQUUsU0FEVDtBQUVIZixRQUFBQSxNQUFNLEVBQUVBLE1BRkw7QUFHSGdCLFFBQUFBLElBQUksRUFBRSxXQUhIO0FBSUg0QixRQUFBQSxPQUFPLEVBQUU7QUFKTixPQUhHO0FBU1Z0QixNQUFBQSxXQUFXLEVBQUU7QUFDVG1GLFFBQUFBLFNBQVMsRUFBRTtBQUNQMEIsVUFBQUEsVUFBVSxFQUFFLENBQUMsRUFETjtBQUVQQyxVQUFBQSxRQUFRLEVBQUUsRUFGSDtBQUlQMUIsVUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFlBQUFBLE1BQU0sRUFBRSxDQURKO0FBRUpDLFlBQUFBLElBQUksRUFBRTtBQUZGLFdBSkQ7QUFRUHBGLFVBQUFBLFVBQVUsRUFBRTtBQUNScUYsWUFBQUEsTUFBTSxFQUFFLFFBREE7QUFFUmpHLFlBQUFBLElBQUksRUFBRTtBQUNGTSxjQUFBQSxJQUFJLEVBQUUsSUFESjtBQUVGbUIsY0FBQUEsUUFBUSxFQUFFLE1BRlI7QUFHRnlFLGNBQUFBLFVBQVUsRUFBRSxLQUhWO0FBSUZsRSxjQUFBQSxPQUFPLEVBQUUsQ0FBQyxDQUpSO0FBS0Z4QyxjQUFBQSxLQUFLLEVBQUVGLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsZUFBM0I7QUFMTCxhQUZFO0FBU1I0QyxZQUFBQSxLQUFLLEVBQUU7QUFDSC9DLGNBQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixlQUEzQixDQURKO0FBRUg4QixjQUFBQSxRQUFRLEVBQUUsTUFGUDtBQUdIeUUsY0FBQUEsVUFBVSxFQUFFLEtBSFQ7QUFJSGxFLGNBQUFBLE9BQU8sRUFBRSxDQUFDLEVBSlA7QUFLSDFCLGNBQUFBLElBQUksRUFBRTtBQUxIO0FBVEMsV0FSTDtBQXlCUDZGLFVBQUFBLEtBQUssRUFBRTtBQUNIQyxZQUFBQSxVQUFVLEVBQUU5RyxNQUFNLENBQUNLLG1CQUFQLENBQTJCLG9CQUEzQixDQURUO0FBRUhvRCxZQUFBQSxXQUFXLEVBQUU7QUFGVjtBQXpCQTtBQURGLE9BVEg7QUF5Q1Y3QixNQUFBQSxNQUFNLEVBQUUsQ0FBQzVCLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsY0FBM0IsQ0FBRCxDQXpDRTtBQTBDVm9CLE1BQUFBLE1BQU0sRUFBRTtBQUNKc0YsUUFBQUEsT0FBTyxFQUFFO0FBREw7QUExQ0UsS0FBZDtBQStDQSxRQUFJbkcsS0FBSyxHQUFHLElBQUk4QyxVQUFKLENBQWU3RCxPQUFmLEVBQXdCVyxPQUF4QixDQUFaO0FBQ0FJLElBQUFBLEtBQUssQ0FBQytDLE1BQU47QUFDSCxHQXpERCxDQWxvRndCLENBNnJGeEI7OztBQUNBLE1BQUl3RSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVc7QUFDN0IsUUFBSUMsTUFBTSxHQUFHNUksUUFBUSxDQUFDNkksYUFBVCxDQUF1Qix5QkFBdkIsQ0FBYjtBQUNBLFFBQUlDLFFBQVEsR0FBRywwQkFBZjs7QUFFQSxRQUFLLENBQUNGLE1BQU4sRUFBZTtBQUNYO0FBQ0gsS0FONEIsQ0FRN0I7OztBQUNBLFFBQUk1SCxPQUFPLEdBQUc7QUFDVitILE1BQUFBLE9BQU8sRUFBRTtBQUNMeEgsUUFBQUEsT0FBTyxFQUFFO0FBQ0x5SCxVQUFBQSxTQUFTLEVBQUU7QUFETjtBQURKLE9BREM7QUFNVkMsTUFBQUEsV0FBVyxFQUFFLHdCQU5IO0FBT1ZDLE1BQUFBLEtBQUssRUFBRTtBQVBHLEtBQWQ7O0FBVUEsUUFBSSxDQUFDTixNQUFMLEVBQWE7QUFDVDtBQUNILEtBckI0QixDQXVCN0I7OztBQUNBLFFBQUlPLFNBQVMsR0FBRyxJQUFJQyxLQUFKLENBQVUsTUFBTU4sUUFBaEIsRUFBMEI5SCxPQUExQixDQUFoQjtBQUNILEdBekJEOztBQTJCQSxNQUFJcUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFXO0FBQzlCLFFBQUlDLEdBQUcsR0FBR3RKLFFBQVEsQ0FBQzZJLGFBQVQsQ0FBdUIsNEJBQXZCLENBQVY7QUFDQSxRQUFJVSxPQUFPLEdBQUd2SixRQUFRLENBQUM2SSxhQUFULENBQXVCLGNBQXZCLENBQWQ7O0FBRUEsUUFBSVMsR0FBSixFQUFTO0FBQ0xBLE1BQUFBLEdBQUcsQ0FBQ0UsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBU0MsQ0FBVCxFQUFXO0FBQ3JDQSxRQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUosUUFBQUEsR0FBRyxDQUFDSyxZQUFKLENBQWlCLG1CQUFqQixFQUFzQyxJQUF0QztBQUVBQyxRQUFBQSxVQUFVLENBQUMsWUFBVztBQUNsQk4sVUFBQUEsR0FBRyxDQUFDTyxlQUFKLENBQW9CLG1CQUFwQjtBQUNBTixVQUFBQSxPQUFPLENBQUNPLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0FULFVBQUFBLEdBQUcsQ0FBQ1EsU0FBSixDQUFjRSxHQUFkLENBQWtCLFFBQWxCO0FBRUF4SixVQUFBQSxNQUFNLENBQUN5SixRQUFQLENBQWdCVixPQUFoQixFQUF5QixHQUF6QjtBQUNILFNBTlMsRUFNUCxJQU5PLENBQVY7QUFPSCxPQVhEO0FBWUg7QUFDSixHQWxCRCxDQXp0RndCLENBNnVGeEI7OztBQUNBLE1BQUlXLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBVztBQUNsQyxRQUFJQyxNQUFNLEdBQUduSyxRQUFRLENBQUM2SSxhQUFULENBQXVCLHdCQUF2QixDQUFiOztBQUVBLFFBQUlzQixNQUFKLEVBQVk7QUFDUkEsTUFBQUEsTUFBTSxDQUFDWCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFTQyxDQUFULEVBQVc7QUFDeEM7QUFDQUEsUUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRndDLENBSXhDOztBQUNBUyxRQUFBQSxNQUFNLENBQUNSLFlBQVAsQ0FBb0IsbUJBQXBCLEVBQXlDLElBQXpDLEVBTHdDLENBT3hDOztBQUNaUSxRQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsSUFBbEIsQ0FSb0QsQ0FVeEM7O0FBQ0EsWUFBSUQsTUFBTSxDQUFDTCxTQUFQLENBQWlCTyxRQUFqQixDQUEwQixhQUExQixDQUFKLEVBQThDO0FBQ3pDVCxVQUFBQSxVQUFVLENBQUMsWUFBVztBQUNuQk8sWUFBQUEsTUFBTSxDQUFDTixlQUFQLENBQXVCLG1CQUF2QjtBQUNBTSxZQUFBQSxNQUFNLENBQUNMLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLGFBQXhCO0FBQ0FJLFlBQUFBLE1BQU0sQ0FBQ0wsU0FBUCxDQUFpQkUsR0FBakIsQ0FBcUIsV0FBckI7QUFDQUcsWUFBQUEsTUFBTSxDQUFDdEIsYUFBUCxDQUFxQixXQUFyQixFQUFrQ2lCLFNBQWxDLENBQTRDRSxHQUE1QyxDQUFnRCxRQUFoRDtBQUNBRyxZQUFBQSxNQUFNLENBQUN0QixhQUFQLENBQXFCLGtCQUFyQixFQUF5Q3lCLFNBQXpDLEdBQXFELFFBQXJEO0FBQ1pILFlBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQixLQUFsQjtBQUNTLFdBUFUsRUFPUixJQVBRLENBQVY7QUFRSixTQVRELE1BU087QUFDRlIsVUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbkJPLFlBQUFBLE1BQU0sQ0FBQ04sZUFBUCxDQUF1QixtQkFBdkI7QUFDQU0sWUFBQUEsTUFBTSxDQUFDTCxTQUFQLENBQWlCRSxHQUFqQixDQUFxQixhQUFyQjtBQUNBRyxZQUFBQSxNQUFNLENBQUNMLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLFdBQXhCO0FBQ0FJLFlBQUFBLE1BQU0sQ0FBQ3RCLGFBQVAsQ0FBcUIsV0FBckIsRUFBa0NpQixTQUFsQyxDQUE0Q0MsTUFBNUMsQ0FBbUQsUUFBbkQ7QUFDQUksWUFBQUEsTUFBTSxDQUFDdEIsYUFBUCxDQUFxQixrQkFBckIsRUFBeUN5QixTQUF6QyxHQUFxRCxXQUFyRDtBQUNBSCxZQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsS0FBbEI7QUFDSCxXQVBVLEVBT1IsSUFQUSxDQUFWO0FBUUo7QUFDSixPQTlCRDtBQStCSDtBQUNKLEdBcENELENBOXVGd0IsQ0FveEZ4Qjs7O0FBQ0EsTUFBSUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFXO0FBQ2pDLFFBQUksT0FBT0MsWUFBUCxLQUF3QixXQUF4QixJQUF1QyxDQUFDeEssUUFBUSxDQUFDNkksYUFBVCxDQUF1Qix1QkFBdkIsQ0FBNUMsRUFBNkY7QUFDekY7QUFDSDs7QUFFRCxRQUFJNEIsU0FBUyxHQUFHQyxNQUFNLEdBQUdDLE9BQVQsQ0FBaUIsS0FBakIsQ0FBaEI7QUFDQSxRQUFJQyxFQUFFLEdBQUdILFNBQVMsQ0FBQ0ksTUFBVixDQUFpQixTQUFqQixDQUFUO0FBQ0EsUUFBSUMsU0FBUyxHQUFHTCxTQUFTLENBQUNNLEtBQVYsR0FBa0JDLFFBQWxCLENBQTJCLENBQTNCLEVBQThCLEtBQTlCLEVBQXFDSCxNQUFyQyxDQUE0QyxZQUE1QyxDQUFoQjtBQUNBLFFBQUlJLEtBQUssR0FBR1IsU0FBUyxDQUFDSSxNQUFWLENBQWlCLFlBQWpCLENBQVo7QUFDQSxRQUFJSyxRQUFRLEdBQUdULFNBQVMsQ0FBQ00sS0FBVixHQUFrQmYsR0FBbEIsQ0FBc0IsQ0FBdEIsRUFBeUIsS0FBekIsRUFBZ0NhLE1BQWhDLENBQXVDLFlBQXZDLENBQWY7QUFFQSxRQUFJTSxVQUFVLEdBQUduTCxRQUFRLENBQUNzRSxjQUFULENBQXdCLHNCQUF4QixDQUFqQjtBQUNBLFFBQUk4RyxRQUFRLEdBQUcsSUFBSVosWUFBWSxDQUFDYSxRQUFqQixDQUEwQkYsVUFBMUIsRUFBc0M7QUFDakRHLE1BQUFBLGFBQWEsRUFBRTtBQUNYMUYsUUFBQUEsSUFBSSxFQUFFLGlCQURLO0FBRVgyRixRQUFBQSxNQUFNLEVBQUUsT0FGRztBQUdYN0YsUUFBQUEsS0FBSyxFQUFFO0FBSEksT0FEa0M7QUFPakRwRixNQUFBQSxNQUFNLEVBQUUsR0FQeUM7QUFRakRrTCxNQUFBQSxhQUFhLEVBQUUsR0FSa0M7QUFTakRDLE1BQUFBLFdBQVcsRUFBRSxDQVRvQztBQVNoQztBQUVqQkMsTUFBQUEsWUFBWSxFQUFFLElBWG1DO0FBWWpEQyxNQUFBQSxHQUFHLEVBQUVWLEtBQUssR0FBRyxXQVpvQztBQVl2QjtBQUUxQlcsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLFlBQVksRUFBRTtBQUFFQyxVQUFBQSxVQUFVLEVBQUU7QUFBZCxTQURYO0FBRUhDLFFBQUFBLFlBQVksRUFBRTtBQUFFRCxVQUFBQSxVQUFVLEVBQUU7QUFBZCxTQUZYO0FBR0hFLFFBQUFBLFdBQVcsRUFBRTtBQUFFRixVQUFBQSxVQUFVLEVBQUU7QUFBZDtBQUhWLE9BZDBDO0FBb0JqREcsTUFBQUEsV0FBVyxFQUFFLGNBcEJvQztBQXFCakRDLE1BQUFBLFdBQVcsRUFBRWpCLEtBckJvQztBQXVCakRrQixNQUFBQSxRQUFRLEVBQUUsSUF2QnVDO0FBd0JqREMsTUFBQUEsWUFBWSxFQUFFLElBeEJtQztBQXdCN0I7QUFDcEJDLE1BQUFBLFFBQVEsRUFBRSxJQXpCdUM7QUEwQmpEQyxNQUFBQSxNQUFNLEVBQUUsQ0FDSjtBQUNJQyxRQUFBQSxLQUFLLEVBQUUsZUFEWDtBQUVJQyxRQUFBQSxLQUFLLEVBQUU1QixFQUFFLEdBQUcsS0FGaEI7QUFHSTZCLFFBQUFBLFdBQVcsRUFBRSwyQ0FIakI7QUFJSUMsUUFBQUEsU0FBUyxFQUFFO0FBSmYsT0FESSxFQU9KO0FBQ0lILFFBQUFBLEtBQUssRUFBRSxXQURYO0FBRUlDLFFBQUFBLEtBQUssRUFBRTVCLEVBQUUsR0FBRyxjQUZoQjtBQUdJNkIsUUFBQUEsV0FBVyxFQUFFLHlDQUhqQjtBQUlJRSxRQUFBQSxHQUFHLEVBQUUvQixFQUFFLEdBQUcsS0FKZDtBQUtJOEIsUUFBQUEsU0FBUyxFQUFFO0FBTGYsT0FQSSxFQWNKO0FBQ0lILFFBQUFBLEtBQUssRUFBRSxjQURYO0FBRUlDLFFBQUFBLEtBQUssRUFBRTVCLEVBQUUsR0FBRyxLQUZoQjtBQUdJNkIsUUFBQUEsV0FBVyxFQUFFLG9DQUhqQjtBQUlJRSxRQUFBQSxHQUFHLEVBQUUvQixFQUFFLEdBQUcsS0FKZDtBQUtJOEIsUUFBQUEsU0FBUyxFQUFFO0FBTGYsT0FkSSxFQXFCSjtBQUNJSCxRQUFBQSxLQUFLLEVBQUUsaUNBRFg7QUFFSUMsUUFBQUEsS0FBSyxFQUFFNUIsRUFBRSxHQUFHLEtBRmhCO0FBR0k2QixRQUFBQSxXQUFXLEVBQUUsbUNBSGpCO0FBSUlFLFFBQUFBLEdBQUcsRUFBRS9CLEVBQUUsR0FBRyxLQUpkO0FBS0k4QixRQUFBQSxTQUFTLEVBQUU7QUFMZixPQXJCSSxFQTRCSjtBQUNJSCxRQUFBQSxLQUFLLEVBQUUsUUFEWDtBQUVJQyxRQUFBQSxLQUFLLEVBQUU1QixFQUFFLEdBQUcsS0FGaEI7QUFHSTZCLFFBQUFBLFdBQVcsRUFBRSwwQ0FIakI7QUFJSUUsUUFBQUEsR0FBRyxFQUFFL0IsRUFBRSxHQUFHO0FBSmQsT0E1QkksRUFrQ0o7QUFDSWdDLFFBQUFBLEVBQUUsRUFBRSxHQURSO0FBRUlMLFFBQUFBLEtBQUssRUFBRSxpQkFGWDtBQUdJQyxRQUFBQSxLQUFLLEVBQUU1QixFQUFFLEdBQUcsY0FIaEI7QUFJSTZCLFFBQUFBLFdBQVcsRUFBRSwyQ0FKakI7QUFLSUMsUUFBQUEsU0FBUyxFQUFFO0FBTGYsT0FsQ0ksRUF5Q0o7QUFDSUUsUUFBQUEsRUFBRSxFQUFFLElBRFI7QUFFSUwsUUFBQUEsS0FBSyxFQUFFLGlCQUZYO0FBR0lFLFFBQUFBLFdBQVcsRUFBRSxvQ0FIakI7QUFJSUQsUUFBQUEsS0FBSyxFQUFFNUIsRUFBRSxHQUFHO0FBSmhCLE9BekNJLEVBK0NKO0FBQ0kyQixRQUFBQSxLQUFLLEVBQUUsWUFEWDtBQUVJQyxRQUFBQSxLQUFLLEVBQUUxQixTQUZYO0FBR0k2QixRQUFBQSxHQUFHLEVBQUV6QixRQUhUO0FBSUl1QixRQUFBQSxXQUFXLEVBQUUsMENBSmpCO0FBS0lDLFFBQUFBLFNBQVMsRUFBRTtBQUxmLE9BL0NJLEVBc0RKO0FBQ0lILFFBQUFBLEtBQUssRUFBRSxTQURYO0FBRUlDLFFBQUFBLEtBQUssRUFBRXZCLEtBQUssR0FBRyxXQUZuQjtBQUdJMEIsUUFBQUEsR0FBRyxFQUFFMUIsS0FBSyxHQUFHLFdBSGpCO0FBSUl3QixRQUFBQSxXQUFXLEVBQUU7QUFKakIsT0F0REksRUE0REo7QUFDSUYsUUFBQUEsS0FBSyxFQUFFLE9BRFg7QUFFSUMsUUFBQUEsS0FBSyxFQUFFdkIsS0FBSyxHQUFHLFdBRm5CO0FBR0l5QixRQUFBQSxTQUFTLEVBQUUsZUFIZjtBQUlJRCxRQUFBQSxXQUFXLEVBQUU7QUFKakIsT0E1REksRUFrRUo7QUFDSUYsUUFBQUEsS0FBSyxFQUFFLFNBRFg7QUFFSUMsUUFBQUEsS0FBSyxFQUFFdkIsS0FBSyxHQUFHLFdBRm5CO0FBR0l5QixRQUFBQSxTQUFTLEVBQUUsa0JBSGY7QUFJSUQsUUFBQUEsV0FBVyxFQUFFO0FBSmpCLE9BbEVJLEVBd0VKO0FBQ0lGLFFBQUFBLEtBQUssRUFBRSxZQURYO0FBRUlDLFFBQUFBLEtBQUssRUFBRXZCLEtBQUssR0FBRyxXQUZuQjtBQUdJeUIsUUFBQUEsU0FBUyxFQUFFLGVBSGY7QUFJSUQsUUFBQUEsV0FBVyxFQUFFO0FBSmpCLE9BeEVJLEVBOEVKO0FBQ0lGLFFBQUFBLEtBQUssRUFBRSxRQURYO0FBRUlDLFFBQUFBLEtBQUssRUFBRXRCLFFBQVEsR0FBRyxXQUZ0QjtBQUdJd0IsUUFBQUEsU0FBUyxFQUFFLHNDQUhmO0FBSUlELFFBQUFBLFdBQVcsRUFBRTtBQUpqQixPQTlFSSxFQW9GSjtBQUNJRixRQUFBQSxLQUFLLEVBQUUsZ0JBRFg7QUFFSUMsUUFBQUEsS0FBSyxFQUFFdEIsUUFBUSxHQUFHLFdBRnRCO0FBR0l3QixRQUFBQSxTQUFTLEVBQUUsa0JBSGY7QUFJSUQsUUFBQUEsV0FBVyxFQUFFO0FBSmpCLE9BcEZJLEVBMEZKO0FBQ0lGLFFBQUFBLEtBQUssRUFBRSxrQkFEWDtBQUVJTSxRQUFBQSxHQUFHLEVBQUUsb0JBRlQ7QUFHSUwsUUFBQUEsS0FBSyxFQUFFNUIsRUFBRSxHQUFHLEtBSGhCO0FBSUk4QixRQUFBQSxTQUFTLEVBQUUsb0NBSmY7QUFLSUQsUUFBQUEsV0FBVyxFQUFFO0FBTGpCLE9BMUZJO0FBMUJ5QyxLQUF0QyxDQUFmO0FBOEhBckIsSUFBQUEsUUFBUSxDQUFDakgsTUFBVDtBQUNILEdBM0lELENBcnhGd0IsQ0FrNkZ4Qjs7O0FBQ0EsTUFBSTJJLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBWTtBQUNsQyxRQUFJLENBQUM5TSxRQUFRLENBQUM2SSxhQUFULENBQXVCLCtCQUF2QixDQUFMLEVBQThEO0FBQzFEO0FBQ0g7O0FBRUQsUUFBSWtFLE1BQU0sR0FBR0MsQ0FBQyxDQUFDLCtCQUFELENBQWQ7QUFDQSxRQUFJUixLQUFLLEdBQUc5QixNQUFNLEVBQWxCO0FBQ0EsUUFBSWlDLEdBQUcsR0FBR2pDLE1BQU0sRUFBaEI7O0FBRUEsYUFBU3VDLEVBQVQsQ0FBWVQsS0FBWixFQUFtQkcsR0FBbkIsRUFBd0JPLEtBQXhCLEVBQStCO0FBQzNCLFVBQUlYLEtBQUssR0FBRyxFQUFaO0FBQ0EsVUFBSVksS0FBSyxHQUFHLEVBQVo7O0FBRUEsVUFBS1IsR0FBRyxHQUFHSCxLQUFQLEdBQWdCLEdBQWhCLElBQXVCVSxLQUFLLElBQUksT0FBcEMsRUFBNkM7QUFDekNYLFFBQUFBLEtBQUssR0FBRyxRQUFSO0FBQ0FZLFFBQUFBLEtBQUssR0FBR1gsS0FBSyxDQUFDM0IsTUFBTixDQUFhLE9BQWIsQ0FBUjtBQUNILE9BSEQsTUFHTyxJQUFJcUMsS0FBSyxJQUFJLFdBQWIsRUFBMEI7QUFDN0JYLFFBQUFBLEtBQUssR0FBRyxZQUFSO0FBQ0FZLFFBQUFBLEtBQUssR0FBR1gsS0FBSyxDQUFDM0IsTUFBTixDQUFhLE9BQWIsQ0FBUjtBQUNILE9BSE0sTUFHQTtBQUNIc0MsUUFBQUEsS0FBSyxHQUFHWCxLQUFLLENBQUMzQixNQUFOLENBQWEsT0FBYixJQUF3QixLQUF4QixHQUFnQzhCLEdBQUcsQ0FBQzlCLE1BQUosQ0FBVyxPQUFYLENBQXhDO0FBQ0g7O0FBRURtQyxNQUFBQSxDQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q0ksSUFBeEMsQ0FBNkNELEtBQTdDO0FBQ0FILE1BQUFBLENBQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDSSxJQUF6QyxDQUE4Q2IsS0FBOUM7QUFDSDs7QUFFRFEsSUFBQUEsTUFBTSxDQUFDTSxlQUFQLENBQXVCO0FBQ25CQyxNQUFBQSxTQUFTLEVBQUU5TSxNQUFNLENBQUMrTSxLQUFQLEVBRFE7QUFFbkJDLE1BQUFBLFNBQVMsRUFBRWhCLEtBRlE7QUFHbkJpQixNQUFBQSxPQUFPLEVBQUVkLEdBSFU7QUFJbkJlLE1BQUFBLEtBQUssRUFBRSxNQUpZO0FBS25CQyxNQUFBQSxVQUFVLEVBQUUsYUFMTztBQU1uQkMsTUFBQUEsV0FBVyxFQUFFLG1CQU5NO0FBT25CQyxNQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxDQUFDbkQsTUFBTSxFQUFQLEVBQVdBLE1BQU0sRUFBakIsQ0FETDtBQUVKLHFCQUFhLENBQUNBLE1BQU0sR0FBR00sUUFBVCxDQUFrQixDQUFsQixFQUFxQixNQUFyQixDQUFELEVBQStCTixNQUFNLEdBQUdNLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsTUFBckIsQ0FBL0IsQ0FGVDtBQUdKLHVCQUFlLENBQUNOLE1BQU0sR0FBR00sUUFBVCxDQUFrQixDQUFsQixFQUFxQixNQUFyQixDQUFELEVBQStCTixNQUFNLEVBQXJDLENBSFg7QUFJSix3QkFBZ0IsQ0FBQ0EsTUFBTSxHQUFHTSxRQUFULENBQWtCLEVBQWxCLEVBQXNCLE1BQXRCLENBQUQsRUFBZ0NOLE1BQU0sRUFBdEMsQ0FKWjtBQUtKLHNCQUFjLENBQUNBLE1BQU0sR0FBR0MsT0FBVCxDQUFpQixPQUFqQixDQUFELEVBQTRCRCxNQUFNLEdBQUdvRCxLQUFULENBQWUsT0FBZixDQUE1QixDQUxWO0FBTUosc0JBQWMsQ0FBQ3BELE1BQU0sR0FBR00sUUFBVCxDQUFrQixDQUFsQixFQUFxQixPQUFyQixFQUE4QkwsT0FBOUIsQ0FBc0MsT0FBdEMsQ0FBRCxFQUFpREQsTUFBTSxHQUFHTSxRQUFULENBQWtCLENBQWxCLEVBQXFCLE9BQXJCLEVBQThCOEMsS0FBOUIsQ0FBb0MsT0FBcEMsQ0FBakQ7QUFOVjtBQVBXLEtBQXZCLEVBZUdiLEVBZkg7QUFpQkFBLElBQUFBLEVBQUUsQ0FBQ1QsS0FBRCxFQUFRRyxHQUFSLEVBQWEsRUFBYixDQUFGO0FBQ0gsR0E3Q0QsQ0FuNkZ3QixDQWs5RnhCOzs7QUFDQSxNQUFJb0Isa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFXO0FBQ2hDLFFBQUlDLE1BQU0sR0FBR2hPLFFBQVEsQ0FBQzZJLGFBQVQsQ0FBdUIsZ0NBQXZCLENBQWI7O0FBRUEsUUFBSW1GLE1BQUosRUFBWTtBQUNSQSxNQUFBQSxNQUFNLENBQUN4RSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFXO0FBQ3hDeUUsUUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixLQUFLeE4sWUFBTCxDQUFrQixhQUFsQixDQUF2QjtBQUNILE9BRkQ7QUFHSDtBQUNKLEdBUkQsQ0FuOUZ3QixDQTY5RnhCOzs7QUFDQSxTQUFPO0FBQ0h5TixJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZDtBQUNBdEIsTUFBQUEsbUJBQW1CLEdBRkwsQ0FJZDs7QUFDQWlCLE1BQUFBLGtCQUFrQixHQUxKLENBT2Q7O0FBQ0FqTyxNQUFBQSxxQkFBcUI7QUFDckJzRSxNQUFBQSxxQkFBcUIsR0FUUCxDQVdkOztBQUNBQyxNQUFBQSxpQkFBaUI7QUFDakJXLE1BQUFBLGlCQUFpQjtBQUNqQkMsTUFBQUEsaUJBQWlCO0FBQ2pCQyxNQUFBQSxpQkFBaUI7QUFDakJHLE1BQUFBLGlCQUFpQjtBQUNqQkUsTUFBQUEsaUJBQWlCO0FBQ2pCTSxNQUFBQSxpQkFBaUI7QUFDakJPLE1BQUFBLGlCQUFpQixHQW5CSCxDQXFCZDs7QUFDQUcsTUFBQUEsZ0JBQWdCO0FBQ2hCTSxNQUFBQSxnQkFBZ0I7QUFDaEJDLE1BQUFBLGdCQUFnQjtBQUNoQlUsTUFBQUEsZ0JBQWdCO0FBQ2hCVSxNQUFBQSxnQkFBZ0I7QUFDaEJDLE1BQUFBLGdCQUFnQjtBQUNoQkMsTUFBQUEsaUJBQWlCO0FBQ2pCQyxNQUFBQSxpQkFBaUI7QUFDakJDLE1BQUFBLGlCQUFpQjtBQUNqQkMsTUFBQUEsaUJBQWlCO0FBQ2pCQyxNQUFBQSxpQkFBaUIsR0FoQ0gsQ0FrQ2Q7O0FBQ0FHLE1BQUFBLGVBQWU7QUFDZlUsTUFBQUEsZ0JBQWdCLEdBcENGLENBc0NkOztBQUNBYSxNQUFBQSxvQkFBb0IsR0F2Q04sQ0F5Q2Q7O0FBQ0FLLE1BQUFBLG1CQUFtQjtBQUN0QjtBQTVDRSxHQUFQO0FBOENILENBNWdHZSxFQUFoQixDLENBOGdHQTs7O0FBQ0EsSUFBSSxJQUFKLEVBQW1DO0FBQy9COEQsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCek8sU0FBakI7QUFDSCxDLENBRUQ7OztBQUNBVyxNQUFNLENBQUMrTixrQkFBUCxDQUEwQixZQUFXO0FBQ2pDMU8sRUFBQUEsU0FBUyxDQUFDdU8sSUFBVjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS93aWRnZXRzLmpzPzkzMWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVFdpZGdldHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RhdGlzdGljcyB3aWRnZXRzXG4gICAgdmFyIGluaXRTdGF0aXN0aWNzV2lkZ2V0MyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2hhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXRpc3RpY3Mtd2lkZ2V0LTMtY2hhcnQnKTtcblxuICAgICAgICBbXS5zbGljZS5jYWxsKGNoYXJ0cykubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdoZWlnaHQnKSk7XG5cbiAgICAgICAgICAgIGlmICggIWVsZW1lbnQgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29sb3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1jaGFydC1jb2xvcicpO1xuXG4gICAgICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLScgKyAnZ3JheS04MDAnKTtcbiAgICAgICAgICAgIHZhciBiYXNlQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy0nICsgY29sb3IpO1xuICAgICAgICAgICAgdmFyIGxpZ2h0Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC0nICsgY29sb3IgKTtcblxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDUsIDMyLCA3MCwgNDBdXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogJ3Ntb290aCcsXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFtiYXNlQ29sb3JdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBheGlzVGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmcm9udCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNFNEU2RUYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbG9yczogW2Jhc2VDb2xvcl0sXG4gICAgICAgICAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFtiYXNlQ29sb3JdLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogW2xpZ2h0Q29sb3JdLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgY2hhcnQucmVuZGVyKCk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgdmFyIGluaXRTdGF0aXN0aWNzV2lkZ2V0NCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2hhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXRpc3RpY3Mtd2lkZ2V0LTQtY2hhcnQnKTtcblxuICAgICAgICBbXS5zbGljZS5jYWxsKGNoYXJ0cykubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdoZWlnaHQnKSk7XG5cbiAgICAgICAgICAgIGlmICggIWVsZW1lbnQgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29sb3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1jaGFydC1jb2xvcicpO1xuXG4gICAgICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLScgKyAnZ3JheS04MDAnKTtcbiAgICAgICAgICAgIHZhciBiYXNlQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy0nICsgY29sb3IpO1xuICAgICAgICAgICAgdmFyIGxpZ2h0Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC0nICsgY29sb3IgKTtcblxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFs0MCwgNDAsIDMwLCAzMCwgMzUsIDM1LCA1MF1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge30sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuM1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogW2Jhc2VDb2xvcl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJ10sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBheGlzVGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmcm9udCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNFNEU2RUYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbG9yczogW2Jhc2VDb2xvcl0sXG4gICAgICAgICAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFtiYXNlQ29sb3JdLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogW2xpZ2h0Q29sb3JdLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgY2hhcnQucmVuZGVyKCk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gQ2hhcnRzIHdpZGdldHNcbiAgICB2YXIgaW5pdENoYXJ0c1dpZGdldDEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2NoYXJ0c193aWRnZXRfMV9jaGFydFwiKTtcblxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktNTAwJyk7XG4gICAgICAgIHZhciBib3JkZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMjAwJyk7XG4gICAgICAgIHZhciBiYXNlQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1wcmltYXJ5Jyk7XG4gICAgICAgIHZhciBzZWNvbmRhcnlDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMzAwJyk7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXG4gICAgICAgICAgICAgICAgZGF0YTogWzQ0LCA1NSwgNTcsIDU2LCA2MSwgNThdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1JldmVudWUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs3NiwgODUsIDEwMSwgOTgsIDg3LCAxMDVdXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiBbJzMwJSddLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsndHJhbnNwYXJlbnQnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCddLFxuICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBheGlzVGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3JzOiBbYmFzZUNvbG9yLCBzZWNvbmRhcnlDb2xvcl0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogNCxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICBjaGFydC5yZW5kZXIoKTsgICAgICBcbiAgICB9XG5cbiAgICB2YXIgaW5pdENoYXJ0c1dpZGdldDIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2NoYXJ0c193aWRnZXRfMl9jaGFydFwiKTtcblxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktNTAwJyk7XG4gICAgICAgIHZhciBib3JkZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMjAwJyk7XG4gICAgICAgIHZhciBiYXNlQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy13YXJuaW5nJyk7XG4gICAgICAgIHZhciBzZWNvbmRhcnlDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMzAwJyk7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXG4gICAgICAgICAgICAgICAgZGF0YTogWzQ0LCA1NSwgNTcsIDU2LCA2MSwgNThdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1JldmVudWUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs3NiwgODUsIDEwMSwgOTgsIDg3LCAxMDVdXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiBbJzMwJSddLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsndHJhbnNwYXJlbnQnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCddLFxuICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBheGlzVGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3JzOiBbYmFzZUNvbG9yLCBzZWNvbmRhcnlDb2xvcl0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogNCxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICBjaGFydC5yZW5kZXIoKTsgICBcbiAgICB9XG5cbiAgICB2YXIgaW5pdENoYXJ0c1dpZGdldDMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2NoYXJ0c193aWRnZXRfM19jaGFydFwiKTtcblxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktNTAwJyk7XG4gICAgICAgIHZhciBib3JkZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMjAwJyk7XG4gICAgICAgIHZhciBiYXNlQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1pbmZvJyk7XG4gICAgICAgIHZhciBsaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtaW5mbycpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDAsIDQwLCA5MCwgOTAsIDcwLCA3MF1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxuICAgICAgICAgICAgICAgIGNvbG9yczogW2Jhc2VDb2xvcl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJ10sXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmcm9udCcsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJhc2VDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFzaEFycmF5OiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3JzOiBbbGlnaHRDb2xvcl0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogNCxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogYmFzZUNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgIGNoYXJ0LnJlbmRlcigpOyAgIFxuICAgIH1cblxuICAgIHZhciBpbml0Q2hhcnRzV2lkZ2V0NCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfY2hhcnRzX3dpZGdldF80X2NoYXJ0XCIpO1xuXG4gICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdoZWlnaHQnKSk7XG4gICAgICAgIHZhciBsYWJlbENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS01MDAnKTtcbiAgICAgICAgdmFyIGJvcmRlckNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS0yMDAnKTtcblxuICAgICAgICB2YXIgYmFzZUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtc3VjY2VzcycpO1xuICAgICAgICB2YXIgYmFzZUxpZ2h0Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC1zdWNjZXNzJyk7XG4gICAgICAgIHZhciBzZWNvbmRhcnlDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXdhcm5pbmcnKTtcbiAgICAgICAgdmFyIHNlY29uZGFyeUxpZ2h0Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC13YXJuaW5nJyk7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXG4gICAgICAgICAgICAgICAgZGF0YTogWzYwLCA1MCwgODAsIDQwLCAxMDAsIDYwXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdSZXZlbnVlJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbNzAsIDYwLCAxMTAsIDQwLCA1MCwgNzBdXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7fSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCddLFxuICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBheGlzVGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjcm9zc2hhaXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFtiYXNlQ29sb3IsIHNlY29uZGFyeUNvbG9yXSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgc3Ryb2tlRGFzaEFycmF5OiA0LFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgICAgIGNvbG9yczogW2Jhc2VMaWdodENvbG9yLCBzZWNvbmRhcnlMaWdodENvbG9yXSxcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogW2Jhc2VMaWdodENvbG9yLCBzZWNvbmRhcnlMaWdodENvbG9yXSxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICBjaGFydC5yZW5kZXIoKTsgICBcbiAgICB9XG5cbiAgICB2YXIgaW5pdENoYXJ0c1dpZGdldDUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2NoYXJ0c193aWRnZXRfNV9jaGFydFwiKTtcblxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktNTAwJyk7XG4gICAgICAgIHZhciBib3JkZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMjAwJyk7XG5cbiAgICAgICAgdmFyIGJhc2VDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXByaW1hcnknKTtcbiAgICAgICAgdmFyIHNlY29uZGFyeUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtaW5mbycpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs0MCwgNTAsIDY1LCA3MCwgNTAsIDMwXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdSZXZlbnVlJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbLTMwLCAtNDAsIC01NSwgLTYwLCAtNDAsIC0yMF1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogWycxMiUnXSxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJ3RyYW5zcGFyZW50J11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnXSxcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgIG1pbjogLTgwLFxuICAgICAgICAgICAgICAgIG1heDogODAsXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3JzOiBbYmFzZUNvbG9yLCBzZWNvbmRhcnlDb2xvcl0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogNCxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICBjaGFydC5yZW5kZXIoKTsgICBcbiAgICB9XG5cbiAgICB2YXIgaW5pdENoYXJ0c1dpZGdldDYgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2NoYXJ0c193aWRnZXRfNl9jaGFydFwiKTtcblxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktNTAwJyk7XG4gICAgICAgIHZhciBib3JkZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMjAwJyk7XG5cbiAgICAgICAgdmFyIGJhc2VDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXByaW1hcnknKTtcbiAgICAgICAgdmFyIGJhc2VMaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtcHJpbWFyeScpO1xuICAgICAgICB2YXIgc2Vjb25kYXJ5Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1pbmZvJyk7ICAgICAgICBcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs0MCwgNTAsIDY1LCA3MCwgNTAsIDMwXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdSZXZlbnVlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGE6IFsyMCwgMjAsIDI1LCAzMCwgMzAsIDIwXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFeHBlbnNlcycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs1MCwgODAsIDYwLCA5MCwgNTAsIDcwXVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IFsnMTIlJ11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJ3RyYW5zcGFyZW50J11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnXSxcbiAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgIG1heDogMTIwLFxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yczogW2Jhc2VDb2xvciwgc2Vjb25kYXJ5Q29sb3IsIGJhc2VMaWdodENvbG9yXSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgc3Ryb2tlRGFzaEFycmF5OiA0LFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICBjaGFydC5yZW5kZXIoKTsgICBcbiAgICB9XG5cbiAgICB2YXIgaW5pdENoYXJ0c1dpZGdldDcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2NoYXJ0c193aWRnZXRfN19jaGFydFwiKTtcblxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuXG4gICAgICAgIHZhciBsYWJlbENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS01MDAnKTtcbiAgICAgICAgdmFyIGJvcmRlckNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS0yMDAnKTtcbiAgICAgICAgdmFyIHN0cm9rZUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS0zMDAnKTtcblxuICAgICAgICB2YXIgY29sb3IxID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtd2FybmluZycpO1xuICAgICAgICB2YXIgY29sb3IxTGlnaHQgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC13YXJuaW5nJyk7XG5cbiAgICAgICAgdmFyIGNvbG9yMiA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXN1Y2Nlc3MnKTtcbiAgICAgICAgdmFyIGNvbG9yMkxpZ2h0ID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtc3VjY2VzcycpO1xuXG4gICAgICAgIHZhciBjb2xvcjMgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1wcmltYXJ5Jyk7ICBcbiAgICAgICAgdmFyIGNvbG9yM0xpZ2h0ID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtcHJpbWFyeScpOyAgXG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXG4gICAgICAgICAgICAgICAgZGF0YTogWzMwLCAzMCwgNTAsIDUwLCAzNSwgMzVdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1JldmVudWUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs1NSwgMjAsIDIwLCAyMCwgNzAsIDcwXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFeHBlbnNlcycsXG4gICAgICAgICAgICAgICAgZGF0YTogWzYwLCA2MCwgNDAsIDQwLCAzMCwgMzBdXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge30sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICBjdXJ2ZTogJ3Ntb290aCcsXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtjb2xvcjEsICd0cmFuc3BhcmVudCcsICd0cmFuc3BhcmVudCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjcm9zc2hhaXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFtjb2xvcjEsIGNvbG9yMiwgY29sb3IzXSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgc3Ryb2tlRGFzaEFycmF5OiA0LFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgICAgIGNvbG9yczogW2NvbG9yMUxpZ2h0LCBjb2xvcjJMaWdodCwgY29sb3IzTGlnaHRdLFxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBbY29sb3IxLCBjb2xvcjIsIGNvbG9yM10sXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7ICAgXG4gICAgfVxuXG4gICAgdmFyIGluaXRDaGFydHNXaWRnZXQ4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9jaGFydHNfd2lkZ2V0XzhfY2hhcnRcIik7XG5cbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcblxuICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktNTAwJyk7XG4gICAgICAgIHZhciBib3JkZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMjAwJyk7XG4gICAgICAgIHZhciBzdHJva2VDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMzAwJyk7XG5cbiAgICAgICAgdmFyIGNvbG9yMSA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXdhcm5pbmcnKTtcbiAgICAgICAgdmFyIGNvbG9yMUxpZ2h0ID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtd2FybmluZycpO1xuXG4gICAgICAgIHZhciBjb2xvcjIgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1zdWNjZXNzJyk7XG4gICAgICAgIHZhciBjb2xvcjJMaWdodCA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LXN1Y2Nlc3MnKTtcblxuICAgICAgICB2YXIgY29sb3IzID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtcHJpbWFyeScpOyAgXG4gICAgICAgIHZhciBjb2xvcjNMaWdodCA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LXByaW1hcnknKTsgIFxuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgMzAsIDUwLCA1MCwgMzUsIDM1XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdSZXZlbnVlJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbNTUsIDIwLCAyMCwgMjAsIDcwLCA3MF1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXhwZW5zZXMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs2MCwgNjAsIDQwLCA0MCwgMzAsIDMwXVxuICAgICAgICAgICAgfSxdLFxuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7fSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgIGNvbG9yczogW2NvbG9yMSwgY29sb3IyLCBjb2xvcjNdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjcm9zc2hhaXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxuICAgICAgICAgICAgICAgIG9mZnNldFk6IDAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFtjb2xvcjFMaWdodCwgY29sb3IyTGlnaHQsIGNvbG9yM0xpZ2h0XSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgc3Ryb2tlRGFzaEFycmF5OiA0LFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtjb2xvcjEsIGNvbG9yMiwgY29sb3IzXSxcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogW2NvbG9yMSwgY29sb3IyLCBjb2xvcjNdLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgIGNoYXJ0LnJlbmRlcigpOyAgIFxuICAgIH1cblxuICAgIC8vIE1peGVkIHdpZGdldHNcbiAgICB2YXIgaW5pdE1peGVkV2lkZ2V0MiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2hhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1peGVkLXdpZGdldC0yLWNoYXJ0Jyk7XG5cbiAgICAgICAgdmFyIGNvbG9yO1xuICAgICAgICB2YXIgc3Ryb2tlQ29sb3I7XG4gICAgICAgIHZhciBoZWlnaHQ7XG4gICAgICAgIHZhciBsYWJlbENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS01MDAnKTtcbiAgICAgICAgdmFyIGJvcmRlckNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS0yMDAnKTtcbiAgICAgICAgdmFyIG9wdGlvbnM7XG4gICAgICAgIHZhciBjaGFydDtcblxuICAgICAgICBbXS5zbGljZS5jYWxsKGNoYXJ0cykubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcbiAgICAgICAgICAgIGNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtJyArIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1rdC1jb2xvclwiKSk7XG4gICAgICAgICAgICBzdHJva2VDb2xvciA9IEtUVXRpbC5jb2xvckRhcmtlbihjb2xvciwgMTUpO1xuXG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDQ1LCAzMiwgNzAsIDQwLCA0MCwgNDBdXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZHJvcFNoYWRvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWRPblNlcmllczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbc3Ryb2tlQ29sb3JdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZyddLFxuICAgICAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjcm9zc2hhaXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogODAsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJ3RyYW5zcGFyZW50J10sXG4gICAgICAgICAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFtjb2xvcl0sXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBbc3Ryb2tlQ29sb3JdLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBjaGFydC5yZW5kZXIoKTsgIFxuICAgICAgICB9KTsgICAgICAgIFxuICAgIH1cblxuICAgIHZhciBpbml0TWl4ZWRXaWRnZXQzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWl4ZWQtd2lkZ2V0LTMtY2hhcnQnKTtcblxuICAgICAgICBbXS5zbGljZS5jYWxsKGNoYXJ0cykubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdoZWlnaHQnKSk7XG5cbiAgICAgICAgICAgIGlmICggIWVsZW1lbnQgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29sb3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1jaGFydC1jb2xvcicpO1xuXG4gICAgICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLScgKyAnZ3JheS04MDAnKTtcbiAgICAgICAgICAgIHZhciBzdHJva2VDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLScgKyAnZ3JheS0zMDAnKTtcbiAgICAgICAgICAgIHZhciBiYXNlQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy0nICsgY29sb3IpO1xuICAgICAgICAgICAgdmFyIGxpZ2h0Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC0nICsgY29sb3IgKTtcblxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgMjUsIDQ1LCAzMCwgNTUsIDU1XVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3BhcmtsaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7fSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogW2Jhc2VDb2xvcl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnXSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzdHJva2VDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogNjAsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbbGlnaHRDb2xvcl0sXG4gICAgICAgICAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFtsaWdodENvbG9yXSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtiYXNlQ29sb3JdLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgY2hhcnQucmVuZGVyKCk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgdmFyIGluaXRNaXhlZFdpZGdldDQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taXhlZC13aWRnZXQtNC1jaGFydCcpO1xuXG4gICAgICAgIFtdLnNsaWNlLmNhbGwoY2hhcnRzKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcblxuICAgICAgICAgICAgaWYgKCAhZWxlbWVudCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb2xvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWNoYXJ0LWNvbG9yJyk7XG5cbiAgICAgICAgICAgIHZhciBiYXNlQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy0nICsgY29sb3IpO1xuICAgICAgICAgICAgdmFyIGxpZ2h0Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC0nICsgY29sb3IgKTtcbiAgICAgICAgICAgIHZhciBsYWJlbENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtJyArICdncmF5LTcwMCcpO1xuXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBzZXJpZXM6IFs3NF0sXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JhZGlhbEJhcicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByYWRpYWxCYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvbGxvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjY1JVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dPbjogXCJhbHdheXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnNzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjMwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwgKyAnJSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2s6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbYmFzZUNvbG9yXSxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgbGluZUNhcDogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXCJQcm9ncmVzc1wiXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBjaGFydC5yZW5kZXIoKTtcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICB9XG5cbiAgICB2YXIgaW5pdE1peGVkV2lkZ2V0NSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2hhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1peGVkLXdpZGdldC01LWNoYXJ0Jyk7XG5cbiAgICAgICAgW10uc2xpY2UuY2FsbChjaGFydHMpLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuXG4gICAgICAgICAgICBpZiAoICFlbGVtZW50ICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvbG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtY2hhcnQtY29sb3InKTtcblxuICAgICAgICAgICAgdmFyIGxhYmVsQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy0nICsgJ2dyYXktODAwJyk7XG4gICAgICAgICAgICB2YXIgc3Ryb2tlQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy0nICsgJ2dyYXktMzAwJyk7XG4gICAgICAgICAgICB2YXIgYmFzZUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtJyArIGNvbG9yKTtcbiAgICAgICAgICAgIHZhciBsaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtJyArIGNvbG9yICk7XG5cbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDMwLCA2MCwgMjUsIDI1LCA0MF1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge30sXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbGwxOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdncmFkaWVudCcsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZUludGVuc2l0eTogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUb0NvbG9yczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZUNvbG9yczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRvOiAwLjM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbMjUsIDUwLCAxMDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JTdG9wczogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogW2Jhc2VDb2xvcl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnXSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzdHJva2VDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogNjUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbbGlnaHRDb2xvcl0sXG4gICAgICAgICAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFtsaWdodENvbG9yXSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtiYXNlQ29sb3JdLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgY2hhcnQucmVuZGVyKCk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgdmFyIGluaXRNaXhlZFdpZGdldDYgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taXhlZC13aWRnZXQtNi1jaGFydCcpO1xuXG4gICAgICAgIFtdLnNsaWNlLmNhbGwoY2hhcnRzKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcblxuICAgICAgICAgICAgaWYgKCAhZWxlbWVudCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb2xvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWNoYXJ0LWNvbG9yJyk7XG5cbiAgICAgICAgICAgIHZhciBsYWJlbENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtJyArICdncmF5LTgwMCcpO1xuICAgICAgICAgICAgdmFyIHN0cm9rZUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtJyArICdncmF5LTMwMCcpO1xuICAgICAgICAgICAgdmFyIGJhc2VDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLScgKyBjb2xvcik7XG4gICAgICAgICAgICB2YXIgbGlnaHRDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LScgKyBjb2xvciApO1xuXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzMwLCAyNSwgNDUsIDMwLCA1NSwgNTVdXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbYmFzZUNvbG9yXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCddLFxuICAgICAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjcm9zc2hhaXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZnJvbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHN0cm9rZUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheTogM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFtsaWdodENvbG9yXSxcbiAgICAgICAgICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogW2xpZ2h0Q29sb3JdLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogW2Jhc2VDb2xvcl0sXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBjaGFydC5yZW5kZXIoKTtcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICB9XG5cbiAgICB2YXIgaW5pdE1peGVkV2lkZ2V0NyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2hhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1peGVkLXdpZGdldC03LWNoYXJ0Jyk7XG5cbiAgICAgICAgW10uc2xpY2UuY2FsbChjaGFydHMpLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuXG4gICAgICAgICAgICBpZiAoICFlbGVtZW50ICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvbG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtY2hhcnQtY29sb3InKTtcblxuICAgICAgICAgICAgdmFyIGxhYmVsQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy0nICsgJ2dyYXktODAwJyk7XG4gICAgICAgICAgICB2YXIgc3Ryb2tlQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy0nICsgJ2dyYXktMzAwJyk7XG4gICAgICAgICAgICB2YXIgYmFzZUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtJyArIGNvbG9yKTtcbiAgICAgICAgICAgIHZhciBsaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtJyArIGNvbG9yKTtcblxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsxNSwgMjUsIDE1LCA0MCwgMjAsIDUwXVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FyZWEnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3BhcmtsaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7fSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogW2Jhc2VDb2xvcl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnXSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzdHJva2VDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogNjAsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZURhdGFQb2ludHNTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsICsgXCIgdGhvdXNhbmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbbGlnaHRDb2xvcl0sXG4gICAgICAgICAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFtsaWdodENvbG9yXSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtiYXNlQ29sb3JdLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgY2hhcnQucmVuZGVyKCk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgdmFyIGluaXRNaXhlZFdpZGdldDEwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWl4ZWQtd2lkZ2V0LTEwLWNoYXJ0Jyk7XG5cbiAgICAgICAgdmFyIGNvbG9yO1xuICAgICAgICB2YXIgaGVpZ2h0O1xuICAgICAgICB2YXIgbGFiZWxDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktNTAwJyk7XG4gICAgICAgIHZhciBib3JkZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWdyYXktMjAwJyk7XG4gICAgICAgIHZhciBiYXNlTGlnaHRDb2xvcjtcbiAgICAgICAgdmFyIHNlY29uZGFyeUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS0zMDAnKTtcbiAgICAgICAgdmFyIGJhc2VDb2xvcjtcbiAgICAgICAgdmFyIG9wdGlvbnM7XG4gICAgICAgIHZhciBjaGFydDtcblxuICAgICAgICBbXS5zbGljZS5jYWxsKGNoYXJ0cykubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWt0LWNvbG9yXCIpO1xuICAgICAgICAgICAgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuICAgICAgICAgICAgYmFzZUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtJyArIGNvbG9yKTtcblxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdOZXQgUHJvZml0JyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzUwLCA2MCwgNzAsIDgwLCA2MCwgNTAsIDcwLCA2MF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdSZXZlbnVlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzUwLCA2MCwgNzAsIDgwLCA2MCwgNTAsIDcwLCA2MF1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiBbJzUwJSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJ3RyYW5zcGFyZW50J11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCddLFxuICAgICAgICAgICAgICAgICAgICBheGlzQm9yZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc1RpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBsYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiByZXZlbnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbYmFzZUNvbG9yLCBzZWNvbmRhcnlDb2xvcl0sXG4gICAgICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaEFycmF5OiA0LFxuICAgICAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgY2hhcnQucmVuZGVyKCk7ICAgICAgXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgdmFyIGluaXRNaXhlZFdpZGdldDEyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWl4ZWQtd2lkZ2V0LTEyLWNoYXJ0Jyk7XG5cbiAgICAgICAgdmFyIGNvbG9yO1xuICAgICAgICB2YXIgc3Ryb2tlQ29sb3I7XG4gICAgICAgIHZhciBoZWlnaHQ7XG4gICAgICAgIHZhciBsYWJlbENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS01MDAnKTtcbiAgICAgICAgdmFyIGJvcmRlckNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS0yMDAnKTtcbiAgICAgICAgdmFyIG9wdGlvbnM7XG4gICAgICAgIHZhciBjaGFydDtcblxuICAgICAgICBbXS5zbGljZS5jYWxsKGNoYXJ0cykubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIGhlaWdodCA9IHBhcnNlSW50KEtUVXRpbC5jc3MoZWxlbWVudCwgJ2hlaWdodCcpKTtcblxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTmV0IFByb2ZpdCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFszNSwgNjUsIDc1LCA1NSwgNDUsIDYwLCA1NV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdSZXZlbnVlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzQwLCA3MCwgODAsIDYwLCA1MCwgNjUsIDYwXVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogWyczMCUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJ3RyYW5zcGFyZW50J11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnXSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFsnc29saWQnLCAnc29saWQnXSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzAuMjUsIDFdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZmZmZmYnLCAnI2ZmZmZmZiddLFxuICAgICAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNoQXJyYXk6IDQsXG4gICAgICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgY2hhcnQucmVuZGVyKClcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICB9IFxuXG4gICAgdmFyIGluaXRNaXhlZFdpZGdldDEzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoZWlnaHQ7XG4gICAgICAgIHZhciBjaGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWl4ZWQtd2lkZ2V0LTEzLWNoYXJ0Jyk7XG5cbiAgICAgICAgW10uc2xpY2UuY2FsbChjaGFydHMpLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBwYXJzZUludChLVFV0aWwuY3NzKGVsZW1lbnQsICdoZWlnaHQnKSk7XG5cbiAgICAgICAgICAgIGlmICggIWVsZW1lbnQgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGxhYmVsQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy0nICsgJ2dyYXktODAwJyk7XG4gICAgICAgICAgICB2YXIgc3Ryb2tlQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy0nICsgJ2dyYXktMzAwJyk7XG5cbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ05ldCBQcm9maXQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMTUsIDI1LCAxNSwgNDAsIDIwLCA1MF1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHt9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ3JhZGllbnQnLFxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudDogeyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eUZyb206IDAuNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlUbzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BzOiBbMjAsIDEyMCwgMTIwLCAxMjBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogJ3Ntb290aCcsXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnI0ZGRkZGRiddXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJ10sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBheGlzVGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogbGFiZWxDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmcm9udCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaEFycmF5OiAzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDYwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGxhYmVsQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmZmZmZmJ10sXG4gICAgICAgICAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFtsYWJlbENvbG9yXSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFtzdHJva2VDb2xvcl0sXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBjaGFydC5yZW5kZXIoKTtcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICB9XG5cbiAgICB2YXIgaW5pdE1peGVkV2lkZ2V0MTQgPSBmdW5jdGlvbigpIHsgICBcdFx0XG5cdFx0dmFyIGNoYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taXhlZC13aWRnZXQtMTQtY2hhcnQnKTsgIFxuICAgICAgICB2YXIgb3B0aW9ucztcbiAgICAgICAgdmFyIGNoYXJ0O1xuICAgICAgICB2YXIgaGVpZ2h0O1xuXG4gICAgICAgIFtdLnNsaWNlLmNhbGwoY2hhcnRzKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpOyAgICAgIFxuICAgICAgICAgICAgdmFyIGxhYmVsQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy0nICsgJ2dyYXktODAwJyk7ICAgICAgXG5cbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSW5mbGF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzEsIDIuMSwgMSwgMi4xLCA0LjEsIDYuMSwgNC4xLCA0LjEsIDIuMSwgNC4xLCAyLjEsIDMuMSwgMSwgMSwgMi4xXVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZmZmZmYnXSwgICAgICAgICBcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBiYXI6IHsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLCAvLyB0b3AsIGNlbnRlciwgYm90dG9tXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICcyMCUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogLTIwLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogW1wiIzMwNDc1OFwiXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgICAgICAgICAgXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCIsIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCJdLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsYWJlbENvbG9yXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XHRcdFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgIGNoYXJ0LnJlbmRlcigpOyBcbiAgICAgICAgfSk7IFxuXHR9XG4gICAgXG4gICAgdmFyIGluaXRNaXhlZFdpZGdldDE2ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9jaGFydHNfbWl4ZWRfd2lkZ2V0XzE2X2NoYXJ0XCIpO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBsYWJlbHM6IFtcIlRvdGFsIE1lbWJlcnNcIl0sXG4gICAgICAgICAgICBzZXJpZXM6IFs3NF0sXG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFkaWFsQmFyJyxcbiAgICAgICAgICAgICAgICBvZmZzZXRZOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICByYWRpYWxCYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmdsZTogLTkwLFxuICAgICAgICAgICAgICAgICAgICBlbmRBbmdsZTogOTAsXG5cbiAgICAgICAgICAgICAgICAgICAgaG9sbG93OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjcwJVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dPbjogXCJhbHdheXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IC01LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1ncmF5LTUwMCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZ3JheS03MDAnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0cmFjazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtcHJpbWFyeScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yczogW0tUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXByaW1hcnknKV0sXG4gICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICBsaW5lQ2FwOiBcInJvdW5kXCIsXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8vIEZlZWRzIFdpZGdldHNcbiAgICB2YXIgaW5pdEZlZWRXaWRnZXQxID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X2Zvcm1zX3dpZGdldF8xX2Zvcm1cIik7XG4gICAgICAgIHZhciBlZGl0b3JJZCA9ICdrdF9mb3Jtc193aWRnZXRfMV9lZGl0b3InO1xuXG4gICAgICAgIGlmICggIWZvcm1FbCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluaXQgZWRpdG9yXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgbW9kdWxlczoge1xuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBcIiNrdF9mb3Jtc193aWRnZXRfMV9lZGl0b3JfdG9vbGJhclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnV2hhdCBpcyBvbiB5b3VyIG1pbmQgPycsXG4gICAgICAgICAgICB0aGVtZTogJ3Nub3cnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFmb3JtRWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgZWRpdG9yXG4gICAgICAgIHZhciBlZGl0b3JPYmogPSBuZXcgUXVpbGwoJyMnICsgZWRpdG9ySWQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHZhciBpbml0RmVlZHNXaWRnZXQ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3Rfd2lkZ2V0XzVfbG9hZF9tb3JlX2J0bicpO1xuICAgICAgICB2YXIgd2lkZ2V0NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF93aWRnZXRfNScpOyAgICAgICAgXG5cbiAgICAgICAgaWYgKGJ0bikge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJywgJ29uJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXQ1LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpOyAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7ICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuc2Nyb2xsVG8od2lkZ2V0NSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgXG4gICAgfSAgXG5cbiAgICAvLyBGb2xsb3cgYnV0dG9uXG4gICAgdmFyIGluaXRVc2VyRm9sbG93QnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBmb2xsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfdXNlcl9mb2xsb3dfYnV0dG9uJyk7XG5cbiAgICAgICAgaWYgKGZvbGxvdykge1xuICAgICAgICAgICAgZm9sbG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGFjdGlvbiBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gU2hvdyBpbmRpY2F0b3JcbiAgICAgICAgICAgICAgICBmb2xsb3cuc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrIFxuXHRcdFx0XHRmb2xsb3cuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgYnV0dG9uIHN0YXRlXG4gICAgICAgICAgICAgICAgaWYgKGZvbGxvdy5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tc3VjY2Vzc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvdy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3cuY2xhc3NMaXN0LnJlbW92ZShcImJ0bi1zdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93LmNsYXNzTGlzdC5hZGQoXCJidG4tbGlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3cucXVlcnlTZWxlY3RvcihcIi5zdmctaWNvblwiKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kaWNhdG9yLWxhYmVsXCIpLmlubmVySFRNTCA9ICdGb2xsb3cnO1xuXHRcdFx0XHQgICAgICAgIGZvbGxvdy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9LCAxNTAwKTsgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGxvdy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3cuY2xhc3NMaXN0LmFkZChcImJ0bi1zdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93LmNsYXNzTGlzdC5yZW1vdmUoXCJidG4tbGlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xsb3cucXVlcnlTZWxlY3RvcihcIi5zdmctaWNvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kaWNhdG9yLWxhYmVsXCIpLmlubmVySFRNTCA9ICdGb2xsb3dpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9sbG93LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApOyAgIFxuICAgICAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIC8vIENhbGVuZGFyXG4gICAgdmFyIGluaXRDYWxlbmRhcldpZGdldDEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGdWxsQ2FsZW5kYXIgPT09ICd1bmRlZmluZWQnIHx8ICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfY2FsZW5kYXJfd2lkZ2V0XzEnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvZGF5RGF0ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpO1xuICAgICAgICB2YXIgWU0gPSB0b2RheURhdGUuZm9ybWF0KCdZWVlZLU1NJyk7XG4gICAgICAgIHZhciBZRVNURVJEQVkgPSB0b2RheURhdGUuY2xvbmUoKS5zdWJ0cmFjdCgxLCAnZGF5JykuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIHZhciBUT0RBWSA9IHRvZGF5RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgdmFyIFRPTU9SUk9XID0gdG9kYXlEYXRlLmNsb25lKCkuYWRkKDEsICdkYXknKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcblxuICAgICAgICB2YXIgY2FsZW5kYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jYWxlbmRhcl93aWRnZXRfMScpO1xuICAgICAgICB2YXIgY2FsZW5kYXIgPSBuZXcgRnVsbENhbGVuZGFyLkNhbGVuZGFyKGNhbGVuZGFyRWwsIHtcbiAgICAgICAgICAgIGhlYWRlclRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5JyxcbiAgICAgICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgcmlnaHQ6ICdkYXlHcmlkTW9udGgsdGltZUdyaWRXZWVrLHRpbWVHcmlkRGF5LGxpc3RNb250aCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhlaWdodDogODAwLFxuICAgICAgICAgICAgY29udGVudEhlaWdodDogNzgwLFxuICAgICAgICAgICAgYXNwZWN0UmF0aW86IDMsICAvLyBzZWU6IGh0dHBzOi8vZnVsbGNhbGVuZGFyLmlvL2RvY3MvYXNwZWN0UmF0aW9cblxuICAgICAgICAgICAgbm93SW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICAgbm93OiBUT0RBWSArICdUMDk6MjU6MDAnLCAvLyBqdXN0IGZvciBkZW1vXG5cbiAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgZGF5R3JpZE1vbnRoOiB7IGJ1dHRvblRleHQ6ICdtb250aCcgfSxcbiAgICAgICAgICAgICAgICB0aW1lR3JpZFdlZWs6IHsgYnV0dG9uVGV4dDogJ3dlZWsnIH0sXG4gICAgICAgICAgICAgICAgdGltZUdyaWREYXk6IHsgYnV0dG9uVGV4dDogJ2RheScgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaW5pdGlhbFZpZXc6ICdkYXlHcmlkTW9udGgnLFxuICAgICAgICAgICAgaW5pdGlhbERhdGU6IFRPREFZLFxuXG4gICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGRheU1heEV2ZW50czogdHJ1ZSwgLy8gYWxsb3cgXCJtb3JlXCIgbGluayB3aGVuIHRvbyBtYW55IGV2ZW50c1xuICAgICAgICAgICAgbmF2TGlua3M6IHRydWUsXG4gICAgICAgICAgICBldmVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQWxsIERheSBFdmVudCcsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMDEnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RvdG8gbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGluY2lkIGlkdW50IHV0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LWRhbmdlciBmYy1ldmVudC1zb2xpZC13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZXBvcnRpbmcnLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogWU0gKyAnLTE0VDEzOjMwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBpbmNpZCBpZHVudCB1dCBsYWJvcmUnLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFlNICsgJy0xNCcsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDb21wYW55IFRyaXAnLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogWU0gKyAnLTAyJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgdGVtcG9yIGluY2lkJyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBZTSArICctMDMnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSUNUIEV4cG8gMjAxNyAtIFByb2R1Y3QgUmVsZWFzZScsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMDMnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCB0ZW1wb3IgaW5jaScsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogWU0gKyAnLTA1JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LWxpZ2h0IGZjLWV2ZW50LXNvbGlkLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Rpbm5lcicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMTInLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZSBjdGV0dXInLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFlNICsgJy0xMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDk5OSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZXBlYXRpbmcgRXZlbnQnLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogWU0gKyAnLTA5VDE2OjAwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgbmNpZGlkdW50IHV0IGxhYm9yZScsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZXBlYXRpbmcgRXZlbnQnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBsYWJvcmUnLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogWU0gKyAnLTE2VDE2OjAwOjAwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbmZlcmVuY2UnLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogWUVTVEVSREFZLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFRPTU9SUk9XLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIGVpdXMgbW9kIHRlbXBvciBsYWJvcmUnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVldGluZycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBUT0RBWSArICdUMTA6MzA6MDAnLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFRPREFZICsgJ1QxMjozMDowMCcsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3IgZWl1IGlkdW50IHV0IGxhYm9yZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMdW5jaCcsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBUT0RBWSArICdUMTI6MDA6MDAnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCB1dCBsYWJvcmUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVldGluZycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBUT0RBWSArICdUMTQ6MzA6MDAnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtd2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGNvbnNlIGN0ZXR1ciBhZGlwaSBzY2luZydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdIYXBweSBIb3VyJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFRPREFZICsgJ1QxNzozMDowMCcsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlIGN0ZXR1cidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEaW5uZXInLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogVE9NT1JST1cgKyAnVDA1OjAwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LXNvbGlkLWRhbmdlciBmYy1ldmVudC1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBjdGV0dXIgYWRpcGkgc2NpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQmlydGhkYXkgUGFydHknLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogVE9NT1JST1cgKyAnVDA3OjAwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgc2NpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2xpY2sgZm9yIEdvb2dsZScsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9nb29nbGUuY29tLycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMjgnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtc29saWQtaW5mbyBmYy1ldmVudC1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBsYWJvcmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBjYWxlbmRhci5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyBEYXRlcmFuZ2VwaWNrZXJcbiAgICB2YXIgaW5pdERhdGVyYW5nZXBpY2tlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfZGFzaGJvYXJkX2RhdGVyYW5nZXBpY2tlcicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGlja2VyID0gJCgnI2t0X2Rhc2hib2FyZF9kYXRlcmFuZ2VwaWNrZXInKTtcbiAgICAgICAgdmFyIHN0YXJ0ID0gbW9tZW50KCk7XG4gICAgICAgIHZhciBlbmQgPSBtb21lbnQoKTtcblxuICAgICAgICBmdW5jdGlvbiBjYihzdGFydCwgZW5kLCBsYWJlbCkge1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gJyc7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSAnJztcblxuICAgICAgICAgICAgaWYgKChlbmQgLSBzdGFydCkgPCAxMDAgfHwgbGFiZWwgPT0gJ1RvZGF5Jykge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gJ1RvZGF5Oic7XG4gICAgICAgICAgICAgICAgcmFuZ2UgPSBzdGFydC5mb3JtYXQoJ01NTSBEJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxhYmVsID09ICdZZXN0ZXJkYXknKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSAnWWVzdGVyZGF5Oic7XG4gICAgICAgICAgICAgICAgcmFuZ2UgPSBzdGFydC5mb3JtYXQoJ01NTSBEJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlID0gc3RhcnQuZm9ybWF0KCdNTU0gRCcpICsgJyAtICcgKyBlbmQuZm9ybWF0KCdNTU0gRCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcja3RfZGFzaGJvYXJkX2RhdGVyYW5nZXBpY2tlcl9kYXRlJykuaHRtbChyYW5nZSk7XG4gICAgICAgICAgICAkKCcja3RfZGFzaGJvYXJkX2RhdGVyYW5nZXBpY2tlcl90aXRsZScpLmh0bWwodGl0bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGlja2VyLmRhdGVyYW5nZXBpY2tlcih7XG4gICAgICAgICAgICBkaXJlY3Rpb246IEtUVXRpbC5pc1JUTCgpLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBzdGFydCxcbiAgICAgICAgICAgIGVuZERhdGU6IGVuZCxcbiAgICAgICAgICAgIG9wZW5zOiAnbGVmdCcsXG4gICAgICAgICAgICBhcHBseUNsYXNzOiAnYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgY2FuY2VsQ2xhc3M6ICdidG4tbGlnaHQtcHJpbWFyeScsXG4gICAgICAgICAgICByYW5nZXM6IHtcbiAgICAgICAgICAgICAgICAnVG9kYXknOiBbbW9tZW50KCksIG1vbWVudCgpXSxcbiAgICAgICAgICAgICAgICAnWWVzdGVyZGF5JzogW21vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJyldLFxuICAgICAgICAgICAgICAgICdMYXN0IDcgRGF5cyc6IFttb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5cycpLCBtb21lbnQoKV0sXG4gICAgICAgICAgICAgICAgJ0xhc3QgMzAgRGF5cyc6IFttb21lbnQoKS5zdWJ0cmFjdCgyOSwgJ2RheXMnKSwgbW9tZW50KCldLFxuICAgICAgICAgICAgICAgICdUaGlzIE1vbnRoJzogW21vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLmVuZE9mKCdtb250aCcpXSxcbiAgICAgICAgICAgICAgICAnTGFzdCBNb250aCc6IFttb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgY2IpO1xuXG4gICAgICAgIGNiKHN0YXJ0LCBlbmQsICcnKTtcbiAgICB9ICAgIFxuXG4gICAgLy8gRGFyayBtb2RlIHRvZ2dsZXJcbiAgICB2YXIgaW5pdERhcmtNb2RlVG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfdXNlcl9tZW51X2RhcmtfbW9kZV90b2dnbGUnKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0b2dnbGUpIHtcbiAgICAgICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtdXJsJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gRGF0ZXJhbmdlcGlja2VyXG4gICAgICAgICAgICBpbml0RGF0ZXJhbmdlcGlja2VyKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIERhcmsgTW9kZVxuICAgICAgICAgICAgaW5pdERhcmtNb2RlVG9nZ2xlKCk7XG5cbiAgICAgICAgICAgIC8vIFN0YXRpc3RpY3Mgd2lkZ2V0c1xuICAgICAgICAgICAgaW5pdFN0YXRpc3RpY3NXaWRnZXQzKCk7XG4gICAgICAgICAgICBpbml0U3RhdGlzdGljc1dpZGdldDQoKTsgICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gQ2hhcnRzIHdpZGdldHNcbiAgICAgICAgICAgIGluaXRDaGFydHNXaWRnZXQxKCk7XG4gICAgICAgICAgICBpbml0Q2hhcnRzV2lkZ2V0MigpO1xuICAgICAgICAgICAgaW5pdENoYXJ0c1dpZGdldDMoKTtcbiAgICAgICAgICAgIGluaXRDaGFydHNXaWRnZXQ0KCk7XG4gICAgICAgICAgICBpbml0Q2hhcnRzV2lkZ2V0NSgpO1xuICAgICAgICAgICAgaW5pdENoYXJ0c1dpZGdldDYoKTtcbiAgICAgICAgICAgIGluaXRDaGFydHNXaWRnZXQ3KCk7XG4gICAgICAgICAgICBpbml0Q2hhcnRzV2lkZ2V0OCgpO1xuXG4gICAgICAgICAgICAvLyBNaXhlZCB3aWRnZXRzXG4gICAgICAgICAgICBpbml0TWl4ZWRXaWRnZXQyKCk7XG4gICAgICAgICAgICBpbml0TWl4ZWRXaWRnZXQzKCk7XG4gICAgICAgICAgICBpbml0TWl4ZWRXaWRnZXQ0KCk7XG4gICAgICAgICAgICBpbml0TWl4ZWRXaWRnZXQ1KCk7XG4gICAgICAgICAgICBpbml0TWl4ZWRXaWRnZXQ2KCk7XG4gICAgICAgICAgICBpbml0TWl4ZWRXaWRnZXQ3KCk7XG4gICAgICAgICAgICBpbml0TWl4ZWRXaWRnZXQxMCgpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5pdE1peGVkV2lkZ2V0MTIoKTtcbiAgICAgICAgICAgIGluaXRNaXhlZFdpZGdldDEzKCk7IFxuICAgICAgICAgICAgaW5pdE1peGVkV2lkZ2V0MTQoKTtcbiAgICAgICAgICAgIGluaXRNaXhlZFdpZGdldDE2KCk7XG5cbiAgICAgICAgICAgIC8vIEZlZWRzXG4gICAgICAgICAgICBpbml0RmVlZFdpZGdldDEoKTtcbiAgICAgICAgICAgIGluaXRGZWVkc1dpZGdldDQoKTtcblxuICAgICAgICAgICAgLy8gRm9sbG93IGJ1dHRvblxuICAgICAgICAgICAgaW5pdFVzZXJGb2xsb3dCdXR0b24oKTtcblxuICAgICAgICAgICAgLy8gQ2FsZW5kYXJcbiAgICAgICAgICAgIGluaXRDYWxlbmRhcldpZGdldDEoKTsgICAgICAgICAgIFxuICAgICAgICB9ICAgXG4gICAgfVxufSgpO1xuXG4vLyBXZWJwYWNrIHN1cHBvcnRcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gS1RXaWRnZXRzO1xufVxuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVFdpZGdldHMuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RXaWRnZXRzIiwiaW5pdFN0YXRpc3RpY3NXaWRnZXQzIiwiY2hhcnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2xpY2UiLCJjYWxsIiwibWFwIiwiZWxlbWVudCIsImhlaWdodCIsInBhcnNlSW50IiwiS1RVdGlsIiwiY3NzIiwiY29sb3IiLCJnZXRBdHRyaWJ1dGUiLCJsYWJlbENvbG9yIiwiZ2V0Q3NzVmFyaWFibGVWYWx1ZSIsImJhc2VDb2xvciIsImxpZ2h0Q29sb3IiLCJvcHRpb25zIiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJjaGFydCIsImZvbnRGYW1pbHkiLCJ0eXBlIiwidG9vbGJhciIsInNob3ciLCJ6b29tIiwiZW5hYmxlZCIsInNwYXJrbGluZSIsInBsb3RPcHRpb25zIiwibGVnZW5kIiwiZGF0YUxhYmVscyIsImZpbGwiLCJvcGFjaXR5Iiwic3Ryb2tlIiwiY3VydmUiLCJ3aWR0aCIsImNvbG9ycyIsInhheGlzIiwiY2F0ZWdvcmllcyIsImF4aXNCb3JkZXIiLCJheGlzVGlja3MiLCJsYWJlbHMiLCJzdHlsZSIsImZvbnRTaXplIiwiY3Jvc3NoYWlycyIsInBvc2l0aW9uIiwiZGFzaEFycmF5IiwidG9vbHRpcCIsImZvcm1hdHRlciIsInVuZGVmaW5lZCIsIm9mZnNldFkiLCJ5YXhpcyIsIm1pbiIsIm1heCIsInN0YXRlcyIsIm5vcm1hbCIsImZpbHRlciIsInZhbHVlIiwiaG92ZXIiLCJhY3RpdmUiLCJhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbiIsInkiLCJ2YWwiLCJtYXJrZXJzIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VXaWR0aCIsIkFwZXhDaGFydHMiLCJyZW5kZXIiLCJpbml0U3RhdGlzdGljc1dpZGdldDQiLCJpbml0Q2hhcnRzV2lkZ2V0MSIsImdldEVsZW1lbnRCeUlkIiwiYm9yZGVyQ29sb3IiLCJzZWNvbmRhcnlDb2xvciIsImJhciIsImhvcml6b250YWwiLCJjb2x1bW5XaWR0aCIsImJvcmRlclJhZGl1cyIsImdyaWQiLCJzdHJva2VEYXNoQXJyYXkiLCJsaW5lcyIsImluaXRDaGFydHNXaWRnZXQyIiwiaW5pdENoYXJ0c1dpZGdldDMiLCJpbml0Q2hhcnRzV2lkZ2V0NCIsImJhc2VMaWdodENvbG9yIiwic2Vjb25kYXJ5TGlnaHRDb2xvciIsImluaXRDaGFydHNXaWRnZXQ1Iiwic3RhY2tlZCIsImluaXRDaGFydHNXaWRnZXQ2IiwicGFkZGluZyIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImluaXRDaGFydHNXaWRnZXQ3IiwiY29sb3IxIiwiY29sb3IxTGlnaHQiLCJjb2xvcjIiLCJjb2xvcjJMaWdodCIsImNvbG9yMyIsImNvbG9yM0xpZ2h0IiwiaW5pdENoYXJ0c1dpZGdldDgiLCJ4Iiwib2Zmc2V0WCIsImluaXRNaXhlZFdpZGdldDIiLCJjb2xvckRhcmtlbiIsImRyb3BTaGFkb3ciLCJlbmFibGVkT25TZXJpZXMiLCJibHVyIiwibWFya2VyIiwiaW5pdE1peGVkV2lkZ2V0MyIsImluaXRNaXhlZFdpZGdldDQiLCJyYWRpYWxCYXIiLCJob2xsb3ciLCJtYXJnaW4iLCJzaXplIiwic2hvd09uIiwiZm9udFdlaWdodCIsInRyYWNrIiwiYmFja2dyb3VuZCIsImxpbmVDYXAiLCJpbml0TWl4ZWRXaWRnZXQ1IiwiZmlsbDEiLCJncmFkaWVudCIsInNoYWRlSW50ZW5zaXR5IiwiZ3JhZGllbnRUb0NvbG9ycyIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIiwiY29sb3JTdG9wcyIsImluaXRNaXhlZFdpZGdldDYiLCJpbml0TWl4ZWRXaWRnZXQ3IiwiaW5pdE1peGVkV2lkZ2V0MTAiLCJpbml0TWl4ZWRXaWRnZXQxMiIsImluaXRNaXhlZFdpZGdldDEzIiwiaW5pdE1peGVkV2lkZ2V0MTQiLCJpbml0TWl4ZWRXaWRnZXQxNiIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsImluaXRGZWVkV2lkZ2V0MSIsImZvcm1FbCIsInF1ZXJ5U2VsZWN0b3IiLCJlZGl0b3JJZCIsIm1vZHVsZXMiLCJjb250YWluZXIiLCJwbGFjZWhvbGRlciIsInRoZW1lIiwiZWRpdG9yT2JqIiwiUXVpbGwiLCJpbml0RmVlZHNXaWRnZXQ0IiwiYnRuIiwid2lkZ2V0NSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2Nyb2xsVG8iLCJpbml0VXNlckZvbGxvd0J1dHRvbiIsImZvbGxvdyIsImRpc2FibGVkIiwiY29udGFpbnMiLCJpbm5lckhUTUwiLCJpbml0Q2FsZW5kYXJXaWRnZXQxIiwiRnVsbENhbGVuZGFyIiwidG9kYXlEYXRlIiwibW9tZW50Iiwic3RhcnRPZiIsIllNIiwiZm9ybWF0IiwiWUVTVEVSREFZIiwiY2xvbmUiLCJzdWJ0cmFjdCIsIlRPREFZIiwiVE9NT1JST1ciLCJjYWxlbmRhckVsIiwiY2FsZW5kYXIiLCJDYWxlbmRhciIsImhlYWRlclRvb2xiYXIiLCJjZW50ZXIiLCJjb250ZW50SGVpZ2h0IiwiYXNwZWN0UmF0aW8iLCJub3dJbmRpY2F0b3IiLCJub3ciLCJ2aWV3cyIsImRheUdyaWRNb250aCIsImJ1dHRvblRleHQiLCJ0aW1lR3JpZFdlZWsiLCJ0aW1lR3JpZERheSIsImluaXRpYWxWaWV3IiwiaW5pdGlhbERhdGUiLCJlZGl0YWJsZSIsImRheU1heEV2ZW50cyIsIm5hdkxpbmtzIiwiZXZlbnRzIiwidGl0bGUiLCJzdGFydCIsImRlc2NyaXB0aW9uIiwiY2xhc3NOYW1lIiwiZW5kIiwiaWQiLCJ1cmwiLCJpbml0RGF0ZXJhbmdlcGlja2VyIiwicGlja2VyIiwiJCIsImNiIiwibGFiZWwiLCJyYW5nZSIsImh0bWwiLCJkYXRlcmFuZ2VwaWNrZXIiLCJkaXJlY3Rpb24iLCJpc1JUTCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJvcGVucyIsImFwcGx5Q2xhc3MiLCJjYW5jZWxDbGFzcyIsInJhbmdlcyIsImVuZE9mIiwiaW5pdERhcmtNb2RlVG9nZ2xlIiwidG9nZ2xlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5pdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/widgets.js\n");
>>>>>>> Stashed changes

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("../../../themes/metronic/html/demo10/src/js/custom/widgets.js");
/******/
/******/ })()
;
//# sourceMappingURL=widgets.js.map
