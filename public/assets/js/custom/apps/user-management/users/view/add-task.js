/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!******************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/user-management/users/view/add-task.js ***!
  \******************************************************************************************************/


// Class definition
var KTUsersAddTask = function () {
    // Shared variables
    const element = document.getElementById('kt_modal_add_task');
    const form = element.querySelector('#kt_modal_add_task_form');
    const modal = new bootstrap.Modal(element);

    // Init add task modal
    var initAddTask = () => {

        // Init flatpickr -- for more info: https://flatpickr.js.org/
        $("#kt_modal_add_task_datepicker").flatpickr({
            dateFormat: "Y-m-d",
        });

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        var validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'task_duedate': {
                        validators: {
                            notEmpty: {
                                message: 'Task due date is required'
                            }
                        }
                    },
                    'task_name': {
                        validators: {
                            notEmpty: {
                                message: 'Task name is required'
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
        const closeButton = element.querySelector('[data-kt-users-modal-action="close"]');
        closeButton.addEventListener('click', e => {
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

        // Cancel button handler
        const cancelButton = element.querySelector('[data-kt-users-modal-action="cancel"]');
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
        const submitButton = element.querySelector('[data-kt-users-modal-action="submit"]');
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

    // Init update task status
    var initUpdateTaskStatus = () => {
        const allTaskMenus = document.querySelectorAll('[data-kt-menu-id="kt-users-tasks"]');

        allTaskMenus.forEach(el => {
            const resetButton = el.querySelector('[data-kt-users-update-task-status="reset"]');
            const submitButton = el.querySelector('[data-kt-users-update-task-status="submit"]');
            const taskForm = el.querySelector('[data-kt-menu-id="kt-users-tasks-form"]');

            // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
            var validator = FormValidation.formValidation(
                taskForm,
                {
                    fields: {
                        'task_status': {
                            validators: {
                                notEmpty: {
                                    message: 'Task due date is required'
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

            // Revalidate country field. For more info, plase visit the official plugin site: https://select2.org/
            $(taskForm.querySelector('[name="task_status"]')).on('change', function () {
                // Revalidate the field when an option is chosen
                validator.revalidateField('task_status');
            });

            // Reset action handler
            resetButton.addEventListener('click', e => {
                e.preventDefault();

                Swal.fire({
                    text: "Are you sure you would like to reset?",
                    icon: "warning",
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonText: "Yes, reset it!",
                    cancelButtonText: "No, return",
                    customClass: {
                        confirmButton: "btn btn-primary",
                        cancelButton: "btn btn-active-light"
                    }
                }).then(function (result) {
                    if (result.value) {
                        taskForm.reset(); // Reset form		
                        el.hide();
                    } else if (result.dismiss === 'cancel') {
                        Swal.fire({
                            text: "Your form was not reset!.",
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

            // Submit action handler
            submitButton.addEventListener('click', e => {
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
                                        el.hide();
                                    }
                                });

                                //taskForm.submit(); // Submit form
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
                            }).then(function(){
                                //el.show();
                            });
                        }
                    });
                }
            });
        });
    }

    return {
        // Public functions
        init: function () {
            initAddTask();
            initUpdateTaskStatus();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTUsersAddTask.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/user-management/users/view/add-task.js":
/*!*****************************************************************************!*\
  !*** ./resources/src/js/custom/apps/user-management/users/view/add-task.js ***!
  \*****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTUsersAddTask = function () {\n  // Shared variables\n  var element = document.getElementById('kt_modal_add_task');\n  var form = element.querySelector('#kt_modal_add_task_form');\n  var modal = new bootstrap.Modal(element); // Init add task modal\n\n  var initAddTask = function initAddTask() {\n    // Init flatpickr -- for more info: https://flatpickr.js.org/\n    $(\"#kt_modal_add_task_datepicker\").flatpickr({\n      dateFormat: \"Y-m-d\"\n    }); // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        'task_duedate': {\n          validators: {\n            notEmpty: {\n              message: 'Task due date is required'\n            }\n          }\n        },\n        'task_name': {\n          validators: {\n            notEmpty: {\n              message: 'Task name is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Close button handler\n\n    var closeButton = element.querySelector('[data-kt-users-modal-action=\"close\"]');\n    closeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\t\n\n          modal.hide(); // Hide modal\t\t\t\t\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    }); // Cancel button handler\n\n    var cancelButton = element.querySelector('[data-kt-users-modal-action=\"cancel\"]');\n    cancelButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\t\n\n          modal.hide(); // Hide modal\t\t\t\t\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    }); // Submit button handler\n\n    var submitButton = element.querySelector('[data-kt-users-modal-action=\"submit\"]');\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            submitButton.disabled = true; // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            setTimeout(function () {\n              // Remove loading indication\n              submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              submitButton.disabled = false; // Show popup confirmation \n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  modal.hide();\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          } else {\n            // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }\n    });\n  }; // Init update task status\n\n\n  var initUpdateTaskStatus = function initUpdateTaskStatus() {\n    var allTaskMenus = document.querySelectorAll('[data-kt-menu-id=\"kt-users-tasks\"]');\n    allTaskMenus.forEach(function (el) {\n      var resetButton = el.querySelector('[data-kt-users-update-task-status=\"reset\"]');\n      var submitButton = el.querySelector('[data-kt-users-update-task-status=\"submit\"]');\n      var taskForm = el.querySelector('[data-kt-menu-id=\"kt-users-tasks-form\"]'); // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n      var validator = FormValidation.formValidation(taskForm, {\n        fields: {\n          'task_status': {\n            validators: {\n              notEmpty: {\n                message: 'Task due date is required'\n              }\n            }\n          }\n        },\n        plugins: {\n          trigger: new FormValidation.plugins.Trigger(),\n          bootstrap: new FormValidation.plugins.Bootstrap5({\n            rowSelector: '.fv-row',\n            eleInvalidClass: '',\n            eleValidClass: ''\n          })\n        }\n      }); // Revalidate country field. For more info, plase visit the official plugin site: https://select2.org/\n\n      $(taskForm.querySelector('[name=\"task_status\"]')).on('change', function () {\n        // Revalidate the field when an option is chosen\n        validator.revalidateField('task_status');\n      }); // Reset action handler\n\n      resetButton.addEventListener('click', function (e) {\n        e.preventDefault();\n        Swal.fire({\n          text: \"Are you sure you would like to reset?\",\n          icon: \"warning\",\n          showCancelButton: true,\n          buttonsStyling: false,\n          confirmButtonText: \"Yes, reset it!\",\n          cancelButtonText: \"No, return\",\n          customClass: {\n            confirmButton: \"btn btn-primary\",\n            cancelButton: \"btn btn-active-light\"\n          }\n        }).then(function (result) {\n          if (result.value) {\n            taskForm.reset(); // Reset form\t\t\n\n            el.hide();\n          } else if (result.dismiss === 'cancel') {\n            Swal.fire({\n              text: \"Your form was not reset!.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }); // Submit action handler\n\n      submitButton.addEventListener('click', function (e) {\n        e.preventDefault(); // Validate form before submit\n\n        if (validator) {\n          validator.validate().then(function (status) {\n            console.log('validated!');\n\n            if (status == 'Valid') {\n              // Show loading indication\n              submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n              submitButton.disabled = true; // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n              setTimeout(function () {\n                // Remove loading indication\n                submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n                submitButton.disabled = false; // Show popup confirmation \n\n                Swal.fire({\n                  text: \"Form has been successfully submitted!\",\n                  icon: \"success\",\n                  buttonsStyling: false,\n                  confirmButtonText: \"Ok, got it!\",\n                  customClass: {\n                    confirmButton: \"btn btn-primary\"\n                  }\n                }).then(function (result) {\n                  if (result.isConfirmed) {\n                    el.hide();\n                  }\n                }); //taskForm.submit(); // Submit form\n              }, 2000);\n            } else {\n              // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n              Swal.fire({\n                text: \"Sorry, looks like there are some errors detected, please try again.\",\n                icon: \"error\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }).then(function () {//el.show();\n              });\n            }\n          });\n        }\n      });\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      initAddTask();\n      initUpdateTaskStatus();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersAddTask.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy92aWV3L2FkZC10YXNrLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGNBQWMsR0FBRyxZQUFZO0FBQzdCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsbUJBQXhCLENBQWhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHSCxPQUFPLENBQUNJLGFBQVIsQ0FBc0IseUJBQXRCLENBQWI7QUFDQSxNQUFNQyxLQUFLLEdBQUcsSUFBSUMsU0FBUyxDQUFDQyxLQUFkLENBQW9CUCxPQUFwQixDQUFkLENBSjZCLENBTTdCOztBQUNBLE1BQUlRLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFFcEI7QUFDQUMsSUFBQUEsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNDLFNBQW5DLENBQTZDO0FBQ3pDQyxNQUFBQSxVQUFVLEVBQUU7QUFENkIsS0FBN0MsRUFIb0IsQ0FPcEI7O0FBQ0EsUUFBSUMsU0FBUyxHQUFHQyxjQUFjLENBQUNDLGNBQWYsQ0FDWlgsSUFEWSxFQUVaO0FBQ0lZLE1BQUFBLE1BQU0sRUFBRTtBQUNKLHdCQUFnQjtBQUNaQyxVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURIO0FBREY7QUFEQSxTQURaO0FBUUoscUJBQWE7QUFDVEYsVUFBQUEsVUFBVSxFQUFFO0FBQ1JDLFlBQUFBLFFBQVEsRUFBRTtBQUNOQyxjQUFBQSxPQUFPLEVBQUU7QUFESDtBQURGO0FBREg7QUFSVCxPQURaO0FBa0JJQyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsT0FBTyxFQUFFLElBQUlQLGNBQWMsQ0FBQ00sT0FBZixDQUF1QkUsT0FBM0IsRUFESjtBQUVMZixRQUFBQSxTQUFTLEVBQUUsSUFBSU8sY0FBYyxDQUFDTSxPQUFmLENBQXVCRyxVQUEzQixDQUFzQztB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RUFBckIsQyxDQTZUQTs7O0FBQ0FVLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ3JFLEVBQUFBLGNBQWMsQ0FBQ21FLElBQWY7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMvdmlldy9hZGQtdGFzay5qcz8wMjRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RVc2Vyc0FkZFRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2hhcmVkIHZhcmlhYmxlc1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfbW9kYWxfYWRkX3Rhc2snKTtcbiAgICBjb25zdCBmb3JtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcja3RfbW9kYWxfYWRkX3Rhc2tfZm9ybScpO1xuICAgIGNvbnN0IG1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChlbGVtZW50KTtcblxuICAgIC8vIEluaXQgYWRkIHRhc2sgbW9kYWxcbiAgICB2YXIgaW5pdEFkZFRhc2sgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gSW5pdCBmbGF0cGlja3IgLS0gZm9yIG1vcmUgaW5mbzogaHR0cHM6Ly9mbGF0cGlja3IuanMub3JnL1xuICAgICAgICAkKFwiI2t0X21vZGFsX2FkZF90YXNrX2RhdGVwaWNrZXJcIikuZmxhdHBpY2tyKHtcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiWS1tLWRcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxuICAgICAgICAgICAgZm9ybSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3Rhc2tfZHVlZGF0ZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGFzayBkdWUgZGF0ZSBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd0YXNrX25hbWUnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1Rhc2sgbmFtZSBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxuICAgICAgICAgICAgICAgICAgICBib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0b3I6ICcuZnYtcm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVWYWxpZENsYXNzOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBDbG9zZSBidXR0b24gaGFuZGxlclxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtdXNlcnMtbW9kYWwtYWN0aW9uPVwiY2xvc2VcIl0nKTtcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBjYW5jZWw/XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBjYW5jZWwgaXQhXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJObywgcmV0dXJuXCIsXG4gICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiBcImJ0biBidG4tYWN0aXZlLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTsgLy8gUmVzZXQgZm9ybVx0XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmhpZGUoKTsgLy8gSGlkZSBtb2RhbFx0XHRcdFx0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91ciBmb3JtIGhhcyBub3QgYmVlbiBjYW5jZWxsZWQhLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENhbmNlbCBidXR0b24gaGFuZGxlclxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXVzZXJzLW1vZGFsLWFjdGlvbj1cImNhbmNlbFwiXScpO1xuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBjYW5jZWw/XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBjYW5jZWwgaXQhXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJObywgcmV0dXJuXCIsXG4gICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiBcImJ0biBidG4tYWN0aXZlLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTsgLy8gUmVzZXQgZm9ybVx0XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmhpZGUoKTsgLy8gSGlkZSBtb2RhbFx0XHRcdFx0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91ciBmb3JtIGhhcyBub3QgYmVlbiBjYW5jZWxsZWQhLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN1Ym1pdCBidXR0b24gaGFuZGxlclxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXVzZXJzLW1vZGFsLWFjdGlvbj1cInN1Ym1pdFwiXScpO1xuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGJ1dHRvbiBhY3Rpb25cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gVmFsaWRhdGUgZm9ybSBiZWZvcmUgc3VibWl0XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0ZWQhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBidXR0b24gdG8gYXZvaWQgbXVsdGlwbGUgY2xpY2sgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW11bGF0ZSBmb3JtIHN1Ym1pc3Npb24uIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmFibGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHBvcHVwIGNvbmZpcm1hdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZvcm0gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9ybS5zdWJtaXQoKTsgLy8gU3VibWl0IGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBwb3B1cCB3YXJuaW5nLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJbml0IHVwZGF0ZSB0YXNrIHN0YXR1c1xuICAgIHZhciBpbml0VXBkYXRlVGFza1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsVGFza01lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEta3QtbWVudS1pZD1cImt0LXVzZXJzLXRhc2tzXCJdJyk7XG5cbiAgICAgICAgYWxsVGFza01lbnVzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSBlbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC11c2Vycy11cGRhdGUtdGFzay1zdGF0dXM9XCJyZXNldFwiXScpO1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZWwucXVlcnlTZWxlY3RvcignW2RhdGEta3QtdXNlcnMtdXBkYXRlLXRhc2stc3RhdHVzPVwic3VibWl0XCJdJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LW1lbnUtaWQ9XCJrdC11c2Vycy10YXNrcy1mb3JtXCJdJyk7XG5cbiAgICAgICAgICAgIC8vIEluaXQgZm9ybSB2YWxpZGF0aW9uIHJ1bGVzLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBGb3JtVmFsaWRhdGlvbiBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOmh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vXG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9yID0gRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgdGFza0Zvcm0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YXNrX3N0YXR1cyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGFzayBkdWUgZGF0ZSBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlVmFsaWRDbGFzczogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBSZXZhbGlkYXRlIGNvdW50cnkgZmllbGQuIEZvciBtb3JlIGluZm8sIHBsYXNlIHZpc2l0IHRoZSBvZmZpY2lhbCBwbHVnaW4gc2l0ZTogaHR0cHM6Ly9zZWxlY3QyLm9yZy9cbiAgICAgICAgICAgICQodGFza0Zvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXNrX3N0YXR1c1wiXScpKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIFJldmFsaWRhdGUgdGhlIGZpZWxkIHdoZW4gYW4gb3B0aW9uIGlzIGNob3NlblxuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5yZXZhbGlkYXRlRmllbGQoJ3Rhc2tfc3RhdHVzJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVzZXQgYWN0aW9uIGhhbmRsZXJcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gcmVzZXQ/XCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgcmVzZXQgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIHJldHVyblwiLFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLWFjdGl2ZS1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Zvcm0ucmVzZXQoKTsgLy8gUmVzZXQgZm9ybVx0XHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3VyIGZvcm0gd2FzIG5vdCByZXNldCEuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBTdWJtaXQgYWN0aW9uIGhhbmRsZXJcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIGZvcm0gYmVmb3JlIHN1Ym1pdFxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGVkIScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJywgJ29uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGJ1dHRvbiB0byBhdm9pZCBtdWx0aXBsZSBjbGljayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgZm9ybSBzdWJtaXNzaW9uLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBwb3B1cCBjb25maXJtYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZvcm0gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFza0Zvcm0uc3VibWl0KCk7IC8vIFN1Ym1pdCBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgcG9wdXAgd2FybmluZy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBmdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW5pdEFkZFRhc2soKTtcbiAgICAgICAgICAgIGluaXRVcGRhdGVUYXNrU3RhdHVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RVc2Vyc0FkZFRhc2suaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktUVXNlcnNBZGRUYXNrIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsIm1vZGFsIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJpbml0QWRkVGFzayIsIiQiLCJmbGF0cGlja3IiLCJkYXRlRm9ybWF0IiwidmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbiIsImZpZWxkcyIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJCb290c3RyYXA1Iiwicm93U2VsZWN0b3IiLCJlbGVJbnZhbGlkQ2xhc3MiLCJlbGVWYWxpZENsYXNzIiwiY2xvc2VCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsInJlc2V0IiwiaGlkZSIsImRpc21pc3MiLCJzdWJtaXRCdXR0b24iLCJ2YWxpZGF0ZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpc0NvbmZpcm1lZCIsImluaXRVcGRhdGVUYXNrU3RhdHVzIiwiYWxsVGFza01lbnVzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInJlc2V0QnV0dG9uIiwidGFza0Zvcm0iLCJvbiIsInJldmFsaWRhdGVGaWVsZCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/user-management/users/view/add-task.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/user-management/users/view/add-task.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=add-task.js.map