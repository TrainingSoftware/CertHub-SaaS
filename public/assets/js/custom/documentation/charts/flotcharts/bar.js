/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************************************!*\
  !*** ../src/js/custom/documentation/charts/flotcharts/bar.js ***!
  \***************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTFlotDemoBar = function () {
    // Private functions
    var exampleBar = function () {
        // horizontal bar chart:
		var data1 = [
			[10, 10],
			[20, 20],
			[30, 30],
			[40, 40],
			[50, 50],
            [60, 60],
            [70, 70],
            [80, 80],
            [90, 90],
            [100, 100],
		];
=======
eval(" // Class definition\n\nvar KTFlotDemoBar = function () {\n  // Private functions\n  var exampleBar = function exampleBar() {\n    // horizontal bar chart:\n    var data1 = [[10, 10], [20, 20], [30, 30], [40, 40], [50, 50], [60, 60], [70, 70], [80, 80], [90, 90], [100, 100]];\n    var options = {\n      colors: [KTUtil.getCssVariableValue('--bs-active-primary')],\n      series: {\n        bars: {\n          show: true\n        }\n      },\n      bars: {\n        horizontal: true,\n        barWidth: 6,\n        lineWidth: 0,\n        // in pixels\n        shadowSize: 0,\n        align: 'left'\n      },\n      grid: {\n        tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderWidth: 1\n      }\n    };\n    $.plot($(\"#kt_docs_flot_bar\"), [data1], options);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBar();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoBar.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL2Jhci5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxhQUFhLEdBQUcsWUFBWTtBQUM1QjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFDekI7QUFDTixRQUFJQyxLQUFLLEdBQUcsQ0FDWCxDQUFDLEVBQUQsRUFBSyxFQUFMLENBRFcsRUFFWCxDQUFDLEVBQUQsRUFBSyxFQUFMLENBRlcsRUFHWCxDQUFDLEVBQUQsRUFBSyxFQUFMLENBSFcsRUFJWCxDQUFDLEVBQUQsRUFBSyxFQUFMLENBSlcsRUFLWCxDQUFDLEVBQUQsRUFBSyxFQUFMLENBTFcsRUFNRixDQUFDLEVBQUQsRUFBSyxFQUFMLENBTkUsRUFPRixDQUFDLEVBQUQsRUFBSyxFQUFMLENBUEUsRUFRRixDQUFDLEVBQUQsRUFBSyxFQUFMLENBUkUsRUFTRixDQUFDLEVBQUQsRUFBSyxFQUFMLENBVEUsRUFVRixDQUFDLEdBQUQsRUFBTSxHQUFOLENBVkUsQ0FBWjtBQWFBLFFBQUlDLE9BQU8sR0FBRztBQUNiQyxNQUFBQSxNQUFNLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixxQkFBM0IsQ0FBRCxDQURLO0FBRWJDLE1BQUFBLE1BQU0sRUFBRTtBQUNQQyxRQUFBQSxJQUFJLEVBQUU7QUFDTEMsVUFBQUEsSUFBSSxFQUFFO0FBREQ7QUFEQyxPQUZLO0FBT2JELE1BQUFBLElBQUksRUFBRTtBQUNMRSxRQUFBQSxVQUFVLEVBQUUsSUFEUDtBQUVMQyxRQUFBQSxRQUFRLEVBQUUsQ0FGTDtBQUdMQyxRQUFBQSxTQUFTLEVBQUUsQ0FITjtBQUdTO0FBQ2RDLFFBQUFBLFVBQVUsRUFBRSxDQUpQO0FBS0xDLFFBQUFBLEtBQUssRUFBRTtBQUxGLE9BUE87QUFjYkMsTUFBQUEsSUFBSSxFQUFFO0FBQ0xDLFFBQUFBLFNBQVMsRUFBRVgsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixpQkFBM0IsQ0FETjtBQUVMVyxRQUFBQSxXQUFXLEVBQUVaLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsaUJBQTNCLENBRlI7QUFHTFksUUFBQUEsV0FBVyxFQUFFO0FBSFI7QUFkTyxLQUFkO0FBcUJBQyxJQUFBQSxDQUFDLENBQUNDLElBQUYsQ0FBT0QsQ0FBQyxDQUFDLG1CQUFELENBQVIsRUFBK0IsQ0FBQ2pCLEtBQUQsQ0FBL0IsRUFBd0NDLE9BQXhDO0FBQ0csR0FyQ0Q7O0FBdUNBLFNBQU87QUFDSDtBQUNBa0IsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RwQixNQUFBQSxVQUFVO0FBQ2I7QUFKRSxHQUFQO0FBTUgsQ0EvQ21CLEVBQXBCLEMsQ0FpREE7OztBQUNBSSxNQUFNLENBQUNpQixrQkFBUCxDQUEwQixZQUFZO0FBQ2xDdEIsRUFBQUEsYUFBYSxDQUFDcUIsSUFBZDtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL2Jhci5qcz80ODc3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RGbG90RGVtb0JhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlQmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBob3Jpem9udGFsIGJhciBjaGFydDpcblx0XHR2YXIgZGF0YTEgPSBbXG5cdFx0XHRbMTAsIDEwXSxcblx0XHRcdFsyMCwgMjBdLFxuXHRcdFx0WzMwLCAzMF0sXG5cdFx0XHRbNDAsIDQwXSxcblx0XHRcdFs1MCwgNTBdLFxuICAgICAgICAgICAgWzYwLCA2MF0sXG4gICAgICAgICAgICBbNzAsIDcwXSxcbiAgICAgICAgICAgIFs4MCwgODBdLFxuICAgICAgICAgICAgWzkwLCA5MF0sXG4gICAgICAgICAgICBbMTAwLCAxMDBdLFxuXHRcdF07XG5cblx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdGNvbG9yczogW0tUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1wcmltYXJ5JyldLFxuXHRcdFx0c2VyaWVzOiB7XG5cdFx0XHRcdGJhcnM6IHtcblx0XHRcdFx0XHRzaG93OiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRiYXJzOiB7XG5cdFx0XHRcdGhvcml6b250YWw6IHRydWUsXG5cdFx0XHRcdGJhcldpZHRoOiA2LFxuXHRcdFx0XHRsaW5lV2lkdGg6IDAsIC8vIGluIHBpeGVsc1xuXHRcdFx0XHRzaGFkb3dTaXplOiAwLFxuXHRcdFx0XHRhbGlnbjogJ2xlZnQnXG5cdFx0XHR9LFxuXHRcdFx0Z3JpZDoge1xuXHRcdFx0XHR0aWNrQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhcmsnKSxcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhcmsnKSxcblx0XHRcdFx0Ym9yZGVyV2lkdGg6IDFcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0JC5wbG90KCQoXCIja3RfZG9jc19mbG90X2JhclwiKSwgW2RhdGExXSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlQmFyKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RGbG90RGVtb0Jhci5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEZsb3REZW1vQmFyIiwiZXhhbXBsZUJhciIsImRhdGExIiwib3B0aW9ucyIsImNvbG9ycyIsIktUVXRpbCIsImdldENzc1ZhcmlhYmxlVmFsdWUiLCJzZXJpZXMiLCJiYXJzIiwic2hvdyIsImhvcml6b250YWwiLCJiYXJXaWR0aCIsImxpbmVXaWR0aCIsInNoYWRvd1NpemUiLCJhbGlnbiIsImdyaWQiLCJ0aWNrQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiJCIsInBsb3QiLCJpbml0Iiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/flotcharts/bar.js\n");
>>>>>>> Stashed changes

		var options = {
			colors: [KTUtil.getCssVariableValue('--bs-active-primary')],
			series: {
				bars: {
					show: true
				}
			},
			bars: {
				horizontal: true,
				barWidth: 6,
				lineWidth: 0, // in pixels
				shadowSize: 0,
				align: 'left'
			},
			grid: {
				tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
				borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),
				borderWidth: 1
			}
		};

		$.plot($("#kt_docs_flot_bar"), [data1], options);
    }

    return {
        // Public Functions
        init: function () {
            exampleBar();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFlotDemoBar.init();
});

/******/ })()
;
//# sourceMappingURL=bar.js.map