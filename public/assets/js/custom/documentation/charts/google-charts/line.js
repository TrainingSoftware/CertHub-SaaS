/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*******************************************************************!*\
  !*** ../src/js/custom/documentation/charts/google-charts/line.js ***!
  \*******************************************************************/


// Class definition
var KTGoogleChartLineDemo = function () {
    // Private functions
    var exampleLine = function () {
        // GOOGLE CHARTS INIT
        google.load('visualization', '1', {
            packages: ['corechart', 'bar', 'line']
        });

        google.setOnLoadCallback(function () {
            // LINE CHART
            var data = new google.visualization.DataTable();
            data.addColumn('number', 'Day');
            data.addColumn('number', 'Guardians of the Galaxy');
            data.addColumn('number', 'The Avengers');
            data.addColumn('number', 'Transformers: Age of Extinction');

            data.addRows([
                [1, 37.8, 80.8, 41.8],
                [2, 30.9, 69.5, 32.4],
                [3, 25.4, 57, 25.7],
                [4, 11.7, 18.8, 10.5],
                [5, 11.9, 17.6, 10.4],
                [6, 8.8, 13.6, 7.7],
                [7, 7.6, 12.3, 9.6],
                [8, 12.3, 29.2, 10.6],
                [9, 16.9, 42.9, 14.8],
                [10, 12.8, 30.9, 11.6],
                [11, 5.3, 7.9, 4.7],
                [12, 6.6, 8.4, 5.2],
                [13, 4.8, 6.3, 3.6],
                [14, 4.2, 6.2, 3.4]
            ]);

            var options = {
                chart: {
                    title: 'Box Office Earnings in First Two Weeks of Opening',
                    subtitle: 'in millions of dollars (USD)'
                },
                colors: ['#6e4ff5', '#f6aa33', '#fe3995']
            };

            var chart = new google.charts.Line(document.getElementById('kt_docs_google_chart_line'));
            chart.draw(data, options);
        });
    }

    return {
        // Public Functions
        init: function () {
            exampleLine();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGoogleChartLineDemo.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/google-charts/line.js":
/*!****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/google-charts/line.js ***!
  \****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGoogleChartLineDemo = function () {\n  // Private functions\n  var exampleLine = function exampleLine() {\n    // GOOGLE CHARTS INIT\n    google.load('visualization', '1', {\n      packages: ['corechart', 'bar', 'line']\n    });\n    google.setOnLoadCallback(function () {\n      // LINE CHART\n      var data = new google.visualization.DataTable();\n      data.addColumn('number', 'Day');\n      data.addColumn('number', 'Guardians of the Galaxy');\n      data.addColumn('number', 'The Avengers');\n      data.addColumn('number', 'Transformers: Age of Extinction');\n      data.addRows([[1, 37.8, 80.8, 41.8], [2, 30.9, 69.5, 32.4], [3, 25.4, 57, 25.7], [4, 11.7, 18.8, 10.5], [5, 11.9, 17.6, 10.4], [6, 8.8, 13.6, 7.7], [7, 7.6, 12.3, 9.6], [8, 12.3, 29.2, 10.6], [9, 16.9, 42.9, 14.8], [10, 12.8, 30.9, 11.6], [11, 5.3, 7.9, 4.7], [12, 6.6, 8.4, 5.2], [13, 4.8, 6.3, 3.6], [14, 4.2, 6.2, 3.4]]);\n      var options = {\n        chart: {\n          title: 'Box Office Earnings in First Two Weeks of Opening',\n          subtitle: 'in millions of dollars (USD)'\n        },\n        colors: ['#6e4ff5', '#f6aa33', '#fe3995']\n      };\n      var chart = new google.charts.Line(document.getElementById('kt_docs_google_chart_line'));\n      chart.draw(data, options);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleLine();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGoogleChartLineDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9nb29nbGUtY2hhcnRzL2xpbmUuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEscUJBQXFCLEdBQUcsWUFBWTtBQUNwQztBQUNBLE1BQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVk7QUFDMUI7QUFDQUMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksZUFBWixFQUE2QixHQUE3QixFQUFrQztBQUM5QkMsTUFBQUEsUUFBUSxFQUFFLENBQUMsV0FBRCxFQUFjLEtBQWQsRUFBcUIsTUFBckI7QUFEb0IsS0FBbEM7QUFJQUYsSUFBQUEsTUFBTSxDQUFDRyxpQkFBUCxDQUF5QixZQUFZO0FBQ2pDO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLElBQUlKLE1BQU0sQ0FBQ0ssYUFBUCxDQUFxQkMsU0FBekIsRUFBWDtBQUNBRixNQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZSxRQUFmLEVBQXlCLEtBQXpCO0FBQ0FILE1BQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlLFFBQWYsRUFBeUIseUJBQXpCO0FBQ0FILE1BQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlLFFBQWYsRUFBeUIsY0FBekI7QUFDQUgsTUFBQUEsSUFBSSxDQUFDRyxTQUFMLENBQWUsUUFBZixFQUF5QixpQ0FBekI7QUFFQUgsTUFBQUEsSUFBSSxDQUFDSSxPQUFMLENBQWEsQ0FDVCxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixDQURTLEVBRVQsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsQ0FGUyxFQUdULENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxFQUFWLEVBQWMsSUFBZCxDQUhTLEVBSVQsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsQ0FKUyxFQUtULENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLENBTFMsRUFNVCxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsSUFBVCxFQUFlLEdBQWYsQ0FOUyxFQU9ULENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxJQUFULEVBQWUsR0FBZixDQVBTLEVBUVQsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsQ0FSUyxFQVNULENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLENBVFMsRUFVVCxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsSUFBWCxFQUFpQixJQUFqQixDQVZTLEVBV1QsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxHQUFmLENBWFMsRUFZVCxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLEdBQWYsQ0FaUyxFQWFULENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLEVBQWUsR0FBZixDQWJTLEVBY1QsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxHQUFmLENBZFMsQ0FBYjtBQWlCQSxVQUFJQyxPQUFPLEdBQUc7QUFDVkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLEtBQUssRUFBRSxtREFESjtBQUVIQyxVQUFBQSxRQUFRLEVBQUU7QUFGUCxTQURHO0FBS1ZDLFFBQUFBLE1BQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCO0FBTEUsT0FBZDtBQVFBLFVBQUlILEtBQUssR0FBRyxJQUFJVixNQUFNLENBQUNjLE1BQVAsQ0FBY0MsSUFBbEIsQ0FBdUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QiwyQkFBeEIsQ0FBdkIsQ0FBWjtBQUNBUCxNQUFBQSxLQUFLLENBQUNRLElBQU4sQ0FBV2QsSUFBWCxFQUFpQkssT0FBakI7QUFDSCxLQW5DRDtBQW9DSCxHQTFDRDs7QUE0Q0EsU0FBTztBQUNIO0FBQ0FVLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkcEIsTUFBQUEsV0FBVztBQUNkO0FBSkUsR0FBUDtBQU1ILENBcEQyQixFQUE1QixDLENBc0RBOzs7QUFDQXFCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ3ZCLEVBQUFBLHFCQUFxQixDQUFDcUIsSUFBdEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvZ29vZ2xlLWNoYXJ0cy9saW5lLmpzPzYyZDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEdvb2dsZUNoYXJ0TGluZURlbW8gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEdPT0dMRSBDSEFSVFMgSU5JVFxuICAgICAgICBnb29nbGUubG9hZCgndmlzdWFsaXphdGlvbicsICcxJywge1xuICAgICAgICAgICAgcGFja2FnZXM6IFsnY29yZWNoYXJ0JywgJ2JhcicsICdsaW5lJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ29vZ2xlLnNldE9uTG9hZENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIExJTkUgQ0hBUlRcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ251bWJlcicsICdEYXknKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnR3VhcmRpYW5zIG9mIHRoZSBHYWxheHknKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnVGhlIEF2ZW5nZXJzJyk7XG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignbnVtYmVyJywgJ1RyYW5zZm9ybWVyczogQWdlIG9mIEV4dGluY3Rpb24nKTtcblxuICAgICAgICAgICAgZGF0YS5hZGRSb3dzKFtcbiAgICAgICAgICAgICAgICBbMSwgMzcuOCwgODAuOCwgNDEuOF0sXG4gICAgICAgICAgICAgICAgWzIsIDMwLjksIDY5LjUsIDMyLjRdLFxuICAgICAgICAgICAgICAgIFszLCAyNS40LCA1NywgMjUuN10sXG4gICAgICAgICAgICAgICAgWzQsIDExLjcsIDE4LjgsIDEwLjVdLFxuICAgICAgICAgICAgICAgIFs1LCAxMS45LCAxNy42LCAxMC40XSxcbiAgICAgICAgICAgICAgICBbNiwgOC44LCAxMy42LCA3LjddLFxuICAgICAgICAgICAgICAgIFs3LCA3LjYsIDEyLjMsIDkuNl0sXG4gICAgICAgICAgICAgICAgWzgsIDEyLjMsIDI5LjIsIDEwLjZdLFxuICAgICAgICAgICAgICAgIFs5LCAxNi45LCA0Mi45LCAxNC44XSxcbiAgICAgICAgICAgICAgICBbMTAsIDEyLjgsIDMwLjksIDExLjZdLFxuICAgICAgICAgICAgICAgIFsxMSwgNS4zLCA3LjksIDQuN10sXG4gICAgICAgICAgICAgICAgWzEyLCA2LjYsIDguNCwgNS4yXSxcbiAgICAgICAgICAgICAgICBbMTMsIDQuOCwgNi4zLCAzLjZdLFxuICAgICAgICAgICAgICAgIFsxNCwgNC4yLCA2LjIsIDMuNF1cbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0JveCBPZmZpY2UgRWFybmluZ3MgaW4gRmlyc3QgVHdvIFdlZWtzIG9mIE9wZW5pbmcnLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ2luIG1pbGxpb25zIG9mIGRvbGxhcnMgKFVTRCknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzZlNGZmNScsICcjZjZhYTMzJywgJyNmZTM5OTUnXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IGdvb2dsZS5jaGFydHMuTGluZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19nb29nbGVfY2hhcnRfbGluZScpKTtcbiAgICAgICAgICAgIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZXhhbXBsZUxpbmUoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVEdvb2dsZUNoYXJ0TGluZURlbW8uaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RHb29nbGVDaGFydExpbmVEZW1vIiwiZXhhbXBsZUxpbmUiLCJnb29nbGUiLCJsb2FkIiwicGFja2FnZXMiLCJzZXRPbkxvYWRDYWxsYmFjayIsImRhdGEiLCJ2aXN1YWxpemF0aW9uIiwiRGF0YVRhYmxlIiwiYWRkQ29sdW1uIiwiYWRkUm93cyIsIm9wdGlvbnMiLCJjaGFydCIsInRpdGxlIiwic3VidGl0bGUiLCJjb2xvcnMiLCJjaGFydHMiLCJMaW5lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRyYXciLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/google-charts/line.js\n");

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
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=line.js.map