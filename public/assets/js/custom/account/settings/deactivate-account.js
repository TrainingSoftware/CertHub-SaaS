/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/account/settings/deactivate-account.js ***!
  \*************************************************************************************************/


// Class definition
var KTAccountSettingsDeactivateAccount = function () {
    // Private variables
    var form;
    var validation;
    var submitButton;

    // Private functions
    var initValidation = function () {
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validation = FormValidation.formValidation(
            form,
            {
                fields: {
                    deactivate: {
                        validators: {
                            notEmpty: {
                                message: 'Please check the box to deactivate your account'
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
                    })
                }
            }
        );
    }

    var handleForm = function () {
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            validation.validate().then(function (status) {
                if (status == 'Valid') {

                    swal.fire({
                        text: "Are you sure you would like to deactivate your account?",
                        icon: "warning",
                        buttonsStyling: false,
                        showDenyButton: true,
                        confirmButtonText: "Yes",
                        denyButtonText: 'No',
                        customClass: {
                            confirmButton: "btn btn-light-primary",
                            denyButton: "btn btn-danger"
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                text: 'Your account has been deactivated.', 
                                icon: 'success',
                                confirmButtonText: "Ok",
                                buttonsStyling: false,
                                customClass: {
                                    confirmButton: "btn btn-light-primary"
                                }
                            })
                        } else if (result.isDenied) {
                            Swal.fire({
                                text: 'Account not deactivated.', 
                                icon: 'info',
                                confirmButtonText: "Ok",
                                buttonsStyling: false,
                                customClass: {
                                    confirmButton: "btn btn-light-primary"
                                }
                            })
                        }
                    });

                } else {
                    swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-light-primary"
                        }
                    });
                }
            });
        });
    }

    // Public methods
    return {
        init: function () {
            form = document.querySelector('#kt_account_deactivate_form');
            submitButton = document.querySelector('#kt_account_deactivate_account_submit');

            initValidation();
            handleForm();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTAccountSettingsDeactivateAccount.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/account/settings/deactivate-account.js":
/*!************************************************************************!*\
  !*** ./resources/src/js/custom/account/settings/deactivate-account.js ***!
  \************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountSettingsDeactivateAccount = function () {\n  // Private variables\n  var form;\n  var validation;\n  var submitButton; // Private functions\n\n  var initValidation = function initValidation() {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validation = FormValidation.formValidation(form, {\n      fields: {\n        deactivate: {\n          validators: {\n            notEmpty: {\n              message: 'Please check the box to deactivate your account'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        submitButton: new FormValidation.plugins.SubmitButton(),\n        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n  };\n\n  var handleForm = function handleForm() {\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      validation.validate().then(function (status) {\n        if (status == 'Valid') {\n          swal.fire({\n            text: \"Are you sure you would like to deactivate your account?\",\n            icon: \"warning\",\n            buttonsStyling: false,\n            showDenyButton: true,\n            confirmButtonText: \"Yes\",\n            denyButtonText: 'No',\n            customClass: {\n              confirmButton: \"btn btn-light-primary\",\n              denyButton: \"btn btn-danger\"\n            }\n          }).then(function (result) {\n            if (result.isConfirmed) {\n              Swal.fire({\n                text: 'Your account has been deactivated.',\n                icon: 'success',\n                confirmButtonText: \"Ok\",\n                buttonsStyling: false,\n                customClass: {\n                  confirmButton: \"btn btn-light-primary\"\n                }\n              });\n            } else if (result.isDenied) {\n              Swal.fire({\n                text: 'Account not deactivated.',\n                icon: 'info',\n                confirmButtonText: \"Ok\",\n                buttonsStyling: false,\n                customClass: {\n                  confirmButton: \"btn btn-light-primary\"\n                }\n              });\n            }\n          });\n        } else {\n          swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-light-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      form = document.querySelector('#kt_account_deactivate_form');\n      submitButton = document.querySelector('#kt_account_deactivate_account_submit');\n      initValidation();\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountSettingsDeactivateAccount.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hY2NvdW50L3NldHRpbmdzL2RlYWN0aXZhdGUtYWNjb3VudC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxrQ0FBa0MsR0FBRyxZQUFZO0FBQ2pEO0FBQ0EsTUFBSUMsSUFBSjtBQUNBLE1BQUlDLFVBQUo7QUFDQSxNQUFJQyxZQUFKLENBSmlELENBTWpEOztBQUNBLE1BQUlDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBWTtBQUM3QjtBQUNBRixJQUFBQSxVQUFVLEdBQUdHLGNBQWMsQ0FBQ0MsY0FBZixDQUNUTCxJQURTLEVBRVQ7QUFDSU0sTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLFVBQVUsRUFBRTtBQUNSQyxVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURIO0FBREY7QUFESjtBQURSLE9BRFo7QUFVSUMsTUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFFBQUFBLE9BQU8sRUFBRSxJQUFJUixjQUFjLENBQUNPLE9BQWYsQ0FBdUJFLE9BQTNCLEVBREo7QUFFTFgsUUFBQUEsWUFBWSxFQUFFLElBQUlFLGNBQWMsQ0FBQ08sT0FBZixDQUF1QkcsWUFBM0IsRUFGVDtBQUdMO0FBQ0FDLFFBQUFBLFNBQVMsRUFBRSxJQUFJWCxjQUFjLENBQUNPLE9BQWYsQ0FBdUJLLFVBQTNCLENBQXNDO0FBQzdDQyxVQUFBQSxXQUFXLEVBQUUsU0FEZ0M7QUFFN0NDLFVBQUFBLGVBQWUsRUFBRSxFQUY0QjtBQUc3Q0MsVUFBQUEsYUFBYSxFQUFFO0FBSDhCLFNBQXRDO0FBSk47QUFWYixLQUZTLENBQWI7QUF3QkgsR0ExQkQ7O0FBNEJBLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFDekJsQixJQUFBQSxZQUFZLENBQUNtQixnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFVQyxDQUFWLEVBQWE7QUFDaERBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBdEIsTUFBQUEsVUFBVSxDQUFDdUIsUUFBWCxHQUFzQkMsSUFBdEIsQ0FBMkIsVUFBVUMsTUFBVixFQUFrQjtBQUN6QyxZQUFJQSxNQUFNLElBQUksT0FBZCxFQUF1QjtBQUVuQkMsVUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsWUFBQUEsSUFBSSxFQUFFLHlEQURBO0FBRU5DLFlBQUFBLElBQUksRUFBRSxTQUZBO0FBR05DLFlBQUFBLGNBQWMsRUFBRSxLQUhWO0FBSU5DLFlBQUFBLGNBQWMsRUFBRSxJQUpWO0FBS05DLFlBQUFBLGlCQUFpQixFQUFFLEtBTGI7QUFNTkMsWUFBQUEsY0FBYyxFQUFFLElBTlY7QUFPTkMsWUFBQUEsV0FBVyxFQUFFO0FBQ1RDLGNBQUFBLGFBQWEsRUFBRSx1QkFETjtBQUVUQyxjQUFBQSxVQUFVLEVBQUU7QUFGSDtBQVBQLFdBQVYsRUFXR1osSUFYSCxDQVdRLFVBQUNhLE1BQUQsRUFBWTtBQUNoQixnQkFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO0FBQ3BCQyxjQUFBQSxJQUFJLENBQUNaLElBQUwsQ0FBVTtBQUNOQyxnQkFBQUEsSUFBSSxFQUFFLG9DQURBO0FBRU5DLGdCQUFBQSxJQUFJLEVBQUUsU0FGQTtBQUdORyxnQkFBQUEsaUJBQWlCLEVBQUUsSUFIYjtBQUlORixnQkFBQUEsY0FBYyxFQUFFLEtBSlY7QUFLTkksZ0JBQUFBLFdBQVcsRUFBRTtBQUNUQyxrQkFBQUEsYUFBYSxFQUFFO0FBRE47QUFMUCxlQUFWO0FBU0gsYUFWRCxNQVVPLElBQUlFLE1BQU0sQ0FBQ0csUUFBWCxFQUFxQjtBQUN4QkQsY0FBQUEsSUFBSSxDQUFDWixJQUFMLENBQVU7QUFDTkMsZ0JBQUFBLElBQUksRUFBRSwwQkFEQTtBQUVOQyxnQkFBQUEsSUFBSSxFQUFFLE1BRkE7QUFHTkcsZ0JBQUFBLGlCQUFpQixFQUFFLElBSGI7QUFJTkYsZ0JBQUFBLGNBQWMsRUFBRSxLQUpWO0FBS05JLGdCQUFBQSxXQUFXLEVBQUU7QUFDVEMsa0JBQUFBLGFBQWEsRUFBRTtBQUROO0FBTFAsZUFBVjtBQVNIO0FBQ0osV0FqQ0Q7QUFtQ0gsU0FyQ0QsTUFxQ087QUFDSFQsVUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsWUFBQUEsSUFBSSxFQUFFLHFFQURBO0FBRU5DLFlBQUFBLElBQUksRUFBRSxPQUZBO0FBR05DLFlBQUFBLGNBQWMsRUFBRSxLQUhWO0FBSU5FLFlBQUFBLGlCQUFpQixFQUFFLGFBSmI7QUFLTkUsWUFBQUEsV0FBVyxFQUFFO0FBQ1RDLGNBQUFBLGFBQWEsRUFBRTtBQUROO0FBTFAsV0FBVjtBQVNIO0FBQ0osT0FqREQ7QUFrREgsS0FyREQ7QUFzREgsR0F2REQsQ0FuQ2lELENBNEZqRDs7O0FBQ0EsU0FBTztBQUNITSxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZDFDLE1BQUFBLElBQUksR0FBRzJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBUDtBQUNBMUMsTUFBQUEsWUFBWSxHQUFHeUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLHVDQUF2QixDQUFmO0FBRUF6QyxNQUFBQSxjQUFjO0FBQ2RpQixNQUFBQSxVQUFVO0FBQ2I7QUFQRSxHQUFQO0FBU0gsQ0F0R3dDLEVBQXpDLEMsQ0F3R0E7OztBQUNBeUIsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDL0MsRUFBQUEsa0NBQWtDLENBQUMyQyxJQUFuQztBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hY2NvdW50L3NldHRpbmdzL2RlYWN0aXZhdGUtYWNjb3VudC5qcz8zNTA0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RBY2NvdW50U2V0dGluZ3NEZWFjdGl2YXRlQWNjb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlc1xuICAgIHZhciBmb3JtO1xuICAgIHZhciB2YWxpZGF0aW9uO1xuICAgIHZhciBzdWJtaXRCdXR0b247XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBpbml0VmFsaWRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cbiAgICAgICAgdmFsaWRhdGlvbiA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxuICAgICAgICAgICAgZm9ybSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVhY3RpdmF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGJveCB0byBkZWFjdGl2YXRlIHlvdXIgYWNjb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b246IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlN1Ym1pdEJ1dHRvbigpLFxuICAgICAgICAgICAgICAgICAgICAvL2RlZmF1bHRTdWJtaXQ6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkRlZmF1bHRTdWJtaXQoKSwgLy8gVW5jb21tZW50IHRoaXMgbGluZSB0byBlbmFibGUgbm9ybWFsIGJ1dHRvbiBzdWJtaXQgYWZ0ZXIgZm9ybSB2YWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGRlYWN0aXZhdGUgeW91ciBhY2NvdW50P1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGVueUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVueUJ1dHRvblRleHQ6ICdObycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1saWdodC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVueUJ1dHRvbjogXCJidG4gYnRuLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdZb3VyIGFjY291bnQgaGFzIGJlZW4gZGVhY3RpdmF0ZWQuJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLWxpZ2h0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmlzRGVuaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FjY291bnQgbm90IGRlYWN0aXZhdGVkLicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1saWdodC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU29ycnksIGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNvbWUgZXJyb3JzIGRldGVjdGVkLCBwbGVhc2UgdHJ5IGFnYWluLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLWxpZ2h0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2FjY291bnRfZGVhY3RpdmF0ZV9mb3JtJyk7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfYWNjb3VudF9kZWFjdGl2YXRlX2FjY291bnRfc3VibWl0Jyk7XG5cbiAgICAgICAgICAgIGluaXRWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICBoYW5kbGVGb3JtKCk7XG4gICAgICAgIH1cbiAgICB9XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtUQWNjb3VudFNldHRpbmdzRGVhY3RpdmF0ZUFjY291bnQuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RBY2NvdW50U2V0dGluZ3NEZWFjdGl2YXRlQWNjb3VudCIsImZvcm0iLCJ2YWxpZGF0aW9uIiwic3VibWl0QnV0dG9uIiwiaW5pdFZhbGlkYXRpb24iLCJGb3JtVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0aW9uIiwiZmllbGRzIiwiZGVhY3RpdmF0ZSIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJTdWJtaXRCdXR0b24iLCJib290c3RyYXAiLCJCb290c3RyYXA1Iiwicm93U2VsZWN0b3IiLCJlbGVJbnZhbGlkQ2xhc3MiLCJlbGVWYWxpZENsYXNzIiwiaGFuZGxlRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZSIsInRoZW4iLCJzdGF0dXMiLCJzd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJzaG93RGVueUJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiZGVueUJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJkZW55QnV0dG9uIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJTd2FsIiwiaXNEZW5pZWQiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/account/settings/deactivate-account.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/account/settings/deactivate-account.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=deactivate-account.js.map