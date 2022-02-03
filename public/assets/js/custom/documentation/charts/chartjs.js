/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!********************************************************!*\
  !*** ../src/js/custom/documentation/charts/chartjs.js ***!
  \********************************************************/


// Class definition
var KTGeneralChartJS = function () {
    // Randomizer function
    function getRandom(min = 1, max = 100) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function generateRandomData(min = 1, max = 100, count = 10) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(getRandom(min, max));
        }
        return arr;
    }

    // Private functions
    var example1 = function () {
        // Define chart element
        var ctx = document.getElementById('kt_chartjs_1');

        // Define colors
        var primaryColor = KTUtil.getCssVariableValue('--bs-primary');
        var dangerColor = KTUtil.getCssVariableValue('--bs-danger');
        var successColor = KTUtil.getCssVariableValue('--bs-success');

        // Define fonts
        var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif');

        // Chart labels
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Chart data
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: generateRandomData(1, 100, 12),
                    backgroundColor: primaryColor,
                    stack: 'Stack 0',
                },
                {
                    label: 'Dataset 2',
                    data: generateRandomData(1, 100, 12),
                    backgroundColor: dangerColor,
                    stack: 'Stack 1',
                },
                {
                    label: 'Dataset 3',
                    data: generateRandomData(1, 100, 12),
                    backgroundColor: successColor,
                    stack: 'Stack 2',
                },
            ]
        };

        // Chart config
        const config = {
            type: 'bar',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: false,
                    }
                },
                responsive: true,
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true
                    }
                }
            }
        };

        // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/
        var myChart = new Chart(ctx, config);
    }

    var example2 = function () {
        // Define chart element
        var ctx = document.getElementById('kt_chartjs_2');

        // Define colors
        var primaryColor = KTUtil.getCssVariableValue('--bs-primary');
        var dangerColor = KTUtil.getCssVariableValue('--bs-danger');
        var successColor = KTUtil.getCssVariableValue('--bs-success');

        // Define fonts
        var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif');

        // Chart labels
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

        // Chart data
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: generateRandomData(1, 50, 7),
                    borderColor: primaryColor,
                    backgroundColor: 'transparent'
                },
                {
                    label: 'Dataset 2',
                    data: generateRandomData(1, 50, 7),
                    borderColor: dangerColor,
                    backgroundColor: 'transparent'
                },
            ]
        };

        // Chart config
        const config = {
            type: 'line',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: false,
                    }
                },
                responsive: true,
            }
        };

        // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/
        var myChart = new Chart(ctx, config);
    }

    var example3 = function () {
        // Define chart element
        var ctx = document.getElementById('kt_chartjs_3');

        // Define colors
        var primaryColor = KTUtil.getCssVariableValue('--bs-primary');
        var dangerColor = KTUtil.getCssVariableValue('--bs-danger');
        var successColor = KTUtil.getCssVariableValue('--bs-success');
        var warningColor = KTUtil.getCssVariableValue('--bs-warning');
        var infoColor = KTUtil.getCssVariableValue('--bs-info');

        // Chart labels
        const labels = ['January', 'February', 'March', 'April', 'May'];

        // Chart data
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: generateRandomData(1, 100, 5),
                    backgroundColor: [primaryColor, dangerColor, successColor, warningColor, infoColor]
                },
            ]
        };

        // Chart config
        const config = {
            type: 'pie',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: false,
                    }
                },
                responsive: true,
            }
        };

        // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/
        var myChart = new Chart(ctx, config);
    }

    var example4 = function () {
        // Define chart element
        var ctx = document.getElementById('kt_chartjs_4');

        // Define colors
        var primaryColor = KTUtil.getCssVariableValue('--bs-primary');
        var dangerColor = KTUtil.getCssVariableValue('--bs-danger');
        var dangerLightColor = KTUtil.getCssVariableValue('--bs-light-danger');

        // Define fonts
        var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif');

        // Chart labels
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Chart data
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: generateRandomData(50, 100, 12),
                    borderColor: primaryColor,
                    backgroundColor: 'transparent',
                    stack: 'combined'
                },
                {
                    label: 'Dataset 2',
                    data: generateRandomData(1, 60, 12),
                    backgroundColor: dangerColor,
                    borderColor: dangerColor,
                    stack: 'combined',
                    type: 'bar'
                },
                
            ]
        };

        // Chart config
        const config = {
            type: 'line',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: false,
                    }
                },
                responsive: true,
                interaction: {
                    intersect: false,
                },
                scales: {
                    y: {
                        stacked: true
                    }
                }
            },
            defaults: {
                font: {
                    family: 'inherit',
                }
            }
        };

        // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/
        var myChart = new Chart(ctx, config);
    }

    var example5 = function () {
        // Define chart element
        var ctx = document.getElementById('kt_chartjs_5');

        // Define colors
        var infoColor = KTUtil.getCssVariableValue('--bs-info');
        var infoLightColor = KTUtil.getCssVariableValue('--bs-light-info');
        var warningColor = KTUtil.getCssVariableValue('--bs-warning');
        var warningLightColor = KTUtil.getCssVariableValue('--bs-light-warning');
        var primaryColor = KTUtil.getCssVariableValue('--bs-primary');
        var primaryLightColor = KTUtil.getCssVariableValue('--bs-light-primary');

        // Define fonts
        var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif');

        // Chart labels
        const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

        // Chart data
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: generateRandomData(20, 80, 6),
                    borderColor: infoColor,
                    backgroundColor: infoLightColor,
                },
                {
                    label: 'Dataset 2',
                    data: generateRandomData(10, 60, 6),
                    backgroundColor: warningLightColor,
                    borderColor: warningColor,
                },
                {
                    label: 'Dataset 3',
                    data: generateRandomData(0, 80, 6),
                    backgroundColor: primaryLightColor,
                    borderColor: primaryColor,
                },                
            ]
        };

        // Chart config
        const config = {
            type: 'radar',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: false,
                    }
                },
                responsive: true,
            }
        };

        // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/
        var myChart = new Chart(ctx, config);
    }

    return {
        // Public Functions
        init: function () {
            // Global font settings: https://www.chartjs.org/docs/latest/general/fonts.html
            Chart.defaults.font.size = 13;
            Chart.defaults.font.family = KTUtil.getCssVariableValue('--bs-font-sans-serif');

            example1();
            example2();
            example3();
            example4();
            example5();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralChartJS.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/chartjs.js":
/*!*****************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/chartjs.js ***!
  \*****************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralChartJS = function () {\n  // Randomizer function\n  function getRandom() {\n    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    return Math.floor(Math.random() * (max - min) + min);\n  }\n\n  function generateRandomData() {\n    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n    var arr = [];\n\n    for (var i = 0; i < count; i++) {\n      arr.push(getRandom(min, max));\n    }\n\n    return arr;\n  } // Private functions\n\n\n  var example1 = function example1() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_1'); // Define colors\n\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var successColor = KTUtil.getCssVariableValue('--bs-success'); // Define fonts\n\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(1, 100, 12),\n        backgroundColor: primaryColor,\n        stack: 'Stack 0'\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(1, 100, 12),\n        backgroundColor: dangerColor,\n        stack: 'Stack 1'\n      }, {\n        label: 'Dataset 3',\n        data: generateRandomData(1, 100, 12),\n        backgroundColor: successColor,\n        stack: 'Stack 2'\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'bar',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true,\n        interaction: {\n          intersect: false\n        },\n        scales: {\n          x: {\n            stacked: true\n          },\n          y: {\n            stacked: true\n          }\n        }\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  var example2 = function example2() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_2'); // Define colors\n\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var successColor = KTUtil.getCssVariableValue('--bs-success'); // Define fonts\n\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(1, 50, 7),\n        borderColor: primaryColor,\n        backgroundColor: 'transparent'\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(1, 50, 7),\n        borderColor: dangerColor,\n        backgroundColor: 'transparent'\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'line',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  var example3 = function example3() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_3'); // Define colors\n\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var successColor = KTUtil.getCssVariableValue('--bs-success');\n    var warningColor = KTUtil.getCssVariableValue('--bs-warning');\n    var infoColor = KTUtil.getCssVariableValue('--bs-info'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(1, 100, 5),\n        backgroundColor: [primaryColor, dangerColor, successColor, warningColor, infoColor]\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'pie',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  var example4 = function example4() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_4'); // Define colors\n\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var dangerLightColor = KTUtil.getCssVariableValue('--bs-light-danger'); // Define fonts\n\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(50, 100, 12),\n        borderColor: primaryColor,\n        backgroundColor: 'transparent',\n        stack: 'combined'\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(1, 60, 12),\n        backgroundColor: dangerColor,\n        borderColor: dangerColor,\n        stack: 'combined',\n        type: 'bar'\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'line',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true,\n        interaction: {\n          intersect: false\n        },\n        scales: {\n          y: {\n            stacked: true\n          }\n        }\n      },\n      defaults: {\n        font: {\n          family: 'inherit'\n        }\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  var example5 = function example5() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_5'); // Define colors\n\n    var infoColor = KTUtil.getCssVariableValue('--bs-info');\n    var infoLightColor = KTUtil.getCssVariableValue('--bs-light-info');\n    var warningColor = KTUtil.getCssVariableValue('--bs-warning');\n    var warningLightColor = KTUtil.getCssVariableValue('--bs-light-warning');\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var primaryLightColor = KTUtil.getCssVariableValue('--bs-light-primary'); // Define fonts\n\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(20, 80, 6),\n        borderColor: infoColor,\n        backgroundColor: infoLightColor\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(10, 60, 6),\n        backgroundColor: warningLightColor,\n        borderColor: warningColor\n      }, {\n        label: 'Dataset 3',\n        data: generateRandomData(0, 80, 6),\n        backgroundColor: primaryLightColor,\n        borderColor: primaryColor\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'radar',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      // Global font settings: https://www.chartjs.org/docs/latest/general/fonts.html\n      Chart.defaults.font.size = 13;\n      Chart.defaults.font.family = KTUtil.getCssVariableValue('--bs-font-sans-serif');\n      example1();\n      example2();\n      example3();\n      example4();\n      example5();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralChartJS.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9jaGFydGpzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGdCQUFnQixHQUFHLFlBQVk7QUFDL0I7QUFDQSxXQUFTQyxTQUFULEdBQXVDO0FBQUEsUUFBcEJDLEdBQW9CLHVFQUFkLENBQWM7QUFBQSxRQUFYQyxHQUFXLHVFQUFMLEdBQUs7QUFDbkMsV0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkgsR0FBRyxHQUFHRCxHQUF2QixJQUE4QkEsR0FBekMsQ0FBUDtBQUNIOztBQUVELFdBQVNLLGtCQUFULEdBQTREO0FBQUEsUUFBaENMLEdBQWdDLHVFQUExQixDQUEwQjtBQUFBLFFBQXZCQyxHQUF1Qix1RUFBakIsR0FBaUI7QUFBQSxRQUFaSyxLQUFZLHVFQUFKLEVBQUk7QUFDeEQsUUFBSUMsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixLQUFwQixFQUEyQkUsQ0FBQyxFQUE1QixFQUFnQztBQUM1QkQsTUFBQUEsR0FBRyxDQUFDRSxJQUFKLENBQVNWLFNBQVMsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLENBQWxCO0FBQ0g7O0FBQ0QsV0FBT00sR0FBUDtBQUNILEdBWjhCLENBYy9COzs7QUFDQSxNQUFJRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFZO0FBQ3ZCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBVixDQUZ1QixDQUl2Qjs7QUFDQSxRQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsY0FBM0IsQ0FBbkI7QUFDQSxRQUFJQyxXQUFXLEdBQUdGLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsYUFBM0IsQ0FBbEI7QUFDQSxRQUFJRSxZQUFZLEdBQUdILE1BQU0sQ0FBQ0MsbUJB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QUFBLGdCQUFnQixDQUFDeUQsSUFBakI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvY2hhcnRqcy5qcz9mZDRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RHZW5lcmFsQ2hhcnRKUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSYW5kb21pemVyIGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tKG1pbiA9IDEsIG1heCA9IDEwMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tRGF0YShtaW4gPSAxLCBtYXggPSAxMDAsIGNvdW50ID0gMTApIHtcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGFyci5wdXNoKGdldFJhbmRvbShtaW4sIG1heCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZTEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERlZmluZSBjaGFydCBlbGVtZW50XG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfY2hhcnRqc18xJyk7XG5cbiAgICAgICAgLy8gRGVmaW5lIGNvbG9yc1xuICAgICAgICB2YXIgcHJpbWFyeUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtcHJpbWFyeScpO1xuICAgICAgICB2YXIgZGFuZ2VyQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1kYW5nZXInKTtcbiAgICAgICAgdmFyIHN1Y2Nlc3NDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXN1Y2Nlc3MnKTtcblxuICAgICAgICAvLyBEZWZpbmUgZm9udHNcbiAgICAgICAgdmFyIGZvbnRGYW1pbHkgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1mb250LXNhbnMtc2VyaWYnKTtcblxuICAgICAgICAvLyBDaGFydCBsYWJlbHNcbiAgICAgICAgY29uc3QgbGFiZWxzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbiAgICAgICAgLy8gQ2hhcnQgZGF0YVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDEnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMSwgMTAwLCAxMiksXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBzdGFjazogJ1N0YWNrIDAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlUmFuZG9tRGF0YSgxLCAxMDAsIDEyKSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6ICdTdGFjayAxJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMSwgMTAwLCAxMiksXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yLFxuICAgICAgICAgICAgICAgICAgICBzdGFjazogJ1N0YWNrIDInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ2hhcnQgY29uZmlnXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbml0IENoYXJ0SlMgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0OiBodHRwczovL3d3dy5jaGFydGpzLm9yZy9kb2NzL2xhdGVzdC9cbiAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCBjb25maWcpO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGVmaW5lIGNoYXJ0IGVsZW1lbnRcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jaGFydGpzXzInKTtcblxuICAgICAgICAvLyBEZWZpbmUgY29sb3JzXG4gICAgICAgIHZhciBwcmltYXJ5Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1wcmltYXJ5Jyk7XG4gICAgICAgIHZhciBkYW5nZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWRhbmdlcicpO1xuICAgICAgICB2YXIgc3VjY2Vzc0NvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtc3VjY2VzcycpO1xuXG4gICAgICAgIC8vIERlZmluZSBmb250c1xuICAgICAgICB2YXIgZm9udEZhbWlseSA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWZvbnQtc2Fucy1zZXJpZicpO1xuXG4gICAgICAgIC8vIENoYXJ0IGxhYmVsc1xuICAgICAgICBjb25zdCBsYWJlbHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddO1xuXG4gICAgICAgIC8vIENoYXJ0IGRhdGFcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAxJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDEsIDUwLCA3KSxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHByaW1hcnlDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDEsIDUwLCA3KSxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGRhbmdlckNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENoYXJ0IGNvbmZpZ1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEluaXQgQ2hhcnRKUyAtLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQ6IGh0dHBzOi8vd3d3LmNoYXJ0anMub3JnL2RvY3MvbGF0ZXN0L1xuICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgdmFyIGV4YW1wbGUzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEZWZpbmUgY2hhcnQgZWxlbWVudFxuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2NoYXJ0anNfMycpO1xuXG4gICAgICAgIC8vIERlZmluZSBjb2xvcnNcbiAgICAgICAgdmFyIHByaW1hcnlDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXByaW1hcnknKTtcbiAgICAgICAgdmFyIGRhbmdlckNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZGFuZ2VyJyk7XG4gICAgICAgIHZhciBzdWNjZXNzQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1zdWNjZXNzJyk7XG4gICAgICAgIHZhciB3YXJuaW5nQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy13YXJuaW5nJyk7XG4gICAgICAgIHZhciBpbmZvQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1pbmZvJyk7XG5cbiAgICAgICAgLy8gQ2hhcnQgbGFiZWxzXG4gICAgICAgIGNvbnN0IGxhYmVscyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknXTtcblxuICAgICAgICAvLyBDaGFydCBkYXRhXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlUmFuZG9tRGF0YSgxLCAxMDAsIDUpLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtwcmltYXJ5Q29sb3IsIGRhbmdlckNvbG9yLCBzdWNjZXNzQ29sb3IsIHdhcm5pbmdDb2xvciwgaW5mb0NvbG9yXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ2hhcnQgY29uZmlnXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbml0IENoYXJ0SlMgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0OiBodHRwczovL3d3dy5jaGFydGpzLm9yZy9kb2NzL2xhdGVzdC9cbiAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCBjb25maWcpO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlNCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGVmaW5lIGNoYXJ0IGVsZW1lbnRcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jaGFydGpzXzQnKTtcblxuICAgICAgICAvLyBEZWZpbmUgY29sb3JzXG4gICAgICAgIHZhciBwcmltYXJ5Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1wcmltYXJ5Jyk7XG4gICAgICAgIHZhciBkYW5nZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWRhbmdlcicpO1xuICAgICAgICB2YXIgZGFuZ2VyTGlnaHRDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhbmdlcicpO1xuXG4gICAgICAgIC8vIERlZmluZSBmb250c1xuICAgICAgICB2YXIgZm9udEZhbWlseSA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWZvbnQtc2Fucy1zZXJpZicpO1xuXG4gICAgICAgIC8vIENoYXJ0IGxhYmVsc1xuICAgICAgICBjb25zdCBsYWJlbHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcblxuICAgICAgICAvLyBDaGFydCBkYXRhXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlUmFuZG9tRGF0YSg1MCwgMTAwLCAxMiksXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6ICdjb21iaW5lZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMSwgNjAsIDEyKSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGRhbmdlckNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBzdGFjazogJ2NvbWJpbmVkJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENoYXJ0IGNvbmZpZ1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSW5pdCBDaGFydEpTIC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdDogaHR0cHM6Ly93d3cuY2hhcnRqcy5vcmcvZG9jcy9sYXRlc3QvXG4gICAgICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERlZmluZSBjaGFydCBlbGVtZW50XG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfY2hhcnRqc181Jyk7XG5cbiAgICAgICAgLy8gRGVmaW5lIGNvbG9yc1xuICAgICAgICB2YXIgaW5mb0NvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtaW5mbycpO1xuICAgICAgICB2YXIgaW5mb0xpZ2h0Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC1pbmZvJyk7XG4gICAgICAgIHZhciB3YXJuaW5nQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy13YXJuaW5nJyk7XG4gICAgICAgIHZhciB3YXJuaW5nTGlnaHRDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LXdhcm5pbmcnKTtcbiAgICAgICAgdmFyIHByaW1hcnlDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXByaW1hcnknKTtcbiAgICAgICAgdmFyIHByaW1hcnlMaWdodENvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtcHJpbWFyeScpO1xuXG4gICAgICAgIC8vIERlZmluZSBmb250c1xuICAgICAgICB2YXIgZm9udEZhbWlseSA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWZvbnQtc2Fucy1zZXJpZicpO1xuXG4gICAgICAgIC8vIENoYXJ0IGxhYmVsc1xuICAgICAgICBjb25zdCBsYWJlbHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnXTtcblxuICAgICAgICAvLyBDaGFydCBkYXRhXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlUmFuZG9tRGF0YSgyMCwgODAsIDYpLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogaW5mb0NvbG9yLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9MaWdodENvbG9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlUmFuZG9tRGF0YSgxMCwgNjAsIDYpLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdMaWdodENvbG9yLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogd2FybmluZ0NvbG9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlUmFuZG9tRGF0YSgwLCA4MCwgNiksXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUxpZ2h0Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBwcmltYXJ5Q29sb3IsXG4gICAgICAgICAgICAgICAgfSwgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ2hhcnQgY29uZmlnXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdyYWRhcicsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEluaXQgQ2hhcnRKUyAtLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQ6IGh0dHBzOi8vd3d3LmNoYXJ0anMub3JnL2RvY3MvbGF0ZXN0L1xuICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBHbG9iYWwgZm9udCBzZXR0aW5nczogaHR0cHM6Ly93d3cuY2hhcnRqcy5vcmcvZG9jcy9sYXRlc3QvZ2VuZXJhbC9mb250cy5odG1sXG4gICAgICAgICAgICBDaGFydC5kZWZhdWx0cy5mb250LnNpemUgPSAxMztcbiAgICAgICAgICAgIENoYXJ0LmRlZmF1bHRzLmZvbnQuZmFtaWx5ID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZm9udC1zYW5zLXNlcmlmJyk7XG5cbiAgICAgICAgICAgIGV4YW1wbGUxKCk7XG4gICAgICAgICAgICBleGFtcGxlMigpO1xuICAgICAgICAgICAgZXhhbXBsZTMoKTtcbiAgICAgICAgICAgIGV4YW1wbGU0KCk7XG4gICAgICAgICAgICBleGFtcGxlNSgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUR2VuZXJhbENoYXJ0SlMuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RHZW5lcmFsQ2hhcnRKUyIsImdldFJhbmRvbSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdlbmVyYXRlUmFuZG9tRGF0YSIsImNvdW50IiwiYXJyIiwiaSIsInB1c2giLCJleGFtcGxlMSIsImN0eCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmltYXJ5Q29sb3IiLCJLVFV0aWwiLCJnZXRDc3NWYXJpYWJsZVZhbHVlIiwiZGFuZ2VyQ29sb3IiLCJzdWNjZXNzQ29sb3IiLCJmb250RmFtaWx5IiwibGFiZWxzIiwiZGF0YSIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdGFjayIsImNvbmZpZyIsInR5cGUiLCJvcHRpb25zIiwicGx1Z2lucyIsInRpdGxlIiwiZGlzcGxheSIsInJlc3BvbnNpdmUiLCJpbnRlcmFjdGlvbiIsImludGVyc2VjdCIsInNjYWxlcyIsIngiLCJzdGFja2VkIiwieSIsIm15Q2hhcnQiLCJDaGFydCIsImV4YW1wbGUyIiwiYm9yZGVyQ29sb3IiLCJleGFtcGxlMyIsIndhcm5pbmdDb2xvciIsImluZm9Db2xvciIsImV4YW1wbGU0IiwiZGFuZ2VyTGlnaHRDb2xvciIsImRlZmF1bHRzIiwiZm9udCIsImZhbWlseSIsImV4YW1wbGU1IiwiaW5mb0xpZ2h0Q29sb3IiLCJ3YXJuaW5nTGlnaHRDb2xvciIsInByaW1hcnlMaWdodENvbG9yIiwiaW5pdCIsInNpemUiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/chartjs.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/chartjs.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=chartjs.js.map