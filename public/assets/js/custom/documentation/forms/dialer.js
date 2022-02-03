/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************************************!*\
  !*** ../src/js/custom/documentation/forms/dialer.js ***!
  \******************************************************/


<<<<<<< Updated upstream
// Class definition
var KTFormsDialerDemos = function() {
    // Private functions
    var example1 = function(element) {
        // Dialer container element
        var dialerElement = document.querySelector("#kt_dialer_example_1");
=======
eval(" // Class definition\n\nvar KTFormsDialerDemos = function () {\n  // Private functions\n  var example1 = function example1(element) {\n    // Dialer container element\n    var dialerElement = document.querySelector(\"#kt_dialer_example_1\"); // Create dialer object and initialize a new instance\n\n    var dialerObject = new KTDialer(dialerElement, {\n      min: 1000,\n      max: 50000,\n      step: 1000,\n      prefix: \"$\",\n      decimals: 2\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      example1();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsDialerDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2RpYWxlci5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxrQkFBa0IsR0FBRyxZQUFXO0FBQ2hDO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU0MsT0FBVCxFQUFrQjtBQUM3QjtBQUNBLFFBQUlDLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUFwQixDQUY2QixDQUk3Qjs7QUFDQSxRQUFJQyxZQUFZLEdBQUcsSUFBSUMsUUFBSixDQUFhSixhQUFiLEVBQTRCO0FBQzNDSyxNQUFBQSxHQUFHLEVBQUUsSUFEc0M7QUFFM0NDLE1BQUFBLEdBQUcsRUFBRSxLQUZzQztBQUczQ0MsTUFBQUEsSUFBSSxFQUFFLElBSHFDO0FBSTNDQyxNQUFBQSxNQUFNLEVBQUUsR0FKbUM7QUFLM0NDLE1BQUFBLFFBQVEsRUFBRTtBQUxpQyxLQUE1QixDQUFuQjtBQU9ILEdBWkQ7O0FBY0EsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxjQUFTWCxPQUFULEVBQWtCO0FBQ3BCRCxNQUFBQSxRQUFRO0FBQ1g7QUFKRSxHQUFQO0FBTUgsQ0F0QndCLEVBQXpCLEMsQ0F3QkE7OztBQUNBYSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNmLEVBQUFBLGtCQUFrQixDQUFDYSxJQUFuQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2RpYWxlci5qcz81ZmEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RGb3Jtc0RpYWxlckRlbW9zID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZTEgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIC8vIERpYWxlciBjb250YWluZXIgZWxlbWVudFxuICAgICAgICB2YXIgZGlhbGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfZGlhbGVyX2V4YW1wbGVfMVwiKTtcblxuICAgICAgICAvLyBDcmVhdGUgZGlhbGVyIG9iamVjdCBhbmQgaW5pdGlhbGl6ZSBhIG5ldyBpbnN0YW5jZVxuICAgICAgICB2YXIgZGlhbGVyT2JqZWN0ID0gbmV3IEtURGlhbGVyKGRpYWxlckVsZW1lbnQsIHtcbiAgICAgICAgICAgIG1pbjogMTAwMCxcbiAgICAgICAgICAgIG1heDogNTAwMDAsXG4gICAgICAgICAgICBzdGVwOiAxMDAwLFxuICAgICAgICAgICAgcHJlZml4OiBcIiRcIixcbiAgICAgICAgICAgIGRlY2ltYWxzOiAyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgZXhhbXBsZTEoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtURm9ybXNEaWFsZXJEZW1vcy5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEZvcm1zRGlhbGVyRGVtb3MiLCJleGFtcGxlMSIsImVsZW1lbnQiLCJkaWFsZXJFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGlhbGVyT2JqZWN0IiwiS1REaWFsZXIiLCJtaW4iLCJtYXgiLCJzdGVwIiwicHJlZml4IiwiZGVjaW1hbHMiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/dialer.js\n");
>>>>>>> Stashed changes

        // Create dialer object and initialize a new instance
        var dialerObject = new KTDialer(dialerElement, {
            min: 1000,
            max: 50000,
            step: 1000,
            prefix: "$",
            decimals: 2
        });
    }

    return {
        // Public Functions
        init: function(element) {
            example1();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsDialerDemos.init();
});

/******/ })()
;
//# sourceMappingURL=dialer.js.map