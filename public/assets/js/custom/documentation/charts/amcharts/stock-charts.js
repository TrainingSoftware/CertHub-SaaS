/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!********************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/documentation/charts/amcharts/stock-charts.js ***!
  \********************************************************************************************************/


// Class definition
var KTGeneralAmChartsMaps = function () {
    // Shared variables
    var chart;

    // Private functions
    var _demo1 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart
            chart = am4core.create("kt_amcharts_1", am4charts.XYChart);
            chart.padding(0, 15, 0, 15);

            // Load external data
            chart.dataSource.url = "https://www.amcharts.com/wp-content/uploads/assets/stock/MSFT.csv";
            chart.dataSource.parser = new am4core.CSVParser();
            chart.dataSource.parser.options.useColumnNames = true;
            chart.dataSource.parser.options.reverse = true;

            // the following line makes value axes to be arranged vertically.
            chart.leftAxesContainer.layout = "vertical";

            // uncomment this line if you want to change order of axes
            //chart.bottomAxesContainer.reverseOrder = true;

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.location = 0;
            dateAxis.renderer.ticks.template.length = 8;
            dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.ticks.template.disabled = false;
            dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
            dateAxis.renderer.minLabelPosition = 0.01;
            dateAxis.renderer.maxLabelPosition = 0.99;
            dateAxis.keepSelection = true;
            dateAxis.minHeight = 30;

            dateAxis.groupData = true;
            dateAxis.minZoomCount = 5;

            // these two lines makes the axis to be initially zoomed-in
            // dateAxis.start = 0.7;
            // dateAxis.keepSelection = true;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.zIndex = 1;
            valueAxis.renderer.baseGrid.disabled = true;
            // height of axis
            valueAxis.height = am4core.percent(65);

            valueAxis.renderer.gridContainer.background.fill = am4core.color("#000000");
            valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
            valueAxis.renderer.inside = true;
            valueAxis.renderer.labels.template.verticalCenter = "bottom";
            valueAxis.renderer.labels.template.padding(2, 2, 2, 2);

            //valueAxis.renderer.maxLabelPosition = 0.95;
            valueAxis.renderer.fontSize = "0.8em"

            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = "Date";
            series.dataFields.valueY = "Adj Close";
            series.tooltipText = "{valueY.value}";
            series.name = "MSFT: Value";
            series.defaultState.transitionDuration = 0;

            var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis2.tooltip.disabled = true;
            // height of axis
            valueAxis2.height = am4core.percent(35);
            valueAxis2.zIndex = 3
            // this makes gap between panels
            valueAxis2.marginTop = 30;
            valueAxis2.renderer.baseGrid.disabled = true;
            valueAxis2.renderer.inside = true;
            valueAxis2.renderer.labels.template.verticalCenter = "bottom";
            valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
            //valueAxis.renderer.maxLabelPosition = 0.95;
            valueAxis2.renderer.fontSize = "0.8em"

            valueAxis2.renderer.gridContainer.background.fill = am4core.color("#000000");
            valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;

            var series2 = chart.series.push(new am4charts.ColumnSeries());
            series2.dataFields.dateX = "Date";
            series2.dataFields.valueY = "Volume";
            series2.yAxis = valueAxis2;
            series2.tooltipText = "{valueY.value}";
            series2.name = "MSFT: Volume";
            // volume should be summed
            series2.groupFields.valueY = "sum";
            series2.defaultState.transitionDuration = 0;

            chart.cursor = new am4charts.XYCursor();

            var scrollbarX = new am4charts.XYChartScrollbar();
            scrollbarX.series.push(series);
            scrollbarX.marginBottom = 20;
            scrollbarX.scrollbarChart.xAxes.getIndex(0).minHeight = undefined;
            chart.scrollbarX = scrollbarX;

        }); // end am4core.ready()
    }


    var _demo2 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            chart = am4core.create("kt_amcharts_2", am4charts.XYChart);
            chart.padding(0, 15, 0, 15);
            chart.colors.step = 3;

            var data = [];
            var price1 = 1000;
            var price2 = 2000;
            var price3 = 3000;
            var quantity = 1000;
            for (var i = 15; i < 3000; i++) {
                price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
                price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
                price3 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);

                if (price1 < 100) {
                    price1 = 100;
                }

                if (price2 < 100) {
                    price2 = 100;
                }

                if (price3 < 100) {
                    price3 = 100;
                }

                quantity += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 500);

                if (quantity < 0) {
                    quantity *= -1;
                }
                data.push({ date: new Date(2000, 0, i), price1: price1, price2: price2, price3: price3, quantity: quantity });
            }


            chart.data = data;
            // the following line makes value axes to be arranged vertically.
            chart.leftAxesContainer.layout = "vertical";

            // uncomment this line if you want to change order of axes
            //chart.bottomAxesContainer.reverseOrder = true;

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.location = 0;
            dateAxis.renderer.ticks.template.length = 8;
            dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.ticks.template.disabled = false;
            dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
            dateAxis.renderer.minLabelPosition = 0.01;
            dateAxis.renderer.maxLabelPosition = 0.99;
            dateAxis.keepSelection = true;

            dateAxis.groupData = true;
            dateAxis.minZoomCount = 5;

            // these two lines makes the axis to be initially zoomed-in
            // dateAxis.start = 0.7;
            // dateAxis.keepSelection = true;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.zIndex = 1;
            valueAxis.renderer.baseGrid.disabled = true;
            // height of axis
            valueAxis.height = am4core.percent(65);

            valueAxis.renderer.gridContainer.background.fill = am4core.color("#000000");
            valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
            valueAxis.renderer.inside = true;
            valueAxis.renderer.labels.template.verticalCenter = "bottom";
            valueAxis.renderer.labels.template.padding(2, 2, 2, 2);

            //valueAxis.renderer.maxLabelPosition = 0.95;
            valueAxis.renderer.fontSize = "0.8em"

            var series1 = chart.series.push(new am4charts.LineSeries());
            series1.dataFields.dateX = "date";
            series1.dataFields.valueY = "price1";
            series1.dataFields.valueYShow = "changePercent";
            series1.tooltipText = "{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%";
            series1.name = "Stock A";
            series1.tooltip.getFillFromObject = false;
            series1.tooltip.getStrokeFromObject = true;
            series1.tooltip.background.fill = am4core.color("#fff");
            series1.tooltip.background.strokeWidth = 2;
            series1.tooltip.label.fill = series1.stroke;

            var series2 = chart.series.push(new am4charts.LineSeries());
            series2.dataFields.dateX = "date";
            series2.dataFields.valueY = "price2";
            series2.dataFields.valueYShow = "changePercent";
            series2.tooltipText = "{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%";
            series2.name = "Stock B";
            series2.tooltip.getFillFromObject = false;
            series2.tooltip.getStrokeFromObject = true;
            series2.tooltip.background.fill = am4core.color("#fff");
            series2.tooltip.background.strokeWidth = 2;
            series2.tooltip.label.fill = series2.stroke;

            var series3 = chart.series.push(new am4charts.LineSeries());
            series3.dataFields.dateX = "date";
            series3.dataFields.valueY = "price3";
            series3.dataFields.valueYShow = "changePercent";
            series3.tooltipText = "{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%";
            series3.name = "Stock C";
            series3.tooltip.getFillFromObject = false;
            series3.tooltip.getStrokeFromObject = true;
            series3.tooltip.background.fill = am4core.color("#fff");
            series3.tooltip.background.strokeWidth = 2;
            series3.tooltip.label.fill = series3.stroke;

            var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis2.tooltip.disabled = true;
            // height of axis
            valueAxis2.height = am4core.percent(35);
            valueAxis2.zIndex = 3
            // this makes gap between panels
            valueAxis2.marginTop = 30;
            valueAxis2.renderer.baseGrid.disabled = true;
            valueAxis2.renderer.inside = true;
            valueAxis2.renderer.labels.template.verticalCenter = "bottom";
            valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
            //valueAxis.renderer.maxLabelPosition = 0.95;
            valueAxis2.renderer.fontSize = "0.8em";

            valueAxis2.renderer.gridContainer.background.fill = am4core.color("#000000");
            valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;

            var volumeSeries = chart.series.push(new am4charts.StepLineSeries());
            volumeSeries.fillOpacity = 1;
            volumeSeries.fill = series1.stroke;
            volumeSeries.stroke = series1.stroke;
            volumeSeries.dataFields.dateX = "date";
            volumeSeries.dataFields.valueY = "quantity";
            volumeSeries.yAxis = valueAxis2;
            volumeSeries.tooltipText = "Volume: {valueY.value}";
            volumeSeries.name = "Series 2";
            // volume should be summed
            volumeSeries.groupFields.valueY = "sum";
            volumeSeries.tooltip.label.fill = volumeSeries.stroke;
            chart.cursor = new am4charts.XYCursor();

            var scrollbarX = new am4charts.XYChartScrollbar();
            scrollbarX.series.push(series1);
            scrollbarX.marginBottom = 20;
            var sbSeries = scrollbarX.scrollbarChart.series.getIndex(0);
            sbSeries.dataFields.valueYShow = undefined;
            chart.scrollbarX = scrollbarX;

        }); // end am4core.ready()
    }

    var _demo3 = function () {
        // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            chart = am4core.create("kt_amcharts_3", am4charts.XYChart);

            // Add data
            chart.data = [{
                "year": "2011",
                "value": 600000
            }, {
                "year": "2012",
                "value": 900000
            }, {
                "year": "2013",
                "value": 180000
            }, {
                "year": "2014",
                "value": 600000
            }, {
                "year": "2015",
                "value": 350000
            }, {
                "year": "2016",
                "value": 600000
            }, {
                "year": "2017",
                "value": 670000
            }];

            // Populate data
            for (var i = 0; i < (chart.data.length - 1); i++) {
                chart.data[i].valueNext = chart.data[i + 1].value;
            }

            // Create axes
            var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "year";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.min = 0;

            // Create series
            var series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = "value";
            series.dataFields.categoryX = "year";

            // Add series for showing variance arrows
            var series2 = chart.series.push(new am4charts.ColumnSeries());
            series2.dataFields.valueY = "valueNext";
            series2.dataFields.openValueY = "value";
            series2.dataFields.categoryX = "year";
            series2.columns.template.width = 1;
            series2.fill = am4core.color("#555");
            series2.stroke = am4core.color("#555");

            // Add a triangle for arrow tip
            var arrow = series2.bullets.push(new am4core.Triangle);
            arrow.width = 10;
            arrow.height = 10;
            arrow.horizontalCenter = "middle";
            arrow.verticalCenter = "top";
            arrow.dy = -1;

            // Set up a rotation adapter which would rotate the triangle if its a negative change
            arrow.adapter.add("rotation", function (rotation, target) {
                return getVariancePercent(target.dataItem) < 0 ? 180 : rotation;
            });

            // Set up a rotation adapter which adjusts Y position
            arrow.adapter.add("dy", function (dy, target) {
                return getVariancePercent(target.dataItem) < 0 ? 1 : dy;
            });

            // Add a label
            var label = series2.bullets.push(new am4core.Label);
            label.padding(10, 10, 10, 10);
            label.text = "";
            label.fill = am4core.color("#0c0");
            label.strokeWidth = 0;
            label.horizontalCenter = "middle";
            label.verticalCenter = "bottom";
            label.fontWeight = "bolder";

            // Adapter for label text which calculates change in percent
            label.adapter.add("textOutput", function (text, target) {
                var percent = getVariancePercent(target.dataItem);
                return percent ? percent + "%" : text;
            });

            // Adapter which shifts the label if it's below the variance column
            label.adapter.add("verticalCenter", function (center, target) {
                return getVariancePercent(target.dataItem) < 0 ? "top" : center;
            });

            // Adapter which changes color of label to red
            label.adapter.add("fill", function (fill, target) {
                return getVariancePercent(target.dataItem) < 0 ? am4core.color("#c00") : fill;
            });

            function getVariancePercent(dataItem) {
                if (dataItem) {
                    var value = dataItem.valueY;
                    var openValue = dataItem.openValueY;
                    var change = value - openValue;
                    return Math.round(change / openValue * 100);
                }
                return 0;
            }

        }); // end am4core.ready()
    }

    return {
        // Public Functions
        init: function () {
            _demo1();
            _demo2();
            _demo3();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralAmChartsMaps.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/amcharts/stock-charts.js":
/*!*******************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/amcharts/stock-charts.js ***!
  \*******************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralAmChartsMaps = function () {\n  // Shared variables\n  var chart; // Private functions\n\n  var _demo1 = function _demo1() {\n    // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/\n    am4core.ready(function () {\n      // Themes begin\n      am4core.useTheme(am4themes_animated); // Themes end\n      // Create chart\n\n      chart = am4core.create(\"kt_amcharts_1\", am4charts.XYChart);\n      chart.padding(0, 15, 0, 15); // Load external data\n\n      chart.dataSource.url = \"https://www.amcharts.com/wp-content/uploads/assets/stock/MSFT.csv\";\n      chart.dataSource.parser = new am4core.CSVParser();\n      chart.dataSource.parser.options.useColumnNames = true;\n      chart.dataSource.parser.options.reverse = true; // the following line makes value axes to be arranged vertically.\n\n      chart.leftAxesContainer.layout = \"vertical\"; // uncomment this line if you want to change order of axes\n      //chart.bottomAxesContainer.reverseOrder = true;\n\n      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());\n      dateAxis.renderer.grid.template.location = 0;\n      dateAxis.renderer.ticks.template.length = 8;\n      dateAxis.renderer.ticks.template.strokeOpacity = 0.1;\n      dateAxis.renderer.grid.template.disabled = true;\n      dateAxis.renderer.ticks.template.disabled = false;\n      dateAxis.renderer.ticks.template.strokeOpacity = 0.2;\n      dateAxis.renderer.minLabelPosition = 0.01;\n      dateAxis.renderer.maxLabelPosition = 0.99;\n      dateAxis.keepSelection = true;\n      dateAxis.minHeight = 30;\n      dateAxis.groupData = true;\n      dateAxis.minZoomCount = 5; // these two lines makes the axis to be initially zoomed-in\n      // dateAxis.start = 0.7;\n      // dateAxis.keepSelection = true;\n\n      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());\n      valueAxis.tooltip.disabled = true;\n      valueAxis.zIndex = 1;\n      valueAxis.renderer.baseGrid.disabled = true; // height of axis\n\n      valueAxis.height = am4core.percent(65);\n      valueAxis.renderer.gridContainer.background.fill = am4core.color(\"#000000\");\n      valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;\n      valueAxis.renderer.inside = true;\n      valueAxis.renderer.labels.template.verticalCenter = \"bottom\";\n      valueAxis.renderer.labels.template.padding(2, 2, 2, 2); //valueAxis.renderer.maxLabelPosition = 0.95;\n\n      valueAxis.renderer.fontSize = \"0.8em\";\n      var series = chart.series.push(new am4charts.LineSeries());\n      series.dataFields.dateX = \"Date\";\n      series.dataFields.valueY = \"Adj Close\";\n      series.tooltipText = \"{valueY.value}\";\n      series.name = \"MSFT: Value\";\n      series.defaultState.transitionDuration = 0;\n      var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());\n      valueAxis2.tooltip.disabled = true; // height of axis\n\n      valueAxis2.height = am4core.percent(35);\n      valueAxis2.zIndex = 3; // this makes gap between panels\n\n      valueAxis2.marginTop = 30;\n      valueAxis2.renderer.baseGrid.disabled = true;\n      valueAxis2.renderer.inside = true;\n      valueAxis2.renderer.labels.template.verticalCenter = \"bottom\";\n      valueAxis2.renderer.labels.template.padding(2, 2, 2, 2); //valueAxis.renderer.maxLabelPosition = 0.95;\n\n      valueAxis2.renderer.fontSize = \"0.8em\";\n      valueAxis2.renderer.gridContainer.background.fill = am4core.color(\"#000000\");\n      valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;\n      var series2 = chart.series.push(new am4charts.ColumnSeries());\n      series2.dataFields.dateX = \"Date\";\n      series2.dataFields.valueY = \"Volume\";\n      series2.yAxis = valueAxis2;\n      series2.tooltipText = \"{valueY.value}\";\n      series2.name = \"MSFT: Volume\"; // volume should be summed\n\n      series2.groupFields.valueY = \"sum\";\n      series2.defaultState.transitionDuration = 0;\n      chart.cursor = new am4charts.XYCursor();\n      var scrollbarX = new am4charts.XYChartScrollbar();\n      scrollbarX.series.push(series);\n      scrollbarX.marginBottom = 20;\n      scrollbarX.scrollbarChart.xAxes.getIndex(0).minHeight = undefined;\n      chart.scrollbarX = scrollbarX;\n    }); // end am4core.ready()\n  };\n\n  var _demo2 = function _demo2() {\n    // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/\n    am4core.ready(function () {\n      // Themes begin\n      am4core.useTheme(am4themes_animated); // Themes end\n\n      chart = am4core.create(\"kt_amcharts_2\", am4charts.XYChart);\n      chart.padding(0, 15, 0, 15);\n      chart.colors.step = 3;\n      var data = [];\n      var price1 = 1000;\n      var price2 = 2000;\n      var price3 = 3000;\n      var quantity = 1000;\n\n      for (var i = 15; i < 3000; i++) {\n        price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);\n        price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);\n        price3 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);\n\n        if (price1 < 100) {\n          price1 = 100;\n        }\n\n        if (price2 < 100) {\n          price2 = 100;\n        }\n\n        if (price3 < 100) {\n          price3 = 100;\n        }\n\n        quantity += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 500);\n\n        if (quantity < 0) {\n          quantity *= -1;\n        }\n\n        data.push({\n          date: new Date(2000, 0, i),\n          price1: price1,\n          price2: price2,\n          price3: price3,\n          quantity: quantity\n        });\n      }\n\n      chart.data = data; // the following line makes value axes to be arranged vertically.\n\n      chart.leftAxesContainer.layout = \"vertical\"; // uncomment this line if you want to change order of axes\n      //chart.bottomAxesContainer.reverseOrder = true;\n\n      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());\n      dateAxis.renderer.grid.template.location = 0;\n      dateAxis.renderer.ticks.template.length = 8;\n      dateAxis.renderer.ticks.template.strokeOpacity = 0.1;\n      dateAxis.renderer.grid.template.disabled = true;\n      dateAxis.renderer.ticks.template.disabled = false;\n      dateAxis.renderer.ticks.template.strokeOpacity = 0.2;\n      dateAxis.renderer.minLabelPosition = 0.01;\n      dateAxis.renderer.maxLabelPosition = 0.99;\n      dateAxis.keepSelection = true;\n      dateAxis.groupData = true;\n      dateAxis.minZoomCount = 5; // these two lines makes the axis to be initially zoomed-in\n      // dateAxis.start = 0.7;\n      // dateAxis.keepSelection = true;\n\n      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());\n      valueAxis.tooltip.disabled = true;\n      valueAxis.zIndex = 1;\n      valueAxis.renderer.baseGrid.disabled = true; // height of axis\n\n      valueAxis.height = am4core.percent(65);\n      valueAxis.renderer.gridContainer.background.fill = am4core.color(\"#000000\");\n      valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;\n      valueAxis.renderer.inside = true;\n      valueAxis.renderer.labels.template.verticalCenter = \"bottom\";\n      valueAxis.renderer.labels.template.padding(2, 2, 2, 2); //valueAxis.renderer.maxLabelPosition = 0.95;\n\n      valueAxis.renderer.fontSize = \"0.8em\";\n      var series1 = chart.series.push(new am4charts.LineSeries());\n      series1.dataFields.dateX = \"date\";\n      series1.dataFields.valueY = \"price1\";\n      series1.dataFields.valueYShow = \"changePercent\";\n      series1.tooltipText = \"{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%\";\n      series1.name = \"Stock A\";\n      series1.tooltip.getFillFromObject = false;\n      series1.tooltip.getStrokeFromObject = true;\n      series1.tooltip.background.fill = am4core.color(\"#fff\");\n      series1.tooltip.background.strokeWidth = 2;\n      series1.tooltip.label.fill = series1.stroke;\n      var series2 = chart.series.push(new am4charts.LineSeries());\n      series2.dataFields.dateX = \"date\";\n      series2.dataFields.valueY = \"price2\";\n      series2.dataFields.valueYShow = \"changePercent\";\n      series2.tooltipText = \"{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%\";\n      series2.name = \"Stock B\";\n      series2.tooltip.getFillFromObject = false;\n      series2.tooltip.getStrokeFromObject = true;\n      series2.tooltip.background.fill = am4core.color(\"#fff\");\n      series2.tooltip.background.strokeWidth = 2;\n      series2.tooltip.label.fill = series2.stroke;\n      var series3 = chart.series.push(new am4charts.LineSeries());\n      series3.dataFields.dateX = \"date\";\n      series3.dataFields.valueY = \"price3\";\n      series3.dataFields.valueYShow = \"changePercent\";\n      series3.tooltipText = \"{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%\";\n      series3.name = \"Stock C\";\n      series3.tooltip.getFillFromObject = false;\n      series3.tooltip.getStrokeFromObject = true;\n      series3.tooltip.background.fill = am4core.color(\"#fff\");\n      series3.tooltip.background.strokeWidth = 2;\n      series3.tooltip.label.fill = series3.stroke;\n      var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());\n      valueAxis2.tooltip.disabled = true; // height of axis\n\n      valueAxis2.height = am4core.percent(35);\n      valueAxis2.zIndex = 3; // this makes gap between panels\n\n      valueAxis2.marginTop = 30;\n      valueAxis2.renderer.baseGrid.disabled = true;\n      valueAxis2.renderer.inside = true;\n      valueAxis2.renderer.labels.template.verticalCenter = \"bottom\";\n      valueAxis2.renderer.labels.template.padding(2, 2, 2, 2); //valueAxis.renderer.maxLabelPosition = 0.95;\n\n      valueAxis2.renderer.fontSize = \"0.8em\";\n      valueAxis2.renderer.gridContainer.background.fill = am4core.color(\"#000000\");\n      valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;\n      var volumeSeries = chart.series.push(new am4charts.StepLineSeries());\n      volumeSeries.fillOpacity = 1;\n      volumeSeries.fill = series1.stroke;\n      volumeSeries.stroke = series1.stroke;\n      volumeSeries.dataFields.dateX = \"date\";\n      volumeSeries.dataFields.valueY = \"quantity\";\n      volumeSeries.yAxis = valueAxis2;\n      volumeSeries.tooltipText = \"Volume: {valueY.value}\";\n      volumeSeries.name = \"Series 2\"; // volume should be summed\n\n      volumeSeries.groupFields.valueY = \"sum\";\n      volumeSeries.tooltip.label.fill = volumeSeries.stroke;\n      chart.cursor = new am4charts.XYCursor();\n      var scrollbarX = new am4charts.XYChartScrollbar();\n      scrollbarX.series.push(series1);\n      scrollbarX.marginBottom = 20;\n      var sbSeries = scrollbarX.scrollbarChart.series.getIndex(0);\n      sbSeries.dataFields.valueYShow = undefined;\n      chart.scrollbarX = scrollbarX;\n    }); // end am4core.ready()\n  };\n\n  var _demo3 = function _demo3() {\n    // Init AmChart -- for more info, please visit the official documentiation: https://www.amcharts.com/docs/v4/\n    am4core.ready(function () {\n      // Themes begin\n      am4core.useTheme(am4themes_animated); // Themes end\n      // Create chart instance\n\n      chart = am4core.create(\"kt_amcharts_3\", am4charts.XYChart); // Add data\n\n      chart.data = [{\n        \"year\": \"2011\",\n        \"value\": 600000\n      }, {\n        \"year\": \"2012\",\n        \"value\": 900000\n      }, {\n        \"year\": \"2013\",\n        \"value\": 180000\n      }, {\n        \"year\": \"2014\",\n        \"value\": 600000\n      }, {\n        \"year\": \"2015\",\n        \"value\": 350000\n      }, {\n        \"year\": \"2016\",\n        \"value\": 600000\n      }, {\n        \"year\": \"2017\",\n        \"value\": 670000\n      }]; // Populate data\n\n      for (var i = 0; i < chart.data.length - 1; i++) {\n        chart.data[i].valueNext = chart.data[i + 1].value;\n      } // Create axes\n\n\n      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());\n      categoryAxis.dataFields.category = \"year\";\n      categoryAxis.renderer.grid.template.location = 0;\n      categoryAxis.renderer.minGridDistance = 30;\n      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());\n      valueAxis.min = 0; // Create series\n\n      var series = chart.series.push(new am4charts.ColumnSeries());\n      series.dataFields.valueY = \"value\";\n      series.dataFields.categoryX = \"year\"; // Add series for showing variance arrows\n\n      var series2 = chart.series.push(new am4charts.ColumnSeries());\n      series2.dataFields.valueY = \"valueNext\";\n      series2.dataFields.openValueY = \"value\";\n      series2.dataFields.categoryX = \"year\";\n      series2.columns.template.width = 1;\n      series2.fill = am4core.color(\"#555\");\n      series2.stroke = am4core.color(\"#555\"); // Add a triangle for arrow tip\n\n      var arrow = series2.bullets.push(new am4core.Triangle());\n      arrow.width = 10;\n      arrow.height = 10;\n      arrow.horizontalCenter = \"middle\";\n      arrow.verticalCenter = \"top\";\n      arrow.dy = -1; // Set up a rotation adapter which would rotate the triangle if its a negative change\n\n      arrow.adapter.add(\"rotation\", function (rotation, target) {\n        return getVariancePercent(target.dataItem) < 0 ? 180 : rotation;\n      }); // Set up a rotation adapter which adjusts Y position\n\n      arrow.adapter.add(\"dy\", function (dy, target) {\n        return getVariancePercent(target.dataItem) < 0 ? 1 : dy;\n      }); // Add a label\n\n      var label = series2.bullets.push(new am4core.Label());\n      label.padding(10, 10, 10, 10);\n      label.text = \"\";\n      label.fill = am4core.color(\"#0c0\");\n      label.strokeWidth = 0;\n      label.horizontalCenter = \"middle\";\n      label.verticalCenter = \"bottom\";\n      label.fontWeight = \"bolder\"; // Adapter for label text which calculates change in percent\n\n      label.adapter.add(\"textOutput\", function (text, target) {\n        var percent = getVariancePercent(target.dataItem);\n        return percent ? percent + \"%\" : text;\n      }); // Adapter which shifts the label if it's below the variance column\n\n      label.adapter.add(\"verticalCenter\", function (center, target) {\n        return getVariancePercent(target.dataItem) < 0 ? \"top\" : center;\n      }); // Adapter which changes color of label to red\n\n      label.adapter.add(\"fill\", function (fill, target) {\n        return getVariancePercent(target.dataItem) < 0 ? am4core.color(\"#c00\") : fill;\n      });\n\n      function getVariancePercent(dataItem) {\n        if (dataItem) {\n          var value = dataItem.valueY;\n          var openValue = dataItem.openValueY;\n          var change = value - openValue;\n          return Math.round(change / openValue * 100);\n        }\n\n        return 0;\n      }\n    }); // end am4core.ready()\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      _demo1();\n\n      _demo2();\n\n      _demo3();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralAmChartsMaps.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9hbWNoYXJ0cy9zdG9jay1jaGFydHMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEscUJBQXFCLEdBQUcsWUFBWTtBQUNwQztBQUNBLE1BQUlDLEtBQUosQ0FGb0MsQ0FJcEM7O0FBQ0EsTUFBSUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBWTtBQUNyQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxZQUFZO0FBRXRCO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0UsUUFBUixDQUFpQkMsa0JBQWpCLEVBSHNCLENBSXRCO0FBRUE7O0FBQ0FMLE1BQUFBLEtBQUssR0FBR0UsT0FBTyxDQUFDSSxNQUFSLENBQWUsZUFBZixFQUFnQ0MsU0FBUyxDQUFDQyxPQUExQyxDQUFSO0FBQ0FSLE1BQUFBLEtBQUssQ0FBQ1MsT0FBTixDQUFjLENBQWQsRUFBaUIsRUFBakIsRUFBcUIsQ0FBckIsRUFBd0IsRUFBeEIsRUFSc0IsQ0FVdEI7O0FBQ0FULE1BQUFBLEtBQUssQ0FBQ1UsVUFBTixDQUFpQkMsR0FBakIsR0FBdUIsbUVBQXZCO0FBQ0FYLE1BQUFBLEtBQUssQ0FBQ1UsVUFBTixDQUFpQkUsTUFBakIsR0FBMEIsSUFBSVYsT0FBTyxDQUFDVyxTQUFaLEVBQTFCO0FBQ0FiLE1BQUFBLEtBQUssQ0FBQ1UsVUFBTixDQUFpQkUsTUFBakIsQ0FBd0JFLE9BQXhCLENBQWdDQyxjQUFoQyxHQUFpRCxJQUFqRDtBQUNBZixNQUFBQSxLQUFLLENBQUNVLFVBQU4sQ0FBaUJFLE1BQWpCLENBQXdCRSxPQUF4QixDQUFnQ0UsT0FBaEMsR0FBMEMsSUFBMUMsQ0Fkc0IsQ0FnQnRCOztBQUNBaEIsTUFBQUEsS0FBSyxDQUFDaUIsaUJBQU4sQ0FBd0JDLE1BQXhCLEdBQWlDLFVBQWpDLENBakJzQixDQW1CdEI7QUFDQTs7QUFFQSxVQUFJQyxRQUFRLEdBQUduQixLQUFLLENBQUNv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LElBQUksQ0FBQ0MsS0FBTCxDQUFXMkMsTUFBTSxHQUFHRCxTQUFULEdBQXFCLEdBQWhDLENBQVA7QUFDSDs7QUFDRCxlQUFPLENBQVA7QUFDSDtBQUVKLEtBbkhELEVBRnFCLENBcUhqQjtBQUNQLEdBdEhEOztBQXdIQSxTQUFPO0FBQ0g7QUFDQUUsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RsSSxNQUFBQSxNQUFNOztBQUNONEUsTUFBQUEsTUFBTTs7QUFDTnlCLE1BQUFBLE1BQU07QUFDVDtBQU5FLEdBQVA7QUFRSCxDQS9ZMkIsRUFBNUIsQyxDQWlaQTs7O0FBQ0E4QixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbEN0SSxFQUFBQSxxQkFBcUIsQ0FBQ29JLElBQXRCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2FtY2hhcnRzL3N0b2NrLWNoYXJ0cy5qcz83MjMxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RHZW5lcmFsQW1DaGFydHNNYXBzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNoYXJlZCB2YXJpYWJsZXNcbiAgICB2YXIgY2hhcnQ7XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBfZGVtbzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEluaXQgQW1DaGFydCAtLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQgdGhlIG9mZmljaWFsIGRvY3VtZW50aWF0aW9uOiBodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vZG9jcy92NC9cbiAgICAgICAgYW00Y29yZS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vIFRoZW1lcyBiZWdpblxuICAgICAgICAgICAgYW00Y29yZS51c2VUaGVtZShhbTR0aGVtZXNfYW5pbWF0ZWQpO1xuICAgICAgICAgICAgLy8gVGhlbWVzIGVuZFxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2hhcnRcbiAgICAgICAgICAgIGNoYXJ0ID0gYW00Y29yZS5jcmVhdGUoXCJrdF9hbWNoYXJ0c18xXCIsIGFtNGNoYXJ0cy5YWUNoYXJ0KTtcbiAgICAgICAgICAgIGNoYXJ0LnBhZGRpbmcoMCwgMTUsIDAsIDE1KTtcblxuICAgICAgICAgICAgLy8gTG9hZCBleHRlcm5hbCBkYXRhXG4gICAgICAgICAgICBjaGFydC5kYXRhU291cmNlLnVybCA9IFwiaHR0cHM6Ly93d3cuYW1jaGFydHMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9hc3NldHMvc3RvY2svTVNGVC5jc3ZcIjtcbiAgICAgICAgICAgIGNoYXJ0LmRhdGFTb3VyY2UucGFyc2VyID0gbmV3IGFtNGNvcmUuQ1NWUGFyc2VyKCk7XG4gICAgICAgICAgICBjaGFydC5kYXRhU291cmNlLnBhcnNlci5vcHRpb25zLnVzZUNvbHVtbk5hbWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoYXJ0LmRhdGFTb3VyY2UucGFyc2VyLm9wdGlvbnMucmV2ZXJzZSA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgbGluZSBtYWtlcyB2YWx1ZSBheGVzIHRvIGJlIGFycmFuZ2VkIHZlcnRpY2FsbHkuXG4gICAgICAgICAgICBjaGFydC5sZWZ0QXhlc0NvbnRhaW5lci5sYXlvdXQgPSBcInZlcnRpY2FsXCI7XG5cbiAgICAgICAgICAgIC8vIHVuY29tbWVudCB0aGlzIGxpbmUgaWYgeW91IHdhbnQgdG8gY2hhbmdlIG9yZGVyIG9mIGF4ZXNcbiAgICAgICAgICAgIC8vY2hhcnQuYm90dG9tQXhlc0NvbnRhaW5lci5yZXZlcnNlT3JkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICB2YXIgZGF0ZUF4aXMgPSBjaGFydC54QXhlcy5wdXNoKG5ldyBhbTRjaGFydHMuRGF0ZUF4aXMoKSk7XG4gICAgICAgICAgICBkYXRlQXhpcy5yZW5kZXJlci5ncmlkLnRlbXBsYXRlLmxvY2F0aW9uID0gMDtcbiAgICAgICAgICAgIGRhdGVBeGlzLnJlbmRlcmVyLnRpY2tzLnRlbXBsYXRlLmxlbmd0aCA9IDg7XG4gICAgICAgICAgICBkYXRlQXhpcy5yZW5kZXJlci50aWNrcy50ZW1wbGF0ZS5zdHJva2VPcGFjaXR5ID0gMC4xO1xuICAgICAgICAgICAgZGF0ZUF4aXMucmVuZGVyZXIuZ3JpZC50ZW1wbGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBkYXRlQXhpcy5yZW5kZXJlci50aWNrcy50ZW1wbGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZGF0ZUF4aXMucmVuZGVyZXIudGlja3MudGVtcGxhdGUuc3Ryb2tlT3BhY2l0eSA9IDAuMjtcbiAgICAgICAgICAgIGRhdGVBeGlzLnJlbmRlcmVyLm1pbkxhYmVsUG9zaXRpb24gPSAwLjAxO1xuICAgICAgICAgICAgZGF0ZUF4aXMucmVuZGVyZXIubWF4TGFiZWxQb3NpdGlvbiA9IDAuOTk7XG4gICAgICAgICAgICBkYXRlQXhpcy5rZWVwU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGRhdGVBeGlzLm1pbkhlaWdodCA9IDMwO1xuXG4gICAgICAgICAgICBkYXRlQXhpcy5ncm91cERhdGEgPSB0cnVlO1xuICAgICAgICAgICAgZGF0ZUF4aXMubWluWm9vbUNvdW50ID0gNTtcblxuICAgICAgICAgICAgLy8gdGhlc2UgdHdvIGxpbmVzIG1ha2VzIHRoZSBheGlzIHRvIGJlIGluaXRpYWxseSB6b29tZWQtaW5cbiAgICAgICAgICAgIC8vIGRhdGVBeGlzLnN0YXJ0ID0gMC43O1xuICAgICAgICAgICAgLy8gZGF0ZUF4aXMua2VlcFNlbGVjdGlvbiA9IHRydWU7XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZUF4aXMgPSBjaGFydC55QXhlcy5wdXNoKG5ldyBhbTRjaGFydHMuVmFsdWVBeGlzKCkpO1xuICAgICAgICAgICAgdmFsdWVBeGlzLnRvb2x0aXAuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFsdWVBeGlzLnpJbmRleCA9IDE7XG4gICAgICAgICAgICB2YWx1ZUF4aXMucmVuZGVyZXIuYmFzZUdyaWQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gaGVpZ2h0IG9mIGF4aXNcbiAgICAgICAgICAgIHZhbHVlQXhpcy5oZWlnaHQgPSBhbTRjb3JlLnBlcmNlbnQoNjUpO1xuXG4gICAgICAgICAgICB2YWx1ZUF4aXMucmVuZGVyZXIuZ3JpZENvbnRhaW5lci5iYWNrZ3JvdW5kLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiIzAwMDAwMFwiKTtcbiAgICAgICAgICAgIHZhbHVlQXhpcy5yZW5kZXJlci5ncmlkQ29udGFpbmVyLmJhY2tncm91bmQuZmlsbE9wYWNpdHkgPSAwLjA1O1xuICAgICAgICAgICAgdmFsdWVBeGlzLnJlbmRlcmVyLmluc2lkZSA9IHRydWU7XG4gICAgICAgICAgICB2YWx1ZUF4aXMucmVuZGVyZXIubGFiZWxzLnRlbXBsYXRlLnZlcnRpY2FsQ2VudGVyID0gXCJib3R0b21cIjtcbiAgICAgICAgICAgIHZhbHVlQXhpcy5yZW5kZXJlci5sYWJlbHMudGVtcGxhdGUucGFkZGluZygyLCAyLCAyLCAyKTtcblxuICAgICAgICAgICAgLy92YWx1ZUF4aXMucmVuZGVyZXIubWF4TGFiZWxQb3NpdGlvbiA9IDAuOTU7XG4gICAgICAgICAgICB2YWx1ZUF4aXMucmVuZGVyZXIuZm9udFNpemUgPSBcIjAuOGVtXCJcblxuICAgICAgICAgICAgdmFyIHNlcmllcyA9IGNoYXJ0LnNlcmllcy5wdXNoKG5ldyBhbTRjaGFydHMuTGluZVNlcmllcygpKTtcbiAgICAgICAgICAgIHNlcmllcy5kYXRhRmllbGRzLmRhdGVYID0gXCJEYXRlXCI7XG4gICAgICAgICAgICBzZXJpZXMuZGF0YUZpZWxkcy52YWx1ZVkgPSBcIkFkaiBDbG9zZVwiO1xuICAgICAgICAgICAgc2VyaWVzLnRvb2x0aXBUZXh0ID0gXCJ7dmFsdWVZLnZhbHVlfVwiO1xuICAgICAgICAgICAgc2VyaWVzLm5hbWUgPSBcIk1TRlQ6IFZhbHVlXCI7XG4gICAgICAgICAgICBzZXJpZXMuZGVmYXVsdFN0YXRlLnRyYW5zaXRpb25EdXJhdGlvbiA9IDA7XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZUF4aXMyID0gY2hhcnQueUF4ZXMucHVzaChuZXcgYW00Y2hhcnRzLlZhbHVlQXhpcygpKTtcbiAgICAgICAgICAgIHZhbHVlQXhpczIudG9vbHRpcC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyBoZWlnaHQgb2YgYXhpc1xuICAgICAgICAgICAgdmFsdWVBeGlzMi5oZWlnaHQgPSBhbTRjb3JlLnBlcmNlbnQoMzUpO1xuICAgICAgICAgICAgdmFsdWVBeGlzMi56SW5kZXggPSAzXG4gICAgICAgICAgICAvLyB0aGlzIG1ha2VzIGdhcCBiZXR3ZWVuIHBhbmVsc1xuICAgICAgICAgICAgdmFsdWVBeGlzMi5tYXJnaW5Ub3AgPSAzMDtcbiAgICAgICAgICAgIHZhbHVlQXhpczIucmVuZGVyZXIuYmFzZUdyaWQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFsdWVBeGlzMi5yZW5kZXJlci5pbnNpZGUgPSB0cnVlO1xuICAgICAgICAgICAgdmFsdWVBeGlzMi5yZW5kZXJlci5sYWJlbHMudGVtcGxhdGUudmVydGljYWxDZW50ZXIgPSBcImJvdHRvbVwiO1xuICAgICAgICAgICAgdmFsdWVBeGlzMi5yZW5kZXJlci5sYWJlbHMudGVtcGxhdGUucGFkZGluZygyLCAyLCAyLCAyKTtcbiAgICAgICAgICAgIC8vdmFsdWVBeGlzLnJlbmRlcmVyLm1heExhYmVsUG9zaXRpb24gPSAwLjk1O1xuICAgICAgICAgICAgdmFsdWVBeGlzMi5yZW5kZXJlci5mb250U2l6ZSA9IFwiMC44ZW1cIlxuXG4gICAgICAgICAgICB2YWx1ZUF4aXMyLnJlbmRlcmVyLmdyaWRDb250YWluZXIuYmFja2dyb3VuZC5maWxsID0gYW00Y29yZS5jb2xvcihcIiMwMDAwMDBcIik7XG4gICAgICAgICAgICB2YWx1ZUF4aXMyLnJlbmRlcmVyLmdyaWRDb250YWluZXIuYmFja2dyb3VuZC5maWxsT3BhY2l0eSA9IDAuMDU7XG5cbiAgICAgICAgICAgIHZhciBzZXJpZXMyID0gY2hhcnQuc2VyaWVzLnB1c2gobmV3IGFtNGNoYXJ0cy5Db2x1bW5TZXJpZXMoKSk7XG4gICAgICAgICAgICBzZXJpZXMyLmRhdGFGaWVsZHMuZGF0ZVggPSBcIkRhdGVcIjtcbiAgICAgICAgICAgIHNlcmllczIuZGF0YUZpZWxkcy52YWx1ZVkgPSBcIlZvbHVtZVwiO1xuICAgICAgICAgICAgc2VyaWVzMi55QXhpcyA9IHZhbHVlQXhpczI7XG4gICAgICAgICAgICBzZXJpZXMyLnRvb2x0aXBUZXh0ID0gXCJ7dmFsdWVZLnZhbHVlfVwiO1xuICAgICAgICAgICAgc2VyaWVzMi5uYW1lID0gXCJNU0ZUOiBWb2x1bWVcIjtcbiAgICAgICAgICAgIC8vIHZvbHVtZSBzaG91bGQgYmUgc3VtbWVkXG4gICAgICAgICAgICBzZXJpZXMyLmdyb3VwRmllbGRzLnZhbHVlWSA9IFwic3VtXCI7XG4gICAgICAgICAgICBzZXJpZXMyLmRlZmF1bHRTdGF0ZS50cmFuc2l0aW9uRHVyYXRpb24gPSAwO1xuXG4gICAgICAgICAgICBjaGFydC5jdXJzb3IgPSBuZXcgYW00Y2hhcnRzLlhZQ3Vyc29yKCk7XG5cbiAgICAgICAgICAgIHZhciBzY3JvbGxiYXJYID0gbmV3IGFtNGNoYXJ0cy5YWUNoYXJ0U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICBzY3JvbGxiYXJYLnNlcmllcy5wdXNoKHNlcmllcyk7XG4gICAgICAgICAgICBzY3JvbGxiYXJYLm1hcmdpbkJvdHRvbSA9IDIwO1xuICAgICAgICAgICAgc2Nyb2xsYmFyWC5zY3JvbGxiYXJDaGFydC54QXhlcy5nZXRJbmRleCgwKS5taW5IZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjaGFydC5zY3JvbGxiYXJYID0gc2Nyb2xsYmFyWDtcblxuICAgICAgICB9KTsgLy8gZW5kIGFtNGNvcmUucmVhZHkoKVxuICAgIH1cblxuXG4gICAgdmFyIF9kZW1vMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSW5pdCBBbUNoYXJ0IC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgZG9jdW1lbnRpYXRpb246IGh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9kb2NzL3Y0L1xuICAgICAgICBhbTRjb3JlLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy8gVGhlbWVzIGJlZ2luXG4gICAgICAgICAgICBhbTRjb3JlLnVzZVRoZW1lKGFtNHRoZW1lc19hbmltYXRlZCk7XG4gICAgICAgICAgICAvLyBUaGVtZXMgZW5kXG5cbiAgICAgICAgICAgIGNoYXJ0ID0gYW00Y29yZS5jcmVhdGUoXCJrdF9hbWNoYXJ0c18yXCIsIGFtNGNoYXJ0cy5YWUNoYXJ0KTtcbiAgICAgICAgICAgIGNoYXJ0LnBhZGRpbmcoMCwgMTUsIDAsIDE1KTtcbiAgICAgICAgICAgIGNoYXJ0LmNvbG9ycy5zdGVwID0gMztcblxuICAgICAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgICAgIHZhciBwcmljZTEgPSAxMDAwO1xuICAgICAgICAgICAgdmFyIHByaWNlMiA9IDIwMDA7XG4gICAgICAgICAgICB2YXIgcHJpY2UzID0gMzAwMDtcbiAgICAgICAgICAgIHZhciBxdWFudGl0eSA9IDEwMDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTU7IGkgPCAzMDAwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwcmljZTEgKz0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSkgKiBNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgICAgICAgICBwcmljZTIgKz0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSkgKiBNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgICAgICAgICBwcmljZTMgKz0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSkgKiBNYXRoLnJhbmRvbSgpICogMTAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChwcmljZTEgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UxID0gMTAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwcmljZTIgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UyID0gMTAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwcmljZTMgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UzID0gMTAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHF1YW50aXR5ICs9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpICogTWF0aC5yYW5kb20oKSAqIDUwMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocXVhbnRpdHkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5ICo9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goeyBkYXRlOiBuZXcgRGF0ZSgyMDAwLCAwLCBpKSwgcHJpY2UxOiBwcmljZTEsIHByaWNlMjogcHJpY2UyLCBwcmljZTM6IHByaWNlMywgcXVhbnRpdHk6IHF1YW50aXR5IH0pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGNoYXJ0LmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBsaW5lIG1ha2VzIHZhbHVlIGF4ZXMgdG8gYmUgYXJyYW5nZWQgdmVydGljYWxseS5cbiAgICAgICAgICAgIGNoYXJ0LmxlZnRBeGVzQ29udGFpbmVyLmxheW91dCA9IFwidmVydGljYWxcIjtcblxuICAgICAgICAgICAgLy8gdW5jb21tZW50IHRoaXMgbGluZSBpZiB5b3Ugd2FudCB0byBjaGFuZ2Ugb3JkZXIgb2YgYXhlc1xuICAgICAgICAgICAgLy9jaGFydC5ib3R0b21BeGVzQ29udGFpbmVyLnJldmVyc2VPcmRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIHZhciBkYXRlQXhpcyA9IGNoYXJ0LnhBeGVzLnB1c2gobmV3IGFtNGNoYXJ0cy5EYXRlQXhpcygpKTtcbiAgICAgICAgICAgIGRhdGVBeGlzLnJlbmRlcmVyLmdyaWQudGVtcGxhdGUubG9jYXRpb24gPSAwO1xuICAgICAgICAgICAgZGF0ZUF4aXMucmVuZGVyZXIudGlja3MudGVtcGxhdGUubGVuZ3RoID0gODtcbiAgICAgICAgICAgIGRhdGVBeGlzLnJlbmRlcmVyLnRpY2tzLnRlbXBsYXRlLnN0cm9rZU9wYWNpdHkgPSAwLjE7XG4gICAgICAgICAgICBkYXRlQXhpcy5yZW5kZXJlci5ncmlkLnRlbXBsYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRhdGVBeGlzLnJlbmRlcmVyLnRpY2tzLnRlbXBsYXRlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBkYXRlQXhpcy5yZW5kZXJlci50aWNrcy50ZW1wbGF0ZS5zdHJva2VPcGFjaXR5ID0gMC4yO1xuICAgICAgICAgICAgZGF0ZUF4aXMucmVuZGVyZXIubWluTGFiZWxQb3NpdGlvbiA9IDAuMDE7XG4gICAgICAgICAgICBkYXRlQXhpcy5yZW5kZXJlci5tYXhMYWJlbFBvc2l0aW9uID0gMC45OTtcbiAgICAgICAgICAgIGRhdGVBeGlzLmtlZXBTZWxlY3Rpb24gPSB0cnVlO1xuXG4gICAgICAgICAgICBkYXRlQXhpcy5ncm91cERhdGEgPSB0cnVlO1xuICAgICAgICAgICAgZGF0ZUF4aXMubWluWm9vbUNvdW50ID0gNTtcblxuICAgICAgICAgICAgLy8gdGhlc2UgdHdvIGxpbmVzIG1ha2VzIHRoZSBheGlzIHRvIGJlIGluaXRpYWxseSB6b29tZWQtaW5cbiAgICAgICAgICAgIC8vIGRhdGVBeGlzLnN0YXJ0ID0gMC43O1xuICAgICAgICAgICAgLy8gZGF0ZUF4aXMua2VlcFNlbGVjdGlvbiA9IHRydWU7XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZUF4aXMgPSBjaGFydC55QXhlcy5wdXNoKG5ldyBhbTRjaGFydHMuVmFsdWVBeGlzKCkpO1xuICAgICAgICAgICAgdmFsdWVBeGlzLnRvb2x0aXAuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFsdWVBeGlzLnpJbmRleCA9IDE7XG4gICAgICAgICAgICB2YWx1ZUF4aXMucmVuZGVyZXIuYmFzZUdyaWQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gaGVpZ2h0IG9mIGF4aXNcbiAgICAgICAgICAgIHZhbHVlQXhpcy5oZWlnaHQgPSBhbTRjb3JlLnBlcmNlbnQoNjUpO1xuXG4gICAgICAgICAgICB2YWx1ZUF4aXMucmVuZGVyZXIuZ3JpZENvbnRhaW5lci5iYWNrZ3JvdW5kLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiIzAwMDAwMFwiKTtcbiAgICAgICAgICAgIHZhbHVlQXhpcy5yZW5kZXJlci5ncmlkQ29udGFpbmVyLmJhY2tncm91bmQuZmlsbE9wYWNpdHkgPSAwLjA1O1xuICAgICAgICAgICAgdmFsdWVBeGlzLnJlbmRlcmVyLmluc2lkZSA9IHRydWU7XG4gICAgICAgICAgICB2YWx1ZUF4aXMucmVuZGVyZXIubGFiZWxzLnRlbXBsYXRlLnZlcnRpY2FsQ2VudGVyID0gXCJib3R0b21cIjtcbiAgICAgICAgICAgIHZhbHVlQXhpcy5yZW5kZXJlci5sYWJlbHMudGVtcGxhdGUucGFkZGluZygyLCAyLCAyLCAyKTtcblxuICAgICAgICAgICAgLy92YWx1ZUF4aXMucmVuZGVyZXIubWF4TGFiZWxQb3NpdGlvbiA9IDAuOTU7XG4gICAgICAgICAgICB2YWx1ZUF4aXMucmVuZGVyZXIuZm9udFNpemUgPSBcIjAuOGVtXCJcblxuICAgICAgICAgICAgdmFyIHNlcmllczEgPSBjaGFydC5zZXJpZXMucHVzaChuZXcgYW00Y2hhcnRzLkxpbmVTZXJpZXMoKSk7XG4gICAgICAgICAgICBzZXJpZXMxLmRhdGFGaWVsZHMuZGF0ZVggPSBcImRhdGVcIjtcbiAgICAgICAgICAgIHNlcmllczEuZGF0YUZpZWxkcy52YWx1ZVkgPSBcInByaWNlMVwiO1xuICAgICAgICAgICAgc2VyaWVzMS5kYXRhRmllbGRzLnZhbHVlWVNob3cgPSBcImNoYW5nZVBlcmNlbnRcIjtcbiAgICAgICAgICAgIHNlcmllczEudG9vbHRpcFRleHQgPSBcIntuYW1lfToge3ZhbHVlWS5jaGFuZ2VQZXJjZW50LmZvcm1hdE51bWJlcignWyMwYzBdKyMuMDB8WyNjMDBdIy4jI3wwJyl9JVwiO1xuICAgICAgICAgICAgc2VyaWVzMS5uYW1lID0gXCJTdG9jayBBXCI7XG4gICAgICAgICAgICBzZXJpZXMxLnRvb2x0aXAuZ2V0RmlsbEZyb21PYmplY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlcmllczEudG9vbHRpcC5nZXRTdHJva2VGcm9tT2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlcmllczEudG9vbHRpcC5iYWNrZ3JvdW5kLmZpbGwgPSBhbTRjb3JlLmNvbG9yKFwiI2ZmZlwiKTtcbiAgICAgICAgICAgIHNlcmllczEudG9vbHRpcC5iYWNrZ3JvdW5kLnN0cm9rZVdpZHRoID0gMjtcbiAgICAgICAgICAgIHNlcmllczEudG9vbHRpcC5sYWJlbC5maWxsID0gc2VyaWVzMS5zdHJva2U7XG5cbiAgICAgICAgICAgIHZhciBzZXJpZXMyID0gY2hhcnQuc2VyaWVzLnB1c2gobmV3IGFtNGNoYXJ0cy5MaW5lU2VyaWVzKCkpO1xuICAgICAgICAgICAgc2VyaWVzMi5kYXRhRmllbGRzLmRhdGVYID0gXCJkYXRlXCI7XG4gICAgICAgICAgICBzZXJpZXMyLmRhdGFGaWVsZHMudmFsdWVZID0gXCJwcmljZTJcIjtcbiAgICAgICAgICAgIHNlcmllczIuZGF0YUZpZWxkcy52YWx1ZVlTaG93ID0gXCJjaGFuZ2VQZXJjZW50XCI7XG4gICAgICAgICAgICBzZXJpZXMyLnRvb2x0aXBUZXh0ID0gXCJ7bmFtZX06IHt2YWx1ZVkuY2hhbmdlUGVyY2VudC5mb3JtYXROdW1iZXIoJ1sjMGMwXSsjLjAwfFsjYzAwXSMuIyN8MCcpfSVcIjtcbiAgICAgICAgICAgIHNlcmllczIubmFtZSA9IFwiU3RvY2sgQlwiO1xuICAgICAgICAgICAgc2VyaWVzMi50b29sdGlwLmdldEZpbGxGcm9tT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICBzZXJpZXMyLnRvb2x0aXAuZ2V0U3Ryb2tlRnJvbU9iamVjdCA9IHRydWU7XG4gICAgICAgICAgICBzZXJpZXMyLnRvb2x0aXAuYmFja2dyb3VuZC5maWxsID0gYW00Y29yZS5jb2xvcihcIiNmZmZcIik7XG4gICAgICAgICAgICBzZXJpZXMyLnRvb2x0aXAuYmFja2dyb3VuZC5zdHJva2VXaWR0aCA9IDI7XG4gICAgICAgICAgICBzZXJpZXMyLnRvb2x0aXAubGFiZWwuZmlsbCA9IHNlcmllczIuc3Ryb2tlO1xuXG4gICAgICAgICAgICB2YXIgc2VyaWVzMyA9IGNoYXJ0LnNlcmllcy5wdXNoKG5ldyBhbTRjaGFydHMuTGluZVNlcmllcygpKTtcbiAgICAgICAgICAgIHNlcmllczMuZGF0YUZpZWxkcy5kYXRlWCA9IFwiZGF0ZVwiO1xuICAgICAgICAgICAgc2VyaWVzMy5kYXRhRmllbGRzLnZhbHVlWSA9IFwicHJpY2UzXCI7XG4gICAgICAgICAgICBzZXJpZXMzLmRhdGFGaWVsZHMudmFsdWVZU2hvdyA9IFwiY2hhbmdlUGVyY2VudFwiO1xuICAgICAgICAgICAgc2VyaWVzMy50b29sdGlwVGV4dCA9IFwie25hbWV9OiB7dmFsdWVZLmNoYW5nZVBlcmNlbnQuZm9ybWF0TnVtYmVyKCdbIzBjMF0rIy4wMHxbI2MwMF0jLiMjfDAnKX0lXCI7XG4gICAgICAgICAgICBzZXJpZXMzLm5hbWUgPSBcIlN0b2NrIENcIjtcbiAgICAgICAgICAgIHNlcmllczMudG9vbHRpcC5nZXRGaWxsRnJvbU9iamVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgc2VyaWVzMy50b29sdGlwLmdldFN0cm9rZUZyb21PYmplY3QgPSB0cnVlO1xuICAgICAgICAgICAgc2VyaWVzMy50b29sdGlwLmJhY2tncm91bmQuZmlsbCA9IGFtNGNvcmUuY29sb3IoXCIjZmZmXCIpO1xuICAgICAgICAgICAgc2VyaWVzMy50b29sdGlwLmJhY2tncm91bmQuc3Ryb2tlV2lkdGggPSAyO1xuICAgICAgICAgICAgc2VyaWVzMy50b29sdGlwLmxhYmVsLmZpbGwgPSBzZXJpZXMzLnN0cm9rZTtcblxuICAgICAgICAgICAgdmFyIHZhbHVlQXhpczIgPSBjaGFydC55QXhlcy5wdXNoKG5ldyBhbTRjaGFydHMuVmFsdWVBeGlzKCkpO1xuICAgICAgICAgICAgdmFsdWVBeGlzMi50b29sdGlwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGhlaWdodCBvZiBheGlzXG4gICAgICAgICAgICB2YWx1ZUF4aXMyLmhlaWdodCA9IGFtNGNvcmUucGVyY2VudCgzNSk7XG4gICAgICAgICAgICB2YWx1ZUF4aXMyLnpJbmRleCA9IDNcbiAgICAgICAgICAgIC8vIHRoaXMgbWFrZXMgZ2FwIGJldHdlZW4gcGFuZWxzXG4gICAgICAgICAgICB2YWx1ZUF4aXMyLm1hcmdpblRvcCA9IDMwO1xuICAgICAgICAgICAgdmFsdWVBeGlzMi5yZW5kZXJlci5iYXNlR3JpZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB2YWx1ZUF4aXMyLnJlbmRlcmVyLmluc2lkZSA9IHRydWU7XG4gICAgICAgICAgICB2YWx1ZUF4aXMyLnJlbmRlcmVyLmxhYmVscy50ZW1wbGF0ZS52ZXJ0aWNhbENlbnRlciA9IFwiYm90dG9tXCI7XG4gICAgICAgICAgICB2YWx1ZUF4aXMyLnJlbmRlcmVyLmxhYmVscy50ZW1wbGF0ZS5wYWRkaW5nKDIsIDIsIDIsIDIpO1xuICAgICAgICAgICAgLy92YWx1ZUF4aXMucmVuZGVyZXIubWF4TGFiZWxQb3NpdGlvbiA9IDAuOTU7XG4gICAgICAgICAgICB2YWx1ZUF4aXMyLnJlbmRlcmVyLmZvbnRTaXplID0gXCIwLjhlbVwiO1xuXG4gICAgICAgICAgICB2YWx1ZUF4aXMyLnJlbmRlcmVyLmdyaWRDb250YWluZXIuYmFja2dyb3VuZC5maWxsID0gYW00Y29yZS5jb2xvcihcIiMwMDAwMDBcIik7XG4gICAgICAgICAgICB2YWx1ZUF4aXMyLnJlbmRlcmVyLmdyaWRDb250YWluZXIuYmFja2dyb3VuZC5maWxsT3BhY2l0eSA9IDAuMDU7XG5cbiAgICAgICAgICAgIHZhciB2b2x1bWVTZXJpZXMgPSBjaGFydC5zZXJpZXMucHVzaChuZXcgYW00Y2hhcnRzLlN0ZXBMaW5lU2VyaWVzKCkpO1xuICAgICAgICAgICAgdm9sdW1lU2VyaWVzLmZpbGxPcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIHZvbHVtZVNlcmllcy5maWxsID0gc2VyaWVzMS5zdHJva2U7XG4gICAgICAgICAgICB2b2x1bWVTZXJpZXMuc3Ryb2tlID0gc2VyaWVzMS5zdHJva2U7XG4gICAgICAgICAgICB2b2x1bWVTZXJpZXMuZGF0YUZpZWxkcy5kYXRlWCA9IFwiZGF0ZVwiO1xuICAgICAgICAgICAgdm9sdW1lU2VyaWVzLmRhdGFGaWVsZHMudmFsdWVZID0gXCJxdWFudGl0eVwiO1xuICAgICAgICAgICAgdm9sdW1lU2VyaWVzLnlBeGlzID0gdmFsdWVBeGlzMjtcbiAgICAgICAgICAgIHZvbHVtZVNlcmllcy50b29sdGlwVGV4dCA9IFwiVm9sdW1lOiB7dmFsdWVZLnZhbHVlfVwiO1xuICAgICAgICAgICAgdm9sdW1lU2VyaWVzLm5hbWUgPSBcIlNlcmllcyAyXCI7XG4gICAgICAgICAgICAvLyB2b2x1bWUgc2hvdWxkIGJlIHN1bW1lZFxuICAgICAgICAgICAgdm9sdW1lU2VyaWVzLmdyb3VwRmllbGRzLnZhbHVlWSA9IFwic3VtXCI7XG4gICAgICAgICAgICB2b2x1bWVTZXJpZXMudG9vbHRpcC5sYWJlbC5maWxsID0gdm9sdW1lU2VyaWVzLnN0cm9rZTtcbiAgICAgICAgICAgIGNoYXJ0LmN1cnNvciA9IG5ldyBhbTRjaGFydHMuWFlDdXJzb3IoKTtcblxuICAgICAgICAgICAgdmFyIHNjcm9sbGJhclggPSBuZXcgYW00Y2hhcnRzLlhZQ2hhcnRTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIHNjcm9sbGJhclguc2VyaWVzLnB1c2goc2VyaWVzMSk7XG4gICAgICAgICAgICBzY3JvbGxiYXJYLm1hcmdpbkJvdHRvbSA9IDIwO1xuICAgICAgICAgICAgdmFyIHNiU2VyaWVzID0gc2Nyb2xsYmFyWC5zY3JvbGxiYXJDaGFydC5zZXJpZXMuZ2V0SW5kZXgoMCk7XG4gICAgICAgICAgICBzYlNlcmllcy5kYXRhRmllbGRzLnZhbHVlWVNob3cgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjaGFydC5zY3JvbGxiYXJYID0gc2Nyb2xsYmFyWDtcblxuICAgICAgICB9KTsgLy8gZW5kIGFtNGNvcmUucmVhZHkoKVxuICAgIH1cblxuICAgIHZhciBfZGVtbzMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEluaXQgQW1DaGFydCAtLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQgdGhlIG9mZmljaWFsIGRvY3VtZW50aWF0aW9uOiBodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vZG9jcy92NC9cbiAgICAgICAgYW00Y29yZS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vIFRoZW1lcyBiZWdpblxuICAgICAgICAgICAgYW00Y29yZS51c2VUaGVtZShhbTR0aGVtZXNfYW5pbWF0ZWQpO1xuICAgICAgICAgICAgLy8gVGhlbWVzIGVuZFxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgY2hhcnQgaW5zdGFuY2VcbiAgICAgICAgICAgIGNoYXJ0ID0gYW00Y29yZS5jcmVhdGUoXCJrdF9hbWNoYXJ0c18zXCIsIGFtNGNoYXJ0cy5YWUNoYXJ0KTtcblxuICAgICAgICAgICAgLy8gQWRkIGRhdGFcbiAgICAgICAgICAgIGNoYXJ0LmRhdGEgPSBbe1xuICAgICAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMTFcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDYwMDAwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMTJcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDkwMDAwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMTNcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDE4MDAwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMTRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDYwMDAwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMTVcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDM1MDAwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMTZcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDYwMDAwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwieWVhclwiOiBcIjIwMTdcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDY3MDAwMFxuICAgICAgICAgICAgfV07XG5cbiAgICAgICAgICAgIC8vIFBvcHVsYXRlIGRhdGFcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgKGNoYXJ0LmRhdGEubGVuZ3RoIC0gMSk7IGkrKykge1xuICAgICAgICAgICAgICAgIGNoYXJ0LmRhdGFbaV0udmFsdWVOZXh0ID0gY2hhcnQuZGF0YVtpICsgMV0udmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBheGVzXG4gICAgICAgICAgICB2YXIgY2F0ZWdvcnlBeGlzID0gY2hhcnQueEF4ZXMucHVzaChuZXcgYW00Y2hhcnRzLkNhdGVnb3J5QXhpcygpKTtcbiAgICAgICAgICAgIGNhdGVnb3J5QXhpcy5kYXRhRmllbGRzLmNhdGVnb3J5ID0gXCJ5ZWFyXCI7XG4gICAgICAgICAgICBjYXRlZ29yeUF4aXMucmVuZGVyZXIuZ3JpZC50ZW1wbGF0ZS5sb2NhdGlvbiA9IDA7XG4gICAgICAgICAgICBjYXRlZ29yeUF4aXMucmVuZGVyZXIubWluR3JpZERpc3RhbmNlID0gMzA7XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZUF4aXMgPSBjaGFydC55QXhlcy5wdXNoKG5ldyBhbTRjaGFydHMuVmFsdWVBeGlzKCkpO1xuICAgICAgICAgICAgdmFsdWVBeGlzLm1pbiA9IDA7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBzZXJpZXNcbiAgICAgICAgICAgIHZhciBzZXJpZXMgPSBjaGFydC5zZXJpZXMucHVzaChuZXcgYW00Y2hhcnRzLkNvbHVtblNlcmllcygpKTtcbiAgICAgICAgICAgIHNlcmllcy5kYXRhRmllbGRzLnZhbHVlWSA9IFwidmFsdWVcIjtcbiAgICAgICAgICAgIHNlcmllcy5kYXRhRmllbGRzLmNhdGVnb3J5WCA9IFwieWVhclwiO1xuXG4gICAgICAgICAgICAvLyBBZGQgc2VyaWVzIGZvciBzaG93aW5nIHZhcmlhbmNlIGFycm93c1xuICAgICAgICAgICAgdmFyIHNlcmllczIgPSBjaGFydC5zZXJpZXMucHVzaChuZXcgYW00Y2hhcnRzLkNvbHVtblNlcmllcygpKTtcbiAgICAgICAgICAgIHNlcmllczIuZGF0YUZpZWxkcy52YWx1ZVkgPSBcInZhbHVlTmV4dFwiO1xuICAgICAgICAgICAgc2VyaWVzMi5kYXRhRmllbGRzLm9wZW5WYWx1ZVkgPSBcInZhbHVlXCI7XG4gICAgICAgICAgICBzZXJpZXMyLmRhdGFGaWVsZHMuY2F0ZWdvcnlYID0gXCJ5ZWFyXCI7XG4gICAgICAgICAgICBzZXJpZXMyLmNvbHVtbnMudGVtcGxhdGUud2lkdGggPSAxO1xuICAgICAgICAgICAgc2VyaWVzMi5maWxsID0gYW00Y29yZS5jb2xvcihcIiM1NTVcIik7XG4gICAgICAgICAgICBzZXJpZXMyLnN0cm9rZSA9IGFtNGNvcmUuY29sb3IoXCIjNTU1XCIpO1xuXG4gICAgICAgICAgICAvLyBBZGQgYSB0cmlhbmdsZSBmb3IgYXJyb3cgdGlwXG4gICAgICAgICAgICB2YXIgYXJyb3cgPSBzZXJpZXMyLmJ1bGxldHMucHVzaChuZXcgYW00Y29yZS5UcmlhbmdsZSk7XG4gICAgICAgICAgICBhcnJvdy53aWR0aCA9IDEwO1xuICAgICAgICAgICAgYXJyb3cuaGVpZ2h0ID0gMTA7XG4gICAgICAgICAgICBhcnJvdy5ob3Jpem9udGFsQ2VudGVyID0gXCJtaWRkbGVcIjtcbiAgICAgICAgICAgIGFycm93LnZlcnRpY2FsQ2VudGVyID0gXCJ0b3BcIjtcbiAgICAgICAgICAgIGFycm93LmR5ID0gLTE7XG5cbiAgICAgICAgICAgIC8vIFNldCB1cCBhIHJvdGF0aW9uIGFkYXB0ZXIgd2hpY2ggd291bGQgcm90YXRlIHRoZSB0cmlhbmdsZSBpZiBpdHMgYSBuZWdhdGl2ZSBjaGFuZ2VcbiAgICAgICAgICAgIGFycm93LmFkYXB0ZXIuYWRkKFwicm90YXRpb25cIiwgZnVuY3Rpb24gKHJvdGF0aW9uLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFyaWFuY2VQZXJjZW50KHRhcmdldC5kYXRhSXRlbSkgPCAwID8gMTgwIDogcm90YXRpb247XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gU2V0IHVwIGEgcm90YXRpb24gYWRhcHRlciB3aGljaCBhZGp1c3RzIFkgcG9zaXRpb25cbiAgICAgICAgICAgIGFycm93LmFkYXB0ZXIuYWRkKFwiZHlcIiwgZnVuY3Rpb24gKGR5LCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFyaWFuY2VQZXJjZW50KHRhcmdldC5kYXRhSXRlbSkgPCAwID8gMSA6IGR5O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBhIGxhYmVsXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBzZXJpZXMyLmJ1bGxldHMucHVzaChuZXcgYW00Y29yZS5MYWJlbCk7XG4gICAgICAgICAgICBsYWJlbC5wYWRkaW5nKDEwLCAxMCwgMTAsIDEwKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHQgPSBcIlwiO1xuICAgICAgICAgICAgbGFiZWwuZmlsbCA9IGFtNGNvcmUuY29sb3IoXCIjMGMwXCIpO1xuICAgICAgICAgICAgbGFiZWwuc3Ryb2tlV2lkdGggPSAwO1xuICAgICAgICAgICAgbGFiZWwuaG9yaXpvbnRhbENlbnRlciA9IFwibWlkZGxlXCI7XG4gICAgICAgICAgICBsYWJlbC52ZXJ0aWNhbENlbnRlciA9IFwiYm90dG9tXCI7XG4gICAgICAgICAgICBsYWJlbC5mb250V2VpZ2h0ID0gXCJib2xkZXJcIjtcblxuICAgICAgICAgICAgLy8gQWRhcHRlciBmb3IgbGFiZWwgdGV4dCB3aGljaCBjYWxjdWxhdGVzIGNoYW5nZSBpbiBwZXJjZW50XG4gICAgICAgICAgICBsYWJlbC5hZGFwdGVyLmFkZChcInRleHRPdXRwdXRcIiwgZnVuY3Rpb24gKHRleHQsIHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50ID0gZ2V0VmFyaWFuY2VQZXJjZW50KHRhcmdldC5kYXRhSXRlbSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcmNlbnQgPyBwZXJjZW50ICsgXCIlXCIgOiB0ZXh0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEFkYXB0ZXIgd2hpY2ggc2hpZnRzIHRoZSBsYWJlbCBpZiBpdCdzIGJlbG93IHRoZSB2YXJpYW5jZSBjb2x1bW5cbiAgICAgICAgICAgIGxhYmVsLmFkYXB0ZXIuYWRkKFwidmVydGljYWxDZW50ZXJcIiwgZnVuY3Rpb24gKGNlbnRlciwgdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFZhcmlhbmNlUGVyY2VudCh0YXJnZXQuZGF0YUl0ZW0pIDwgMCA/IFwidG9wXCIgOiBjZW50ZXI7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQWRhcHRlciB3aGljaCBjaGFuZ2VzIGNvbG9yIG9mIGxhYmVsIHRvIHJlZFxuICAgICAgICAgICAgbGFiZWwuYWRhcHRlci5hZGQoXCJmaWxsXCIsIGZ1bmN0aW9uIChmaWxsLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFyaWFuY2VQZXJjZW50KHRhcmdldC5kYXRhSXRlbSkgPCAwID8gYW00Y29yZS5jb2xvcihcIiNjMDBcIikgOiBmaWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZhcmlhbmNlUGVyY2VudChkYXRhSXRlbSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhSXRlbS52YWx1ZVk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGVuVmFsdWUgPSBkYXRhSXRlbS5vcGVuVmFsdWVZO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhbmdlID0gdmFsdWUgLSBvcGVuVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGNoYW5nZSAvIG9wZW5WYWx1ZSAqIDEwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pOyAvLyBlbmQgYW00Y29yZS5yZWFkeSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfZGVtbzEoKTtcbiAgICAgICAgICAgIF9kZW1vMigpO1xuICAgICAgICAgICAgX2RlbW8zKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RHZW5lcmFsQW1DaGFydHNNYXBzLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUR2VuZXJhbEFtQ2hhcnRzTWFwcyIsImNoYXJ0IiwiX2RlbW8xIiwiYW00Y29yZSIsInJlYWR5IiwidXNlVGhlbWUiLCJhbTR0aGVtZXNfYW5pbWF0ZWQiLCJjcmVhdGUiLCJhbTRjaGFydHMiLCJYWUNoYXJ0IiwicGFkZGluZyIsImRhdGFTb3VyY2UiLCJ1cmwiLCJwYXJzZXIiLCJDU1ZQYXJzZXIiLCJvcHRpb25zIiwidXNlQ29sdW1uTmFtZXMiLCJyZXZlcnNlIiwibGVmdEF4ZXNDb250YWluZXIiLCJsYXlvdXQiLCJkYXRlQXhpcyIsInhBeGVzIiwicHVzaCIsIkRhdGVBeGlzIiwicmVuZGVyZXIiLCJncmlkIiwidGVtcGxhdGUiLCJsb2NhdGlvbiIsInRpY2tzIiwibGVuZ3RoIiwic3Ryb2tlT3BhY2l0eSIsImRpc2FibGVkIiwibWluTGFiZWxQb3NpdGlvbiIsIm1heExhYmVsUG9zaXRpb24iLCJrZWVwU2VsZWN0aW9uIiwibWluSGVpZ2h0IiwiZ3JvdXBEYXRhIiwibWluWm9vbUNvdW50IiwidmFsdWVBeGlzIiwieUF4ZXMiLCJWYWx1ZUF4aXMiLCJ0b29sdGlwIiwiekluZGV4IiwiYmFzZUdyaWQiLCJoZWlnaHQiLCJwZXJjZW50IiwiZ3JpZENvbnRhaW5lciIsImJhY2tncm91bmQiLCJmaWxsIiwiY29sb3IiLCJmaWxsT3BhY2l0eSIsImluc2lkZSIsImxhYmVscyIsInZlcnRpY2FsQ2VudGVyIiwiZm9udFNpemUiLCJzZXJpZXMiLCJMaW5lU2VyaWVzIiwiZGF0YUZpZWxkcyIsImRhdGVYIiwidmFsdWVZIiwidG9vbHRpcFRleHQiLCJuYW1lIiwiZGVmYXVsdFN0YXRlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidmFsdWVBeGlzMiIsIm1hcmdpblRvcCIsInNlcmllczIiLCJDb2x1bW5TZXJpZXMiLCJ5QXhpcyIsImdyb3VwRmllbGRzIiwiY3Vyc29yIiwiWFlDdXJzb3IiLCJzY3JvbGxiYXJYIiwiWFlDaGFydFNjcm9sbGJhciIsIm1hcmdpbkJvdHRvbSIsInNjcm9sbGJhckNoYXJ0IiwiZ2V0SW5kZXgiLCJ1bmRlZmluZWQiLCJfZGVtbzIiLCJjb2xvcnMiLCJzdGVwIiwiZGF0YSIsInByaWNlMSIsInByaWNlMiIsInByaWNlMyIsInF1YW50aXR5IiwiaSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImRhdGUiLCJEYXRlIiwic2VyaWVzMSIsInZhbHVlWVNob3ciLCJnZXRGaWxsRnJvbU9iamVjdCIsImdldFN0cm9rZUZyb21PYmplY3QiLCJzdHJva2VXaWR0aCIsImxhYmVsIiwic3Ryb2tlIiwic2VyaWVzMyIsInZvbHVtZVNlcmllcyIsIlN0ZXBMaW5lU2VyaWVzIiwic2JTZXJpZXMiLCJfZGVtbzMiLCJ2YWx1ZU5leHQiLCJ2YWx1ZSIsImNhdGVnb3J5QXhpcyIsIkNhdGVnb3J5QXhpcyIsImNhdGVnb3J5IiwibWluR3JpZERpc3RhbmNlIiwibWluIiwiY2F0ZWdvcnlYIiwib3BlblZhbHVlWSIsImNvbHVtbnMiLCJ3aWR0aCIsImFycm93IiwiYnVsbGV0cyIsIlRyaWFuZ2xlIiwiaG9yaXpvbnRhbENlbnRlciIsImR5IiwiYWRhcHRlciIsImFkZCIsInJvdGF0aW9uIiwidGFyZ2V0IiwiZ2V0VmFyaWFuY2VQZXJjZW50IiwiZGF0YUl0ZW0iLCJMYWJlbCIsInRleHQiLCJmb250V2VpZ2h0IiwiY2VudGVyIiwib3BlblZhbHVlIiwiY2hhbmdlIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/amcharts/stock-charts.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/amcharts/stock-charts.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=stock-charts.js.map