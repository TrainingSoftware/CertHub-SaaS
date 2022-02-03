/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/documentation/charts/amcharts/charts.js ***!
  \**************************************************************************************************/


// Class definition
var KTGeneralAmCharts = function () {
    // Shared variable
    var chart;

    // Private functions
    var _demo1 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            chart = am4core.create('kt_amcharts_1', am4charts.XYChart)
            chart.colors.step = 2;

            chart.legend = new am4charts.Legend()
            chart.legend.position = 'top'
            chart.legend.paddingBottom = 20
            chart.legend.labels.template.maxWidth = 95

            var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
            xAxis.dataFields.category = 'category'
            xAxis.renderer.cellStartLocation = 0.1
            xAxis.renderer.cellEndLocation = 0.9
            xAxis.renderer.grid.template.location = 0;

            var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
            yAxis.min = 0;

            function createSeries(value, name) {
                var series = chart.series.push(new am4charts.ColumnSeries())
                series.dataFields.valueY = value
                series.dataFields.categoryX = 'category'
                series.name = name

                series.events.on("hidden", arrangeColumns);
                series.events.on("shown", arrangeColumns);

                var bullet = series.bullets.push(new am4charts.LabelBullet())
                bullet.interactionsEnabled = false
                bullet.dy = 30;
                bullet.label.text = '{valueY}'
                bullet.label.fill = am4core.color('#ffffff')

                return series;
            }

            chart.data = [
                {
                    category: 'Place #1',
                    first: 40,
                    second: 55,
                    third: 60
                },
                {
                    category: 'Place #2',
                    first: 30,
                    second: 78,
                    third: 69
                },
                {
                    category: 'Place #3',
                    first: 27,
                    second: 40,
                    third: 45
                },
                {
                    category: 'Place #4',
                    first: 50,
                    second: 33,
                    third: 22
                }
            ]


            createSeries('first', 'The First');
            createSeries('second', 'The Second');
            createSeries('third', 'The Third');

            function arrangeColumns() {

                var series = chart.series.getIndex(0);

                var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
                if (series.dataItems.length > 1) {
                    var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
                    var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
                    var delta = ((x1 - x0) / chart.series.length) * w;
                    if (am4core.isNumber(delta)) {
                        var middle = chart.series.length / 2;

                        var newIndex = 0;
                        chart.series.each(function (series) {
                            if (!series.isHidden && !series.isHiding) {
                                series.dummyData = newIndex;
                                newIndex++;
                            }
                            else {
                                series.dummyData = chart.series.indexOf(series);
                            }
                        })
                        var visibleCount = newIndex;
                        var newMiddle = visibleCount / 2;

                        chart.series.each(function (series) {
                            var trueIndex = chart.series.indexOf(series);
                            var newIndex = series.dummyData;

                            var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                            series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                            series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                        })
                    }
                }
            }

        }); // end am4core.ready()
    }

    var _demo2 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart
            chart = am4core.create("kt_amcharts_2", am4charts.XYChart);

            var data = [];
            var price1 = 1000, price2 = 1200;
            var quantity = 30000;
            for (var i = 0; i < 360; i++) {
                price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
                data.push({ date1: new Date(2015, 0, i), price1: price1 });
            }
            for (var i = 0; i < 360; i++) {
                price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
                data.push({ date2: new Date(2017, 0, i), price2: price2 });
            }

            chart.data = data;

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.location = 0;
            dateAxis.renderer.labels.template.fill = am4core.color("#e59165");

            var dateAxis2 = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis2.renderer.grid.template.location = 0;
            dateAxis2.renderer.labels.template.fill = am4core.color("#dfcc64");

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.renderer.labels.template.fill = am4core.color("#e59165");

            valueAxis.renderer.minWidth = 60;

            var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis2.tooltip.disabled = true;
            valueAxis2.renderer.labels.template.fill = am4core.color("#dfcc64");
            valueAxis2.renderer.minWidth = 60;
            valueAxis2.syncWithAxis = valueAxis;

            var series = chart.series.push(new am4charts.LineSeries());
            series.name = "2015";
            series.dataFields.dateX = "date1";
            series.dataFields.valueY = "price1";
            series.tooltipText = "{valueY.value}";
            series.fill = am4core.color("#e59165");
            series.stroke = am4core.color("#e59165");
            //series.strokeWidth = 3;

            var series2 = chart.series.push(new am4charts.LineSeries());
            series2.name = "2017";
            series2.dataFields.dateX = "date2";
            series2.dataFields.valueY = "price2";
            series2.yAxis = valueAxis2;
            series2.xAxis = dateAxis2;
            series2.tooltipText = "{valueY.value}";
            series2.fill = am4core.color("#dfcc64");
            series2.stroke = am4core.color("#dfcc64");
            //series2.strokeWidth = 3;

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.xAxis = dateAxis2;

            var scrollbarX = new am4charts.XYChartScrollbar();
            scrollbarX.series.push(series);
            chart.scrollbarX = scrollbarX;

            chart.legend = new am4charts.Legend();
            chart.legend.parent = chart.plotContainer;
            chart.legend.zIndex = 100;

            valueAxis2.renderer.grid.template.strokeOpacity = 0.07;
            dateAxis2.renderer.grid.template.strokeOpacity = 0.07;
            dateAxis.renderer.grid.template.strokeOpacity = 0.07;
            valueAxis.renderer.grid.template.strokeOpacity = 0.07;

        }); // end am4core.ready()
    }

    var _demo3 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_dataviz);
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart
            chart = am4core.create("kt_amcharts_3", am4charts.PieChart);
            chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

            chart.data = [
                {
                    country: "Lithuania",
                    value: 260
                },
                {
                    country: "Czechia",
                    value: 230
                },
                {
                    country: "Ireland",
                    value: 200
                },
                {
                    country: "Germany",
                    value: 165
                },
                {
                    country: "Australia",
                    value: 139
                },
                {
                    country: "Austria",
                    value: 128
                }
            ];

            var series = chart.series.push(new am4charts.PieSeries());
            series.dataFields.value = "value";
            series.dataFields.radiusValue = "value";
            series.dataFields.category = "country";
            series.slices.template.cornerRadius = 6;
            series.colors.step = 3;

            series.hiddenState.properties.endAngle = -90;

            chart.legend = new am4charts.Legend();

        }); // end am4core.ready()
    }

    var _demo4 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_frozen);
            am4core.useTheme(am4themes_animated);
            // Themes end

            chart = am4core.create("kt_amcharts_4", am4plugins_timeline.SerpentineChart);
            chart.curveContainer.padding(20, 20, 20, 20);
            chart.levelCount = 8;
            chart.orientation = "horizontal";
            chart.fontSize = 11;

            var colorSet = new am4core.ColorSet();
            colorSet.saturation = 0.6;

            chart.data = [{
                "category": "Module #1",
                "start": "2016-01-10",
                "end": "2016-01-13",
                "color": colorSet.getIndex(0),
                "task": "Gathering requirements"
            }, {
                "category": "Module #1",
                "start": "2016-02-05",
                "end": "2016-04-18",
                "color": colorSet.getIndex(0),
                "task": "Development"
            }, {
                "category": "Module #2",
                "start": "2016-01-08",
                "end": "2016-01-10",
                "color": colorSet.getIndex(5),
                "task": "Gathering requirements"
            }, {
                "category": "Module #2",
                "start": "2016-01-12",
                "end": "2016-01-15",
                "color": colorSet.getIndex(5),
                "task": "Producing specifications"
            }, {
                "category": "Module #2",
                "start": "2016-01-16",
                "end": "2016-02-05",
                "color": colorSet.getIndex(5),
                "task": "Development"
            }, {
                "category": "Module #2",
                "start": "2016-02-10",
                "end": "2016-02-18",
                "color": colorSet.getIndex(5),
                "task": "Testing and QA"
            }, {
                "category": "",
                "task": ""
            }, {
                "category": "Module #3",
                "start": "2016-01-01",
                "end": "2016-01-19",
                "color": colorSet.getIndex(9),
                "task": "Gathering requirements"
            }, {
                "category": "Module #3",
                "start": "2016-02-01",
                "end": "2016-02-10",
                "color": colorSet.getIndex(9),
                "task": "Producing specifications"
            }, {
                "category": "Module #3",
                "start": "2016-03-10",
                "end": "2016-04-15",
                "color": colorSet.getIndex(9),
                "task": "Development"
            }, {
                "category": "Module #3",
                "start": "2016-04-20",
                "end": "2016-04-30",
                "color": colorSet.getIndex(9),
                "task": "Testing and QA"
            }, {
                "category": "Module #4",
                "start": "2016-01-15",
                "end": "2016-02-12",
                "color": colorSet.getIndex(15),
                "task": "Gathering requirements"
            }, {
                "category": "Module #4",
                "start": "2016-02-25",
                "end": "2016-03-10",
                "color": colorSet.getIndex(15),
                "task": "Development"
            }, {
                "category": "Module #4",
                "start": "2016-03-23",
                "end": "2016-04-29",
                "color": colorSet.getIndex(15),
                "task": "Testing and QA"
            }];

            chart.dateFormatter.dateFormat = "yyyy-MM-dd";
            chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

            var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "category";
            categoryAxis.renderer.grid.template.disabled = true;
            categoryAxis.renderer.labels.template.paddingRight = 25;
            categoryAxis.renderer.minGridDistance = 10;
            categoryAxis.renderer.innerRadius = -60;
            categoryAxis.renderer.radius = 60;

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.minGridDistance = 70;
            dateAxis.baseInterval = { count: 1, timeUnit: "day" };

            dateAxis.renderer.tooltipLocation = 0;
            dateAxis.startLocation = -0.5;
            dateAxis.renderer.line.strokeDasharray = "1,4";
            dateAxis.renderer.line.strokeOpacity = 0.7;
            dateAxis.tooltip.background.fillOpacity = 0.2;
            dateAxis.tooltip.background.cornerRadius = 5;
            dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
            dateAxis.tooltip.label.paddingTop = 7;

            var labelTemplate = dateAxis.renderer.labels.template;
            labelTemplate.verticalCenter = "middle";
            labelTemplate.fillOpacity = 0.7;
            labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
            labelTemplate.background.fillOpacity = 1;
            labelTemplate.padding(7, 7, 7, 7);

            var categoryAxisLabelTemplate = categoryAxis.renderer.labels.template;
            categoryAxisLabelTemplate.horizontalCenter = "left";
            categoryAxisLabelTemplate.adapter.add("rotation", function (rotation, target) {
                var position = dateAxis.valueToPosition(dateAxis.min);
                return dateAxis.renderer.positionToAngle(position) + 90;
            })

            var series1 = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
            series1.columns.template.height = am4core.percent(20);
            series1.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

            series1.dataFields.openDateX = "start";
            series1.dataFields.dateX = "end";
            series1.dataFields.categoryY = "category";
            series1.columns.template.propertyFields.fill = "color"; // get color from data
            series1.columns.template.propertyFields.stroke = "color";
            series1.columns.template.strokeOpacity = 0;

            var bullet = new am4charts.CircleBullet();
            series1.bullets.push(bullet);
            bullet.circle.radius = 3;
            bullet.circle.strokeOpacity = 0;
            bullet.propertyFields.fill = "color";
            bullet.locationX = 0;


            var bullet2 = new am4charts.CircleBullet();
            series1.bullets.push(bullet2);
            bullet2.circle.radius = 3;
            bullet2.circle.strokeOpacity = 0;
            bullet2.propertyFields.fill = "color";
            bullet2.locationX = 1;

            chart.scrollbarX = new am4core.Scrollbar();
            chart.scrollbarX.align = "center"
            chart.scrollbarX.width = am4core.percent(90);

            var cursor = new am4plugins_timeline.CurveCursor();
            chart.cursor = cursor;
            cursor.xAxis = dateAxis;
            cursor.yAxis = categoryAxis;
            cursor.lineY.disabled = true;
            cursor.lineX.strokeDasharray = "1,4";
            cursor.lineX.strokeOpacity = 1;

            dateAxis.renderer.tooltipLocation2 = 0;
            categoryAxis.cursorTooltipEnabled = false;

        }); // end am4core.ready()
    }

    var _demo5 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            chart = am4core.create("kt_amcharts_5", am4charts.RadarChart);
            chart.innerRadius = am4core.percent(30);
            chart.fontSize = 11;

            var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
            yAxis.renderer.minGridDistance = 5;

            xAxis.renderer.labels.template.location = 0.5;
            xAxis.renderer.labels.template.bent = true;
            xAxis.renderer.labels.template.radius = 5;

            xAxis.dataFields.category = "hour";
            yAxis.dataFields.category = "weekday";

            xAxis.renderer.grid.template.disabled = true;
            xAxis.renderer.minGridDistance = 10;

            yAxis.renderer.grid.template.disabled = true;
            yAxis.renderer.inversed = true;

            // this makes the y axis labels to be bent. By default y Axis labels are regular AxisLabels, so we replace them with AxisLabelCircular
            // and call fixPosition for them to be bent
            var yAxisLabel = new am4charts.AxisLabelCircular();
            yAxisLabel.bent = true;
            yAxisLabel.events.on("validated", function (event) {
                event.target.fixPosition(-90, am4core.math.getDistance({ x: event.target.pixelX, y: event.target.pixelY }) - 5);
                event.target.dx = -event.target.pixelX;
                event.target.dy = -event.target.pixelY;
            })
            yAxis.renderer.labels.template = yAxisLabel;

            var series = chart.series.push(new am4charts.RadarColumnSeries());
            series.dataFields.categoryX = "hour";
            series.dataFields.categoryY = "weekday";
            series.dataFields.value = "value";
            series.sequencedInterpolation = true;

            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            columnTemplate.stroke = am4core.color("#ffffff");
            columnTemplate.tooltipText = "{weekday}, {hour}: {value.workingValue.formatNumber('#.')}";
            columnTemplate.width = am4core.percent(100);
            columnTemplate.height = am4core.percent(100);

            chart.seriesContainer.zIndex = -5;

            columnTemplate.hiddenState.properties.opacity = 0;

            // heat rule, this makes columns to change color depending on value
            series.heatRules.push({ target: columnTemplate, property: "fill", min: am4core.color("#fffb77"), max: am4core.color("#fe131a") });

            // heat legend

            var heatLegend = chart.bottomAxesContainer.createChild(am4charts.HeatLegend);
            heatLegend.width = am4core.percent(100);
            heatLegend.series = series;
            heatLegend.valueAxis.renderer.labels.template.fontSize = 9;
            heatLegend.valueAxis.renderer.minGridDistance = 30;

            // heat legend behavior
            series.columns.template.events.on("over", function (event) {
                handleHover(event.target);
            })

            series.columns.template.events.on("hit", function (event) {
                handleHover(event.target);
            })

            function handleHover(column) {
                if (!isNaN(column.dataItem.value)) {
                    heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
                }
                else {
                    heatLegend.valueAxis.hideTooltip();
                }
            }

            series.columns.template.events.on("out", function (event) {
                heatLegend.valueAxis.hideTooltip();
            })

            chart.data = [
                {
                    "hour": "12pm",
                    "weekday": "Sunday",
                    "value": 2990
                },
                {
                    "hour": "1am",
                    "weekday": "Sunday",
                    "value": 2520
                },
                {
                    "hour": "2am",
                    "weekday": "Sunday",
                    "value": 2334
                },
                {
                    "hour": "3am",
                    "weekday": "Sunday",
                    "value": 2230
                },
                {
                    "hour": "4am",
                    "weekday": "Sunday",
                    "value": 2325
                },
                {
                    "hour": "5am",
                    "weekday": "Sunday",
                    "value": 2019
                },
                {
                    "hour": "6am",
                    "weekday": "Sunday",
                    "value": 2128
                },
                {
                    "hour": "7am",
                    "weekday": "Sunday",
                    "value": 2246
                },
                {
                    "hour": "8am",
                    "weekday": "Sunday",
                    "value": 2421
                },
                {
                    "hour": "9am",
                    "weekday": "Sunday",
                    "value": 2788
                },
                {
                    "hour": "10am",
                    "weekday": "Sunday",
                    "value": 2959
                },
                {
                    "hour": "11am",
                    "weekday": "Sunday",
                    "value": 3018
                },
                {
                    "hour": "12am",
                    "weekday": "Sunday",
                    "value": 3154
                },
                {
                    "hour": "1pm",
                    "weekday": "Sunday",
                    "value": 3172
                },
                {
                    "hour": "2pm",
                    "weekday": "Sunday",
                    "value": 3368
                },
                {
                    "hour": "3pm",
                    "weekday": "Sunday",
                    "value": 3464
                },
                {
                    "hour": "4pm",
                    "weekday": "Sunday",
                    "value": 3746
                },
                {
                    "hour": "5pm",
                    "weekday": "Sunday",
                    "value": 3656
                },
                {
                    "hour": "6pm",
                    "weekday": "Sunday",
                    "value": 3336
                },
                {
                    "hour": "7pm",
                    "weekday": "Sunday",
                    "value": 3292
                },
                {
                    "hour": "8pm",
                    "weekday": "Sunday",
                    "value": 3269
                },
                {
                    "hour": "9pm",
                    "weekday": "Sunday",
                    "value": 3300
                },
                {
                    "hour": "10pm",
                    "weekday": "Sunday",
                    "value": 3403
                },
                {
                    "hour": "11pm",
                    "weekday": "Sunday",
                    "value": 3323
                },
                {
                    "hour": "12pm",
                    "weekday": "Monday",
                    "value": 3346
                },
                {
                    "hour": "1am",
                    "weekday": "Monday",
                    "value": 2725
                },
                {
                    "hour": "2am",
                    "weekday": "Monday",
                    "value": 3052
                },
                {
                    "hour": "3am",
                    "weekday": "Monday",
                    "value": 3876
                },
                {
                    "hour": "4am",
                    "weekday": "Monday",
                    "value": 4453
                },
                {
                    "hour": "5am",
                    "weekday": "Monday",
                    "value": 3972
                },
                {
                    "hour": "6am",
                    "weekday": "Monday",
                    "value": 4644
                },
                {
                    "hour": "7am",
                    "weekday": "Monday",
                    "value": 5715
                },
                {
                    "hour": "8am",
                    "weekday": "Monday",
                    "value": 7080
                },
                {
                    "hour": "9am",
                    "weekday": "Monday",
                    "value": 8022
                },
                {
                    "hour": "10am",
                    "weekday": "Monday",
                    "value": 8446
                },
                {
                    "hour": "11am",
                    "weekday": "Monday",
                    "value": 9313
                },
                {
                    "hour": "12am",
                    "weekday": "Monday",
                    "value": 9011
                },
                {
                    "hour": "1pm",
                    "weekday": "Monday",
                    "value": 8508
                },
                {
                    "hour": "2pm",
                    "weekday": "Monday",
                    "value": 8515
                },
                {
                    "hour": "3pm",
                    "weekday": "Monday",
                    "value": 8399
                },
                {
                    "hour": "4pm",
                    "weekday": "Monday",
                    "value": 8649
                },
                {
                    "hour": "5pm",
                    "weekday": "Monday",
                    "value": 7869
                },
                {
                    "hour": "6pm",
                    "weekday": "Monday",
                    "value": 6933
                },
                {
                    "hour": "7pm",
                    "weekday": "Monday",
                    "value": 5969
                },
                {
                    "hour": "8pm",
                    "weekday": "Monday",
                    "value": 5552
                },
                {
                    "hour": "9pm",
                    "weekday": "Monday",
                    "value": 5434
                },
                {
                    "hour": "10pm",
                    "weekday": "Monday",
                    "value": 5070
                },
                {
                    "hour": "11pm",
                    "weekday": "Monday",
                    "value": 4851
                },
                {
                    "hour": "12pm",
                    "weekday": "Tuesday",
                    "value": 4468
                },
                {
                    "hour": "1am",
                    "weekday": "Tuesday",
                    "value": 3306
                },
                {
                    "hour": "2am",
                    "weekday": "Tuesday",
                    "value": 3906
                },
                {
                    "hour": "3am",
                    "weekday": "Tuesday",
                    "value": 4413
                },
                {
                    "hour": "4am",
                    "weekday": "Tuesday",
                    "value": 4726
                },
                {
                    "hour": "5am",
                    "weekday": "Tuesday",
                    "value": 4584
                },
                {
                    "hour": "6am",
                    "weekday": "Tuesday",
                    "value": 5717
                },
                {
                    "hour": "7am",
                    "weekday": "Tuesday",
                    "value": 6504
                },
                {
                    "hour": "8am",
                    "weekday": "Tuesday",
                    "value": 8104
                },
                {
                    "hour": "9am",
                    "weekday": "Tuesday",
                    "value": 8813
                },
                {
                    "hour": "10am",
                    "weekday": "Tuesday",
                    "value": 9278
                },
                {
                    "hour": "11am",
                    "weekday": "Tuesday",
                    "value": 10425
                },
                {
                    "hour": "12am",
                    "weekday": "Tuesday",
                    "value": 10137
                },
                {
                    "hour": "1pm",
                    "weekday": "Tuesday",
                    "value": 9290
                },
                {
                    "hour": "2pm",
                    "weekday": "Tuesday",
                    "value": 9255
                },
                {
                    "hour": "3pm",
                    "weekday": "Tuesday",
                    "value": 9614
                },
                {
                    "hour": "4pm",
                    "weekday": "Tuesday",
                    "value": 9713
                },
                {
                    "hour": "5pm",
                    "weekday": "Tuesday",
                    "value": 9667
                },
                {
                    "hour": "6pm",
                    "weekday": "Tuesday",
                    "value": 8774
                },
                {
                    "hour": "7pm",
                    "weekday": "Tuesday",
                    "value": 8649
                },
                {
                    "hour": "8pm",
                    "weekday": "Tuesday",
                    "value": 9937
                },
                {
                    "hour": "9pm",
                    "weekday": "Tuesday",
                    "value": 10286
                },
                {
                    "hour": "10pm",
                    "weekday": "Tuesday",
                    "value": 9175
                },
                {
                    "hour": "11pm",
                    "weekday": "Tuesday",
                    "value": 8581
                },
                {
                    "hour": "12pm",
                    "weekday": "Wednesday",
                    "value": 8145
                },
                {
                    "hour": "1am",
                    "weekday": "Wednesday",
                    "value": 7177
                },
                {
                    "hour": "2am",
                    "weekday": "Wednesday",
                    "value": 5657
                },
                {
                    "hour": "3am",
                    "weekday": "Wednesday",
                    "value": 6802
                },
                {
                    "hour": "4am",
                    "weekday": "Wednesday",
                    "value": 8159
                },
                {
                    "hour": "5am",
                    "weekday": "Wednesday",
                    "value": 8449
                },
                {
                    "hour": "6am",
                    "weekday": "Wednesday",
                    "value": 9453
                },
                {
                    "hour": "7am",
                    "weekday": "Wednesday",
                    "value": 9947
                },
                {
                    "hour": "8am",
                    "weekday": "Wednesday",
                    "value": 11471
                },
                {
                    "hour": "9am",
                    "weekday": "Wednesday",
                    "value": 12492
                },
                {
                    "hour": "10am",
                    "weekday": "Wednesday",
                    "value": 9388
                },
                {
                    "hour": "11am",
                    "weekday": "Wednesday",
                    "value": 9928
                },
                {
                    "hour": "12am",
                    "weekday": "Wednesday",
                    "value": 9644
                },
                {
                    "hour": "1pm",
                    "weekday": "Wednesday",
                    "value": 9034
                },
                {
                    "hour": "2pm",
                    "weekday": "Wednesday",
                    "value": 8964
                },
                {
                    "hour": "3pm",
                    "weekday": "Wednesday",
                    "value": 9069
                },
                {
                    "hour": "4pm",
                    "weekday": "Wednesday",
                    "value": 8898
                },
                {
                    "hour": "5pm",
                    "weekday": "Wednesday",
                    "value": 8322
                },
                {
                    "hour": "6pm",
                    "weekday": "Wednesday",
                    "value": 6909
                },
                {
                    "hour": "7pm",
                    "weekday": "Wednesday",
                    "value": 5810
                },
                {
                    "hour": "8pm",
                    "weekday": "Wednesday",
                    "value": 5151
                },
                {
                    "hour": "9pm",
                    "weekday": "Wednesday",
                    "value": 4911
                },
                {
                    "hour": "10pm",
                    "weekday": "Wednesday",
                    "value": 4487
                },
                {
                    "hour": "11pm",
                    "weekday": "Wednesday",
                    "value": 4118
                },
                {
                    "hour": "12pm",
                    "weekday": "Thursday",
                    "value": 3689
                },
                {
                    "hour": "1am",
                    "weekday": "Thursday",
                    "value": 3081
                },
                {
                    "hour": "2am",
                    "weekday": "Thursday",
                    "value": 6525
                },
                {
                    "hour": "3am",
                    "weekday": "Thursday",
                    "value": 6228
                },
                {
                    "hour": "4am",
                    "weekday": "Thursday",
                    "value": 6917
                },
                {
                    "hour": "5am",
                    "weekday": "Thursday",
                    "value": 6568
                },
                {
                    "hour": "6am",
                    "weekday": "Thursday",
                    "value": 6405
                },
                {
                    "hour": "7am",
                    "weekday": "Thursday",
                    "value": 8106
                },
                {
                    "hour": "8am",
                    "weekday": "Thursday",
                    "value": 8542
                },
                {
                    "hour": "9am",
                    "weekday": "Thursday",
                    "value": 8501
                },
                {
                    "hour": "10am",
                    "weekday": "Thursday",
                    "value": 8802
                },
                {
                    "hour": "11am",
                    "weekday": "Thursday",
                    "value": 9420
                },
                {
                    "hour": "12am",
                    "weekday": "Thursday",
                    "value": 8966
                },
                {
                    "hour": "1pm",
                    "weekday": "Thursday",
                    "value": 8135
                },
                {
                    "hour": "2pm",
                    "weekday": "Thursday",
                    "value": 8224
                },
                {
                    "hour": "3pm",
                    "weekday": "Thursday",
                    "value": 8387
                },
                {
                    "hour": "4pm",
                    "weekday": "Thursday",
                    "value": 8218
                },
                {
                    "hour": "5pm",
                    "weekday": "Thursday",
                    "value": 7641
                },
                {
                    "hour": "6pm",
                    "weekday": "Thursday",
                    "value": 6469
                },
                {
                    "hour": "7pm",
                    "weekday": "Thursday",
                    "value": 5441
                },
                {
                    "hour": "8pm",
                    "weekday": "Thursday",
                    "value": 4952
                },
                {
                    "hour": "9pm",
                    "weekday": "Thursday",
                    "value": 4643
                },
                {
                    "hour": "10pm",
                    "weekday": "Thursday",
                    "value": 4393
                },
                {
                    "hour": "11pm",
                    "weekday": "Thursday",
                    "value": 4017
                },
                {
                    "hour": "12pm",
                    "weekday": "Friday",
                    "value": 4022
                },
                {
                    "hour": "1am",
                    "weekday": "Friday",
                    "value": 3063
                },
                {
                    "hour": "2am",
                    "weekday": "Friday",
                    "value": 3638
                },
                {
                    "hour": "3am",
                    "weekday": "Friday",
                    "value": 3968
                },
                {
                    "hour": "4am",
                    "weekday": "Friday",
                    "value": 4070
                },
                {
                    "hour": "5am",
                    "weekday": "Friday",
                    "value": 4019
                },
                {
                    "hour": "6am",
                    "weekday": "Friday",
                    "value": 4548
                },
                {
                    "hour": "7am",
                    "weekday": "Friday",
                    "value": 5465
                },
                {
                    "hour": "8am",
                    "weekday": "Friday",
                    "value": 6909
                },
                {
                    "hour": "9am",
                    "weekday": "Friday",
                    "value": 7706
                },
                {
                    "hour": "10am",
                    "weekday": "Friday",
                    "value": 7867
                },
                {
                    "hour": "11am",
                    "weekday": "Friday",
                    "value": 8615
                },
                {
                    "hour": "12am",
                    "weekday": "Friday",
                    "value": 8218
                },
                {
                    "hour": "1pm",
                    "weekday": "Friday",
                    "value": 7604
                },
                {
                    "hour": "2pm",
                    "weekday": "Friday",
                    "value": 7429
                },
                {
                    "hour": "3pm",
                    "weekday": "Friday",
                    "value": 7488
                },
                {
                    "hour": "4pm",
                    "weekday": "Friday",
                    "value": 7493
                },
                {
                    "hour": "5pm",
                    "weekday": "Friday",
                    "value": 6998
                },
                {
                    "hour": "6pm",
                    "weekday": "Friday",
                    "value": 5941
                },
                {
                    "hour": "7pm",
                    "weekday": "Friday",
                    "value": 5068
                },
                {
                    "hour": "8pm",
                    "weekday": "Friday",
                    "value": 4636
                },
                {
                    "hour": "9pm",
                    "weekday": "Friday",
                    "value": 4241
                },
                {
                    "hour": "10pm",
                    "weekday": "Friday",
                    "value": 3858
                },
                {
                    "hour": "11pm",
                    "weekday": "Friday",
                    "value": 3833
                },
                {
                    "hour": "12pm",
                    "weekday": "Saturday",
                    "value": 3503
                },
                {
                    "hour": "1am",
                    "weekday": "Saturday",
                    "value": 2842
                },
                {
                    "hour": "2am",
                    "weekday": "Saturday",
                    "value": 2808
                },
                {
                    "hour": "3am",
                    "weekday": "Saturday",
                    "value": 2399
                },
                {
                    "hour": "4am",
                    "weekday": "Saturday",
                    "value": 2280
                },
                {
                    "hour": "5am",
                    "weekday": "Saturday",
                    "value": 2139
                },
                {
                    "hour": "6am",
                    "weekday": "Saturday",
                    "value": 2527
                },
                {
                    "hour": "7am",
                    "weekday": "Saturday",
                    "value": 2940
                },
                {
                    "hour": "8am",
                    "weekday": "Saturday",
                    "value": 3066
                },
                {
                    "hour": "9am",
                    "weekday": "Saturday",
                    "value": 3494
                },
                {
                    "hour": "10am",
                    "weekday": "Saturday",
                    "value": 3287
                },
                {
                    "hour": "11am",
                    "weekday": "Saturday",
                    "value": 3416
                },
                {
                    "hour": "12am",
                    "weekday": "Saturday",
                    "value": 3432
                },
                {
                    "hour": "1pm",
                    "weekday": "Saturday",
                    "value": 3523
                },
                {
                    "hour": "2pm",
                    "weekday": "Saturday",
                    "value": 3542
                },
                {
                    "hour": "3pm",
                    "weekday": "Saturday",
                    "value": 3347
                },
                {
                    "hour": "4pm",
                    "weekday": "Saturday",
                    "value": 3292
                },
                {
                    "hour": "5pm",
                    "weekday": "Saturday",
                    "value": 3416
                },
                {
                    "hour": "6pm",
                    "weekday": "Saturday",
                    "value": 3131
                },
                {
                    "hour": "7pm",
                    "weekday": "Saturday",
                    "value": 3057
                },
                {
                    "hour": "8pm",
                    "weekday": "Saturday",
                    "value": 3227
                },
                {
                    "hour": "9pm",
                    "weekday": "Saturday",
                    "value": 3060
                },
                {
                    "hour": "10pm",
                    "weekday": "Saturday",
                    "value": 2855
                },
                {
                    "hour": "11pm",
                    "weekday": "Saturday",
                    "value": 2625
                }

            ];

        }); // end am4core.ready()
    }

    return {
        // Public Functions
        init: function () {
            _demo1();
            _demo2();
            _demo3();
            _demo4();
            _demo5();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralAmCharts.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/amcharts/charts.js":
/*!*************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/amcharts/charts.js ***!
  \*************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralAmCharts = function () {\n  // Shared variable\n  var chart; // Private functions\n\n  var _demo1 = function _demo1() {\n    // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/\n    am4core.ready(function () {\n      // Themes begin\n      am4core.useTheme(am4themes_animated); // Themes end\n\n      chart = am4core.create('kt_amcharts_1', am4charts.XYChart);\n      chart.colors.step = 2;\n      chart.legend = new am4charts.Legend();\n      chart.legend.position = 'top';\n      chart.legend.paddingBottom = 20;\n      chart.legend.labels.template.maxWidth = 95;\n      var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());\n      xAxis.dataFields.category = 'category';\n      xAxis.renderer.cellStartLocation = 0.1;\n      xAxis.renderer.cellEndLocation = 0.9;\n      xAxis.renderer.grid.template.location = 0;\n      var yAxis = chart.yAxes.push(new am4charts.ValueAxis());\n      yAxis.min = 0;\n\n      function createSeries(value, name) {\n        var series = chart.series.push(new am4charts.ColumnSeries());\n        series.dataFields.valueY = value;\n        series.dataFields.categoryX = 'category';\n        series.name = name;\n        series.events.on(\"hidden\", arrangeColumns);\n        series.events.on(\"shown\", arrangeColumns);\n        var bullet = series.bullets.push(new am4charts.LabelBullet());\n        bullet.interactionsEnabled = false;\n        bullet.dy = 30;\n        bullet.label.text = '{valueY}';\n        bullet.label.fill = am4core.color('#ffffff');\n        return series;\n      }\n\n      chart.data = [{\n        category: 'Place #1',\n        first: 40,\n        second: 55,\n        third: 60\n      }, {\n        category: 'Place #2',\n        first: 30,\n        second: 78,\n        third: 69\n      }, {\n        category: 'Place #3',\n        first: 27,\n        second: 40,\n        third: 45\n      }, {\n        category: 'Place #4',\n        first: 50,\n        second: 33,\n        third: 22\n      }];\n      createSeries('first', 'The First');\n      createSeries('second', 'The Second');\n      createSeries('third', 'The Third');\n\n      function arrangeColumns() {\n        var series = chart.series.getIndex(0);\n        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);\n\n        if (series.dataItems.length > 1) {\n          var x0 = xAxis.getX(series.dataItems.getIndex(0), \"categoryX\");\n          var x1 = xAxis.getX(series.dataItems.getIndex(1), \"categoryX\");\n          var delta = (x1 - x0) / chart.series.length * w;\n\n          if (am4core.isNumber(delta)) {\n            var middle = chart.series.length / 2;\n            var newIndex = 0;\n            chart.series.each(function (series) {\n              if (!series.isHidden && !series.isHiding) {\n                series.dummyData = newIndex;\n                newIndex++;\n              } else {\n                series.dummyData = chart.series.indexOf(series);\n              }\n            });\n            var visibleCount = newIndex;\n            var newMiddle = visibleCount / 2;\n            chart.series.each(function (series) {\n              var trueIndex = chart.series.indexOf(series);\n              var newIndex = series.dummyData;\n              var dx = (newIndex - trueIndex + middle - newMiddle) * delta;\n              series.animate({\n                property: \"dx\",\n                to: dx\n              }, series.interpolationDuration, series.interpolationEasing);\n              series.bulletsContainer.animate({\n                property: \"dx\",\n                to: dx\n              }, series.interpolationDuration, series.interpolationEasing);\n            });\n          }\n        }\n      }\n    }); // end am4core.ready()\n  };\n\n  var _demo2 = function _demo2() {\n    // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/\n    am4core.ready(function () {\n      // Themes begin\n      am4core.useTheme(am4themes_animated); // Themes end\n      // Create chart\n\n      chart = am4core.create(\"kt_amcharts_2\", am4charts.XYChart);\n      var data = [];\n      var price1 = 1000,\n          price2 = 1200;\n      var quantity = 30000;\n\n      for (var i = 0; i < 360; i++) {\n        price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);\n        data.push({\n          date1: new Date(2015, 0, i),\n          price1: price1\n        });\n      }\n\n      for (var i = 0; i < 360; i++) {\n        price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);\n        data.push({\n          date2: new Date(2017, 0, i),\n          price2: price2\n        });\n      }\n\n      chart.data = data;\n      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());\n      dateAxis.renderer.grid.template.location = 0;\n      dateAxis.renderer.labels.template.fill = am4core.color(\"#e59165\");\n      var dateAxis2 = chart.xAxes.push(new am4charts.DateAxis());\n      dateAxis2.renderer.grid.template.location = 0;\n      dateAxis2.renderer.labels.template.fill = am4core.color(\"#dfcc64\");\n      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());\n      valueAxis.tooltip.disabled = true;\n      valueAxis.renderer.labels.template.fill = am4core.color(\"#e59165\");\n      valueAxis.renderer.minWidth = 60;\n      var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());\n      valueAxis2.tooltip.disabled = true;\n      valueAxis2.renderer.labels.template.fill = am4core.color(\"#dfcc64\");\n      valueAxis2.renderer.minWidth = 60;\n      valueAxis2.syncWithAxis = valueAxis;\n      var series = chart.series.push(new am4charts.LineSeries());\n      series.name = \"2015\";\n      series.dataFields.dateX = \"date1\";\n      series.dataFields.valueY = \"price1\";\n      series.tooltipText = \"{valueY.value}\";\n      series.fill = am4core.color(\"#e59165\");\n      series.stroke = am4core.color(\"#e59165\"); //series.strokeWidth = 3;\n\n      var series2 = chart.series.push(new am4charts.LineSeries());\n      series2.name = \"2017\";\n      series2.dataFields.dateX = \"date2\";\n      series2.dataFields.valueY = \"price2\";\n      series2.yAxis = valueAxis2;\n      series2.xAxis = dateAxis2;\n      series2.tooltipText = \"{valueY.value}\";\n      series2.fill = am4core.color(\"#dfcc64\");\n      series2.stroke = am4core.color(\"#dfcc64\"); //series2.strokeWidth = 3;\n\n      chart.cursor = new am4charts.XYCursor();\n      chart.cursor.xAxis = dateAxis2;\n      var scrollbarX = new am4charts.XYChartScrollbar();\n      scrollbarX.series.push(series);\n      chart.scrollbarX = scrollbarX;\n      chart.legend = new am4charts.Legend();\n      chart.legend.parent = chart.plotContainer;\n      chart.legend.zIndex = 100;\n      valueAxis2.renderer.grid.template.strokeOpacity = 0.07;\n      dateAxis2.renderer.grid.template.strokeOpacity = 0.07;\n      dateAxis.renderer.grid.template.strokeOpacity = 0.07;\n      valueAxis.renderer.grid.template.strokeOpacity = 0.07;\n    }); // end am4core.ready()\n  };\n\n  var _demo3 = function _demo3() {\n    // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/\n    am4core.ready(function () {\n      // Themes begin\n      am4core.useTheme(am4themes_dataviz);\n      am4core.useTheme(am4themes_animated); // Themes end\n      // Create chart\n\n      chart = am4core.create(\"kt_amcharts_3\", am4charts.PieChart);\n      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in\n\n      chart.data = [{\n        country: \"Lithuania\",\n        value: 260\n      }, {\n        country: \"Czechia\",\n        value: 230\n      }, {\n        country: \"Ireland\",\n        value: 200\n      }, {\n        country: \"Germany\",\n        value: 165\n      }, {\n        country: \"Australia\",\n        value: 139\n      }, {\n        country: \"Austria\",\n        value: 128\n      }];\n      var series = chart.series.push(new am4charts.PieSeries());\n      series.dataFields.value = \"value\";\n      series.dataFields.radiusValue = \"value\";\n      series.dataFields.category = \"country\";\n      series.slices.template.cornerRadius = 6;\n      series.colors.step = 3;\n      series.hiddenState.properties.endAngle = -90;\n      chart.legend = new am4charts.Legend();\n    }); // end am4core.ready()\n  };\n\n  var _demo4 = function _demo4() {\n    // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/\n    am4core.ready(function () {\n      // Themes begin\n      am4core.useTheme(am4themes_frozen);\n      am4core.useTheme(am4themes_animated); // Themes end\n\n      chart = am4core.create(\"kt_amcharts_4\", am4plugins_timeline.SerpentineChart);\n      chart.curveContainer.padding(20, 20, 20, 20);\n      chart.levelCount = 8;\n      chart.orientation = \"horizontal\";\n      chart.fontSize = 11;\n      var colorSet = new am4core.ColorSet();\n      colorSet.saturation = 0.6;\n      chart.data = [{\n        \"category\": \"Module #1\",\n        \"start\": \"2016-01-10\",\n        \"end\": \"2016-01-13\",\n        \"color\": colorSet.getIndex(0),\n        \"task\": \"Gathering requirements\"\n      }, {\n        \"category\": \"Module #1\",\n        \"start\": \"2016-02-05\",\n        \"end\": \"2016-04-18\",\n        \"color\": colorSet.getIndex(0),\n        \"task\": \"Development\"\n      }, {\n        \"category\": \"Module #2\",\n        \"start\": \"2016-01-08\",\n        \"end\": \"2016-01-10\",\n        \"color\": colorSet.getIndex(5),\n        \"task\": \"Gathering requirements\"\n      }, {\n        \"category\": \"Module #2\",\n        \"start\": \"2016-01-12\",\n        \"end\": \"2016-01-15\",\n        \"color\": colorSet.getIndex(5),\n        \"task\": \"Producing specifications\"\n      }, {\n        \"category\": \"Module #2\",\n        \"start\": \"2016-01-16\",\n        \"end\": \"2016-02-05\",\n        \"color\": colorSet.getIndex(5),\n        \"task\": \"Development\"\n      }, {\n        \"category\": \"Module #2\",\n        \"start\": \"2016-02-10\",\n        \"end\": \"2016-02-18\",\n        \"color\": colorSet.getIndex(5),\n        \"task\": \"Testing and QA\"\n      }, {\n        \"category\": \"\",\n        \"task\": \"\"\n      }, {\n        \"category\": \"Module #3\",\n        \"start\": \"2016-01-01\",\n        \"end\": \"2016-01-19\",\n        \"color\": colorSet.getIndex(9),\n        \"task\": \"Gathering requirements\"\n      }, {\n        \"category\": \"Module #3\",\n        \"start\": \"2016-02-01\",\n        \"end\": \"2016-02-10\",\n        \"color\": colorSet.getIndex(9),\n        \"task\": \"Producing specifications\"\n      }, {\n        \"category\": \"Module #3\",\n        \"start\": \"2016-03-10\",\n        \"end\": \"2016-04-15\",\n        \"color\": colorSet.getIndex(9),\n        \"task\": \"Development\"\n      }, {\n        \"category\": \"Module #3\",\n        \"start\": \"2016-04-20\",\n        \"end\": \"2016-04-30\",\n        \"color\": colorSet.getIndex(9),\n        \"task\": \"Testing and QA\"\n      }, {\n        \"category\": \"Module #4\",\n        \"start\": \"2016-01-15\",\n        \"end\": \"2016-02-12\",\n        \"color\": colorSet.getIndex(15),\n        \"task\": \"Gathering requirements\"\n      }, {\n        \"category\": \"Module #4\",\n        \"start\": \"2016-02-25\",\n        \"end\": \"2016-03-10\",\n        \"color\": colorSet.getIndex(15),\n        \"task\": \"Development\"\n      }, {\n        \"category\": \"Module #4\",\n        \"start\": \"2016-03-23\",\n        \"end\": \"2016-04-29\",\n        \"color\": colorSet.getIndex(15),\n        \"task\": \"Testing and QA\"\n      }];\n      chart.dateFormatter.dateFormat = \"yyyy-MM-dd\";\n      chart.dateFormatter.inputDateFormat = \"yyyy-MM-dd\";\n      var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());\n      categoryAxis.dataFields.category = \"category\";\n      categoryAxis.renderer.grid.template.disabled = true;\n      categoryAxis.renderer.labels.template.paddingRight = 25;\n      categoryAxis.renderer.minGridDistance = 10;\n      categoryAxis.renderer.innerRadius = -60;\n      categoryAxis.renderer.radius = 60;\n      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());\n      dateAxis.renderer.minGridDistance = 70;\n      dateAxis.baseInterval = {\n        count: 1,\n        timeUnit: \"day\"\n      };\n      dateAxis.renderer.tooltipLocation = 0;\n      dateAxis.startLocation = -0.5;\n      dateAxis.renderer.line.strokeDasharray = \"1,4\";\n      dateAxis.renderer.line.strokeOpacity = 0.7;\n      dateAxis.tooltip.background.fillOpacity = 0.2;\n      dateAxis.tooltip.background.cornerRadius = 5;\n      dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(\"alternativeBackground\");\n      dateAxis.tooltip.label.paddingTop = 7;\n      var labelTemplate = dateAxis.renderer.labels.template;\n      labelTemplate.verticalCenter = \"middle\";\n      labelTemplate.fillOpacity = 0.7;\n      labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(\"background\");\n      labelTemplate.background.fillOpacity = 1;\n      labelTemplate.padding(7, 7, 7, 7);\n      var categoryAxisLabelTemplate = categoryAxis.renderer.labels.template;\n      categoryAxisLabelTemplate.horizontalCenter = \"left\";\n      categoryAxisLabelTemplate.adapter.add(\"rotation\", function (rotation, target) {\n        var position = dateAxis.valueToPosition(dateAxis.min);\n        return dateAxis.renderer.positionToAngle(position) + 90;\n      });\n      var series1 = chart.series.push(new am4plugins_timeline.CurveColumnSeries());\n      series1.columns.template.height = am4core.percent(20);\n      series1.columns.template.tooltipText = \"{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]\";\n      series1.dataFields.openDateX = \"start\";\n      series1.dataFields.dateX = \"end\";\n      series1.dataFields.categoryY = \"category\";\n      series1.columns.template.propertyFields.fill = \"color\"; // get color from data\n\n      series1.columns.template.propertyFields.stroke = \"color\";\n      series1.columns.template.strokeOpacity = 0;\n      var bullet = new am4charts.CircleBullet();\n      series1.bullets.push(bullet);\n      bullet.circle.radius = 3;\n      bullet.circle.strokeOpacity = 0;\n      bullet.propertyFields.fill = \"color\";\n      bullet.locationX = 0;\n      var bullet2 = new am4charts.CircleBullet();\n      series1.bullets.push(bullet2);\n      bullet2.circle.radius = 3;\n      bullet2.circle.strokeOpacity = 0;\n      bullet2.propertyFields.fill = \"color\";\n      bullet2.locationX = 1;\n      chart.scrollbarX = new am4core.Scrollbar();\n      chart.scrollbarX.align = \"center\";\n      chart.scrollbarX.width = am4core.percent(90);\n      var cursor = new am4plugins_timeline.CurveCursor();\n      chart.cursor = cursor;\n      cursor.xAxis = dateAxis;\n      cursor.yAxis = categoryAxis;\n      cursor.lineY.disabled = true;\n      cursor.lineX.strokeDasharray = \"1,4\";\n      cursor.lineX.strokeOpacity = 1;\n      dateAxis.renderer.tooltipLocation2 = 0;\n      categoryAxis.cursorTooltipEnabled = false;\n    }); // end am4core.ready()\n  };\n\n  var _demo5 = function _demo5() {\n    // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/\n    am4core.ready(function () {\n      // Themes begin\n      am4core.useTheme(am4themes_animated); // Themes end\n\n      chart = am4core.create(\"kt_amcharts_5\", am4charts.RadarChart);\n      chart.innerRadius = am4core.percent(30);\n      chart.fontSize = 11;\n      var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());\n      var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());\n      yAxis.renderer.minGridDistance = 5;\n      xAxis.renderer.labels.template.location = 0.5;\n      xAxis.renderer.labels.template.bent = true;\n      xAxis.renderer.labels.template.radius = 5;\n      xAxis.dataFields.category = \"hour\";\n      yAxis.dataFields.category = \"weekday\";\n      xAxis.renderer.grid.template.disabled = true;\n      xAxis.renderer.minGridDistance = 10;\n      yAxis.renderer.grid.template.disabled = true;\n      yAxis.renderer.inversed = true; // this makes the y axis labels to be bent. By default y Axis labels are regular AxisLabels, so we replace them with AxisLabelCircular\n      // and call fixPosition for them to be bent\n\n      var yAxisLabel = new am4charts.AxisLabelCircular();\n      yAxisLabel.bent = true;\n      yAxisLabel.events.on(\"validated\", function (event) {\n        event.target.fixPosition(-90, am4core.math.getDistance({\n          x: event.target.pixelX,\n          y: event.target.pixelY\n        }) - 5);\n        event.target.dx = -event.target.pixelX;\n        event.target.dy = -event.target.pixelY;\n      });\n      yAxis.renderer.labels.template = yAxisLabel;\n      var series = chart.series.push(new am4charts.RadarColumnSeries());\n      series.dataFields.categoryX = \"hour\";\n      series.dataFields.categoryY = \"weekday\";\n      series.dataFields.value = \"value\";\n      series.sequencedInterpolation = true;\n      var columnTemplate = series.columns.template;\n      columnTemplate.strokeWidth = 2;\n      columnTemplate.strokeOpacity = 1;\n      columnTemplate.stroke = am4core.color(\"#ffffff\");\n      columnTemplate.tooltipText = \"{weekday}, {hour}: {value.workingValue.formatNumber('#.')}\";\n      columnTemplate.width = am4core.percent(100);\n      columnTemplate.height = am4core.percent(100);\n      chart.seriesContainer.zIndex = -5;\n      columnTemplate.hiddenState.properties.opacity = 0; // heat rule, this makes columns to change color depending on value\n\n      series.heatRules.push({\n        target: columnTemplate,\n        property: \"fill\",\n        min: am4core.color(\"#fffb77\"),\n        max: am4core.color(\"#fe131a\")\n      }); // heat legend\n\n      var heatLegend = chart.bottomAxesContainer.createChild(am4charts.HeatLegend);\n      heatLegend.width = am4core.percent(100);\n      heatLegend.series = series;\n      heatLegend.valueAxis.renderer.labels.template.fontSize = 9;\n      heatLegend.valueAxis.renderer.minGridDistance = 30; // heat legend behavior\n\n      series.columns.template.events.on(\"over\", function (event) {\n        handleHover(event.target);\n      });\n      series.columns.template.events.on(\"hit\", function (event) {\n        handleHover(event.target);\n      });\n\n      function handleHover(column) {\n        if (!isNaN(column.dataItem.value)) {\n          heatLegend.valueAxis.showTooltipAt(column.dataItem.value);\n        } else {\n          heatLegend.valueAxis.hideTooltip();\n        }\n      }\n\n      series.columns.template.events.on(\"out\", function (event) {\n        heatLegend.valueAxis.hideTooltip();\n      });\n      chart.data = [{\n        \"hour\": \"12pm\",\n        \"weekday\": \"Sunday\",\n        \"value\": 2990\n      }, {\n        \"hour\": \"1am\",\n        \"weekday\": \"Sunday\",\n        \"value\": 2520\n      }, {\n        \"hour\": \"2am\",\n        \"weekday\": \"Sunday\",\n        \"value\": 2334\n      }, {\n        \"hour\": \"3am\",\n        \"weekday\": \"Sunday\",\n        \"value\": 2230\n      }, {\n        \"hour\": \"4am\",\n        \"weekday\": \"Sunday\",\n        \"value\": 2325\n      }, {\n        \"hour\": \"5am\",\n        \"weekday\": \"Sunday\",\n        \"value\": 2019\n      }, {\n        \"hour\": \"6am\",\n        \"weekday\": \"Sunday\",\n        \"value\": 2128\n      }, {\n        \"hour\": \"7am\",\n        \"weekday\": \"Sunday\",\n        \"value\": 2246\n      }, {\n        \"hour\": \"8am\",\n        \"weekday\": \"Sunday\",\n        \"value\": 2421\n      }, {\n        \"hour\": \"9am\",\n        \"weekday\": \"Sunday\",\n        \"value\": 2788\n      }, {\n        \"hour\": \"10am\",\n        \"weekday\": \"Sunday\",\n        \"value\": 2959\n      }, {\n        \"hour\": \"11am\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3018\n      }, {\n        \"hour\": \"12am\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3154\n      }, {\n        \"hour\": \"1pm\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3172\n      }, {\n        \"hour\": \"2pm\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3368\n      }, {\n        \"hour\": \"3pm\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3464\n      }, {\n        \"hour\": \"4pm\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3746\n      }, {\n        \"hour\": \"5pm\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3656\n      }, {\n        \"hour\": \"6pm\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3336\n      }, {\n        \"hour\": \"7pm\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3292\n      }, {\n        \"hour\": \"8pm\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3269\n      }, {\n        \"hour\": \"9pm\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3300\n      }, {\n        \"hour\": \"10pm\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3403\n      }, {\n        \"hour\": \"11pm\",\n        \"weekday\": \"Sunday\",\n        \"value\": 3323\n      }, {\n        \"hour\": \"12pm\",\n        \"weekday\": \"Monday\",\n        \"value\": 3346\n      }, {\n        \"hour\": \"1am\",\n        \"weekday\": \"Monday\",\n        \"value\": 2725\n      }, {\n        \"hour\": \"2am\",\n        \"weekday\": \"Monday\",\n        \"value\": 3052\n      }, {\n        \"hour\": \"3am\",\n        \"weekday\": \"Monday\",\n        \"value\": 3876\n      }, {\n        \"hour\": \"4am\",\n        \"weekday\": \"Monday\",\n        \"value\": 4453\n      }, {\n        \"hour\": \"5am\",\n        \"weekday\": \"Monday\",\n        \"value\": 3972\n      }, {\n        \"hour\": \"6am\",\n        \"weekday\": \"Monday\",\n        \"value\": 4644\n      }, {\n        \"hour\": \"7am\",\n        \"weekday\": \"Monday\",\n        \"value\": 5715\n      }, {\n        \"hour\": \"8am\",\n        \"weekday\": \"Monday\",\n        \"value\": 7080\n      }, {\n        \"hour\": \"9am\",\n        \"weekday\": \"Monday\",\n        \"value\": 8022\n      }, {\n        \"hour\": \"10am\",\n        \"weekday\": \"Monday\",\n        \"value\": 8446\n      }, {\n        \"hour\": \"11am\",\n        \"weekday\": \"Monday\",\n        \"value\": 9313\n      }, {\n        \"hour\": \"12am\",\n        \"weekday\": \"Monday\",\n        \"value\": 9011\n      }, {\n        \"hour\": \"1pm\",\n        \"weekday\": \"Monday\",\n        \"value\": 8508\n      }, {\n        \"hour\": \"2pm\",\n        \"weekday\": \"Monday\",\n        \"value\": 8515\n      }, {\n        \"hour\": \"3pm\",\n        \"weekday\": \"Monday\",\n        \"value\": 8399\n      }, {\n        \"hour\": \"4pm\",\n        \"weekday\": \"Monday\",\n        \"value\": 8649\n      }, {\n        \"hour\": \"5pm\",\n        \"weekday\": \"Monday\",\n        \"value\": 7869\n      }, {\n        \"hour\": \"6pm\",\n        \"weekday\": \"Monday\",\n        \"value\": 6933\n      }, {\n        \"hour\": \"7pm\",\n        \"weekday\": \"Monday\",\n        \"value\": 5969\n      }, {\n        \"hour\": \"8pm\",\n        \"weekday\": \"Monday\",\n        \"value\": 5552\n      }, {\n        \"hour\": \"9pm\",\n        \"weekday\": \"Monday\",\n        \"value\": 5434\n      }, {\n        \"hour\": \"10pm\",\n        \"weekday\": \"Monday\",\n        \"value\": 5070\n      }, {\n        \"hour\": \"11pm\",\n        \"weekday\": \"Monday\",\n        \"value\": 4851\n      }, {\n        \"hour\": \"12pm\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 4468\n      }, {\n        \"hour\": \"1am\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 3306\n      }, {\n        \"hour\": \"2am\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 3906\n      }, {\n        \"hour\": \"3am\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 4413\n      }, {\n        \"hour\": \"4am\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 4726\n      }, {\n        \"hour\": \"5am\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 4584\n      }, {\n        \"hour\": \"6am\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 5717\n      }, {\n        \"hour\": \"7am\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 6504\n      }, {\n        \"hour\": \"8am\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 8104\n      }, {\n        \"hour\": \"9am\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 8813\n      }, {\n        \"hour\": \"10am\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 9278\n      }, {\n        \"hour\": \"11am\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 10425\n      }, {\n        \"hour\": \"12am\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 10137\n      }, {\n        \"hour\": \"1pm\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 9290\n      }, {\n        \"hour\": \"2pm\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 9255\n      }, {\n        \"hour\": \"3pm\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 9614\n      }, {\n        \"hour\": \"4pm\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 9713\n      }, {\n        \"hour\": \"5pm\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 9667\n      }, {\n        \"hour\": \"6pm\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 8774\n      }, {\n        \"hour\": \"7pm\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 8649\n      }, {\n        \"hour\": \"8pm\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 9937\n      }, {\n        \"hour\": \"9pm\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 10286\n      }, {\n        \"hour\": \"10pm\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 9175\n      }, {\n        \"hour\": \"11pm\",\n        \"weekday\": \"Tuesday\",\n        \"value\": 8581\n      }, {\n        \"hour\": \"12pm\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 8145\n      }, {\n        \"hour\": \"1am\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 7177\n      }, {\n        \"hour\": \"2am\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 5657\n      }, {\n        \"hour\": \"3am\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 6802\n      }, {\n        \"hour\": \"4am\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 8159\n      }, {\n        \"hour\": \"5am\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 8449\n      }, {\n        \"hour\": \"6am\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 9453\n      }, {\n        \"hour\": \"7am\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 9947\n      }, {\n        \"hour\": \"8am\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 11471\n      }, {\n        \"hour\": \"9am\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 12492\n      }, {\n        \"hour\": \"10am\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 9388\n      }, {\n        \"hour\": \"11am\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 9928\n      }, {\n        \"hour\": \"12am\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 9644\n      }, {\n        \"hour\": \"1pm\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 9034\n      }, {\n        \"hour\": \"2pm\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 8964\n      }, {\n        \"hour\": \"3pm\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 9069\n      }, {\n        \"hour\": \"4pm\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 8898\n      }, {\n        \"hour\": \"5pm\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 8322\n      }, {\n        \"hour\": \"6pm\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 6909\n      }, {\n        \"hour\": \"7pm\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 5810\n      }, {\n        \"hour\": \"8pm\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 5151\n      }, {\n        \"hour\": \"9pm\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 4911\n      }, {\n        \"hour\": \"10pm\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 4487\n      }, {\n        \"hour\": \"11pm\",\n        \"weekday\": \"Wednesday\",\n        \"value\": 4118\n      }, {\n        \"hour\": \"12pm\",\n        \"weekday\": \"Thursday\",\n        \"value\": 3689\n      }, {\n        \"hour\": \"1am\",\n        \"weekday\": \"Thursday\",\n        \"value\": 3081\n      }, {\n        \"hour\": \"2am\",\n        \"weekday\": \"Thursday\",\n        \"value\": 6525\n      }, {\n        \"hour\": \"3am\",\n        \"weekday\": \"Thursday\",\n        \"value\": 6228\n      }, {\n        \"hour\": \"4am\",\n        \"weekday\": \"Thursday\",\n        \"value\": 6917\n      }, {\n        \"hour\": \"5am\",\n        \"weekday\": \"Thursday\",\n        \"value\": 6568\n      }, {\n        \"hour\": \"6am\",\n        \"weekday\": \"Thursday\",\n        \"value\": 6405\n      }, {\n        \"hour\": \"7am\",\n        \"weekday\": \"Thursday\",\n        \"value\": 8106\n      }, {\n        \"hour\": \"8am\",\n        \"weekday\": \"Thursday\",\n        \"value\": 8542\n      }, {\n        \"hour\": \"9am\",\n        \"weekday\": \"Thursday\",\n        \"value\": 8501\n      }, {\n        \"hour\": \"10am\",\n        \"weekday\": \"Thursday\",\n        \"value\": 8802\n      }, {\n        \"hour\": \"11am\",\n        \"weekday\": \"Thursday\",\n        \"value\": 9420\n      }, {\n        \"hour\": \"12am\",\n        \"weekday\": \"Thursday\",\n        \"value\": 8966\n      }, {\n        \"hour\": \"1pm\",\n        \"weekday\": \"Thursday\",\n        \"value\": 8135\n      }, {\n        \"hour\": \"2pm\",\n        \"weekday\": \"Thursday\",\n        \"value\": 8224\n      }, {\n        \"hour\": \"3pm\",\n        \"weekday\": \"Thursday\",\n        \"value\": 8387\n      }, {\n        \"hour\": \"4pm\",\n        \"weekday\": \"Thursday\",\n        \"value\": 8218\n      }, {\n        \"hour\": \"5pm\",\n        \"weekday\": \"Thursday\",\n        \"value\": 7641\n      }, {\n        \"hour\": \"6pm\",\n        \"weekday\": \"Thursday\",\n        \"value\": 6469\n      }, {\n        \"hour\": \"7pm\",\n        \"weekday\": \"Thursday\",\n        \"value\": 5441\n      }, {\n        \"hour\": \"8pm\",\n        \"weekday\": \"Thursday\",\n        \"value\": 4952\n      }, {\n        \"hour\": \"9pm\",\n        \"weekday\": \"Thursday\",\n        \"value\": 4643\n      }, {\n        \"hour\": \"10pm\",\n        \"weekday\": \"Thursday\",\n        \"value\": 4393\n      }, {\n        \"hour\": \"11pm\",\n        \"weekday\": \"Thursday\",\n        \"value\": 4017\n      }, {\n        \"hour\": \"12pm\",\n        \"weekday\": \"Friday\",\n        \"value\": 4022\n      }, {\n        \"hour\": \"1am\",\n        \"weekday\": \"Friday\",\n        \"value\": 3063\n      }, {\n        \"hour\": \"2am\",\n        \"weekday\": \"Friday\",\n        \"value\": 3638\n      }, {\n        \"hour\": \"3am\",\n        \"weekday\": \"Friday\",\n        \"value\": 3968\n      }, {\n        \"hour\": \"4am\",\n        \"weekday\": \"Friday\",\n        \"value\": 4070\n      }, {\n        \"hour\": \"5am\",\n        \"weekday\": \"Friday\",\n        \"value\": 4019\n      }, {\n        \"hour\": \"6am\",\n        \"weekday\": \"Friday\",\n        \"value\": 4548\n      }, {\n        \"hour\": \"7am\",\n        \"weekday\": \"Friday\",\n        \"value\": 5465\n      }, {\n        \"hour\": \"8am\",\n        \"weekday\": \"Friday\",\n        \"value\": 6909\n      }, {\n        \"hour\": \"9am\",\n        \"weekday\": \"Friday\",\n        \"value\": 7706\n      }, {\n        \"hour\": \"10am\",\n        \"weekday\": \"Friday\",\n        \"value\": 7867\n      }, {\n        \"hour\": \"11am\",\n        \"weekday\": \"Friday\",\n        \"value\": 8615\n      }, {\n        \"hour\": \"12am\",\n        \"weekday\": \"Friday\",\n        \"value\": 8218\n      }, {\n        \"hour\": \"1pm\",\n        \"weekday\": \"Friday\",\n        \"value\": 7604\n      }, {\n        \"hour\": \"2pm\",\n        \"weekday\": \"Friday\",\n        \"value\": 7429\n      }, {\n        \"hour\": \"3pm\",\n        \"weekday\": \"Friday\",\n        \"value\": 7488\n      }, {\n        \"hour\": \"4pm\",\n        \"weekday\": \"Friday\",\n        \"value\": 7493\n      }, {\n        \"hour\": \"5pm\",\n        \"weekday\": \"Friday\",\n        \"value\": 6998\n      }, {\n        \"hour\": \"6pm\",\n        \"weekday\": \"Friday\",\n        \"value\": 5941\n      }, {\n        \"hour\": \"7pm\",\n        \"weekday\": \"Friday\",\n        \"value\": 5068\n      }, {\n        \"hour\": \"8pm\",\n        \"weekday\": \"Friday\",\n        \"value\": 4636\n      }, {\n        \"hour\": \"9pm\",\n        \"weekday\": \"Friday\",\n        \"value\": 4241\n      }, {\n        \"hour\": \"10pm\",\n        \"weekday\": \"Friday\",\n        \"value\": 3858\n      }, {\n        \"hour\": \"11pm\",\n        \"weekday\": \"Friday\",\n        \"value\": 3833\n      }, {\n        \"hour\": \"12pm\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3503\n      }, {\n        \"hour\": \"1am\",\n        \"weekday\": \"Saturday\",\n        \"value\": 2842\n      }, {\n        \"hour\": \"2am\",\n        \"weekday\": \"Saturday\",\n        \"value\": 2808\n      }, {\n        \"hour\": \"3am\",\n        \"weekday\": \"Saturday\",\n        \"value\": 2399\n      }, {\n        \"hour\": \"4am\",\n        \"weekday\": \"Saturday\",\n        \"value\": 2280\n      }, {\n        \"hour\": \"5am\",\n        \"weekday\": \"Saturday\",\n        \"value\": 2139\n      }, {\n        \"hour\": \"6am\",\n        \"weekday\": \"Saturday\",\n        \"value\": 2527\n      }, {\n        \"hour\": \"7am\",\n        \"weekday\": \"Saturday\",\n        \"value\": 2940\n      }, {\n        \"hour\": \"8am\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3066\n      }, {\n        \"hour\": \"9am\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3494\n      }, {\n        \"hour\": \"10am\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3287\n      }, {\n        \"hour\": \"11am\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3416\n      }, {\n        \"hour\": \"12am\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3432\n      }, {\n        \"hour\": \"1pm\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3523\n      }, {\n        \"hour\": \"2pm\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3542\n      }, {\n        \"hour\": \"3pm\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3347\n      }, {\n        \"hour\": \"4pm\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3292\n      }, {\n        \"hour\": \"5pm\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3416\n      }, {\n        \"hour\": \"6pm\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3131\n      }, {\n        \"hour\": \"7pm\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3057\n      }, {\n        \"hour\": \"8pm\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3227\n      }, {\n        \"hour\": \"9pm\",\n        \"weekday\": \"Saturday\",\n        \"value\": 3060\n      }, {\n        \"hour\": \"10pm\",\n        \"weekday\": \"Saturday\",\n        \"value\": 2855\n      }, {\n        \"hour\": \"11pm\",\n        \"weekday\": \"Saturday\",\n        \"value\": 2625\n      }];\n    }); // end am4core.ready()\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      _demo1();\n\n      _demo2();\n\n      _demo3();\n\n      _demo4();\n\n      _demo5();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralAmCharts.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9hbWNoYXJ0cy9jaGFydHMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsaUJBQWlCLEdBQUcsWUFBWTtBQUNoQztBQUNBLE1BQUlDLEtBQUosQ0FGZ0MsQ0FJaEM7O0FBQ0EsTUFBSUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBWTtBQUNyQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxZQUFZO0FBRXRCO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0UsUUFBUixDQUFpQkMsa0JBQWpCLEVBSHNCLENBSXRCOztBQUVBTCxNQUFBQSxLQUFLLEdBQUdFLE9BQU8sQ0FBQ0ksTUFBUixDQUFlLGVBQWYsRUFBZ0NDLFNBQVMsQ0FBQ0MsT0FBMUMsQ0FBUjtBQUNBUixNQUFBQSxLQUFLLENBQUNTLE1BQU4sQ0FBYUMsSUFBYixHQUFvQixDQUFwQjtBQUVBVixNQUFBQSxLQUFLLENBQUNXLE1BQU4sR0FBZSxJQUFJSixTQUFTLENBQUNLLE1BQWQsRUFBZjtBQUNBWixNQUFBQSxLQUFLLENBQUNXLE1BQU4sQ0FBYUUsUUFBYixHQUF3QixLQUF4QjtBQUNBYixNQUFBQSxLQUFLLENBQUNXLE1BQU4sQ0FBYUcsYUFBYixHQUE2QixFQUE3QjtBQUNBZCxNQUFBQSxLQUFLLENBQUNXLE1BQU4sQ0FBYUksTUFBYixDQUFvQkMsUUFBcEIsQ0FBNkJDLFFBQTdCLEdBQXdDLEVBQXhDO0FBRUEsVUFBSUMsS0FBSyxHQUFHbEIsS0FBSyxDQUFDbUIsS0FBTixDQUFZQyxJQUFaLENBQWlCLElBQUliLFNBQVMsQ0FBQ2MsWUFBZCxFQUFqQixDQUFaO0FBQ0FILE1BQUFBLEtBQUssQ0FBQ0ksVUFBTixDQUFpQkMsUUFBakIsR0FBNEIsVUFBNUI7QUFDQUwsTUFBQUEsS0FBSyxDQUFDTSxRQUFOLENBQWVDLGlCQUFmLEdBQW1DLEdBQW5DO0FBQ0FQLE1BQUFBLEtBQUssQ0FBQ00s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LE1BQU07QUFDVDtBQVJFLEdBQVA7QUFVSCxDQTkyQ3VCLEVBQXhCLEMsQ0FnM0NBOzs7QUFDQWdDLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQy9OLEVBQUFBLGlCQUFpQixDQUFDNk4sSUFBbEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvYW1jaGFydHMvY2hhcnRzLmpzPzAyYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEdlbmVyYWxBbUNoYXJ0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTaGFyZWQgdmFyaWFibGVcbiAgICB2YXIgY2hhcnQ7XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBfZGVtbzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEluaXQgQW1DaGFydCAtLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQgdGhlIG9mZmljaWFsIGRvY3VtZW50aWF0aW9uOiBodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vZG9jcy92NC9cbiAgICAgICAgYW00Y29yZS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vIFRoZW1lcyBiZWdpblxuICAgICAgICAgICAgYW00Y29yZS51c2VUaGVtZShhbTR0aGVtZXNfYW5pbWF0ZWQpO1xuICAgICAgICAgICAgLy8gVGhlbWVzIGVuZFxuXG4gICAgICAgICAgICBjaGFydCA9IGFtNGNvcmUuY3JlYXRlKCdrdF9hbWNoYXJ0c18xJywgYW00Y2hhcnRzLlhZQ2hhcnQpXG4gICAgICAgICAgICBjaGFydC5jb2xvcnMuc3RlcCA9IDI7XG5cbiAgICAgICAgICAgIGNoYXJ0LmxlZ2VuZCA9IG5ldyBhbTRjaGFydHMuTGVnZW5kKClcbiAgICAgICAgICAgIGNoYXJ0LmxlZ2VuZC5wb3NpdGlvbiA9ICd0b3AnXG4gICAgICAgICAgICBjaGFydC5sZWdlbmQucGFkZGluZ0JvdHRvbSA9IDIwXG4gICAgICAgICAgICBjaGFydC5sZWdlbmQubGFiZWxzLnRlbXBsYXRlLm1heFdpZHRoID0gOTVcblxuICAgICAgICAgICAgdmFyIHhBeGlzID0gY2hhcnQueEF4ZXMucHVzaChuZXcgYW00Y2hhcnRzLkNhdGVnb3J5QXhpcygpKVxuICAgICAgICAgICAgeEF4aXMuZGF0YUZpZWxkcy5jYXRlZ29yeSA9ICdjYXRlZ29yeSdcbiAgICAgICAgICAgIHhBeGlzLnJlbmRlcmVyLmNlbGxTdGFydExvY2F0aW9uID0gMC4xXG4gICAgICAgICAgICB4QXhpcy5yZW5kZXJlci5jZWxsRW5kTG9jYXRpb24gPSAwLjlcbiAgICAgICAgICAgIHhBeGlzLnJlbmRlcmVyLmdyaWQudGVtcGxhdGUubG9jYXRpb24gPSAwO1xuXG4gICAgICAgICAgICB2YXIgeUF4aXMgPSBjaGFydC55QXhlcy5wdXNoKG5ldyBhbTRjaGFydHMuVmFsdWVBeGlzKCkpO1xuICAgICAgICAgICAgeUF4aXMubWluID0gMDtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2VyaWVzKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlcmllcyA9IGNoYXJ0LnNlcmllcy5wdXNoKG5ldyBhbTRjaGFydHMuQ29sdW1uU2VyaWVzKCkpXG4gICAgICAgICAgICAgICAgc2VyaWVzLmRhdGFGaWVsZHMudmFsdWVZID0gdmFsdWVcbiAgICAgICAgICAgICAgICBzZXJpZXMuZGF0YUZpZWxkcy5jYXRlZ29yeVggPSAnY2F0ZWdvcnknXG4gICAgICAgICAgICAgICAgc2VyaWVzLm5hbWUgPSBuYW1lXG5cbiAgICAgICAgICAgICAgICBzZXJpZXMuZXZlbnRzLm9uKFwiaGlkZGVuXCIsIGFycmFuZ2VDb2x1bW5zKTtcbiAgICAgICAgICAgICAgICBzZXJpZXMuZXZlbnRzLm9uKFwic2hvd25cIiwgYXJyYW5nZUNvbHVtbnMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGJ1bGxldCA9IHNlcmllcy5idWxsZXRzLnB1c2gobmV3IGFtNGNoYXJ0cy5MYWJlbEJ1bGxldCgpKVxuICAgICAgICAgICAgICAgIGJ1bGxldC5pbnRlcmFjdGlvbnNFbmFibGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBidWxsZXQuZHkgPSAzMDtcbiAgICAgICAgICAgICAgICBidWxsZXQubGFiZWwudGV4dCA9ICd7dmFsdWVZfSdcbiAgICAgICAgICAgICAgICBidWxsZXQubGFiZWwuZmlsbCA9IGFtNGNvcmUuY29sb3IoJyNmZmZmZmYnKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlcmllcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hhcnQuZGF0YSA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnUGxhY2UgIzEnLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZDogNTUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXJkOiA2MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ1BsYWNlICMyJyxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IDMwLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmQ6IDc4LFxuICAgICAgICAgICAgICAgICAgICB0aGlyZDogNjlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdQbGFjZSAjMycsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0OiAyNyxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcmQ6IDQ1XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnUGxhY2UgIzQnLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdDogNTAsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZDogMzMsXG4gICAgICAgICAgICAgICAgICAgIHRoaXJkOiAyMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cblxuXG4gICAgICAgICAgICBjcmVhdGVTZXJpZXMoJ2ZpcnN0JywgJ1RoZSBGaXJzdCcpO1xuICAgICAgICAgICAgY3JlYXRlU2VyaWVzKCdzZWNvbmQnLCAnVGhlIFNlY29uZCcpO1xuICAgICAgICAgICAgY3JlYXRlU2VyaWVzKCd0aGlyZCcsICdUaGUgVGhpcmQnKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gYXJyYW5nZUNvbHVtbnMoKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2VyaWVzID0gY2hhcnQuc2VyaWVzLmdldEluZGV4KDApO1xuXG4gICAgICAgICAgICAgICAgdmFyIHcgPSAxIC0geEF4aXMucmVuZGVyZXIuY2VsbFN0YXJ0TG9jYXRpb24gLSAoMSAtIHhBeGlzLnJlbmRlcmVyLmNlbGxFbmRMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHNlcmllcy5kYXRhSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeDAgPSB4QXhpcy5nZXRYKHNlcmllcy5kYXRhSXRlbXMuZ2V0SW5kZXgoMCksIFwiY2F0ZWdvcnlYXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeDEgPSB4QXhpcy5nZXRYKHNlcmllcy5kYXRhSXRlbXMuZ2V0SW5kZXgoMSksIFwiY2F0ZWdvcnlYXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSAoKHgxIC0geDApIC8gY2hhcnQuc2VyaWVzLmxlbmd0aCkgKiB3O1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW00Y29yZS5pc051bWJlcihkZWx0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaWRkbGUgPSBjaGFydC5zZXJpZXMubGVuZ3RoIC8gMjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0LnNlcmllcy5lYWNoKGZ1bmN0aW9uIChzZXJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlcmllcy5pc0hpZGRlbiAmJiAhc2VyaWVzLmlzSGlkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy5kdW1teURhdGEgPSBuZXdJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy5kdW1teURhdGEgPSBjaGFydC5zZXJpZXMuaW5kZXhPZihzZXJpZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmlzaWJsZUNvdW50ID0gbmV3SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TWlkZGxlID0gdmlzaWJsZUNvdW50IC8gMjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQuc2VyaWVzLmVhY2goZnVuY3Rpb24gKHNlcmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cnVlSW5kZXggPSBjaGFydC5zZXJpZXMuaW5kZXhPZihzZXJpZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdJbmRleCA9IHNlcmllcy5kdW1teURhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHggPSAobmV3SW5kZXggLSB0cnVlSW5kZXggKyBtaWRkbGUgLSBuZXdNaWRkbGUpICogZGVsdGFcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy5hbmltYXRlKHsgcHJvcGVydHk6IFwiZHhcIiwgdG86IGR4IH0sIHNlcmllcy5pbnRlcnBvbGF0aW9uRHVyYXRpb24sIHNlcmllcy5pbnRlcnBvbGF0aW9uRWFzaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXMuYnVsbGV0c0NvbnRhaW5lci5hbmltYXRlKHsgcHJvcGVydHk6IFwiZHhcIiwgdG86IGR4IH0sIHNlcmllcy5pbnRlcnBvbGF0aW9uRHVyYXRpb24sIHNlcmllcy5pbnRlcnBvbGF0aW9uRWFzaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7IC8vIGVuZCBhbTRjb3JlLnJlYWR5KClcbiAgICB9XG5cbiAgICB2YXIgX2RlbW8yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJbml0IEFtQ2hhcnQgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0IHRoZSBvZmZpY2lhbCBkb2N1bWVudGlhdGlvbjogaHR0cHM6Ly93d3cuYW1jaGFydHMuY29tL2RvY3MvdjQvXG4gICAgICAgIGFtNGNvcmUucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBUaGVtZXMgYmVnaW5cbiAgICAgICAgICAgIGFtNGNvcmUudXNlVGhlbWUoYW00dGhlbWVzX2FuaW1hdGVkKTtcbiAgICAgICAgICAgIC8vIFRoZW1lcyBlbmRcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNoYXJ0XG4gICAgICAgICAgICBjaGFydCA9IGFtNGNvcmUuY3JlYXRlKFwia3RfYW1jaGFydHNfMlwiLCBhbTRjaGFydHMuWFlDaGFydCk7XG5cbiAgICAgICAgICAgIHZhciBkYXRhID0gW107XG4gICAgICAgICAgICB2YXIgcHJpY2UxID0gMTAwMCwgcHJpY2UyID0gMTIwMDtcbiAgICAgICAgICAgIHZhciBxdWFudGl0eSA9IDMwMDAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzNjA7IGkrKykge1xuICAgICAgICAgICAgICAgIHByaWNlMSArPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMSA6IC0xKSAqIE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICAgICAgICAgIGRhdGEucHVzaCh7IGRhdGUxOiBuZXcgRGF0ZSgyMDE1LCAwLCBpKSwgcHJpY2UxOiBwcmljZTEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM2MDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJpY2UyICs9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpICogTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKHsgZGF0ZTI6IG5ldyBEYXRlKDIwMTcsIDAsIGkpLCBwcmljZTI6IHByaWNlMiB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hhcnQuZGF0YSA9IGRhdGE7XG5cbiAgICAgICAgICAgIHZhciBkYXRlQXhpcyA9IGNoYXJ0LnhBeGVzLnB1c2gobmV3IGFtNGNoYXJ0cy5EYXRlQXhpcygpKTtcbiAgICAgICAgICAgIGRhdGVBeGlzLnJlbmRlcmVyLmdyaWQudGVtcGxhdGUubG9jYXRpb24gPSAwO1xuICAgICAgICAgICAgZGF0ZUF4aXMucmVuZGVyZXIubGFiZWxzLnRlbXBsYXRlLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiI2U1OTE2NVwiKTtcblxuICAgICAgICAgICAgdmFyIGRhdGVBeGlzMiA9IGNoYXJ0LnhBeGVzLnB1c2gobmV3IGFtNGNoYXJ0cy5EYXRlQXhpcygpKTtcbiAgICAgICAgICAgIGRhdGVBeGlzMi5yZW5kZXJlci5ncmlkLnRlbXBsYXRlLmxvY2F0aW9uID0gMDtcbiAgICAgICAgICAgIGRhdGVBeGlzMi5yZW5kZXJlci5sYWJlbHMudGVtcGxhdGUuZmlsbCA9IGFtNGNvcmUuY29sb3IoXCIjZGZjYzY0XCIpO1xuXG4gICAgICAgICAgICB2YXIgdmFsdWVBeGlzID0gY2hhcnQueUF4ZXMucHVzaChuZXcgYW00Y2hhcnRzLlZhbHVlQXhpcygpKTtcbiAgICAgICAgICAgIHZhbHVlQXhpcy50b29sdGlwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhbHVlQXhpcy5yZW5kZXJlci5sYWJlbHMudGVtcGxhdGUuZmlsbCA9IGFtNGNvcmUuY29sb3IoXCIjZTU5MTY1XCIpO1xuXG4gICAgICAgICAgICB2YWx1ZUF4aXMucmVuZGVyZXIubWluV2lkdGggPSA2MDtcblxuICAgICAgICAgICAgdmFyIHZhbHVlQXhpczIgPSBjaGFydC55QXhlcy5wdXNoKG5ldyBhbTRjaGFydHMuVmFsdWVBeGlzKCkpO1xuICAgICAgICAgICAgdmFsdWVBeGlzMi50b29sdGlwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhbHVlQXhpczIucmVuZGVyZXIubGFiZWxzLnRlbXBsYXRlLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiI2RmY2M2NFwiKTtcbiAgICAgICAgICAgIHZhbHVlQXhpczIucmVuZGVyZXIubWluV2lkdGggPSA2MDtcbiAgICAgICAgICAgIHZhbHVlQXhpczIuc3luY1dpdGhBeGlzID0gdmFsdWVBeGlzO1xuXG4gICAgICAgICAgICB2YXIgc2VyaWVzID0gY2hhcnQuc2VyaWVzLnB1c2gobmV3IGFtNGNoYXJ0cy5MaW5lU2VyaWVzKCkpO1xuICAgICAgICAgICAgc2VyaWVzLm5hbWUgPSBcIjIwMTVcIjtcbiAgICAgICAgICAgIHNlcmllcy5kYXRhRmllbGRzLmRhdGVYID0gXCJkYXRlMVwiO1xuICAgICAgICAgICAgc2VyaWVzLmRhdGFGaWVsZHMudmFsdWVZID0gXCJwcmljZTFcIjtcbiAgICAgICAgICAgIHNlcmllcy50b29sdGlwVGV4dCA9IFwie3ZhbHVlWS52YWx1ZX1cIjtcbiAgICAgICAgICAgIHNlcmllcy5maWxsID0gYW00Y29yZS5jb2xvcihcIiNlNTkxNjVcIik7XG4gICAgICAgICAgICBzZXJpZXMuc3Ryb2tlID0gYW00Y29yZS5jb2xvcihcIiNlNTkxNjVcIik7XG4gICAgICAgICAgICAvL3Nlcmllcy5zdHJva2VXaWR0aCA9IDM7XG5cbiAgICAgICAgICAgIHZhciBzZXJpZXMyID0gY2hhcnQuc2VyaWVzLnB1c2gobmV3IGFtNGNoYXJ0cy5MaW5lU2VyaWVzKCkpO1xuICAgICAgICAgICAgc2VyaWVzMi5uYW1lID0gXCIyMDE3XCI7XG4gICAgICAgICAgICBzZXJpZXMyLmRhdGFGaWVsZHMuZGF0ZVggPSBcImRhdGUyXCI7XG4gICAgICAgICAgICBzZXJpZXMyLmRhdGFGaWVsZHMudmFsdWVZID0gXCJwcmljZTJcIjtcbiAgICAgICAgICAgIHNlcmllczIueUF4aXMgPSB2YWx1ZUF4aXMyO1xuICAgICAgICAgICAgc2VyaWVzMi54QXhpcyA9IGRhdGVBeGlzMjtcbiAgICAgICAgICAgIHNlcmllczIudG9vbHRpcFRleHQgPSBcInt2YWx1ZVkudmFsdWV9XCI7XG4gICAgICAgICAgICBzZXJpZXMyLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiI2RmY2M2NFwiKTtcbiAgICAgICAgICAgIHNlcmllczIuc3Ryb2tlID0gYW00Y29yZS5jb2xvcihcIiNkZmNjNjRcIik7XG4gICAgICAgICAgICAvL3NlcmllczIuc3Ryb2tlV2lkdGggPSAzO1xuXG4gICAgICAgICAgICBjaGFydC5jdXJzb3IgPSBuZXcgYW00Y2hhcnRzLlhZQ3Vyc29yKCk7XG4gICAgICAgICAgICBjaGFydC5jdXJzb3IueEF4aXMgPSBkYXRlQXhpczI7XG5cbiAgICAgICAgICAgIHZhciBzY3JvbGxiYXJYID0gbmV3IGFtNGNoYXJ0cy5YWUNoYXJ0U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICBzY3JvbGxiYXJYLnNlcmllcy5wdXNoKHNlcmllcyk7XG4gICAgICAgICAgICBjaGFydC5zY3JvbGxiYXJYID0gc2Nyb2xsYmFyWDtcblxuICAgICAgICAgICAgY2hhcnQubGVnZW5kID0gbmV3IGFtNGNoYXJ0cy5MZWdlbmQoKTtcbiAgICAgICAgICAgIGNoYXJ0LmxlZ2VuZC5wYXJlbnQgPSBjaGFydC5wbG90Q29udGFpbmVyO1xuICAgICAgICAgICAgY2hhcnQubGVnZW5kLnpJbmRleCA9IDEwMDtcblxuICAgICAgICAgICAgdmFsdWVBeGlzMi5yZW5kZXJlci5ncmlkLnRlbXBsYXRlLnN0cm9rZU9wYWNpdHkgPSAwLjA3O1xuICAgICAgICAgICAgZGF0ZUF4aXMyLnJlbmRlcmVyLmdyaWQudGVtcGxhdGUuc3Ryb2tlT3BhY2l0eSA9IDAuMDc7XG4gICAgICAgICAgICBkYXRlQXhpcy5yZW5kZXJlci5ncmlkLnRlbXBsYXRlLnN0cm9rZU9wYWNpdHkgPSAwLjA3O1xuICAgICAgICAgICAgdmFsdWVBeGlzLnJlbmRlcmVyLmdyaWQudGVtcGxhdGUuc3Ryb2tlT3BhY2l0eSA9IDAuMDc7XG5cbiAgICAgICAgfSk7IC8vIGVuZCBhbTRjb3JlLnJlYWR5KClcbiAgICB9XG5cbiAgICB2YXIgX2RlbW8zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJbml0IEFtQ2hhcnQgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0IHRoZSBvZmZpY2lhbCBkb2N1bWVudGlhdGlvbjogaHR0cHM6Ly93d3cuYW1jaGFydHMuY29tL2RvY3MvdjQvXG4gICAgICAgIGFtNGNvcmUucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBUaGVtZXMgYmVnaW5cbiAgICAgICAgICAgIGFtNGNvcmUudXNlVGhlbWUoYW00dGhlbWVzX2RhdGF2aXopO1xuICAgICAgICAgICAgYW00Y29yZS51c2VUaGVtZShhbTR0aGVtZXNfYW5pbWF0ZWQpO1xuICAgICAgICAgICAgLy8gVGhlbWVzIGVuZFxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2hhcnRcbiAgICAgICAgICAgIGNoYXJ0ID0gYW00Y29yZS5jcmVhdGUoXCJrdF9hbWNoYXJ0c18zXCIsIGFtNGNoYXJ0cy5QaWVDaGFydCk7XG4gICAgICAgICAgICBjaGFydC5oaWRkZW5TdGF0ZS5wcm9wZXJ0aWVzLm9wYWNpdHkgPSAwOyAvLyB0aGlzIGNyZWF0ZXMgaW5pdGlhbCBmYWRlLWluXG5cbiAgICAgICAgICAgIGNoYXJ0LmRhdGEgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBcIkxpdGh1YW5pYVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMjYwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IFwiQ3plY2hpYVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMjMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IFwiSXJlbGFuZFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMjAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IFwiR2VybWFueVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTY1XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IFwiQXVzdHJhbGlhXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxMzlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTogXCJBdXN0cmlhXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxMjhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB2YXIgc2VyaWVzID0gY2hhcnQuc2VyaWVzLnB1c2gobmV3IGFtNGNoYXJ0cy5QaWVTZXJpZXMoKSk7XG4gICAgICAgICAgICBzZXJpZXMuZGF0YUZpZWxkcy52YWx1ZSA9IFwidmFsdWVcIjtcbiAgICAgICAgICAgIHNlcmllcy5kYXRhRmllbGRzLnJhZGl1c1ZhbHVlID0gXCJ2YWx1ZVwiO1xuICAgICAgICAgICAgc2VyaWVzLmRhdGFGaWVsZHMuY2F0ZWdvcnkgPSBcImNvdW50cnlcIjtcbiAgICAgICAgICAgIHNlcmllcy5zbGljZXMudGVtcGxhdGUuY29ybmVyUmFkaXVzID0gNjtcbiAgICAgICAgICAgIHNlcmllcy5jb2xvcnMuc3RlcCA9IDM7XG5cbiAgICAgICAgICAgIHNlcmllcy5oaWRkZW5TdGF0ZS5wcm9wZXJ0aWVzLmVuZEFuZ2xlID0gLTkwO1xuXG4gICAgICAgICAgICBjaGFydC5sZWdlbmQgPSBuZXcgYW00Y2hhcnRzLkxlZ2VuZCgpO1xuXG4gICAgICAgIH0pOyAvLyBlbmQgYW00Y29yZS5yZWFkeSgpXG4gICAgfVxuXG4gICAgdmFyIF9kZW1vNCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSW5pdCBBbUNoYXJ0IC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgZG9jdW1lbnRpYXRpb246IGh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9kb2NzL3Y0L1xuICAgICAgICBhbTRjb3JlLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy8gVGhlbWVzIGJlZ2luXG4gICAgICAgICAgICBhbTRjb3JlLnVzZVRoZW1lKGFtNHRoZW1lc19mcm96ZW4pO1xuICAgICAgICAgICAgYW00Y29yZS51c2VUaGVtZShhbTR0aGVtZXNfYW5pbWF0ZWQpO1xuICAgICAgICAgICAgLy8gVGhlbWVzIGVuZFxuXG4gICAgICAgICAgICBjaGFydCA9IGFtNGNvcmUuY3JlYXRlKFwia3RfYW1jaGFydHNfNFwiLCBhbTRwbHVnaW5zX3RpbWVsaW5lLlNlcnBlbnRpbmVDaGFydCk7XG4gICAgICAgICAgICBjaGFydC5jdXJ2ZUNvbnRhaW5lci5wYWRkaW5nKDIwLCAyMCwgMjAsIDIwKTtcbiAgICAgICAgICAgIGNoYXJ0LmxldmVsQ291bnQgPSA4O1xuICAgICAgICAgICAgY2hhcnQub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgICAgICAgICAgIGNoYXJ0LmZvbnRTaXplID0gMTE7XG5cbiAgICAgICAgICAgIHZhciBjb2xvclNldCA9IG5ldyBhbTRjb3JlLkNvbG9yU2V0KCk7XG4gICAgICAgICAgICBjb2xvclNldC5zYXR1cmF0aW9uID0gMC42O1xuXG4gICAgICAgICAgICBjaGFydC5kYXRhID0gW3tcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiTW9kdWxlICMxXCIsXG4gICAgICAgICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTYtMDEtMTBcIixcbiAgICAgICAgICAgICAgICBcImVuZFwiOiBcIjIwMTYtMDEtMTNcIixcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9yU2V0LmdldEluZGV4KDApLFxuICAgICAgICAgICAgICAgIFwidGFza1wiOiBcIkdhdGhlcmluZyByZXF1aXJlbWVudHNcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJNb2R1bGUgIzFcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNi0wMi0wNVwiLFxuICAgICAgICAgICAgICAgIFwiZW5kXCI6IFwiMjAxNi0wNC0xOFwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQuZ2V0SW5kZXgoMCksXG4gICAgICAgICAgICAgICAgXCJ0YXNrXCI6IFwiRGV2ZWxvcG1lbnRcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJNb2R1bGUgIzJcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNi0wMS0wOFwiLFxuICAgICAgICAgICAgICAgIFwiZW5kXCI6IFwiMjAxNi0wMS0xMFwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQuZ2V0SW5kZXgoNSksXG4gICAgICAgICAgICAgICAgXCJ0YXNrXCI6IFwiR2F0aGVyaW5nIHJlcXVpcmVtZW50c1wiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIk1vZHVsZSAjMlwiLFxuICAgICAgICAgICAgICAgIFwic3RhcnRcIjogXCIyMDE2LTAxLTEyXCIsXG4gICAgICAgICAgICAgICAgXCJlbmRcIjogXCIyMDE2LTAxLTE1XCIsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvclNldC5nZXRJbmRleCg1KSxcbiAgICAgICAgICAgICAgICBcInRhc2tcIjogXCJQcm9kdWNpbmcgc3BlY2lmaWNhdGlvbnNcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJNb2R1bGUgIzJcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNi0wMS0xNlwiLFxuICAgICAgICAgICAgICAgIFwiZW5kXCI6IFwiMjAxNi0wMi0wNVwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQuZ2V0SW5kZXgoNSksXG4gICAgICAgICAgICAgICAgXCJ0YXNrXCI6IFwiRGV2ZWxvcG1lbnRcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJNb2R1bGUgIzJcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNi0wMi0xMFwiLFxuICAgICAgICAgICAgICAgIFwiZW5kXCI6IFwiMjAxNi0wMi0xOFwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQuZ2V0SW5kZXgoNSksXG4gICAgICAgICAgICAgICAgXCJ0YXNrXCI6IFwiVGVzdGluZyBhbmQgUUFcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInRhc2tcIjogXCJcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJNb2R1bGUgIzNcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNi0wMS0wMVwiLFxuICAgICAgICAgICAgICAgIFwiZW5kXCI6IFwiMjAxNi0wMS0xOVwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQuZ2V0SW5kZXgoOSksXG4gICAgICAgICAgICAgICAgXCJ0YXNrXCI6IFwiR2F0aGVyaW5nIHJlcXVpcmVtZW50c1wiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIk1vZHVsZSAjM1wiLFxuICAgICAgICAgICAgICAgIFwic3RhcnRcIjogXCIyMDE2LTAyLTAxXCIsXG4gICAgICAgICAgICAgICAgXCJlbmRcIjogXCIyMDE2LTAyLTEwXCIsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvclNldC5nZXRJbmRleCg5KSxcbiAgICAgICAgICAgICAgICBcInRhc2tcIjogXCJQcm9kdWNpbmcgc3BlY2lmaWNhdGlvbnNcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJNb2R1bGUgIzNcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNi0wMy0xMFwiLFxuICAgICAgICAgICAgICAgIFwiZW5kXCI6IFwiMjAxNi0wNC0xNVwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQuZ2V0SW5kZXgoOSksXG4gICAgICAgICAgICAgICAgXCJ0YXNrXCI6IFwiRGV2ZWxvcG1lbnRcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJNb2R1bGUgIzNcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNi0wNC0yMFwiLFxuICAgICAgICAgICAgICAgIFwiZW5kXCI6IFwiMjAxNi0wNC0zMFwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQuZ2V0SW5kZXgoOSksXG4gICAgICAgICAgICAgICAgXCJ0YXNrXCI6IFwiVGVzdGluZyBhbmQgUUFcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJNb2R1bGUgIzRcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNi0wMS0xNVwiLFxuICAgICAgICAgICAgICAgIFwiZW5kXCI6IFwiMjAxNi0wMi0xMlwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQuZ2V0SW5kZXgoMTUpLFxuICAgICAgICAgICAgICAgIFwidGFza1wiOiBcIkdhdGhlcmluZyByZXF1aXJlbWVudHNcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJNb2R1bGUgIzRcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IFwiMjAxNi0wMi0yNVwiLFxuICAgICAgICAgICAgICAgIFwiZW5kXCI6IFwiMjAxNi0wMy0xMFwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JTZXQuZ2V0SW5kZXgoMTUpLFxuICAgICAgICAgICAgICAgIFwidGFza1wiOiBcIkRldmVsb3BtZW50XCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiTW9kdWxlICM0XCIsXG4gICAgICAgICAgICAgICAgXCJzdGFydFwiOiBcIjIwMTYtMDMtMjNcIixcbiAgICAgICAgICAgICAgICBcImVuZFwiOiBcIjIwMTYtMDQtMjlcIixcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9yU2V0LmdldEluZGV4KDE1KSxcbiAgICAgICAgICAgICAgICBcInRhc2tcIjogXCJUZXN0aW5nIGFuZCBRQVwiXG4gICAgICAgICAgICB9XTtcblxuICAgICAgICAgICAgY2hhcnQuZGF0ZUZvcm1hdHRlci5kYXRlRm9ybWF0ID0gXCJ5eXl5LU1NLWRkXCI7XG4gICAgICAgICAgICBjaGFydC5kYXRlRm9ybWF0dGVyLmlucHV0RGF0ZUZvcm1hdCA9IFwieXl5eS1NTS1kZFwiO1xuXG4gICAgICAgICAgICB2YXIgY2F0ZWdvcnlBeGlzID0gY2hhcnQueUF4ZXMucHVzaChuZXcgYW00Y2hhcnRzLkNhdGVnb3J5QXhpcygpKTtcbiAgICAgICAgICAgIGNhdGVnb3J5QXhpcy5kYXRhRmllbGRzLmNhdGVnb3J5ID0gXCJjYXRlZ29yeVwiO1xuICAgICAgICAgICAgY2F0ZWdvcnlBeGlzLnJlbmRlcmVyLmdyaWQudGVtcGxhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgY2F0ZWdvcnlBeGlzLnJlbmRlcmVyLmxhYmVscy50ZW1wbGF0ZS5wYWRkaW5nUmlnaHQgPSAyNTtcbiAgICAgICAgICAgIGNhdGVnb3J5QXhpcy5yZW5kZXJlci5taW5HcmlkRGlzdGFuY2UgPSAxMDtcbiAgICAgICAgICAgIGNhdGVnb3J5QXhpcy5yZW5kZXJlci5pbm5lclJhZGl1cyA9IC02MDtcbiAgICAgICAgICAgIGNhdGVnb3J5QXhpcy5yZW5kZXJlci5yYWRpdXMgPSA2MDtcblxuICAgICAgICAgICAgdmFyIGRhdGVBeGlzID0gY2hhcnQueEF4ZXMucHVzaChuZXcgYW00Y2hhcnRzLkRhdGVBeGlzKCkpO1xuICAgICAgICAgICAgZGF0ZUF4aXMucmVuZGVyZXIubWluR3JpZERpc3RhbmNlID0gNzA7XG4gICAgICAgICAgICBkYXRlQXhpcy5iYXNlSW50ZXJ2YWwgPSB7IGNvdW50OiAxLCB0aW1lVW5pdDogXCJkYXlcIiB9O1xuXG4gICAgICAgICAgICBkYXRlQXhpcy5yZW5kZXJlci50b29sdGlwTG9jYXRpb24gPSAwO1xuICAgICAgICAgICAgZGF0ZUF4aXMuc3RhcnRMb2NhdGlvbiA9IC0wLjU7XG4gICAgICAgICAgICBkYXRlQXhpcy5yZW5kZXJlci5saW5lLnN0cm9rZURhc2hhcnJheSA9IFwiMSw0XCI7XG4gICAgICAgICAgICBkYXRlQXhpcy5yZW5kZXJlci5saW5lLnN0cm9rZU9wYWNpdHkgPSAwLjc7XG4gICAgICAgICAgICBkYXRlQXhpcy50b29sdGlwLmJhY2tncm91bmQuZmlsbE9wYWNpdHkgPSAwLjI7XG4gICAgICAgICAgICBkYXRlQXhpcy50b29sdGlwLmJhY2tncm91bmQuY29ybmVyUmFkaXVzID0gNTtcbiAgICAgICAgICAgIGRhdGVBeGlzLnRvb2x0aXAubGFiZWwuZmlsbCA9IG5ldyBhbTRjb3JlLkludGVyZmFjZUNvbG9yU2V0KCkuZ2V0Rm9yKFwiYWx0ZXJuYXRpdmVCYWNrZ3JvdW5kXCIpO1xuICAgICAgICAgICAgZGF0ZUF4aXMudG9vbHRpcC5sYWJlbC5wYWRkaW5nVG9wID0gNztcblxuICAgICAgICAgICAgdmFyIGxhYmVsVGVtcGxhdGUgPSBkYXRlQXhpcy5yZW5kZXJlci5sYWJlbHMudGVtcGxhdGU7XG4gICAgICAgICAgICBsYWJlbFRlbXBsYXRlLnZlcnRpY2FsQ2VudGVyID0gXCJtaWRkbGVcIjtcbiAgICAgICAgICAgIGxhYmVsVGVtcGxhdGUuZmlsbE9wYWNpdHkgPSAwLjc7XG4gICAgICAgICAgICBsYWJlbFRlbXBsYXRlLmJhY2tncm91bmQuZmlsbCA9IG5ldyBhbTRjb3JlLkludGVyZmFjZUNvbG9yU2V0KCkuZ2V0Rm9yKFwiYmFja2dyb3VuZFwiKTtcbiAgICAgICAgICAgIGxhYmVsVGVtcGxhdGUuYmFja2dyb3VuZC5maWxsT3BhY2l0eSA9IDE7XG4gICAgICAgICAgICBsYWJlbFRlbXBsYXRlLnBhZGRpbmcoNywgNywgNywgNyk7XG5cbiAgICAgICAgICAgIHZhciBjYXRlZ29yeUF4aXNMYWJlbFRlbXBsYXRlID0gY2F0ZWdvcnlBeGlzLnJlbmRlcmVyLmxhYmVscy50ZW1wbGF0ZTtcbiAgICAgICAgICAgIGNhdGVnb3J5QXhpc0xhYmVsVGVtcGxhdGUuaG9yaXpvbnRhbENlbnRlciA9IFwibGVmdFwiO1xuICAgICAgICAgICAgY2F0ZWdvcnlBeGlzTGFiZWxUZW1wbGF0ZS5hZGFwdGVyLmFkZChcInJvdGF0aW9uXCIsIGZ1bmN0aW9uIChyb3RhdGlvbiwgdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gZGF0ZUF4aXMudmFsdWVUb1Bvc2l0aW9uKGRhdGVBeGlzLm1pbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVBeGlzLnJlbmRlcmVyLnBvc2l0aW9uVG9BbmdsZShwb3NpdGlvbikgKyA5MDtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHZhciBzZXJpZXMxID0gY2hhcnQuc2VyaWVzLnB1c2gobmV3IGFtNHBsdWdpbnNfdGltZWxpbmUuQ3VydmVDb2x1bW5TZXJpZXMoKSk7XG4gICAgICAgICAgICBzZXJpZXMxLmNvbHVtbnMudGVtcGxhdGUuaGVpZ2h0ID0gYW00Y29yZS5wZXJjZW50KDIwKTtcbiAgICAgICAgICAgIHNlcmllczEuY29sdW1ucy50ZW1wbGF0ZS50b29sdGlwVGV4dCA9IFwie3Rhc2t9OiBbYm9sZF17b3BlbkRhdGVYfVsvXSAtIFtib2xkXXtkYXRlWH1bL11cIjtcblxuICAgICAgICAgICAgc2VyaWVzMS5kYXRhRmllbGRzLm9wZW5EYXRlWCA9IFwic3RhcnRcIjtcbiAgICAgICAgICAgIHNlcmllczEuZGF0YUZpZWxkcy5kYXRlWCA9IFwiZW5kXCI7XG4gICAgICAgICAgICBzZXJpZXMxLmRhdGFGaWVsZHMuY2F0ZWdvcnlZID0gXCJjYXRlZ29yeVwiO1xuICAgICAgICAgICAgc2VyaWVzMS5jb2x1bW5zLnRlbXBsYXRlLnByb3BlcnR5RmllbGRzLmZpbGwgPSBcImNvbG9yXCI7IC8vIGdldCBjb2xvciBmcm9tIGRhdGFcbiAgICAgICAgICAgIHNlcmllczEuY29sdW1ucy50ZW1wbGF0ZS5wcm9wZXJ0eUZpZWxkcy5zdHJva2UgPSBcImNvbG9yXCI7XG4gICAgICAgICAgICBzZXJpZXMxLmNvbHVtbnMudGVtcGxhdGUuc3Ryb2tlT3BhY2l0eSA9IDA7XG5cbiAgICAgICAgICAgIHZhciBidWxsZXQgPSBuZXcgYW00Y2hhcnRzLkNpcmNsZUJ1bGxldCgpO1xuICAgICAgICAgICAgc2VyaWVzMS5idWxsZXRzLnB1c2goYnVsbGV0KTtcbiAgICAgICAgICAgIGJ1bGxldC5jaXJjbGUucmFkaXVzID0gMztcbiAgICAgICAgICAgIGJ1bGxldC5jaXJjbGUuc3Ryb2tlT3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBidWxsZXQucHJvcGVydHlGaWVsZHMuZmlsbCA9IFwiY29sb3JcIjtcbiAgICAgICAgICAgIGJ1bGxldC5sb2NhdGlvblggPSAwO1xuXG5cbiAgICAgICAgICAgIHZhciBidWxsZXQyID0gbmV3IGFtNGNoYXJ0cy5DaXJjbGVCdWxsZXQoKTtcbiAgICAgICAgICAgIHNlcmllczEuYnVsbGV0cy5wdXNoKGJ1bGxldDIpO1xuICAgICAgICAgICAgYnVsbGV0Mi5jaXJjbGUucmFkaXVzID0gMztcbiAgICAgICAgICAgIGJ1bGxldDIuY2lyY2xlLnN0cm9rZU9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgYnVsbGV0Mi5wcm9wZXJ0eUZpZWxkcy5maWxsID0gXCJjb2xvclwiO1xuICAgICAgICAgICAgYnVsbGV0Mi5sb2NhdGlvblggPSAxO1xuXG4gICAgICAgICAgICBjaGFydC5zY3JvbGxiYXJYID0gbmV3IGFtNGNvcmUuU2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICBjaGFydC5zY3JvbGxiYXJYLmFsaWduID0gXCJjZW50ZXJcIlxuICAgICAgICAgICAgY2hhcnQuc2Nyb2xsYmFyWC53aWR0aCA9IGFtNGNvcmUucGVyY2VudCg5MCk7XG5cbiAgICAgICAgICAgIHZhciBjdXJzb3IgPSBuZXcgYW00cGx1Z2luc190aW1lbGluZS5DdXJ2ZUN1cnNvcigpO1xuICAgICAgICAgICAgY2hhcnQuY3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgICAgY3Vyc29yLnhBeGlzID0gZGF0ZUF4aXM7XG4gICAgICAgICAgICBjdXJzb3IueUF4aXMgPSBjYXRlZ29yeUF4aXM7XG4gICAgICAgICAgICBjdXJzb3IubGluZVkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgY3Vyc29yLmxpbmVYLnN0cm9rZURhc2hhcnJheSA9IFwiMSw0XCI7XG4gICAgICAgICAgICBjdXJzb3IubGluZVguc3Ryb2tlT3BhY2l0eSA9IDE7XG5cbiAgICAgICAgICAgIGRhdGVBeGlzLnJlbmRlcmVyLnRvb2x0aXBMb2NhdGlvbjIgPSAwO1xuICAgICAgICAgICAgY2F0ZWdvcnlBeGlzLmN1cnNvclRvb2x0aXBFbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgfSk7IC8vIGVuZCBhbTRjb3JlLnJlYWR5KClcbiAgICB9XG5cbiAgICB2YXIgX2RlbW81ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJbml0IEFtQ2hhcnQgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0IHRoZSBvZmZpY2lhbCBkb2N1bWVudGlhdGlvbjogaHR0cHM6Ly93d3cuYW1jaGFydHMuY29tL2RvY3MvdjQvXG4gICAgICAgIGFtNGNvcmUucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBUaGVtZXMgYmVnaW5cbiAgICAgICAgICAgIGFtNGNvcmUudXNlVGhlbWUoYW00dGhlbWVzX2FuaW1hdGVkKTtcbiAgICAgICAgICAgIC8vIFRoZW1lcyBlbmRcblxuICAgICAgICAgICAgY2hhcnQgPSBhbTRjb3JlLmNyZWF0ZShcImt0X2FtY2hhcnRzXzVcIiwgYW00Y2hhcnRzLlJhZGFyQ2hhcnQpO1xuICAgICAgICAgICAgY2hhcnQuaW5uZXJSYWRpdXMgPSBhbTRjb3JlLnBlcmNlbnQoMzApO1xuICAgICAgICAgICAgY2hhcnQuZm9udFNpemUgPSAxMTtcblxuICAgICAgICAgICAgdmFyIHhBeGlzID0gY2hhcnQueEF4ZXMucHVzaChuZXcgYW00Y2hhcnRzLkNhdGVnb3J5QXhpcygpKTtcbiAgICAgICAgICAgIHZhciB5QXhpcyA9IGNoYXJ0LnlBeGVzLnB1c2gobmV3IGFtNGNoYXJ0cy5DYXRlZ29yeUF4aXMoKSk7XG4gICAgICAgICAgICB5QXhpcy5yZW5kZXJlci5taW5HcmlkRGlzdGFuY2UgPSA1O1xuXG4gICAgICAgICAgICB4QXhpcy5yZW5kZXJlci5sYWJlbHMudGVtcGxhdGUubG9jYXRpb24gPSAwLjU7XG4gICAgICAgICAgICB4QXhpcy5yZW5kZXJlci5sYWJlbHMudGVtcGxhdGUuYmVudCA9IHRydWU7XG4gICAgICAgICAgICB4QXhpcy5yZW5kZXJlci5sYWJlbHMudGVtcGxhdGUucmFkaXVzID0gNTtcblxuICAgICAgICAgICAgeEF4aXMuZGF0YUZpZWxkcy5jYXRlZ29yeSA9IFwiaG91clwiO1xuICAgICAgICAgICAgeUF4aXMuZGF0YUZpZWxkcy5jYXRlZ29yeSA9IFwid2Vla2RheVwiO1xuXG4gICAgICAgICAgICB4QXhpcy5yZW5kZXJlci5ncmlkLnRlbXBsYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHhBeGlzLnJlbmRlcmVyLm1pbkdyaWREaXN0YW5jZSA9IDEwO1xuXG4gICAgICAgICAgICB5QXhpcy5yZW5kZXJlci5ncmlkLnRlbXBsYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHlBeGlzLnJlbmRlcmVyLmludmVyc2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gdGhpcyBtYWtlcyB0aGUgeSBheGlzIGxhYmVscyB0byBiZSBiZW50LiBCeSBkZWZhdWx0IHkgQXhpcyBsYWJlbHMgYXJlIHJlZ3VsYXIgQXhpc0xhYmVscywgc28gd2UgcmVwbGFjZSB0aGVtIHdpdGggQXhpc0xhYmVsQ2lyY3VsYXJcbiAgICAgICAgICAgIC8vIGFuZCBjYWxsIGZpeFBvc2l0aW9uIGZvciB0aGVtIHRvIGJlIGJlbnRcbiAgICAgICAgICAgIHZhciB5QXhpc0xhYmVsID0gbmV3IGFtNGNoYXJ0cy5BeGlzTGFiZWxDaXJjdWxhcigpO1xuICAgICAgICAgICAgeUF4aXNMYWJlbC5iZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHlBeGlzTGFiZWwuZXZlbnRzLm9uKFwidmFsaWRhdGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5maXhQb3NpdGlvbigtOTAsIGFtNGNvcmUubWF0aC5nZXREaXN0YW5jZSh7IHg6IGV2ZW50LnRhcmdldC5waXhlbFgsIHk6IGV2ZW50LnRhcmdldC5waXhlbFkgfSkgLSA1KTtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZHggPSAtZXZlbnQudGFyZ2V0LnBpeGVsWDtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZHkgPSAtZXZlbnQudGFyZ2V0LnBpeGVsWTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB5QXhpcy5yZW5kZXJlci5sYWJlbHMudGVtcGxhdGUgPSB5QXhpc0xhYmVsO1xuXG4gICAgICAgICAgICB2YXIgc2VyaWVzID0gY2hhcnQuc2VyaWVzLnB1c2gobmV3IGFtNGNoYXJ0cy5SYWRhckNvbHVtblNlcmllcygpKTtcbiAgICAgICAgICAgIHNlcmllcy5kYXRhRmllbGRzLmNhdGVnb3J5WCA9IFwiaG91clwiO1xuICAgICAgICAgICAgc2VyaWVzLmRhdGFGaWVsZHMuY2F0ZWdvcnlZID0gXCJ3ZWVrZGF5XCI7XG4gICAgICAgICAgICBzZXJpZXMuZGF0YUZpZWxkcy52YWx1ZSA9IFwidmFsdWVcIjtcbiAgICAgICAgICAgIHNlcmllcy5zZXF1ZW5jZWRJbnRlcnBvbGF0aW9uID0gdHJ1ZTtcblxuICAgICAgICAgICAgdmFyIGNvbHVtblRlbXBsYXRlID0gc2VyaWVzLmNvbHVtbnMudGVtcGxhdGU7XG4gICAgICAgICAgICBjb2x1bW5UZW1wbGF0ZS5zdHJva2VXaWR0aCA9IDI7XG4gICAgICAgICAgICBjb2x1bW5UZW1wbGF0ZS5zdHJva2VPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIGNvbHVtblRlbXBsYXRlLnN0cm9rZSA9IGFtNGNvcmUuY29sb3IoXCIjZmZmZmZmXCIpO1xuICAgICAgICAgICAgY29sdW1uVGVtcGxhdGUudG9vbHRpcFRleHQgPSBcInt3ZWVrZGF5fSwge2hvdXJ9OiB7dmFsdWUud29ya2luZ1ZhbHVlLmZvcm1hdE51bWJlcignIy4nKX1cIjtcbiAgICAgICAgICAgIGNvbHVtblRlbXBsYXRlLndpZHRoID0gYW00Y29yZS5wZXJjZW50KDEwMCk7XG4gICAgICAgICAgICBjb2x1bW5UZW1wbGF0ZS5oZWlnaHQgPSBhbTRjb3JlLnBlcmNlbnQoMTAwKTtcblxuICAgICAgICAgICAgY2hhcnQuc2VyaWVzQ29udGFpbmVyLnpJbmRleCA9IC01O1xuXG4gICAgICAgICAgICBjb2x1bW5UZW1wbGF0ZS5oaWRkZW5TdGF0ZS5wcm9wZXJ0aWVzLm9wYWNpdHkgPSAwO1xuXG4gICAgICAgICAgICAvLyBoZWF0IHJ1bGUsIHRoaXMgbWFrZXMgY29sdW1ucyB0byBjaGFuZ2UgY29sb3IgZGVwZW5kaW5nIG9uIHZhbHVlXG4gICAgICAgICAgICBzZXJpZXMuaGVhdFJ1bGVzLnB1c2goeyB0YXJnZXQ6IGNvbHVtblRlbXBsYXRlLCBwcm9wZXJ0eTogXCJmaWxsXCIsIG1pbjogYW00Y29yZS5jb2xvcihcIiNmZmZiNzdcIiksIG1heDogYW00Y29yZS5jb2xvcihcIiNmZTEzMWFcIikgfSk7XG5cbiAgICAgICAgICAgIC8vIGhlYXQgbGVnZW5kXG5cbiAgICAgICAgICAgIHZhciBoZWF0TGVnZW5kID0gY2hhcnQuYm90dG9tQXhlc0NvbnRhaW5lci5jcmVhdGVDaGlsZChhbTRjaGFydHMuSGVhdExlZ2VuZCk7XG4gICAgICAgICAgICBoZWF0TGVnZW5kLndpZHRoID0gYW00Y29yZS5wZXJjZW50KDEwMCk7XG4gICAgICAgICAgICBoZWF0TGVnZW5kLnNlcmllcyA9IHNlcmllcztcbiAgICAgICAgICAgIGhlYXRMZWdlbmQudmFsdWVBeGlzLnJlbmRlcmVyLmxhYmVscy50ZW1wbGF0ZS5mb250U2l6ZSA9IDk7XG4gICAgICAgICAgICBoZWF0TGVnZW5kLnZhbHVlQXhpcy5yZW5kZXJlci5taW5HcmlkRGlzdGFuY2UgPSAzMDtcblxuICAgICAgICAgICAgLy8gaGVhdCBsZWdlbmQgYmVoYXZpb3JcbiAgICAgICAgICAgIHNlcmllcy5jb2x1bW5zLnRlbXBsYXRlLmV2ZW50cy5vbihcIm92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlSG92ZXIoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlcmllcy5jb2x1bW5zLnRlbXBsYXRlLmV2ZW50cy5vbihcImhpdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVIb3ZlcihldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlSG92ZXIoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihjb2x1bW4uZGF0YUl0ZW0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYXRMZWdlbmQudmFsdWVBeGlzLnNob3dUb29sdGlwQXQoY29sdW1uLmRhdGFJdGVtLnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhdExlZ2VuZC52YWx1ZUF4aXMuaGlkZVRvb2x0aXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlcmllcy5jb2x1bW5zLnRlbXBsYXRlLmV2ZW50cy5vbihcIm91dFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBoZWF0TGVnZW5kLnZhbHVlQXhpcy5oaWRlVG9vbHRpcCgpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY2hhcnQuZGF0YSA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjEycG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjk5MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjUyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjMzNFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIzYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjIzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI0YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjMyNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI1YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjAxOVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI2YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjEyOFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI3YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjI0NlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI4YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjQyMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI5YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjc4OFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxMGFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlN1bmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI5NTlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTFhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTdW5kYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMDE4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjEyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzE1NFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxcG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzE3MlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIycG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzM2OFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIzcG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzQ2NFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI0cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzc0NlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI1cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzY1NlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI2cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzMzNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI3cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzI5MlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI4cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzI2OVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI5cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzMwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxMHBtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlN1bmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM0MDNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTFwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTdW5kYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMzIzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjEycG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzM0NlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjcyNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzA1MlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIzYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzg3NlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI0YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNDQ1M1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI1YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzk3MlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI2YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNDY0NFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI3YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNTcxNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI4YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNzA4MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI5YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODAyMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxMGFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIk1vbmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDg0NDZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTFhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJNb25kYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA5MzEzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjEyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogOTAxMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxcG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODUwOFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIycG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODUxNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIzcG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODM5OVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI0cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODY0OVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI1cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNzg2OVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI2cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNjkzM1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI3cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNTk2OVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI4cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNTU1MlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI5cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNTQzNFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxMHBtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIk1vbmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDUwNzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTFwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJNb25kYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0ODUxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjEycG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVHVlc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDQ0NjhcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMzA2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjJhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzkwNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIzYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVHVlc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDQ0MTNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiNGFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0NzI2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNDU4NFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI2YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVHVlc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDU3MTdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiN2FtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA2NTA0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjhhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODEwNFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI5YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVHVlc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDg4MTNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTBhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogOTI3OFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxMWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMDQyNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxMmFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxMDEzN1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxcG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVHVlc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDkyOTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMnBtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA5MjU1XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjNwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogOTYxNFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI0cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVHVlc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDk3MTNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiNXBtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA5NjY3XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjZwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODc3NFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI3cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVHVlc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDg2NDlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiOHBtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA5OTM3XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjlwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTAyODZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTBwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogOTE3NVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxMXBtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4NTgxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjEycG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODE0NVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNzE3N1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNTY1N1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIzYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNjgwMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI0YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODE1OVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI1YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODQ0OVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI2YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogOTQ1M1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI3YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogOTk0N1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI4YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMTE0NzFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiOWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIldlZG5lc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDEyNDkyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjEwYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogOTM4OFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxMWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIldlZG5lc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDk5MjhcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTJhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA5NjQ0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjFwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA5MDM0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjJwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4OTY0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjNwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA5MDY5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjRwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4ODk4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjVwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4MzIyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjZwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA2OTA5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjdwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA1ODEwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjhwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA1MTUxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjlwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0OTExXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjEwcG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNDQ4N1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxMXBtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIldlZG5lc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDQxMThcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTJwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM2ODlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlRodXJzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzA4MVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVGh1cnNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA2NTI1XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjNhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDYyMjhcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiNGFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlRodXJzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNjkxN1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI1YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVGh1cnNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA2NTY4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjZhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDY0MDVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiN2FtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlRodXJzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODEwNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI4YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVGh1cnNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4NTQyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjlhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDg1MDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTBhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDg4MDJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTFhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDk0MjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTJhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDg5NjZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMXBtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlRodXJzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODEzNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIycG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVGh1cnNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4MjI0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjNwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDgzODdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiNHBtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlRodXJzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODIxOFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI1cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVGh1cnNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA3NjQxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjZwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDY0NjlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiN3BtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlRodXJzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNTQ0MVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI4cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiVGh1cnNkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0OTUyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjlwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDQ2NDNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTBwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDQzOTNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTFwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDQwMTdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTJwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0MDIyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjFhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMDYzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjJhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNjM4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjNhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzOTY4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjRhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0MDcwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjVhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0MDE5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjZhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0NTQ4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjdhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA1NDY1XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjhhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA2OTA5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjlhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA3NzA2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjEwYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiRnJpZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogNzg2N1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxMWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIkZyaWRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDg2MTVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTJhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4MjE4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjFwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA3NjA0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjJwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA3NDI5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjNwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA3NDg4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjRwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA3NDkzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjVwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA2OTk4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjZwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA1OTQxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjdwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA1MDY4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjhwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0NjM2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjlwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJGcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0MjQxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjEwcG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiRnJpZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzg1OFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIxMXBtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIkZyaWRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM4MzNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTJwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM1MDNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMWFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlNhdHVyZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjg0MlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU2F0dXJkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyODA4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjNhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDIzOTlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiNGFtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlNhdHVyZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjI4MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI1YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU2F0dXJkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAyMTM5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjZhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI1MjdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiN2FtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlNhdHVyZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMjk0MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI4YW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU2F0dXJkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMDY2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjlhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM0OTRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTBhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMyODdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTFhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM0MTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTJhbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM0MzJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMXBtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlNhdHVyZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzUyM1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCIycG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU2F0dXJkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNTQyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjNwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMzNDdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiNHBtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlNhdHVyZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzI5MlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI1cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU2F0dXJkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzNDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjZwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMxMzFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiN3BtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2Vla2RheVwiOiBcIlNhdHVyZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMzA1N1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImhvdXJcIjogXCI4cG1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCI6IFwiU2F0dXJkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzMjI3XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaG91clwiOiBcIjlwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDMwNjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTBwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI4NTVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJob3VyXCI6IFwiMTFwbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndlZWtkYXlcIjogXCJTYXR1cmRheVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDI2MjVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgfSk7IC8vIGVuZCBhbTRjb3JlLnJlYWR5KClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9kZW1vMSgpO1xuICAgICAgICAgICAgX2RlbW8yKCk7XG4gICAgICAgICAgICBfZGVtbzMoKTtcbiAgICAgICAgICAgIF9kZW1vNCgpO1xuICAgICAgICAgICAgX2RlbW81KCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RHZW5lcmFsQW1DaGFydHMuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RHZW5lcmFsQW1DaGFydHMiLCJjaGFydCIsIl9kZW1vMSIsImFtNGNvcmUiLCJyZWFkeSIsInVzZVRoZW1lIiwiYW00dGhlbWVzX2FuaW1hdGVkIiwiY3JlYXRlIiwiYW00Y2hhcnRzIiwiWFlDaGFydCIsImNvbG9ycyIsInN0ZXAiLCJsZWdlbmQiLCJMZWdlbmQiLCJwb3NpdGlvbiIsInBhZGRpbmdCb3R0b20iLCJsYWJlbHMiLCJ0ZW1wbGF0ZSIsIm1heFdpZHRoIiwieEF4aXMiLCJ4QXhlcyIsInB1c2giLCJDYXRlZ29yeUF4aXMiLCJkYXRhRmllbGRzIiwiY2F0ZWdvcnkiLCJyZW5kZXJlciIsImNlbGxTdGFydExvY2F0aW9uIiwiY2VsbEVuZExvY2F0aW9uIiwiZ3JpZCIsImxvY2F0aW9uIiwieUF4aXMiLCJ5QXhlcyIsIlZhbHVlQXhpcyIsIm1pbiIsImNyZWF0ZVNlcmllcyIsInZhbHVlIiwibmFtZSIsInNlcmllcyIsIkNvbHVtblNlcmllcyIsInZhbHVlWSIsImNhdGVnb3J5WCIsImV2ZW50cyIsIm9uIiwiYXJyYW5nZUNvbHVtbnMiLCJidWxsZXQiLCJidWxsZXRzIiwiTGFiZWxCdWxsZXQiLCJpbnRlcmFjdGlvbnNFbmFibGVkIiwiZHkiLCJsYWJlbCIsInRleHQiLCJmaWxsIiwiY29sb3IiLCJkYXRhIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImdldEluZGV4IiwidyIsImRhdGFJdGVtcyIsImxlbmd0aCIsIngwIiwiZ2V0WCIsIngxIiwiZGVsdGEiLCJpc051bWJlciIsIm1pZGRsZSIsIm5ld0luZGV4IiwiZWFjaCIsImlzSGlkZGVuIiwiaXNIaWRpbmciLCJkdW1teURhdGEiLCJpbmRleE9mIiwidmlzaWJsZUNvdW50IiwibmV3TWlkZGxlIiwidHJ1ZUluZGV4IiwiZHgiLCJhbmltYXRlIiwicHJvcGVydHkiLCJ0byIsImludGVycG9sYXRpb25EdXJhdGlvbiIsImludGVycG9sYXRpb25FYXNpbmciLCJidWxsZXRzQ29udGFpbmVyIiwiX2RlbW8yIiwicHJpY2UxIiwicHJpY2UyIiwicXVhbnRpdHkiLCJpIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiZGF0ZTEiLCJEYXRlIiwiZGF0ZTIiLCJkYXRlQXhpcyIsIkRhdGVBeGlzIiwiZGF0ZUF4aXMyIiwidmFsdWVBeGlzIiwidG9vbHRpcCIsImRpc2FibGVkIiwibWluV2lkdGgiLCJ2YWx1ZUF4aXMyIiwic3luY1dpdGhBeGlzIiwiTGluZVNlcmllcyIsImRhdGVYIiwidG9vbHRpcFRleHQiLCJzdHJva2UiLCJzZXJpZXMyIiwiY3Vyc29yIiwiWFlDdXJzb3IiLCJzY3JvbGxiYXJYIiwiWFlDaGFydFNjcm9sbGJhciIsInBhcmVudCIsInBsb3RDb250YWluZXIiLCJ6SW5kZXgiLCJzdHJva2VPcGFjaXR5IiwiX2RlbW8zIiwiYW00dGhlbWVzX2RhdGF2aXoiLCJQaWVDaGFydCIsImhpZGRlblN0YXRlIiwicHJvcGVydGllcyIsIm9wYWNpdHkiLCJjb3VudHJ5IiwiUGllU2VyaWVzIiwicmFkaXVzVmFsdWUiLCJzbGljZXMiLCJjb3JuZXJSYWRpdXMiLCJlbmRBbmdsZSIsIl9kZW1vNCIsImFtNHRoZW1lc19mcm96ZW4iLCJhbTRwbHVnaW5zX3RpbWVsaW5lIiwiU2VycGVudGluZUNoYXJ0IiwiY3VydmVDb250YWluZXIiLCJwYWRkaW5nIiwibGV2ZWxDb3VudCIsIm9yaWVudGF0aW9uIiwiZm9udFNpemUiLCJjb2xvclNldCIsIkNvbG9yU2V0Iiwic2F0dXJhdGlvbiIsImRhdGVGb3JtYXR0ZXIiLCJkYXRlRm9ybWF0IiwiaW5wdXREYXRlRm9ybWF0IiwiY2F0ZWdvcnlBeGlzIiwicGFkZGluZ1JpZ2h0IiwibWluR3JpZERpc3RhbmNlIiwiaW5uZXJSYWRpdXMiLCJyYWRpdXMiLCJiYXNlSW50ZXJ2YWwiLCJjb3VudCIsInRpbWVVbml0IiwidG9vbHRpcExvY2F0aW9uIiwic3RhcnRMb2NhdGlvbiIsImxpbmUiLCJzdHJva2VEYXNoYXJyYXkiLCJiYWNrZ3JvdW5kIiwiZmlsbE9wYWNpdHkiLCJJbnRlcmZhY2VDb2xvclNldCIsImdldEZvciIsInBhZGRpbmdUb3AiLCJsYWJlbFRlbXBsYXRlIiwidmVydGljYWxDZW50ZXIiLCJjYXRlZ29yeUF4aXNMYWJlbFRlbXBsYXRlIiwiaG9yaXpvbnRhbENlbnRlciIsImFkYXB0ZXIiLCJhZGQiLCJyb3RhdGlvbiIsInRhcmdldCIsInZhbHVlVG9Qb3NpdGlvbiIsInBvc2l0aW9uVG9BbmdsZSIsInNlcmllczEiLCJDdXJ2ZUNvbHVtblNlcmllcyIsImNvbHVtbnMiLCJoZWlnaHQiLCJwZXJjZW50Iiwib3BlbkRhdGVYIiwiY2F0ZWdvcnlZIiwicHJvcGVydHlGaWVsZHMiLCJDaXJjbGVCdWxsZXQiLCJjaXJjbGUiLCJsb2NhdGlvblgiLCJidWxsZXQyIiwiU2Nyb2xsYmFyIiwiYWxpZ24iLCJ3aWR0aCIsIkN1cnZlQ3Vyc29yIiwibGluZVkiLCJsaW5lWCIsInRvb2x0aXBMb2NhdGlvbjIiLCJjdXJzb3JUb29sdGlwRW5hYmxlZCIsIl9kZW1vNSIsIlJhZGFyQ2hhcnQiLCJiZW50IiwiaW52ZXJzZWQiLCJ5QXhpc0xhYmVsIiwiQXhpc0xhYmVsQ2lyY3VsYXIiLCJldmVudCIsImZpeFBvc2l0aW9uIiwibWF0aCIsImdldERpc3RhbmNlIiwieCIsInBpeGVsWCIsInkiLCJwaXhlbFkiLCJSYWRhckNvbHVtblNlcmllcyIsInNlcXVlbmNlZEludGVycG9sYXRpb24iLCJjb2x1bW5UZW1wbGF0ZSIsInN0cm9rZVdpZHRoIiwic2VyaWVzQ29udGFpbmVyIiwiaGVhdFJ1bGVzIiwibWF4IiwiaGVhdExlZ2VuZCIsImJvdHRvbUF4ZXNDb250YWluZXIiLCJjcmVhdGVDaGlsZCIsIkhlYXRMZWdlbmQiLCJoYW5kbGVIb3ZlciIsImNvbHVtbiIsImlzTmFOIiwiZGF0YUl0ZW0iLCJzaG93VG9vbHRpcEF0IiwiaGlkZVRvb2x0aXAiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/amcharts/charts.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/amcharts/charts.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=charts.js.map