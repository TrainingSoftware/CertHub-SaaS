/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/google-charts/line.js":
/*!****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/google-charts/line.js ***!
  \****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGoogleChartLineDemo = function () {\n  // Private functions\n  var exampleLine = function exampleLine() {\n    // GOOGLE CHARTS INIT\n    google.load('visualization', '1', {\n      packages: ['corechart', 'bar', 'line']\n    });\n    google.setOnLoadCallback(function () {\n      // LINE CHART\n      var data = new google.visualization.DataTable();\n      data.addColumn('number', 'Day');\n      data.addColumn('number', 'Guardians of the Galaxy');\n      data.addColumn('number', 'The Avengers');\n      data.addColumn('number', 'Transformers: Age of Extinction');\n      data.addRows([[1, 37.8, 80.8, 41.8], [2, 30.9, 69.5, 32.4], [3, 25.4, 57, 25.7], [4, 11.7, 18.8, 10.5], [5, 11.9, 17.6, 10.4], [6, 8.8, 13.6, 7.7], [7, 7.6, 12.3, 9.6], [8, 12.3, 29.2, 10.6], [9, 16.9, 42.9, 14.8], [10, 12.8, 30.9, 11.6], [11, 5.3, 7.9, 4.7], [12, 6.6, 8.4, 5.2], [13, 4.8, 6.3, 3.6], [14, 4.2, 6.2, 3.4]]);\n      var options = {\n        chart: {\n          title: 'Box Office Earnings in First Two Weeks of Opening',\n          subtitle: 'in millions of dollars (USD)'\n        },\n        colors: ['#6e4ff5', '#f6aa33', '#fe3995']\n      };\n      var chart = new google.charts.Line(document.getElementById('kt_docs_google_chart_line'));\n      chart.draw(data, options);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleLine();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGoogleChartLineDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9nb29nbGUtY2hhcnRzL2xpbmUuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEscUJBQXFCLEdBQUcsWUFBWTtBQUNwQztBQUNBLE1BQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVk7QUFDMUI7QUFDQUMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksZUFBWixFQUE2QixHQUE3QixFQUFrQztBQUM5QkMsTUFBQUEsUUFBUSxFQUFFLENBQUMsV0FBRCxFQUFjLEtBQWQsRUFBcUIsTUFBckI7QUFEb0IsS0FBbEM7QUFJQUYsSUFBQUEsTUFBTSxDQUFDRyxpQkFBUCxDQUF5QixZQUFZO0FBQ2pDO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLElBQUlKLE1BQU0sQ0FBQ0ssYUFBUCxDQUFxQkMsU0FBekIsRUFBWDtBQUNBRixNQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZSxRQUFmLEVBQXlCLEtBQXpCO0FBQ0FILE1BQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlLFFBQWYsRUFBeUIseUJBQXpCO0FBQ0FILE1BQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlLFFBQWYsRUFBeUIsY0FBekI7QUFDQUgsTUFBQUEsSUFBSSxDQUFDRyxTQUFMLENBQWUsUUFBZixFQUF5QixpQ0FBekI7QUFFQUgsTUFBQUEsSUFBSSxDQUFDSSxPQUFMLENBQWEsQ0FDVCxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixDQURTLEVBRVQsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsQ0FGUyxFQUdULENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxFQUFWLEVBQWMsSUFBZCxDQUhTLEVBSVQsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsQ0FKUyxFQUtULENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLENBTFMsRUFNVCxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsSUFBVCxFQUFlLEdBQWYsQ0FOUyxFQU9ULENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxJQUFULEVBQWUsR0FBZixDQVBTLEVBUVQsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsQ0FSUyxFQVNULENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLENBVFMsRUFVVCxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsSUFBWCxFQUFpQixJQUFqQixDQVZTLEVBV1QsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxHQUFmLENBWFMsRUFZVCxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLEdBQWYsQ0FaUyxFQWFULENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLEVBQWUsR0FBZixDQWJTLEVBY1QsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxHQUFmLENBZFMsQ0FBYjtBQWlCQSxVQUFJQyxPQUFPLEdBQUc7QUFDVkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLEtBQUssRUFBRSxtREFESjtBQUVIQyxVQUFBQSxRQUFRLEVBQUU7QUFGUCxTQURHO0FBS1ZDLFFBQUFBLE1BQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCO0FBTEUsT0FBZDtBQVFBLFVBQUlILEtBQUssR0FBRyxJQUFJVixNQUFNLENBQUNjLE1BQVAsQ0FBY0MsSUFBbEIsQ0FBdUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QiwyQkFBeEIsQ0FBdkIsQ0FBWjtBQUNBUCxNQUFBQSxLQUFLLENBQUNRLElBQU4sQ0FBV2QsSUFBWCxFQUFpQkssT0FBakI7QUFDSCxLQW5DRDtBQW9DSCxHQTFDRDs7QUE0Q0EsU0FBTztBQUNIO0FBQ0FVLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkcEIsTUFBQUEsV0FBVztBQUNkO0FBSkUsR0FBUDtBQU1ILENBcEQyQixFQUE1QixDLENBc0RBOzs7QUFDQXFCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ3ZCLEVBQUFBLHFCQUFxQixDQUFDcUIsSUFBdEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvZ29vZ2xlLWNoYXJ0cy9saW5lLmpzPzI3MGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEdvb2dsZUNoYXJ0TGluZURlbW8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVMaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEdPT0dMRSBDSEFSVFMgSU5JVFxyXG4gICAgICAgIGdvb2dsZS5sb2FkKCd2aXN1YWxpemF0aW9uJywgJzEnLCB7XHJcbiAgICAgICAgICAgIHBhY2thZ2VzOiBbJ2NvcmVjaGFydCcsICdiYXInLCAnbGluZSddXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdvb2dsZS5zZXRPbkxvYWRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIExJTkUgQ0hBUlRcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnRGF5Jyk7XHJcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnR3VhcmRpYW5zIG9mIHRoZSBHYWxheHknKTtcclxuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ251bWJlcicsICdUaGUgQXZlbmdlcnMnKTtcclxuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ251bWJlcicsICdUcmFuc2Zvcm1lcnM6IEFnZSBvZiBFeHRpbmN0aW9uJyk7XHJcblxyXG4gICAgICAgICAgICBkYXRhLmFkZFJvd3MoW1xyXG4gICAgICAgICAgICAgICAgWzEsIDM3LjgsIDgwLjgsIDQxLjhdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDMwLjksIDY5LjUsIDMyLjRdLFxyXG4gICAgICAgICAgICAgICAgWzMsIDI1LjQsIDU3LCAyNS43XSxcclxuICAgICAgICAgICAgICAgIFs0LCAxMS43LCAxOC44LCAxMC41XSxcclxuICAgICAgICAgICAgICAgIFs1LCAxMS45LCAxNy42LCAxMC40XSxcclxuICAgICAgICAgICAgICAgIFs2LCA4LjgsIDEzLjYsIDcuN10sXHJcbiAgICAgICAgICAgICAgICBbNywgNy42LCAxMi4zLCA5LjZdLFxyXG4gICAgICAgICAgICAgICAgWzgsIDEyLjMsIDI5LjIsIDEwLjZdLFxyXG4gICAgICAgICAgICAgICAgWzksIDE2LjksIDQyLjksIDE0LjhdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCAxMi44LCAzMC45LCAxMS42XSxcclxuICAgICAgICAgICAgICAgIFsxMSwgNS4zLCA3LjksIDQuN10sXHJcbiAgICAgICAgICAgICAgICBbMTIsIDYuNiwgOC40LCA1LjJdLFxyXG4gICAgICAgICAgICAgICAgWzEzLCA0LjgsIDYuMywgMy42XSxcclxuICAgICAgICAgICAgICAgIFsxNCwgNC4yLCA2LjIsIDMuNF1cclxuICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCb3ggT2ZmaWNlIEVhcm5pbmdzIGluIEZpcnN0IFR3byBXZWVrcyBvZiBPcGVuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ2luIG1pbGxpb25zIG9mIGRvbGxhcnMgKFVTRCknXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyM2ZTRmZjUnLCAnI2Y2YWEzMycsICcjZmUzOTk1J11cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjaGFydCA9IG5ldyBnb29nbGUuY2hhcnRzLkxpbmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZ29vZ2xlX2NoYXJ0X2xpbmUnKSk7XHJcbiAgICAgICAgICAgIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlTGluZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RHb29nbGVDaGFydExpbmVEZW1vLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEdvb2dsZUNoYXJ0TGluZURlbW8iLCJleGFtcGxlTGluZSIsImdvb2dsZSIsImxvYWQiLCJwYWNrYWdlcyIsInNldE9uTG9hZENhbGxiYWNrIiwiZGF0YSIsInZpc3VhbGl6YXRpb24iLCJEYXRhVGFibGUiLCJhZGRDb2x1bW4iLCJhZGRSb3dzIiwib3B0aW9ucyIsImNoYXJ0IiwidGl0bGUiLCJzdWJ0aXRsZSIsImNvbG9ycyIsImNoYXJ0cyIsIkxpbmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhdyIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/google-charts/line.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/google-charts/line.js"]();
/******/ 	
/******/ })()
;