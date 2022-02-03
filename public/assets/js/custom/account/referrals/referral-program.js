/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/account/referrals/referral-program.js ***!
  \************************************************************************************************/


// Class definition
var KTAccountReferralsReferralProgram = function () {
    // Private functions

    var initReferralProgrammClipboard = function() {
        var button = document.querySelector('#kt_referral_program_link_copy_btn');
        var input = document.querySelector('#kt_referral_link_input');
        var clipboard = new ClipboardJS(button);

        clipboard.on('success', function(e) {
            var buttonCaption = button.innerHTML;
            //Add bgcolor
            input.classList.add('bg-success');
            input.classList.add('text-inverse-success');

            button.innerHTML = 'Copied!';

            setTimeout(function() {
                button.innerHTML = buttonCaption;

                // Remove bgcolor
                input.classList.remove('bg-success'); 
                input.classList.remove('text-inverse-success'); 
            }, 3000);  // 3seconds

            e.clearSelection();
        });
    }

    // Public methods
    return {
        init: function () {
            initReferralProgrammClipboard();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTAccountReferralsReferralProgram.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/account/referrals/referral-program.js":
/*!***********************************************************************!*\
  !*** ./resources/src/js/custom/account/referrals/referral-program.js ***!
  \***********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountReferralsReferralProgram = function () {\n  // Private functions\n  var initReferralProgrammClipboard = function initReferralProgrammClipboard() {\n    var button = document.querySelector('#kt_referral_program_link_copy_btn');\n    var input = document.querySelector('#kt_referral_link_input');\n    var clipboard = new ClipboardJS(button);\n    clipboard.on('success', function (e) {\n      var buttonCaption = button.innerHTML; //Add bgcolor\n\n      input.classList.add('bg-success');\n      input.classList.add('text-inverse-success');\n      button.innerHTML = 'Copied!';\n      setTimeout(function () {\n        button.innerHTML = buttonCaption; // Remove bgcolor\n\n        input.classList.remove('bg-success');\n        input.classList.remove('text-inverse-success');\n      }, 3000); // 3seconds\n\n      e.clearSelection();\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initReferralProgrammClipboard();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountReferralsReferralProgram.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hY2NvdW50L3JlZmVycmFscy9yZWZlcnJhbC1wcm9ncmFtLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGlDQUFpQyxHQUFHLFlBQVk7QUFDaEQ7QUFFQSxNQUFJQyw2QkFBNkIsR0FBRyxTQUFoQ0EsNkJBQWdDLEdBQVc7QUFDM0MsUUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0NBQXZCLENBQWI7QUFDQSxRQUFJQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBWjtBQUNBLFFBQUlFLFNBQVMsR0FBRyxJQUFJQyxXQUFKLENBQWdCTCxNQUFoQixDQUFoQjtBQUVBSSxJQUFBQSxTQUFTLENBQUNFLEVBQVYsQ0FBYSxTQUFiLEVBQXdCLFVBQVNDLENBQVQsRUFBWTtBQUNoQyxVQUFJQyxhQUFhLEdBQUdSLE1BQU0sQ0FBQ1MsU0FBM0IsQ0FEZ0MsQ0FFaEM7O0FBQ0FOLE1BQUFBLEtBQUssQ0FBQ08sU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsWUFBcEI7QUFDQVIsTUFBQUEsS0FBSyxDQUFDTyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixzQkFBcEI7QUFFQVgsTUFBQUEsTUFBTSxDQUFDUyxTQUFQLEdBQW1CLFNBQW5CO0FBRUFHLE1BQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCWixRQUFBQSxNQUFNLENBQUNTLFNBQVAsR0FBbUJELGFBQW5CLENBRGtCLENBR2xCOztBQUNBTCxRQUFBQSxLQUFLLENBQUNPLFNBQU4sQ0FBZ0JHLE1BQWhCLENBQXVCLFlBQXZCO0FBQ0FWLFFBQUFBLEtBQUssQ0FBQ08sU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUIsc0JBQXZCO0FBQ0gsT0FOUyxFQU1QLElBTk8sQ0FBVixDQVJnQyxDQWNyQjs7QUFFWE4sTUFBQUEsQ0FBQyxDQUFDTyxjQUFGO0FBQ0gsS0FqQkQ7QUFrQkgsR0F2QkQsQ0FIZ0QsQ0E0QmhEOzs7QUFDQSxTQUFPO0FBQ0hDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkaEIsTUFBQUEsNkJBQTZCO0FBQ2hDO0FBSEUsR0FBUDtBQUtILENBbEN1QyxFQUF4QyxDLENBb0NBOzs7QUFDQWlCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ25CLEVBQUFBLGlDQUFpQyxDQUFDaUIsSUFBbEM7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vYWNjb3VudC9yZWZlcnJhbHMvcmVmZXJyYWwtcHJvZ3JhbS5qcz9hOWY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RBY2NvdW50UmVmZXJyYWxzUmVmZXJyYWxQcm9ncmFtID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG5cbiAgICB2YXIgaW5pdFJlZmVycmFsUHJvZ3JhbW1DbGlwYm9hcmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9yZWZlcnJhbF9wcm9ncmFtX2xpbmtfY29weV9idG4nKTtcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X3JlZmVycmFsX2xpbmtfaW5wdXQnKTtcbiAgICAgICAgdmFyIGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUyhidXR0b24pO1xuXG4gICAgICAgIGNsaXBib2FyZC5vbignc3VjY2VzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBidXR0b25DYXB0aW9uID0gYnV0dG9uLmlubmVySFRNTDtcbiAgICAgICAgICAgIC8vQWRkIGJnY29sb3JcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2JnLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3RleHQtaW52ZXJzZS1zdWNjZXNzJyk7XG5cbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnQ29waWVkISc7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGJ1dHRvbkNhcHRpb247XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYmdjb2xvclxuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXN1Y2Nlc3MnKTsgXG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgndGV4dC1pbnZlcnNlLXN1Y2Nlc3MnKTsgXG4gICAgICAgICAgICB9LCAzMDAwKTsgIC8vIDNzZWNvbmRzXG5cbiAgICAgICAgICAgIGUuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbml0UmVmZXJyYWxQcm9ncmFtbUNsaXBib2FyZCgpO1xuICAgICAgICB9XG4gICAgfVxufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEFjY291bnRSZWZlcnJhbHNSZWZlcnJhbFByb2dyYW0uaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RBY2NvdW50UmVmZXJyYWxzUmVmZXJyYWxQcm9ncmFtIiwiaW5pdFJlZmVycmFsUHJvZ3JhbW1DbGlwYm9hcmQiLCJidXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsImNsaXBib2FyZCIsIkNsaXBib2FyZEpTIiwib24iLCJlIiwiYnV0dG9uQ2FwdGlvbiIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjbGVhclNlbGVjdGlvbiIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/account/referrals/referral-program.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/account/referrals/referral-program.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=referral-program.js.map