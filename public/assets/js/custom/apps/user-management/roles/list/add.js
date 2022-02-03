/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/user-management/roles/list/add.js ***!
  \*************************************************************************************************/


// Class definition
var KTUsersAddRole = function () {
    // Shared variables
    const element = document.getElementById('kt_modal_add_role');
    const form = element.querySelector('#kt_modal_add_role_form');
    const modal = new bootstrap.Modal(element);

    // Init add schedule modal
    var initAddRole = () => {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        var validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'role_name': {
                        validators: {
                            notEmpty: {
                                message: 'Role name is required'
                            }
                        }
                    },
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

        // Close button handler
        const closeButton = element.querySelector('[data-kt-roles-modal-action="close"]');
        closeButton.addEventListener('click', e => {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to close?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, close it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    modal.hide(); // Hide modal				
                } 
            });
        });

        // Cancel button handler
        const cancelButton = element.querySelector('[data-kt-roles-modal-action="cancel"]');
        cancelButton.addEventListener('click', e => {
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

         // Submit button handler
         const submitButton = element.querySelector('[data-kt-roles-modal-action="submit"]');
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
 
                         // Disable button to avoid multiple click 
                         submitButton.disabled = true;
 
                         // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                         setTimeout(function () {
                             // Remove loading indication
                             submitButton.removeAttribute('data-kt-indicator');
 
                             // Enable button
                             submitButton.disabled = false;
 
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
                                 }
                             });
 
                             //form.submit(); // Submit form
                         }, 2000);
                     } else {
                         // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/
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
        

    }

    // Select all handler
    const handleSelectAll = () =>{
        // Define variables
        const selectAll = form.querySelector('#kt_roles_select_all');
        const allCheckboxes = form.querySelectorAll('[type="checkbox"]');

        // Handle check state
        selectAll.addEventListener('change', e => {

            // Apply check state to all checkboxes
            allCheckboxes.forEach(c => {
                c.checked = e.target.checked;
            });
        });
    }

    return {
        // Public functions
        init: function () {
            initAddRole();
            handleSelectAll();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTUsersAddRole.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/user-management/roles/list/add.js":
/*!************************************************************************!*\
  !*** ./resources/src/js/custom/apps/user-management/roles/list/add.js ***!
  \************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTUsersAddRole = function () {\n  // Shared variables\n  var element = document.getElementById('kt_modal_add_role');\n  var form = element.querySelector('#kt_modal_add_role_form');\n  var modal = new bootstrap.Modal(element); // Init add schedule modal\n\n  var initAddRole = function initAddRole() {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        'role_name': {\n          validators: {\n            notEmpty: {\n              message: 'Role name is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Close button handler\n\n    var closeButton = element.querySelector('[data-kt-roles-modal-action=\"close\"]');\n    closeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to close?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, close it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          modal.hide(); // Hide modal\t\t\t\t\n        }\n      });\n    }); // Cancel button handler\n\n    var cancelButton = element.querySelector('[data-kt-roles-modal-action=\"cancel\"]');\n    cancelButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\t\n\n          modal.hide(); // Hide modal\t\t\t\t\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    }); // Submit button handler\n\n    var submitButton = element.querySelector('[data-kt-roles-modal-action=\"submit\"]');\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            submitButton.disabled = true; // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            setTimeout(function () {\n              // Remove loading indication\n              submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              submitButton.disabled = false; // Show popup confirmation \n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  modal.hide();\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          } else {\n            // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }\n    });\n  }; // Select all handler\n\n\n  var handleSelectAll = function handleSelectAll() {\n    // Define variables\n    var selectAll = form.querySelector('#kt_roles_select_all');\n    var allCheckboxes = form.querySelectorAll('[type=\"checkbox\"]'); // Handle check state\n\n    selectAll.addEventListener('change', function (e) {\n      // Apply check state to all checkboxes\n      allCheckboxes.forEach(function (c) {\n        c.checked = e.target.checked;\n      });\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      initAddRole();\n      handleSelectAll();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersAddRole.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3VzZXItbWFuYWdlbWVudC9yb2xlcy9saXN0L2FkZC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxjQUFjLEdBQUcsWUFBWTtBQUM3QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLG1CQUF4QixDQUFoQjtBQUNBLE1BQU1DLElBQUksR0FBR0gsT0FBTyxDQUFDSSxhQUFSLENBQXNCLHlCQUF0QixDQUFiO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQUlDLFNBQVMsQ0FBQ0MsS0FBZCxDQUFvQlAsT0FBcEIsQ0FBZCxDQUo2QixDQU03Qjs7QUFDQSxNQUFJUSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBRXBCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHQyxjQUFjLENBQUNDLGNBQWYsQ0FDWlIsSUFEWSxFQUVaO0FBQ0lTLE1BQUFBLE1BQU0sRUFBRTtBQUNKLHFCQUFhO0FBQ1RDLFVBQUFBLFVBQVUsRUFBRTtBQUNSQyxZQUFBQSxRQUFRLEVBQUU7QUFDTkMsY0FBQUEsT0FBTyxFQUFFO0FBREg7QUFERjtBQURIO0FBRFQsT0FEWjtBQVdJQyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsT0FBTyxFQUFFLElBQUlQLGNBQWMsQ0FBQ00sT0FBZixDQUF1QkUsT0FBM0IsRUFESjtBQUVMWixRQUFBQSxTQUFTLEVBQUUsSUFBSUksY0FBYyxDQUFDTSxPQUFmLENBQXVCRyxVQUEzQixDQUFzQztBQUM3Q0MsVUFBQUEsV0FBVyxFQUFFLFNBRGdDO0FBRTdDQyxVQUFBQSxlQUFlLEVBQUUsRUFGNEI7QUFHN0NDLFVBQUFBLGFBQWEsRUFBRTtBQUg4QixTQUF0QztBQUZOO0FBWGIsS0FGWSxDQUFoQixDQUhvQixDQTJCcEI7O0FBQ0EsUUFBTUMsV0FBVyxHQUFHdkIsT0FBTyxDQUFDSSxhQUFSLENBQXNCLHNDQUF0QixDQUFwQjtBQUNBbUIsSUFBQUEsV0FBVyxDQUFDQyxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFBQyxDQUFDLEVBQUk7QUFDdkNBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBQyxNQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxRQUFBQSxJQUFJLEVBQUUsdUNBREE7QUFFTkMsUUFBQUEsSUFBSSxFQUFFLFNBRkE7QUFHTkMsUUFBQUEsZ0JBQWdCLEVBQUUsSUFIWjtBQUlOQyxRQUFBQSxjQUFjLEVBQUUsS0FKVjtBQUtOQyxRQUFBQSxpQkFBaUIsRUFBRSxnQkFMYjtBQU1OQyxRQUFBQSxnQkFBZ0IsRUFBRSxZQU5aO0FBT05DLFFBQUFBLFdBQVcsRUFBRTtBQUNUQyxVQUFBQSxhQUFhLEVBQUUsaUJBRE47QUFFVEMsVUFBQUEsWUFBWSxFQUFFO0FBRkw7QUFQUCxPQUFWLEVBV0dDLElBWEgsQ0FXUSxVQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLFlBQUlBLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQjtBQUNkbkMsVUFBQUEsS0FBSyxDQUFDb0MsSUFBTixHQURjLENBQ0E7QUFDakI7QUFDSixPQWZEO0FBZ0JILEtBbkJELEVBN0JvQixDQWtEcEI7O0FBQ0EsUUFBTUosWUFBWSxHQUFHckMsT0FBTyxDQUFDSSxhQUFSLENBQXNCLHVDQUF0QixDQUFyQjtBQUNBaUMsSUFBQUEsWUFBWSxDQUFDYixnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFBQyxDQUFDLEVBQUk7QUFDeENBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBQyxNQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxRQUFBQSxJQUFJLEVBQUUsd0NBREE7QUFFTkMsUUFBQUEsSUFBSSxFQUFFLFNBRkE7QUFHTkMsUUFBQUEsZ0JBQWdCLEVBQUUsSUFIWjtBQUlOQyxRQUFBQSxjQUFjLEVBQUUsS0FKVjtBQUtOQyxRQUFBQSxpQkFBaUIsRUFBRSxpQkFMYjtBQU1OQyxRQUFBQSxnQkFBZ0IsRUFBRSxZQU5aO0FBT05DLFFBQUFBLFdBQVcsRUFBRTtBQUNUQyxVQUFBQSxhQUFhLEVBQUUsaUJBRE47QUFFVEMsVUFBQUEsWUFBWSxFQUFFO0FBRkw7QUFQUCxPQUFWLEVBV0dDLElBWEgsQ0FXUSxVQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLFlBQUlBLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQjtBQUNkckMsVUFBQUEsSUFBSSxDQUFDdUMsS0FBTCxHQURjLENBQ0E7O0FBQ2RyQyxVQUFBQSxLQUFLLENBQUNvQyxJQUFOLEdBRmMsQ0FFQTtBQUNqQixTQUhELE1BR08sSUFBSUYsTUFBTSxDQUFDSSxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQ3BDaEIsVUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsWUFBQUEsSUFBSSxFQUFFLG9DQURBO0FBRU5DLFlBQUFBLElBQUksRUFBRSxPQUZBO0FBR05FLFlBQUFBLGNBQWMsRUFBRSxLQUhWO0FBSU5DLFlBQUFBLGlCQUFpQixFQUFFLGFBSmI7QUFLTkUsWUFBQUEsV0FBVyxFQUFFO0FBQ1RDLGNBQUFBLGFBQWEsRUFBRTtBQUROO0FBTFAsV0FBVjtBQVNIO0FBQ0osT0ExQkQ7QUEyQkgsS0E5QkQsRUFwRG9CLENBb0ZuQjs7QUFDQSxRQUFNUSxZQUFZLEdBQUc1QyxPQUFPLENBQUNJLGFBQVIsQ0FBc0IsdUNBQXRCLENBQXJCO0FBQ0F3QyxJQUFBQSxZQUFZLENBQUNwQixnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFVQyxDQUFWLEVBQWE7QUFDaEQ7QUFDQUEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRmdELENBSWhEOztBQUNBLFVBQUlqQixTQUFKLEVBQWU7QUFDWEEsUUFBQUEsU0FBUyxDQUFDb0MsUUFBVixHQUFxQlAsSUFBckIsQ0FBMEIsVUFBVVEsTUFBVixFQUFrQjtBQUN4Q0MsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjs7QUFFQSxjQUFJRixNQUFNLElBQUksT0FBZCxFQUF1QjtBQUNuQjtBQUNBRixZQUFBQSxZQUFZLENBQUNLLFlBQWIsQ0FBMEIsbUJBQTFCLEVBQStDLElBQS9DLEVBRm1CLENBSW5COztBQUNBTCxZQUFBQSxZQUFZLENBQUNNLFFBQWIsR0FBd0IsSUFBeEIsQ0FMbUIsQ0FPbkI7O0FBQ0FDLFlBQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ25CO0FBQ0FQLGNBQUFBLFlBQVksQ0FBQ1EsZUFBYixDQUE2QixtQkFBN0IsRUFGbUIsQ0FJbkI7O0FBQ0FSLGNBQUFBLFlBQVksQ0FBQ00sUUFBYixHQUF3QixLQUF4QixDQUxtQixDQU9uQjs7QUFDQXZCLGNBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05DLGdCQUFBQSxJQUFJLEVBQUUsdUNBREE7QUFFTkMsZ0JBQUFBLElBQUksRUFBRSxTQUZBO0FBR05FLGdCQUFBQSxjQUFjLEVBQUUsS0FIVjtBQUlOQyxnQkFBQUEsaUJBQWlCLEVBQUUsYUFKYjtBQUtORSxnQkFBQUEsV0FBVyxFQUFFO0FBQ1RDLGtCQUFBQSxhQUFhLEVBQUU7QUFETjtBQUxQLGVBQVYsRUFRR0UsSUFSSCxDQVFRLFVBQVVDLE1BQVYsRUFBa0I7QUFDdEIsb0JBQUlBLE1BQU0sQ0FBQ2MsV0FBWCxFQUF3QjtBQUNwQmhELGtCQUFBQSxLQUFLLENBQUNvQyxJQUFOO0FBQ0g7QUFDSixlQVpELEVBUm1CLENBc0JuQjtBQUNILGFBdkJTLEVBdUJQLElBdkJPLENBQVY7QUF3QkgsV0FoQ0QsTUFnQ087QUFDSDtBQUNBZCxZQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxjQUFBQSxJQUFJLEVBQUUscUVBREE7QUFFTkMsY0FBQUEsSUFBSSxFQUFFLE9BRkE7QUFHTkUsY0FBQUEsY0FBYyxFQUFFLEtBSFY7QUFJTkMsY0FBQUEsaUJBQWlCLEVBQUUsYUFKYjtBQUtORSxjQUFBQSxXQUFXLEVBQUU7QUFDVEMsZ0JBQUFBLGFBQWEsRUFBRTtBQUROO0FBTFAsYUFBVjtBQVNIO0FBQ0osU0EvQ0Q7QUFnREg7QUFDSixLQXZERDtBQTBESixHQWhKRCxDQVA2QixDQXlKN0I7OztBQUNBLE1BQU1rQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQUs7QUFDekI7QUFDQSxRQUFNQyxTQUFTLEdBQUdwRCxJQUFJLENBQUNDLGFBQUwsQ0FBbUIsc0JBQW5CLENBQWxCO0FBQ0EsUUFBTW9ELGFBQWEsR0FBR3JELElBQUksQ0FBQ3NELGdCQUFMLENBQXNCLG1CQUF0QixDQUF0QixDQUh5QixDQUt6Qjs7QUFDQUYsSUFBQUEsU0FBUyxDQUFDL0IsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUMsVUFBQUMsQ0FBQyxFQUFJO0FBRXRDO0FBQ0ErQixNQUFBQSxhQUFhLENBQUNFLE9BQWQsQ0FBc0IsVUFBQUMsQ0FBQyxFQUFJO0FBQ3ZCQSxRQUFBQSxDQUFDLENBQUNDLE9BQUYsR0FBWW5DLENBQUMsQ0FBQ29DLE1BQUYsQ0FBU0QsT0FBckI7QUFDSCxPQUZEO0FBR0gsS0FORDtBQU9ILEdBYkQ7O0FBZUEsU0FBTztBQUNIO0FBQ0FFLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkdEQsTUFBQUEsV0FBVztBQUNYOEMsTUFBQUEsZUFBZTtBQUNsQjtBQUxFLEdBQVA7QUFPSCxDQWhMb0IsRUFBckIsQyxDQWtMQTs7O0FBQ0FTLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2pFLEVBQUFBLGNBQWMsQ0FBQytELElBQWY7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vYXBwcy91c2VyLW1hbmFnZW1lbnQvcm9sZXMvbGlzdC9hZGQuanM/YTBiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUVXNlcnNBZGRSb2xlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNoYXJlZCB2YXJpYWJsZXNcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X21vZGFsX2FkZF9yb2xlJyk7XG4gICAgY29uc3QgZm9ybSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignI2t0X21vZGFsX2FkZF9yb2xlX2Zvcm0nKTtcbiAgICBjb25zdCBtb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoZWxlbWVudCk7XG5cbiAgICAvLyBJbml0IGFkZCBzY2hlZHVsZSBtb2RhbFxuICAgIHZhciBpbml0QWRkUm9sZSA9ICgpID0+IHtcblxuICAgICAgICAvLyBJbml0IGZvcm0gdmFsaWRhdGlvbiBydWxlcy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgRm9ybVZhbGlkYXRpb24gcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjpodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL1xuICAgICAgICB2YXIgdmFsaWRhdG9yID0gRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXG4gICAgICAgICAgICBmb3JtLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICAncm9sZV9uYW1lJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSb2xlIG5hbWUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdG9yOiAnLmZ2LXJvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVJbnZhbGlkQ2xhc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlVmFsaWRDbGFzczogJydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQ2xvc2UgYnV0dG9uIGhhbmRsZXJcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXJvbGVzLW1vZGFsLWFjdGlvbj1cImNsb3NlXCJdJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gY2xvc2U/XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBjbG9zZSBpdCFcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCByZXR1cm5cIixcbiAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGJ0bi1hY3RpdmUtbGlnaHRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuaGlkZSgpOyAvLyBIaWRlIG1vZGFsXHRcdFx0XHRcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENhbmNlbCBidXR0b24gaGFuZGxlclxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXJvbGVzLW1vZGFsLWFjdGlvbj1cImNhbmNlbFwiXScpO1xuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBjYW5jZWw/XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBjYW5jZWwgaXQhXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJObywgcmV0dXJuXCIsXG4gICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiBcImJ0biBidG4tYWN0aXZlLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTsgLy8gUmVzZXQgZm9ybVx0XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmhpZGUoKTsgLy8gSGlkZSBtb2RhbFx0XHRcdFx0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91ciBmb3JtIGhhcyBub3QgYmVlbiBjYW5jZWxsZWQhLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICAvLyBTdWJtaXQgYnV0dG9uIGhhbmRsZXJcbiAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtcm9sZXMtbW9kYWwtYWN0aW9uPVwic3VibWl0XCJdJyk7XG4gICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBidXR0b24gYWN0aW9uXG4gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuIFxuICAgICAgICAgICAgIC8vIFZhbGlkYXRlIGZvcm0gYmVmb3JlIHN1Ym1pdFxuICAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGVkIScpO1xuIFxuICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBsb2FkaW5nIGluZGljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xuIFxuICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrIFxuICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgZm9ybSBzdWJtaXNzaW9uLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmFibGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHBvcHVwIGNvbmZpcm1hdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRm9ybSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc3VibWl0dGVkIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9ybS5zdWJtaXQoKTsgLy8gU3VibWl0IGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBwb3B1cCB3YXJuaW5nLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cbiAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvcnJ5LCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzb21lIGVycm9ycyBkZXRlY3RlZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgLy8gU2VsZWN0IGFsbCBoYW5kbGVyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0QWxsID0gKCkgPT57XG4gICAgICAgIC8vIERlZmluZSB2YXJpYWJsZXNcbiAgICAgICAgY29uc3Qgc2VsZWN0QWxsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcja3Rfcm9sZXNfc2VsZWN0X2FsbCcpO1xuICAgICAgICBjb25zdCBhbGxDaGVja2JveGVzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5cbiAgICAgICAgLy8gSGFuZGxlIGNoZWNrIHN0YXRlXG4gICAgICAgIHNlbGVjdEFsbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcblxuICAgICAgICAgICAgLy8gQXBwbHkgY2hlY2sgc3RhdGUgdG8gYWxsIGNoZWNrYm94ZXNcbiAgICAgICAgICAgIGFsbENoZWNrYm94ZXMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgICBjLmNoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBmdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW5pdEFkZFJvbGUoKTtcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdEFsbCgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUVXNlcnNBZGRSb2xlLmluaXQoKTtcbn0pOyJdLCJuYW1lcyI6WyJLVFVzZXJzQWRkUm9sZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RhbCIsImJvb3RzdHJhcCIsIk1vZGFsIiwiaW5pdEFkZFJvbGUiLCJ2YWxpZGF0b3IiLCJGb3JtVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0aW9uIiwiZmllbGRzIiwidmFsaWRhdG9ycyIsIm5vdEVtcHR5IiwibWVzc2FnZSIsInBsdWdpbnMiLCJ0cmlnZ2VyIiwiVHJpZ2dlciIsIkJvb3RzdHJhcDUiLCJyb3dTZWxlY3RvciIsImVsZUludmFsaWRDbGFzcyIsImVsZVZhbGlkQ2xhc3MiLCJjbG9zZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiaGlkZSIsInJlc2V0IiwiZGlzbWlzcyIsInN1Ym1pdEJ1dHRvbiIsInZhbGlkYXRlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInNldEF0dHJpYnV0ZSIsImRpc2FibGVkIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsImlzQ29uZmlybWVkIiwiaGFuZGxlU2VsZWN0QWxsIiwic2VsZWN0QWxsIiwiYWxsQ2hlY2tib3hlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYyIsImNoZWNrZWQiLCJ0YXJnZXQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/user-management/roles/list/add.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/user-management/roles/list/add.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=add.js.map