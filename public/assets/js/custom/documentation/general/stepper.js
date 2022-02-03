/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*********************************************************!*\
  !*** ../src/js/custom/documentation/general/stepper.js ***!
  \*********************************************************/


// Class definition
var KTGeneralStepperDemos = function() {
    // Private functions
    var _exampleBasic = function() {
        // Stepper lement
        var element = document.querySelector("#kt_stepper_example_basic");

        // Initialize Stepper
		var stepper = new KTStepper(element);

        // Handle next step
		stepper.on("kt.stepper.next", function (stepper) {
			stepper.goNext(); // go next step
		});

		// Handle previous step
		stepper.on("kt.stepper.previous", function (stepper) {
			stepper.goPrevious(); // go previous step
		});
    }

    var _exampleVertical = function() {
        // Stepper lement
        var element = document.querySelector("#kt_stepper_example_vertical");

        // Initialize Stepper
		var stepper = new KTStepper(element);

        // Handle next step
		stepper.on("kt.stepper.next", function (stepper) {
			stepper.goNext(); // go next step
		});

		// Handle previous step
		stepper.on("kt.stepper.previous", function (stepper) {
			stepper.goPrevious(); // go previous step
		});
    }

    var _exampleClickable = function() {
        // Stepper lement
        var element = document.querySelector("#kt_stepper_example_clickable");

        // Initialize Stepper
		var stepper = new KTStepper(element);

        // Handle navigation click
		stepper.on("kt.stepper.click", function (stepper) {
			stepper.goTo(stepper.getClickedStepIndex()); // go to clicked step
		});
    }

    return {
        // Public Functions
        init: function() {
            _exampleBasic();
            _exampleVertical();
            _exampleClickable();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTGeneralStepperDemos.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/stepper.js":
/*!******************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/stepper.js ***!
  \******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralStepperDemos = function () {\n  // Private functions\n  var _exampleBasic = function _exampleBasic() {\n    // Stepper lement\n    var element = document.querySelector(\"#kt_stepper_example_basic\"); // Initialize Stepper\n\n    var stepper = new KTStepper(element); // Handle next step\n\n    stepper.on(\"kt.stepper.next\", function (stepper) {\n      stepper.goNext(); // go next step\n    }); // Handle previous step\n\n    stepper.on(\"kt.stepper.previous\", function (stepper) {\n      stepper.goPrevious(); // go previous step\n    });\n  };\n\n  var _exampleVertical = function _exampleVertical() {\n    // Stepper lement\n    var element = document.querySelector(\"#kt_stepper_example_vertical\"); // Initialize Stepper\n\n    var stepper = new KTStepper(element); // Handle next step\n\n    stepper.on(\"kt.stepper.next\", function (stepper) {\n      stepper.goNext(); // go next step\n    }); // Handle previous step\n\n    stepper.on(\"kt.stepper.previous\", function (stepper) {\n      stepper.goPrevious(); // go previous step\n    });\n  };\n\n  var _exampleClickable = function _exampleClickable() {\n    // Stepper lement\n    var element = document.querySelector(\"#kt_stepper_example_clickable\"); // Initialize Stepper\n\n    var stepper = new KTStepper(element); // Handle navigation click\n\n    stepper.on(\"kt.stepper.click\", function (stepper) {\n      stepper.goTo(stepper.getClickedStepIndex()); // go to clicked step\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      _exampleBasic();\n\n      _exampleVertical();\n\n      _exampleClickable();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralStepperDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvc3RlcHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxxQkFBcUIsR0FBRyxZQUFXO0FBQ25DO0FBQ0EsTUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFXO0FBQzNCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWQsQ0FGMkIsQ0FJM0I7O0FBQ04sUUFBSUMsT0FBTyxHQUFHLElBQUlDLFNBQUosQ0FBY0osT0FBZCxDQUFkLENBTGlDLENBTzNCOztBQUNORyxJQUFBQSxPQUFPLENBQUNFLEVBQVIsQ0FBVyxpQkFBWCxFQUE4QixVQUFVRixPQUFWLEVBQW1CO0FBQ2hEQSxNQUFBQSxPQUFPLENBQUNHLE1BQVIsR0FEZ0QsQ0FDOUI7QUFDbEIsS0FGRCxFQVJpQyxDQVlqQzs7QUFDQUgsSUFBQUEsT0FBTyxDQUFDRSxFQUFSLENBQVcscUJBQVgsRUFBa0MsVUFBVUYsT0FBVixFQUFtQjtBQUNwREEsTUFBQUEsT0FBTyxDQUFDSSxVQUFSLEdBRG9ELENBQzlCO0FBQ3RCLEtBRkQ7QUFHRyxHQWhCRDs7QUFrQkEsTUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFXO0FBQzlCO0FBQ0EsUUFBSVIsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsOEJBQXZCLENBQWQsQ0FGOEIsQ0FJOUI7O0FBQ04sUUFBSUMsT0FBTyxHQUFHLElBQUlDLFNBQUosQ0FBY0osT0FBZCxDQUFkLENBTG9DLENBTzlCOztBQUNORyxJQUFBQSxPQUFPLENBQUNFLEVBQVIsQ0FBVyxpQkFBWCxFQUE4QixVQUFVRixPQUFWLEVBQW1CO0FBQ2hEQSxNQUFBQSxPQUFPLENBQUNHLE1BQVIsR0FEZ0QsQ0FDOUI7QUFDbEIsS0FGRCxFQVJvQyxDQVlwQzs7QUFDQUgsSUFBQUEsT0FBTyxDQUFDRSxFQUFSLENBQVcscUJBQVgsRUFBa0MsVUFBVUYsT0FBVixFQUFtQjtBQUNwREEsTUFBQUEsT0FBTyxDQUFDSSxVQUFSLEdBRG9ELENBQzlCO0FBQ3RCLEtBRkQ7QUFHRyxHQWhCRDs7QUFrQkEsTUFBSUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFXO0FBQy9CO0FBQ0EsUUFBSVQsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsK0JBQXZCLENBQWQsQ0FGK0IsQ0FJL0I7O0FBQ04sUUFBSUMsT0FBTyxHQUFHLElBQUlDLFNBQUosQ0FBY0osT0FBZCxDQUFkLENBTHFDLENBTy9COztBQUNORyxJQUFBQSxPQUFPLENBQUNFLEVBQVIsQ0FBVyxrQkFBWCxFQUErQixVQUFVRixPQUFWLEVBQW1CO0FBQ2pEQSxNQUFBQSxPQUFPLENBQUNPLElBQVIsQ0FBYVAsT0FBTyxDQUFDUSxtQkFBUixFQUFiLEVBRGlELENBQ0o7QUFDN0MsS0FGRDtBQUdHLEdBWEQ7O0FBYUEsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiYixNQUFBQSxhQUFhOztBQUNiUyxNQUFBQSxnQkFBZ0I7O0FBQ2hCQyxNQUFBQSxpQkFBaUI7QUFDcEI7QUFORSxHQUFQO0FBUUgsQ0EzRDJCLEVBQTVCLEMsQ0E2REE7OztBQUNBSSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNoQixFQUFBQSxxQkFBcUIsQ0FBQ2MsSUFBdEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL3N0ZXBwZXIuanM/YTgxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUR2VuZXJhbFN0ZXBwZXJEZW1vcyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIF9leGFtcGxlQmFzaWMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gU3RlcHBlciBsZW1lbnRcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X3N0ZXBwZXJfZXhhbXBsZV9iYXNpY1wiKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIFN0ZXBwZXJcblx0XHR2YXIgc3RlcHBlciA9IG5ldyBLVFN0ZXBwZXIoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gSGFuZGxlIG5leHQgc3RlcFxuXHRcdHN0ZXBwZXIub24oXCJrdC5zdGVwcGVyLm5leHRcIiwgZnVuY3Rpb24gKHN0ZXBwZXIpIHtcblx0XHRcdHN0ZXBwZXIuZ29OZXh0KCk7IC8vIGdvIG5leHQgc3RlcFxuXHRcdH0pO1xuXG5cdFx0Ly8gSGFuZGxlIHByZXZpb3VzIHN0ZXBcblx0XHRzdGVwcGVyLm9uKFwia3Quc3RlcHBlci5wcmV2aW91c1wiLCBmdW5jdGlvbiAoc3RlcHBlcikge1xuXHRcdFx0c3RlcHBlci5nb1ByZXZpb3VzKCk7IC8vIGdvIHByZXZpb3VzIHN0ZXBcblx0XHR9KTtcbiAgICB9XG5cbiAgICB2YXIgX2V4YW1wbGVWZXJ0aWNhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBTdGVwcGVyIGxlbWVudFxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3Rfc3RlcHBlcl9leGFtcGxlX3ZlcnRpY2FsXCIpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgU3RlcHBlclxuXHRcdHZhciBzdGVwcGVyID0gbmV3IEtUU3RlcHBlcihlbGVtZW50KTtcblxuICAgICAgICAvLyBIYW5kbGUgbmV4dCBzdGVwXG5cdFx0c3RlcHBlci5vbihcImt0LnN0ZXBwZXIubmV4dFwiLCBmdW5jdGlvbiAoc3RlcHBlcikge1xuXHRcdFx0c3RlcHBlci5nb05leHQoKTsgLy8gZ28gbmV4dCBzdGVwXG5cdFx0fSk7XG5cblx0XHQvLyBIYW5kbGUgcHJldmlvdXMgc3RlcFxuXHRcdHN0ZXBwZXIub24oXCJrdC5zdGVwcGVyLnByZXZpb3VzXCIsIGZ1bmN0aW9uIChzdGVwcGVyKSB7XG5cdFx0XHRzdGVwcGVyLmdvUHJldmlvdXMoKTsgLy8gZ28gcHJldmlvdXMgc3RlcFxuXHRcdH0pO1xuICAgIH1cblxuICAgIHZhciBfZXhhbXBsZUNsaWNrYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBTdGVwcGVyIGxlbWVudFxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3Rfc3RlcHBlcl9leGFtcGxlX2NsaWNrYWJsZVwiKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIFN0ZXBwZXJcblx0XHR2YXIgc3RlcHBlciA9IG5ldyBLVFN0ZXBwZXIoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gSGFuZGxlIG5hdmlnYXRpb24gY2xpY2tcblx0XHRzdGVwcGVyLm9uKFwia3Quc3RlcHBlci5jbGlja1wiLCBmdW5jdGlvbiAoc3RlcHBlcikge1xuXHRcdFx0c3RlcHBlci5nb1RvKHN0ZXBwZXIuZ2V0Q2xpY2tlZFN0ZXBJbmRleCgpKTsgLy8gZ28gdG8gY2xpY2tlZCBzdGVwXG5cdFx0fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF9leGFtcGxlQmFzaWMoKTtcbiAgICAgICAgICAgIF9leGFtcGxlVmVydGljYWwoKTtcbiAgICAgICAgICAgIF9leGFtcGxlQ2xpY2thYmxlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEdlbmVyYWxTdGVwcGVyRGVtb3MuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RHZW5lcmFsU3RlcHBlckRlbW9zIiwiX2V4YW1wbGVCYXNpYyIsImVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGVwcGVyIiwiS1RTdGVwcGVyIiwib24iLCJnb05leHQiLCJnb1ByZXZpb3VzIiwiX2V4YW1wbGVWZXJ0aWNhbCIsIl9leGFtcGxlQ2xpY2thYmxlIiwiZ29UbyIsImdldENsaWNrZWRTdGVwSW5kZXgiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/stepper.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/stepper.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=stepper.js.map