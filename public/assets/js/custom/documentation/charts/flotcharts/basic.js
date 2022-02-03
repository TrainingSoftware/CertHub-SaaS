/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*****************************************************************!*\
  !*** ../src/js/custom/documentation/charts/flotcharts/basic.js ***!
  \*****************************************************************/


// Class definition
var KTFlotDemoBasic = function () {
    // Private functions
    var exampleBasic = function () {
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

        var d1 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25)
            d1.push([i, Math.sin(i)]);

        var d2 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25)
            d2.push([i, Math.cos(i)]);

        var d3 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.1)
            d3.push([i, Math.tan(i)]);

        $.plot($("#kt_docs_flot_basic"), [{
            label: "sin(x)",
            data: d1,
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }, {
            label: "cos(x)",
            data: d2,
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }, {
            label: "tan(x)",
            data: d3,
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }], {
            colors: [KTUtil.getCssVariableValue('--bs-active-success'), KTUtil.getCssVariableValue('--bs-active-primary'), KTUtil.getCssVariableValue('--bs-active-danger')],
            series: {
                lines: {
                    show: true,
                },
                points: {
                    show: true,
                    fill: true,
                    radius: 3,
                    lineWidth: 1
                }
            },
            xaxis: {
                tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
                ticks: [0, [Math.PI / 2, "\u03c0/2"],
                    [Math.PI, "\u03c0"],
                    [Math.PI * 3 / 2, "3\u03c0/2"],
                    [Math.PI * 2, "2\u03c0"]
                ]
            },
            yaxis: {
                tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
                ticks: 10,
                min: -2,
                max: 2
            },
            grid: {
                borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),
                borderWidth: 1
            }
        });
    }

    return {
        // Public Functions
        init: function () {
            exampleBasic();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFlotDemoBasic.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/flotcharts/basic.js":
/*!**************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/flotcharts/basic.js ***!
  \**************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFlotDemoBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    var data = [];\n    var totalPoints = 250; // random data generator for plot charts\n\n    function getRandomData() {\n      if (data.length > 0) data = data.slice(1); // do a random walk\n\n      while (data.length < totalPoints) {\n        var prev = data.length > 0 ? data[data.length - 1] : 50;\n        var y = prev + Math.random() * 10 - 5;\n        if (y < 0) y = 0;\n        if (y > 100) y = 100;\n        data.push(y);\n      } // zip the generated y values with the x values\n\n\n      var res = [];\n\n      for (var i = 0; i < data.length; ++i) {\n        res.push([i, data[i]]);\n      }\n\n      return res;\n    }\n\n    var d1 = [];\n\n    for (var i = 0; i < Math.PI * 2; i += 0.25) {\n      d1.push([i, Math.sin(i)]);\n    }\n\n    var d2 = [];\n\n    for (var i = 0; i < Math.PI * 2; i += 0.25) {\n      d2.push([i, Math.cos(i)]);\n    }\n\n    var d3 = [];\n\n    for (var i = 0; i < Math.PI * 2; i += 0.1) {\n      d3.push([i, Math.tan(i)]);\n    }\n\n    $.plot($(\"#kt_docs_flot_basic\"), [{\n      label: \"sin(x)\",\n      data: d1,\n      lines: {\n        lineWidth: 1\n      },\n      shadowSize: 0\n    }, {\n      label: \"cos(x)\",\n      data: d2,\n      lines: {\n        lineWidth: 1\n      },\n      shadowSize: 0\n    }, {\n      label: \"tan(x)\",\n      data: d3,\n      lines: {\n        lineWidth: 1\n      },\n      shadowSize: 0\n    }], {\n      colors: [KTUtil.getCssVariableValue('--bs-active-success'), KTUtil.getCssVariableValue('--bs-active-primary'), KTUtil.getCssVariableValue('--bs-active-danger')],\n      series: {\n        lines: {\n          show: true\n        },\n        points: {\n          show: true,\n          fill: true,\n          radius: 3,\n          lineWidth: 1\n        }\n      },\n      xaxis: {\n        tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        ticks: [0, [Math.PI / 2, \"\\u03C0/2\"], [Math.PI, \"\\u03C0\"], [Math.PI * 3 / 2, \"3\\u03C0/2\"], [Math.PI * 2, \"2\\u03C0\"]]\n      },\n      yaxis: {\n        tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        ticks: 10,\n        min: -2,\n        max: 2\n      },\n      grid: {\n        borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderWidth: 1\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL2Jhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGVBQWUsR0FBRyxZQUFZO0FBQzlCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBWTtBQUMzQixRQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUNBLFFBQUlDLFdBQVcsR0FBRyxHQUFsQixDQUYyQixDQUkzQjs7QUFFQSxhQUFTQyxhQUFULEdBQXlCO0FBQ3JCLFVBQUlGLElBQUksQ0FBQ0csTUFBTCxHQUFjLENBQWxCLEVBQXFCSCxJQUFJLEdBQUdBLElBQUksQ0FBQ0ksS0FBTCxDQUFXLENBQVgsQ0FBUCxDQURBLENBRXJCOztBQUNBLGFBQU9KLElBQUksQ0FBQ0csTUFBTCxHQUFjRixXQUFyQixFQUFrQztBQUM5QixZQUFJSSxJQUFJLEdBQUdMLElBQUksQ0FBQ0csTUFBTCxHQUFjLENBQWQsR0FBa0JILElBQUksQ0FBQ0EsSUFBSSxDQUFDRyxNQUFMLEdBQWMsQ0FBZixDQUF0QixHQUEwQyxFQUFyRDtBQUNBLFlBQUlHLENBQUMsR0FBR0QsSUFBSSxHQUFHRSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBdkIsR0FBNEIsQ0FBcEM7QUFDQSxZQUFJRixDQUFDLEdBQUcsQ0FBUixFQUFXQSxDQUFDLEdBQUcsQ0FBSjtBQUNYLFlBQUlBLENBQUMsR0FBRyxHQUFSLEVBQWFBLENBQUMsR0FBRyxHQUFKO0FBQ2JOLFFBQUFBLElBQUksQ0FBQ1MsSUFBTCxDQUFVSCxDQUFWO0FBQ0gsT0FUb0IsQ0FVckI7OztBQUNBLFVBQUlJLEdBQUcsR0FBRyxFQUFWOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1gsSUFBSSxDQUFDRyxNQUF6QixFQUFpQyxFQUFFUSxDQUFuQyxFQUFzQztBQUNsQ0QsUUFBQUEsR0FBRyxDQUFDRCxJQUFKLENBQVMs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LElBQUksQ0FBQ00sRUFBTixFQUFVLFFBQVYsQ0FERyxFQUVILENBQUNOLElBQUksQ0FBQ00sRUFBTCxHQUFVLENBQVYsR0FBYyxDQUFmLEVBQWtCLFdBQWxCLENBRkcsRUFHSCxDQUFDTixJQUFJLENBQUNNLEVBQUwsR0FBVSxDQUFYLEVBQWMsU0FBZCxDQUhHO0FBRkosT0FiUDtBQXFCQXVCLE1BQUFBLEtBQUssRUFBRTtBQUNIRixRQUFBQSxTQUFTLEVBQUVSLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsaUJBQTNCLENBRFI7QUFFSFEsUUFBQUEsS0FBSyxFQUFFLEVBRko7QUFHSEUsUUFBQUEsR0FBRyxFQUFFLENBQUMsQ0FISDtBQUlIQyxRQUFBQSxHQUFHLEVBQUU7QUFKRixPQXJCUDtBQTJCQUMsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFFBQUFBLFdBQVcsRUFBRWQsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixpQkFBM0IsQ0FEWDtBQUVGYyxRQUFBQSxXQUFXLEVBQUU7QUFGWDtBQTNCTixLQXJCSjtBQXFESCxHQTFGRDs7QUE0RkEsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkM0MsTUFBQUEsWUFBWTtBQUNmO0FBSkUsR0FBUDtBQU1ILENBcEdxQixFQUF0QixDLENBc0dBOzs7QUFDQTJCLE1BQU0sQ0FBQ2lCLGtCQUFQLENBQTBCLFlBQVk7QUFDbEM3QyxFQUFBQSxlQUFlLENBQUM0QyxJQUFoQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL2Jhc2ljLmpzP2M5ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZsb3REZW1vQmFzaWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUJhc2ljID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICB2YXIgdG90YWxQb2ludHMgPSAyNTA7XG5cbiAgICAgICAgLy8gcmFuZG9tIGRhdGEgZ2VuZXJhdG9yIGZvciBwbG90IGNoYXJ0c1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbURhdGEoKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSBkYXRhID0gZGF0YS5zbGljZSgxKTtcbiAgICAgICAgICAgIC8vIGRvIGEgcmFuZG9tIHdhbGtcbiAgICAgICAgICAgIHdoaWxlIChkYXRhLmxlbmd0aCA8IHRvdGFsUG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXYgPSBkYXRhLmxlbmd0aCA+IDAgPyBkYXRhW2RhdGEubGVuZ3RoIC0gMV0gOiA1MDtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHByZXYgKyBNYXRoLnJhbmRvbSgpICogMTAgLSA1O1xuICAgICAgICAgICAgICAgIGlmICh5IDwgMCkgeSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHkgPiAxMDApIHkgPSAxMDA7XG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gemlwIHRoZSBnZW5lcmF0ZWQgeSB2YWx1ZXMgd2l0aCB0aGUgeCB2YWx1ZXNcbiAgICAgICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKFtpLCBkYXRhW2ldXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZDEgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBNYXRoLlBJICogMjsgaSArPSAwLjI1KVxuICAgICAgICAgICAgZDEucHVzaChbaSwgTWF0aC5zaW4oaSldKTtcblxuICAgICAgICB2YXIgZDIgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBNYXRoLlBJICogMjsgaSArPSAwLjI1KVxuICAgICAgICAgICAgZDIucHVzaChbaSwgTWF0aC5jb3MoaSldKTtcblxuICAgICAgICB2YXIgZDMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBNYXRoLlBJICogMjsgaSArPSAwLjEpXG4gICAgICAgICAgICBkMy5wdXNoKFtpLCBNYXRoLnRhbihpKV0pO1xuXG4gICAgICAgICQucGxvdCgkKFwiI2t0X2RvY3NfZmxvdF9iYXNpY1wiKSwgW3tcbiAgICAgICAgICAgIGxhYmVsOiBcInNpbih4KVwiLFxuICAgICAgICAgICAgZGF0YTogZDEsXG4gICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiBcImNvcyh4KVwiLFxuICAgICAgICAgICAgZGF0YTogZDIsXG4gICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiBcInRhbih4KVwiLFxuICAgICAgICAgICAgZGF0YTogZDMsXG4gICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwXG4gICAgICAgIH1dLCB7XG4gICAgICAgICAgICBjb2xvcnM6IFtLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtc3VjY2VzcycpLCBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtcHJpbWFyeScpLCBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtZGFuZ2VyJyldLFxuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBvaW50czoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDMsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtZGFyaycpLFxuICAgICAgICAgICAgICAgIHRpY2tzOiBbMCwgW01hdGguUEkgLyAyLCBcIlxcdTAzYzAvMlwiXSxcbiAgICAgICAgICAgICAgICAgICAgW01hdGguUEksIFwiXFx1MDNjMFwiXSxcbiAgICAgICAgICAgICAgICAgICAgW01hdGguUEkgKiAzIC8gMiwgXCIzXFx1MDNjMC8yXCJdLFxuICAgICAgICAgICAgICAgICAgICBbTWF0aC5QSSAqIDIsIFwiMlxcdTAzYzBcIl1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhcmsnKSxcbiAgICAgICAgICAgICAgICB0aWNrczogMTAsXG4gICAgICAgICAgICAgICAgbWluOiAtMixcbiAgICAgICAgICAgICAgICBtYXg6IDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhcmsnKSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGVCYXNpYygpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtURmxvdERlbW9CYXNpYy5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEZsb3REZW1vQmFzaWMiLCJleGFtcGxlQmFzaWMiLCJkYXRhIiwidG90YWxQb2ludHMiLCJnZXRSYW5kb21EYXRhIiwibGVuZ3RoIiwic2xpY2UiLCJwcmV2IiwieSIsIk1hdGgiLCJyYW5kb20iLCJwdXNoIiwicmVzIiwiaSIsImQxIiwiUEkiLCJzaW4iLCJkMiIsImNvcyIsImQzIiwidGFuIiwiJCIsInBsb3QiLCJsYWJlbCIsImxpbmVzIiwibGluZVdpZHRoIiwic2hhZG93U2l6ZSIsImNvbG9ycyIsIktUVXRpbCIsImdldENzc1ZhcmlhYmxlVmFsdWUiLCJzZXJpZXMiLCJzaG93IiwicG9pbnRzIiwiZmlsbCIsInJhZGl1cyIsInhheGlzIiwidGlja0NvbG9yIiwidGlja3MiLCJ5YXhpcyIsIm1pbiIsIm1heCIsImdyaWQiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiaW5pdCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/flotcharts/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/flotcharts/basic.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=basic.js.map