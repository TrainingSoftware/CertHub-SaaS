/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**********************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/authentication/sign-in/two-steps.js ***!
  \**********************************************************************************************/


// Class Definition
var KTSigninTwoSteps = function() {
    // Elements
    var form;
    var submitButton;

    // Handle form
    var handleForm = function(e) {        
        // Handle form submit
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            var validated = true;

            var inputs = [].slice.call(form.querySelectorAll('input[maxlength="1"]'));
            inputs.map(function (input) {
                if (input.value === '' || input.value.length === 0) {
                    validated = false;
                }
            });

            if (validated === true) {
                // Show loading indication
                submitButton.setAttribute('data-kt-indicator', 'on');

                // Disable button to avoid multiple click 
                submitButton.disabled = true;

                // Simulate ajax request
                setTimeout(function() {
                    // Hide loading indication
                    submitButton.removeAttribute('data-kt-indicator');

                    // Enable button
                    submitButton.disabled = false;

                    // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                    Swal.fire({
                        text: "You have been successfully verified!",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    }).then(function (result) {
                        if (result.isConfirmed) { 
                            inputs.map(function (input) {
                                input.value = '';
                            });
                        }
                    });
                }, 1000); 
            } else {
                swal.fire({
                    text: "Please enter valid securtiy code and try again.",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    customClass: {
                        confirmButton: "btn fw-bold btn-light-primary"
                    }
                }).then(function() {
                    KTUtil.scrollTop();
                });
            }
        });
    }

    // Public functions
    return {
        // Initialization
        init: function() {
            form = document.querySelector('#kt_sing_in_two_steps_form');
            submitButton = document.querySelector('#kt_sing_in_two_steps_submit');

            handleForm();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTSigninTwoSteps.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/authentication/sign-in/two-steps.js":
/*!*********************************************************************!*\
  !*** ./resources/src/js/custom/authentication/sign-in/two-steps.js ***!
  \*********************************************************************/
/***/ (() => {

eval(" // Class Definition\n\nvar KTSigninTwoSteps = function () {\n  // Elements\n  var form;\n  var submitButton; // Handle form\n\n  var handleForm = function handleForm(e) {\n    // Handle form submit\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      var validated = true;\n      var inputs = [].slice.call(form.querySelectorAll('input[maxlength=\"1\"]'));\n      inputs.map(function (input) {\n        if (input.value === '' || input.value.length === 0) {\n          validated = false;\n        }\n      });\n\n      if (validated === true) {\n        // Show loading indication\n        submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n        submitButton.disabled = true; // Simulate ajax request\n\n        setTimeout(function () {\n          // Hide loading indication\n          submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n          submitButton.disabled = false; // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n          Swal.fire({\n            text: \"You have been successfully verified!\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          }).then(function (result) {\n            if (result.isConfirmed) {\n              inputs.map(function (input) {\n                input.value = '';\n              });\n            }\n          });\n        }, 1000);\n      } else {\n        swal.fire({\n          text: \"Please enter valid securtiy code and try again.\",\n          icon: \"error\",\n          buttonsStyling: false,\n          confirmButtonText: \"Ok, got it!\",\n          customClass: {\n            confirmButton: \"btn fw-bold btn-light-primary\"\n          }\n        }).then(function () {\n          KTUtil.scrollTop();\n        });\n      }\n    });\n  }; // Public functions\n\n\n  return {\n    // Initialization\n    init: function init() {\n      form = document.querySelector('#kt_sing_in_two_steps_form');\n      submitButton = document.querySelector('#kt_sing_in_two_steps_submit');\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTSigninTwoSteps.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9zaWduLWluL3R3by1zdGVwcy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxnQkFBZ0IsR0FBRyxZQUFXO0FBQzlCO0FBQ0EsTUFBSUMsSUFBSjtBQUNBLE1BQUlDLFlBQUosQ0FIOEIsQ0FLOUI7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBU0MsQ0FBVCxFQUFZO0FBQ3pCO0FBQ0FGLElBQUFBLFlBQVksQ0FBQ0csZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBVUQsQ0FBVixFQUFhO0FBQ2hEQSxNQUFBQSxDQUFDLENBQUNFLGNBQUY7QUFFQSxVQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQSxVQUFJQyxNQUFNLEdBQUcsR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNULElBQUksQ0FBQ1UsZ0JBQUwsQ0FBc0Isc0JBQXRCLENBQWQsQ0FBYjtBQUNBSCxNQUFBQSxNQUFNLENBQUNJLEdBQVAsQ0FBVyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hCLFlBQUlBLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixFQUFoQixJQUFzQkQsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosS0FBdUIsQ0FBakQsRUFBb0Q7QUFDaERSLFVBQUFBLFNBQVMsR0FBRyxLQUFaO0FBQ0g7QUFDSixPQUpEOztBQU1BLFVBQUlBLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUNwQjtBQUNBTCxRQUFBQSxZQUFZLENBQUNjLFlBQWIsQ0FBMEIsbUJBQTFCLEVBQStDLElBQS9DLEVBRm9CLENBSXBCOztBQUNBZCxRQUFBQSxZQUFZLENBQUNlLFFBQWIsR0FBd0IsSUFBeEIsQ0FMb0IsQ0FPcEI7O0FBQ0FDLFFBQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCO0FBQ0FoQixVQUFBQSxZQUFZLENBQUNpQixlQUFiLENBQTZCLG1CQUE3QixFQUZrQixDQUlsQjs7QUFDQWpCLFVBQUFBLFlBQVksQ0FBQ2UsUUFBYixHQUF3QixLQUF4QixDQUxrQixDQU9sQjs7QUFDQUcsVUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsWUFBQUEsSUFBSSxFQUFFLHNDQURBO0FBRU5DLFlBQUFBLElBQUksRUFBRSxTQUZBO0FBR05DLFlBQUFBLGNBQWMsRUFBRSxLQUhWO0FBSU5DLFlBQUFBLGlCQUFpQixFQUFFLGFBSmI7QUFLTkMsWUFBQUEsV0FBVyxFQUFFO0FBQ1RDLGNBQUFBLGFBQWEsRUFBRTtBQUROO0FBTFAsV0FBVixFQVFHQyxJQVJILENBUVEsVUFBVUMsTUFBVixFQUFrQjtBQUN0QixnQkFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO0FBQ3BCdEIsY0FBQUEsTUFBTSxDQUFDSSxHQUFQLENBQVcsVUFBVUMsS0FBVixFQUFpQjtBQUN4QkEsZ0JBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDSCxlQUZEO0FBR0g7QUFDSixXQWREO0FBZUgsU0F2QlMsRUF1QlAsSUF2Qk8sQ0FBVjtBQXdCSCxPQWhDRCxNQWdDTztBQUNIaUIsUUFBQUEsSUFBSSxDQUFDVixJQUFMLENBQVU7QUFDTkMsVUFBQUEsSUFBSSxFQUFFLGlEQURBO0FBRU5DLFVBQUFBLElBQUksRUFBRSxPQUZBO0FBR05DLFVBQUFBLGNBQWMsRUFBRSxLQUhWO0FBSU5DLFVBQUFBLGlCQUFpQixFQUFFLGFBSmI7QUFLTkMsVUFBQUEsV0FBVyxFQUFFO0FBQ1RDLFlBQUFBLGFBQWEsRUFBRTtBQUROO0FBTFAsU0FBVixFQVFHQyxJQVJILENBUVEsWUFBVztBQUNmSSxVQUFBQSxNQUFNLENBQUNDLFNBQVA7QUFDSCxTQVZEO0FBV0g7QUFDSixLQXpERDtBQTBESCxHQTVERCxDQU44QixDQW9FOUI7OztBQUNBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYmpDLE1BQUFBLElBQUksR0FBR2tDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBUDtBQUNBbEMsTUFBQUEsWUFBWSxHQUFHaUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLDhCQUF2QixDQUFmO0FBRUFqQyxNQUFBQSxVQUFVO0FBQ2I7QUFQRSxHQUFQO0FBU0gsQ0E5RXNCLEVBQXZCLEMsQ0FnRkE7OztBQUNBNkIsTUFBTSxDQUFDSyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDckMsRUFBQUEsZ0JBQWdCLENBQUNrQyxJQUFqQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9zaWduLWluL3R3by1zdGVwcy5qcz9jYzIzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBEZWZpbml0aW9uXG52YXIgS1RTaWduaW5Ud29TdGVwcyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIEVsZW1lbnRzXG4gICAgdmFyIGZvcm07XG4gICAgdmFyIHN1Ym1pdEJ1dHRvbjtcblxuICAgIC8vIEhhbmRsZSBmb3JtXG4gICAgdmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbihlKSB7ICAgICAgICBcbiAgICAgICAgLy8gSGFuZGxlIGZvcm0gc3VibWl0XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciB2YWxpZGF0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB2YXIgaW5wdXRzID0gW10uc2xpY2UuY2FsbChmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W21heGxlbmd0aD1cIjFcIl0nKSk7XG4gICAgICAgICAgICBpbnB1dHMubWFwKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycgfHwgaW5wdXQudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy8gU2hvdyBsb2FkaW5nIGluZGljYXRpb25cbiAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xuXG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBidXR0b24gdG8gYXZvaWQgbXVsdGlwbGUgY2xpY2sgXG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIGFqYXggcmVxdWVzdFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IG1lc3NhZ2UgcG9wdXAuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3UgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSB2ZXJpZmllZCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzLm1hcChmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlBsZWFzZSBlbnRlciB2YWxpZCBzZWN1cnRpeSBjb2RlIGFuZCB0cnkgYWdhaW4uXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBLVFV0aWwuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBmdW5jdGlvbnNcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBJbml0aWFsaXphdGlvblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3Rfc2luZ19pbl90d29fc3RlcHNfZm9ybScpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X3NpbmdfaW5fdHdvX3N0ZXBzX3N1Ym1pdCcpO1xuXG4gICAgICAgICAgICBoYW5kbGVGb3JtKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVFNpZ25pblR3b1N0ZXBzLmluaXQoKTtcbn0pOyJdLCJuYW1lcyI6WyJLVFNpZ25pblR3b1N0ZXBzIiwiZm9ybSIsInN1Ym1pdEJ1dHRvbiIsImhhbmRsZUZvcm0iLCJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVkIiwiaW5wdXRzIiwic2xpY2UiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImlucHV0IiwidmFsdWUiLCJsZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsInN3YWwiLCJLVFV0aWwiLCJzY3JvbGxUb3AiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/authentication/sign-in/two-steps.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/authentication/sign-in/two-steps.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=two-steps.js.map