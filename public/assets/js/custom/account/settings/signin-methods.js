/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*********************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/account/settings/signin-methods.js ***!
  \*********************************************************************************************/


// Class definition
var KTAccountSettingsSigninMethods = function () {
    // Private functions
    var initSettings = function () {

        // UI elements
        var signInMainEl = document.getElementById('kt_signin_email');
        var signInEditEl = document.getElementById('kt_signin_email_edit');
        var passwordMainEl = document.getElementById('kt_signin_password');
        var passwordEditEl = document.getElementById('kt_signin_password_edit');

        // button elements
        var signInChangeEmail = document.getElementById('kt_signin_email_button');
        var signInCancelEmail = document.getElementById('kt_signin_cancel');
        var passwordChange = document.getElementById('kt_signin_password_button');
        var passwordCancel = document.getElementById('kt_password_cancel');

        // toggle UI
        signInChangeEmail.querySelector('button').addEventListener('click', function () {
            toggleChangeEmail();
        });

        signInCancelEmail.addEventListener('click', function () {
            toggleChangeEmail();
        });

        passwordChange.querySelector('button').addEventListener('click', function () {
            toggleChangePassword();
        });

        passwordCancel.addEventListener('click', function () {
            toggleChangePassword();
        });

        var toggleChangeEmail = function () {
            signInMainEl.classList.toggle('d-none');
            signInChangeEmail.classList.toggle('d-none');
            signInEditEl.classList.toggle('d-none');
        }

        var toggleChangePassword = function () {
            passwordMainEl.classList.toggle('d-none');
            passwordChange.classList.toggle('d-none');
            passwordEditEl.classList.toggle('d-none');
        }
    }

    var handleChangeEmail = function (e) {
        var validation;

        // form elements
        var signInForm = document.getElementById('kt_signin_change_email');

        validation = FormValidation.formValidation(
            signInForm,
            {
                fields: {
                    emailaddress: {
                        validators: {
                            notEmpty: {
                                message: 'Email is required'
                            },
                            emailAddress: {
                                message: 'The value is not a valid email address'
                            }
                        }
                    },

                    confirmemailpassword: {
                        validators: {
                            notEmpty: {
                                message: 'Password is required'
                            }
                        }
                    }
                },

                plugins: { //Learn more: https://formvalidation.io/guide/plugins
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row'
                    })
                }
            }
        );

        signInForm.querySelector('#kt_signin_submit').addEventListener('click', function (e) {
            e.preventDefault();
            console.log('click');

            validation.validate().then(function (status) {
                if (status == 'Valid') {
                    swal.fire({
                        text: "Sent password reset. Please check your email",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn font-weight-bold btn-light-primary"
                        }
                    });
                } else {
                    swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn font-weight-bold btn-light-primary"
                        }
                    });
                }
            });
        });
    }

    var handleChangePassword = function (e) {
        var validation;

        // form elements
        var passwordForm = document.getElementById('kt_signin_change_password');

        validation = FormValidation.formValidation(
            passwordForm,
            {
                fields: {
                    currentpassword: {
                        validators: {
                            notEmpty: {
                                message: 'Current Password is required'
                            }
                        }
                    },

                    newpassword: {
                        validators: {
                            notEmpty: {
                                message: 'New Password is required'
                            }
                        }
                    },

                    confirmpassword: {
                        validators: {
                            notEmpty: {
                                message: 'Confirm Password is required'
                            },
                            identical: {
                                compare: function() {
                                    return passwordForm.querySelector('[name="newpassword"]').value;
                                },
                                message: 'The password and its confirm are not the same'
                            }
                        }
                    },
                },

                plugins: { //Learn more: https://formvalidation.io/guide/plugins
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row'
                    })
                }
            }
        );

        passwordForm.querySelector('#kt_password_submit').addEventListener('click', function (e) {
            e.preventDefault();
            console.log('click');

            validation.validate().then(function (status) {
                if (status == 'Valid') {
                    swal.fire({
                        text: "Sent password reset. Please check your email",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn font-weight-bold btn-light-primary"
                        }
                    });
                } else {
                    swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn font-weight-bold btn-light-primary"
                        }
                    });
                }
            });
        });
    }

    // Public methods
    return {
        init: function () {
            initSettings();
            handleChangeEmail();
            handleChangePassword();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTAccountSettingsSigninMethods.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/account/settings/signin-methods.js":
/*!********************************************************************!*\
  !*** ./resources/src/js/custom/account/settings/signin-methods.js ***!
  \********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountSettingsSigninMethods = function () {\n  // Private functions\n  var initSettings = function initSettings() {\n    // UI elements\n    var signInMainEl = document.getElementById('kt_signin_email');\n    var signInEditEl = document.getElementById('kt_signin_email_edit');\n    var passwordMainEl = document.getElementById('kt_signin_password');\n    var passwordEditEl = document.getElementById('kt_signin_password_edit'); // button elements\n\n    var signInChangeEmail = document.getElementById('kt_signin_email_button');\n    var signInCancelEmail = document.getElementById('kt_signin_cancel');\n    var passwordChange = document.getElementById('kt_signin_password_button');\n    var passwordCancel = document.getElementById('kt_password_cancel'); // toggle UI\n\n    signInChangeEmail.querySelector('button').addEventListener('click', function () {\n      toggleChangeEmail();\n    });\n    signInCancelEmail.addEventListener('click', function () {\n      toggleChangeEmail();\n    });\n    passwordChange.querySelector('button').addEventListener('click', function () {\n      toggleChangePassword();\n    });\n    passwordCancel.addEventListener('click', function () {\n      toggleChangePassword();\n    });\n\n    var toggleChangeEmail = function toggleChangeEmail() {\n      signInMainEl.classList.toggle('d-none');\n      signInChangeEmail.classList.toggle('d-none');\n      signInEditEl.classList.toggle('d-none');\n    };\n\n    var toggleChangePassword = function toggleChangePassword() {\n      passwordMainEl.classList.toggle('d-none');\n      passwordChange.classList.toggle('d-none');\n      passwordEditEl.classList.toggle('d-none');\n    };\n  };\n\n  var handleChangeEmail = function handleChangeEmail(e) {\n    var validation; // form elements\n\n    var signInForm = document.getElementById('kt_signin_change_email');\n    validation = FormValidation.formValidation(signInForm, {\n      fields: {\n        emailaddress: {\n          validators: {\n            notEmpty: {\n              message: 'Email is required'\n            },\n            emailAddress: {\n              message: 'The value is not a valid email address'\n            }\n          }\n        },\n        confirmemailpassword: {\n          validators: {\n            notEmpty: {\n              message: 'Password is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        //Learn more: https://formvalidation.io/guide/plugins\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row'\n        })\n      }\n    });\n    signInForm.querySelector('#kt_signin_submit').addEventListener('click', function (e) {\n      e.preventDefault();\n      console.log('click');\n      validation.validate().then(function (status) {\n        if (status == 'Valid') {\n          swal.fire({\n            text: \"Sent password reset. Please check your email\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn font-weight-bold btn-light-primary\"\n            }\n          });\n        } else {\n          swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn font-weight-bold btn-light-primary\"\n            }\n          });\n        }\n      });\n    });\n  };\n\n  var handleChangePassword = function handleChangePassword(e) {\n    var validation; // form elements\n\n    var passwordForm = document.getElementById('kt_signin_change_password');\n    validation = FormValidation.formValidation(passwordForm, {\n      fields: {\n        currentpassword: {\n          validators: {\n            notEmpty: {\n              message: 'Current Password is required'\n            }\n          }\n        },\n        newpassword: {\n          validators: {\n            notEmpty: {\n              message: 'New Password is required'\n            }\n          }\n        },\n        confirmpassword: {\n          validators: {\n            notEmpty: {\n              message: 'Confirm Password is required'\n            },\n            identical: {\n              compare: function compare() {\n                return passwordForm.querySelector('[name=\"newpassword\"]').value;\n              },\n              message: 'The password and its confirm are not the same'\n            }\n          }\n        }\n      },\n      plugins: {\n        //Learn more: https://formvalidation.io/guide/plugins\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row'\n        })\n      }\n    });\n    passwordForm.querySelector('#kt_password_submit').addEventListener('click', function (e) {\n      e.preventDefault();\n      console.log('click');\n      validation.validate().then(function (status) {\n        if (status == 'Valid') {\n          swal.fire({\n            text: \"Sent password reset. Please check your email\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn font-weight-bold btn-light-primary\"\n            }\n          });\n        } else {\n          swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn font-weight-bold btn-light-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initSettings();\n      handleChangeEmail();\n      handleChangePassword();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountSettingsSigninMethods.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hY2NvdW50L3NldHRpbmdzL3NpZ25pbi1tZXRob2RzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLDhCQUE4QixHQUFHLFlBQVk7QUFDN0M7QUFDQSxNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFZO0FBRTNCO0FBQ0EsUUFBSUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQW5CO0FBQ0EsUUFBSUMsWUFBWSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0Isc0JBQXhCLENBQW5CO0FBQ0EsUUFBSUUsY0FBYyxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQXJCO0FBQ0EsUUFBSUcsY0FBYyxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IseUJBQXhCLENBQXJCLENBTjJCLENBUTNCOztBQUNBLFFBQUlJLGlCQUFpQixHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isd0JBQXhCLENBQXhCO0FBQ0EsUUFBSUssaUJBQWlCLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBeEI7QUFDQSxRQUFJTSxjQUFjLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QiwyQkFBeEIsQ0FBckI7QUFDQSxRQUFJTyxjQUFjLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FBckIsQ0FaMkIsQ0FjM0I7O0FBQ0FJLElBQUFBLGlCQUFpQixDQUFDSSxhQUFsQixDQUFnQyxRQUFoQyxFQUEwQ0MsZ0JBQTFDLENBQTJELE9BQTNELEVBQW9FLFlBQVk7QUFDNUVDLE1BQUFBLGlCQUFpQjtBQUNwQixLQUZEO0FBSUFMLElBQUFBLGlCQUFpQixDQUFDSSxnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNEMsWUFBWTtBQUNwREMsTUFBQUEsaUJBQWlCO0FBQ3BCLEtBRkQ7QUFJQUosSUFBQUEsY0FBYyxDQUFDRSxhQUFmLENBQTZCLFFB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LGFBQWEsRUFBRTtBQUROO0FBTFAsV0FBVjtBQVNIO0FBQ0osT0F0QkQ7QUF1QkgsS0EzQkQ7QUE0QkgsR0E5RUQsQ0FuSDZDLENBbU03Qzs7O0FBQ0EsU0FBTztBQUNIUyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZDFELE1BQUFBLFlBQVk7QUFDWmlCLE1BQUFBLGlCQUFpQjtBQUNqQmlDLE1BQUFBLG9CQUFvQjtBQUN2QjtBQUxFLEdBQVA7QUFPSCxDQTNNb0MsRUFBckMsQyxDQTZNQTs7O0FBQ0FTLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQzdELEVBQUFBLDhCQUE4QixDQUFDMkQsSUFBL0I7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vYWNjb3VudC9zZXR0aW5ncy9zaWduaW4tbWV0aG9kcy5qcz83NTMwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RBY2NvdW50U2V0dGluZ3NTaWduaW5NZXRob2RzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGluaXRTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBVSSBlbGVtZW50c1xuICAgICAgICB2YXIgc2lnbkluTWFpbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3NpZ25pbl9lbWFpbCcpO1xuICAgICAgICB2YXIgc2lnbkluRWRpdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3NpZ25pbl9lbWFpbF9lZGl0Jyk7XG4gICAgICAgIHZhciBwYXNzd29yZE1haW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9zaWduaW5fcGFzc3dvcmQnKTtcbiAgICAgICAgdmFyIHBhc3N3b3JkRWRpdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3NpZ25pbl9wYXNzd29yZF9lZGl0Jyk7XG5cbiAgICAgICAgLy8gYnV0dG9uIGVsZW1lbnRzXG4gICAgICAgIHZhciBzaWduSW5DaGFuZ2VFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9zaWduaW5fZW1haWxfYnV0dG9uJyk7XG4gICAgICAgIHZhciBzaWduSW5DYW5jZWxFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9zaWduaW5fY2FuY2VsJyk7XG4gICAgICAgIHZhciBwYXNzd29yZENoYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9zaWduaW5fcGFzc3dvcmRfYnV0dG9uJyk7XG4gICAgICAgIHZhciBwYXNzd29yZENhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9wYXNzd29yZF9jYW5jZWwnKTtcblxuICAgICAgICAvLyB0b2dnbGUgVUlcbiAgICAgICAgc2lnbkluQ2hhbmdlRW1haWwucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0b2dnbGVDaGFuZ2VFbWFpbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaWduSW5DYW5jZWxFbWFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRvZ2dsZUNoYW5nZUVtYWlsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBhc3N3b3JkQ2hhbmdlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdG9nZ2xlQ2hhbmdlUGFzc3dvcmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFzc3dvcmRDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0b2dnbGVDaGFuZ2VQYXNzd29yZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdG9nZ2xlQ2hhbmdlRW1haWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzaWduSW5NYWluRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG4gICAgICAgICAgICBzaWduSW5DaGFuZ2VFbWFpbC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIHNpZ25JbkVkaXRFbC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2dnbGVDaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHBhc3N3b3JkTWFpbkVsLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgcGFzc3dvcmRDaGFuZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG4gICAgICAgICAgICBwYXNzd29yZEVkaXRFbC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYW5kbGVDaGFuZ2VFbWFpbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB2YWxpZGF0aW9uO1xuXG4gICAgICAgIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgdmFyIHNpZ25JbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3Rfc2lnbmluX2NoYW5nZV9lbWFpbCcpO1xuXG4gICAgICAgIHZhbGlkYXRpb24gPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcbiAgICAgICAgICAgIHNpZ25JbkZvcm0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsYWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbWFpbCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHZhbHVlIGlzIG5vdCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1lbWFpbHBhc3N3b3JkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7IC8vTGVhcm4gbW9yZTogaHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9ndWlkZS9wbHVnaW5zXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdG9yOiAnLmZ2LXJvdydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgc2lnbkluRm9ybS5xdWVyeVNlbGVjdG9yKCcja3Rfc2lnbmluX3N1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNlbnQgcGFzc3dvcmQgcmVzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZvbnQtd2VpZ2h0LWJvbGQgYnRuLWxpZ2h0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmb250LXdlaWdodC1ib2xkIGJ0bi1saWdodC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVDaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB2YWxpZGF0aW9uO1xuXG4gICAgICAgIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgdmFyIHBhc3N3b3JkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9zaWduaW5fY2hhbmdlX3Bhc3N3b3JkJyk7XG5cbiAgICAgICAgdmFsaWRhdGlvbiA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxuICAgICAgICAgICAgcGFzc3dvcmRGb3JtLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50cGFzc3dvcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ3VycmVudCBQYXNzd29yZCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgbmV3cGFzc3dvcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTmV3IFBhc3N3b3JkIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBjb25maXJtcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ29uZmlybSBQYXNzd29yZCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aWNhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXNzd29yZEZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJuZXdwYXNzd29yZFwiXScpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybSBhcmUgbm90IHRoZSBzYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcGx1Z2luczogeyAvL0xlYXJuIG1vcmU6IGh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vZ3VpZGUvcGx1Z2luc1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXG4gICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHBhc3N3b3JkRm9ybS5xdWVyeVNlbGVjdG9yKCcja3RfcGFzc3dvcmRfc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG5cbiAgICAgICAgICAgIHZhbGlkYXRpb24udmFsaWRhdGUoKS50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU2VudCBwYXNzd29yZCByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZm9udC13ZWlnaHQtYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvcnJ5LCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzb21lIGVycm9ycyBkZXRlY3RlZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZvbnQtd2VpZ2h0LWJvbGQgYnRuLWxpZ2h0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbml0U2V0dGluZ3MoKTtcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZUVtYWlsKCk7XG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2VQYXNzd29yZCgpO1xuICAgICAgICB9XG4gICAgfVxufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEFjY291bnRTZXR0aW5nc1NpZ25pbk1ldGhvZHMuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RBY2NvdW50U2V0dGluZ3NTaWduaW5NZXRob2RzIiwiaW5pdFNldHRpbmdzIiwic2lnbkluTWFpbkVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNpZ25JbkVkaXRFbCIsInBhc3N3b3JkTWFpbkVsIiwicGFzc3dvcmRFZGl0RWwiLCJzaWduSW5DaGFuZ2VFbWFpbCIsInNpZ25JbkNhbmNlbEVtYWlsIiwicGFzc3dvcmRDaGFuZ2UiLCJwYXNzd29yZENhbmNlbCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlQ2hhbmdlRW1haWwiLCJ0b2dnbGVDaGFuZ2VQYXNzd29yZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhhbmRsZUNoYW5nZUVtYWlsIiwiZSIsInZhbGlkYXRpb24iLCJzaWduSW5Gb3JtIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbiIsImZpZWxkcyIsImVtYWlsYWRkcmVzcyIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJlbWFpbEFkZHJlc3MiLCJjb25maXJtZW1haWxwYXNzd29yZCIsInBsdWdpbnMiLCJ0cmlnZ2VyIiwiVHJpZ2dlciIsImJvb3RzdHJhcCIsIkJvb3RzdHJhcDUiLCJyb3dTZWxlY3RvciIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRlIiwidGhlbiIsInN0YXR1cyIsInN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiaGFuZGxlQ2hhbmdlUGFzc3dvcmQiLCJwYXNzd29yZEZvcm0iLCJjdXJyZW50cGFzc3dvcmQiLCJuZXdwYXNzd29yZCIsImNvbmZpcm1wYXNzd29yZCIsImlkZW50aWNhbCIsImNvbXBhcmUiLCJ2YWx1ZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/account/settings/signin-methods.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/account/settings/signin-methods.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=signin-methods.js.map