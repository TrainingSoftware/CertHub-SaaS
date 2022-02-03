/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************************************!*\
  !*** ../src/js/custom/documentation/charts/flotcharts/pie.js ***!
  \***************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTFlotDemoPie = function () {
    // Private functions
    var examplePie = function () {
        var data = [
            { label: "CSS", data: 10, color: KTUtil.getCssVariableValue('--bs-active-primary') },
            { label: "HTML5", data: 40, color: KTUtil.getCssVariableValue('--bs-active-success') },
            { label: "PHP", data: 30, color: KTUtil.getCssVariableValue('--bs-active-danger') },
            { label: "Angular", data: 20, color: KTUtil.getCssVariableValue('--bs-active-warning') }
        ];
=======
eval(" // Class definition\n\nvar KTFlotDemoPie = function () {\n  // Private functions\n  var examplePie = function examplePie() {\n    var data = [{\n      label: \"CSS\",\n      data: 10,\n      color: KTUtil.getCssVariableValue('--bs-active-primary')\n    }, {\n      label: \"HTML5\",\n      data: 40,\n      color: KTUtil.getCssVariableValue('--bs-active-success')\n    }, {\n      label: \"PHP\",\n      data: 30,\n      color: KTUtil.getCssVariableValue('--bs-active-danger')\n    }, {\n      label: \"Angular\",\n      data: 20,\n      color: KTUtil.getCssVariableValue('--bs-active-warning')\n    }];\n    $.plot($(\"#kt_docs_flot_pie\"), data, {\n      series: {\n        pie: {\n          show: true\n        }\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      examplePie();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoPie.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL3BpZS5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxhQUFhLEdBQUcsWUFBWTtBQUM1QjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFDekIsUUFBSUMsSUFBSSxHQUFHLENBQ1A7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JELE1BQUFBLElBQUksRUFBRSxFQUF0QjtBQUEwQkUsTUFBQUEsS0FBSyxFQUFFQyxNQUFNLENBQUNDLG1CQUFQLENBQTJCLHFCQUEzQjtBQUFqQyxLQURPLEVBRVA7QUFBRUgsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JELE1BQUFBLElBQUksRUFBRSxFQUF4QjtBQUE0QkUsTUFBQUEsS0FBSyxFQUFFQyxNQUFNLENBQUNDLG1CQUFQLENBQTJCLHFCQUEzQjtBQUFuQyxLQUZPLEVBR1A7QUFBRUgsTUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JELE1BQUFBLElBQUksRUFBRSxFQUF0QjtBQUEwQkUsTUFBQUEsS0FBSyxFQUFFQyxNQUFNLENBQUNDLG1CQUFQLENBQTJCLG9CQUEzQjtBQUFqQyxLQUhPLEVBSVA7QUFBRUgsTUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JELE1BQUFBLElBQUksRUFBRSxFQUExQjtBQUE4QkUsTUFBQUEsS0FBSyxFQUFFQyxNQUFNLENBQUNDLG1CQUFQLENBQTJCLHFCQUEzQjtBQUFyQyxLQUpPLENBQVg7QUFPQUMsSUFBQUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9ELENBQUMsQ0FBQyxtQkFBRCxDQUFSLEVBQStCTCxJQUEvQixFQUFxQztBQUNqQ08sTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLEdBQUcsRUFBRTtBQUNEQyxVQUFBQSxJQUFJLEVBQUU7QUFETDtBQUREO0FBRHlCLEtBQXJDO0FBT0gsR0FmRDs7QUFpQkEsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkWCxNQUFBQSxVQUFVO0FBQ2I7QUFKRSxHQUFQO0FBTUgsQ0F6Qm1CLEVBQXBCLEMsQ0EyQkE7OztBQUNBSSxNQUFNLENBQUNRLGtCQUFQLENBQTBCLFlBQVk7QUFDbENiLEVBQUFBLGFBQWEsQ0FBQ1ksSUFBZDtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL3BpZS5qcz9lYzJhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RGbG90RGVtb1BpZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlUGllID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiQ1NTXCIsIGRhdGE6IDEwLCBjb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLXByaW1hcnknKSB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCJIVE1MNVwiLCBkYXRhOiA0MCwgY29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1zdWNjZXNzJykgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiUEhQXCIsIGRhdGE6IDMwLCBjb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLWRhbmdlcicpIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIkFuZ3VsYXJcIiwgZGF0YTogMjAsIGNvbG9yOiBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtd2FybmluZycpIH1cbiAgICAgICAgXTtcblxuICAgICAgICAkLnBsb3QoJChcIiNrdF9kb2NzX2Zsb3RfcGllXCIpLCBkYXRhLCB7XG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBwaWU6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlUGllKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RGbG90RGVtb1BpZS5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEZsb3REZW1vUGllIiwiZXhhbXBsZVBpZSIsImRhdGEiLCJsYWJlbCIsImNvbG9yIiwiS1RVdGlsIiwiZ2V0Q3NzVmFyaWFibGVWYWx1ZSIsIiQiLCJwbG90Iiwic2VyaWVzIiwicGllIiwic2hvdyIsImluaXQiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/flotcharts/pie.js\n");
>>>>>>> Stashed changes

        $.plot($("#kt_docs_flot_pie"), data, {
            series: {
                pie: {
                    show: true
                }
            }
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
    KTFlotDemoPie.init();
});

/******/ })()
;
//# sourceMappingURL=pie.js.map