/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*******************************************************************!*\
  !*** ../src/js/custom/documentation/charts/flotcharts/dynamic.js ***!
  \*******************************************************************/


// Class definition
var KTFlotDemoDynamic = function () {
    // Private functions
    var exampleDynamic = function () {
        var data = [];
		var totalPoints = 250;

		// random data generator for plot charts

		function getRandomData() {
			if (data.length > 0) data = data.slice(1);
			// do a random walk
			while (data.length < totalPoints) {
				var prev = data.length > 0 ? data[data.length - 1] : 50;
				var y = prev + Math.random() * 10 - 5;
				if (y < 0) y = 0;
				if (y > 100) y = 100;
				data.push(y);
			}
			// zip the generated y values with the x values
			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]]);
			}

			return res;
		}

		//server load
		var options = {
			colors: [KTUtil.getCssVariableValue('--bs-active-danger'), KTUtil.getCssVariableValue('--bs-active-primary')],
			series: {
				shadowSize: 1
			},
			lines: {
				show: true,
				lineWidth: 0.5,
				fill: true,
				fillColor: {
					colors: [{
						opacity: 0.1
					}, {
						opacity: 1
					}]
				}
			},
			yaxis: {
				min: 0,
				max: 100,
				tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
				tickFormatter: function(v) {
					return v + "%";
				}
			},
			xaxis: {
				show: false,
			},
			colors: [KTUtil.getCssVariableValue('--bs-active-primary')],
			grid: {
				tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
				borderWidth: 0,
			}
		};

		var updateInterval = 30;
		var plot = $.plot($("#kt_docs_flot_dynamic"), [getRandomData()], options);

		function update() {
			plot.setData([getRandomData()]);
			plot.draw();
			setTimeout(update, updateInterval);
		}

		update();
    }

    return {
        // Public Functions
        init: function () {
            exampleDynamic();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFlotDemoDynamic.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/flotcharts/dynamic.js":
/*!****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/flotcharts/dynamic.js ***!
  \****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar KTFlotDemoDynamic = function () {\n  // Private functions\n  var exampleDynamic = function exampleDynamic() {\n    var _options;\n\n    var data = [];\n    var totalPoints = 250; // random data generator for plot charts\n\n    function getRandomData() {\n      if (data.length > 0) data = data.slice(1); // do a random walk\n\n      while (data.length < totalPoints) {\n        var prev = data.length > 0 ? data[data.length - 1] : 50;\n        var y = prev + Math.random() * 10 - 5;\n        if (y < 0) y = 0;\n        if (y > 100) y = 100;\n        data.push(y);\n      } // zip the generated y values with the x values\n\n\n      var res = [];\n\n      for (var i = 0; i < data.length; ++i) {\n        res.push([i, data[i]]);\n      }\n\n      return res;\n    } //server load\n\n\n    var options = (_options = {\n      colors: [KTUtil.getCssVariableValue('--bs-active-danger'), KTUtil.getCssVariableValue('--bs-active-primary')],\n      series: {\n        shadowSize: 1\n      },\n      lines: {\n        show: true,\n        lineWidth: 0.5,\n        fill: true,\n        fillColor: {\n          colors: [{\n            opacity: 0.1\n          }, {\n            opacity: 1\n          }]\n        }\n      },\n      yaxis: {\n        min: 0,\n        max: 100,\n        tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        tickFormatter: function tickFormatter(v) {\n          return v + \"%\";\n        }\n      },\n      xaxis: {\n        show: false\n      }\n    }, _defineProperty(_options, \"colors\", [KTUtil.getCssVariableValue('--bs-active-primary')]), _defineProperty(_options, \"grid\", {\n      tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n      borderWidth: 0\n    }), _options);\n    var updateInterval = 30;\n    var plot = $.plot($(\"#kt_docs_flot_dynamic\"), [getRandomData()], options);\n\n    function update() {\n      plot.setData([getRandomData()]);\n      plot.draw();\n      setTimeout(update, updateInterval);\n    }\n\n    update();\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleDynamic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoDynamic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL2R5bmFtaWMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7Ozs7QUFDQSxJQUFJQSxpQkFBaUIsR0FBRyxZQUFZO0FBQ2hDO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFZO0FBQUE7O0FBQzdCLFFBQUlDLElBQUksR0FBRyxFQUFYO0FBQ04sUUFBSUMsV0FBVyxHQUFHLEdBQWxCLENBRm1DLENBSW5DOztBQUVBLGFBQVNDLGFBQVQsR0FBeUI7QUFDeEIsVUFBSUYsSUFBSSxDQUFDRyxNQUFMLEdBQWMsQ0FBbEIsRUFBcUJILElBQUksR0FBR0EsSUFBSSxDQUFDSSxLQUFMLENBQVcsQ0FBWCxDQUFQLENBREcsQ0FFeEI7O0FBQ0EsYUFBT0osSUFBSSxDQUFDRyxNQUFMLEdBQWNGLFdBQXJCLEVBQWtDO0FBQ2pDLFlBQUlJLElBQUksR0FBR0wsSUFBSSxDQUFDRyxNQUFMLEdBQWMsQ0FBZCxHQUFrQkgsSUFBSSxDQUFDQSxJQUFJLENBQUNHLE1BQUwsR0FBYyxDQUFmLENBQXRCLEdBQTBDLEVBQXJEO0FBQ0EsWUFBSUcsQ0FBQyxHQUFHRCxJQUFJLEdBQUdFLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUF2QixHQUE0QixDQUFwQztBQUNBLFlBQUlGLENBQUMsR0FBRyxDQUFSLEVBQVdBLENBQUMsR0FBRyxDQUFKO0FBQ1gsWUFBSUEsQ0FBQyxHQUFHLEdBQVIsRUFBYUEsQ0FBQyxHQUFHLEdBQUo7QUFDYk4sUUFBQUEsSUFBSSxDQUFDUyxJQUFMLENBQVVILENBQVY7QUFDQSxPQVR1QixDQVV4Qjs7O0FBQ0EsVUFBSUksR0FBRyxHQUFHLEVBQVY7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCxJQUFJLENBQUNHLE1BQXpCLEVBQWlDLEVBQUVRLENBQW5DLEVBQXNDO0FBQ3JDRCxRQUFBQSxHQUFHLENBQUNELElBQUosQ0FBUyxDQUFDRSxDQUFELEVBQUlYLElBQUksQ0FBQ1csQ0FBRCxDQUFSLENBQVQ7QUFDQTs7QUFFRCxhQUFPRCxHQUFQO0FBQ0EsS0F2QmtDLENBeUJuQzs7O0FBQ0EsUUFBSUUsT0FBTztBQUNWQyxNQUFBQSxNQUFNLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixvQkFBM0IsQ0FBRCxFQUFtREQsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixxQkFBM0IsQ0FBbkQsQ0FERTtBQUVWQyxNQUFBQSxNQUFNLEVBQUU7QUFDUEMsUUFBQUEsVUFBVSxFQUFFO0FBREwsT0FGRTtBQUtWQyxNQUFBQSxLQUFLLEVBQUU7QUFDTkMsUUFBQUEsSUFBSSxFQUFFLElBREE7QUFFTkMsUUFBQUEsU0FBUyxFQUFFLEdBRkw7QUFHTkMsUUFBQUEsSUFBSSxFQUFFLElBSEE7QUFJTkMsUUFBQUEsU0FBUyxFQUFFO0FBQ1ZULFVBQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ1JVLFlBQUFBLE9BQU8sRUFBRTtBQURELFdBQUQsRUFFTDtBQUNGQSxZQUFBQSxPQUFPLEVBQUU7QUFEUCxXQUZLO0FBREU7QUFKTCxPQUxHO0FBaUJWQyxNQUFBQSxLQUFLLEVBQUU7QUFDTkMsUUFBQUEsR0FBRyxFQUFFLENBREM7QUFFTkMsUUFBQUEsR0FBRyxFQUFFLEdBRkM7QUFHTkMsUUFBQUEsU0FBUyxFQUFFYixNQUFNLENBQUNDLG1CQUFQLENBQTJCLGlCQUEzQixDQUhMO0FBSU5hLFFBQUFBLGFBQWEsRUFBRSx1QkFBU0MsQ0FBVCxFQUFZO0FBQzFCLGlCQUFPQSxDQUFDLEdBQUcsR0FBWDtBQUNBO0FBTkssT0FqQkc7QUF5QlZDLE1BQUFBLEtBQUssRUFBRTtBQUNOWCxRQUFBQSxJQUFJLEVBQUU7QUFEQTtBQXpCRywyQ0E0QkYsQ0FBQ0wsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixxQkFBM0IsQ0FBRCxDQTVCRSxxQ0E2Qko7QUFDTFksTUFBQUEsU0FBUyxFQUFFYixNQUFNLENBQUNDLG1CQUFQLENBQTJCLGlCQUEzQixDQUROO0FBRUxnQixNQUFBQSxXQUFXLEVBQUU7QUFGUixLQTdCSSxZQUFYO0FBbUNBLFFBQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBLFFBQUlDLElBQUksR0FBR0MsQ0FBQyxDQUFDRCxJQUFGLENBQU9DLENBQUMsQ0FBQyx1QkFBRCxDQUFSLEVBQW1DLENBQUNoQyxhQUFhLEVBQWQsQ0FBbkMsRUFBc0RVLE9BQXRELENBQVg7O0FBRUEsYUFBU3VCLE1BQVQsR0FBa0I7QUFDakJGLE1BQUFBLElBQUksQ0FBQ0csT0FBTCxDQUFhLENBQUNsQyxhQUFhLEVBQWQsQ0FBYjtBQUNBK0IsTUFBQUEsSUFBSSxDQUFDSSxJQUFMO0FBQ0FDLE1BQUFBLFVBQVUsQ0FBQ0gsTUFBRCxFQUFTSCxjQUFULENBQVY7QUFDQTs7QUFFREcsSUFBQUEsTUFBTTtBQUNILEdBdkVEOztBQXlFQSxTQUFPO0FBQ0g7QUFDQUksSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2R4QyxNQUFBQSxjQUFjO0FBQ2pCO0FBSkUsR0FBUDtBQU1ILENBakZ1QixFQUF4QixDLENBbUZBOzs7QUFDQWUsTUFBTSxDQUFDMEIsa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQzFDLEVBQUFBLGlCQUFpQixDQUFDeUMsSUFBbEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvZmxvdGNoYXJ0cy9keW5hbWljLmpzPzlkNDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZsb3REZW1vRHluYW1pYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlRHluYW1pYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcblx0XHR2YXIgdG90YWxQb2ludHMgPSAyNTA7XG5cblx0XHQvLyByYW5kb20gZGF0YSBnZW5lcmF0b3IgZm9yIHBsb3QgY2hhcnRzXG5cblx0XHRmdW5jdGlvbiBnZXRSYW5kb21EYXRhKCkge1xuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkgZGF0YSA9IGRhdGEuc2xpY2UoMSk7XG5cdFx0XHQvLyBkbyBhIHJhbmRvbSB3YWxrXG5cdFx0XHR3aGlsZSAoZGF0YS5sZW5ndGggPCB0b3RhbFBvaW50cykge1xuXHRcdFx0XHR2YXIgcHJldiA9IGRhdGEubGVuZ3RoID4gMCA/IGRhdGFbZGF0YS5sZW5ndGggLSAxXSA6IDUwO1xuXHRcdFx0XHR2YXIgeSA9IHByZXYgKyBNYXRoLnJhbmRvbSgpICogMTAgLSA1O1xuXHRcdFx0XHRpZiAoeSA8IDApIHkgPSAwO1xuXHRcdFx0XHRpZiAoeSA+IDEwMCkgeSA9IDEwMDtcblx0XHRcdFx0ZGF0YS5wdXNoKHkpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gemlwIHRoZSBnZW5lcmF0ZWQgeSB2YWx1ZXMgd2l0aCB0aGUgeCB2YWx1ZXNcblx0XHRcdHZhciByZXMgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRyZXMucHVzaChbaSwgZGF0YVtpXV0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH1cblxuXHRcdC8vc2VydmVyIGxvYWRcblx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdGNvbG9yczogW0tUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1kYW5nZXInKSwgS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLXByaW1hcnknKV0sXG5cdFx0XHRzZXJpZXM6IHtcblx0XHRcdFx0c2hhZG93U2l6ZTogMVxuXHRcdFx0fSxcblx0XHRcdGxpbmVzOiB7XG5cdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdGxpbmVXaWR0aDogMC41LFxuXHRcdFx0XHRmaWxsOiB0cnVlLFxuXHRcdFx0XHRmaWxsQ29sb3I6IHtcblx0XHRcdFx0XHRjb2xvcnM6IFt7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwLjFcblx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRcdFx0fV1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHlheGlzOiB7XG5cdFx0XHRcdG1pbjogMCxcblx0XHRcdFx0bWF4OiAxMDAsXG5cdFx0XHRcdHRpY2tDb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtZGFyaycpLFxuXHRcdFx0XHR0aWNrRm9ybWF0dGVyOiBmdW5jdGlvbih2KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHYgKyBcIiVcIjtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHhheGlzOiB7XG5cdFx0XHRcdHNob3c6IGZhbHNlLFxuXHRcdFx0fSxcblx0XHRcdGNvbG9yczogW0tUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1wcmltYXJ5JyldLFxuXHRcdFx0Z3JpZDoge1xuXHRcdFx0XHR0aWNrQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhcmsnKSxcblx0XHRcdFx0Ym9yZGVyV2lkdGg6IDAsXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciB1cGRhdGVJbnRlcnZhbCA9IDMwO1xuXHRcdHZhciBwbG90ID0gJC5wbG90KCQoXCIja3RfZG9jc19mbG90X2R5bmFtaWNcIiksIFtnZXRSYW5kb21EYXRhKCldLCBvcHRpb25zKTtcblxuXHRcdGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblx0XHRcdHBsb3Quc2V0RGF0YShbZ2V0UmFuZG9tRGF0YSgpXSk7XG5cdFx0XHRwbG90LmRyYXcoKTtcblx0XHRcdHNldFRpbWVvdXQodXBkYXRlLCB1cGRhdGVJbnRlcnZhbCk7XG5cdFx0fVxuXG5cdFx0dXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlRHluYW1pYygpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtURmxvdERlbW9EeW5hbWljLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktURmxvdERlbW9EeW5hbWljIiwiZXhhbXBsZUR5bmFtaWMiLCJkYXRhIiwidG90YWxQb2ludHMiLCJnZXRSYW5kb21EYXRhIiwibGVuZ3RoIiwic2xpY2UiLCJwcmV2IiwieSIsIk1hdGgiLCJyYW5kb20iLCJwdXNoIiwicmVzIiwiaSIsIm9wdGlvbnMiLCJjb2xvcnMiLCJLVFV0aWwiLCJnZXRDc3NWYXJpYWJsZVZhbHVlIiwic2VyaWVzIiwic2hhZG93U2l6ZSIsImxpbmVzIiwic2hvdyIsImxpbmVXaWR0aCIsImZpbGwiLCJmaWxsQ29sb3IiLCJvcGFjaXR5IiwieWF4aXMiLCJtaW4iLCJtYXgiLCJ0aWNrQ29sb3IiLCJ0aWNrRm9ybWF0dGVyIiwidiIsInhheGlzIiwiYm9yZGVyV2lkdGgiLCJ1cGRhdGVJbnRlcnZhbCIsInBsb3QiLCIkIiwidXBkYXRlIiwic2V0RGF0YSIsImRyYXciLCJzZXRUaW1lb3V0IiwiaW5pdCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/flotcharts/dynamic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/flotcharts/dynamic.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=dynamic.js.map