/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**********************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/account/settings/profile-details.js ***!
  \**********************************************************************************************/


// Class definition
var KTAccountSettingsProfileDetails = function () {
    // Private variables
    var form;
    var submitButton;
    var validation;

    // Private functions
    var initValidation = function () {
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validation = FormValidation.formValidation(
            form,
            {
                fields: {
                    fname: {
                        validators: {
                            notEmpty: {
                                message: 'First name is required'
                            }
                        }
                    },
                    lname: {
                        validators: {
                            notEmpty: {
                                message: 'Last name is required'
                            }
                        }
                    },
                    company: {
                        validators: {
                            notEmpty: {
                                message: 'Company name is required'
                            }
                        }
                    },
                    phone: {
                        validators: {
                            notEmpty: {
                                message: 'Contact phone number is required'
                            }
                        }
                    },
                    country: {
                        validators: {
                            notEmpty: {
                                message: 'Please select a country'
                            }
                        }
                    },
                    timezone: {
                        validators: {
                            notEmpty: {
                                message: 'Please select a timezone'
                            }
                        }
                    },
                    'communication[]': {
                        validators: {
                            notEmpty: {
                                message: 'Please select at least one communication method'
                            }
                        }
                    },
                    language: {
                        validators: {
                            notEmpty: {
                                message: 'Please select a language'
                            }
                        }
                    },
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

        // Select2 validation integration
        $(form.querySelector('[name="country"]')).on('change', function() {
            // Revalidate the color field when an option is chosen
            validation.revalidateField('country');
        });

        $(form.querySelector('[name="language"]')).on('change', function() {
            // Revalidate the color field when an option is chosen
            validation.revalidateField('language');
        });

        $(form.querySelector('[name="timezone"]')).on('change', function() {
            // Revalidate the color field when an option is chosen
            validation.revalidateField('timezone');
        });
    }

    var handleForm = function () {
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            validation.validate().then(function (status) {
                if (status == 'Valid') {

                    swal.fire({
                        text: "Thank you! You've updated your basic info",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-light-primary"
                        }
                    });

                } else {
                    swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-light-primary"
                        }
                    });
                }
            });
        });
    }

    // Public methods
    return {
        init: function () {
            form = document.getElementById('kt_account_profile_details_form');
            submitButton = form.querySelector('#kt_account_profile_details_submit');

            initValidation();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTAccountSettingsProfileDetails.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/account/settings/profile-details.js":
/*!*********************************************************************!*\
  !*** ./resources/src/js/custom/account/settings/profile-details.js ***!
  \*********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountSettingsProfileDetails = function () {\n  // Private variables\n  var form;\n  var submitButton;\n  var validation; // Private functions\n\n  var initValidation = function initValidation() {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validation = FormValidation.formValidation(form, {\n      fields: {\n        fname: {\n          validators: {\n            notEmpty: {\n              message: 'First name is required'\n            }\n          }\n        },\n        lname: {\n          validators: {\n            notEmpty: {\n              message: 'Last name is required'\n            }\n          }\n        },\n        company: {\n          validators: {\n            notEmpty: {\n              message: 'Company name is required'\n            }\n          }\n        },\n        phone: {\n          validators: {\n            notEmpty: {\n              message: 'Contact phone number is required'\n            }\n          }\n        },\n        country: {\n          validators: {\n            notEmpty: {\n              message: 'Please select a country'\n            }\n          }\n        },\n        timezone: {\n          validators: {\n            notEmpty: {\n              message: 'Please select a timezone'\n            }\n          }\n        },\n        'communication[]': {\n          validators: {\n            notEmpty: {\n              message: 'Please select at least one communication method'\n            }\n          }\n        },\n        language: {\n          validators: {\n            notEmpty: {\n              message: 'Please select a language'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        submitButton: new FormValidation.plugins.SubmitButton(),\n        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Select2 validation integration\n\n    $(form.querySelector('[name=\"country\"]')).on('change', function () {\n      // Revalidate the color field when an option is chosen\n      validation.revalidateField('country');\n    });\n    $(form.querySelector('[name=\"language\"]')).on('change', function () {\n      // Revalidate the color field when an option is chosen\n      validation.revalidateField('language');\n    });\n    $(form.querySelector('[name=\"timezone\"]')).on('change', function () {\n      // Revalidate the color field when an option is chosen\n      validation.revalidateField('timezone');\n    });\n  };\n\n  var handleForm = function handleForm() {\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      validation.validate().then(function (status) {\n        if (status == 'Valid') {\n          swal.fire({\n            text: \"Thank you! You've updated your basic info\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-light-primary\"\n            }\n          });\n        } else {\n          swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-light-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      form = document.getElementById('kt_account_profile_details_form');\n      submitButton = form.querySelector('#kt_account_profile_details_submit');\n      initValidation();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountSettingsProfileDetails.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hY2NvdW50L3NldHRpbmdzL3Byb2ZpbGUtZGV0YWlscy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSwrQkFBK0IsR0FBRyxZQUFZO0FBQzlDO0FBQ0EsTUFBSUMsSUFBSjtBQUNBLE1BQUlDLFlBQUo7QUFDQSxNQUFJQyxVQUFKLENBSjhDLENBTTlDOztBQUNBLE1BQUlDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBWTtBQUM3QjtBQUNBRCxJQUFBQSxVQUFVLEdBQUdFLGNBQWMsQ0FBQ0MsY0FBZixDQUNUTCxJQURTLEVBRVQ7QUFDSU0sTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURIO0FBREY7QUFEVCxTQURIO0FBUUpDLFFBQUFBLEtBQUssRUFBRTtBQUNISCxVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURIO0FBREY7QUFEVCxTQVJIO0FBZUpFLFFBQUFBLE9BQU8sRUFBRTtBQUNMSixVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURIO0FBREY7QUFEUCxTQWZMO0FBc0JKRyxRQUFBQSxLQUFLLEVBQUU7QUFDSEwsVUFBQUEsVUFBVSxFQUFFO0FBQ1JDLFlBQUFBLFFBQVEsRUFBRTtBQUNOQyxjQUFBQSxPQUFPLEVBQUU7QUFESDtBQURGO0FBRFQsU0F0Qkg7QUE2QkpJLFFBQUFBLE9BQU8sRUFBRTtBQUNMTixVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURIO0FBREY7QUFEUCxTQTdCTDtBQW9DSkssUUFBQUEsUUFBUSxFQUFFO0FBQ05QLFVBQUFB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NUJEO0FBNkJILEdBOUJELENBcEc4QyxDQW9JOUM7OztBQUNBLFNBQU87QUFDSEMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2Q3QyxNQUFBQSxJQUFJLEdBQUc4QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUNBQXhCLENBQVA7QUFDQTlDLE1BQUFBLFlBQVksR0FBR0QsSUFBSSxDQUFDMkIsYUFBTCxDQUFtQixvQ0FBbkIsQ0FBZjtBQUVBeEIsTUFBQUEsY0FBYztBQUNqQjtBQU5FLEdBQVA7QUFRSCxDQTdJcUMsRUFBdEMsQyxDQStJQTs7O0FBQ0E2QyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNsRCxFQUFBQSwrQkFBK0IsQ0FBQzhDLElBQWhDO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2FjY291bnQvc2V0dGluZ3MvcHJvZmlsZS1kZXRhaWxzLmpzPzI0NTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEFjY291bnRTZXR0aW5nc1Byb2ZpbGVEZXRhaWxzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzXG4gICAgdmFyIGZvcm07XG4gICAgdmFyIHN1Ym1pdEJ1dHRvbjtcbiAgICB2YXIgdmFsaWRhdGlvbjtcblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGluaXRWYWxpZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJbml0IGZvcm0gdmFsaWRhdGlvbiBydWxlcy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgRm9ybVZhbGlkYXRpb24gcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjpodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL1xuICAgICAgICB2YWxpZGF0aW9uID0gRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXG4gICAgICAgICAgICBmb3JtLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICBmbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdGaXJzdCBuYW1lIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTGFzdCBuYW1lIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDb21wYW55IG5hbWUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwaG9uZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDb250YWN0IHBob25lIG51bWJlciBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCBhIGNvdW50cnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aW1lem9uZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGEgdGltZXpvbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnY29tbXVuaWNhdGlvbltdJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSBjb21tdW5pY2F0aW9uIG1ldGhvZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgYSBsYW5ndWFnZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5TdWJtaXRCdXR0b24oKSxcbiAgICAgICAgICAgICAgICAgICAgLy9kZWZhdWx0U3VibWl0OiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5EZWZhdWx0U3VibWl0KCksIC8vIFVuY29tbWVudCB0aGlzIGxpbmUgdG8gZW5hYmxlIG5vcm1hbCBidXR0b24gc3VibWl0IGFmdGVyIGZvcm0gdmFsaWRhdGlvblxuICAgICAgICAgICAgICAgICAgICBib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0b3I6ICcuZnYtcm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVWYWxpZENsYXNzOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBTZWxlY3QyIHZhbGlkYXRpb24gaW50ZWdyYXRpb25cbiAgICAgICAgJChmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY291bnRyeVwiXScpKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBSZXZhbGlkYXRlIHRoZSBjb2xvciBmaWVsZCB3aGVuIGFuIG9wdGlvbiBpcyBjaG9zZW5cbiAgICAgICAgICAgIHZhbGlkYXRpb24ucmV2YWxpZGF0ZUZpZWxkKCdjb3VudHJ5Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImxhbmd1YWdlXCJdJykpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJldmFsaWRhdGUgdGhlIGNvbG9yIGZpZWxkIHdoZW4gYW4gb3B0aW9uIGlzIGNob3NlblxuICAgICAgICAgICAgdmFsaWRhdGlvbi5yZXZhbGlkYXRlRmllbGQoJ2xhbmd1YWdlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRpbWV6b25lXCJdJykpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJldmFsaWRhdGUgdGhlIGNvbG9yIGZpZWxkIHdoZW4gYW4gb3B0aW9uIGlzIGNob3NlblxuICAgICAgICAgICAgdmFsaWRhdGlvbi5yZXZhbGlkYXRlRmllbGQoJ3RpbWV6b25lJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVGhhbmsgeW91ISBZb3UndmUgdXBkYXRlZCB5b3VyIGJhc2ljIGluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU29ycnksIGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNvbWUgZXJyb3JzIGRldGVjdGVkLCBwbGVhc2UgdHJ5IGFnYWluLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfYWNjb3VudF9wcm9maWxlX2RldGFpbHNfZm9ybScpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcja3RfYWNjb3VudF9wcm9maWxlX2RldGFpbHNfc3VibWl0Jyk7XG5cbiAgICAgICAgICAgIGluaXRWYWxpZGF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtUQWNjb3VudFNldHRpbmdzUHJvZmlsZURldGFpbHMuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RBY2NvdW50U2V0dGluZ3NQcm9maWxlRGV0YWlscyIsImZvcm0iLCJzdWJtaXRCdXR0b24iLCJ2YWxpZGF0aW9uIiwiaW5pdFZhbGlkYXRpb24iLCJGb3JtVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0aW9uIiwiZmllbGRzIiwiZm5hbWUiLCJ2YWxpZGF0b3JzIiwibm90RW1wdHkiLCJtZXNzYWdlIiwibG5hbWUiLCJjb21wYW55IiwicGhvbmUiLCJjb3VudHJ5IiwidGltZXpvbmUiLCJsYW5ndWFnZSIsInBsdWdpbnMiLCJ0cmlnZ2VyIiwiVHJpZ2dlciIsIlN1Ym1pdEJ1dHRvbiIsImJvb3RzdHJhcCIsIkJvb3RzdHJhcDUiLCJyb3dTZWxlY3RvciIsImVsZUludmFsaWRDbGFzcyIsImVsZVZhbGlkQ2xhc3MiLCIkIiwicXVlcnlTZWxlY3RvciIsIm9uIiwicmV2YWxpZGF0ZUZpZWxkIiwiaGFuZGxlRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZSIsInRoZW4iLCJzdGF0dXMiLCJzd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImluaXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/account/settings/profile-details.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/account/settings/profile-details.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=profile-details.js.map