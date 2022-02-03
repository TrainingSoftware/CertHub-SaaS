/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*****************************************************!*\
  !*** ../src/js/custom/documentation/base/rotate.js ***!
  \*****************************************************/


// Class definition
var KTBaseRotateDemos = function() {
    // Private functions
    var _example1 = function(element) {
        // Element to indecate
        var button = document.querySelector("#kt_button_1");

        // Handle button click event
        button.addEventListener("click", function() {
            button.classList.toggle("active");              
        });
    }

    var _example2 = function(element) {
        // Element to indecate
        var button = document.querySelector("#kt_button_2");

        // Handle button click event
        button.addEventListener("click", function() {
            button.classList.toggle("active");               
        });
    }

    var _example3 = function(element) {
        // Element to indecate
        var button = document.querySelector("#kt_button_3");

        // Handle button click event
        button.addEventListener("click", function() {
            button.classList.toggle("active");              
        });
    }
    

    return {
        // Public Functions
        init: function(element) {
            _example1();
            _example2();
            _example3();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTBaseRotateDemos.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/base/rotate.js":
/*!**************************************************************!*\
  !*** ./resources/src/js/custom/documentation/base/rotate.js ***!
  \**************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTBaseRotateDemos = function () {\n  // Private functions\n  var _example1 = function _example1(element) {\n    // Element to indecate\n    var button = document.querySelector(\"#kt_button_1\"); // Handle button click event\n\n    button.addEventListener(\"click\", function () {\n      button.classList.toggle(\"active\");\n    });\n  };\n\n  var _example2 = function _example2(element) {\n    // Element to indecate\n    var button = document.querySelector(\"#kt_button_2\"); // Handle button click event\n\n    button.addEventListener(\"click\", function () {\n      button.classList.toggle(\"active\");\n    });\n  };\n\n  var _example3 = function _example3(element) {\n    // Element to indecate\n    var button = document.querySelector(\"#kt_button_3\"); // Handle button click event\n\n    button.addEventListener(\"click\", function () {\n      button.classList.toggle(\"active\");\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      _example1();\n\n      _example2();\n\n      _example3();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTBaseRotateDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Jhc2Uvcm90YXRlLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGlCQUFpQixHQUFHLFlBQVc7QUFDL0I7QUFDQSxNQUFJQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFTQyxPQUFULEVBQWtCO0FBQzlCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBYixDQUY4QixDQUk5Qjs7QUFDQUYsSUFBQUEsTUFBTSxDQUFDRyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFXO0FBQ3hDSCxNQUFBQSxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0gsS0FGRDtBQUdILEdBUkQ7O0FBVUEsTUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBU1AsT0FBVCxFQUFrQjtBQUM5QjtBQUNBLFFBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWIsQ0FGOEIsQ0FJOUI7O0FBQ0FGLElBQUFBLE1BQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVztBQUN4Q0gsTUFBQUEsTUFBTSxDQUFDSSxTQUFQLENBQWlCQyxNQUFqQixDQUF3QixRQUF4QjtBQUNILEtBRkQ7QUFHSCxHQVJEOztBQVVBLE1BQUlFLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVNSLE9BQVQsRUFBa0I7QUFDOUI7QUFDQSxRQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFiLENBRjhCLENBSTlCOztBQUNBRixJQUFBQSxNQUFNLENBQUNHLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFDeENILE1BQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsUUFBeEI7QUFDSCxLQUZEO0FBR0gsR0FSRDs7QUFXQSxTQUFPO0FBQ0g7QUFDQUcsSUFBQUEsSUFBSSxFQUFFLGNBQVNULE9BQVQsRUFBa0I7QUFDcEJELE1BQUFBLFNBQVM7O0FBQ1RRLE1BQUFBLFNBQVM7O0FBQ1RDLE1BQUFBLFNBQVM7QUFDWjtBQU5FLEdBQVA7QUFRSCxDQXpDdUIsRUFBeEIsQyxDQTJDQTs7O0FBQ0FFLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ2IsRUFBQUEsaUJBQWlCLENBQUNXLElBQWxCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vYmFzZS9yb3RhdGUuanM/NGMyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUQmFzZVJvdGF0ZURlbW9zID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgX2V4YW1wbGUxID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAvLyBFbGVtZW50IHRvIGluZGVjYXRlXG4gICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X2J1dHRvbl8xXCIpO1xuXG4gICAgICAgIC8vIEhhbmRsZSBidXR0b24gY2xpY2sgZXZlbnRcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpOyAgICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBfZXhhbXBsZTIgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIC8vIEVsZW1lbnQgdG8gaW5kZWNhdGVcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfYnV0dG9uXzJcIik7XG5cbiAgICAgICAgLy8gSGFuZGxlIGJ1dHRvbiBjbGljayBldmVudFxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7ICAgICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBfZXhhbXBsZTMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIC8vIEVsZW1lbnQgdG8gaW5kZWNhdGVcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfYnV0dG9uXzNcIik7XG5cbiAgICAgICAgLy8gSGFuZGxlIGJ1dHRvbiBjbGljayBldmVudFxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7ICAgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICBfZXhhbXBsZTEoKTtcbiAgICAgICAgICAgIF9leGFtcGxlMigpO1xuICAgICAgICAgICAgX2V4YW1wbGUzKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEJhc2VSb3RhdGVEZW1vcy5pbml0KCk7XG59KTsiXSwibmFtZXMiOlsiS1RCYXNlUm90YXRlRGVtb3MiLCJfZXhhbXBsZTEiLCJlbGVtZW50IiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9leGFtcGxlMiIsIl9leGFtcGxlMyIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/base/rotate.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/base/rotate.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=rotate.js.map