/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!******************************************************************!*\
  !*** ../src/js/custom/documentation/charts/google-charts/pie.js ***!
  \******************************************************************/


// Class definition
var KTGoogleChartPieDemo = function () {
    // Private functions
    var examplePie = function () {
        // GOOGLE CHARTS INIT
        google.load('visualization', '1', {
            packages: ['corechart', 'bar', 'line']
        });

        google.setOnLoadCallback(function () {
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ]);

            var options = {
                title: 'My Daily Activities',
                colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']
            };

            var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));
            chart.draw(data, options);

            // Example of a doughnut chart
            // var options = {
            //     pieHole: 0.4,
            //     colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']
            // };

            // var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));
            // chart.draw(data, options);
        });
    }

    return {
        // Public Functions
        init: function () {
            examplePie();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGoogleChartPieDemo.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/google-charts/pie.js":
/*!***************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/google-charts/pie.js ***!
  \***************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGoogleChartPieDemo = function () {\n  // Private functions\n  var examplePie = function examplePie() {\n    // GOOGLE CHARTS INIT\n    google.load('visualization', '1', {\n      packages: ['corechart', 'bar', 'line']\n    });\n    google.setOnLoadCallback(function () {\n      var data = google.visualization.arrayToDataTable([['Task', 'Hours per Day'], ['Work', 11], ['Eat', 2], ['Commute', 2], ['Watch TV', 2], ['Sleep', 7]]);\n      var options = {\n        title: 'My Daily Activities',\n        colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']\n      };\n      var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));\n      chart.draw(data, options); // Example of a doughnut chart\n      // var options = {\n      //     pieHole: 0.4,\n      //     colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']\n      // };\n      // var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));\n      // chart.draw(data, options);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      examplePie();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGoogleChartPieDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9nb29nbGUtY2hhcnRzL3BpZS5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxvQkFBb0IsR0FBRyxZQUFZO0FBQ25DO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBWTtBQUN6QjtBQUNBQyxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFaLEVBQTZCLEdBQTdCLEVBQWtDO0FBQzlCQyxNQUFBQSxRQUFRLEVBQUUsQ0FBQyxXQUFELEVBQWMsS0FBZCxFQUFxQixNQUFyQjtBQURvQixLQUFsQztBQUlBRixJQUFBQSxNQUFNLENBQUNHLGlCQUFQLENBQXlCLFlBQVk7QUFDakMsVUFBSUMsSUFBSSxHQUFHSixNQUFNLENBQUNLLGFBQVAsQ0FBcUJDLGdCQUFyQixDQUFzQyxDQUM3QyxDQUFDLE1BQUQsRUFBUyxlQUFULENBRDZDLEVBRTdDLENBQUMsTUFBRCxFQUFTLEVBQVQsQ0FGNkMsRUFHN0MsQ0FBQyxLQUFELEVBQVEsQ0FBUixDQUg2QyxFQUk3QyxDQUFDLFNBQUQsRUFBWSxDQUFaLENBSjZDLEVBSzdDLENBQUMsVUFBRCxFQUFhLENBQWIsQ0FMNkMsRUFNN0MsQ0FBQyxPQUFELEVBQVUsQ0FBVixDQU42QyxDQUF0QyxDQUFYO0FBU0EsVUFBSUMsT0FBTyxHQUFHO0FBQ1ZDLFFBQUFBLEtBQUssRUFBRSxxQkFERztBQUVWQyxRQUFBQSxNQUFNLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxFQUE2QyxTQUE3QyxFQUF3RCxTQUF4RDtBQUZFLE9BQWQ7QUFLQSxVQUFJQyxLQUFLLEdBQUcsSUFBSVYsTUFBTSxDQUFDSyxhQUFQLENBQXFCTSxRQUF6QixDQUFrQ0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLDBCQUF4QixDQUFsQyxDQUFaO0FBQ0FILE1BQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXVixJQUFYLEVBQWlCRyxPQUFqQixFQWhCaUMsQ0FrQmpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0gsS0ExQkQ7QUEyQkgsR0FqQ0Q7O0FBbUNBLFNBQU87QUFDSDtBQUNBUSxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZGhCLE1BQUFBLFVBQVU7QUFDYjtBQUpFLEdBQVA7QUFNSCxDQTNDMEIsRUFBM0IsQyxDQTZDQTs7O0FBQ0FpQixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENuQixFQUFBQSxvQkFBb0IsQ0FBQ2lCLElBQXJCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2dvb2dsZS1jaGFydHMvcGllLmpzP2QzOGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEdvb2dsZUNoYXJ0UGllRGVtbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlUGllID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBHT09HTEUgQ0hBUlRTIElOSVRcbiAgICAgICAgZ29vZ2xlLmxvYWQoJ3Zpc3VhbGl6YXRpb24nLCAnMScsIHtcbiAgICAgICAgICAgIHBhY2thZ2VzOiBbJ2NvcmVjaGFydCcsICdiYXInLCAnbGluZSddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdvb2dsZS5zZXRPbkxvYWRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGdvb2dsZS52aXN1YWxpemF0aW9uLmFycmF5VG9EYXRhVGFibGUoW1xuICAgICAgICAgICAgICAgIFsnVGFzaycsICdIb3VycyBwZXIgRGF5J10sXG4gICAgICAgICAgICAgICAgWydXb3JrJywgMTFdLFxuICAgICAgICAgICAgICAgIFsnRWF0JywgMl0sXG4gICAgICAgICAgICAgICAgWydDb21tdXRlJywgMl0sXG4gICAgICAgICAgICAgICAgWydXYXRjaCBUVicsIDJdLFxuICAgICAgICAgICAgICAgIFsnU2xlZXAnLCA3XVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTXkgRGFpbHkgQWN0aXZpdGllcycsXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZTM5OTUnLCAnI2Y2YWEzMycsICcjNmU0ZmY1JywgJyMyYWJlODEnLCAnI2M3ZDJlNycsICcjNTkzYWUxJ11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19nb29nbGVfY2hhcnRfcGllJykpO1xuICAgICAgICAgICAgY2hhcnQuZHJhdyhkYXRhLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gRXhhbXBsZSBvZiBhIGRvdWdobnV0IGNoYXJ0XG4gICAgICAgICAgICAvLyB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC8vICAgICBwaWVIb2xlOiAwLjQsXG4gICAgICAgICAgICAvLyAgICAgY29sb3JzOiBbJyNmZTM5OTUnLCAnI2Y2YWEzMycsICcjNmU0ZmY1JywgJyMyYWJlODEnLCAnI2M3ZDJlNycsICcjNTkzYWUxJ11cbiAgICAgICAgICAgIC8vIH07XG5cbiAgICAgICAgICAgIC8vIHZhciBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19nb29nbGVfY2hhcnRfcGllJykpO1xuICAgICAgICAgICAgLy8gY2hhcnQuZHJhdyhkYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlUGllKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RHb29nbGVDaGFydFBpZURlbW8uaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RHb29nbGVDaGFydFBpZURlbW8iLCJleGFtcGxlUGllIiwiZ29vZ2xlIiwibG9hZCIsInBhY2thZ2VzIiwic2V0T25Mb2FkQ2FsbGJhY2siLCJkYXRhIiwidmlzdWFsaXphdGlvbiIsImFycmF5VG9EYXRhVGFibGUiLCJvcHRpb25zIiwidGl0bGUiLCJjb2xvcnMiLCJjaGFydCIsIlBpZUNoYXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRyYXciLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/google-charts/pie.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/google-charts/pie.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=pie.js.map