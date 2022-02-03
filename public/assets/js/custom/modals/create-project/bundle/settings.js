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

/***/ "./resources/src/js/custom/modals/create-project/bundle/settings.js":
/*!**************************************************************************!*\
  !*** ./resources/src/js/custom/modals/create-project/bundle/settings.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval(" // Class definition\n\nvar KTModalCreateProjectSettings = function () {\n  // Variables\n  var nextButton;\n  var previousButton;\n  var validator;\n  var form;\n  var stepper; // Private functions\n\n  var initForm = function initForm() {\n    // Project logo\n    // For more info about Dropzone plugin visit:  https://www.dropzonejs.com/#usage\n    var myDropzone = new Dropzone(\"#kt_modal_create_project_settings_logo\", {\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 10,\n      maxFilesize: 10,\n      // MB\n      addRemoveLinks: true,\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    }); // Due date. For more info, please visit the official plugin site: https://flatpickr.js.org/\n\n    var releaseDate = $(form.querySelector('[name=\"settings_release_date\"]'));\n    releaseDate.flatpickr({\n      enableTime: true,\n      dateFormat: \"d, M Y, H:i\"\n    }); // Expiry year. For more info, plase visit the official plugin site: https://select2.org/\n\n    $(form.querySelector('[name=\"settings_customer\"]')).on('change', function () {\n      // Revalidate the field when an option is chosen\n      validator.revalidateField('settings_customer');\n    });\n  };\n\n  var initValidation = function initValidation() {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'settings_name': {\n          validators: {\n            notEmpty: {\n              message: 'Project name is required'\n            }\n          }\n        },\n        'settings_customer': {\n          validators: {\n            notEmpty: {\n              message: 'Customer is required'\n            }\n          }\n        },\n        'settings_description': {\n          validators: {\n            notEmpty: {\n              message: 'Description is required'\n            }\n          }\n        },\n        'settings_release_date': {\n          validators: {\n            notEmpty: {\n              message: 'Release date is required'\n            }\n          }\n        },\n        'settings_notifications[]': {\n          validators: {\n            notEmpty: {\n              message: 'Notifications are required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n  };\n\n  var handleForm = function handleForm() {\n    nextButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Disable button to avoid multiple click \n\n      nextButton.disabled = true; // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            nextButton.setAttribute('data-kt-indicator', 'on'); // Simulate form submission\n\n            setTimeout(function () {\n              // Simulate form submission\n              nextButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              nextButton.disabled = false; // Go to next step\n\n              stepper.goNext();\n            }, 1500);\n          } else {\n            // Enable button\n            nextButton.disabled = false; // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }\n    });\n    previousButton.addEventListener('click', function () {\n      // Go to previous step\n      stepper.goPrevious();\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      form = KTModalCreateProject.getForm();\n      stepper = KTModalCreateProject.getStepperObj();\n      nextButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"settings-next\"]');\n      previousButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"settings-previous\"]');\n      initForm();\n      initValidation();\n      handleForm();\n    }\n  };\n}(); // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTModalCreateProjectSettings;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9tb2RhbHMvY3JlYXRlLXByb2plY3QvYnVuZGxlL3NldHRpbmdzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLDRCQUE0QixHQUFHLFlBQVk7QUFDOUM7QUFDQSxNQUFJQyxVQUFKO0FBQ0EsTUFBSUMsY0FBSjtBQUNBLE1BQUlDLFNBQUo7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsT0FBSixDQU44QyxDQVE5Qzs7QUFDQSxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFXO0FBQ3pCO0FBQ0E7QUFDQSxRQUFJQyxVQUFVLEdBQUcsSUFBSUMsUUFBSixDQUFhLHdDQUFiLEVBQXVEO0FBQ3ZFQyxNQUFBQSxHQUFHLEVBQUUseUNBRGtFO0FBQ3ZCO0FBQ3ZDQyxNQUFBQSxTQUFTLEVBQUUsTUFGbUQ7QUFFM0M7QUFDbkJDLE1BQUFBLFFBQVEsRUFBRSxFQUhvRDtBQUk5REMsTUFBQUEsV0FBVyxFQUFFLEVBSmlEO0FBSTdDO0FBQ2pCQyxNQUFBQSxjQUFjLEVBQUUsSUFMOEM7QUFNOURDLE1BQUFBLE1BQU0sRUFBRSxnQkFBU0MsSUFBVCxFQUFlQyxJQUFmLEVBQXFCO0FBQ3pCLFlBQUlELElBQUksQ0FBQ0UsSUFBTCxJQUFhLGtCQUFqQixFQUFxQztBQUNqQ0QsVUFBQUEsSUFBSSxDQUFDLGtCQUFELENBQUo7QUFDSCxTQUZELE1BRU87QUFDSEEsVUFBQUEsSUFBSTtBQUNQO0FBQ0o7QUFaNkQsS0FBdkQsQ0FBakIsQ0FIeUIsQ0FrQnpCOztBQUNBLFFBQUlFLFdBQVcsR0FBR0MsQ0FBQyxDQUFDZixJQUFJLENBQUNnQixhQUFMLENBQW1CLGdDQUFuQixDQUFELENBQW5CO0FBQ0FGLElBQUFBLFdBQVcsQ0FBQ0csU0FBWixDQUFzQjtBQUNyQkMsTUFBQUEsVUFBVSxFQUFFLElBRFM7QUFFckJDLE1BQUFBLFVBQVUsRUFBRTtBQUZTLEtBQXRCLEVBcEJ5QixDQXlCekI7O0FBQ01KLElBQUFB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SUFBTCxDQUFVO0FBQ1RDLGNBQUFBLElBQUksRUFBRSxxRUFERztBQUVUQyxjQUFBQSxJQUFJLEVBQUUsT0FGRztBQUdUQyxjQUFBQSxjQUFjLEVBQUUsS0FIUDtBQUlUQyxjQUFBQSxpQkFBaUIsRUFBRSxhQUpWO0FBS1RDLGNBQUFBLFdBQVcsRUFBRTtBQUNaQyxnQkFBQUEsYUFBYSxFQUFFO0FBREg7QUFMSixhQUFWO0FBU0E7QUFDRCxTQWpDRDtBQWtDQTtBQUNELEtBNUNEO0FBOENBNUQsSUFBQUEsY0FBYyxDQUFDd0MsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBWTtBQUNwRDtBQUNBckMsTUFBQUEsT0FBTyxDQUFDMEQsVUFBUjtBQUNBLEtBSEQ7QUFJQSxHQW5ERDs7QUFxREEsU0FBTztBQUNOO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNqQjVELE1BQUFBLElBQUksR0FBRzZELG9CQUFvQixDQUFDQyxPQUFyQixFQUFQO0FBQ0E3RCxNQUFBQSxPQUFPLEdBQUc0RCxvQkFBb0IsQ0FBQ0UsYUFBckIsRUFBVjtBQUNBbEUsTUFBQUEsVUFBVSxHQUFHZ0Usb0JBQW9CLENBQUNHLFVBQXJCLEdBQWtDaEQsYUFBbEMsQ0FBZ0QsbUNBQWhELENBQWI7QUFDQWxCLE1BQUFBLGNBQWMsR0FBRytELG9CQUFvQixDQUFDRyxVQUFyQixHQUFrQ2hELGFBQWxDLENBQWdELHVDQUFoRCxDQUFqQjtBQUVBZCxNQUFBQSxRQUFRO0FBQ1JvQixNQUFBQSxjQUFjO0FBQ2RlLE1BQUFBLFVBQVU7QUFDVjtBQVhLLEdBQVA7QUFhQSxDQWxLa0MsRUFBbkMsQyxDQW9LQTs7O0FBQ0EsSUFBSSxTQUFpQyxPQUFPNEIsTUFBTSxDQUFDQyxPQUFkLEtBQTBCLFdBQS9ELEVBQTRFO0FBQzNFRCxFQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJ0RSw0QkFBakI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL21vZGFscy9jcmVhdGUtcHJvamVjdC9idW5kbGUvc2V0dGluZ3MuanM/YjI4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUTW9kYWxDcmVhdGVQcm9qZWN0U2V0dGluZ3MgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIFZhcmlhYmxlc1xuXHR2YXIgbmV4dEJ1dHRvbjtcblx0dmFyIHByZXZpb3VzQnV0dG9uO1xuXHR2YXIgdmFsaWRhdG9yO1xuXHR2YXIgZm9ybTtcblx0dmFyIHN0ZXBwZXI7XG5cblx0Ly8gUHJpdmF0ZSBmdW5jdGlvbnNcblx0dmFyIGluaXRGb3JtID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly8gUHJvamVjdCBsb2dvXG5cdFx0Ly8gRm9yIG1vcmUgaW5mbyBhYm91dCBEcm9wem9uZSBwbHVnaW4gdmlzaXQ6ICBodHRwczovL3d3dy5kcm9wem9uZWpzLmNvbS8jdXNhZ2Vcblx0XHR2YXIgbXlEcm9wem9uZSA9IG5ldyBEcm9wem9uZShcIiNrdF9tb2RhbF9jcmVhdGVfcHJvamVjdF9zZXR0aW5nc19sb2dvXCIsIHsgXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly9rZWVudGhlbWVzLmNvbS9zY3JpcHRzL3ZvaWQucGhwXCIsIC8vIFNldCB0aGUgdXJsIGZvciB5b3VyIHVwbG9hZCBzY3JpcHQgbG9jYXRpb25cbiAgICAgICAgICAgIHBhcmFtTmFtZTogXCJmaWxlXCIsIC8vIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHRyYW5zZmVyIHRoZSBmaWxlXG4gICAgICAgICAgICBtYXhGaWxlczogMTAsXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMTAsIC8vIE1CXG4gICAgICAgICAgICBhZGRSZW1vdmVMaW5rczogdHJ1ZSxcbiAgICAgICAgICAgIGFjY2VwdDogZnVuY3Rpb24oZmlsZSwgZG9uZSkge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlLm5hbWUgPT0gXCJqdXN0aW5iaWViZXIuanBnXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZShcIk5haGEsIHlvdSBkb24ndC5cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblx0XHR9KTsgIFxuXG5cdFx0Ly8gRHVlIGRhdGUuIEZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgcGx1Z2luIHNpdGU6IGh0dHBzOi8vZmxhdHBpY2tyLmpzLm9yZy9cblx0XHR2YXIgcmVsZWFzZURhdGUgPSAkKGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJzZXR0aW5nc19yZWxlYXNlX2RhdGVcIl0nKSk7XG5cdFx0cmVsZWFzZURhdGUuZmxhdHBpY2tyKHtcblx0XHRcdGVuYWJsZVRpbWU6IHRydWUsXG5cdFx0XHRkYXRlRm9ybWF0OiBcImQsIE0gWSwgSDppXCIsXG5cdFx0fSk7XG5cblx0XHQvLyBFeHBpcnkgeWVhci4gRm9yIG1vcmUgaW5mbywgcGxhc2UgdmlzaXQgdGhlIG9mZmljaWFsIHBsdWdpbiBzaXRlOiBodHRwczovL3NlbGVjdDIub3JnL1xuICAgICAgICAkKGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJzZXR0aW5nc19jdXN0b21lclwiXScpKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBSZXZhbGlkYXRlIHRoZSBmaWVsZCB3aGVuIGFuIG9wdGlvbiBpcyBjaG9zZW5cbiAgICAgICAgICAgIHZhbGlkYXRvci5yZXZhbGlkYXRlRmllbGQoJ3NldHRpbmdzX2N1c3RvbWVyJyk7XG4gICAgICAgIH0pO1xuXHR9XG5cblx0dmFyIGluaXRWYWxpZGF0aW9uID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cblx0XHR2YWxpZGF0b3IgPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcblx0XHRcdGZvcm0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkczoge1xuXHRcdFx0XHRcdCdzZXR0aW5nc19uYW1lJzoge1xuXHRcdFx0XHRcdFx0dmFsaWRhdG9yczoge1xuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQcm9qZWN0IG5hbWUgaXMgcmVxdWlyZWQnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdzZXR0aW5nc19jdXN0b21lcic6IHtcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnQ3VzdG9tZXIgaXMgcmVxdWlyZWQnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdzZXR0aW5nc19kZXNjcmlwdGlvbic6IHtcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnRGVzY3JpcHRpb24gaXMgcmVxdWlyZWQnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdzZXR0aW5nc19yZWxlYXNlX2RhdGUnOiB7XG5cdFx0XHRcdFx0XHR2YWxpZGF0b3JzOiB7XG5cdFx0XHRcdFx0XHRcdG5vdEVtcHR5OiB7XG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1JlbGVhc2UgZGF0ZSBpcyByZXF1aXJlZCdcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J3NldHRpbmdzX25vdGlmaWNhdGlvbnNbXSc6IHtcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnTm90aWZpY2F0aW9ucyBhcmUgcmVxdWlyZWQnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFxuXHRcdFx0XHRwbHVnaW5zOiB7XG5cdFx0XHRcdFx0dHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxuXHRcdFx0XHRcdGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XG5cdFx0XHRcdFx0XHRyb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHR2YXIgaGFuZGxlRm9ybSA9IGZ1bmN0aW9uKCkge1xuXHRcdG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0Ly8gUHJldmVudCBkZWZhdWx0IGJ1dHRvbiBhY3Rpb25cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Ly8gRGlzYWJsZSBidXR0b24gdG8gYXZvaWQgbXVsdGlwbGUgY2xpY2sgXG5cdFx0XHRuZXh0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuXHRcdFx0Ly8gVmFsaWRhdGUgZm9ybSBiZWZvcmUgc3VibWl0XG5cdFx0XHRpZiAodmFsaWRhdG9yKSB7XG5cdFx0XHRcdHZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd2YWxpZGF0ZWQhJyk7XG5cblx0XHRcdFx0XHRpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcblx0XHRcdFx0XHRcdC8vIFNob3cgbG9hZGluZyBpbmRpY2F0aW9uXG5cdFx0XHRcdFx0XHRuZXh0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcblxuXHRcdFx0XHRcdFx0Ly8gU2ltdWxhdGUgZm9ybSBzdWJtaXNzaW9uXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQvLyBTaW11bGF0ZSBmb3JtIHN1Ym1pc3Npb25cblx0XHRcdFx0XHRcdFx0bmV4dEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gRW5hYmxlIGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRuZXh0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvLyBHbyB0byBuZXh0IHN0ZXBcblx0XHRcdFx0XHRcdFx0c3RlcHBlci5nb05leHQoKTtcblx0XHRcdFx0XHRcdH0sIDE1MDApOyAgIFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBFbmFibGUgYnV0dG9uXG5cdFx0XHRcdFx0XHRuZXh0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cblx0XHRcdFx0XHRcdC8vIFNob3cgcG9wdXAgd2FybmluZy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXG5cdFx0XHRcdFx0XHRTd2FsLmZpcmUoe1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlNvcnJ5LCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzb21lIGVycm9ycyBkZXRlY3RlZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcblx0XHRcdFx0XHRcdFx0aWNvbjogXCJlcnJvclwiLFxuXHRcdFx0XHRcdFx0XHRidXR0b25zU3R5bGluZzogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG5cdFx0XHRcdFx0XHRcdGN1c3RvbUNsYXNzOiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVx0XHRcdFxuXHRcdH0pO1xuXG5cdFx0cHJldmlvdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBHbyB0byBwcmV2aW91cyBzdGVwXG5cdFx0XHRzdGVwcGVyLmdvUHJldmlvdXMoKTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Ly8gUHVibGljIGZ1bmN0aW9uc1xuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGZvcm0gPSBLVE1vZGFsQ3JlYXRlUHJvamVjdC5nZXRGb3JtKCk7XG5cdFx0XHRzdGVwcGVyID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0U3RlcHBlck9iaigpO1xuXHRcdFx0bmV4dEJ1dHRvbiA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0LmdldFN0ZXBwZXIoKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwic2V0dGluZ3MtbmV4dFwiXScpO1xuXHRcdFx0cHJldmlvdXNCdXR0b24gPSBLVE1vZGFsQ3JlYXRlUHJvamVjdC5nZXRTdGVwcGVyKCkucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cInNldHRpbmdzLXByZXZpb3VzXCJdJyk7XG5cblx0XHRcdGluaXRGb3JtKCk7XG5cdFx0XHRpbml0VmFsaWRhdGlvbigpO1xuXHRcdFx0aGFuZGxlRm9ybSgpO1xuXHRcdH1cblx0fTtcbn0oKTtcblxuLy8gV2VicGFjayBzdXBwb3J0XG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuXHRtb2R1bGUuZXhwb3J0cyA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0U2V0dGluZ3M7XG59XG4iXSwibmFtZXMiOlsiS1RNb2RhbENyZWF0ZVByb2plY3RTZXR0aW5ncyIsIm5leHRCdXR0b24iLCJwcmV2aW91c0J1dHRvbiIsInZhbGlkYXRvciIsImZvcm0iLCJzdGVwcGVyIiwiaW5pdEZvcm0iLCJteURyb3B6b25lIiwiRHJvcHpvbmUiLCJ1cmwiLCJwYXJhbU5hbWUiLCJtYXhGaWxlcyIsIm1heEZpbGVzaXplIiwiYWRkUmVtb3ZlTGlua3MiLCJhY2NlcHQiLCJmaWxlIiwiZG9uZSIsIm5hbWUiLCJyZWxlYXNlRGF0ZSIsIiQiLCJxdWVyeVNlbGVjdG9yIiwiZmxhdHBpY2tyIiwiZW5hYmxlVGltZSIsImRhdGVGb3JtYXQiLCJvbiIsInJldmFsaWRhdGVGaWVsZCIsImluaXRWYWxpZGF0aW9uIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbiIsImZpZWxkcyIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJib290c3RyYXAiLCJCb290c3RyYXA1Iiwicm93U2VsZWN0b3IiLCJlbGVJbnZhbGlkQ2xhc3MiLCJlbGVWYWxpZENsYXNzIiwiaGFuZGxlRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXNhYmxlZCIsInZhbGlkYXRlIiwidGhlbiIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwiZ29OZXh0IiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJnb1ByZXZpb3VzIiwiaW5pdCIsIktUTW9kYWxDcmVhdGVQcm9qZWN0IiwiZ2V0Rm9ybSIsImdldFN0ZXBwZXJPYmoiLCJnZXRTdGVwcGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/modals/create-project/bundle/settings.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/src/js/custom/modals/create-project/bundle/settings.js");
/******/ 	
/******/ })()
;