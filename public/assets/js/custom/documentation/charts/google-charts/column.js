/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*********************************************************************!*\
  !*** ../src/js/custom/documentation/charts/google-charts/column.js ***!
  \*********************************************************************/


// Class definition
var KTGoogleChartColumnDemo = function () {
    // Private functions
    var exampleColumn = function () {
        // GOOGLE CHARTS INIT
        google.load('visualization', '1', {
            packages: ['corechart', 'bar', 'line']
        });

        google.setOnLoadCallback(function () {
            // COLUMN CHART
            var data = new google.visualization.DataTable();
            data.addColumn('timeofday', 'Time of Day');
            data.addColumn('number', 'Motivation Level');
            data.addColumn('number', 'Energy Level');

            data.addRows([
                [{
                    v: [8, 0, 0],
                    f: '8 am'
                }, 1, .25],
                [{
                    v: [9, 0, 0],
                    f: '9 am'
                }, 2, .5],
                [{
                    v: [10, 0, 0],
                    f: '10 am'
                }, 3, 1],
                [{
                    v: [11, 0, 0],
                    f: '11 am'
                }, 4, 2.25],
                [{
                    v: [12, 0, 0],
                    f: '12 pm'
                }, 5, 2.25],
                [{
                    v: [13, 0, 0],
                    f: '1 pm'
                }, 6, 3],
                [{
                    v: [14, 0, 0],
                    f: '2 pm'
                }, 7, 4],
                [{
                    v: [15, 0, 0],
                    f: '3 pm'
                }, 8, 5.25],
                [{
                    v: [16, 0, 0],
                    f: '4 pm'
                }, 9, 7.5],
                [{
                    v: [17, 0, 0],
                    f: '5 pm'
                }, 10, 10],
            ]);

            var options = {
                title: 'Motivation and Energy Level Throughout the Day',
                focusTarget: 'category',
                hAxis: {
                    title: 'Time of Day',
                    format: 'h:mm a',
                    viewWindow: {
                        min: [7, 30, 0],
                        max: [17, 30, 0]
                    },
                },
                vAxis: {
                    title: 'Rating (scale of 1-10)'
                },
                colors: ['#6e4ff5', '#fe3995']
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('kt_docs_google_chart_column'));
            chart.draw(data, options);
        });
    }

    return {
        // Public Functions
        init: function () {
            exampleColumn();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGoogleChartColumnDemo.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/google-charts/column.js":
/*!******************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/google-charts/column.js ***!
  \******************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGoogleChartColumnDemo = function () {\n  // Private functions\n  var exampleColumn = function exampleColumn() {\n    // GOOGLE CHARTS INIT\n    google.load('visualization', '1', {\n      packages: ['corechart', 'bar', 'line']\n    });\n    google.setOnLoadCallback(function () {\n      // COLUMN CHART\n      var data = new google.visualization.DataTable();\n      data.addColumn('timeofday', 'Time of Day');\n      data.addColumn('number', 'Motivation Level');\n      data.addColumn('number', 'Energy Level');\n      data.addRows([[{\n        v: [8, 0, 0],\n        f: '8 am'\n      }, 1, .25], [{\n        v: [9, 0, 0],\n        f: '9 am'\n      }, 2, .5], [{\n        v: [10, 0, 0],\n        f: '10 am'\n      }, 3, 1], [{\n        v: [11, 0, 0],\n        f: '11 am'\n      }, 4, 2.25], [{\n        v: [12, 0, 0],\n        f: '12 pm'\n      }, 5, 2.25], [{\n        v: [13, 0, 0],\n        f: '1 pm'\n      }, 6, 3], [{\n        v: [14, 0, 0],\n        f: '2 pm'\n      }, 7, 4], [{\n        v: [15, 0, 0],\n        f: '3 pm'\n      }, 8, 5.25], [{\n        v: [16, 0, 0],\n        f: '4 pm'\n      }, 9, 7.5], [{\n        v: [17, 0, 0],\n        f: '5 pm'\n      }, 10, 10]]);\n      var options = {\n        title: 'Motivation and Energy Level Throughout the Day',\n        focusTarget: 'category',\n        hAxis: {\n          title: 'Time of Day',\n          format: 'h:mm a',\n          viewWindow: {\n            min: [7, 30, 0],\n            max: [17, 30, 0]\n          }\n        },\n        vAxis: {\n          title: 'Rating (scale of 1-10)'\n        },\n        colors: ['#6e4ff5', '#fe3995']\n      };\n      var chart = new google.visualization.ColumnChart(document.getElementById('kt_docs_google_chart_column'));\n      chart.draw(data, options);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleColumn();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGoogleChartColumnDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9nb29nbGUtY2hhcnRzL2NvbHVtbi5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSx1QkFBdUIsR0FBRyxZQUFZO0FBQ3RDO0FBQ0EsTUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFZO0FBQzVCO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQVosRUFBNkIsR0FBN0IsRUFBa0M7QUFDOUJDLE1BQUFBLFFBQVEsRUFBRSxDQUFDLFdBQUQsRUFBYyxLQUFkLEVBQXFCLE1BQXJCO0FBRG9CLEtBQWxDO0FBSUFGLElBQUFBLE1BQU0sQ0FBQ0csaUJBQVAsQ0FBeUIsWUFBWTtBQUNqQztBQUNBLFVBQUlDLElBQUksR0FBRyxJQUFJSixNQUFNLENBQUNLLGFBQVAsQ0FBcUJDLFNBQXpCLEVBQVg7QUFDQUYsTUFBQUEsSUFBSSxDQUFDRyxTQUFMLENBQWUsV0FBZixFQUE0QixhQUE1QjtBQUNBSCxNQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZSxRQUFmLEVBQXlCLGtCQUF6QjtBQUNBSCxNQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZSxRQUFmLEVBQXlCLGNBQXpCO0FBRUFILE1BQUFBLElBQUksQ0FBQ0ksT0FBTCxDQUFhLENBQ1QsQ0FBQztBQUNHQyxRQUFBQSxDQUFDLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETjtBQUVHQyxRQUFBQSxDQUFDLEVBQUU7QUFGTixPQUFELEVBR0csQ0FISCxFQUdNLEdBSE4sQ0FEUyxFQUtULENBQUM7QUFDR0QsUUFBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE47QUFFR0MsUUFBQUEsQ0FBQyxFQUFFO0FBRk4sT0FBRCxFQUdHLENBSEgsRUFHTSxFQUhOLENBTFMsRUFTVCxDQUFDO0FBQ0dELFFBQUFBLENBQUMsRUFBRSxDQUFDLEVBQUQsRUFB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L2NoYXJ0cy9nb29nbGUtY2hhcnRzL2NvbHVtbi5qcz9kY2QzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RHb29nbGVDaGFydENvbHVtbkRlbW8gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUNvbHVtbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gR09PR0xFIENIQVJUUyBJTklUXG4gICAgICAgIGdvb2dsZS5sb2FkKCd2aXN1YWxpemF0aW9uJywgJzEnLCB7XG4gICAgICAgICAgICBwYWNrYWdlczogWydjb3JlY2hhcnQnLCAnYmFyJywgJ2xpbmUnXVxuICAgICAgICB9KTtcblxuICAgICAgICBnb29nbGUuc2V0T25Mb2FkQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ09MVU1OIENIQVJUXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCd0aW1lb2ZkYXknLCAnVGltZSBvZiBEYXknKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnTW90aXZhdGlvbiBMZXZlbCcpO1xuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ251bWJlcicsICdFbmVyZ3kgTGV2ZWwnKTtcblxuICAgICAgICAgICAgZGF0YS5hZGRSb3dzKFtcbiAgICAgICAgICAgICAgICBbe1xuICAgICAgICAgICAgICAgICAgICB2OiBbOCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgIGY6ICc4IGFtJ1xuICAgICAgICAgICAgICAgIH0sIDEsIC4yNV0sXG4gICAgICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICAgICAgdjogWzksIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICBmOiAnOSBhbSdcbiAgICAgICAgICAgICAgICB9LCAyLCAuNV0sXG4gICAgICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICAgICAgdjogWzEwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgZjogJzEwIGFtJ1xuICAgICAgICAgICAgICAgIH0sIDMsIDFdLFxuICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgIHY6IFsxMSwgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgIGY6ICcxMSBhbSdcbiAgICAgICAgICAgICAgICB9LCA0LCAyLjI1XSxcbiAgICAgICAgICAgICAgICBbe1xuICAgICAgICAgICAgICAgICAgICB2OiBbMTIsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICBmOiAnMTIgcG0nXG4gICAgICAgICAgICAgICAgfSwgNSwgMi4yNV0sXG4gICAgICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICAgICAgdjogWzEzLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgZjogJzEgcG0nXG4gICAgICAgICAgICAgICAgfSwgNiwgM10sXG4gICAgICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICAgICAgdjogWzE0LCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgZjogJzIgcG0nXG4gICAgICAgICAgICAgICAgfSwgNywgNF0sXG4gICAgICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICAgICAgdjogWzE1LCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgZjogJzMgcG0nXG4gICAgICAgICAgICAgICAgfSwgOCwgNS4yNV0sXG4gICAgICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICAgICAgdjogWzE2LCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgZjogJzQgcG0nXG4gICAgICAgICAgICAgICAgfSwgOSwgNy41XSxcbiAgICAgICAgICAgICAgICBbe1xuICAgICAgICAgICAgICAgICAgICB2OiBbMTcsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICBmOiAnNSBwbSdcbiAgICAgICAgICAgICAgICB9LCAxMCwgMTBdLFxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTW90aXZhdGlvbiBhbmQgRW5lcmd5IExldmVsIFRocm91Z2hvdXQgdGhlIERheScsXG4gICAgICAgICAgICAgICAgZm9jdXNUYXJnZXQ6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgaEF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUaW1lIG9mIERheScsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJ2g6bW0gYScsXG4gICAgICAgICAgICAgICAgICAgIHZpZXdXaW5kb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogWzcsIDMwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogWzE3LCAzMCwgMF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZBeGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmF0aW5nIChzY2FsZSBvZiAxLTEwKSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbG9yczogWycjNmU0ZmY1JywgJyNmZTM5OTUnXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9kb2NzX2dvb2dsZV9jaGFydF9jb2x1bW4nKSk7XG4gICAgICAgICAgICBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGVDb2x1bW4oKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVEdvb2dsZUNoYXJ0Q29sdW1uRGVtby5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEdvb2dsZUNoYXJ0Q29sdW1uRGVtbyIsImV4YW1wbGVDb2x1bW4iLCJnb29nbGUiLCJsb2FkIiwicGFja2FnZXMiLCJzZXRPbkxvYWRDYWxsYmFjayIsImRhdGEiLCJ2aXN1YWxpemF0aW9uIiwiRGF0YVRhYmxlIiwiYWRkQ29sdW1uIiwiYWRkUm93cyIsInYiLCJmIiwib3B0aW9ucyIsInRpdGxlIiwiZm9jdXNUYXJnZXQiLCJoQXhpcyIsImZvcm1hdCIsInZpZXdXaW5kb3ciLCJtaW4iLCJtYXgiLCJ2QXhpcyIsImNvbG9ycyIsImNoYXJ0IiwiQ29sdW1uQ2hhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhdyIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/google-charts/column.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/google-charts/column.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=column.js.map