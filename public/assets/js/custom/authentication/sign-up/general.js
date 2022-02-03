/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!********************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/authentication/sign-up/general.js ***!
  \********************************************************************************************/


// Class definition
var KTSignupGeneral = function() {
    // Elements
    var form;
    var submitButton;
    var validator;
    var passwordMeter;

    // Handle form
    var handleForm  = function(e) {
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
			form,
			{
				fields: {
					'first-name': {
						validators: {
							notEmpty: {
								message: 'First Name is required'
							}
						}
                    },
                    'last-name': {
						validators: {
							notEmpty: {
								message: 'Last Name is required'
							}
						}
					},
					'email': {
                        validators: {
							notEmpty: {
								message: 'Email address is required'
							},
                            emailAddress: {
								message: 'The value is not a valid email address'
							}
						}
					},
                    'password': {
                        validators: {
                            notEmpty: {
                                message: 'The password is required'
                            },
                            callback: {
                                message: 'Please enter valid password',
                                callback: function(input) {
                                    if (input.value.length > 0) {
                                        return validatePassword();
                                    }
                                }
                            }
                        }
                    },
                    'confirm-password': {
                        validators: {
                            notEmpty: {
                                message: 'The password confirmation is required'
                            },
                            identical: {
                                compare: function() {
                                    return form.querySelector('[name="password"]').value;
                                },
                                message: 'The password and its confirm are not the same'
                            }
                        }
                    },
                    'toc': {
                        validators: {
                            notEmpty: {
                                message: 'You must accept the terms and conditions'
                            }
                        }
                    }
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger({
                        event: {
                            password: false
                        }  
                    }),
					bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
                    })
				}
			}
		);

        // Handle form submit
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            validator.revalidateField('password');

            validator.validate().then(function(status) {
		        if (status == 'Valid') {
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
                            text: "You have successfully reset your password!",
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        }).then(function (result) {
                            if (result.isConfirmed) { 
                                form.reset();  // reset form                    
                                passwordMeter.reset();  // reset password meter
                                //form.submit();
                            }
                        });
                    }, 1500);   						
                } else {
                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
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
        });

        // Handle password input
        form.querySelector('input[name="password"]').addEventListener('input', function() {
            if (this.value.length > 0) {
                validator.updateFieldStatus('password', 'NotValidated');
            }
        });
    }

    // Password input validation
    var validatePassword = function() {
        return  (passwordMeter.getScore() === 100);
    }

    // Public functions
    return {
        // Initialization
        init: function() {
            // Elements
            form = document.querySelector('#kt_sign_up_form');
            submitButton = document.querySelector('#kt_sign_up_submit');
            passwordMeter = KTPasswordMeter.getInstance(form.querySelector('[data-kt-password-meter="true"]'));

            handleForm ();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTSignupGeneral.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/authentication/sign-up/general.js":
/*!*******************************************************************!*\
  !*** ./resources/src/js/custom/authentication/sign-up/general.js ***!
  \*******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTSignupGeneral = function () {\n  // Elements\n  var form;\n  var submitButton;\n  var validator;\n  var passwordMeter; // Handle form\n\n  var handleForm = function handleForm(e) {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'first-name': {\n          validators: {\n            notEmpty: {\n              message: 'First Name is required'\n            }\n          }\n        },\n        'last-name': {\n          validators: {\n            notEmpty: {\n              message: 'Last Name is required'\n            }\n          }\n        },\n        'email': {\n          validators: {\n            notEmpty: {\n              message: 'Email address is required'\n            },\n            emailAddress: {\n              message: 'The value is not a valid email address'\n            }\n          }\n        },\n        'password': {\n          validators: {\n            notEmpty: {\n              message: 'The password is required'\n            },\n            callback: {\n              message: 'Please enter valid password',\n              callback: function callback(input) {\n                if (input.value.length > 0) {\n                  return validatePassword();\n                }\n              }\n            }\n          }\n        },\n        'confirm-password': {\n          validators: {\n            notEmpty: {\n              message: 'The password confirmation is required'\n            },\n            identical: {\n              compare: function compare() {\n                return form.querySelector('[name=\"password\"]').value;\n              },\n              message: 'The password and its confirm are not the same'\n            }\n          }\n        },\n        'toc': {\n          validators: {\n            notEmpty: {\n              message: 'You must accept the terms and conditions'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger({\n          event: {\n            password: false\n          }\n        }),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Handle form submit\n\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      validator.revalidateField('password');\n      validator.validate().then(function (status) {\n        if (status == 'Valid') {\n          // Show loading indication\n          submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n          submitButton.disabled = true; // Simulate ajax request\n\n          setTimeout(function () {\n            // Hide loading indication\n            submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n            submitButton.disabled = false; // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            Swal.fire({\n              text: \"You have successfully reset your password!\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            }).then(function (result) {\n              if (result.isConfirmed) {\n                form.reset(); // reset form                    \n\n                passwordMeter.reset(); // reset password meter\n                //form.submit();\n              }\n            });\n          }, 1500);\n        } else {\n          // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n          Swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    }); // Handle password input\n\n    form.querySelector('input[name=\"password\"]').addEventListener('input', function () {\n      if (this.value.length > 0) {\n        validator.updateFieldStatus('password', 'NotValidated');\n      }\n    });\n  }; // Password input validation\n\n\n  var validatePassword = function validatePassword() {\n    return passwordMeter.getScore() === 100;\n  }; // Public functions\n\n\n  return {\n    // Initialization\n    init: function init() {\n      // Elements\n      form = document.querySelector('#kt_sign_up_form');\n      submitButton = document.querySelector('#kt_sign_up_submit');\n      passwordMeter = KTPasswordMeter.getInstance(form.querySelector('[data-kt-password-meter=\"true\"]'));\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTSignupGeneral.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9zaWduLXVwL2dlbmVyYWwuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZUFBZSxHQUFHLFlBQVc7QUFDN0I7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsWUFBSjtBQUNBLE1BQUlDLFNBQUo7QUFDQSxNQUFJQyxhQUFKLENBTDZCLENBTzdCOztBQUNBLE1BQUlDLFVBQVUsR0FBSSxTQUFkQSxVQUFjLENBQVNDLENBQVQsRUFBWTtBQUMxQjtBQUNBSCxJQUFBQSxTQUFTLEdBQUdJLGNBQWMsQ0FBQ0MsY0FBZixDQUNqQlAsSUFEaUIsRUFFakI7QUFDQ1EsTUFBQUEsTUFBTSxFQUFFO0FBQ1Asc0JBQWM7QUFDYkMsVUFBQUEsVUFBVSxFQUFFO0FBQ1hDLFlBQUFBLFFBQVEsRUFBRTtBQUNUQyxjQUFBQSxPQUFPLEVBQUU7QUFEQTtBQURDO0FBREMsU0FEUDtBQVFRLHFCQUFhO0FBQzNCRixVQUFBQSxVQUFVLEVBQUU7QUFDWEMsWUFBQUEsUUFBUSxFQUFFO0FBQ1RDLGNBQUFBLE9BQU8sRUFBRTtBQURBO0FBREM7QUFEZSxTQVJyQjtBQWVQLGlCQUFTO0FBQ1VGLFVBQUFBLFVBQVUsRUFBRTtBQUM3QkMsWUFBQUEsUUFBUSxFQUFFO0FBQ1RDLGNBQUFBLE9BQU8sRUFBRTtBQURBLGFBRG1CO0FBSVJDLFlBQUFBLFlBQVksRUFBRTtBQUNsQ0QsY0FBQUEsT0FBTyxFQUFFO0FBRHlCO0FBSk47QUFEdEIsU0FmRjtBQXlCUSxvQkFBWTtBQUNSRixVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURILGFBREY7QUFJUkUsWUFBQUEsUUFBUSxFQUFFO0FBQ05GLGNBQUFBLE9BQU8sRUFBRSw2QkFESDtBQUVORSxjQUFBQSxRQUFRLEVBQUUsa0JBQVNDLEtBQVQsRUFBZ0I7QUFDdEIsb0JBQUlBLEtBQUssQ0FBQ0Ms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Q0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2F1dGhlbnRpY2F0aW9uL3NpZ24tdXAvZ2VuZXJhbC5qcz8yZTcxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RTaWdudXBHZW5lcmFsID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gRWxlbWVudHNcbiAgICB2YXIgZm9ybTtcbiAgICB2YXIgc3VibWl0QnV0dG9uO1xuICAgIHZhciB2YWxpZGF0b3I7XG4gICAgdmFyIHBhc3N3b3JkTWV0ZXI7XG5cbiAgICAvLyBIYW5kbGUgZm9ybVxuICAgIHZhciBoYW5kbGVGb3JtICA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cbiAgICAgICAgdmFsaWRhdG9yID0gRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXG5cdFx0XHRmb3JtLFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZHM6IHtcblx0XHRcdFx0XHQnZmlyc3QtbmFtZSc6IHtcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnRmlyc3QgTmFtZSBpcyByZXF1aXJlZCdcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnbGFzdC1uYW1lJzoge1xuXHRcdFx0XHRcdFx0dmFsaWRhdG9yczoge1xuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdMYXN0IE5hbWUgaXMgcmVxdWlyZWQnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdlbWFpbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnRW1haWwgYWRkcmVzcyBpcyByZXF1aXJlZCdcblx0XHRcdFx0XHRcdFx0fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3M6IHtcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnVGhlIHZhbHVlIGlzIG5vdCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuICAgICAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBwYXNzd29yZCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgdmFsaWQgcGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlUGFzc3dvcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbmZpcm0tcGFzc3dvcmQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBwYXNzd29yZCBjb25maXJtYXRpb24gaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGljYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInBhc3N3b3JkXCJdJykudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgcGFzc3dvcmQgYW5kIGl0cyBjb25maXJtIGFyZSBub3QgdGhlIHNhbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndG9jJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdZb3UgbXVzdCBhY2NlcHQgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRwbHVnaW5zOiB7XG5cdFx0XHRcdFx0dHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuXHRcdFx0XHRcdGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXG4gICAgICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pdFxuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YWxpZGF0b3IucmV2YWxpZGF0ZUZpZWxkKCdwYXNzd29yZCcpO1xuXG4gICAgICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKGZ1bmN0aW9uKHN0YXR1cykge1xuXHRcdCAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJywgJ29uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBidXR0b24gdG8gYXZvaWQgbXVsdGlwbGUgY2xpY2sgXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgYWpheCByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgbWVzc2FnZSBwb3B1cC4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHJlc2V0IHlvdXIgcGFzc3dvcmQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTsgIC8vIHJlc2V0IGZvcm0gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZE1ldGVyLnJlc2V0KCk7ICAvLyByZXNldCBwYXNzd29yZCBtZXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Zvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDE1MDApOyAgIFx0XHRcdFx0XHRcdFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZXJyb3IgcG9wdXAuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblx0XHQgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhhbmRsZSBwYXNzd29yZCBpbnB1dFxuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwYXNzd29yZFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnVwZGF0ZUZpZWxkU3RhdHVzKCdwYXNzd29yZCcsICdOb3RWYWxpZGF0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFzc3dvcmQgaW5wdXQgdmFsaWRhdGlvblxuICAgIHZhciB2YWxpZGF0ZVBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAgKHBhc3N3b3JkTWV0ZXIuZ2V0U2NvcmUoKSA9PT0gMTAwKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgZnVuY3Rpb25zXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6YXRpb25cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBFbGVtZW50c1xuICAgICAgICAgICAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9zaWduX3VwX2Zvcm0nKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9zaWduX3VwX3N1Ym1pdCcpO1xuICAgICAgICAgICAgcGFzc3dvcmRNZXRlciA9IEtUUGFzc3dvcmRNZXRlci5nZXRJbnN0YW5jZShmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXBhc3N3b3JkLW1ldGVyPVwidHJ1ZVwiXScpKTtcblxuICAgICAgICAgICAgaGFuZGxlRm9ybSAoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtUU2lnbnVwR2VuZXJhbC5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVFNpZ251cEdlbmVyYWwiLCJmb3JtIiwic3VibWl0QnV0dG9uIiwidmFsaWRhdG9yIiwicGFzc3dvcmRNZXRlciIsImhhbmRsZUZvcm0iLCJlIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbiIsImZpZWxkcyIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJlbWFpbEFkZHJlc3MiLCJjYWxsYmFjayIsImlucHV0IiwidmFsdWUiLCJsZW5ndGgiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiaWRlbnRpY2FsIiwiY29tcGFyZSIsInF1ZXJ5U2VsZWN0b3IiLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJldmVudCIsInBhc3N3b3JkIiwiYm9vdHN0cmFwIiwiQm9vdHN0cmFwNSIsInJvd1NlbGVjdG9yIiwiZWxlSW52YWxpZENsYXNzIiwiZWxlVmFsaWRDbGFzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInJldmFsaWRhdGVGaWVsZCIsInZhbGlkYXRlIiwidGhlbiIsInN0YXR1cyIsInNldEF0dHJpYnV0ZSIsImRpc2FibGVkIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJyZXNldCIsInVwZGF0ZUZpZWxkU3RhdHVzIiwiZ2V0U2NvcmUiLCJpbml0IiwiZG9jdW1lbnQiLCJLVFBhc3N3b3JkTWV0ZXIiLCJnZXRJbnN0YW5jZSIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/authentication/sign-up/general.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/authentication/sign-up/general.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=general.js.map