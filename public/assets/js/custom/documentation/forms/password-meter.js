/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**************************************************************!*\
  !*** ../src/js/custom/documentation/forms/password-meter.js ***!
  \**************************************************************/


// Class definition
var KTGeneralPasswordMeterDemos = function() {
    // Private functions
    var _showScore = function() {
        // Select show score button
        const showScoreButton = document.getElementById('kt_password_meter_example_show_score');  

        // Get password meter instance
        const passwordMeterElement = document.querySelector("#kt_password_meter_example");
        const passwordMeter = KTPasswordMeter.getInstance(passwordMeterElement);

        // Handle show score button click
        showScoreButton.addEventListener('click', e => {
            // Get password score
            const score = passwordMeter.getScore();

            // Show popup confirmation 
            Swal.fire({
                text: "Current Password Score: " + score,
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                    confirmButton: "btn btn-primary"
                }
            });
        });
    }

    return {
        // Public Functions
        init: function() {
            _showScore();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTGeneralPasswordMeterDemos.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/password-meter.js":
/*!***********************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/password-meter.js ***!
  \***********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralPasswordMeterDemos = function () {\n  // Private functions\n  var _showScore = function _showScore() {\n    // Select show score button\n    var showScoreButton = document.getElementById('kt_password_meter_example_show_score'); // Get password meter instance\n\n    var passwordMeterElement = document.querySelector(\"#kt_password_meter_example\");\n    var passwordMeter = KTPasswordMeter.getInstance(passwordMeterElement); // Handle show score button click\n\n    showScoreButton.addEventListener('click', function (e) {\n      // Get password score\n      var score = passwordMeter.getScore(); // Show popup confirmation \n\n      Swal.fire({\n        text: \"Current Password Score: \" + score,\n        icon: \"success\",\n        buttonsStyling: false,\n        confirmButtonText: \"Ok, got it!\",\n        customClass: {\n          confirmButton: \"btn btn-primary\"\n        }\n      });\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      _showScore();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralPasswordMeterDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL3Bhc3N3b3JkLW1ldGVyLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLDJCQUEyQixHQUFHLFlBQVc7QUFDekM7QUFDQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBQ3hCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isc0NBQXhCLENBQXhCLENBRndCLENBSXhCOztBQUNBLFFBQU1DLG9CQUFvQixHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsNEJBQXZCLENBQTdCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHQyxlQUFlLENBQUNDLFdBQWhCLENBQTRCSixvQkFBNUIsQ0FBdEIsQ0FOd0IsQ0FReEI7O0FBQ0FILElBQUFBLGVBQWUsQ0FBQ1EsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQUFDLENBQUMsRUFBSTtBQUMzQztBQUNBLFVBQU1DLEtBQUssR0FBR0wsYUFBYSxDQUFDTSxRQUFkLEVBQWQsQ0FGMkMsQ0FJM0M7O0FBQ0FDLE1BQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05DLFFBQUFBLElBQUksRUFBRSw2QkFBNkJKLEtBRDdCO0FBRU5LLFFBQUFBLElBQUksRUFBRSxTQUZBO0FBR05DLFFBQUFBLGNBQWMsRUFBRSxLQUhWO0FBSU5DLFFBQUFBLGlCQUFpQixFQUFFLGFBSmI7QUFLTkMsUUFBQUEsV0FBVyxFQUFFO0FBQ1RDLFVBQUFBLGFBQWEsRUFBRTtBQUROO0FBTFAsT0FBVjtBQVNILEtBZEQ7QUFlSCxHQXhCRDs7QUEwQkEsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNickIsTUFBQUEsVUFBVTtBQUNiO0FBSkUsR0FBUDtBQU1ILENBbENpQyxFQUFsQyxDLENBb0NBOzs7QUFDQXNCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ3hCLEVBQUFBLDJCQUEyQixDQUFDc0IsSUFBNUI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9mb3Jtcy9wYXNzd29yZC1tZXRlci5qcz9lNmMzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RHZW5lcmFsUGFzc3dvcmRNZXRlckRlbW9zID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgX3Nob3dTY29yZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBTZWxlY3Qgc2hvdyBzY29yZSBidXR0b25cbiAgICAgICAgY29uc3Qgc2hvd1Njb3JlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3Bhc3N3b3JkX21ldGVyX2V4YW1wbGVfc2hvd19zY29yZScpOyAgXG5cbiAgICAgICAgLy8gR2V0IHBhc3N3b3JkIG1ldGVyIGluc3RhbmNlXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkTWV0ZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdF9wYXNzd29yZF9tZXRlcl9leGFtcGxlXCIpO1xuICAgICAgICBjb25zdCBwYXNzd29yZE1ldGVyID0gS1RQYXNzd29yZE1ldGVyLmdldEluc3RhbmNlKHBhc3N3b3JkTWV0ZXJFbGVtZW50KTtcblxuICAgICAgICAvLyBIYW5kbGUgc2hvdyBzY29yZSBidXR0b24gY2xpY2tcbiAgICAgICAgc2hvd1Njb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAvLyBHZXQgcGFzc3dvcmQgc2NvcmVcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gcGFzc3dvcmRNZXRlci5nZXRTY29yZSgpO1xuXG4gICAgICAgICAgICAvLyBTaG93IHBvcHVwIGNvbmZpcm1hdGlvbiBcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJDdXJyZW50IFBhc3N3b3JkIFNjb3JlOiBcIiArIHNjb3JlLFxuICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF9zaG93U2NvcmUoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtUR2VuZXJhbFBhc3N3b3JkTWV0ZXJEZW1vcy5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEdlbmVyYWxQYXNzd29yZE1ldGVyRGVtb3MiLCJfc2hvd1Njb3JlIiwic2hvd1Njb3JlQnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhc3N3b3JkTWV0ZXJFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInBhc3N3b3JkTWV0ZXIiLCJLVFBhc3N3b3JkTWV0ZXIiLCJnZXRJbnN0YW5jZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2NvcmUiLCJnZXRTY29yZSIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/password-meter.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/password-meter.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=password-meter.js.map