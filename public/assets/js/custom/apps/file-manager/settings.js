/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!****************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/file-manager/settings.js ***!
  \****************************************************************************************/


// Class definition
var KTAppFileManagerSettings = function () {
    var form;

	// Private functions
	var handleForm = function() {
		const saveButton = form.querySelector('#kt_file_manager_settings_submit');

        saveButton.addEventListener('click', e => {
            e.preventDefault();

            saveButton.setAttribute("data-kt-indicator", "on");

            // Simulate process for demo only
            setTimeout(function(){
                toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };

                toastr.success('File manager settings have been saved');

                saveButton.removeAttribute("data-kt-indicator");
            }, 1000);
        });
	}

	// Public methods
	return {
		init: function(element) {
            form = document.querySelector('#kt_file_manager_settings');

			handleForm();
        }
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTAppFileManagerSettings.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/file-manager/settings.js":
/*!***************************************************************!*\
  !*** ./resources/src/js/custom/apps/file-manager/settings.js ***!
  \***************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAppFileManagerSettings = function () {\n  var form; // Private functions\n\n  var handleForm = function handleForm() {\n    var saveButton = form.querySelector('#kt_file_manager_settings_submit');\n    saveButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      saveButton.setAttribute(\"data-kt-indicator\", \"on\"); // Simulate process for demo only\n\n      setTimeout(function () {\n        toastr.options = {\n          \"closeButton\": true,\n          \"debug\": false,\n          \"newestOnTop\": false,\n          \"progressBar\": false,\n          \"positionClass\": \"toast-top-right\",\n          \"preventDuplicates\": false,\n          \"showDuration\": \"300\",\n          \"hideDuration\": \"1000\",\n          \"timeOut\": \"5000\",\n          \"extendedTimeOut\": \"1000\",\n          \"showEasing\": \"swing\",\n          \"hideEasing\": \"linear\",\n          \"showMethod\": \"fadeIn\",\n          \"hideMethod\": \"fadeOut\"\n        };\n        toastr.success('File manager settings have been saved');\n        saveButton.removeAttribute(\"data-kt-indicator\");\n      }, 1000);\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init(element) {\n      form = document.querySelector('#kt_file_manager_settings');\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAppFileManagerSettings.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL2ZpbGUtbWFuYWdlci9zZXR0aW5ncy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSx3QkFBd0IsR0FBRyxZQUFZO0FBQ3ZDLE1BQUlDLElBQUosQ0FEdUMsQ0FHMUM7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUMzQixRQUFNQyxVQUFVLEdBQUdGLElBQUksQ0FBQ0csYUFBTCxDQUFtQixrQ0FBbkIsQ0FBbkI7QUFFTUQsSUFBQUEsVUFBVSxDQUFDRSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxVQUFBQyxDQUFDLEVBQUk7QUFDdENBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBSixNQUFBQSxVQUFVLENBQUNLLFlBQVgsQ0FBd0IsbUJBQXhCLEVBQTZDLElBQTdDLEVBSHNDLENBS3RDOztBQUNBQyxNQUFBQSxVQUFVLENBQUMsWUFBVTtBQUNqQkMsUUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2IseUJBQWUsSUFERjtBQUViLG1CQUFTLEtBRkk7QUFHYix5QkFBZSxLQUhGO0FBSWIseUJBQWUsS0FKRjtBQUtiLDJCQUFpQixpQkFMSjtBQU1iLCtCQUFxQixLQU5SO0FBT2IsMEJBQWdCLEtBUEg7QUFRYiwwQkFBZ0IsTUFSSDtBQVNiLHFCQUFXLE1BVEU7QUFVYiw2QkFBbUIsTUFWTjtBQVdiLHdCQUFjLE9BWEQ7QUFZYix3QkFBYyxRQVpEO0FBYWIsd0JBQWMsUUFiRDtBQWNiLHdCQUFjO0FBZEQsU0FBakI7QUFpQkFELFFBQUFBLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLHVDQUFmO0FBRUFULFFBQUFBLFVBQVUsQ0FBQ1UsZUFBWCxDQUEyQixtQkFBM0I7QUFDSCxPQXJCUyxFQXFCUCxJQXJCTyxDQUFWO0FBc0JILEtBNUJEO0FBNkJOLEdBaENELENBSjBDLENBc0MxQzs7O0FBQ0EsU0FBTztBQUNOQyxJQUFBQSxJQUFJLEVBQUUsY0FBU0MsT0FBVCxFQUFrQjtBQUNkZCxNQUFBQSxJQUFJLEdBQUdlLFFBQVEsQ0FBQ1osYUFBVCxDQUF1QiwyQkFBdkIsQ0FBUDtBQUVURixNQUFBQSxVQUFVO0FBQ0o7QUFMRCxHQUFQO0FBT0EsQ0E5QzhCLEVBQS9CLEMsQ0FnREE7OztBQUNBZSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENsQixFQUFBQSx3QkFBd0IsQ0FBQ2MsSUFBekI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vYXBwcy9maWxlLW1hbmFnZXIvc2V0dGluZ3MuanM/MTkxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUQXBwRmlsZU1hbmFnZXJTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZm9ybTtcblxuXHQvLyBQcml2YXRlIGZ1bmN0aW9uc1xuXHR2YXIgaGFuZGxlRm9ybSA9IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IHNhdmVCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNrdF9maWxlX21hbmFnZXJfc2V0dGluZ3Nfc3VibWl0Jyk7XG5cbiAgICAgICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBzYXZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIsIFwib25cIik7XG5cbiAgICAgICAgICAgIC8vIFNpbXVsYXRlIHByb2Nlc3MgZm9yIGRlbW8gb25seVxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHRvYXN0ci5vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBcImNsb3NlQnV0dG9uXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVidWdcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwibmV3ZXN0T25Ub3BcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvZ3Jlc3NCYXJcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwicG9zaXRpb25DbGFzc1wiOiBcInRvYXN0LXRvcC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBcInByZXZlbnREdXBsaWNhdGVzXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcInNob3dEdXJhdGlvblwiOiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgICAgICBcImhpZGVEdXJhdGlvblwiOiBcIjEwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aW1lT3V0XCI6IFwiNTAwMFwiLFxuICAgICAgICAgICAgICAgICAgICBcImV4dGVuZGVkVGltZU91dFwiOiBcIjEwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93RWFzaW5nXCI6IFwic3dpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoaWRlRWFzaW5nXCI6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd01ldGhvZFwiOiBcImZhZGVJblwiLFxuICAgICAgICAgICAgICAgICAgICBcImhpZGVNZXRob2RcIjogXCJmYWRlT3V0XCJcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ0ZpbGUgbWFuYWdlciBzZXR0aW5ncyBoYXZlIGJlZW4gc2F2ZWQnKTtcblxuICAgICAgICAgICAgICAgIHNhdmVCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIik7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG5cdH1cblxuXHQvLyBQdWJsaWMgbWV0aG9kc1xuXHRyZXR1cm4ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfZmlsZV9tYW5hZ2VyX3NldHRpbmdzJyk7XG5cblx0XHRcdGhhbmRsZUZvcm0oKTtcbiAgICAgICAgfVxuXHR9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RBcHBGaWxlTWFuYWdlclNldHRpbmdzLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUQXBwRmlsZU1hbmFnZXJTZXR0aW5ncyIsImZvcm0iLCJoYW5kbGVGb3JtIiwic2F2ZUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsInRvYXN0ciIsIm9wdGlvbnMiLCJzdWNjZXNzIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5pdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/file-manager/settings.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/file-manager/settings.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=settings.js.map