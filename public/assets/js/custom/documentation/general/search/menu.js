/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*************************************************************!*\
  !*** ../src/js/custom/documentation/general/search/menu.js ***!
  \*************************************************************/


// Class definition
var KTGeneralSearchMenuDemos = function() {
    // Private variables
    var element;
    var formElement;
    var mainElement;
    var resultsElement;
    var wrapperElement;
    var emptyElement;

    var preferencesElement;
    var preferencesShowElement;
    var preferencesDismissElement;
    
    var advancedOptionsFormElement;
    var advancedOptionsFormShowElement;
    var advancedOptionsFormCancelElement;
    var advancedOptionsFormSearchElement;
    
    var searchObject;

    // Private functions
    var processs = function(search) {
        var timeout = setTimeout(function() {
            var number = KTUtil.getRandomInt(1, 3);

            // Hide recently viewed
            mainElement.classList.add('d-none');

            if (number === 3) {
                // Hide results
                resultsElement.classList.add('d-none');
                // Show empty message 
                emptyElement.classList.remove('d-none');
            } else {
                // Show results
                resultsElement.classList.remove('d-none');
                // Hide empty message 
                emptyElement.classList.add('d-none');
            }                  

            // Complete search
            search.complete();
        }, 1500);
    }

    var clear = function(search) {
        // Show recently viewed
        mainElement.classList.remove('d-none');
        // Hide results
        resultsElement.classList.add('d-none');
        // Hide empty message 
        emptyElement.classList.add('d-none');
    }    

    var handlePreferences = function() {
        // Preference show handler
        preferencesShowElement.addEventListener('click', function() {
            wrapperElement.classList.add('d-none');
            preferencesElement.classList.remove('d-none');
        });

        // Preference dismiss handler
        preferencesDismissElement.addEventListener('click', function() {
            wrapperElement.classList.remove('d-none');
            preferencesElement.classList.add('d-none');
        });
    }

    var handleAdvancedOptionsForm = function() {
        // Show
        advancedOptionsFormShowElement.addEventListener('click', function() {
            wrapperElement.classList.add('d-none');
            advancedOptionsFormElement.classList.remove('d-none');
        });

        // Cancel
        advancedOptionsFormCancelElement.addEventListener('click', function() {
            wrapperElement.classList.remove('d-none');
            advancedOptionsFormElement.classList.add('d-none');
        });

        // Search
        advancedOptionsFormSearchElement.addEventListener('click', function() {
            
        });
    }

    // Public methods
	return {
		init: function() {
            // Elements
            element = document.querySelector('#kt_docs_search_handler_menu');

            if (!element) {
                return;
            }

            wrapperElement = element.querySelector('[data-kt-search-element="wrapper"]');
            formElement = element.querySelector('[data-kt-search-element="form"]');
            mainElement = element.querySelector('[data-kt-search-element="main"]');
            resultsElement = element.querySelector('[data-kt-search-element="results"]');
            emptyElement = element.querySelector('[data-kt-search-element="empty"]');

            preferencesElement = element.querySelector('[data-kt-search-element="preferences"]');
            preferencesShowElement = element.querySelector('[data-kt-search-element="preferences-show"]');
            preferencesDismissElement = element.querySelector('[data-kt-search-element="preferences-dismiss"]');

            advancedOptionsFormElement = element.querySelector('[data-kt-search-element="advanced-options-form"]');
            advancedOptionsFormShowElement = element.querySelector('[data-kt-search-element="advanced-options-form-show"]');
            advancedOptionsFormCancelElement = element.querySelector('[data-kt-search-element="advanced-options-form-cancel"]');
            advancedOptionsFormSearchElement = element.querySelector('[data-kt-search-element="advanced-options-form-search"]');
            
            // Initialize search handler
            searchObject = new KTSearch(element);

            // Search handler
            searchObject.on('kt.search.process', processs);

            // Clear handler
            searchObject.on('kt.search.clear', clear);

            // Custom handlers
            handlePreferences();
            handleAdvancedOptionsForm();            
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTGeneralSearchMenuDemos.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/search/menu.js":
/*!**********************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/search/menu.js ***!
  \**********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralSearchMenuDemos = function () {\n  // Private variables\n  var element;\n  var formElement;\n  var mainElement;\n  var resultsElement;\n  var wrapperElement;\n  var emptyElement;\n  var preferencesElement;\n  var preferencesShowElement;\n  var preferencesDismissElement;\n  var advancedOptionsFormElement;\n  var advancedOptionsFormShowElement;\n  var advancedOptionsFormCancelElement;\n  var advancedOptionsFormSearchElement;\n  var searchObject; // Private functions\n\n  var processs = function processs(search) {\n    var timeout = setTimeout(function () {\n      var number = KTUtil.getRandomInt(1, 3); // Hide recently viewed\n\n      mainElement.classList.add('d-none');\n\n      if (number === 3) {\n        // Hide results\n        resultsElement.classList.add('d-none'); // Show empty message \n\n        emptyElement.classList.remove('d-none');\n      } else {\n        // Show results\n        resultsElement.classList.remove('d-none'); // Hide empty message \n\n        emptyElement.classList.add('d-none');\n      } // Complete search\n\n\n      search.complete();\n    }, 1500);\n  };\n\n  var clear = function clear(search) {\n    // Show recently viewed\n    mainElement.classList.remove('d-none'); // Hide results\n\n    resultsElement.classList.add('d-none'); // Hide empty message \n\n    emptyElement.classList.add('d-none');\n  };\n\n  var handlePreferences = function handlePreferences() {\n    // Preference show handler\n    preferencesShowElement.addEventListener('click', function () {\n      wrapperElement.classList.add('d-none');\n      preferencesElement.classList.remove('d-none');\n    }); // Preference dismiss handler\n\n    preferencesDismissElement.addEventListener('click', function () {\n      wrapperElement.classList.remove('d-none');\n      preferencesElement.classList.add('d-none');\n    });\n  };\n\n  var handleAdvancedOptionsForm = function handleAdvancedOptionsForm() {\n    // Show\n    advancedOptionsFormShowElement.addEventListener('click', function () {\n      wrapperElement.classList.add('d-none');\n      advancedOptionsFormElement.classList.remove('d-none');\n    }); // Cancel\n\n    advancedOptionsFormCancelElement.addEventListener('click', function () {\n      wrapperElement.classList.remove('d-none');\n      advancedOptionsFormElement.classList.add('d-none');\n    }); // Search\n\n    advancedOptionsFormSearchElement.addEventListener('click', function () {});\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      // Elements\n      element = document.querySelector('#kt_docs_search_handler_menu');\n\n      if (!element) {\n        return;\n      }\n\n      wrapperElement = element.querySelector('[data-kt-search-element=\"wrapper\"]');\n      formElement = element.querySelector('[data-kt-search-element=\"form\"]');\n      mainElement = element.querySelector('[data-kt-search-element=\"main\"]');\n      resultsElement = element.querySelector('[data-kt-search-element=\"results\"]');\n      emptyElement = element.querySelector('[data-kt-search-element=\"empty\"]');\n      preferencesElement = element.querySelector('[data-kt-search-element=\"preferences\"]');\n      preferencesShowElement = element.querySelector('[data-kt-search-element=\"preferences-show\"]');\n      preferencesDismissElement = element.querySelector('[data-kt-search-element=\"preferences-dismiss\"]');\n      advancedOptionsFormElement = element.querySelector('[data-kt-search-element=\"advanced-options-form\"]');\n      advancedOptionsFormShowElement = element.querySelector('[data-kt-search-element=\"advanced-options-form-show\"]');\n      advancedOptionsFormCancelElement = element.querySelector('[data-kt-search-element=\"advanced-options-form-cancel\"]');\n      advancedOptionsFormSearchElement = element.querySelector('[data-kt-search-element=\"advanced-options-form-search\"]'); // Initialize search handler\n\n      searchObject = new KTSearch(element); // Search handler\n\n      searchObject.on('kt.search.process', processs); // Clear handler\n\n      searchObject.on('kt.search.clear', clear); // Custom handlers\n\n      handlePreferences();\n      handleAdvancedOptionsForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralSearchMenuDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvc2VhcmNoL21lbnUuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsd0JBQXdCLEdBQUcsWUFBVztBQUN0QztBQUNBLE1BQUlDLE9BQUo7QUFDQSxNQUFJQyxXQUFKO0FBQ0EsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLGNBQUo7QUFDQSxNQUFJQyxjQUFKO0FBQ0EsTUFBSUMsWUFBSjtBQUVBLE1BQUlDLGtCQUFKO0FBQ0EsTUFBSUMsc0JBQUo7QUFDQSxNQUFJQyx5QkFBSjtBQUVBLE1BQUlDLDBCQUFKO0FBQ0EsTUFBSUMsOEJBQUo7QUFDQSxNQUFJQyxnQ0FBSjtBQUNBLE1BQUlDLGdDQUFKO0FBRUEsTUFBSUMsWUFBSixDQWxCc0MsQ0FvQnRDOztBQUNBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLE1BQVQsRUFBaUI7QUFDNUIsUUFBSUMsT0FBTyxHQUFHQyxVQUFVLENBQUMsWUFBVztBQUNoQyxVQUFJQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUFiLENBRGdDLENBR2hDOztBQUNBbEIsTUFBQUEsV0FBVyxDQUFDbUIsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsUUFBMUI7O0FBRUEsVUFBSUosTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDZDtBQUNBZixRQUFBQSxjQUFjLENBQUNrQixTQUFmLENBQXlCQyxHQUF6QixDQUE2QixRQUE3QixFQUZjLENBR2Q7O0FBQ0FqQixRQUFBQSxZQUFZLENBQUNnQixTQUFiLENBQXVCRSxNQUF2QixDQUE4QixRQUE5QjtBQUNILE9BTEQsTUFLTztBQUNIO0FBQ0FwQixRQUFBQSxjQUFjLENBQUNrQixTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxRQUFoQyxFQUZHLENBR0g7O0FBQ0FsQixRQUFBQSxZQUFZLENBQUNnQixTQUFiLENBQXVCQyxHQUF2QixDQUEy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d0NBQXRCLENBQXJCO0FBQ0F4QixNQUFBQSxzQkFBc0IsR0FBR1AsT0FBTyxDQUFDK0IsYUFBUixDQUFzQiw2Q0FBdEIsQ0FBekI7QUFDQXZCLE1BQUFBLHlCQUF5QixHQUFHUixPQUFPLENBQUMrQixhQUFSLENBQXNCLGdEQUF0QixDQUE1QjtBQUVBdEIsTUFBQUEsMEJBQTBCLEdBQUdULE9BQU8sQ0FBQytCLGFBQVIsQ0FBc0Isa0RBQXRCLENBQTdCO0FBQ0FyQixNQUFBQSw4QkFBOEIsR0FBR1YsT0FBTyxDQUFDK0IsYUFBUixDQUFzQix1REFBdEIsQ0FBakM7QUFDQXBCLE1BQUFBLGdDQUFnQyxHQUFHWCxPQUFPLENBQUMrQixhQUFSLENBQXNCLHlEQUF0QixDQUFuQztBQUNBbkIsTUFBQUEsZ0NBQWdDLEdBQUdaLE9BQU8sQ0FBQytCLGFBQVIsQ0FBc0IseURBQXRCLENBQW5DLENBckJPLENBdUJQOztBQUNBbEIsTUFBQUEsWUFBWSxHQUFHLElBQUltQixRQUFKLENBQWFoQyxPQUFiLENBQWYsQ0F4Qk8sQ0EwQlA7O0FBQ0FhLE1BQUFBLFlBQVksQ0FBQ29CLEVBQWIsQ0FBZ0IsbUJBQWhCLEVBQXFDbkIsUUFBckMsRUEzQk8sQ0E2QlA7O0FBQ0FELE1BQUFBLFlBQVksQ0FBQ29CLEVBQWIsQ0FBZ0IsaUJBQWhCLEVBQW1DUixLQUFuQyxFQTlCTyxDQWdDUDs7QUFDQUMsTUFBQUEsaUJBQWlCO0FBQ2pCRSxNQUFBQSx5QkFBeUI7QUFDbEM7QUFwQ0ssR0FBUDtBQXNDQSxDQTlIOEIsRUFBL0IsQyxDQWdJQTs7O0FBQ0FULE1BQU0sQ0FBQ2Usa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ25DLEVBQUFBLHdCQUF3QixDQUFDOEIsSUFBekI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL3NlYXJjaC9tZW51LmpzPzhkYzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEdlbmVyYWxTZWFyY2hNZW51RGVtb3MgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlc1xuICAgIHZhciBlbGVtZW50O1xuICAgIHZhciBmb3JtRWxlbWVudDtcbiAgICB2YXIgbWFpbkVsZW1lbnQ7XG4gICAgdmFyIHJlc3VsdHNFbGVtZW50O1xuICAgIHZhciB3cmFwcGVyRWxlbWVudDtcbiAgICB2YXIgZW1wdHlFbGVtZW50O1xuXG4gICAgdmFyIHByZWZlcmVuY2VzRWxlbWVudDtcbiAgICB2YXIgcHJlZmVyZW5jZXNTaG93RWxlbWVudDtcbiAgICB2YXIgcHJlZmVyZW5jZXNEaXNtaXNzRWxlbWVudDtcbiAgICBcbiAgICB2YXIgYWR2YW5jZWRPcHRpb25zRm9ybUVsZW1lbnQ7XG4gICAgdmFyIGFkdmFuY2VkT3B0aW9uc0Zvcm1TaG93RWxlbWVudDtcbiAgICB2YXIgYWR2YW5jZWRPcHRpb25zRm9ybUNhbmNlbEVsZW1lbnQ7XG4gICAgdmFyIGFkdmFuY2VkT3B0aW9uc0Zvcm1TZWFyY2hFbGVtZW50O1xuICAgIFxuICAgIHZhciBzZWFyY2hPYmplY3Q7XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBwcm9jZXNzcyA9IGZ1bmN0aW9uKHNlYXJjaCkge1xuICAgICAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyID0gS1RVdGlsLmdldFJhbmRvbUludCgxLCAzKTtcblxuICAgICAgICAgICAgLy8gSGlkZSByZWNlbnRseSB2aWV3ZWRcbiAgICAgICAgICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAzKSB7XG4gICAgICAgICAgICAgICAgLy8gSGlkZSByZXN1bHRzXG4gICAgICAgICAgICAgICAgcmVzdWx0c0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgLy8gU2hvdyBlbXB0eSBtZXNzYWdlIFxuICAgICAgICAgICAgICAgIGVtcHR5RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU2hvdyByZXN1bHRzXG4gICAgICAgICAgICAgICAgcmVzdWx0c0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgLy8gSGlkZSBlbXB0eSBtZXNzYWdlIFxuICAgICAgICAgICAgICAgIGVtcHR5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gQ29tcGxldGUgc2VhcmNoXG4gICAgICAgICAgICBzZWFyY2guY29tcGxldGUoKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgdmFyIGNsZWFyID0gZnVuY3Rpb24oc2VhcmNoKSB7XG4gICAgICAgIC8vIFNob3cgcmVjZW50bHkgdmlld2VkXG4gICAgICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAvLyBIaWRlIHJlc3VsdHNcbiAgICAgICAgcmVzdWx0c0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgIC8vIEhpZGUgZW1wdHkgbWVzc2FnZSBcbiAgICAgICAgZW1wdHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgIH0gICAgXG5cbiAgICB2YXIgaGFuZGxlUHJlZmVyZW5jZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gUHJlZmVyZW5jZSBzaG93IGhhbmRsZXJcbiAgICAgICAgcHJlZmVyZW5jZXNTaG93RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICBwcmVmZXJlbmNlc0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFByZWZlcmVuY2UgZGlzbWlzcyBoYW5kbGVyXG4gICAgICAgIHByZWZlcmVuY2VzRGlzbWlzc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdyYXBwZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgcHJlZmVyZW5jZXNFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlQWR2YW5jZWRPcHRpb25zRm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBTaG93XG4gICAgICAgIGFkdmFuY2VkT3B0aW9uc0Zvcm1TaG93RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICBhZHZhbmNlZE9wdGlvbnNGb3JtRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2FuY2VsXG4gICAgICAgIGFkdmFuY2VkT3B0aW9uc0Zvcm1DYW5jZWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3cmFwcGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIGFkdmFuY2VkT3B0aW9uc0Zvcm1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZWFyY2hcbiAgICAgICAgYWR2YW5jZWRPcHRpb25zRm9ybVNlYXJjaEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuXHRyZXR1cm4ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gRWxlbWVudHNcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfZG9jc19zZWFyY2hfaGFuZGxlcl9tZW51Jyk7XG5cbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXNlYXJjaC1lbGVtZW50PVwid3JhcHBlclwiXScpO1xuICAgICAgICAgICAgZm9ybUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXNlYXJjaC1lbGVtZW50PVwiZm9ybVwiXScpO1xuICAgICAgICAgICAgbWFpbkVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXNlYXJjaC1lbGVtZW50PVwibWFpblwiXScpO1xuICAgICAgICAgICAgcmVzdWx0c0VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXNlYXJjaC1lbGVtZW50PVwicmVzdWx0c1wiXScpO1xuICAgICAgICAgICAgZW1wdHlFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cImVtcHR5XCJdJyk7XG5cbiAgICAgICAgICAgIHByZWZlcmVuY2VzRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJwcmVmZXJlbmNlc1wiXScpO1xuICAgICAgICAgICAgcHJlZmVyZW5jZXNTaG93RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJwcmVmZXJlbmNlcy1zaG93XCJdJyk7XG4gICAgICAgICAgICBwcmVmZXJlbmNlc0Rpc21pc3NFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cInByZWZlcmVuY2VzLWRpc21pc3NcIl0nKTtcblxuICAgICAgICAgICAgYWR2YW5jZWRPcHRpb25zRm9ybUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXNlYXJjaC1lbGVtZW50PVwiYWR2YW5jZWQtb3B0aW9ucy1mb3JtXCJdJyk7XG4gICAgICAgICAgICBhZHZhbmNlZE9wdGlvbnNGb3JtU2hvd0VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXNlYXJjaC1lbGVtZW50PVwiYWR2YW5jZWQtb3B0aW9ucy1mb3JtLXNob3dcIl0nKTtcbiAgICAgICAgICAgIGFkdmFuY2VkT3B0aW9uc0Zvcm1DYW5jZWxFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cImFkdmFuY2VkLW9wdGlvbnMtZm9ybS1jYW5jZWxcIl0nKTtcbiAgICAgICAgICAgIGFkdmFuY2VkT3B0aW9uc0Zvcm1TZWFyY2hFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cImFkdmFuY2VkLW9wdGlvbnMtZm9ybS1zZWFyY2hcIl0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBzZWFyY2ggaGFuZGxlclxuICAgICAgICAgICAgc2VhcmNoT2JqZWN0ID0gbmV3IEtUU2VhcmNoKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBTZWFyY2ggaGFuZGxlclxuICAgICAgICAgICAgc2VhcmNoT2JqZWN0Lm9uKCdrdC5zZWFyY2gucHJvY2VzcycsIHByb2Nlc3NzKTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgaGFuZGxlclxuICAgICAgICAgICAgc2VhcmNoT2JqZWN0Lm9uKCdrdC5zZWFyY2guY2xlYXInLCBjbGVhcik7XG5cbiAgICAgICAgICAgIC8vIEN1c3RvbSBoYW5kbGVyc1xuICAgICAgICAgICAgaGFuZGxlUHJlZmVyZW5jZXMoKTtcbiAgICAgICAgICAgIGhhbmRsZUFkdmFuY2VkT3B0aW9uc0Zvcm0oKTsgICAgICAgICAgICBcblx0XHR9XG5cdH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtUR2VuZXJhbFNlYXJjaE1lbnVEZW1vcy5pbml0KCk7XG59KTsiXSwibmFtZXMiOlsiS1RHZW5lcmFsU2VhcmNoTWVudURlbW9zIiwiZWxlbWVudCIsImZvcm1FbGVtZW50IiwibWFpbkVsZW1lbnQiLCJyZXN1bHRzRWxlbWVudCIsIndyYXBwZXJFbGVtZW50IiwiZW1wdHlFbGVtZW50IiwicHJlZmVyZW5jZXNFbGVtZW50IiwicHJlZmVyZW5jZXNTaG93RWxlbWVudCIsInByZWZlcmVuY2VzRGlzbWlzc0VsZW1lbnQiLCJhZHZhbmNlZE9wdGlvbnNGb3JtRWxlbWVudCIsImFkdmFuY2VkT3B0aW9uc0Zvcm1TaG93RWxlbWVudCIsImFkdmFuY2VkT3B0aW9uc0Zvcm1DYW5jZWxFbGVtZW50IiwiYWR2YW5jZWRPcHRpb25zRm9ybVNlYXJjaEVsZW1lbnQiLCJzZWFyY2hPYmplY3QiLCJwcm9jZXNzcyIsInNlYXJjaCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwibnVtYmVyIiwiS1RVdGlsIiwiZ2V0UmFuZG9tSW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29tcGxldGUiLCJjbGVhciIsImhhbmRsZVByZWZlcmVuY2VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUFkdmFuY2VkT3B0aW9uc0Zvcm0iLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiS1RTZWFyY2giLCJvbiIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/search/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/search/menu.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=menu.js.map