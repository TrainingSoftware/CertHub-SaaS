/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/customers/view/adjust-balance.js ***!
  \************************************************************************************************/


// Class definition
var KTModalAdjustBalance = function () {
    var element;
    var submitButton;
    var cancelButton;
    var closeButton;
    var validator;
    var maskInput;
    var newBalance;
    var form;
    var modal;

    // Init form inputs
    var initForm = function () {
        // Init inputmask plugin --- For more info please refer to the official documentation here: https://github.com/RobinHerbots/Inputmask
        Inputmask("US$ 9,999,999.99", {
            "numericInput": true
        }).mask("#kt_modal_inputmask");
    }

    var handleBalanceCalculator = function () {
        // Select elements
        const currentBalance = element.querySelector('[kt-modal-adjust-balance="current_balance"]');
        newBalance = element.querySelector('[kt-modal-adjust-balance="new_balance"]');
        maskInput = document.getElementById('kt_modal_inputmask');

        // Get current balance value
        const isNegative = currentBalance.innerHTML.includes('-');
        let currentValue = parseFloat(currentBalance.innerHTML.replace(/[^0-9.]/g, '').replace(',', ''));
        currentValue = isNegative ? currentValue * -1 : currentValue; 

        // On change event for inputmask
        let maskValue;
        maskInput.addEventListener('focusout', function (e) {
            // Get inputmask value on change
            maskValue = parseFloat(e.target.value.replace(/[^0-9.]/g, '').replace(',', ''));

            // Set mask value as 0 when NaN detected
            if(isNaN(maskValue)){
                maskValue = 0;
            }

            // Calculate & set new balance value
            newBalance.innerHTML = 'US$ ' + (maskValue + currentValue).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
    }

    // Handle form validation and submittion
    var handleForm = function () {
        // Stepper custom navigation

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'adjustment': {
                        validators: {
                            notEmpty: {
                                message: 'Adjustment type is required'
                            }
                        }
                    },
                    'amount': {
                        validators: {
                            notEmpty: {
                                message: 'Amount is required'
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

        // Revalidate country field. For more info, plase visit the official plugin site: https://select2.org/
        $(form.querySelector('[name="adjustment"]')).on('change', function () {
            // Revalidate the field when an option is chosen
            validator.revalidateField('adjustment');
        });

        // Action buttons
        submitButton.addEventListener('click', function (e) {
            // Prevent default button action
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    console.log('validated!');

                    if (status == 'Valid') {
                        // Show loading indication
                        submitButton.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitButton.disabled = true;

                        // Simulate form submission
                        setTimeout(function () {
                            // Simulate form submission
                            submitButton.removeAttribute('data-kt-indicator');

                            // Show popup confirmation 
                            Swal.fire({
                                text: "Form has been successfully submitted!",
                                icon: "success",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    modal.hide();

                                    // Enable submit button after loading
                                    submitButton.disabled = false;

                                    // Reset form for demo purposes only
                                    form.reset();
                                    newBalance.innerHTML = "--";
                                }
                            });

                            //form.submit(); // Submit form
                        }, 2000);
                    } else {
                        // Show popup warning 
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

        cancelButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to cancel?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal				
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });

        closeButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to cancel?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal				
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });
    }
    
    return {
        // Public functions
        init: function () {
            // Elements
            element = document.querySelector('#kt_modal_adjust_balance');
            modal = new bootstrap.Modal(element);

            form = element.querySelector('#kt_modal_adjust_balance_form');
            submitButton = form.querySelector('#kt_modal_adjust_balance_submit');
            cancelButton = form.querySelector('#kt_modal_adjust_balance_cancel');
            closeButton = element.querySelector('#kt_modal_adjust_balance_close');

            initForm();
            handleBalanceCalculator();
            handleForm();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTModalAdjustBalance.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/customers/view/adjust-balance.js":
/*!***********************************************************************!*\
  !*** ./resources/src/js/custom/apps/customers/view/adjust-balance.js ***!
  \***********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTModalAdjustBalance = function () {\n  var element;\n  var submitButton;\n  var cancelButton;\n  var closeButton;\n  var validator;\n  var maskInput;\n  var newBalance;\n  var form;\n  var modal; // Init form inputs\n\n  var initForm = function initForm() {\n    // Init inputmask plugin --- For more info please refer to the official documentation here: https://github.com/RobinHerbots/Inputmask\n    Inputmask(\"US$ 9,999,999.99\", {\n      \"numericInput\": true\n    }).mask(\"#kt_modal_inputmask\");\n  };\n\n  var handleBalanceCalculator = function handleBalanceCalculator() {\n    // Select elements\n    var currentBalance = element.querySelector('[kt-modal-adjust-balance=\"current_balance\"]');\n    newBalance = element.querySelector('[kt-modal-adjust-balance=\"new_balance\"]');\n    maskInput = document.getElementById('kt_modal_inputmask'); // Get current balance value\n\n    var isNegative = currentBalance.innerHTML.includes('-');\n    var currentValue = parseFloat(currentBalance.innerHTML.replace(/[^0-9.]/g, '').replace(',', ''));\n    currentValue = isNegative ? currentValue * -1 : currentValue; // On change event for inputmask\n\n    var maskValue;\n    maskInput.addEventListener('focusout', function (e) {\n      // Get inputmask value on change\n      maskValue = parseFloat(e.target.value.replace(/[^0-9.]/g, '').replace(',', '')); // Set mask value as 0 when NaN detected\n\n      if (isNaN(maskValue)) {\n        maskValue = 0;\n      } // Calculate & set new balance value\n\n\n      newBalance.innerHTML = 'US$ ' + (maskValue + currentValue).toFixed(2).replace(/\\d(?=(\\d{3})+\\.)/g, '$&,');\n    });\n  }; // Handle form validation and submittion\n\n\n  var handleForm = function handleForm() {\n    // Stepper custom navigation\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'adjustment': {\n          validators: {\n            notEmpty: {\n              message: 'Adjustment type is required'\n            }\n          }\n        },\n        'amount': {\n          validators: {\n            notEmpty: {\n              message: 'Amount is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Revalidate country field. For more info, plase visit the official plugin site: https://select2.org/\n\n    $(form.querySelector('[name=\"adjustment\"]')).on('change', function () {\n      // Revalidate the field when an option is chosen\n      validator.revalidateField('adjustment');\n    }); // Action buttons\n\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable submit button whilst loading\n\n            submitButton.disabled = true; // Simulate form submission\n\n            setTimeout(function () {\n              // Simulate form submission\n              submitButton.removeAttribute('data-kt-indicator'); // Show popup confirmation \n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  modal.hide(); // Enable submit button after loading\n\n                  submitButton.disabled = false; // Reset form for demo purposes only\n\n                  form.reset();\n                  newBalance.innerHTML = \"--\";\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          } else {\n            // Show popup warning \n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }\n    });\n    cancelButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\t\n\n          modal.hide(); // Hide modal\t\t\t\t\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n    closeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\t\n\n          modal.hide(); // Hide modal\t\t\t\t\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      // Elements\n      element = document.querySelector('#kt_modal_adjust_balance');\n      modal = new bootstrap.Modal(element);\n      form = element.querySelector('#kt_modal_adjust_balance_form');\n      submitButton = form.querySelector('#kt_modal_adjust_balance_submit');\n      cancelButton = form.querySelector('#kt_modal_adjust_balance_cancel');\n      closeButton = element.querySelector('#kt_modal_adjust_balance_close');\n      initForm();\n      handleBalanceCalculator();\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTModalAdjustBalance.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL2N1c3RvbWVycy92aWV3L2FkanVzdC1iYWxhbmNlLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLG9CQUFvQixHQUFHLFlBQVk7QUFDbkMsTUFBSUMsT0FBSjtBQUNBLE1BQUlDLFlBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLFNBQUo7QUFDQSxNQUFJQyxTQUFKO0FBQ0EsTUFBSUMsVUFBSjtBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxLQUFKLENBVG1DLENBV25DOztBQUNBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7QUFDdkI7QUFDQUMsSUFBQUEsU0FBUyxDQUFDLGtCQUFELEVBQXFCO0FBQzFCLHNCQUFnQjtBQURVLEtBQXJCLENBQVQsQ0FFR0MsSUFGSCxDQUVRLHFCQUZSO0FBR0gsR0FMRDs7QUFPQSxNQUFJQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQVk7QUFDdEM7QUFDQSxRQUFNQyxjQUFjLEdBQUdiLE9BQU8sQ0FBQ2MsYUFBUixDQUFzQiw2Q0FBdEIsQ0FBdkI7QUFDQVIsSUFBQUEsVUFBVSxHQUFHTixPQUFPLENBQUNjLGFBQVIsQ0FBc0IseUNBQXRCLENBQWI7QUFDQVQsSUFBQUEsU0FBUyxHQUFHVSxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQVosQ0FKc0MsQ0FNdEM7O0FBQ0EsUUFBTUMsVUFBVSxHQUFHSixjQUFjLENBQUNLLFNBQWYsQ0FBeUJDLFFBQXpCLENBQWtDLEdBQWxDLENBQW5CO0FBQ0EsUUFBSUMsWUFBWSxHQUFHQyxVQUFVLENBQUNSLGNBQWMsQ0FBQ0ssU0FBZixDQUF5QkksT0FBekIsQ0FBaUMsVUFBakMsRUFBNkMsRUFBN0MsRUFBaURBLE9BQWpELENBQXlELEdBQXpELEVBQThELEVBQTlELENBQUQsQ0FBN0I7QUFDQUYsSUFBQUEsWUFBWSxHQUFHSCxVQUFVLEdBQUdH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QUFJLENBQUNPLGFBQUwsQ0FBbUIsaUNBQW5CLENBQWY7QUFDQVosTUFBQUEsWUFBWSxHQUFHSyxJQUFJLENBQUNPLGFBQUwsQ0FBbUIsaUNBQW5CLENBQWY7QUFDQVgsTUFBQUEsV0FBVyxHQUFHSCxPQUFPLENBQUNjLGFBQVIsQ0FBc0IsZ0NBQXRCLENBQWQ7QUFFQUwsTUFBQUEsUUFBUTtBQUNSRyxNQUFBQSx1QkFBdUI7QUFDdkJrQixNQUFBQSxVQUFVO0FBQ2I7QUFmRSxHQUFQO0FBaUJILENBeE8wQixFQUEzQixDLENBME9BOzs7QUFDQTZDLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQzdFLEVBQUFBLG9CQUFvQixDQUFDMEUsSUFBckI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vYXBwcy9jdXN0b21lcnMvdmlldy9hZGp1c3QtYmFsYW5jZS5qcz9kNTY0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RNb2RhbEFkanVzdEJhbGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsZW1lbnQ7XG4gICAgdmFyIHN1Ym1pdEJ1dHRvbjtcbiAgICB2YXIgY2FuY2VsQnV0dG9uO1xuICAgIHZhciBjbG9zZUJ1dHRvbjtcbiAgICB2YXIgdmFsaWRhdG9yO1xuICAgIHZhciBtYXNrSW5wdXQ7XG4gICAgdmFyIG5ld0JhbGFuY2U7XG4gICAgdmFyIGZvcm07XG4gICAgdmFyIG1vZGFsO1xuXG4gICAgLy8gSW5pdCBmb3JtIGlucHV0c1xuICAgIHZhciBpbml0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSW5pdCBpbnB1dG1hc2sgcGx1Z2luIC0tLSBGb3IgbW9yZSBpbmZvIHBsZWFzZSByZWZlciB0byB0aGUgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbiBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFza1xuICAgICAgICBJbnB1dG1hc2soXCJVUyQgOSw5OTksOTk5Ljk5XCIsIHtcbiAgICAgICAgICAgIFwibnVtZXJpY0lucHV0XCI6IHRydWVcbiAgICAgICAgfSkubWFzayhcIiNrdF9tb2RhbF9pbnB1dG1hc2tcIik7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZUJhbGFuY2VDYWxjdWxhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTZWxlY3QgZWxlbWVudHNcbiAgICAgICAgY29uc3QgY3VycmVudEJhbGFuY2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1trdC1tb2RhbC1hZGp1c3QtYmFsYW5jZT1cImN1cnJlbnRfYmFsYW5jZVwiXScpO1xuICAgICAgICBuZXdCYWxhbmNlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdba3QtbW9kYWwtYWRqdXN0LWJhbGFuY2U9XCJuZXdfYmFsYW5jZVwiXScpO1xuICAgICAgICBtYXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfbW9kYWxfaW5wdXRtYXNrJyk7XG5cbiAgICAgICAgLy8gR2V0IGN1cnJlbnQgYmFsYW5jZSB2YWx1ZVxuICAgICAgICBjb25zdCBpc05lZ2F0aXZlID0gY3VycmVudEJhbGFuY2UuaW5uZXJIVE1MLmluY2x1ZGVzKCctJyk7XG4gICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBwYXJzZUZsb2F0KGN1cnJlbnRCYWxhbmNlLmlubmVySFRNTC5yZXBsYWNlKC9bXjAtOS5dL2csICcnKS5yZXBsYWNlKCcsJywgJycpKTtcbiAgICAgICAgY3VycmVudFZhbHVlID0gaXNOZWdhdGl2ZSA/IGN1cnJlbnRWYWx1ZSAqIC0xIDogY3VycmVudFZhbHVlOyBcblxuICAgICAgICAvLyBPbiBjaGFuZ2UgZXZlbnQgZm9yIGlucHV0bWFza1xuICAgICAgICBsZXQgbWFza1ZhbHVlO1xuICAgICAgICBtYXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gR2V0IGlucHV0bWFzayB2YWx1ZSBvbiBjaGFuZ2VcbiAgICAgICAgICAgIG1hc2tWYWx1ZSA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUucmVwbGFjZSgvW14wLTkuXS9nLCAnJykucmVwbGFjZSgnLCcsICcnKSk7XG5cbiAgICAgICAgICAgIC8vIFNldCBtYXNrIHZhbHVlIGFzIDAgd2hlbiBOYU4gZGV0ZWN0ZWRcbiAgICAgICAgICAgIGlmKGlzTmFOKG1hc2tWYWx1ZSkpe1xuICAgICAgICAgICAgICAgIG1hc2tWYWx1ZSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSAmIHNldCBuZXcgYmFsYW5jZSB2YWx1ZVxuICAgICAgICAgICAgbmV3QmFsYW5jZS5pbm5lckhUTUwgPSAnVVMkICcgKyAobWFza1ZhbHVlICsgY3VycmVudFZhbHVlKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcZCg/PShcXGR7M30pK1xcLikvZywgJyQmLCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgZm9ybSB2YWxpZGF0aW9uIGFuZCBzdWJtaXR0aW9uXG4gICAgdmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN0ZXBwZXIgY3VzdG9tIG5hdmlnYXRpb25cblxuICAgICAgICAvLyBJbml0IGZvcm0gdmFsaWRhdGlvbiBydWxlcy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgRm9ybVZhbGlkYXRpb24gcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjpodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL1xuICAgICAgICB2YWxpZGF0b3IgPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcbiAgICAgICAgICAgIGZvcm0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgICdhZGp1c3RtZW50Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBZGp1c3RtZW50IHR5cGUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnYW1vdW50Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBbW91bnQgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxuICAgICAgICAgICAgICAgICAgICBib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0b3I6ICcuZnYtcm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVWYWxpZENsYXNzOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBSZXZhbGlkYXRlIGNvdW50cnkgZmllbGQuIEZvciBtb3JlIGluZm8sIHBsYXNlIHZpc2l0IHRoZSBvZmZpY2lhbCBwbHVnaW4gc2l0ZTogaHR0cHM6Ly9zZWxlY3QyLm9yZy9cbiAgICAgICAgJChmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYWRqdXN0bWVudFwiXScpKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmV2YWxpZGF0ZSB0aGUgZmllbGQgd2hlbiBhbiBvcHRpb24gaXMgY2hvc2VuXG4gICAgICAgICAgICB2YWxpZGF0b3IucmV2YWxpZGF0ZUZpZWxkKCdhZGp1c3RtZW50Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFjdGlvbiBidXR0b25zXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYnV0dG9uIGFjdGlvblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBmb3JtIGJlZm9yZSBzdWJtaXRcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlZCEnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIHN1Ym1pdCBidXR0b24gd2hpbHN0IGxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIGZvcm0gc3VibWlzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgcG9wdXAgY29uZmlybWF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRm9ybSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc3VibWl0dGVkIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIHN1Ym1pdCBidXR0b24gYWZ0ZXIgbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IGZvcm0gZm9yIGRlbW8gcHVycG9zZXMgb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmFsYW5jZS5pbm5lckhUTUwgPSBcIi0tXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9ybS5zdWJtaXQoKTsgLy8gU3VibWl0IGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBwb3B1cCB3YXJuaW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvcnJ5LCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzb21lIGVycm9ycyBkZXRlY3RlZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gY2FuY2VsP1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgY2FuY2VsIGl0IVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIHJldHVyblwiLFxuICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLWFjdGl2ZS1saWdodFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KCk7IC8vIFJlc2V0IGZvcm1cdFxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7IC8vIEhpZGUgbW9kYWxcdFx0XHRcdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdXIgZm9ybSBoYXMgbm90IGJlZW4gY2FuY2VsbGVkIS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gY2FuY2VsP1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgY2FuY2VsIGl0IVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIHJldHVyblwiLFxuICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLWFjdGl2ZS1saWdodFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KCk7IC8vIFJlc2V0IGZvcm1cdFxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7IC8vIEhpZGUgbW9kYWxcdFx0XHRcdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdXIgZm9ybSBoYXMgbm90IGJlZW4gY2FuY2VsbGVkIS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIGZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBFbGVtZW50c1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9tb2RhbF9hZGp1c3RfYmFsYW5jZScpO1xuICAgICAgICAgICAgbW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBmb3JtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcja3RfbW9kYWxfYWRqdXN0X2JhbGFuY2VfZm9ybScpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcja3RfbW9kYWxfYWRqdXN0X2JhbGFuY2Vfc3VibWl0Jyk7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNrdF9tb2RhbF9hZGp1c3RfYmFsYW5jZV9jYW5jZWwnKTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcja3RfbW9kYWxfYWRqdXN0X2JhbGFuY2VfY2xvc2UnKTtcblxuICAgICAgICAgICAgaW5pdEZvcm0oKTtcbiAgICAgICAgICAgIGhhbmRsZUJhbGFuY2VDYWxjdWxhdG9yKCk7XG4gICAgICAgICAgICBoYW5kbGVGb3JtKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RNb2RhbEFkanVzdEJhbGFuY2UuaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktUTW9kYWxBZGp1c3RCYWxhbmNlIiwiZWxlbWVudCIsInN1Ym1pdEJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImNsb3NlQnV0dG9uIiwidmFsaWRhdG9yIiwibWFza0lucHV0IiwibmV3QmFsYW5jZSIsImZvcm0iLCJtb2RhbCIsImluaXRGb3JtIiwiSW5wdXRtYXNrIiwibWFzayIsImhhbmRsZUJhbGFuY2VDYWxjdWxhdG9yIiwiY3VycmVudEJhbGFuY2UiLCJxdWVyeVNlbGVjdG9yIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlzTmVnYXRpdmUiLCJpbm5lckhUTUwiLCJpbmNsdWRlcyIsImN1cnJlbnRWYWx1ZSIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwibWFza1ZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzTmFOIiwidG9GaXhlZCIsImhhbmRsZUZvcm0iLCJGb3JtVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0aW9uIiwiZmllbGRzIiwidmFsaWRhdG9ycyIsIm5vdEVtcHR5IiwibWVzc2FnZSIsInBsdWdpbnMiLCJ0cmlnZ2VyIiwiVHJpZ2dlciIsImJvb3RzdHJhcCIsIkJvb3RzdHJhcDUiLCJyb3dTZWxlY3RvciIsImVsZUludmFsaWRDbGFzcyIsImVsZVZhbGlkQ2xhc3MiLCIkIiwib24iLCJyZXZhbGlkYXRlRmllbGQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlIiwidGhlbiIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiaGlkZSIsInJlc2V0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNhbmNlbEJ1dHRvblRleHQiLCJkaXNtaXNzIiwiaW5pdCIsIk1vZGFsIiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/customers/view/adjust-balance.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/customers/view/adjust-balance.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=adjust-balance.js.map