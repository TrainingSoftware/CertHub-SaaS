/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*********************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/modals/users-search.js ***!
  \*********************************************************************************/


// Class definition
var KTModalUserSearch = function() {
    // Private variables
    var element;
    var suggestionsElement;
    var resultsElement;
    var wrapperElement;
    var emptyElement;
    var searchObject;

    // Private functions
    var processs = function(search) {
        var timeout = setTimeout(function() {
            var number = KTUtil.getRandomInt(1, 3);

            // Hide recently viewed
            suggestionsElement.classList.add('d-none');

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
        suggestionsElement.classList.remove('d-none');
        // Hide results
        resultsElement.classList.add('d-none');
        // Hide empty message 
        emptyElement.classList.add('d-none');
    }    

    // Public methods
	return {
		init: function() {
            // Elements
            element = document.querySelector('#kt_modal_users_search_handler');

            if (!element) {
                return;
            }

            wrapperElement = element.querySelector('[data-kt-search-element="wrapper"]');
            suggestionsElement = element.querySelector('[data-kt-search-element="suggestions"]');
            resultsElement = element.querySelector('[data-kt-search-element="results"]');
            emptyElement = element.querySelector('[data-kt-search-element="empty"]');
            
            // Initialize search handler
            searchObject = new KTSearch(element);

            // Search handler
            searchObject.on('kt.search.process', processs);

            // Clear handler
            searchObject.on('kt.search.clear', clear);
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTModalUserSearch.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/modals/users-search.js":
/*!********************************************************!*\
  !*** ./resources/src/js/custom/modals/users-search.js ***!
  \********************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTModalUserSearch = function () {\n  // Private variables\n  var element;\n  var suggestionsElement;\n  var resultsElement;\n  var wrapperElement;\n  var emptyElement;\n  var searchObject; // Private functions\n\n  var processs = function processs(search) {\n    var timeout = setTimeout(function () {\n      var number = KTUtil.getRandomInt(1, 3); // Hide recently viewed\n\n      suggestionsElement.classList.add('d-none');\n\n      if (number === 3) {\n        // Hide results\n        resultsElement.classList.add('d-none'); // Show empty message \n\n        emptyElement.classList.remove('d-none');\n      } else {\n        // Show results\n        resultsElement.classList.remove('d-none'); // Hide empty message \n\n        emptyElement.classList.add('d-none');\n      } // Complete search\n\n\n      search.complete();\n    }, 1500);\n  };\n\n  var clear = function clear(search) {\n    // Show recently viewed\n    suggestionsElement.classList.remove('d-none'); // Hide results\n\n    resultsElement.classList.add('d-none'); // Hide empty message \n\n    emptyElement.classList.add('d-none');\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      // Elements\n      element = document.querySelector('#kt_modal_users_search_handler');\n\n      if (!element) {\n        return;\n      }\n\n      wrapperElement = element.querySelector('[data-kt-search-element=\"wrapper\"]');\n      suggestionsElement = element.querySelector('[data-kt-search-element=\"suggestions\"]');\n      resultsElement = element.querySelector('[data-kt-search-element=\"results\"]');\n      emptyElement = element.querySelector('[data-kt-search-element=\"empty\"]'); // Initialize search handler\n\n      searchObject = new KTSearch(element); // Search handler\n\n      searchObject.on('kt.search.process', processs); // Clear handler\n\n      searchObject.on('kt.search.clear', clear);\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTModalUserSearch.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9tb2RhbHMvdXNlcnMtc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGlCQUFpQixHQUFHLFlBQVc7QUFDL0I7QUFDQSxNQUFJQyxPQUFKO0FBQ0EsTUFBSUMsa0JBQUo7QUFDQSxNQUFJQyxjQUFKO0FBQ0EsTUFBSUMsY0FBSjtBQUNBLE1BQUlDLFlBQUo7QUFDQSxNQUFJQyxZQUFKLENBUCtCLENBUy9COztBQUNBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLE1BQVQsRUFBaUI7QUFDNUIsUUFBSUMsT0FBTyxHQUFHQyxVQUFVLENBQUMsWUFBVztBQUNoQyxVQUFJQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUFiLENBRGdDLENBR2hDOztBQUNBWCxNQUFBQSxrQkFBa0IsQ0FBQ1ksU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLFFBQWpDOztBQUVBLFVBQUlKLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2Q7QUFDQVIsUUFBQUEsY0FBYyxDQUFDVyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixRQUE3QixFQUZjLENBR2Q7O0FBQ0FWLFFBQUFBLFlBQVksQ0FBQ1MsU0FBYixDQUF1QkUsTUFBdkIsQ0FBOEIsUUFBOUI7QUFDSCxPQUxELE1BS087QUFDSDtBQUNBYixRQUFBQSxjQUFjLENBQUNXLFNBQWYsQ0FBeUJFLE1BQXpCLENBQWdDLFFBQWhDLEVBRkcsQ0FHSDs7QUFDQVgsUUFBQUEsWUFBWSxDQUFDUyxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixRQUEzQjtBQUNILE9BaEIrQixDQWtCaEM7OztBQUNBUCxNQUFBQSxNQUFNLENBQUNTLFFBQVA7QUFDSCxLQXBCdUIsRUFvQnJCLElBcEJxQixDQUF4QjtBQXFCSCxHQXRCRDs7QUF3QkEsTUFBSUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBU1YsTUFBVCxFQUFpQjtBQUN6QjtBQUNBTixJQUFBQSxrQkFBa0IsQ0FBQ1ksU0FBbkIsQ0FBNkJFLE1BQTdCLENBQW9DLFFBQXBDLEVBRnlCLENBR3pCOztBQUNBYixJQUFBQSxjQUFjLENBQUNXLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLFFBQTdCLEVBSnlCLENBS3pCOztBQUNBVixJQUFBQSxZQUFZLENBQUNTLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0gsR0FQRCxDQWxDK0IsQ0EyQy9COzs7QUFDSCxTQUFPO0FBQ05JLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNQO0FBQ0FsQixNQUFBQSxPQUFPLEdBQUdtQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0NBQXZCLENBQVY7O0FBRUEsVUFBSSxDQUFDcEIsT0FBTCxFQUFjO0FBQ1Y7QUFDSDs7QUFFREcsTUFBQUEsY0FBYyxHQUFHSCxPQUFPLENBQUNvQixhQUFSLENBQXNCLG9DQUF0QixDQUFqQjtBQUNBbkIsTUFBQUEsa0JBQWtCLEdBQUdELE9BQU8sQ0FBQ29CLGFBQVIsQ0FBc0Isd0NBQXRCLENBQXJCO0FBQ0FsQixNQUFBQSxjQUFjLEdBQUdGLE9BQU8sQ0FBQ29CLGFBQVIsQ0FBc0Isb0NBQXRCLENBQWpCO0FBQ0FoQixNQUFBQSxZQUFZLEdBQUdKLE9BQU8sQ0FBQ29CLGFBQVIsQ0FBc0Isa0NBQXRCLENBQWYsQ0FYTyxDQWFQOztBQUNBZixNQUFBQSxZQUFZLEdBQUcsSUFBSWdCLFFBQUosQ0FBYXJCLE9BQWIsQ0FBZixDQWRPLENBZ0JQOztBQUNBSyxNQUFBQSxZQUFZLENBQUNpQixFQUFiLENBQWdCLG1CQUFoQixFQUFxQ2hCLFFBQXJDLEVBakJPLENBbUJQOztBQUNBRCxNQUFBQSxZQUFZLENBQUNpQixFQUFiLENBQWdCLGlCQUFoQixFQUFtQ0wsS0FBbkM7QUFDVDtBQXRCSyxHQUFQO0FBd0JBLENBcEV1QixFQUF4QixDLENBc0VBOzs7QUFDQU4sTUFBTSxDQUFDWSxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDeEIsRUFBQUEsaUJBQWlCLENBQUNtQixJQUFsQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9tb2RhbHMvdXNlcnMtc2VhcmNoLmpzPzY5NjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVE1vZGFsVXNlclNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzXG4gICAgdmFyIGVsZW1lbnQ7XG4gICAgdmFyIHN1Z2dlc3Rpb25zRWxlbWVudDtcbiAgICB2YXIgcmVzdWx0c0VsZW1lbnQ7XG4gICAgdmFyIHdyYXBwZXJFbGVtZW50O1xuICAgIHZhciBlbXB0eUVsZW1lbnQ7XG4gICAgdmFyIHNlYXJjaE9iamVjdDtcblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIHByb2Nlc3NzID0gZnVuY3Rpb24oc2VhcmNoKSB7XG4gICAgICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBudW1iZXIgPSBLVFV0aWwuZ2V0UmFuZG9tSW50KDEsIDMpO1xuXG4gICAgICAgICAgICAvLyBIaWRlIHJlY2VudGx5IHZpZXdlZFxuICAgICAgICAgICAgc3VnZ2VzdGlvbnNFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAzKSB7XG4gICAgICAgICAgICAgICAgLy8gSGlkZSByZXN1bHRzXG4gICAgICAgICAgICAgICAgcmVzdWx0c0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgLy8gU2hvdyBlbXB0eSBtZXNzYWdlIFxuICAgICAgICAgICAgICAgIGVtcHR5RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU2hvdyByZXN1bHRzXG4gICAgICAgICAgICAgICAgcmVzdWx0c0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgLy8gSGlkZSBlbXB0eSBtZXNzYWdlIFxuICAgICAgICAgICAgICAgIGVtcHR5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gQ29tcGxldGUgc2VhcmNoXG4gICAgICAgICAgICBzZWFyY2guY29tcGxldGUoKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgdmFyIGNsZWFyID0gZnVuY3Rpb24oc2VhcmNoKSB7XG4gICAgICAgIC8vIFNob3cgcmVjZW50bHkgdmlld2VkXG4gICAgICAgIHN1Z2dlc3Rpb25zRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgLy8gSGlkZSByZXN1bHRzXG4gICAgICAgIHJlc3VsdHNFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAvLyBIaWRlIGVtcHR5IG1lc3NhZ2UgXG4gICAgICAgIGVtcHR5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICB9ICAgIFxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcblx0cmV0dXJuIHtcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIEVsZW1lbnRzXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X21vZGFsX3VzZXJzX3NlYXJjaF9oYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXNlYXJjaC1lbGVtZW50PVwid3JhcHBlclwiXScpO1xuICAgICAgICAgICAgc3VnZ2VzdGlvbnNFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cInN1Z2dlc3Rpb25zXCJdJyk7XG4gICAgICAgICAgICByZXN1bHRzRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJyZXN1bHRzXCJdJyk7XG4gICAgICAgICAgICBlbXB0eUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXNlYXJjaC1lbGVtZW50PVwiZW1wdHlcIl0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBzZWFyY2ggaGFuZGxlclxuICAgICAgICAgICAgc2VhcmNoT2JqZWN0ID0gbmV3IEtUU2VhcmNoKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBTZWFyY2ggaGFuZGxlclxuICAgICAgICAgICAgc2VhcmNoT2JqZWN0Lm9uKCdrdC5zZWFyY2gucHJvY2VzcycsIHByb2Nlc3NzKTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgaGFuZGxlclxuICAgICAgICAgICAgc2VhcmNoT2JqZWN0Lm9uKCdrdC5zZWFyY2guY2xlYXInLCBjbGVhcik7XG5cdFx0fVxuXHR9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVE1vZGFsVXNlclNlYXJjaC5pbml0KCk7XG59KTsiXSwibmFtZXMiOlsiS1RNb2RhbFVzZXJTZWFyY2giLCJlbGVtZW50Iiwic3VnZ2VzdGlvbnNFbGVtZW50IiwicmVzdWx0c0VsZW1lbnQiLCJ3cmFwcGVyRWxlbWVudCIsImVtcHR5RWxlbWVudCIsInNlYXJjaE9iamVjdCIsInByb2Nlc3NzIiwic2VhcmNoIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJudW1iZXIiLCJLVFV0aWwiLCJnZXRSYW5kb21JbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb21wbGV0ZSIsImNsZWFyIiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIktUU2VhcmNoIiwib24iLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/modals/users-search.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/modals/users-search.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=users-search.js.map