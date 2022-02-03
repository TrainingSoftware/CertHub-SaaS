/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!********************************************************!*\
  !*** ../src/js/custom/documentation/base/indicator.js ***!
  \********************************************************/


// Class definition
var KTBaseIndicatorDemos = function() {
    // Private functions
    var _example1 = function(element) {
        // Element to indecate
        var button = document.querySelector("#kt_button_1");

        // Handle button click event
        button.addEventListener("click", function() {
            // Activate indicator 
            button.setAttribute("data-kt-indicator", "on");

            // Disable indicator after 3 seconds
            setTimeout(function() {
                button.removeAttribute("data-kt-indicator");
            }, 3000);
        });
    }

    var _example2 = function(element) {
        // Element to indecate
        var button = document.querySelector("#kt_button_2");

        // Handle button click event
        button.addEventListener("click", function() {
            // Activate indicator 
            button.setAttribute("data-kt-indicator", "on");

            // Disable indicator after 3 seconds
            setTimeout(function() {
                button.removeAttribute("data-kt-indicator");
            }, 3000);
        });
    }

    var _example3 = function(element) {
        // Element to indecate
        var button = document.querySelector("#kt_button_3");

        // Handle button click event
        button.addEventListener("click", function() {
            // Activate indicator 
            button.setAttribute("data-kt-indicator", "on");

            // Disable indicator after 3 seconds
            setTimeout(function() {
                button.removeAttribute("data-kt-indicator");
            }, 3000);
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
    KTBaseIndicatorDemos.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/base/indicator.js":
/*!*****************************************************************!*\
  !*** ./resources/src/js/custom/documentation/base/indicator.js ***!
  \*****************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTBaseIndicatorDemos = function () {\n  // Private functions\n  var _example1 = function _example1(element) {\n    // Element to indecate\n    var button = document.querySelector(\"#kt_button_1\"); // Handle button click event\n\n    button.addEventListener(\"click\", function () {\n      // Activate indicator \n      button.setAttribute(\"data-kt-indicator\", \"on\"); // Disable indicator after 3 seconds\n\n      setTimeout(function () {\n        button.removeAttribute(\"data-kt-indicator\");\n      }, 3000);\n    });\n  };\n\n  var _example2 = function _example2(element) {\n    // Element to indecate\n    var button = document.querySelector(\"#kt_button_2\"); // Handle button click event\n\n    button.addEventListener(\"click\", function () {\n      // Activate indicator \n      button.setAttribute(\"data-kt-indicator\", \"on\"); // Disable indicator after 3 seconds\n\n      setTimeout(function () {\n        button.removeAttribute(\"data-kt-indicator\");\n      }, 3000);\n    });\n  };\n\n  var _example3 = function _example3(element) {\n    // Element to indecate\n    var button = document.querySelector(\"#kt_button_3\"); // Handle button click event\n\n    button.addEventListener(\"click\", function () {\n      // Activate indicator \n      button.setAttribute(\"data-kt-indicator\", \"on\"); // Disable indicator after 3 seconds\n\n      setTimeout(function () {\n        button.removeAttribute(\"data-kt-indicator\");\n      }, 3000);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      _example1();\n\n      _example2();\n\n      _example3();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTBaseIndicatorDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Jhc2UvaW5kaWNhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLG9CQUFvQixHQUFHLFlBQVc7QUFDbEM7QUFDQSxNQUFJQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFTQyxPQUFULEVBQWtCO0FBQzlCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBYixDQUY4QixDQUk5Qjs7QUFDQUYsSUFBQUEsTUFBTSxDQUFDRyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFXO0FBQ3hDO0FBQ0FILE1BQUFBLE1BQU0sQ0FBQ0ksWUFBUCxDQUFvQixtQkFBcEIsRUFBeUMsSUFBekMsRUFGd0MsQ0FJeEM7O0FBQ0FDLE1BQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCTCxRQUFBQSxNQUFNLENBQUNNLGVBQVAsQ0FBdUIsbUJBQXZCO0FBQ0gsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEtBUkQ7QUFTSCxHQWREOztBQWdCQSxNQUFJQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFTUixPQUFULEVBQWtCO0FBQzlCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBYixDQUY4QixDQUk5Qjs7QUFDQUYsSUFBQUEsTUFBTSxDQUFDRyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFXO0FBQ3hDO0FBQ0FILE1BQUFBLE1BQU0sQ0FBQ0ksWUFBUCxDQUFvQixtQkFBcEIsRUFBeUMsSUFBekMsRUFGd0MsQ0FJeEM7O0FBQ0FDLE1BQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCTCxRQUFBQSxNQUFNLENBQUNNLGVBQVAsQ0FBdUIsbUJBQXZCO0FBQ0gsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEtBUkQ7QUFTSCxHQWREOztBQWdCQSxNQUFJRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFTVCxPQUFULEVBQWtCO0FBQzlCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBYixDQUY4QixDQUk5Qjs7QUFDQUYsSUFBQUEsTUFBTSxDQUFDRyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFXO0FBQ3hDO0FBQ0FILE1BQUFBLE1BQU0sQ0FBQ0ksWUFBUCxDQUFvQixtQkFBcEIsRUFBeUMsSUFBekMsRUFGd0MsQ0FJeEM7O0FBQ0FDLE1BQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCTCxRQUFBQSxNQUFNLENBQUNNLGVBQVAsQ0FBdUIsbUJBQXZCO0FBQ0gsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEtBUkQ7QUFTSCxHQWREOztBQWlCQSxTQUFPO0FBQ0g7QUFDQUcsSUFBQUEsSUFBSSxFQUFFLGNBQVNWLE9BQVQsRUFBa0I7QUFDcEJELE1BQUFBLFNBQVM7O0FBQ1RTLE1BQUFBLFNBQVM7O0FBQ1RDLE1BQUFBLFNBQVM7QUFDWjtBQU5FLEdBQVA7QUFRSCxDQTNEMEIsRUFBM0IsQyxDQTZEQTs7O0FBQ0FFLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ2QsRUFBQUEsb0JBQW9CLENBQUNZLElBQXJCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vYmFzZS9pbmRpY2F0b3IuanM/NjkwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUQmFzZUluZGljYXRvckRlbW9zID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgX2V4YW1wbGUxID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAvLyBFbGVtZW50IHRvIGluZGVjYXRlXG4gICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X2J1dHRvbl8xXCIpO1xuXG4gICAgICAgIC8vIEhhbmRsZSBidXR0b24gY2xpY2sgZXZlbnRcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIGluZGljYXRvciBcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiLCBcIm9uXCIpO1xuXG4gICAgICAgICAgICAvLyBEaXNhYmxlIGluZGljYXRvciBhZnRlciAzIHNlY29uZHNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIpO1xuICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBfZXhhbXBsZTIgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIC8vIEVsZW1lbnQgdG8gaW5kZWNhdGVcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfYnV0dG9uXzJcIik7XG5cbiAgICAgICAgLy8gSGFuZGxlIGJ1dHRvbiBjbGljayBldmVudFxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gQWN0aXZhdGUgaW5kaWNhdG9yIFxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIsIFwib25cIik7XG5cbiAgICAgICAgICAgIC8vIERpc2FibGUgaW5kaWNhdG9yIGFmdGVyIDMgc2Vjb25kc1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIik7XG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIF9leGFtcGxlMyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgLy8gRWxlbWVudCB0byBpbmRlY2F0ZVxuICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdF9idXR0b25fM1wiKTtcblxuICAgICAgICAvLyBIYW5kbGUgYnV0dG9uIGNsaWNrIGV2ZW50XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSBpbmRpY2F0b3IgXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIiwgXCJvblwiKTtcblxuICAgICAgICAgICAgLy8gRGlzYWJsZSBpbmRpY2F0b3IgYWZ0ZXIgMyBzZWNvbmRzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiKTtcbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIF9leGFtcGxlMSgpO1xuICAgICAgICAgICAgX2V4YW1wbGUyKCk7XG4gICAgICAgICAgICBfZXhhbXBsZTMoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtUQmFzZUluZGljYXRvckRlbW9zLmluaXQoKTtcbn0pOyJdLCJuYW1lcyI6WyJLVEJhc2VJbmRpY2F0b3JEZW1vcyIsIl9leGFtcGxlMSIsImVsZW1lbnQiLCJidXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsIl9leGFtcGxlMiIsIl9leGFtcGxlMyIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/base/indicator.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/base/indicator.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=indicator.js.map