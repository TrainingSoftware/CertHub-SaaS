/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!****************************************************************!*\
  !*** ../src/js/custom/documentation/charts/flotcharts/axis.js ***!
  \****************************************************************/


// Class definition
var KTFlotDemoAxis = function () {
    // Private functions
    var exampleAxis = function () {
        function randValue() {
			return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
		}
		var pageviews = [
			[1, randValue()],
			[2, randValue()],
			[3, 2 + randValue()],
			[4, 3 + randValue()],
			[5, 5 + randValue()],
			[6, 10 + randValue()],
			[7, 15 + randValue()],
			[8, 20 + randValue()],
			[9, 25 + randValue()],
			[10, 30 + randValue()],
			[11, 35 + randValue()],
			[12, 25 + randValue()],
			[13, 15 + randValue()],
			[14, 20 + randValue()],
			[15, 45 + randValue()],
			[16, 50 + randValue()],
			[17, 65 + randValue()],
			[18, 70 + randValue()],
			[19, 85 + randValue()],
			[20, 80 + randValue()],
			[21, 75 + randValue()],
			[22, 80 + randValue()],
			[23, 75 + randValue()],
			[24, 70 + randValue()],
			[25, 65 + randValue()],
			[26, 75 + randValue()],
			[27, 80 + randValue()],
			[28, 85 + randValue()],
			[29, 90 + randValue()],
			[30, 95 + randValue()]
		];
		var visitors = [
			[1, randValue() - 5],
			[2, randValue() - 5],
			[3, randValue() - 5],
			[4, 6 + randValue()],
			[5, 5 + randValue()],
			[6, 20 + randValue()],
			[7, 25 + randValue()],
			[8, 36 + randValue()],
			[9, 26 + randValue()],
			[10, 38 + randValue()],
			[11, 39 + randValue()],
			[12, 50 + randValue()],
			[13, 51 + randValue()],
			[14, 12 + randValue()],
			[15, 13 + randValue()],
			[16, 14 + randValue()],
			[17, 15 + randValue()],
			[18, 15 + randValue()],
			[19, 16 + randValue()],
			[20, 17 + randValue()],
			[21, 18 + randValue()],
			[22, 19 + randValue()],
			[23, 20 + randValue()],
			[24, 21 + randValue()],
			[25, 14 + randValue()],
			[26, 24 + randValue()],
			[27, 25 + randValue()],
			[28, 26 + randValue()],
			[29, 27 + randValue()],
			[30, 31 + randValue()]
		];

		var plot = $.plot($("#kt_docs_flot_axis"), [{
			data: pageviews,
			label: "Unique Visits",
			lines: {
				lineWidth: 1,
			},
			shadowSize: 0

		}, {
			data: visitors,
			label: "Page Views",
			lines: {
				lineWidth: 1,
			},
			shadowSize: 0
		}], {
			series: {
				lines: {
					show: true,
					lineWidth: 2,
					fill: true,
					fillColor: {
						colors: [{
							opacity: 0.05
						}, {
							opacity: 0.01
						}]
					}
				},
				points: {
					show: true,
					radius: 3,
					lineWidth: 1
				},
				shadowSize: 2
			},
			grid: {
				hoverable: true,
				clickable: true,
				tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),
				borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),
				borderWidth: 1
			},
			colors: [KTUtil.getCssVariableValue('--bs-active-primary'), KTUtil.getCssVariableValue('--bs-active-danger')],
			xaxis: {
				ticks: 11,
				tickDecimals: 0,
				tickColor: KTUtil.getCssVariableValue('--bs-active-dark'),
			},
			yaxis: {
				ticks: 11,
				tickDecimals: 0,
				tickColor: KTUtil.getCssVariableValue('--bs-active-dark'),
			}
		});

		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css({
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 15,
				border: '1px solid ' + KTUtil.getCssVariableValue('--bs-light-dark'),
				padding: '4px',
				color:  + KTUtil.getCssVariableValue('--bs-active-dark'),
				'border-radius': '3px',
				'background-color':  + KTUtil.getCssVariableValue('--bs-light-dark'),
				opacity: 0.80
			}).appendTo("body").fadeIn(200);
		}

		var previousPoint = null;
		$("#chart_2").bind("plothover", function(event, pos, item) {
			$("#x").text(pos.x.toFixed(2));
			$("#y").text(pos.y.toFixed(2));

			if (item) {
				if (previousPoint != item.dataIndex) {
					previousPoint = item.dataIndex;

					$("#tooltip").remove();
					var x = item.datapoint[0].toFixed(2),
						y = item.datapoint[1].toFixed(2);

					showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
				}
			} else {
				$("#tooltip").remove();
				previousPoint = null;
			}
		});
    }

    return {
        // Public Functions
        init: function () {
            exampleAxis();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFlotDemoAxis.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/flotcharts/axis.js":
/*!*************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/flotcharts/axis.js ***!
  \*************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFlotDemoAxis = function () {\n  // Private functions\n  var exampleAxis = function exampleAxis() {\n    function randValue() {\n      return Math.floor(Math.random() * (1 + 40 - 20)) + 20;\n    }\n\n    var pageviews = [[1, randValue()], [2, randValue()], [3, 2 + randValue()], [4, 3 + randValue()], [5, 5 + randValue()], [6, 10 + randValue()], [7, 15 + randValue()], [8, 20 + randValue()], [9, 25 + randValue()], [10, 30 + randValue()], [11, 35 + randValue()], [12, 25 + randValue()], [13, 15 + randValue()], [14, 20 + randValue()], [15, 45 + randValue()], [16, 50 + randValue()], [17, 65 + randValue()], [18, 70 + randValue()], [19, 85 + randValue()], [20, 80 + randValue()], [21, 75 + randValue()], [22, 80 + randValue()], [23, 75 + randValue()], [24, 70 + randValue()], [25, 65 + randValue()], [26, 75 + randValue()], [27, 80 + randValue()], [28, 85 + randValue()], [29, 90 + randValue()], [30, 95 + randValue()]];\n    var visitors = [[1, randValue() - 5], [2, randValue() - 5], [3, randValue() - 5], [4, 6 + randValue()], [5, 5 + randValue()], [6, 20 + randValue()], [7, 25 + randValue()], [8, 36 + randValue()], [9, 26 + randValue()], [10, 38 + randValue()], [11, 39 + randValue()], [12, 50 + randValue()], [13, 51 + randValue()], [14, 12 + randValue()], [15, 13 + randValue()], [16, 14 + randValue()], [17, 15 + randValue()], [18, 15 + randValue()], [19, 16 + randValue()], [20, 17 + randValue()], [21, 18 + randValue()], [22, 19 + randValue()], [23, 20 + randValue()], [24, 21 + randValue()], [25, 14 + randValue()], [26, 24 + randValue()], [27, 25 + randValue()], [28, 26 + randValue()], [29, 27 + randValue()], [30, 31 + randValue()]];\n    var plot = $.plot($(\"#kt_docs_flot_axis\"), [{\n      data: pageviews,\n      label: \"Unique Visits\",\n      lines: {\n        lineWidth: 1\n      },\n      shadowSize: 0\n    }, {\n      data: visitors,\n      label: \"Page Views\",\n      lines: {\n        lineWidth: 1\n      },\n      shadowSize: 0\n    }], {\n      series: {\n        lines: {\n          show: true,\n          lineWidth: 2,\n          fill: true,\n          fillColor: {\n            colors: [{\n              opacity: 0.05\n            }, {\n              opacity: 0.01\n            }]\n          }\n        },\n        points: {\n          show: true,\n          radius: 3,\n          lineWidth: 1\n        },\n        shadowSize: 2\n      },\n      grid: {\n        hoverable: true,\n        clickable: true,\n        tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderWidth: 1\n      },\n      colors: [KTUtil.getCssVariableValue('--bs-active-primary'), KTUtil.getCssVariableValue('--bs-active-danger')],\n      xaxis: {\n        ticks: 11,\n        tickDecimals: 0,\n        tickColor: KTUtil.getCssVariableValue('--bs-active-dark')\n      },\n      yaxis: {\n        ticks: 11,\n        tickDecimals: 0,\n        tickColor: KTUtil.getCssVariableValue('--bs-active-dark')\n      }\n    });\n\n    function showTooltip(x, y, contents) {\n      $('<div id=\"tooltip\">' + contents + '</div>').css({\n        position: 'absolute',\n        display: 'none',\n        top: y + 5,\n        left: x + 15,\n        border: '1px solid ' + KTUtil.getCssVariableValue('--bs-light-dark'),\n        padding: '4px',\n        color: +KTUtil.getCssVariableValue('--bs-active-dark'),\n        'border-radius': '3px',\n        'background-color': +KTUtil.getCssVariableValue('--bs-light-dark'),\n        opacity: 0.80\n      }).appendTo(\"body\").fadeIn(200);\n    }\n\n    var previousPoint = null;\n    $(\"#chart_2\").bind(\"plothover\", function (event, pos, item) {\n      $(\"#x\").text(pos.x.toFixed(2));\n      $(\"#y\").text(pos.y.toFixed(2));\n\n      if (item) {\n        if (previousPoint != item.dataIndex) {\n          previousPoint = item.dataIndex;\n          $(\"#tooltip\").remove();\n          var x = item.datapoint[0].toFixed(2),\n              y = item.datapoint[1].toFixed(2);\n          showTooltip(item.pageX, item.pageY, item.series.label + \" of \" + x + \" = \" + y);\n        }\n      } else {\n        $(\"#tooltip\").remove();\n        previousPoint = null;\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleAxis();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoAxis.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL2F4aXMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsY0FBYyxHQUFHLFlBQVk7QUFDN0I7QUFDQSxNQUFJQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFZO0FBQzFCLGFBQVNDLFNBQVQsR0FBcUI7QUFDMUIsYUFBUUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQixJQUFJLEVBQUosR0FBUyxFQUExQixDQUFYLENBQUQsR0FBOEMsRUFBckQ7QUFDQTs7QUFDRCxRQUFJQyxTQUFTLEdBQUcsQ0FDZixDQUFDLENBQUQsRUFBSUosU0FBUyxFQUFiLENBRGUsRUFFZixDQUFDLENBQUQsRUFBSUEsU0FBUyxFQUFiLENBRmUsRUFHZixDQUFDLENBQUQsRUFBSSxJQUFJQSxTQUFTLEVBQWpCLENBSGUsRUFJZixDQUFDLENBQUQsRUFBSSxJQUFJQSxTQUFTLEVBQWpCLENBSmUsRUFLZixDQUFDLENBQUQsRUFBSSxJQUFJQSxTQUFTLEVBQWpCLENBTGUsRUFNZixDQUFDLENBQUQsRUFBSSxLQUFLQSxTQUFTLEVBQWxCLENBTmUsRUFPZixDQUFDLENBQUQsRUFBSSxLQUFLQSxTQUFTLEVBQWxCLENBUGUsRUFRZixDQUFDLENBQUQsRUFBSSxLQUFLQSxTQUFTLEVBQWxCLENBUmUsRUFTZixDQUFDLENBQUQsRUFBSSxLQUFLQSxTQUFTLEVBQWxCLENBVGUsRUFVZixDQUFDLEVBQUQsRUFBSyxLQUFLQSxTQUFTLEVBQW5CLENBVmUsRUFXZixDQUFDLEVBQUQsRUFBSyxLQUFLQSxTQUFTLEVBQW5CLENBWGUsRUFZZixDQUFDLEVBQUQsRUFBSyxLQUFLQSxTQUFTLEVBQW5CLENBWmUsRUFhZixDQUFDLEVBQUQsRUFBSyxLQUFLQSxTQUFTLEVBQW5CLENBYmUsRUFjZixDQUFDLEVBQUQsRUFBSyxLQUFLQSxTQUFTLEVBQW5CLENB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QUQsQ0FBRCxDQUFjZ0QsTUFBZDtBQUNBLGNBQUlyQixDQUFDLEdBQUdpQixJQUFJLENBQUNLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCSCxPQUFsQixDQUEwQixDQUExQixDQUFSO0FBQUEsY0FDQ2xCLENBQUMsR0FBR2dCLElBQUksQ0FBQ0ssU0FBTCxDQUFlLENBQWYsRUFBa0JILE9BQWxCLENBQTBCLENBQTFCLENBREw7QUFHQXBCLFVBQUFBLFdBQVcsQ0FBQ2tCLElBQUksQ0FBQ00sS0FBTixFQUFhTixJQUFJLENBQUNPLEtBQWxCLEVBQXlCUCxJQUFJLENBQUN0QyxNQUFMLENBQVlKLEtBQVosR0FBb0IsTUFBcEIsR0FBNkJ5QixDQUE3QixHQUFpQyxLQUFqQyxHQUF5Q0MsQ0FBbEUsQ0FBWDtBQUNBO0FBQ0QsT0FWRCxNQVVPO0FBQ041QixRQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNnRCxNQUFkO0FBQ0FSLFFBQUFBLGFBQWEsR0FBRyxJQUFoQjtBQUNBO0FBQ0QsS0FsQkQ7QUFtQkcsR0FoS0Q7O0FBa0tBLFNBQU87QUFDSDtBQUNBWSxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZDVELE1BQUFBLFdBQVc7QUFDZDtBQUpFLEdBQVA7QUFNSCxDQTFLb0IsRUFBckIsQyxDQTRLQTs7O0FBQ0EwQixNQUFNLENBQUNtQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDOUQsRUFBQUEsY0FBYyxDQUFDNkQsSUFBZjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL2F4aXMuanM/MzExNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURmxvdERlbW9BeGlzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVBeGlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiByYW5kVmFsdWUoKSB7XG5cdFx0XHRyZXR1cm4gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxICsgNDAgLSAyMCkpKSArIDIwO1xuXHRcdH1cblx0XHR2YXIgcGFnZXZpZXdzID0gW1xuXHRcdFx0WzEsIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsyLCByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMywgMiArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFs0LCAzICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzUsIDUgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbNiwgMTAgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbNywgMTUgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbOCwgMjAgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbOSwgMjUgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMTAsIDMwICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzExLCAzNSArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsxMiwgMjUgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMTMsIDE1ICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzE0LCAyMCArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsxNSwgNDUgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMTYsIDUwICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzE3LCA2NSArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsxOCwgNzAgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMTksIDg1ICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzIwLCA4MCArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsyMSwgNzUgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMjIsIDgwICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzIzLCA3NSArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsyNCwgNzAgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMjUsIDY1ICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzI2LCA3NSArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsyNywgODAgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMjgsIDg1ICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzI5LCA5MCArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFszMCwgOTUgKyByYW5kVmFsdWUoKV1cblx0XHRdO1xuXHRcdHZhciB2aXNpdG9ycyA9IFtcblx0XHRcdFsxLCByYW5kVmFsdWUoKSAtIDVdLFxuXHRcdFx0WzIsIHJhbmRWYWx1ZSgpIC0gNV0sXG5cdFx0XHRbMywgcmFuZFZhbHVlKCkgLSA1XSxcblx0XHRcdFs0LCA2ICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzUsIDUgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbNiwgMjAgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbNywgMjUgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbOCwgMzYgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbOSwgMjYgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMTAsIDM4ICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzExLCAzOSArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsxMiwgNTAgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMTMsIDUxICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzE0LCAxMiArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsxNSwgMTMgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMTYsIDE0ICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzE3LCAxNSArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsxOCwgMTUgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMTksIDE2ICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzIwLCAxNyArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsyMSwgMTggKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMjIsIDE5ICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzIzLCAyMCArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsyNCwgMjEgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMjUsIDE0ICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzI2LCAyNCArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFsyNywgMjUgKyByYW5kVmFsdWUoKV0sXG5cdFx0XHRbMjgsIDI2ICsgcmFuZFZhbHVlKCldLFxuXHRcdFx0WzI5LCAyNyArIHJhbmRWYWx1ZSgpXSxcblx0XHRcdFszMCwgMzEgKyByYW5kVmFsdWUoKV1cblx0XHRdO1xuXG5cdFx0dmFyIHBsb3QgPSAkLnBsb3QoJChcIiNrdF9kb2NzX2Zsb3RfYXhpc1wiKSwgW3tcblx0XHRcdGRhdGE6IHBhZ2V2aWV3cyxcblx0XHRcdGxhYmVsOiBcIlVuaXF1ZSBWaXNpdHNcIixcblx0XHRcdGxpbmVzOiB7XG5cdFx0XHRcdGxpbmVXaWR0aDogMSxcblx0XHRcdH0sXG5cdFx0XHRzaGFkb3dTaXplOiAwXG5cblx0XHR9LCB7XG5cdFx0XHRkYXRhOiB2aXNpdG9ycyxcblx0XHRcdGxhYmVsOiBcIlBhZ2UgVmlld3NcIixcblx0XHRcdGxpbmVzOiB7XG5cdFx0XHRcdGxpbmVXaWR0aDogMSxcblx0XHRcdH0sXG5cdFx0XHRzaGFkb3dTaXplOiAwXG5cdFx0fV0sIHtcblx0XHRcdHNlcmllczoge1xuXHRcdFx0XHRsaW5lczoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdFx0bGluZVdpZHRoOiAyLFxuXHRcdFx0XHRcdGZpbGw6IHRydWUsXG5cdFx0XHRcdFx0ZmlsbENvbG9yOiB7XG5cdFx0XHRcdFx0XHRjb2xvcnM6IFt7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuMDVcblx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMC4wMVxuXHRcdFx0XHRcdFx0fV1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHBvaW50czoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdFx0cmFkaXVzOiAzLFxuXHRcdFx0XHRcdGxpbmVXaWR0aDogMVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzaGFkb3dTaXplOiAyXG5cdFx0XHR9LFxuXHRcdFx0Z3JpZDoge1xuXHRcdFx0XHRob3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcblx0XHRcdFx0dGlja0NvbG9yOiBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC1kYXJrJyksXG5cdFx0XHRcdGJvcmRlckNvbG9yOiBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC1kYXJrJyksXG5cdFx0XHRcdGJvcmRlcldpZHRoOiAxXG5cdFx0XHR9LFxuXHRcdFx0Y29sb3JzOiBbS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLXByaW1hcnknKSwgS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLWRhbmdlcicpXSxcblx0XHRcdHhheGlzOiB7XG5cdFx0XHRcdHRpY2tzOiAxMSxcblx0XHRcdFx0dGlja0RlY2ltYWxzOiAwLFxuXHRcdFx0XHR0aWNrQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1kYXJrJyksXG5cdFx0XHR9LFxuXHRcdFx0eWF4aXM6IHtcblx0XHRcdFx0dGlja3M6IDExLFxuXHRcdFx0XHR0aWNrRGVjaW1hbHM6IDAsXG5cdFx0XHRcdHRpY2tDb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLWRhcmsnKSxcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGZ1bmN0aW9uIHNob3dUb29sdGlwKHgsIHksIGNvbnRlbnRzKSB7XG5cdFx0XHQkKCc8ZGl2IGlkPVwidG9vbHRpcFwiPicgKyBjb250ZW50cyArICc8L2Rpdj4nKS5jc3Moe1xuXHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0XHR0b3A6IHkgKyA1LFxuXHRcdFx0XHRsZWZ0OiB4ICsgMTUsXG5cdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAnICsgS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtZGFyaycpLFxuXHRcdFx0XHRwYWRkaW5nOiAnNHB4Jyxcblx0XHRcdFx0Y29sb3I6ICArIEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1kYXJrJyksXG5cdFx0XHRcdCdib3JkZXItcmFkaXVzJzogJzNweCcsXG5cdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogICsgS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtZGFyaycpLFxuXHRcdFx0XHRvcGFjaXR5OiAwLjgwXG5cdFx0XHR9KS5hcHBlbmRUbyhcImJvZHlcIikuZmFkZUluKDIwMCk7XG5cdFx0fVxuXG5cdFx0dmFyIHByZXZpb3VzUG9pbnQgPSBudWxsO1xuXHRcdCQoXCIjY2hhcnRfMlwiKS5iaW5kKFwicGxvdGhvdmVyXCIsIGZ1bmN0aW9uKGV2ZW50LCBwb3MsIGl0ZW0pIHtcblx0XHRcdCQoXCIjeFwiKS50ZXh0KHBvcy54LnRvRml4ZWQoMikpO1xuXHRcdFx0JChcIiN5XCIpLnRleHQocG9zLnkudG9GaXhlZCgyKSk7XG5cblx0XHRcdGlmIChpdGVtKSB7XG5cdFx0XHRcdGlmIChwcmV2aW91c1BvaW50ICE9IGl0ZW0uZGF0YUluZGV4KSB7XG5cdFx0XHRcdFx0cHJldmlvdXNQb2ludCA9IGl0ZW0uZGF0YUluZGV4O1xuXG5cdFx0XHRcdFx0JChcIiN0b29sdGlwXCIpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdHZhciB4ID0gaXRlbS5kYXRhcG9pbnRbMF0udG9GaXhlZCgyKSxcblx0XHRcdFx0XHRcdHkgPSBpdGVtLmRhdGFwb2ludFsxXS50b0ZpeGVkKDIpO1xuXG5cdFx0XHRcdFx0c2hvd1Rvb2x0aXAoaXRlbS5wYWdlWCwgaXRlbS5wYWdlWSwgaXRlbS5zZXJpZXMubGFiZWwgKyBcIiBvZiBcIiArIHggKyBcIiA9IFwiICsgeSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoXCIjdG9vbHRpcFwiKS5yZW1vdmUoKTtcblx0XHRcdFx0cHJldmlvdXNQb2ludCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlQXhpcygpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtURmxvdERlbW9BeGlzLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktURmxvdERlbW9BeGlzIiwiZXhhbXBsZUF4aXMiLCJyYW5kVmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwYWdldmlld3MiLCJ2aXNpdG9ycyIsInBsb3QiLCIkIiwiZGF0YSIsImxhYmVsIiwibGluZXMiLCJsaW5lV2lkdGgiLCJzaGFkb3dTaXplIiwic2VyaWVzIiwic2hvdyIsImZpbGwiLCJmaWxsQ29sb3IiLCJjb2xvcnMiLCJvcGFjaXR5IiwicG9pbnRzIiwicmFkaXVzIiwiZ3JpZCIsImhvdmVyYWJsZSIsImNsaWNrYWJsZSIsInRpY2tDb2xvciIsIktUVXRpbCIsImdldENzc1ZhcmlhYmxlVmFsdWUiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwieGF4aXMiLCJ0aWNrcyIsInRpY2tEZWNpbWFscyIsInlheGlzIiwic2hvd1Rvb2x0aXAiLCJ4IiwieSIsImNvbnRlbnRzIiwiY3NzIiwicG9zaXRpb24iLCJkaXNwbGF5IiwidG9wIiwibGVmdCIsImJvcmRlciIsInBhZGRpbmciLCJjb2xvciIsImFwcGVuZFRvIiwiZmFkZUluIiwicHJldmlvdXNQb2ludCIsImJpbmQiLCJldmVudCIsInBvcyIsIml0ZW0iLCJ0ZXh0IiwidG9GaXhlZCIsImRhdGFJbmRleCIsInJlbW92ZSIsImRhdGFwb2ludCIsInBhZ2VYIiwicGFnZVkiLCJpbml0Iiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/flotcharts/axis.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/flotcharts/axis.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=axis.js.map