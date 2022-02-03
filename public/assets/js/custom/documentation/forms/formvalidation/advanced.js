/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!***********************************************************************!*\
  !*** ../src/js/custom/documentation/forms/formvalidation/advanced.js ***!
  \***********************************************************************/


// Class definition
var KTFormValidationDemoAdvanced = function () {

    // Private functions
    var exampleAdvanced = function () {
        // Define form element
        const form = document.getElementById('kt_docs_formvalidation_advanced');

        // Init daterangepicker --- for more info, please visit: https://www.daterangepicker.com/
        $("#kt_daterangepicker").daterangepicker();

        // Init flatpickr --- for more info, please visit: https://flatpickr.js.org/
        $("#kt_flatpickr").flatpickr();

        // Init tagify --- for more info, please visit: https://yaireo.github.io/tagify/
        new Tagify(document.querySelector("#kt_tagify"), {
            whitelist: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7", "Tag 8", "Tag 9", "Tag 10", "Tag 11", "Tag 12"],
            maxTags: 6,
            dropdown: {
                maxItems: 20,           // <- mixumum allowed rendered suggestions
                classname: "tagify__inline__suggestions", // <- custom classname for this dropdown, so it could be targeted
                enabled: 0,             // <- show suggestions on focus
                closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
            }
        });


        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        var validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'daterangepicker_input': {
                        validators: {
                            notEmpty: {
                                message: 'Date range input is required'
                            }
                        }
                    },
                    'flatpickr_input': {
                        validators: {
                            date: {
                                format: 'YYYY-MM-DD',
                                message: 'The value is not a valid date',
                            },
                            notEmpty: {
                                message: 'Flatpickr input is required'
                            }
                        }
                    },
                    'avatar': {
                        validators: {
                            notEmpty: {
                                message: 'Please select an image'
                            },
                            file: {
                                extension: 'jpg,jpeg,png',
                                type: 'image/jpeg,image/png',
                                message: 'The selected file is not valid'
                            },
                        }
                    },
                    'select2_input': {
                        validators: {
                            notEmpty: {
                                message: 'Select2 input is required'
                            }
                        }
                    },
                    'tagify_input': {
                        validators: {
                            notEmpty: {
                                message: 'Tagify input is required'
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

        // Revalidate Select2 input. For more info, plase visit the official plugin site: https://select2.org/
        $(form.querySelector('[name="select2_input"]')).on('change', function () {
            // Revalidate the field when an option is chosen
            validator.revalidateField('select2_input');
        });

        // Submit button handler
        const submitButton = document.getElementById('kt_docs_formvalidation_submit');
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
                            });

                            //form.submit(); // Submit form
                        }, 2000);
                    }
                });
            }
        });
    }

    var exampleDateRangePicker = function () {
        // Define form element
        const form = document.getElementById('kt_docs_formvalidation_daterangepicker');

        // Init daterangepicker --- for more info, please visit: https://www.daterangepicker.com/
        $("#kt_daterangepicker").daterangepicker();

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        var validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'daterangepicker_input': {
                        validators: {
                            notEmpty: {
                                message: 'Date range input is required'
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

        // Submit button handler
        const submitButton = document.getElementById('kt_docs_formvalidation_daterangepicker_submit');
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
                            });

                            //form.submit(); // Submit form
                        }, 2000);
                    }
                });
            }
        });
    }

    var exampleFlatpickr = function () {
        // Define form element
        const form = document.getElementById('kt_docs_formvalidation_flatpickr');

        // Init flatpickr --- for more info, please visit: https://flatpickr.js.org/
        $("#kt_flatpickr").flatpickr();

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        var validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'flatpickr_input': {
                        validators: {
                            date: {
                                format: 'YYYY-MM-DD',
                                message: 'The value is not a valid date',
                            },
                            notEmpty: {
                                message: 'Flatpickr input is required'
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

        // Submit button handler
        const submitButton = document.getElementById('kt_docs_formvalidation_flatpickr_submit');
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
                            });

                            //form.submit(); // Submit form
                        }, 2000);
                    }
                });
            }
        });
    }

    var exampleImageInput = function () {
        // Define form element
        const form = document.getElementById('kt_docs_formvalidation_image_input');

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        var validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'avatar': {
                        validators: {
                            notEmpty: {
                                message: 'Please select an image'
                            },
                            file: {
                                extension: 'jpg,jpeg,png',
                                type: 'image/jpeg,image/png',
                                message: 'The selected file is not valid'
                            },
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

        // Submit button handler
        const submitButton = document.getElementById('kt_docs_formvalidation_image_input_submit');
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
                            });

                            //form.submit(); // Submit form
                        }, 2000);
                    }
                });
            }
        });
    }

    var examplePassword = function () {
        // Define form element
        const form = document.getElementById('kt_docs_formvalidation_password');

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        var validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'current_password': {
                        validators: {
                            notEmpty: {
                                message: 'Current password is required'
                            }
                        }
                    },
                    'new_password': {
                        validators: {
                            notEmpty: {
                                message: 'The password is required'
                            },
                            callback: {
                                message: 'Please enter valid password',
                                callback: function (input) {
                                    if (input.value.length > 0) {
                                        return validatePassword();
                                    }
                                }
                            }
                        }
                    },
                    'confirm_password': {
                        validators: {
                            notEmpty: {
                                message: 'The password confirmation is required'
                            },
                            identical: {
                                compare: function () {
                                    return form.querySelector('[name="new_password"]').value;
                                },
                                message: 'The password and its confirm are not the same'
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

        // Submit button handler
        const submitButton = document.getElementById('kt_docs_formvalidation_password_submit');
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
                            });

                            //form.submit(); // Submit form
                        }, 2000);
                    }
                });
            }
        });
    }

    var exampleSelect2 = function () {
        // Define form element
        const form = document.getElementById('kt_docs_formvalidation_select2');

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        var validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'select2_input': {
                        validators: {
                            notEmpty: {
                                message: 'Select2 input is required'
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

        // Revalidate Select2 input. For more info, plase visit the official plugin site: https://select2.org/
        $(form.querySelector('[name="select2_input"]')).on('change', function () {
            // Revalidate the field when an option is chosen
            validator.revalidateField('select2_input');
        });

        // Submit button handler
        const submitButton = document.getElementById('kt_docs_formvalidation_select2_submit');
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
                            });

                            //form.submit(); // Submit form
                        }, 2000);
                    }
                });
            }
        });
    }

    var exampleTagify = function () {
        // Define form element
        const form = document.getElementById('kt_docs_formvalidation_tagify');

        // Init tagify --- for more info, please visit: https://yaireo.github.io/tagify/
        new Tagify(document.querySelector("#kt_tagify"), {
            whitelist: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7", "Tag 8", "Tag 9", "Tag 10", "Tag 11", "Tag 12"],
            maxTags: 6,
            dropdown: {
                maxItems: 20,           // <- mixumum allowed rendered suggestions
                classname: "tagify__inline__suggestions", // <- custom classname for this dropdown, so it could be targeted
                enabled: 0,             // <- show suggestions on focus
                closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
            }
        });

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        var validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'tagify_input': {
                        validators: {
                            notEmpty: {
                                message: 'Tagify input is required'
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

        // Submit button handler
        const submitButton = document.getElementById('kt_docs_formvalidation_tagify_submit');
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
                            });

                            //form.submit(); // Submit form
                        }, 2000);
                    }
                });
            }
        });
    }

    return {
        // Public Functions
        init: function () {
            exampleDateRangePicker();
            exampleFlatpickr();
            exampleImageInput();
            examplePassword();
            exampleSelect2();
            exampleTagify();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormValidationDemoAdvanced.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/formvalidation/advanced.js":
/*!********************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/formvalidation/advanced.js ***!
  \********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormValidationDemoAdvanced = function () {\n  // Private functions\n  var exampleAdvanced = function exampleAdvanced() {\n    // Define form element\n    var form = document.getElementById('kt_docs_formvalidation_advanced'); // Init daterangepicker --- for more info, please visit: https://www.daterangepicker.com/\n\n    $(\"#kt_daterangepicker\").daterangepicker(); // Init flatpickr --- for more info, please visit: https://flatpickr.js.org/\n\n    $(\"#kt_flatpickr\").flatpickr(); // Init tagify --- for more info, please visit: https://yaireo.github.io/tagify/\n\n    new Tagify(document.querySelector(\"#kt_tagify\"), {\n      whitelist: [\"Tag 1\", \"Tag 2\", \"Tag 3\", \"Tag 4\", \"Tag 5\", \"Tag 6\", \"Tag 7\", \"Tag 8\", \"Tag 9\", \"Tag 10\", \"Tag 11\", \"Tag 12\"],\n      maxTags: 6,\n      dropdown: {\n        maxItems: 20,\n        // <- mixumum allowed rendered suggestions\n        classname: \"tagify__inline__suggestions\",\n        // <- custom classname for this dropdown, so it could be targeted\n        enabled: 0,\n        // <- show suggestions on focus\n        closeOnSelect: false // <- do not hide the suggestions dropdown once an item has been selected\n\n      }\n    }); // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        'daterangepicker_input': {\n          validators: {\n            notEmpty: {\n              message: 'Date range input is required'\n            }\n          }\n        },\n        'flatpickr_input': {\n          validators: {\n            date: {\n              format: 'YYYY-MM-DD',\n              message: 'The value is not a valid date'\n            },\n            notEmpty: {\n              message: 'Flatpickr input is required'\n            }\n          }\n        },\n        'avatar': {\n          validators: {\n            notEmpty: {\n              message: 'Please select an image'\n            },\n            file: {\n              extension: 'jpg,jpeg,png',\n              type: 'image/jpeg,image/png',\n              message: 'The selected file is not valid'\n            }\n          }\n        },\n        'select2_input': {\n          validators: {\n            notEmpty: {\n              message: 'Select2 input is required'\n            }\n          }\n        },\n        'tagify_input': {\n          validators: {\n            notEmpty: {\n              message: 'Tagify input is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Revalidate Select2 input. For more info, plase visit the official plugin site: https://select2.org/\n\n    $(form.querySelector('[name=\"select2_input\"]')).on('change', function () {\n      // Revalidate the field when an option is chosen\n      validator.revalidateField('select2_input');\n    }); // Submit button handler\n\n    var submitButton = document.getElementById('kt_docs_formvalidation_submit');\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            submitButton.disabled = true; // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            setTimeout(function () {\n              // Remove loading indication\n              submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              submitButton.disabled = false; // Show popup confirmation \n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          }\n        });\n      }\n    });\n  };\n\n  var exampleDateRangePicker = function exampleDateRangePicker() {\n    // Define form element\n    var form = document.getElementById('kt_docs_formvalidation_daterangepicker'); // Init daterangepicker --- for more info, please visit: https://www.daterangepicker.com/\n\n    $(\"#kt_daterangepicker\").daterangepicker(); // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        'daterangepicker_input': {\n          validators: {\n            notEmpty: {\n              message: 'Date range input is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Submit button handler\n\n    var submitButton = document.getElementById('kt_docs_formvalidation_daterangepicker_submit');\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            submitButton.disabled = true; // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            setTimeout(function () {\n              // Remove loading indication\n              submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              submitButton.disabled = false; // Show popup confirmation \n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          }\n        });\n      }\n    });\n  };\n\n  var exampleFlatpickr = function exampleFlatpickr() {\n    // Define form element\n    var form = document.getElementById('kt_docs_formvalidation_flatpickr'); // Init flatpickr --- for more info, please visit: https://flatpickr.js.org/\n\n    $(\"#kt_flatpickr\").flatpickr(); // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        'flatpickr_input': {\n          validators: {\n            date: {\n              format: 'YYYY-MM-DD',\n              message: 'The value is not a valid date'\n            },\n            notEmpty: {\n              message: 'Flatpickr input is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Submit button handler\n\n    var submitButton = document.getElementById('kt_docs_formvalidation_flatpickr_submit');\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            submitButton.disabled = true; // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            setTimeout(function () {\n              // Remove loading indication\n              submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              submitButton.disabled = false; // Show popup confirmation \n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          }\n        });\n      }\n    });\n  };\n\n  var exampleImageInput = function exampleImageInput() {\n    // Define form element\n    var form = document.getElementById('kt_docs_formvalidation_image_input'); // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        'avatar': {\n          validators: {\n            notEmpty: {\n              message: 'Please select an image'\n            },\n            file: {\n              extension: 'jpg,jpeg,png',\n              type: 'image/jpeg,image/png',\n              message: 'The selected file is not valid'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Submit button handler\n\n    var submitButton = document.getElementById('kt_docs_formvalidation_image_input_submit');\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            submitButton.disabled = true; // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            setTimeout(function () {\n              // Remove loading indication\n              submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              submitButton.disabled = false; // Show popup confirmation \n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          }\n        });\n      }\n    });\n  };\n\n  var examplePassword = function examplePassword() {\n    // Define form element\n    var form = document.getElementById('kt_docs_formvalidation_password'); // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        'current_password': {\n          validators: {\n            notEmpty: {\n              message: 'Current password is required'\n            }\n          }\n        },\n        'new_password': {\n          validators: {\n            notEmpty: {\n              message: 'The password is required'\n            },\n            callback: {\n              message: 'Please enter valid password',\n              callback: function callback(input) {\n                if (input.value.length > 0) {\n                  return validatePassword();\n                }\n              }\n            }\n          }\n        },\n        'confirm_password': {\n          validators: {\n            notEmpty: {\n              message: 'The password confirmation is required'\n            },\n            identical: {\n              compare: function compare() {\n                return form.querySelector('[name=\"new_password\"]').value;\n              },\n              message: 'The password and its confirm are not the same'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Submit button handler\n\n    var submitButton = document.getElementById('kt_docs_formvalidation_password_submit');\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            submitButton.disabled = true; // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            setTimeout(function () {\n              // Remove loading indication\n              submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              submitButton.disabled = false; // Show popup confirmation \n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          }\n        });\n      }\n    });\n  };\n\n  var exampleSelect2 = function exampleSelect2() {\n    // Define form element\n    var form = document.getElementById('kt_docs_formvalidation_select2'); // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        'select2_input': {\n          validators: {\n            notEmpty: {\n              message: 'Select2 input is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Revalidate Select2 input. For more info, plase visit the official plugin site: https://select2.org/\n\n    $(form.querySelector('[name=\"select2_input\"]')).on('change', function () {\n      // Revalidate the field when an option is chosen\n      validator.revalidateField('select2_input');\n    }); // Submit button handler\n\n    var submitButton = document.getElementById('kt_docs_formvalidation_select2_submit');\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            submitButton.disabled = true; // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            setTimeout(function () {\n              // Remove loading indication\n              submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              submitButton.disabled = false; // Show popup confirmation \n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          }\n        });\n      }\n    });\n  };\n\n  var exampleTagify = function exampleTagify() {\n    // Define form element\n    var form = document.getElementById('kt_docs_formvalidation_tagify'); // Init tagify --- for more info, please visit: https://yaireo.github.io/tagify/\n\n    new Tagify(document.querySelector(\"#kt_tagify\"), {\n      whitelist: [\"Tag 1\", \"Tag 2\", \"Tag 3\", \"Tag 4\", \"Tag 5\", \"Tag 6\", \"Tag 7\", \"Tag 8\", \"Tag 9\", \"Tag 10\", \"Tag 11\", \"Tag 12\"],\n      maxTags: 6,\n      dropdown: {\n        maxItems: 20,\n        // <- mixumum allowed rendered suggestions\n        classname: \"tagify__inline__suggestions\",\n        // <- custom classname for this dropdown, so it could be targeted\n        enabled: 0,\n        // <- show suggestions on focus\n        closeOnSelect: false // <- do not hide the suggestions dropdown once an item has been selected\n\n      }\n    }); // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        'tagify_input': {\n          validators: {\n            notEmpty: {\n              message: 'Tagify input is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Submit button handler\n\n    var submitButton = document.getElementById('kt_docs_formvalidation_tagify_submit');\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            submitButton.disabled = true; // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            setTimeout(function () {\n              // Remove loading indication\n              submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              submitButton.disabled = false; // Show popup confirmation \n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          }\n        });\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleDateRangePicker();\n      exampleFlatpickr();\n      exampleImageInput();\n      examplePassword();\n      exampleSelect2();\n      exampleTagify();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormValidationDemoAdvanced.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2Zvcm12YWxpZGF0aW9uL2FkdmFuY2VkLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLDRCQUE0QixHQUFHLFlBQVk7QUFFM0M7QUFDQSxNQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVk7QUFDOUI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQ0FBeEIsQ0FBYixDQUY4QixDQUk5Qjs7QUFDQUMsSUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJDLGVBQXpCLEdBTDhCLENBTzlCOztBQUNBRCxJQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CRSxTQUFuQixHQVI4QixDQVU5Qjs7QUFDQSxRQUFJQyxNQUFKLENBQVdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixZQUF2QixDQUFYLEVBQWlEO0FBQzdDQyxNQUFBQSxTQUFTLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQyxPQUFyQyxFQUE4QyxPQUE5QyxFQUF1RCxPQUF2RCxFQUFnRSxPQUFoRSxFQUF5RSxPQUF6RSxFQUFrRixRQUFsRixFQUE0RixRQUE1RixFQUFzRyxRQUF0RyxDQURrQztBQUU3Q0MsTUFBQUEsT0FBTyxFQUFFLENBRm9DO0FBRzdDQyxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsUUFBUSxFQUFFLEVBREo7QUFDa0I7QUFDeEJDLFFBQUFBLFNBQVMsRUFBRSw2QkFGTDtBQUVvQztBQUMxQ0MsUUFBQUEsT0FBTyxFQUFFLENBSEg7QUFHa0I7QUFDeEJDLFFBQUFBLGFBQWEsRUFBRSxLQUpULENBSWtCOztBQUpsQjtBQUhtQyxLQUFqRCxFQVg4QixDQXVCOUI7O0FBQ0EsUUFBSUMsU0FBUyxHQUFHQyxjQUFjLENBQUNDLGNBQWYsQ0FDWmpCLElBRFksRUFFWjtBQUNJa0IsTUFBQUEs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IjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2Zvcm12YWxpZGF0aW9uL2FkdmFuY2VkLmpzPzQ2ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZvcm1WYWxpZGF0aW9uRGVtb0FkdmFuY2VkID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUFkdmFuY2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEZWZpbmUgZm9ybSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19mb3JtdmFsaWRhdGlvbl9hZHZhbmNlZCcpO1xuXG4gICAgICAgIC8vIEluaXQgZGF0ZXJhbmdlcGlja2VyIC0tLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQ6IGh0dHBzOi8vd3d3LmRhdGVyYW5nZXBpY2tlci5jb20vXG4gICAgICAgICQoXCIja3RfZGF0ZXJhbmdlcGlja2VyXCIpLmRhdGVyYW5nZXBpY2tlcigpO1xuXG4gICAgICAgIC8vIEluaXQgZmxhdHBpY2tyIC0tLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQ6IGh0dHBzOi8vZmxhdHBpY2tyLmpzLm9yZy9cbiAgICAgICAgJChcIiNrdF9mbGF0cGlja3JcIikuZmxhdHBpY2tyKCk7XG5cbiAgICAgICAgLy8gSW5pdCB0YWdpZnkgLS0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdDogaHR0cHM6Ly95YWlyZW8uZ2l0aHViLmlvL3RhZ2lmeS9cbiAgICAgICAgbmV3IFRhZ2lmeShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X3RhZ2lmeVwiKSwge1xuICAgICAgICAgICAgd2hpdGVsaXN0OiBbXCJUYWcgMVwiLCBcIlRhZyAyXCIsIFwiVGFnIDNcIiwgXCJUYWcgNFwiLCBcIlRhZyA1XCIsIFwiVGFnIDZcIiwgXCJUYWcgN1wiLCBcIlRhZyA4XCIsIFwiVGFnIDlcIiwgXCJUYWcgMTBcIiwgXCJUYWcgMTFcIiwgXCJUYWcgMTJcIl0sXG4gICAgICAgICAgICBtYXhUYWdzOiA2LFxuICAgICAgICAgICAgZHJvcGRvd246IHtcbiAgICAgICAgICAgICAgICBtYXhJdGVtczogMjAsICAgICAgICAgICAvLyA8LSBtaXh1bXVtIGFsbG93ZWQgcmVuZGVyZWQgc3VnZ2VzdGlvbnNcbiAgICAgICAgICAgICAgICBjbGFzc25hbWU6IFwidGFnaWZ5X19pbmxpbmVfX3N1Z2dlc3Rpb25zXCIsIC8vIDwtIGN1c3RvbSBjbGFzc25hbWUgZm9yIHRoaXMgZHJvcGRvd24sIHNvIGl0IGNvdWxkIGJlIHRhcmdldGVkXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogMCwgICAgICAgICAgICAgLy8gPC0gc2hvdyBzdWdnZXN0aW9ucyBvbiBmb2N1c1xuICAgICAgICAgICAgICAgIGNsb3NlT25TZWxlY3Q6IGZhbHNlICAgIC8vIDwtIGRvIG5vdCBoaWRlIHRoZSBzdWdnZXN0aW9ucyBkcm9wZG93biBvbmNlIGFuIGl0ZW0gaGFzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyBJbml0IGZvcm0gdmFsaWRhdGlvbiBydWxlcy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgRm9ybVZhbGlkYXRpb24gcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjpodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL1xuICAgICAgICB2YXIgdmFsaWRhdG9yID0gRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXG4gICAgICAgICAgICBmb3JtLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICAnZGF0ZXJhbmdlcGlja2VyX2lucHV0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdEYXRlIHJhbmdlIGlucHV0IGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ2ZsYXRwaWNrcl9pbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHZhbHVlIGlzIG5vdCBhIHZhbGlkIGRhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0ZsYXRwaWNrciBpbnB1dCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdhdmF0YXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgYW4gaW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogJ2pwZyxqcGVnLHBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9qcGVnLGltYWdlL3BuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgc2VsZWN0ZWQgZmlsZSBpcyBub3QgdmFsaWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdDJfaW5wdXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlbGVjdDIgaW5wdXQgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndGFnaWZ5X2lucHV0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUYWdpZnkgaW5wdXQgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdG9yOiAnLmZ2LXJvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVJbnZhbGlkQ2xhc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlVmFsaWRDbGFzczogJydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gUmV2YWxpZGF0ZSBTZWxlY3QyIGlucHV0LiBGb3IgbW9yZSBpbmZvLCBwbGFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgcGx1Z2luIHNpdGU6IGh0dHBzOi8vc2VsZWN0Mi5vcmcvXG4gICAgICAgICQoZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInNlbGVjdDJfaW5wdXRcIl0nKSkub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJldmFsaWRhdGUgdGhlIGZpZWxkIHdoZW4gYW4gb3B0aW9uIGlzIGNob3NlblxuICAgICAgICAgICAgdmFsaWRhdG9yLnJldmFsaWRhdGVGaWVsZCgnc2VsZWN0Ml9pbnB1dCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdWJtaXQgYnV0dG9uIGhhbmRsZXJcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZm9ybXZhbGlkYXRpb25fc3VibWl0Jyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYnV0dG9uIGFjdGlvblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBmb3JtIGJlZm9yZSBzdWJtaXRcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlZCEnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGJ1dHRvbiB0byBhdm9pZCBtdWx0aXBsZSBjbGljayBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIGZvcm0gc3VibWlzc2lvbi4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgcG9wdXAgY29uZmlybWF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRm9ybSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc3VibWl0dGVkIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Zvcm0uc3VibWl0KCk7IC8vIFN1Ym1pdCBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZURhdGVSYW5nZVBpY2tlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGVmaW5lIGZvcm0gZWxlbWVudFxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZm9ybXZhbGlkYXRpb25fZGF0ZXJhbmdlcGlja2VyJyk7XG5cbiAgICAgICAgLy8gSW5pdCBkYXRlcmFuZ2VwaWNrZXIgLS0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdDogaHR0cHM6Ly93d3cuZGF0ZXJhbmdlcGlja2VyLmNvbS9cbiAgICAgICAgJChcIiNrdF9kYXRlcmFuZ2VwaWNrZXJcIikuZGF0ZXJhbmdlcGlja2VyKCk7XG5cbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxuICAgICAgICAgICAgZm9ybSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGVyYW5nZXBpY2tlcl9pbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRGF0ZSByYW5nZSBpbnB1dCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxuICAgICAgICAgICAgICAgICAgICBib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0b3I6ICcuZnYtcm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVWYWxpZENsYXNzOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBTdWJtaXQgYnV0dG9uIGhhbmRsZXJcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZm9ybXZhbGlkYXRpb25fZGF0ZXJhbmdlcGlja2VyX3N1Ym1pdCcpO1xuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGJ1dHRvbiBhY3Rpb25cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gVmFsaWRhdGUgZm9ybSBiZWZvcmUgc3VibWl0XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0ZWQhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBidXR0b24gdG8gYXZvaWQgbXVsdGlwbGUgY2xpY2sgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW11bGF0ZSBmb3JtIHN1Ym1pc3Npb24uIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmFibGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHBvcHVwIGNvbmZpcm1hdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZvcm0gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mb3JtLnN1Ym1pdCgpOyAvLyBTdWJtaXQgZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGV4YW1wbGVGbGF0cGlja3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERlZmluZSBmb3JtIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9kb2NzX2Zvcm12YWxpZGF0aW9uX2ZsYXRwaWNrcicpO1xuXG4gICAgICAgIC8vIEluaXQgZmxhdHBpY2tyIC0tLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQ6IGh0dHBzOi8vZmxhdHBpY2tyLmpzLm9yZy9cbiAgICAgICAgJChcIiNrdF9mbGF0cGlja3JcIikuZmxhdHBpY2tyKCk7XG5cbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxuICAgICAgICAgICAgZm9ybSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZsYXRwaWNrcl9pbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJ1lZWVktTU0tREQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHZhbHVlIGlzIG5vdCBhIHZhbGlkIGRhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0ZsYXRwaWNrciBpbnB1dCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxuICAgICAgICAgICAgICAgICAgICBib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0b3I6ICcuZnYtcm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVWYWxpZENsYXNzOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBTdWJtaXQgYnV0dG9uIGhhbmRsZXJcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZm9ybXZhbGlkYXRpb25fZmxhdHBpY2tyX3N1Ym1pdCcpO1xuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGJ1dHRvbiBhY3Rpb25cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gVmFsaWRhdGUgZm9ybSBiZWZvcmUgc3VibWl0XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0ZWQhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBidXR0b24gdG8gYXZvaWQgbXVsdGlwbGUgY2xpY2sgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW11bGF0ZSBmb3JtIHN1Ym1pc3Npb24uIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmFibGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHBvcHVwIGNvbmZpcm1hdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZvcm0gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mb3JtLnN1Ym1pdCgpOyAvLyBTdWJtaXQgZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGV4YW1wbGVJbWFnZUlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEZWZpbmUgZm9ybSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19mb3JtdmFsaWRhdGlvbl9pbWFnZV9pbnB1dCcpO1xuXG4gICAgICAgIC8vIEluaXQgZm9ybSB2YWxpZGF0aW9uIHJ1bGVzLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBGb3JtVmFsaWRhdGlvbiBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOmh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vXG4gICAgICAgIHZhciB2YWxpZGF0b3IgPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcbiAgICAgICAgICAgIGZvcm0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgICdhdmF0YXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgYW4gaW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogJ2pwZyxqcGVnLHBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9qcGVnLGltYWdlL3BuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgc2VsZWN0ZWQgZmlsZSBpcyBub3QgdmFsaWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXG4gICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFN1Ym1pdCBidXR0b24gaGFuZGxlclxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19mb3JtdmFsaWRhdGlvbl9pbWFnZV9pbnB1dF9zdWJtaXQnKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBidXR0b24gYWN0aW9uXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIFZhbGlkYXRlIGZvcm0gYmVmb3JlIHN1Ym1pdFxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGVkIScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gJ1ZhbGlkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBsb2FkaW5nIGluZGljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJywgJ29uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgZm9ybSBzdWJtaXNzaW9uLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBsb2FkaW5nIGluZGljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBwb3B1cCBjb25maXJtYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJGb3JtIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9ybS5zdWJtaXQoKTsgLy8gU3VibWl0IGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlUGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERlZmluZSBmb3JtIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9kb2NzX2Zvcm12YWxpZGF0aW9uX3Bhc3N3b3JkJyk7XG5cbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxuICAgICAgICAgICAgZm9ybSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2N1cnJlbnRfcGFzc3dvcmQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0N1cnJlbnQgcGFzc3dvcmQgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnbmV3X3Bhc3N3b3JkJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgcGFzc3dvcmQgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHZhbGlkIHBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVQYXNzd29yZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnY29uZmlybV9wYXNzd29yZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aWNhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIm5ld19wYXNzd29yZFwiXScpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybSBhcmUgbm90IHRoZSBzYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXG4gICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFN1Ym1pdCBidXR0b24gaGFuZGxlclxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19mb3JtdmFsaWRhdGlvbl9wYXNzd29yZF9zdWJtaXQnKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBidXR0b24gYWN0aW9uXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIFZhbGlkYXRlIGZvcm0gYmVmb3JlIHN1Ym1pdFxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGVkIScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gJ1ZhbGlkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBsb2FkaW5nIGluZGljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJywgJ29uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgZm9ybSBzdWJtaXNzaW9uLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBsb2FkaW5nIGluZGljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBwb3B1cCBjb25maXJtYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJGb3JtIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9ybS5zdWJtaXQoKTsgLy8gU3VibWl0IGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlU2VsZWN0MiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGVmaW5lIGZvcm0gZWxlbWVudFxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZm9ybXZhbGlkYXRpb25fc2VsZWN0MicpO1xuXG4gICAgICAgIC8vIEluaXQgZm9ybSB2YWxpZGF0aW9uIHJ1bGVzLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBGb3JtVmFsaWRhdGlvbiBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOmh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vXG4gICAgICAgIHZhciB2YWxpZGF0b3IgPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcbiAgICAgICAgICAgIGZvcm0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgICdzZWxlY3QyX2lucHV0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZWxlY3QyIGlucHV0IGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXG4gICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFJldmFsaWRhdGUgU2VsZWN0MiBpbnB1dC4gRm9yIG1vcmUgaW5mbywgcGxhc2UgdmlzaXQgdGhlIG9mZmljaWFsIHBsdWdpbiBzaXRlOiBodHRwczovL3NlbGVjdDIub3JnL1xuICAgICAgICAkKGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJzZWxlY3QyX2lucHV0XCJdJykpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZXZhbGlkYXRlIHRoZSBmaWVsZCB3aGVuIGFuIG9wdGlvbiBpcyBjaG9zZW5cbiAgICAgICAgICAgIHZhbGlkYXRvci5yZXZhbGlkYXRlRmllbGQoJ3NlbGVjdDJfaW5wdXQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3VibWl0IGJ1dHRvbiBoYW5kbGVyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9kb2NzX2Zvcm12YWxpZGF0aW9uX3NlbGVjdDJfc3VibWl0Jyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYnV0dG9uIGFjdGlvblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBmb3JtIGJlZm9yZSBzdWJtaXRcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlZCEnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGJ1dHRvbiB0byBhdm9pZCBtdWx0aXBsZSBjbGljayBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIGZvcm0gc3VibWlzc2lvbi4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgcG9wdXAgY29uZmlybWF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRm9ybSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc3VibWl0dGVkIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Zvcm0uc3VibWl0KCk7IC8vIFN1Ym1pdCBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZVRhZ2lmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGVmaW5lIGZvcm0gZWxlbWVudFxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZm9ybXZhbGlkYXRpb25fdGFnaWZ5Jyk7XG5cbiAgICAgICAgLy8gSW5pdCB0YWdpZnkgLS0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdDogaHR0cHM6Ly95YWlyZW8uZ2l0aHViLmlvL3RhZ2lmeS9cbiAgICAgICAgbmV3IFRhZ2lmeShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X3RhZ2lmeVwiKSwge1xuICAgICAgICAgICAgd2hpdGVsaXN0OiBbXCJUYWcgMVwiLCBcIlRhZyAyXCIsIFwiVGFnIDNcIiwgXCJUYWcgNFwiLCBcIlRhZyA1XCIsIFwiVGFnIDZcIiwgXCJUYWcgN1wiLCBcIlRhZyA4XCIsIFwiVGFnIDlcIiwgXCJUYWcgMTBcIiwgXCJUYWcgMTFcIiwgXCJUYWcgMTJcIl0sXG4gICAgICAgICAgICBtYXhUYWdzOiA2LFxuICAgICAgICAgICAgZHJvcGRvd246IHtcbiAgICAgICAgICAgICAgICBtYXhJdGVtczogMjAsICAgICAgICAgICAvLyA8LSBtaXh1bXVtIGFsbG93ZWQgcmVuZGVyZWQgc3VnZ2VzdGlvbnNcbiAgICAgICAgICAgICAgICBjbGFzc25hbWU6IFwidGFnaWZ5X19pbmxpbmVfX3N1Z2dlc3Rpb25zXCIsIC8vIDwtIGN1c3RvbSBjbGFzc25hbWUgZm9yIHRoaXMgZHJvcGRvd24sIHNvIGl0IGNvdWxkIGJlIHRhcmdldGVkXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogMCwgICAgICAgICAgICAgLy8gPC0gc2hvdyBzdWdnZXN0aW9ucyBvbiBmb2N1c1xuICAgICAgICAgICAgICAgIGNsb3NlT25TZWxlY3Q6IGZhbHNlICAgIC8vIDwtIGRvIG5vdCBoaWRlIHRoZSBzdWdnZXN0aW9ucyBkcm9wZG93biBvbmNlIGFuIGl0ZW0gaGFzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxuICAgICAgICAgICAgZm9ybSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ2lmeV9pbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGFnaWZ5IGlucHV0IGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXG4gICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFN1Ym1pdCBidXR0b24gaGFuZGxlclxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19mb3JtdmFsaWRhdGlvbl90YWdpZnlfc3VibWl0Jyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYnV0dG9uIGFjdGlvblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBmb3JtIGJlZm9yZSBzdWJtaXRcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlZCEnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGJ1dHRvbiB0byBhdm9pZCBtdWx0aXBsZSBjbGljayBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIGZvcm0gc3VibWlzc2lvbi4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgcG9wdXAgY29uZmlybWF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRm9ybSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc3VibWl0dGVkIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Zvcm0uc3VibWl0KCk7IC8vIFN1Ym1pdCBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGVEYXRlUmFuZ2VQaWNrZXIoKTtcbiAgICAgICAgICAgIGV4YW1wbGVGbGF0cGlja3IoKTtcbiAgICAgICAgICAgIGV4YW1wbGVJbWFnZUlucHV0KCk7XG4gICAgICAgICAgICBleGFtcGxlUGFzc3dvcmQoKTtcbiAgICAgICAgICAgIGV4YW1wbGVTZWxlY3QyKCk7XG4gICAgICAgICAgICBleGFtcGxlVGFnaWZ5KCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RGb3JtVmFsaWRhdGlvbkRlbW9BZHZhbmNlZC5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEZvcm1WYWxpZGF0aW9uRGVtb0FkdmFuY2VkIiwiZXhhbXBsZUFkdmFuY2VkIiwiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCIkIiwiZGF0ZXJhbmdlcGlja2VyIiwiZmxhdHBpY2tyIiwiVGFnaWZ5IiwicXVlcnlTZWxlY3RvciIsIndoaXRlbGlzdCIsIm1heFRhZ3MiLCJkcm9wZG93biIsIm1heEl0ZW1zIiwiY2xhc3NuYW1lIiwiZW5hYmxlZCIsImNsb3NlT25TZWxlY3QiLCJ2YWxpZGF0b3IiLCJGb3JtVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0aW9uIiwiZmllbGRzIiwidmFsaWRhdG9ycyIsIm5vdEVtcHR5IiwibWVzc2FnZSIsImRhdGUiLCJmb3JtYXQiLCJmaWxlIiwiZXh0ZW5zaW9uIiwidHlwZSIsInBsdWdpbnMiLCJ0cmlnZ2VyIiwiVHJpZ2dlciIsImJvb3RzdHJhcCIsIkJvb3RzdHJhcDUiLCJyb3dTZWxlY3RvciIsImVsZUludmFsaWRDbGFzcyIsImVsZVZhbGlkQ2xhc3MiLCJvbiIsInJldmFsaWRhdGVGaWVsZCIsInN1Ym1pdEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZSIsInRoZW4iLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJleGFtcGxlRGF0ZVJhbmdlUGlja2VyIiwiZXhhbXBsZUZsYXRwaWNrciIsImV4YW1wbGVJbWFnZUlucHV0IiwiZXhhbXBsZVBhc3N3b3JkIiwiY2FsbGJhY2siLCJpbnB1dCIsInZhbHVlIiwibGVuZ3RoIiwidmFsaWRhdGVQYXNzd29yZCIsImlkZW50aWNhbCIsImNvbXBhcmUiLCJleGFtcGxlU2VsZWN0MiIsImV4YW1wbGVUYWdpZnkiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/formvalidation/advanced.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/formvalidation/advanced.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=advanced.js.map