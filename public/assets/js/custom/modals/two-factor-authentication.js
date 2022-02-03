/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**********************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/modals/two-factor-authentication.js ***!
  \**********************************************************************************************/


// Class definition
var KTModalTwoFactorAuthentication = function () {
    // Private variables
    var modal;
    var modalObject;

    var optionsWrapper;
    var optionsSelectButton;

    var smsWrapper;
    var smsForm;
    var smsSubmitButton;
    var smsCancelButton;
    var smsValidator;

    var appsWrapper;
    var appsForm;
    var appsSubmitButton;
    var appsCancelButton;
    var appsValidator;

    // Private functions
    var handleOptionsForm = function() {
        // Handle options selection
        optionsSelectButton.addEventListener('click', function (e) {
            e.preventDefault();
            var option = optionsWrapper.querySelector('[name="auth_option"]:checked');

            optionsWrapper.classList.add('d-none');

            if (option.value == 'sms') {
                smsWrapper.classList.remove('d-none');
            } else {
                appsWrapper.classList.remove('d-none');
            }
        });
    }

	var showOptionsForm = function() {
		optionsWrapper.classList.remove('d-none');
		smsWrapper.classList.add('d-none');
		appsWrapper.classList.add('d-none');
    }

    var handleSMSForm = function() {
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
		smsValidator = FormValidation.formValidation(
			smsForm,
			{
				fields: {
					'mobile': {
						validators: {
							notEmpty: {
								message: 'Mobile no is required'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap5({
						rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
					})
				}
			}
		);

        // Handle apps submition
        smsSubmitButton.addEventListener('click', function (e) {
            e.preventDefault();

			// Validate form before submit
			if (smsValidator) {
				smsValidator.validate().then(function (status) {
					console.log('validated!');

					if (status == 'Valid') {
						// Show loading indication
						smsSubmitButton.setAttribute('data-kt-indicator', 'on');

						// Disable button to avoid multiple click 
						smsSubmitButton.disabled = true;						

						// Simulate ajax process
						setTimeout(function() {
							// Remove loading indication
							smsSubmitButton.removeAttribute('data-kt-indicator');

							// Enable button
							smsSubmitButton.disabled = false;
							
							// Show success message. For more info check the plugin's official documentation: https://sweetalert2.github.io/
							Swal.fire({
								text: "Mobile number has been successfully submitted!",
								icon: "success",
								buttonsStyling: false,
								confirmButtonText: "Ok, got it!",
								customClass: {
									confirmButton: "btn btn-primary"
								}
							}).then(function (result) {
								if (result.isConfirmed) {
									modalObject.hide();
									showOptionsForm();
								}
							});

							//smsForm.submit(); // Submit form
						}, 2000);   						
					} else {
						// Show error message.
						Swal.fire({
							text: "Sorry, looks like there are some errors detected, please try again.",
							icon: "error",
							buttonsStyling: false,
							confirmButtonText: "Ok, got it!",
							customClass: {
								confirmButton: "btn btn-primary"
							}
						});
					}
				});
			}
        });

        // Handle sms cancelation
        smsCancelButton.addEventListener('click', function (e) {
            e.preventDefault();
            var option = optionsWrapper.querySelector('[name="auth_option"]:checked');

            optionsWrapper.classList.remove('d-none');
            smsWrapper.classList.add('d-none');
        });
    }

    var handleAppsForm = function() {
		// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
		appsValidator = FormValidation.formValidation(
			appsForm,
			{
				fields: {
					'code': {
						validators: {
							notEmpty: {
								message: 'Code is required'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap5({
						rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
					})
				}
			}
		);

        // Handle apps submition
        appsSubmitButton.addEventListener('click', function (e) {
            e.preventDefault();

			// Validate form before submit
			if (appsValidator) {
				appsValidator.validate().then(function (status) {
					console.log('validated!');

					if (status == 'Valid') {
						appsSubmitButton.setAttribute('data-kt-indicator', 'on');

						// Disable button to avoid multiple click 
						appsSubmitButton.disabled = true;

						setTimeout(function() {
							appsSubmitButton.removeAttribute('data-kt-indicator');

							// Enable button
							appsSubmitButton.disabled = false;
							
							// Show success message.
							Swal.fire({
								text: "Code has been successfully submitted!",
								icon: "success",
								buttonsStyling: false,
								confirmButtonText: "Ok, got it!",
								customClass: {
									confirmButton: "btn btn-primary"
								}
							}).then(function (result) {
								if (result.isConfirmed) {
									modalObject.hide();
									showOptionsForm();
								}
							});

							//appsForm.submit(); // Submit form
						}, 2000);   						
					} else {
						// Show error message.
						Swal.fire({
							text: "Sorry, looks like there are some errors detected, please try again.",
							icon: "error",
							buttonsStyling: false,
							confirmButtonText: "Ok, got it!",
							customClass: {
								confirmButton: "btn btn-primary"
							}
						});
					}
				});
			}
        });

        // Handle apps cancelation
        appsCancelButton.addEventListener('click', function (e) {
            e.preventDefault();
            var option = optionsWrapper.querySelector('[name="auth_option"]:checked');

            optionsWrapper.classList.remove('d-none');
            appsWrapper.classList.add('d-none');
        });
    }

    // Public methods
    return {
        init: function () {
            // Elements
            modal = document.querySelector('#kt_modal_two_factor_authentication');

			if (!modal) {
				return;
			}

            modalObject = new bootstrap.Modal(modal);

            optionsWrapper = modal.querySelector('[data-kt-element="options"]');
            optionsSelectButton = modal.querySelector('[data-kt-element="options-select"]');

            smsWrapper = modal.querySelector('[data-kt-element="sms"]');
            smsForm = modal.querySelector('[data-kt-element="sms-form"]');
            smsSubmitButton = modal.querySelector('[data-kt-element="sms-submit"]');
            smsCancelButton = modal.querySelector('[data-kt-element="sms-cancel"]');

            appsWrapper = modal.querySelector('[data-kt-element="apps"]');
            appsForm = modal.querySelector('[data-kt-element="apps-form"]');
            appsSubmitButton = modal.querySelector('[data-kt-element="apps-submit"]');
            appsCancelButton = modal.querySelector('[data-kt-element="apps-cancel"]');

            // Handle forms
            handleOptionsForm();
            handleSMSForm();
            handleAppsForm();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTModalTwoFactorAuthentication.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/modals/two-factor-authentication.js":
/*!*********************************************************************!*\
  !*** ./resources/src/js/custom/modals/two-factor-authentication.js ***!
  \*********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTModalTwoFactorAuthentication = function () {\n  // Private variables\n  var modal;\n  var modalObject;\n  var optionsWrapper;\n  var optionsSelectButton;\n  var smsWrapper;\n  var smsForm;\n  var smsSubmitButton;\n  var smsCancelButton;\n  var smsValidator;\n  var appsWrapper;\n  var appsForm;\n  var appsSubmitButton;\n  var appsCancelButton;\n  var appsValidator; // Private functions\n\n  var handleOptionsForm = function handleOptionsForm() {\n    // Handle options selection\n    optionsSelectButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      var option = optionsWrapper.querySelector('[name=\"auth_option\"]:checked');\n      optionsWrapper.classList.add('d-none');\n\n      if (option.value == 'sms') {\n        smsWrapper.classList.remove('d-none');\n      } else {\n        appsWrapper.classList.remove('d-none');\n      }\n    });\n  };\n\n  var showOptionsForm = function showOptionsForm() {\n    optionsWrapper.classList.remove('d-none');\n    smsWrapper.classList.add('d-none');\n    appsWrapper.classList.add('d-none');\n  };\n\n  var handleSMSForm = function handleSMSForm() {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    smsValidator = FormValidation.formValidation(smsForm, {\n      fields: {\n        'mobile': {\n          validators: {\n            notEmpty: {\n              message: 'Mobile no is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Handle apps submition\n\n    smsSubmitButton.addEventListener('click', function (e) {\n      e.preventDefault(); // Validate form before submit\n\n      if (smsValidator) {\n        smsValidator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            smsSubmitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            smsSubmitButton.disabled = true; // Simulate ajax process\n\n            setTimeout(function () {\n              // Remove loading indication\n              smsSubmitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              smsSubmitButton.disabled = false; // Show success message. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n              Swal.fire({\n                text: \"Mobile number has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  modalObject.hide();\n                  showOptionsForm();\n                }\n              }); //smsForm.submit(); // Submit form\n            }, 2000);\n          } else {\n            // Show error message.\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }\n    }); // Handle sms cancelation\n\n    smsCancelButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      var option = optionsWrapper.querySelector('[name=\"auth_option\"]:checked');\n      optionsWrapper.classList.remove('d-none');\n      smsWrapper.classList.add('d-none');\n    });\n  };\n\n  var handleAppsForm = function handleAppsForm() {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    appsValidator = FormValidation.formValidation(appsForm, {\n      fields: {\n        'code': {\n          validators: {\n            notEmpty: {\n              message: 'Code is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Handle apps submition\n\n    appsSubmitButton.addEventListener('click', function (e) {\n      e.preventDefault(); // Validate form before submit\n\n      if (appsValidator) {\n        appsValidator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            appsSubmitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            appsSubmitButton.disabled = true;\n            setTimeout(function () {\n              appsSubmitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              appsSubmitButton.disabled = false; // Show success message.\n\n              Swal.fire({\n                text: \"Code has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  modalObject.hide();\n                  showOptionsForm();\n                }\n              }); //appsForm.submit(); // Submit form\n            }, 2000);\n          } else {\n            // Show error message.\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }\n    }); // Handle apps cancelation\n\n    appsCancelButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      var option = optionsWrapper.querySelector('[name=\"auth_option\"]:checked');\n      optionsWrapper.classList.remove('d-none');\n      appsWrapper.classList.add('d-none');\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      // Elements\n      modal = document.querySelector('#kt_modal_two_factor_authentication');\n\n      if (!modal) {\n        return;\n      }\n\n      modalObject = new bootstrap.Modal(modal);\n      optionsWrapper = modal.querySelector('[data-kt-element=\"options\"]');\n      optionsSelectButton = modal.querySelector('[data-kt-element=\"options-select\"]');\n      smsWrapper = modal.querySelector('[data-kt-element=\"sms\"]');\n      smsForm = modal.querySelector('[data-kt-element=\"sms-form\"]');\n      smsSubmitButton = modal.querySelector('[data-kt-element=\"sms-submit\"]');\n      smsCancelButton = modal.querySelector('[data-kt-element=\"sms-cancel\"]');\n      appsWrapper = modal.querySelector('[data-kt-element=\"apps\"]');\n      appsForm = modal.querySelector('[data-kt-element=\"apps-form\"]');\n      appsSubmitButton = modal.querySelector('[data-kt-element=\"apps-submit\"]');\n      appsCancelButton = modal.querySelector('[data-kt-element=\"apps-cancel\"]'); // Handle forms\n\n      handleOptionsForm();\n      handleSMSForm();\n      handleAppsForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTModalTwoFactorAuthentication.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9tb2RhbHMvdHdvLWZhY3Rvci1hdXRoZW50aWNhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSw4QkFBOEIsR0FBRyxZQUFZO0FBQzdDO0FBQ0EsTUFBSUMsS0FBSjtBQUNBLE1BQUlDLFdBQUo7QUFFQSxNQUFJQyxjQUFKO0FBQ0EsTUFBSUMsbUJBQUo7QUFFQSxNQUFJQyxVQUFKO0FBQ0EsTUFBSUMsT0FBSjtBQUNBLE1BQUlDLGVBQUo7QUFDQSxNQUFJQyxlQUFKO0FBQ0EsTUFBSUMsWUFBSjtBQUVBLE1BQUlDLFdBQUo7QUFDQSxNQUFJQyxRQUFKO0FBQ0EsTUFBSUMsZ0JBQUo7QUFDQSxNQUFJQyxnQkFBSjtBQUNBLE1BQUlDLGFBQUosQ0FsQjZDLENBb0I3Qzs7QUFDQSxNQUFJQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQVc7QUFDL0I7QUFDQVgsSUFBQUEsbUJBQW1CLENBQUNZLGdCQUFwQixDQUFxQyxPQUFyQyxFQUE4QyxVQUFVQyxDQUFWLEVBQWE7QUFDdkRBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQUlDLE1BQU0sR0FBR2hCLGNBQWMsQ0FBQ2lCLGFBQWYsQ0FBNkIsOEJBQTdCLENBQWI7QUFFQWpCLE1BQUFBLGNBQWMsQ0FBQ2tCLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLFFBQTdCOztBQUVBLFVBQUlILE1BQU0sQ0FBQ0ksS0FBUCxJQUFnQixLQUFwQixFQUEyQjtBQUN2QmxCLFFBQUFBLFVBQVUsQ0FBQ2dCLFNBQVgsQ0FBcUJHLE1BQXJCLENBQTRCLFFBQTVCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hkLFFBQUFBLFdBQVcsQ0FBQ1csU0FBWixDQUFzQkcsTUFBdEIsQ0FBNkIsUUFBN0I7QUFDSDtBQUNKLEtBWEQ7QUFZSCxHQWREOztBQWdCSCxNQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVc7QUFDaEN0QixJQUFBQSxjQUFjLENBQUNrQixT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QUFvQix5QkFBcEIsQ0FBYjtBQUNBZCxNQUFBQSxPQUFPLEdBQUdMLEtBQUssQ0FBQ21CLGFBQU4sQ0FBb0IsOEJBQXBCLENBQVY7QUFDQWIsTUFBQUEsZUFBZSxHQUFHTixLQUFLLENBQUNtQixhQUFOLENBQW9CLGdDQUFwQixDQUFsQjtBQUNBWixNQUFBQSxlQUFlLEdBQUdQLEtBQUssQ0FBQ21CLGFBQU4sQ0FBb0IsZ0NBQXBCLENBQWxCO0FBRUFWLE1BQUFBLFdBQVcsR0FBR1QsS0FBSyxDQUFDbUIsYUFBTixDQUFvQiwwQkFBcEIsQ0FBZDtBQUNBVCxNQUFBQSxRQUFRLEdBQUdWLEtBQUssQ0FBQ21CLGFBQU4sQ0FBb0IsK0JBQXBCLENBQVg7QUFDQVIsTUFBQUEsZ0JBQWdCLEdBQUdYLEtBQUssQ0FBQ21CLGFBQU4sQ0FBb0IsaUNBQXBCLENBQW5CO0FBQ0FQLE1BQUFBLGdCQUFnQixHQUFHWixLQUFLLENBQUNtQixhQUFOLENBQW9CLGlDQUFwQixDQUFuQixDQXJCYyxDQXVCZDs7QUFDQUwsTUFBQUEsaUJBQWlCO0FBQ2pCVyxNQUFBQSxhQUFhO0FBQ2JtQyxNQUFBQSxjQUFjO0FBQ2pCO0FBNUJFLEdBQVA7QUE4QkgsQ0FqUW9DLEVBQXJDLEMsQ0FtUUE7OztBQUNBSSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNsRSxFQUFBQSw4QkFBOEIsQ0FBQzhELElBQS9CO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL21vZGFscy90d28tZmFjdG9yLWF1dGhlbnRpY2F0aW9uLmpzPzcyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVE1vZGFsVHdvRmFjdG9yQXV0aGVudGljYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXNcbiAgICB2YXIgbW9kYWw7XG4gICAgdmFyIG1vZGFsT2JqZWN0O1xuXG4gICAgdmFyIG9wdGlvbnNXcmFwcGVyO1xuICAgIHZhciBvcHRpb25zU2VsZWN0QnV0dG9uO1xuXG4gICAgdmFyIHNtc1dyYXBwZXI7XG4gICAgdmFyIHNtc0Zvcm07XG4gICAgdmFyIHNtc1N1Ym1pdEJ1dHRvbjtcbiAgICB2YXIgc21zQ2FuY2VsQnV0dG9uO1xuICAgIHZhciBzbXNWYWxpZGF0b3I7XG5cbiAgICB2YXIgYXBwc1dyYXBwZXI7XG4gICAgdmFyIGFwcHNGb3JtO1xuICAgIHZhciBhcHBzU3VibWl0QnV0dG9uO1xuICAgIHZhciBhcHBzQ2FuY2VsQnV0dG9uO1xuICAgIHZhciBhcHBzVmFsaWRhdG9yO1xuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgaGFuZGxlT3B0aW9uc0Zvcm0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gSGFuZGxlIG9wdGlvbnMgc2VsZWN0aW9uXG4gICAgICAgIG9wdGlvbnNTZWxlY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYXV0aF9vcHRpb25cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgICAgICBvcHRpb25zV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PSAnc21zJykge1xuICAgICAgICAgICAgICAgIHNtc1dyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcHNXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblx0dmFyIHNob3dPcHRpb25zRm9ybSA9IGZ1bmN0aW9uKCkge1xuXHRcdG9wdGlvbnNXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuXHRcdHNtc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cdFx0YXBwc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZVNNU0Zvcm0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cblx0XHRzbXNWYWxpZGF0b3IgPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcblx0XHRcdHNtc0Zvcm0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkczoge1xuXHRcdFx0XHRcdCdtb2JpbGUnOiB7XG5cdFx0XHRcdFx0XHR2YWxpZGF0b3JzOiB7XG5cdFx0XHRcdFx0XHRcdG5vdEVtcHR5OiB7XG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ01vYmlsZSBubyBpcyByZXF1aXJlZCdcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0cGx1Z2luczoge1xuXHRcdFx0XHRcdHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcblx0XHRcdFx0XHRib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xuXHRcdFx0XHRcdFx0cm93U2VsZWN0b3I6ICcuZnYtcm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVWYWxpZENsYXNzOiAnJ1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXG4gICAgICAgIC8vIEhhbmRsZSBhcHBzIHN1Ym1pdGlvblxuICAgICAgICBzbXNTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQvLyBWYWxpZGF0ZSBmb3JtIGJlZm9yZSBzdWJtaXRcblx0XHRcdGlmIChzbXNWYWxpZGF0b3IpIHtcblx0XHRcdFx0c21zVmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3ZhbGlkYXRlZCEnKTtcblxuXHRcdFx0XHRcdGlmIChzdGF0dXMgPT0gJ1ZhbGlkJykge1xuXHRcdFx0XHRcdFx0Ly8gU2hvdyBsb2FkaW5nIGluZGljYXRpb25cblx0XHRcdFx0XHRcdHNtc1N1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJywgJ29uJyk7XG5cblx0XHRcdFx0XHRcdC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrIFxuXHRcdFx0XHRcdFx0c21zU3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcdFx0XHRcdFx0XHRcblxuXHRcdFx0XHRcdFx0Ly8gU2ltdWxhdGUgYWpheCBwcm9jZXNzXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQvLyBSZW1vdmUgbG9hZGluZyBpbmRpY2F0aW9uXG5cdFx0XHRcdFx0XHRcdHNtc1N1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gRW5hYmxlIGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRzbXNTdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8vIFNob3cgc3VjY2VzcyBtZXNzYWdlLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cblx0XHRcdFx0XHRcdFx0U3dhbC5maXJlKHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBcIk1vYmlsZSBudW1iZXIgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCFcIixcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcInN1Y2Nlc3NcIixcblx0XHRcdFx0XHRcdFx0XHRidXR0b25zU3R5bGluZzogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcblx0XHRcdFx0XHRcdFx0XHRjdXN0b21DbGFzczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bW9kYWxPYmplY3QuaGlkZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0c2hvd09wdGlvbnNGb3JtKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHQvL3Ntc0Zvcm0uc3VibWl0KCk7IC8vIFN1Ym1pdCBmb3JtXG5cdFx0XHRcdFx0XHR9LCAyMDAwKTsgICBcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gU2hvdyBlcnJvciBtZXNzYWdlLlxuXHRcdFx0XHRcdFx0U3dhbC5maXJlKHtcblx0XHRcdFx0XHRcdFx0dGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXG5cdFx0XHRcdFx0XHRcdGljb246IFwiZXJyb3JcIixcblx0XHRcdFx0XHRcdFx0YnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuXHRcdFx0XHRcdFx0XHRjdXN0b21DbGFzczoge1xuXHRcdFx0XHRcdFx0XHRcdGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSGFuZGxlIHNtcyBjYW5jZWxhdGlvblxuICAgICAgICBzbXNDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYXV0aF9vcHRpb25cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgICAgICBvcHRpb25zV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIHNtc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVBcHBzRm9ybSA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vIEluaXQgZm9ybSB2YWxpZGF0aW9uIHJ1bGVzLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBGb3JtVmFsaWRhdGlvbiBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOmh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vXG5cdFx0YXBwc1ZhbGlkYXRvciA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxuXHRcdFx0YXBwc0Zvcm0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkczoge1xuXHRcdFx0XHRcdCdjb2RlJzoge1xuXHRcdFx0XHRcdFx0dmFsaWRhdG9yczoge1xuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdDb2RlIGlzIHJlcXVpcmVkJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRwbHVnaW5zOiB7XG5cdFx0XHRcdFx0dHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxuXHRcdFx0XHRcdGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XG5cdFx0XHRcdFx0XHRyb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cbiAgICAgICAgLy8gSGFuZGxlIGFwcHMgc3VibWl0aW9uXG4gICAgICAgIGFwcHNTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQvLyBWYWxpZGF0ZSBmb3JtIGJlZm9yZSBzdWJtaXRcblx0XHRcdGlmIChhcHBzVmFsaWRhdG9yKSB7XG5cdFx0XHRcdGFwcHNWYWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygndmFsaWRhdGVkIScpO1xuXG5cdFx0XHRcdFx0aWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XG5cdFx0XHRcdFx0XHRhcHBzU3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcblxuXHRcdFx0XHRcdFx0Ly8gRGlzYWJsZSBidXR0b24gdG8gYXZvaWQgbXVsdGlwbGUgY2xpY2sgXG5cdFx0XHRcdFx0XHRhcHBzU3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0YXBwc1N1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gRW5hYmxlIGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRhcHBzU3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvLyBTaG93IHN1Y2Nlc3MgbWVzc2FnZS5cblx0XHRcdFx0XHRcdFx0U3dhbC5maXJlKHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBcIkNvZGUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCFcIixcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcInN1Y2Nlc3NcIixcblx0XHRcdFx0XHRcdFx0XHRidXR0b25zU3R5bGluZzogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcblx0XHRcdFx0XHRcdFx0XHRjdXN0b21DbGFzczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bW9kYWxPYmplY3QuaGlkZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0c2hvd09wdGlvbnNGb3JtKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHQvL2FwcHNGb3JtLnN1Ym1pdCgpOyAvLyBTdWJtaXQgZm9ybVxuXHRcdFx0XHRcdFx0fSwgMjAwMCk7ICAgXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIFNob3cgZXJyb3IgbWVzc2FnZS5cblx0XHRcdFx0XHRcdFN3YWwuZmlyZSh7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IFwiU29ycnksIGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNvbWUgZXJyb3JzIGRldGVjdGVkLCBwbGVhc2UgdHJ5IGFnYWluLlwiLFxuXHRcdFx0XHRcdFx0XHRpY29uOiBcImVycm9yXCIsXG5cdFx0XHRcdFx0XHRcdGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcblx0XHRcdFx0XHRcdFx0Y3VzdG9tQ2xhc3M6IHtcblx0XHRcdFx0XHRcdFx0XHRjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhhbmRsZSBhcHBzIGNhbmNlbGF0aW9uXG4gICAgICAgIGFwcHNDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYXV0aF9vcHRpb25cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgICAgICBvcHRpb25zV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIGFwcHNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIEVsZW1lbnRzXG4gICAgICAgICAgICBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9tb2RhbF90d29fZmFjdG9yX2F1dGhlbnRpY2F0aW9uJyk7XG5cblx0XHRcdGlmICghbW9kYWwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG4gICAgICAgICAgICBtb2RhbE9iamVjdCA9IG5ldyBib290c3RyYXAuTW9kYWwobW9kYWwpO1xuXG4gICAgICAgICAgICBvcHRpb25zV3JhcHBlciA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJvcHRpb25zXCJdJyk7XG4gICAgICAgICAgICBvcHRpb25zU2VsZWN0QnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cIm9wdGlvbnMtc2VsZWN0XCJdJyk7XG5cbiAgICAgICAgICAgIHNtc1dyYXBwZXIgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwic21zXCJdJyk7XG4gICAgICAgICAgICBzbXNGb3JtID0gbW9kYWwucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cInNtcy1mb3JtXCJdJyk7XG4gICAgICAgICAgICBzbXNTdWJtaXRCdXR0b24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwic21zLXN1Ym1pdFwiXScpO1xuICAgICAgICAgICAgc21zQ2FuY2VsQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cInNtcy1jYW5jZWxcIl0nKTtcblxuICAgICAgICAgICAgYXBwc1dyYXBwZXIgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwiYXBwc1wiXScpO1xuICAgICAgICAgICAgYXBwc0Zvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwiYXBwcy1mb3JtXCJdJyk7XG4gICAgICAgICAgICBhcHBzU3VibWl0QnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cImFwcHMtc3VibWl0XCJdJyk7XG4gICAgICAgICAgICBhcHBzQ2FuY2VsQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cImFwcHMtY2FuY2VsXCJdJyk7XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBmb3Jtc1xuICAgICAgICAgICAgaGFuZGxlT3B0aW9uc0Zvcm0oKTtcbiAgICAgICAgICAgIGhhbmRsZVNNU0Zvcm0oKTtcbiAgICAgICAgICAgIGhhbmRsZUFwcHNGb3JtKCk7XG4gICAgICAgIH1cbiAgICB9XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtUTW9kYWxUd29GYWN0b3JBdXRoZW50aWNhdGlvbi5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVE1vZGFsVHdvRmFjdG9yQXV0aGVudGljYXRpb24iLCJtb2RhbCIsIm1vZGFsT2JqZWN0Iiwib3B0aW9uc1dyYXBwZXIiLCJvcHRpb25zU2VsZWN0QnV0dG9uIiwic21zV3JhcHBlciIsInNtc0Zvcm0iLCJzbXNTdWJtaXRCdXR0b24iLCJzbXNDYW5jZWxCdXR0b24iLCJzbXNWYWxpZGF0b3IiLCJhcHBzV3JhcHBlciIsImFwcHNGb3JtIiwiYXBwc1N1Ym1pdEJ1dHRvbiIsImFwcHNDYW5jZWxCdXR0b24iLCJhcHBzVmFsaWRhdG9yIiwiaGFuZGxlT3B0aW9uc0Zvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib3B0aW9uIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInZhbHVlIiwicmVtb3ZlIiwic2hvd09wdGlvbnNGb3JtIiwiaGFuZGxlU01TRm9ybSIsIkZvcm1WYWxpZGF0aW9uIiwiZm9ybVZhbGlkYXRpb24iLCJmaWVsZHMiLCJ2YWxpZGF0b3JzIiwibm90RW1wdHkiLCJtZXNzYWdlIiwicGx1Z2lucyIsInRyaWdnZXIiLCJUcmlnZ2VyIiwiYm9vdHN0cmFwIiwiQm9vdHN0cmFwNSIsInJvd1NlbGVjdG9yIiwiZWxlSW52YWxpZENsYXNzIiwiZWxlVmFsaWRDbGFzcyIsInZhbGlkYXRlIiwidGhlbiIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiaGlkZSIsImhhbmRsZUFwcHNGb3JtIiwiaW5pdCIsImRvY3VtZW50IiwiTW9kYWwiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/modals/two-factor-authentication.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/modals/two-factor-authentication.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=two-factor-authentication.js.map