/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!********************************************************************!*\
  !*** ../src/js/custom/documentation/charts/flotcharts/tracking.js ***!
  \********************************************************************/


// Class definition
var KTFlotDemoTracking = function () {
    // Private functions
    var exampleTracking = function () {
        var sin = [],
			cos = [];
		for (var i = 0; i < 14; i += 0.1) {
			sin.push([i, Math.sin(i)]);
			cos.push([i, Math.cos(i)]);
		}

		var plot = $.plot($("#kt_docs_flot_tracking"), [{
			data: sin,
			label: "sin(x) = -0.00",
			lines: {
				lineWidth: 1,
			},
			shadowSize: 0
		}, {
			data: cos,
			label: "cos(x) = -0.00",
			lines: {
				lineWidth: 1,
			},
			shadowSize: 0
		}], {
			colors: [KTUtil.getCssVariableValue('--bs-active-primary'), KTUtil.getCssVariableValue('--bs-active-warning')],
			series: {
				lines: {
					show: true
				}
			},
			crosshair: {
				mode: "x"
			},
			grid: {
				hoverable: true,
				autoHighlight: false,
				tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
				borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),
				borderWidth: 1
			},
			yaxis: {
				min: -1.2,
				max: 1.2
			}
		});

		var legends = $("#kt_docs_flot_tracking .legendLabel");
		legends.each(function() {
			// fix the widths so they don't jump around
			$(this).css('width', $(this).width());
		});

		var updateLegendTimeout = null;
		var latestPosition = null;

		function updateLegend() {
			updateLegendTimeout = null;

			var pos = latestPosition;

			var axes = plot.getAxes();
			if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max || pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) return;

			var i, j, dataset = plot.getData();
			for (i = 0; i < dataset.length; ++i) {
				var series = dataset[i];

				// find the nearest points, x-wise
				for (j = 0; j < series.data.length; ++j)
					if (series.data[j][0] > pos.x) break;

				// now interpolate
				var y, p1 = series.data[j - 1],
					p2 = series.data[j];

				if (p1 == null) y = p2[1];
				else if (p2 == null) y = p1[1];
				else y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);

				legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
			}
		}

		$("#kt_docs_flot_tracking").bind("plothover", function(event, pos, item) {
			latestPosition = pos;
			if (!updateLegendTimeout) updateLegendTimeout = setTimeout(updateLegend, 50);
		});
    }

    return {
        // Public Functions
        init: function () {
            exampleTracking();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFlotDemoTracking.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/flotcharts/tracking.js":
/*!*****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/flotcharts/tracking.js ***!
  \*****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFlotDemoTracking = function () {\n  // Private functions\n  var exampleTracking = function exampleTracking() {\n    var sin = [],\n        cos = [];\n\n    for (var i = 0; i < 14; i += 0.1) {\n      sin.push([i, Math.sin(i)]);\n      cos.push([i, Math.cos(i)]);\n    }\n\n    var plot = $.plot($(\"#kt_docs_flot_tracking\"), [{\n      data: sin,\n      label: \"sin(x) = -0.00\",\n      lines: {\n        lineWidth: 1\n      },\n      shadowSize: 0\n    }, {\n      data: cos,\n      label: \"cos(x) = -0.00\",\n      lines: {\n        lineWidth: 1\n      },\n      shadowSize: 0\n    }], {\n      colors: [KTUtil.getCssVariableValue('--bs-active-primary'), KTUtil.getCssVariableValue('--bs-active-warning')],\n      series: {\n        lines: {\n          show: true\n        }\n      },\n      crosshair: {\n        mode: \"x\"\n      },\n      grid: {\n        hoverable: true,\n        autoHighlight: false,\n        tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderWidth: 1\n      },\n      yaxis: {\n        min: -1.2,\n        max: 1.2\n      }\n    });\n    var legends = $(\"#kt_docs_flot_tracking .legendLabel\");\n    legends.each(function () {\n      // fix the widths so they don't jump around\n      $(this).css('width', $(this).width());\n    });\n    var updateLegendTimeout = null;\n    var latestPosition = null;\n\n    function updateLegend() {\n      updateLegendTimeout = null;\n      var pos = latestPosition;\n      var axes = plot.getAxes();\n      if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max || pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) return;\n      var i,\n          j,\n          dataset = plot.getData();\n\n      for (i = 0; i < dataset.length; ++i) {\n        var series = dataset[i]; // find the nearest points, x-wise\n\n        for (j = 0; j < series.data.length; ++j) {\n          if (series.data[j][0] > pos.x) break;\n        } // now interpolate\n\n\n        var y,\n            p1 = series.data[j - 1],\n            p2 = series.data[j];\n        if (p1 == null) y = p2[1];else if (p2 == null) y = p1[1];else y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);\n        legends.eq(i).text(series.label.replace(/=.*/, \"= \" + y.toFixed(2)));\n      }\n    }\n\n    $(\"#kt_docs_flot_tracking\").bind(\"plothover\", function (event, pos, item) {\n      latestPosition = pos;\n      if (!updateLegendTimeout) updateLegendTimeout = setTimeout(updateLegend, 50);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleTracking();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoTracking.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL3RyYWNraW5nLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGtCQUFrQixHQUFHLFlBQVk7QUFDakM7QUFDQSxNQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVk7QUFDOUIsUUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFBQSxRQUNMQyxHQUFHLEdBQUcsRUFERDs7QUFFTixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsSUFBSSxHQUE3QixFQUFrQztBQUNqQ0YsTUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVMsQ0FBQ0QsQ0FBRCxFQUFJRSxJQUFJLENBQUNKLEdBQUwsQ0FBU0UsQ0FBVCxDQUFKLENBQVQ7QUFDQUQsTUFBQUEsR0FBRyxDQUFDRSxJQUFKLENBQVMsQ0FBQ0QsQ0FBRCxFQUFJRSxJQUFJLENBQUNILEdBQUwsQ0FBU0MsQ0FBVCxDQUFKLENBQVQ7QUFDQTs7QUFFRCxRQUFJRyxJQUFJLEdBQUdDLENBQUMsQ0FBQ0QsSUFBRixDQUFPQyxDQUFDLENBQUMsd0JBQUQsQ0FBUixFQUFvQyxDQUFDO0FBQy9DQyxNQUFBQSxJQUFJLEVBQUVQLEdBRHlDO0FBRS9DUSxNQUFBQSxLQUFLLEVBQUUsZ0JBRndDO0FBRy9DQyxNQUFBQSxLQUFLLEVBQUU7QUFDTkMsUUFBQUEsU0FBUyxFQUFFO0FBREwsT0FId0M7QUFNL0NDLE1BQUFBLFVBQVUsRUFBRTtBQU5tQyxLQUFELEVBTzVDO0FBQ0ZKLE1BQUFBLElBQUksRUFBRU4sR0FESjtBQUVGTyxNQUFBQSxLQUFLLEVBQUUsZ0JBRkw7QUFHRkMsTUFBQUEsS0FBSyxFQUFFO0FBQ05DLFFBQUFBLFNBQVMsRUFBRTtBQURMLE9BSEw7QUFNRkMsTUFBQUEsVUFBVSxFQUFFO0FBTlYsS0FQNEMsQ0FBcEMsRUFjUDtBQUNIQyxNQUFB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c291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2Zsb3RjaGFydHMvdHJhY2tpbmcuanM/ODc2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURmxvdERlbW9UcmFja2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlVHJhY2tpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzaW4gPSBbXSxcblx0XHRcdGNvcyA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTQ7IGkgKz0gMC4xKSB7XG5cdFx0XHRzaW4ucHVzaChbaSwgTWF0aC5zaW4oaSldKTtcblx0XHRcdGNvcy5wdXNoKFtpLCBNYXRoLmNvcyhpKV0pO1xuXHRcdH1cblxuXHRcdHZhciBwbG90ID0gJC5wbG90KCQoXCIja3RfZG9jc19mbG90X3RyYWNraW5nXCIpLCBbe1xuXHRcdFx0ZGF0YTogc2luLFxuXHRcdFx0bGFiZWw6IFwic2luKHgpID0gLTAuMDBcIixcblx0XHRcdGxpbmVzOiB7XG5cdFx0XHRcdGxpbmVXaWR0aDogMSxcblx0XHRcdH0sXG5cdFx0XHRzaGFkb3dTaXplOiAwXG5cdFx0fSwge1xuXHRcdFx0ZGF0YTogY29zLFxuXHRcdFx0bGFiZWw6IFwiY29zKHgpID0gLTAuMDBcIixcblx0XHRcdGxpbmVzOiB7XG5cdFx0XHRcdGxpbmVXaWR0aDogMSxcblx0XHRcdH0sXG5cdFx0XHRzaGFkb3dTaXplOiAwXG5cdFx0fV0sIHtcblx0XHRcdGNvbG9yczogW0tUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1wcmltYXJ5JyksIEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS13YXJuaW5nJyldLFxuXHRcdFx0c2VyaWVzOiB7XG5cdFx0XHRcdGxpbmVzOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y3Jvc3NoYWlyOiB7XG5cdFx0XHRcdG1vZGU6IFwieFwiXG5cdFx0XHR9LFxuXHRcdFx0Z3JpZDoge1xuXHRcdFx0XHRob3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdGF1dG9IaWdobGlnaHQ6IGZhbHNlLFxuXHRcdFx0XHR0aWNrQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhcmsnKSxcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhcmsnKSxcblx0XHRcdFx0Ym9yZGVyV2lkdGg6IDFcblx0XHRcdH0sXG5cdFx0XHR5YXhpczoge1xuXHRcdFx0XHRtaW46IC0xLjIsXG5cdFx0XHRcdG1heDogMS4yXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR2YXIgbGVnZW5kcyA9ICQoXCIja3RfZG9jc19mbG90X3RyYWNraW5nIC5sZWdlbmRMYWJlbFwiKTtcblx0XHRsZWdlbmRzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBmaXggdGhlIHdpZHRocyBzbyB0aGV5IGRvbid0IGp1bXAgYXJvdW5kXG5cdFx0XHQkKHRoaXMpLmNzcygnd2lkdGgnLCAkKHRoaXMpLndpZHRoKCkpO1xuXHRcdH0pO1xuXG5cdFx0dmFyIHVwZGF0ZUxlZ2VuZFRpbWVvdXQgPSBudWxsO1xuXHRcdHZhciBsYXRlc3RQb3NpdGlvbiA9IG51bGw7XG5cblx0XHRmdW5jdGlvbiB1cGRhdGVMZWdlbmQoKSB7XG5cdFx0XHR1cGRhdGVMZWdlbmRUaW1lb3V0ID0gbnVsbDtcblxuXHRcdFx0dmFyIHBvcyA9IGxhdGVzdFBvc2l0aW9uO1xuXG5cdFx0XHR2YXIgYXhlcyA9IHBsb3QuZ2V0QXhlcygpO1xuXHRcdFx0aWYgKHBvcy54IDwgYXhlcy54YXhpcy5taW4gfHwgcG9zLnggPiBheGVzLnhheGlzLm1heCB8fCBwb3MueSA8IGF4ZXMueWF4aXMubWluIHx8IHBvcy55ID4gYXhlcy55YXhpcy5tYXgpIHJldHVybjtcblxuXHRcdFx0dmFyIGksIGosIGRhdGFzZXQgPSBwbG90LmdldERhdGEoKTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhc2V0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdHZhciBzZXJpZXMgPSBkYXRhc2V0W2ldO1xuXG5cdFx0XHRcdC8vIGZpbmQgdGhlIG5lYXJlc3QgcG9pbnRzLCB4LXdpc2Vcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IHNlcmllcy5kYXRhLmxlbmd0aDsgKytqKVxuXHRcdFx0XHRcdGlmIChzZXJpZXMuZGF0YVtqXVswXSA+IHBvcy54KSBicmVhaztcblxuXHRcdFx0XHQvLyBub3cgaW50ZXJwb2xhdGVcblx0XHRcdFx0dmFyIHksIHAxID0gc2VyaWVzLmRhdGFbaiAtIDFdLFxuXHRcdFx0XHRcdHAyID0gc2VyaWVzLmRhdGFbal07XG5cblx0XHRcdFx0aWYgKHAxID09IG51bGwpIHkgPSBwMlsxXTtcblx0XHRcdFx0ZWxzZSBpZiAocDIgPT0gbnVsbCkgeSA9IHAxWzFdO1xuXHRcdFx0XHRlbHNlIHkgPSBwMVsxXSArIChwMlsxXSAtIHAxWzFdKSAqIChwb3MueCAtIHAxWzBdKSAvIChwMlswXSAtIHAxWzBdKTtcblxuXHRcdFx0XHRsZWdlbmRzLmVxKGkpLnRleHQoc2VyaWVzLmxhYmVsLnJlcGxhY2UoLz0uKi8sIFwiPSBcIiArIHkudG9GaXhlZCgyKSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCQoXCIja3RfZG9jc19mbG90X3RyYWNraW5nXCIpLmJpbmQoXCJwbG90aG92ZXJcIiwgZnVuY3Rpb24oZXZlbnQsIHBvcywgaXRlbSkge1xuXHRcdFx0bGF0ZXN0UG9zaXRpb24gPSBwb3M7XG5cdFx0XHRpZiAoIXVwZGF0ZUxlZ2VuZFRpbWVvdXQpIHVwZGF0ZUxlZ2VuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KHVwZGF0ZUxlZ2VuZCwgNTApO1xuXHRcdH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZXhhbXBsZVRyYWNraW5nKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RGbG90RGVtb1RyYWNraW5nLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktURmxvdERlbW9UcmFja2luZyIsImV4YW1wbGVUcmFja2luZyIsInNpbiIsImNvcyIsImkiLCJwdXNoIiwiTWF0aCIsInBsb3QiLCIkIiwiZGF0YSIsImxhYmVsIiwibGluZXMiLCJsaW5lV2lkdGgiLCJzaGFkb3dTaXplIiwiY29sb3JzIiwiS1RVdGlsIiwiZ2V0Q3NzVmFyaWFibGVWYWx1ZSIsInNlcmllcyIsInNob3ciLCJjcm9zc2hhaXIiLCJtb2RlIiwiZ3JpZCIsImhvdmVyYWJsZSIsImF1dG9IaWdobGlnaHQiLCJ0aWNrQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwieWF4aXMiLCJtaW4iLCJtYXgiLCJsZWdlbmRzIiwiZWFjaCIsImNzcyIsIndpZHRoIiwidXBkYXRlTGVnZW5kVGltZW91dCIsImxhdGVzdFBvc2l0aW9uIiwidXBkYXRlTGVnZW5kIiwicG9zIiwiYXhlcyIsImdldEF4ZXMiLCJ4IiwieGF4aXMiLCJ5IiwiaiIsImRhdGFzZXQiLCJnZXREYXRhIiwibGVuZ3RoIiwicDEiLCJwMiIsImVxIiwidGV4dCIsInJlcGxhY2UiLCJ0b0ZpeGVkIiwiYmluZCIsImV2ZW50IiwiaXRlbSIsInNldFRpbWVvdXQiLCJpbml0Iiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/flotcharts/tracking.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/flotcharts/tracking.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=tracking.js.map