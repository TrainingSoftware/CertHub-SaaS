/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/account/settings/signin-methods.js":
/*!********************************************************************!*\
  !*** ./resources/src/js/custom/account/settings/signin-methods.js ***!
  \********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountSettingsSigninMethods = function () {\n  // Private functions\n  var initSettings = function initSettings() {\n    // UI elements\n    var signInMainEl = document.getElementById('kt_signin_email');\n    var signInEditEl = document.getElementById('kt_signin_email_edit');\n    var passwordMainEl = document.getElementById('kt_signin_password');\n    var passwordEditEl = document.getElementById('kt_signin_password_edit'); // button elements\n\n    var signInChangeEmail = document.getElementById('kt_signin_email_button');\n    var signInCancelEmail = document.getElementById('kt_signin_cancel');\n    var passwordChange = document.getElementById('kt_signin_password_button');\n    var passwordCancel = document.getElementById('kt_password_cancel'); // toggle UI\n\n    signInChangeEmail.querySelector('button').addEventListener('click', function () {\n      toggleChangeEmail();\n    });\n    signInCancelEmail.addEventListener('click', function () {\n      toggleChangeEmail();\n    });\n    passwordChange.querySelector('button').addEventListener('click', function () {\n      toggleChangePassword();\n    });\n    passwordCancel.addEventListener('click', function () {\n      toggleChangePassword();\n    });\n\n    var toggleChangeEmail = function toggleChangeEmail() {\n      signInMainEl.classList.toggle('d-none');\n      signInChangeEmail.classList.toggle('d-none');\n      signInEditEl.classList.toggle('d-none');\n    };\n\n    var toggleChangePassword = function toggleChangePassword() {\n      passwordMainEl.classList.toggle('d-none');\n      passwordChange.classList.toggle('d-none');\n      passwordEditEl.classList.toggle('d-none');\n    };\n  };\n\n  var handleChangeEmail = function handleChangeEmail(e) {\n    var validation; // form elements\n\n    var signInForm = document.getElementById('kt_signin_change_email');\n    validation = FormValidation.formValidation(signInForm, {\n      fields: {\n        emailaddress: {\n          validators: {\n            notEmpty: {\n              message: 'Email is required'\n            },\n            emailAddress: {\n              message: 'The value is not a valid email address'\n            }\n          }\n        },\n        confirmemailpassword: {\n          validators: {\n            notEmpty: {\n              message: 'Password is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        //Learn more: https://formvalidation.io/guide/plugins\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row'\n        })\n      }\n    });\n    signInForm.querySelector('#kt_signin_submit').addEventListener('click', function (e) {\n      e.preventDefault();\n      console.log('click');\n      validation.validate().then(function (status) {\n        if (status == 'Valid') {\n          swal.fire({\n            text: \"Sent password reset. Please check your email\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn font-weight-bold btn-light-primary\"\n            }\n          });\n        } else {\n          swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn font-weight-bold btn-light-primary\"\n            }\n          });\n        }\n      });\n    });\n  };\n\n  var handleChangePassword = function handleChangePassword(e) {\n    var validation; // form elements\n\n    var passwordForm = document.getElementById('kt_signin_change_password');\n    validation = FormValidation.formValidation(passwordForm, {\n      fields: {\n        currentpassword: {\n          validators: {\n            notEmpty: {\n              message: 'Current Password is required'\n            }\n          }\n        },\n        newpassword: {\n          validators: {\n            notEmpty: {\n              message: 'New Password is required'\n            }\n          }\n        },\n        confirmpassword: {\n          validators: {\n            notEmpty: {\n              message: 'Confirm Password is required'\n            },\n            identical: {\n              compare: function compare() {\n                return passwordForm.querySelector('[name=\"newpassword\"]').value;\n              },\n              message: 'The password and its confirm are not the same'\n            }\n          }\n        }\n      },\n      plugins: {\n        //Learn more: https://formvalidation.io/guide/plugins\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row'\n        })\n      }\n    });\n    passwordForm.querySelector('#kt_password_submit').addEventListener('click', function (e) {\n      e.preventDefault();\n      console.log('click');\n      validation.validate().then(function (status) {\n        if (status == 'Valid') {\n          swal.fire({\n            text: \"Sent password reset. Please check your email\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn font-weight-bold btn-light-primary\"\n            }\n          });\n        } else {\n          swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn font-weight-bold btn-light-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initSettings();\n      handleChangeEmail();\n      handleChangePassword();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountSettingsSigninMethods.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hY2NvdW50L3NldHRpbmdzL3NpZ25pbi1tZXRob2RzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLDhCQUE4QixHQUFHLFlBQVk7QUFDN0M7QUFDQSxNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFZO0FBRTNCO0FBQ0EsUUFBSUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQW5CO0FBQ0EsUUFBSUMsWUFBWSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0Isc0JBQXhCLENBQW5CO0FBQ0EsUUFBSUUsY0FBYyxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQXJCO0FBQ0EsUUFBSUcsY0FBYyxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IseUJBQXhCLENBQXJCLENBTjJCLENBUTNCOztBQUNBLFFBQUlJLGlCQUFpQixHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isd0JBQXhCLENBQXhCO0FBQ0EsUUFBSUssaUJBQWlCLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBeEI7QUFDQSxRQUFJTSxjQUFjLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QiwyQkFBeEIsQ0FBckI7QUFDQSxRQUFJTyxjQUFjLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FBckIsQ0FaMkIsQ0FjM0I7O0FBQ0FJLElBQUFBLGlCQUFpQixDQUFDSSxhQUFsQixDQUFnQyxRQUFoQyxFQUEwQ0MsZ0JBQTFDLENBQTJELE9BQTNELEVBQW9FLFlBQVk7QUFDNUVDLE1BQUFBLGlCQUFpQjtBQUNwQixLQUZEO0FBSUFMLElBQUFBLGlCQUFpQixDQUFDSSxnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNEMsWUFBWTtBQUNwREMsTUFBQUEsaUJBQWlCO0FBQ3BCLEtBRkQ7QUFJQUosSUFBQUEsY0FBYyxDQUFDRSxhQUFmLENBQTZCLFFB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LGFBQWEsRUFBRTtBQUROO0FBTFAsV0FBVjtBQVNIO0FBQ0osT0F0QkQ7QUF1QkgsS0EzQkQ7QUE0QkgsR0E5RUQsQ0FuSDZDLENBbU03Qzs7O0FBQ0EsU0FBTztBQUNIUyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZDFELE1BQUFBLFlBQVk7QUFDWmlCLE1BQUFBLGlCQUFpQjtBQUNqQmlDLE1BQUFBLG9CQUFvQjtBQUN2QjtBQUxFLEdBQVA7QUFPSCxDQTNNb0MsRUFBckMsQyxDQTZNQTs7O0FBQ0FTLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQzdELEVBQUFBLDhCQUE4QixDQUFDMkQsSUFBL0I7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vYWNjb3VudC9zZXR0aW5ncy9zaWduaW4tbWV0aG9kcy5qcz9hODljIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RBY2NvdW50U2V0dGluZ3NTaWduaW5NZXRob2RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBpbml0U2V0dGluZ3MgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIFVJIGVsZW1lbnRzXHJcbiAgICAgICAgdmFyIHNpZ25Jbk1haW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9zaWduaW5fZW1haWwnKTtcclxuICAgICAgICB2YXIgc2lnbkluRWRpdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3NpZ25pbl9lbWFpbF9lZGl0Jyk7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkTWFpbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3NpZ25pbl9wYXNzd29yZCcpO1xyXG4gICAgICAgIHZhciBwYXNzd29yZEVkaXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9zaWduaW5fcGFzc3dvcmRfZWRpdCcpO1xyXG5cclxuICAgICAgICAvLyBidXR0b24gZWxlbWVudHNcclxuICAgICAgICB2YXIgc2lnbkluQ2hhbmdlRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3Rfc2lnbmluX2VtYWlsX2J1dHRvbicpO1xyXG4gICAgICAgIHZhciBzaWduSW5DYW5jZWxFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9zaWduaW5fY2FuY2VsJyk7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkQ2hhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3NpZ25pbl9wYXNzd29yZF9idXR0b24nKTtcclxuICAgICAgICB2YXIgcGFzc3dvcmRDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfcGFzc3dvcmRfY2FuY2VsJyk7XHJcblxyXG4gICAgICAgIC8vIHRvZ2dsZSBVSVxyXG4gICAgICAgIHNpZ25JbkNoYW5nZUVtYWlsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVDaGFuZ2VFbWFpbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzaWduSW5DYW5jZWxFbWFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdG9nZ2xlQ2hhbmdlRW1haWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGFzc3dvcmRDaGFuZ2UucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZUNoYW5nZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBhc3N3b3JkQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVDaGFuZ2VQYXNzd29yZCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgdG9nZ2xlQ2hhbmdlRW1haWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNpZ25Jbk1haW5FbC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgc2lnbkluQ2hhbmdlRW1haWwuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIHNpZ25JbkVkaXRFbC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0b2dnbGVDaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRNYWluRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkQ2hhbmdlLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICBwYXNzd29yZEVkaXRFbC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhhbmRsZUNoYW5nZUVtYWlsID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdmFsaWRhdGlvbjtcclxuXHJcbiAgICAgICAgLy8gZm9ybSBlbGVtZW50c1xyXG4gICAgICAgIHZhciBzaWduSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3NpZ25pbl9jaGFuZ2VfZW1haWwnKTtcclxuXHJcbiAgICAgICAgdmFsaWRhdGlvbiA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBzaWduSW5Gb3JtLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbGFkZHJlc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRW1haWwgaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSB2YWx1ZSBpcyBub3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybWVtYWlscGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHsgLy9MZWFybiBtb3JlOiBodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL2d1aWRlL3BsdWdpbnNcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0b3I6ICcuZnYtcm93J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzaWduSW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoJyNrdF9zaWduaW5fc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTZW50IHBhc3N3b3JkIHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZm9udC13ZWlnaHQtYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZm9udC13ZWlnaHQtYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhhbmRsZUNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdmFsaWRhdGlvbjtcclxuXHJcbiAgICAgICAgLy8gZm9ybSBlbGVtZW50c1xyXG4gICAgICAgIHZhciBwYXNzd29yZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3Rfc2lnbmluX2NoYW5nZV9wYXNzd29yZCcpO1xyXG5cclxuICAgICAgICB2YWxpZGF0aW9uID0gRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIHBhc3N3b3JkRm9ybSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudHBhc3N3b3JkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0N1cnJlbnQgUGFzc3dvcmQgaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXdwYXNzd29yZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdOZXcgUGFzc3dvcmQgaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtcGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ29uZmlybSBQYXNzd29yZCBpcyByZXF1aXJlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGljYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhc3N3b3JkRm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIm5ld3Bhc3N3b3JkXCJdJykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybSBhcmUgbm90IHRoZSBzYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgcGx1Z2luczogeyAvL0xlYXJuIG1vcmU6IGh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vZ3VpZGUvcGx1Z2luc1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcclxuICAgICAgICAgICAgICAgICAgICBib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHBhc3N3b3JkRm9ybS5xdWVyeVNlbGVjdG9yKCcja3RfcGFzc3dvcmRfc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTZW50IHBhc3N3b3JkIHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZm9udC13ZWlnaHQtYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZm9udC13ZWlnaHQtYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbml0U2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlRW1haWwoKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlUGFzc3dvcmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEFjY291bnRTZXR0aW5nc1NpZ25pbk1ldGhvZHMuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUQWNjb3VudFNldHRpbmdzU2lnbmluTWV0aG9kcyIsImluaXRTZXR0aW5ncyIsInNpZ25Jbk1haW5FbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzaWduSW5FZGl0RWwiLCJwYXNzd29yZE1haW5FbCIsInBhc3N3b3JkRWRpdEVsIiwic2lnbkluQ2hhbmdlRW1haWwiLCJzaWduSW5DYW5jZWxFbWFpbCIsInBhc3N3b3JkQ2hhbmdlIiwicGFzc3dvcmRDYW5jZWwiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZUNoYW5nZUVtYWlsIiwidG9nZ2xlQ2hhbmdlUGFzc3dvcmQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoYW5kbGVDaGFuZ2VFbWFpbCIsImUiLCJ2YWxpZGF0aW9uIiwic2lnbkluRm9ybSIsIkZvcm1WYWxpZGF0aW9uIiwiZm9ybVZhbGlkYXRpb24iLCJmaWVsZHMiLCJlbWFpbGFkZHJlc3MiLCJ2YWxpZGF0b3JzIiwibm90RW1wdHkiLCJtZXNzYWdlIiwiZW1haWxBZGRyZXNzIiwiY29uZmlybWVtYWlscGFzc3dvcmQiLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJib290c3RyYXAiLCJCb290c3RyYXA1Iiwicm93U2VsZWN0b3IiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZSIsInRoZW4iLCJzdGF0dXMiLCJzd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImhhbmRsZUNoYW5nZVBhc3N3b3JkIiwicGFzc3dvcmRGb3JtIiwiY3VycmVudHBhc3N3b3JkIiwibmV3cGFzc3dvcmQiLCJjb25maXJtcGFzc3dvcmQiLCJpZGVudGljYWwiLCJjb21wYXJlIiwidmFsdWUiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/account/settings/signin-methods.js\n");

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
/******/ })()
;