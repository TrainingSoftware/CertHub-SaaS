/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*****************************************************************!*\
  !*** ../src/js/custom/documentation/charts/flotcharts/stack.js ***!
  \*****************************************************************/


// Class definition
var KTFlotDemoStack = function () {
    // Private functions
    var exampleStack = function () {
        var d1 = [];
		for (var i = 0; i <= 10; i += 1)
			d1.push([i, parseInt(Math.random() * 30)]);

		var d2 = [];
		for (var i = 0; i <= 10; i += 1)
			d2.push([i, parseInt(Math.random() * 30)]);

		var d3 = [];
		for (var i = 0; i <= 10; i += 1)
			d3.push([i, parseInt(Math.random() * 30)]);

		var stack = 0,
			bars = true,
			lines = false,
			steps = false;

		function plotWithOptions() {
			$.plot($("#kt_docs_flot_stack"),

				[{
					label: "sales",
					data: d1,
					lines: {
						lineWidth: 1,
					},
					shadowSize: 0
				}, {
					label: "tax",
					data: d2,
					lines: {
						lineWidth: 1,
					},
					shadowSize: 0
				}, {
					label: "profit",
					data: d3,
					lines: {
						lineWidth: 1,
					},
					shadowSize: 0
				}], {
					colors: [KTUtil.getCssVariableValue('--bs-active-danger'), KTUtil.getCssVariableValue('--bs-active-primary')],
					series: {
						stack: stack,
						lines: {
							show: lines,
							fill: true,
							steps: steps,
							lineWidth: 0, // in pixels
						},
						bars: {
							show: bars,
							barWidth: 0.5,
							lineWidth: 0, // in pixels
							shadowSize: 0,
							align: 'center'
						}
					},
					grid: {
						tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
						borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),
						borderWidth: 1
					}
				}
			);
		}

		$(".stackControls input").click(function(e) {
			e.preventDefault();
			stack = $(this).val() == "With stacking" ? true : null;
			plotWithOptions();
		});

		$(".graphControls input").click(function(e) {
			e.preventDefault();
			bars = $(this).val().indexOf("Bars") != -1;
			lines = $(this).val().indexOf("Lines") != -1;
			steps = $(this).val().indexOf("steps") != -1;
			plotWithOptions();
		});

		plotWithOptions();
    }

    return {
        // Public Functions
        init: function () {
            exampleStack();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFlotDemoStack.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/flotcharts/stack.js":
/*!**************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/flotcharts/stack.js ***!
  \**************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFlotDemoStack = function () {\n  // Private functions\n  var exampleStack = function exampleStack() {\n    var d1 = [];\n\n    for (var i = 0; i <= 10; i += 1) {\n      d1.push([i, parseInt(Math.random() * 30)]);\n    }\n\n    var d2 = [];\n\n    for (var i = 0; i <= 10; i += 1) {\n      d2.push([i, parseInt(Math.random() * 30)]);\n    }\n\n    var d3 = [];\n\n    for (var i = 0; i <= 10; i += 1) {\n      d3.push([i, parseInt(Math.random() * 30)]);\n    }\n\n    var stack = 0,\n        bars = true,\n        lines = false,\n        steps = false;\n\n    function plotWithOptions() {\n      $.plot($(\"#kt_docs_flot_stack\"), [{\n        label: \"sales\",\n        data: d1,\n        lines: {\n          lineWidth: 1\n        },\n        shadowSize: 0\n      }, {\n        label: \"tax\",\n        data: d2,\n        lines: {\n          lineWidth: 1\n        },\n        shadowSize: 0\n      }, {\n        label: \"profit\",\n        data: d3,\n        lines: {\n          lineWidth: 1\n        },\n        shadowSize: 0\n      }], {\n        colors: [KTUtil.getCssVariableValue('--bs-active-danger'), KTUtil.getCssVariableValue('--bs-active-primary')],\n        series: {\n          stack: stack,\n          lines: {\n            show: lines,\n            fill: true,\n            steps: steps,\n            lineWidth: 0 // in pixels\n\n          },\n          bars: {\n            show: bars,\n            barWidth: 0.5,\n            lineWidth: 0,\n            // in pixels\n            shadowSize: 0,\n            align: 'center'\n          }\n        },\n        grid: {\n          tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n          borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n          borderWidth: 1\n        }\n      });\n    }\n\n    $(\".stackControls input\").click(function (e) {\n      e.preventDefault();\n      stack = $(this).val() == \"With stacking\" ? true : null;\n      plotWithOptions();\n    });\n    $(\".graphControls input\").click(function (e) {\n      e.preventDefault();\n      bars = $(this).val().indexOf(\"Bars\") != -1;\n      lines = $(this).val().indexOf(\"Lines\") != -1;\n      steps = $(this).val().indexOf(\"steps\") != -1;\n      plotWithOptions();\n    });\n    plotWithOptions();\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleStack();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoStack.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL3N0YWNrLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGVBQWUsR0FBRyxZQUFZO0FBQzlCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBWTtBQUMzQixRQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDTixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksRUFBckIsRUFBeUJBLENBQUMsSUFBSSxDQUE5QjtBQUNDRCxNQUFBQSxFQUFFLENBQUNFLElBQUgsQ0FBUSxDQUFDRCxDQUFELEVBQUlFLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEVBQWpCLENBQVosQ0FBUjtBQUREOztBQUdBLFFBQUlDLEVBQUUsR0FBRyxFQUFUOztBQUNBLFNBQUssSUFBSUwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSSxFQUFyQixFQUF5QkEsQ0FBQyxJQUFJLENBQTlCO0FBQ0NLLE1BQUFBLEVBQUUsQ0FBQ0osSUFBSCxDQUFRLENBQUNELENBQUQsRUFBSUUsUUFBUSxDQUFDQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBakIsQ0FBWixDQUFSO0FBREQ7O0FBR0EsUUFBSUUsRUFBRSxHQUFHLEVBQVQ7O0FBQ0EsU0FBSyxJQUFJTixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLEVBQXJCLEVBQXlCQSxDQUFDLElBQUksQ0FBOUI7QUFDQ00sTUFBQUEsRUFBRSxDQUFDTCxJQUFILENBQVEsQ0FBQ0QsQ0FBRCxFQUFJRSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUFqQixDQUFaLENBQVI7QUFERDs7QUFHQSxRQUFJRyxLQUFLLEdBQUcsQ0FBWjtBQUFBLFFBQ0NDLElBQUksR0FBRyxJQURSO0FBQUEsUUFFQ0MsS0FBSyxHQUFHLEtBRlQ7QUFBQSxRQUdDQyxLQUFL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LEtBQWtDLENBQUMsQ0FBM0M7QUFDQXZCLE1BQUFBLGVBQWU7QUFDZixLQU5EO0FBUUFBLElBQUFBLGVBQWU7QUFDWixHQXBGRDs7QUFzRkEsU0FBTztBQUNIO0FBQ0F3QixJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZHJDLE1BQUFBLFlBQVk7QUFDZjtBQUpFLEdBQVA7QUFNSCxDQTlGcUIsRUFBdEIsQyxDQWdHQTs7O0FBQ0FxQixNQUFNLENBQUNpQixrQkFBUCxDQUEwQixZQUFZO0FBQ2xDdkMsRUFBQUEsZUFBZSxDQUFDc0MsSUFBaEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvZmxvdGNoYXJ0cy9zdGFjay5qcz9jNzQ0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RGbG90RGVtb1N0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVTdGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGQxID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPD0gMTA7IGkgKz0gMSlcblx0XHRcdGQxLnB1c2goW2ksIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzMCldKTtcblxuXHRcdHZhciBkMiA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IDEwOyBpICs9IDEpXG5cdFx0XHRkMi5wdXNoKFtpLCBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMzApXSk7XG5cblx0XHR2YXIgZDMgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8PSAxMDsgaSArPSAxKVxuXHRcdFx0ZDMucHVzaChbaSwgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMwKV0pO1xuXG5cdFx0dmFyIHN0YWNrID0gMCxcblx0XHRcdGJhcnMgPSB0cnVlLFxuXHRcdFx0bGluZXMgPSBmYWxzZSxcblx0XHRcdHN0ZXBzID0gZmFsc2U7XG5cblx0XHRmdW5jdGlvbiBwbG90V2l0aE9wdGlvbnMoKSB7XG5cdFx0XHQkLnBsb3QoJChcIiNrdF9kb2NzX2Zsb3Rfc3RhY2tcIiksXG5cblx0XHRcdFx0W3tcblx0XHRcdFx0XHRsYWJlbDogXCJzYWxlc1wiLFxuXHRcdFx0XHRcdGRhdGE6IGQxLFxuXHRcdFx0XHRcdGxpbmVzOiB7XG5cdFx0XHRcdFx0XHRsaW5lV2lkdGg6IDEsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGFkb3dTaXplOiAwXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRsYWJlbDogXCJ0YXhcIixcblx0XHRcdFx0XHRkYXRhOiBkMixcblx0XHRcdFx0XHRsaW5lczoge1xuXHRcdFx0XHRcdFx0bGluZVdpZHRoOiAxLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hhZG93U2l6ZTogMFxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bGFiZWw6IFwicHJvZml0XCIsXG5cdFx0XHRcdFx0ZGF0YTogZDMsXG5cdFx0XHRcdFx0bGluZXM6IHtcblx0XHRcdFx0XHRcdGxpbmVXaWR0aDogMSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoYWRvd1NpemU6IDBcblx0XHRcdFx0fV0sIHtcblx0XHRcdFx0XHRjb2xvcnM6IFtLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtZGFuZ2VyJyksIEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1wcmltYXJ5JyldLFxuXHRcdFx0XHRcdHNlcmllczoge1xuXHRcdFx0XHRcdFx0c3RhY2s6IHN0YWNrLFxuXHRcdFx0XHRcdFx0bGluZXM6IHtcblx0XHRcdFx0XHRcdFx0c2hvdzogbGluZXMsXG5cdFx0XHRcdFx0XHRcdGZpbGw6IHRydWUsXG5cdFx0XHRcdFx0XHRcdHN0ZXBzOiBzdGVwcyxcblx0XHRcdFx0XHRcdFx0bGluZVdpZHRoOiAwLCAvLyBpbiBwaXhlbHNcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRiYXJzOiB7XG5cdFx0XHRcdFx0XHRcdHNob3c6IGJhcnMsXG5cdFx0XHRcdFx0XHRcdGJhcldpZHRoOiAwLjUsXG5cdFx0XHRcdFx0XHRcdGxpbmVXaWR0aDogMCwgLy8gaW4gcGl4ZWxzXG5cdFx0XHRcdFx0XHRcdHNoYWRvd1NpemU6IDAsXG5cdFx0XHRcdFx0XHRcdGFsaWduOiAnY2VudGVyJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Z3JpZDoge1xuXHRcdFx0XHRcdFx0dGlja0NvbG9yOiBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC1kYXJrJyksXG5cdFx0XHRcdFx0XHRib3JkZXJDb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtZGFyaycpLFxuXHRcdFx0XHRcdFx0Ym9yZGVyV2lkdGg6IDFcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0JChcIi5zdGFja0NvbnRyb2xzIGlucHV0XCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHN0YWNrID0gJCh0aGlzKS52YWwoKSA9PSBcIldpdGggc3RhY2tpbmdcIiA/IHRydWUgOiBudWxsO1xuXHRcdFx0cGxvdFdpdGhPcHRpb25zKCk7XG5cdFx0fSk7XG5cblx0XHQkKFwiLmdyYXBoQ29udHJvbHMgaW5wdXRcIikuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0YmFycyA9ICQodGhpcykudmFsKCkuaW5kZXhPZihcIkJhcnNcIikgIT0gLTE7XG5cdFx0XHRsaW5lcyA9ICQodGhpcykudmFsKCkuaW5kZXhPZihcIkxpbmVzXCIpICE9IC0xO1xuXHRcdFx0c3RlcHMgPSAkKHRoaXMpLnZhbCgpLmluZGV4T2YoXCJzdGVwc1wiKSAhPSAtMTtcblx0XHRcdHBsb3RXaXRoT3B0aW9ucygpO1xuXHRcdH0pO1xuXG5cdFx0cGxvdFdpdGhPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlU3RhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVEZsb3REZW1vU3RhY2suaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGbG90RGVtb1N0YWNrIiwiZXhhbXBsZVN0YWNrIiwiZDEiLCJpIiwicHVzaCIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsImQyIiwiZDMiLCJzdGFjayIsImJhcnMiLCJsaW5lcyIsInN0ZXBzIiwicGxvdFdpdGhPcHRpb25zIiwiJCIsInBsb3QiLCJsYWJlbCIsImRhdGEiLCJsaW5lV2lkdGgiLCJzaGFkb3dTaXplIiwiY29sb3JzIiwiS1RVdGlsIiwiZ2V0Q3NzVmFyaWFibGVWYWx1ZSIsInNlcmllcyIsInNob3ciLCJmaWxsIiwiYmFyV2lkdGgiLCJhbGlnbiIsImdyaWQiLCJ0aWNrQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWwiLCJpbmRleE9mIiwiaW5pdCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/flotcharts/stack.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/flotcharts/stack.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=stack.js.map