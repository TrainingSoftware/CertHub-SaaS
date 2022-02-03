/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**********************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/pages/projects/settings/settings.js ***!
  \**********************************************************************************************/


// Class definition
var KTProjectSettings = function () {

    // Private functions
    var handleForm = function () {
        // Init Datepicker --- For more info, please check Flatpickr's official documentation: https://flatpickr.js.org/
        $("#kt_datepicker_1").flatpickr();

        // Form validation
        var validation;
        var _form = document.getElementById('kt_project_settings_form');
        var submitButton = _form.querySelector('#kt_project_settings_submit');

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validation = FormValidation.formValidation(
            _form,
            {
                fields: {
                    name: {
                        validators: {
                            notEmpty: {
                                message: 'Project name is required'
                            }
                        }
                    },
                    type: {
                        validators: {
                            notEmpty: {
                                message: 'Project type is required'
                            }
                        }
                    },
                    description: {
                        validators: {
                            notEmpty: {
                                message: 'Project Description is required'
                            }
                        }
                    },
                    date: {
                        validators: {
                            notEmpty: {
                                message: 'Due Date is required'
                            }
                        }
                    },
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row'
                    })
                }
            }
        );

        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            validation.validate().then(function (status) {
                if (status == 'Valid') {

                    swal.fire({
                        text: "Thank you! You've updated your project settings",
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
            handleForm();
        }
    }
}();


// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTProjectSettings.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/pages/projects/settings/settings.js":
/*!*********************************************************************!*\
  !*** ./resources/src/js/custom/pages/projects/settings/settings.js ***!
  \*********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTProjectSettings = function () {\n  // Private functions\n  var handleForm = function handleForm() {\n    // Init Datepicker --- For more info, please check Flatpickr's official documentation: https://flatpickr.js.org/\n    $(\"#kt_datepicker_1\").flatpickr(); // Form validation\n\n    var validation;\n\n    var _form = document.getElementById('kt_project_settings_form');\n\n    var submitButton = _form.querySelector('#kt_project_settings_submit'); // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n\n    validation = FormValidation.formValidation(_form, {\n      fields: {\n        name: {\n          validators: {\n            notEmpty: {\n              message: 'Project name is required'\n            }\n          }\n        },\n        type: {\n          validators: {\n            notEmpty: {\n              message: 'Project type is required'\n            }\n          }\n        },\n        description: {\n          validators: {\n            notEmpty: {\n              message: 'Project Description is required'\n            }\n          }\n        },\n        date: {\n          validators: {\n            notEmpty: {\n              message: 'Due Date is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        submitButton: new FormValidation.plugins.SubmitButton(),\n        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row'\n        })\n      }\n    });\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      validation.validate().then(function (status) {\n        if (status == 'Valid') {\n          swal.fire({\n            text: \"Thank you! You've updated your project settings\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-light-primary\"\n            }\n          });\n        } else {\n          swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-light-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTProjectSettings.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9wYWdlcy9wcm9qZWN0cy9zZXR0aW5ncy9zZXR0aW5ncy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxpQkFBaUIsR0FBRyxZQUFZO0FBRWhDO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBWTtBQUN6QjtBQUNBQyxJQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkMsU0FBdEIsR0FGeUIsQ0FJekI7O0FBQ0EsUUFBSUMsVUFBSjs7QUFDQSxRQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QiwwQkFBeEIsQ0FBWjs7QUFDQSxRQUFJQyxZQUFZLEdBQUdILEtBQUssQ0FBQ0ksYUFBTixDQUFvQiw2QkFBcEIsQ0FBbkIsQ0FQeUIsQ0FTekI7OztBQUNBTCxJQUFBQSxVQUFVLEdBQUdNLGNBQWMsQ0FBQ0MsY0FBZixDQUNUTixLQURTLEVBRVQ7QUFDSU8sTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLElBQUksRUFBRTtBQUNGQyxVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURIO0FBREY7QUFEVixTQURGO0FBUUpDLFFBQUFBLElBQUksRUFBRTtBQUNGSCxVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURIO0FBREY7QUFEVixTQVJGO0FBZUpFLFFBQUFBLFdBQVcsRUFBRTtBQUNUSixVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURIO0FBREY7QUFESCxTQWZUO0FBc0JKRyxRQUFBQSxJQUFJLEVBQUU7QUFDRkwsVUFBQUEsVUFBVSxFQUFFO0FBQ1JDLFlBQUFBLFFBQVEsRUFBRTtBQUNOQyxjQUFBQSxPQUFPLEVBQUU7QUFESDtBQURGO0FBRFY7QUF0QkYsT0FEWjtBQStCSUksTUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFFBQUFBLE9BQU8sRUFBRSxJQUFJWCxjQUFjLENBQUNVLE9BQWYsQ0FBdUJFLE9BQTNCLEVBREo7QUFFTGQsUUFBQUEsWUFBWSxFQUFFLElBQUlFLGNBQWMsQ0FBQ1UsT0FBZixDQUF1QkcsWUFBM0IsRUFGVDtBQUdMO0FBQ0FDLFFBQUFBLFNBQVMsRUFBRSxJQUFJZCxjQUFjLENBQUNVLE9BQWYsQ0FBdUJLLFVBQTNCLENBQXNDO0FBQzdDQyxVQUFBQSxXQUFXLEVBQUU7QUFEZ0MsU0FBdEM7QUFKTjtBQS9CYixLQUZTLENBQWI7QUE0Q0FsQixJQUFBQSxZQUFZLENBQUNtQixnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFVQyxDQUFWLEVBQWE7QUFDaERBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBekIsTUFBQUEsVUFBVSxDQUFDMEIsUUFBWCxHQUFzQkMsSUFBdEIsQ0FBMkIsVUFBVUMsTUFBVixFQUFrQjtBQUN6QyxZQUFJQSxNQUFNLElBQUksT0FBZCxFQUF1QjtBQUVuQkMsVUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsWUFBQUEsSUFBSSxFQUFFLGlEQURBO0FBRU5DLFlBQUFBLElBQUksRUFBRSxTQUZBO0FBR05DLFlBQUFBLGNBQWMsRUFBRSxLQUhWO0FBSU5DLFlBQUFBLGlCQUFpQixFQUFFLGFBSmI7QUFLTkMsWUFBQUEsV0FBVyxFQUFFO0FBQ1RDLGNBQUFBLGFBQWEsRUFBRTtBQUROO0FBTFAsV0FBVjtBQVVILFNBWkQsTUFZTztBQUNIUCxVQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxZQUFBQSxJQUFJLEVBQUUscUVBREE7QUFFTkMsWUFBQUEsSUFBSSxFQUFFLE9BRkE7QUFHTkMsWUFBQUEsY0FBYyxFQUFFLEtBSFY7QUFJTkMsWUFBQUEsaUJBQWlCLEVBQUUsYUFKYjtBQUtOQyxZQUFBQSxXQUFXLEVBQUU7QUFDVEMsY0FBQUEsYUFBYSxFQUFFO0FBRE47QUFMUCxXQUFWO0FBU0g7QUFDSixPQXhCRDtBQXlCSCxLQTVCRDtBQTZCSCxHQW5GRCxDQUhnQyxDQXdGaEM7OztBQUNBLFNBQU87QUFDSEMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2R4QyxNQUFBQSxVQUFVO0FBQ2I7QUFIRSxHQUFQO0FBS0gsQ0E5RnVCLEVBQXhCLEMsQ0FpR0E7OztBQUNBeUMsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDM0MsRUFBQUEsaUJBQWlCLENBQUN5QyxJQUFsQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9wYWdlcy9wcm9qZWN0cy9zZXR0aW5ncy9zZXR0aW5ncy5qcz8xYTQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RQcm9qZWN0U2V0dGluZ3MgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBoYW5kbGVGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJbml0IERhdGVwaWNrZXIgLS0tIEZvciBtb3JlIGluZm8sIHBsZWFzZSBjaGVjayBGbGF0cGlja3IncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL2ZsYXRwaWNrci5qcy5vcmcvXG4gICAgICAgICQoXCIja3RfZGF0ZXBpY2tlcl8xXCIpLmZsYXRwaWNrcigpO1xuXG4gICAgICAgIC8vIEZvcm0gdmFsaWRhdGlvblxuICAgICAgICB2YXIgdmFsaWRhdGlvbjtcbiAgICAgICAgdmFyIF9mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3Byb2plY3Rfc2V0dGluZ3NfZm9ybScpO1xuICAgICAgICB2YXIgc3VibWl0QnV0dG9uID0gX2Zvcm0ucXVlcnlTZWxlY3RvcignI2t0X3Byb2plY3Rfc2V0dGluZ3Nfc3VibWl0Jyk7XG5cbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cbiAgICAgICAgdmFsaWRhdGlvbiA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxuICAgICAgICAgICAgX2Zvcm0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUHJvamVjdCBuYW1lIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQcm9qZWN0IHR5cGUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQcm9qZWN0IERlc2NyaXB0aW9uIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdEdWUgRGF0ZSBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5TdWJtaXRCdXR0b24oKSxcbiAgICAgICAgICAgICAgICAgICAgLy9kZWZhdWx0U3VibWl0OiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5EZWZhdWx0U3VibWl0KCksIC8vIFVuY29tbWVudCB0aGlzIGxpbmUgdG8gZW5hYmxlIG5vcm1hbCBidXR0b24gc3VibWl0IGFmdGVyIGZvcm0gdmFsaWRhdGlvblxuICAgICAgICAgICAgICAgICAgICBib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0b3I6ICcuZnYtcm93J1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVGhhbmsgeW91ISBZb3UndmUgdXBkYXRlZCB5b3VyIHByb2plY3Qgc2V0dGluZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU29ycnksIGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNvbWUgZXJyb3JzIGRldGVjdGVkLCBwbGVhc2UgdHJ5IGFnYWluLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGhhbmRsZUZvcm0oKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKTtcblxuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVFByb2plY3RTZXR0aW5ncy5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVFByb2plY3RTZXR0aW5ncyIsImhhbmRsZUZvcm0iLCIkIiwiZmxhdHBpY2tyIiwidmFsaWRhdGlvbiIsIl9mb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN1Ym1pdEJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJGb3JtVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0aW9uIiwiZmllbGRzIiwibmFtZSIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwicGx1Z2lucyIsInRyaWdnZXIiLCJUcmlnZ2VyIiwiU3VibWl0QnV0dG9uIiwiYm9vdHN0cmFwIiwiQm9vdHN0cmFwNSIsInJvd1NlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlIiwidGhlbiIsInN0YXR1cyIsInN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/pages/projects/settings/settings.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/pages/projects/settings/settings.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=settings.js.map