/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/pages/projects/list/list.js ***!
  \**************************************************************************************/


// Class definition
var KTProjectList = function () {    
    var initChart = function () {
        // init chart
        var element = document.getElementById("kt_project_list_chart");

        if (!element) {
            return;
        }

        var config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [30, 45, 25],
                    backgroundColor: ['#00A3FF', '#50CD89', '#E4E6EF']
                }],
                labels: ['Active', 'Completed', 'Yet to start']
            },
            options: {
                chart: {
                    fontFamily: 'inherit'
                },
                cutout: '75%',
                cutoutPercentage: 65,
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: false
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10,
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: '#20D489',
                    titleFontColor: '#ffffff',
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }                
            }
        };

        var ctx = element.getContext('2d');
        var myDoughnut = new Chart(ctx, config);
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTProjectList.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/pages/projects/list/list.js":
/*!*************************************************************!*\
  !*** ./resources/src/js/custom/pages/projects/list/list.js ***!
  \*************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTProjectList = function () {\n  var initChart = function initChart() {\n    // init chart\n    var element = document.getElementById(\"kt_project_list_chart\");\n\n    if (!element) {\n      return;\n    }\n\n    var config = {\n      type: 'doughnut',\n      data: {\n        datasets: [{\n          data: [30, 45, 25],\n          backgroundColor: ['#00A3FF', '#50CD89', '#E4E6EF']\n        }],\n        labels: ['Active', 'Completed', 'Yet to start']\n      },\n      options: {\n        chart: {\n          fontFamily: 'inherit'\n        },\n        cutout: '75%',\n        cutoutPercentage: 65,\n        responsive: true,\n        maintainAspectRatio: false,\n        title: {\n          display: false\n        },\n        animation: {\n          animateScale: true,\n          animateRotate: true\n        },\n        tooltips: {\n          enabled: true,\n          intersect: false,\n          mode: 'nearest',\n          bodySpacing: 5,\n          yPadding: 10,\n          xPadding: 10,\n          caretPadding: 0,\n          displayColors: false,\n          backgroundColor: '#20D489',\n          titleFontColor: '#ffffff',\n          cornerRadius: 4,\n          footerSpacing: 0,\n          titleSpacing: 0\n        },\n        plugins: {\n          legend: {\n            display: false\n          }\n        }\n      }\n    };\n    var ctx = element.getContext('2d');\n    var myDoughnut = new Chart(ctx, config);\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initChart();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTProjectList.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9wYWdlcy9wcm9qZWN0cy9saXN0L2xpc3QuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsYUFBYSxHQUFHLFlBQVk7QUFDNUIsTUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBWTtBQUN4QjtBQUNBLFFBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLHVCQUF4QixDQUFkOztBQUVBLFFBQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1Y7QUFDSDs7QUFFRCxRQUFJRyxNQUFNLEdBQUc7QUFDVEMsTUFBQUEsSUFBSSxFQUFFLFVBREc7QUFFVEMsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFFBQUFBLFFBQVEsRUFBRSxDQUFDO0FBQ1BELFVBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxDQURDO0FBRVBFLFVBQUFBLGVBQWUsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCO0FBRlYsU0FBRCxDQURSO0FBS0ZDLFFBQUFBLE1BQU0sRUFBRSxDQUFDLFFBQUQsRUFBVyxXQUFYLEVBQXdCLGNBQXhCO0FBTE4sT0FGRztBQVNUQyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFVBQVUsRUFBRTtBQURULFNBREY7QUFJTEMsUUFBQUEsTUFBTSxFQUFFLEtBSkg7QUFLTEMsUUFBQUEsZ0JBQWdCLEVBQUUsRUFMYjtBQU1MQyxRQUFBQSxVQUFVLEVBQUUsSUFOUDtBQU9MQyxRQUFBQSxtQkFBbUIsRUFBRSxLQVBoQjtBQVFMQyxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsT0FBTyxFQUFFO0FBRE4sU0FSRjtBQVdMQyxRQUFBQSxTQUFTLEVBQUU7QUFDUEMsVUFBQUEsWUFBWSxFQUFFLElBRFA7QUFFUEMsVUFBQUEsYUFBYSxFQUFFO0FBRlIsU0FYTjtBQWVMQyxRQUFBQSxRQUFRLEVBQUU7QUFDTkMsVUFBQUEsT0FBTyxFQUFFLElBREg7QUFFTkMsVUFBQUEsU0FBUyxFQUFFLEtBRkw7QUFHTkMsVUFBQUEsSUFBSSxFQUFFLFNBSEE7QUFJTkMsVUFBQUEsV0FBVyxFQUFFLENBSlA7QUFLTkMsVUFBQUEsUUFBUSxFQUFFLEVBTEo7QUFNTkMsVUFBQUEsUUFBUSxFQUFFLEVBTko7QUFPTkMsVUFBQUEsWUFBWSxFQUFFLENBUFI7QUFRTkMsVUFBQUEsYUFBYSxFQUFFLEtBUlQ7QUFTTnRCLFVBQUFBLGVBQWUsRUFBRSxTQVRYO0FBVU51QixVQUFBQSxjQUFjLEVBQUUsU0FWVjtBQVdOQyxVQUFBQSxZQUFZLEVBQUUsQ0FYUjtBQVlOQyxVQUFBQSxhQUFhLEVBQUUsQ0FaVDtBQWFOQyxVQUFBQSxZQUFZLEVBQUU7QUFiUixTQWZMO0FBOEJMQyxRQUFBQSxPQUFPLEVBQUU7QUFDTEMsVUFBQUEsTUFBTSxFQUFFO0FBQ0psQixZQUFBQSxPQUFPLEVBQUU7QUFETDtBQURIO0FBOUJKO0FBVEEsS0FBYjtBQStDQSxRQUFJbUIsR0FBRyxHQUFHcEMsT0FBTyxDQUFDcUMsVUFBUixDQUFtQixJQUFuQixDQUFWO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLElBQUlDLEtBQUosQ0FBVUgsR0FBVixFQUFlakMsTUFBZixDQUFqQjtBQUNILEdBekRELENBRDRCLENBNEQ1Qjs7O0FBQ0EsU0FBTztBQUNIcUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2R6QyxNQUFBQSxTQUFTO0FBQ1o7QUFIRSxHQUFQO0FBS0gsQ0FsRW1CLEVBQXBCLEMsQ0FvRUE7OztBQUNBMEMsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDNUMsRUFBQUEsYUFBYSxDQUFDMEMsSUFBZDtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9wYWdlcy9wcm9qZWN0cy9saXN0L2xpc3QuanM/OGY3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUUHJvamVjdExpc3QgPSBmdW5jdGlvbiAoKSB7ICAgIFxuICAgIHZhciBpbml0Q2hhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGluaXQgY2hhcnRcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X3Byb2plY3RfbGlzdF9jaGFydFwiKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDQ1LCAyNV0sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjMDBBM0ZGJywgJyM1MENEODknLCAnI0U0RTZFRiddXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ0FjdGl2ZScsICdDb21wbGV0ZWQnLCAnWWV0IHRvIHN0YXJ0J11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjdXRvdXQ6ICc3NSUnLFxuICAgICAgICAgICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDY1LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlU2NhbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVSb3RhdGU6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICduZWFyZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgYm9keVNwYWNpbmc6IDUsXG4gICAgICAgICAgICAgICAgICAgIHlQYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgeFBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgICAgICAgICBjYXJldFBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjBENDg5JyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250Q29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgY29ybmVyUmFkaXVzOiA0LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXJTcGFjaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZVNwYWNpbmc6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY3R4ID0gZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB2YXIgbXlEb3VnaG51dCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbml0Q2hhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RQcm9qZWN0TGlzdC5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVFByb2plY3RMaXN0IiwiaW5pdENoYXJ0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJ0eXBlIiwiZGF0YSIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwibGFiZWxzIiwib3B0aW9ucyIsImNoYXJ0IiwiZm9udEZhbWlseSIsImN1dG91dCIsImN1dG91dFBlcmNlbnRhZ2UiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRpdGxlIiwiZGlzcGxheSIsImFuaW1hdGlvbiIsImFuaW1hdGVTY2FsZSIsImFuaW1hdGVSb3RhdGUiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJpbnRlcnNlY3QiLCJtb2RlIiwiYm9keVNwYWNpbmciLCJ5UGFkZGluZyIsInhQYWRkaW5nIiwiY2FyZXRQYWRkaW5nIiwiZGlzcGxheUNvbG9ycyIsInRpdGxlRm9udENvbG9yIiwiY29ybmVyUmFkaXVzIiwiZm9vdGVyU3BhY2luZyIsInRpdGxlU3BhY2luZyIsInBsdWdpbnMiLCJsZWdlbmQiLCJjdHgiLCJnZXRDb250ZXh0IiwibXlEb3VnaG51dCIsIkNoYXJ0IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/pages/projects/list/list.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/pages/projects/list/list.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=list.js.map